import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Platform,
  PermissionsAndroid,
} from "react-native";
import styles from "./WeeksWeatherList.style";
import { WeatherListCard, Text, MainSlider } from "..";
import { useSelector } from "react-redux";
import Geolocation from "@react-native-community/geolocation";

const WeeksWeatherList = () => {
  const [data, setData] = useState([]);
  const [processing, setProcessing] = useState(false);
  const activeCity = useSelector((state) => state.activeCity.data);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [locationStatus, setLocationStatus] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentLongitude, currentLatitude]);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "ios") {
        getOneTimeLocation();
        // subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Access Required",
              message: "This App needs to Access your location",
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            // subscribeLocationLocation();
          } else {
            setLocationStatus("Permission Denied");
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {};
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus("Getting Location ...");
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus("You are Here");

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [activeCity]);

  const fetchData = () => {
    let url = null;

    if (activeCity) {
      url = `https://api.openweathermap.org/data/2.5/onecall?lat=${activeCity.latitude}&lon=${activeCity.longitude}&exclude=hourly,minutely&appid=7dd75d455dd327bf2afeca855954ab50`;
    } else if (currentLatitude && currentLongitude) {
      url = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentLatitude}&lon=${currentLongitude}&exclude=hourly,minutely&appid=7dd75d455dd327bf2afeca855954ab50`;
    } else {
      return false;
    }

    setProcessing(true);
    fetch(url)
      .then((res) => res.json())
      .then((responseJson) => {
        setData(responseJson.daily);
      })
      .finally((fin) => setProcessing(false));
  };

  return (
    <FlatList
      ListHeaderComponent={() => {
        return (
          <View style={styles.headerContainer}>
            <MainSlider />
            <Text style={styles.titleText}>Next week</Text>
            {processing && <ActivityIndicator size={23} color="#fff" />}
          </View>
        );
      }}
      data={data}
      renderItem={({ item }) => <WeatherListCard weather={item} />}
      keyExtractor={(item) => item.dt}
      style={styles.container}
    />
  );
};

export default WeeksWeatherList;

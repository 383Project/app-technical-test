import React, { useEffect } from "react";
import { Alert, View, Text, TouchableOpacity } from "react-native";
import styles from "./MainSlider.style";
import { useSelector, useDispatch } from "react-redux";
import { FavouriteCities } from "./../";
import { STORAGE } from "../../utility";
import { rd_addFavouriteCity } from "./../../redux/favouriteCitiesSlice";

const MainSlider = () => {
  const dispatch = useDispatch();
  const activeCity = useSelector((state) => state.activeCity.data);
  const favouriteCities = useSelector((state) => state.favouriteCities.data);

  useEffect(() => {
    // STORAGE.remove('favouriteCities');
    STORAGE.loadObject("favouriteCities").then(
      (fct) => fct && dispatch(rd_addFavouriteCity(fct))
    );
  }, []);

  const onSave = () => {
    let newFavCities = [...favouriteCities];
    if (favouriteCities) {
      newFavCities.unshift(activeCity);
    } else {
      newFavCities = [activeCity];
    }

    STORAGE.saveObject("favouriteCities", newFavCities);
    dispatch(rd_addFavouriteCity(newFavCities));

    Alert.alert("Success", "City added to favourite succesfully");
  };

  return (
    <View style={styles.main}>
      {/* <View style={styles.floatingIcon}>
        <Ionicons size={40} color="#e3bf3a" name="partly-sunny-sharp" />
      </View> */}
      <View style={styles.container}>
        {/* <View style={styles.headerContainer}>
          <Text style={styles.title}>10 mins ago</Text>
        </View> */}
        <View style={styles.bodyContainer}>
          {/* <Text style={styles.subTitle}>
            Dangerous sun! Take care of yourself and take advantage of UV
            protection
          </Text> */}
        </View>

        {favouriteCities && <FavouriteCities />}

        {activeCity && (
          <TouchableOpacity onPress={onSave} style={styles.saveBtn}>
            <Text style={styles.saveText}>Save city</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MainSlider;

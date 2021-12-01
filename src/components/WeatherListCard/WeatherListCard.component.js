import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./WeatherListCard.style";
import moment from "moment";
import { Actions } from "react-native-router-flux";

const WeatherListCard = ({ weather }) => {
  const onPress = () => Actions.weatherDay({ weather: weather });

  return (
    <TouchableOpacity onPress={onPress} style={[styles.row, styles.container]}>
      <View style={[styles.col3, styles.jCenter]}>
        <Text style={styles.primaryText}>
          {moment.unix(weather.dt).format("ddd")}
        </Text>
      </View>
      <View style={[styles.col3, styles.jCenter, styles.aCenter]}>
        <Text style={styles.primaryText}>{weather.temp.day} °</Text>
      </View>
      <View style={[styles.col2, styles.jCenter, styles.aCenter]}>
        <Text style={[styles.secondaryText]}>{weather.weather[0].main}</Text>
      </View>
      <View style={[styles.col2, { alignItems: "flex-end" }]}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
          }}
          style={styles.imageIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default WeatherListCard;

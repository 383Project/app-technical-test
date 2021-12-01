import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StatusBar, ScrollView, Image } from "react-native";
import styles from "./WeatherDay.style";
import { PageHeader, Text } from "../../components";
import moment from "moment";

const TableRow = ({ label, value }) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.colContainer}>
        <Text style={[styles.text, styles.textLabel]}>{label || "Label"}</Text>
      </View>
      <View style={styles.sepContainer}>
        <Text style={[styles.text, styles.textValue]}>-</Text>
      </View>
      <View style={styles.colContainer}>
        <Text style={[styles.text, styles.textValue]}>{value || "Value"}</Text>
      </View>
    </View>
  );
};

/**
 * 
 * @param {"dt": 1638248400,
"sunrise": 1638232137,
"sunset": 1638268581,
"": 1638214440,
"moonset": 1638258960,
"moon_phase": 0.84,
"temp": {
"day": 270.35,
"min": 261.19,
"max": 271.36,
"night": 265.08,
"eve": 266.68,
"morn": 261.54
},
"feels_like": {
"day": 263.35,
"night": 262.53,
"eve": 259.89,
"morn": 258.25
},
"pressure": 1016,
"humidity": 12,
"dew_point": 244.69,
"wind_speed": 11.4,
"wind_deg": 286,
"wind_gust": 24.45,
"weather": [
{
"id": 800,
"main": "Clear",
"description": "clear sky",
"icon": "01d"
}
],
"clouds": 6,
"pop": 0,
"uvi": 4.24} props 
 * @returns 
 */

const WeatherDay = (props) => {
  let { weather } = props;
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#232634" barStyle="light-content" />
      <PageHeader title={moment.unix(weather.dt).format("dddd LL")} backArrow />

      <ScrollView style={styles.container}>
        <View style={styles.headContainer}>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
            }}
            style={styles.imageIcon}
          />
          <Text style={styles.title}>
            {weather.weather[0].main + " : " + weather.weather[0].description}
          </Text>
        </View>
        <TableRow
          label="Sunrise"
          value={moment.unix(weather.sunrise).format("hh : mm A")}
        />
        <TableRow
          label="Sunset"
          value={moment.unix(weather.sunset).format("hh : mm A")}
        />
        <TableRow
          label="Moonrise"
          value={moment.unix(weather.moonrise).format("hh : mm A")}
        />
        <View style={styles.lineSeparator}></View>
        <TableRow label="Days temp" value={weather.temp.day + " °"} />
        <TableRow label="Night temp" value={weather.temp.night + " °"} />
        <TableRow label="Evening temp" value={weather.temp.eve + " °"} />
        <TableRow label="Morning temp" value={weather.temp.morn + " °"} />
        <View style={styles.lineSeparator}></View>
        <TableRow label="Pressure" value={weather.pressure} />
        <TableRow label="Humidity" value={weather.humidity} />
        <TableRow label="Dew_point" value={weather.dew_point} />
        <TableRow label="Wind speed" value={weather.wind_speed} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WeatherDay;

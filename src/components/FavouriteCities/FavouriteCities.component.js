import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "..";
import styles from "./FavouriteCities.style";
import { useSelector, useDispatch } from "react-redux";
import Feather from "react-native-vector-icons/Feather";
import { rd_removeFavouriteCity } from "./../../redux/favouriteCitiesSlice";

const FavouriteCities = () => {
  const dispatch = useDispatch();
  const favouriteCities = useSelector((state) => state.favouriteCities.data);

  const removeFavCity = (city) => {
    dispatch(rd_removeFavouriteCity(city));
  };

  return (
    <View horizontal style={styles.container}>
      {favouriteCities.map((city, key) => {
        return (
          <TouchableOpacity key={key} style={styles.itemContainer}>
            <Text style={styles.itemText}>{city.city}</Text>
            <TouchableOpacity
              onPress={() => removeFavCity(city)}
              style={styles.clearBtn}
            >
              <Feather name="x" color="#ccc" size={12} />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FavouriteCities;

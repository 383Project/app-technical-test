import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import styles from "./Home.style";
import { WeeksWeatherList, PageHeader } from "../../components";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { CITIES } from "../../data";
import { useSelector, useDispatch } from "react-redux";
import { rd_updateActiveCity } from "./../../redux/activeCitySlice";

const SelectCity = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const activeCity = useSelector((state) => state.activeCity)


  useEffect(() => {
    const allCities = CITIES.map(city => ({
      id: city,
      title: city.city,
    }));
    setCities(allCities);
  }, []);

  useEffect(() => {
    dispatch(rd_updateActiveCity(selectedItem ? selectedItem.id : null));
  }, [selectedItem]);

  return (
    <View>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        onSelectItem={setSelectedItem}
        textInputProps={{
          placeholder: "Search for city",
          style: styles.searchInput,
        }}
        dataSet={cities}
        rightButtonsContainerStyle={styles.rightButtonsContainerStyle}
      />
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#232634" barStyle="light-content" />
      <PageHeader CenterComponent={<SelectCity />} dbackArrow />
      <View style={styles.container}>
        <WeeksWeatherList />
      </View>
    </SafeAreaView>
  );
};

export default Home;

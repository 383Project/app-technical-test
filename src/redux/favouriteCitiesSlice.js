import { Alert } from "react-native";
import { createSlice } from "@reduxjs/toolkit";
import { STORAGE } from "../utility";

const initialState = { data: [] };

export const favouriteCitiesSlice = createSlice({
  name: "favouriteCities",
  initialState,
  reducers: {
    rd_addFavouriteCity: (state, action) => {
      state.data = action.payload;
    },
    rd_removeFavouriteCity: (state, action) => {
      let oldFavouriteCities = state.data;
      let removableCity = action.payload;

      let cleanedUpCities = oldFavouriteCities.filter(city => city.id != removableCity.id)
      
      state.data = cleanedUpCities;
      STORAGE.saveObject('favouriteCities', cleanedUpCities);
      Alert.alert('Update succesful', removableCity.city + ' cleared from favourites succesfully');
    },
  },
});

// Action creators are generated for each case reducer function
export const { rd_addFavouriteCity, rd_removeFavouriteCity } = favouriteCitiesSlice.actions;

export default favouriteCitiesSlice.reducer;

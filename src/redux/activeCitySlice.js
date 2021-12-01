import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: null };

export const activeCitySlice = createSlice({
  name: "activeCity",
  initialState,
  reducers: {
    rd_updateActiveCity: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { rd_updateActiveCity } = activeCitySlice.actions;

export default activeCitySlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import activeCitySlice  from './activeCitySlice'
import favouriteCitiesSlice from './favouriteCitiesSlice'

export const store = configureStore({
  reducer: {
    activeCity: activeCitySlice, 
    favouriteCities: favouriteCitiesSlice,
  },
})
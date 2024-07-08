import { createSlice } from '@reduxjs/toolkit';
import {
  AREA_UNITS,
  CURRENCY_UNITS,
  PROPERTY_TABS_DATA,
  PROPERTY_TYPES,
  CITIES_NAME,
  AMENITIES_NAME,
} from '@/src/constants/Projects/projectsFilter';

const initialState = {
  AREA_UNITS,
  CURRENCY_UNITS,
  PROPERTY_TYPES,
  PROPERTY_TABS_DATA,
  CITIES_NAME,
  AMENITIES_NAME,
};

const globalUnitsSlice = createSlice({
  name: 'globalUnits',
  initialState,
  reducers: {},
});

export default globalUnitsSlice.reducer;

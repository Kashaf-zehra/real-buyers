import { PROPERTIES_AMENITIES } from '@/src/constants/finalConstants/Properties';
import { createSlice } from '@reduxjs/toolkit';

const propertyAmenities = PROPERTIES_AMENITIES;

const initialState = { propertyAmenities };

const propertiesAmenitiesSlice = createSlice({
  name: 'propertyAmenities',
  initialState,
  reducers: {},
});

export default propertiesAmenitiesSlice.reducer;

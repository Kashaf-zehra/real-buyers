import { PROPERTIES_CATEGORIES } from '@/src/constants/finalConstants/Properties';
import { createSlice } from '@reduxjs/toolkit';

const propertyCategories = PROPERTIES_CATEGORIES;

const initialState = { propertyCategories };

const propertiesCategoriesSlice = createSlice({
  name: 'propertyCategories',
  initialState,
  reducers: {},
});

export default propertiesCategoriesSlice.reducer;

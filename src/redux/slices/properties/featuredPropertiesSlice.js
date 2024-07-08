import { createSlice } from '@reduxjs/toolkit';

const featuredProperties = {};

const initialState = { featuredProperties };

const featuredPropertiesSlice = createSlice({
  name: 'featuredProperties',
  initialState,
  reducers: {},
});

export default featuredPropertiesSlice.reducer;

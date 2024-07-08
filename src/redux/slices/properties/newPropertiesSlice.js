import { createSlice } from '@reduxjs/toolkit';

const newPrpoertiesSlice = {};

const initialState = { newPrpoertiesSlice };

const newPropertiesSlice = createSlice({
  name: 'newPrpoerties',
  initialState,
  reducers: {},
});

export default newPropertiesSlice.reducer;

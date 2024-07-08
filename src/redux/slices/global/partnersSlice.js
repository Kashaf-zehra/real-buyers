import { PARTNERS } from '@/src/constants/Home';
import { createSlice } from '@reduxjs/toolkit';

const partners = { PARTNERS };

const initialState = { partners };
const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {},
});

export default partnersSlice.reducer;

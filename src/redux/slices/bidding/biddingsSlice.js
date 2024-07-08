import { BIDDINGS_DATA } from '@/src/constants/finalConstants/Biddings';
import { createSlice } from '@reduxjs/toolkit';

const biddings = BIDDINGS_DATA;

const initialState = { biddings };

// function generateUniqueId(biddings) {
//   let newId = (biddings.length + 1).toString();
//   while (biddings.some((bid) => bid.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const biddingsSlice = createSlice({
  name: 'biddings',
  initialState,
  reducers: {},
});

export default biddingsSlice.reducer;

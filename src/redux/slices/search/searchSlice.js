import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: null,
  },
  reducers: {
    handleSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { handleSearch } = searchSlice.actions;
export default searchSlice.reducer;

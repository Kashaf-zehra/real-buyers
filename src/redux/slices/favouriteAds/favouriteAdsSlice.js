import { createSlice } from '@reduxjs/toolkit';

const favoriteAdsSlice = createSlice({
  name: 'favoriteAds',
  initialState: [],
  reducers: {
    //save ads
    handleSaveAds: (state, action) => {
      const { adId } = action.payload;
      const foundObject = state?.find((obj) => obj?.adId === adId);
      if (foundObject) {
        null;
      } else {
        state?.push(action.payload);
      }
    },
  },
});

export const { handleSaveAds } = favoriteAdsSlice.actions;
export default favoriteAdsSlice.reducer;

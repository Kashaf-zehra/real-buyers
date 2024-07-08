import { createSlice } from '@reduxjs/toolkit';

const agentDraftSlice = createSlice({
  name: 'agentDraft',
  initialState: {
    draft: [
      {
        property_id: 602,
        user_id: 301,
        status: 'submited',
        other_features: [],
        images: [],
        videos: [],
        title: '456456',
        location: '',
        description: '456456456',
        area: 455,
        amount: 456,
        areaUnit: 'sq.ft',
        amountCurrency: 'CAD',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        purpose: 'Sell',
        propertyCategory: 'House',
        propertyType: 'House',
        instalmentAvailable: false,
        readyPossession: false,
      },
    ],
  },
  reducers: {
    handleSubmitDraft: (state, action) => {
      state?.draft?.push(action.payload);
    },
  },
});

export const { handleSubmitDraft } = agentDraftSlice.actions;
export default agentDraftSlice.reducer;

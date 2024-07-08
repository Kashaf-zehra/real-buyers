import { createSlice } from '@reduxjs/toolkit';

const userAdsSlice = createSlice({
  name: 'userAdsSlice',
  initialState: {
    userPostings: [
      {
        property_id: 650,
        user_id: 21,
        status: 'Submited',
        created_at: '2024-01-22T16:43:08.660Z',
        other_features: [],
        title: 'NEED 4 BEDROOM APARTMENT',
        location: '',
        description:
          'We are planning to buy a new home in the month of dec, if someone knows about',
        area: 10,
        amount: 10,
        areaUnit: 'sq.ft',
        amountCurrency: 'GBP',
        city: 'Lahore',
        bedrooms: 1,
        connects: '',
        bathrooms: 1,
        parking: 1,
        purpose: 'Rent',
        propertyCategory: 'House',
        propertyType: 'Pent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
      {
        property_id: 670,
        user_id: 21,
        status: 'Submited',
        created_at: '2024-03-10T16:43:08.660Z',
        other_features: [],
        title: 'NEED 10 BEDROOM APARTMENT NEED 10 BEDROOM APARTMENT',
        location: '',
        description:
          'We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,,We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,,We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,,We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,, ',
        area: 10,
        amount: 10,
        areaUnit: 'sq.ft',
        amountCurrency: 'GBP',
        city: 'Lahore',
        bedrooms: 1,
        connects: '',
        bathrooms: 1,
        parking: 1,
        purpose: 'Rent',
        propertyCategory: 'House',
        propertyType: 'Pent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
      {
        property_id: 640,
        user_id: 21,
        status: 'submited',
        created_at: '2024-03-22T16:43:08.660Z',
        other_features: [],
        title: 'NEED 10 BEDROOM APARTMENT NEED 10 BEDROOM APARTMENT',
        location: '',
        description:
          'We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,, ',
        area: 10,
        amount: 100000,
        areaUnit: 'sq.ft',
        amountCurrency: 'GBP',
        city: 'Karachi',
        bedrooms: 1,
        connects: '',
        bathrooms: 1,
        parking: 1,
        purpose: 'Rent',
        proportyCategory: 'House',
        propertyType: 'Pent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
    ],
    draft: [
      {
        property_id: 650,
        user_id: 21,
        status: 'draft',
        created_at: '',
        other_features: [],
        title: 'One',
        location: '',
        description:
          'We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,,',
        area: 10,
        amount: 10,
        areaUnit: 'sq.ft',
        amountCurrency: 'GBP',
        city: 'Karachi',
        bedrooms: 1,
        connects: '',
        bathrooms: 1,
        parking: 1,
        purpose: 'Rent',
        propertyCategory: 'House',
        propertyType: 'Pent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
    ],
    trash: [],
    active: [],
    // archive: [],
    rejectedProposals: [],
    connectedProposals: [],
  },
  reducers: {
    handleSumitUserAds: (state, action) => {
      const newAd = action.payload;
      const existingAdIndex = state?.userPostings?.findIndex(
        (ad) => ad?.property_id === newAd?.property_id
      );
      if (existingAdIndex !== -1) {
        state.userPostings[existingAdIndex] = newAd;
      } else {
        state?.userPostings?.push(newAd);
      }
    },

    handleSubmitDraft: (state, action) => {
      const newDraft = action.payload;
      const existingDraftIndex = state?.draft?.findIndex(
        (draft) => draft?.property_id === newDraft?.property_id
      );
      if (existingDraftIndex !== -1) {
        state.draft[existingDraftIndex] = newDraft;
      } else {
        state?.draft?.push(newDraft);
      }
    },
    handleSubmitTrash: (state, action) => {
      const { property_id, currentTab } = action.payload;
      // all
      const postingsIndex = state?.userPostings?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (postingsIndex !== -1 && currentTab == 'All') {
        const postings_trash = state?.userPostings?.splice(postingsIndex, 1)[0];
        state.trash.push(postings_trash);
      }
      // Active
      const activeIndex = state?.active?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (activeIndex !== -1 && currentTab == 'Active') {
        const active_trash = state?.active?.splice(activeIndex, 1)[0];
        state?.trash?.push(active_trash);
      }
      // Connected proposals
      const connectedProposalIndex = state?.connectedProposals?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (connectedProposalIndex !== -1 && currentTab == 'ActiveProposal') {
        const connectedProposal_trash = state?.connectedProposals?.splice(
          connectedProposalIndex,
          1
        )[0];
        state?.trash?.push(connectedProposal_trash);
      }
      // draft
      const draftIndex = state?.draft?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (draftIndex !== -1 && currentTab == 'Draft') {
        const draft_trash = state?.draft?.splice(draftIndex, 1)[0];
        state?.trash?.push(draft_trash);
      }
    },
  },
});

export const {
  handleSumitUserAds,
  handleRejectProposal,
  handleConnectProposal,
  handleSubmitDraft,
  handleSubmitTrash,
} = userAdsSlice.actions;
export default userAdsSlice.reducer;

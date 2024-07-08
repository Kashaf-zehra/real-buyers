import { createSlice } from '@reduxjs/toolkit';

const proposalsSlice = createSlice({
  name: 'proposals',
  initialState: [
    {
      property_id: 650,
      agent_id: 21,
      proposal_id: 2,
      status: 'Submited',
      title: 'What is Lorem Ipsum?',
      location: '',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      area: 120,
      amount: 120,
      areaUnit: 'sq.ft',
      amountCurrency: 'GBP',
      city: 'Karachi',
      bedrooms: 0,
      connects: '',
      bathrooms: 0,
      parking: 0,
      other_features: [],
      purpose: 'Rent',
      propertyCategory: 'House',
      propertyType: 'Pent House',
      instalmentAvailable: true,
      readyPossession: true,
      images: [],
      videos: [],
    },
    {
      property_id: 650,
      agent_id: 20,
      proposal_id: 5,
      status: 'Rejected',
      title: 'What is Lorem Ipsum?',
      location: '',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      area: 120,
      amount: 120,
      areaUnit: 'sq.ft',
      amountCurrency: 'GBP',
      city: 'Karachi',
      bedrooms: 0,
      connects: '',
      bathrooms: 0,
      parking: 0,
      other_features: [],
      purpose: 'Rent',
      propertyCategory: 'House',
      propertyType: 'Pent House',
      instalmentAvailable: true,
      readyPossession: true,
      images: [],
      videos: [],
    },
    {
      property_id: 670,
      agent_id: 21,
      proposal_id: 9,
      status: 'Connected',
      title: 'What is Lorem Ipsum?',
      location: '',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy',
      area: 120,
      amount: 120,
      areaUnit: 'sq.ft',
      amountCurrency: 'GBP',
      city: 'Karachi',
      bedrooms: 0,
      connects: '',
      bathrooms: 0,
      parking: 0,
      other_features: [],
      purpose: 'Rent',
      propertyCategory: 'House',
      propertyType: 'Pent House',
      instalmentAvailable: true,
      readyPossession: true,
      images: [],
      videos: [],
    },
    {
      property_id: 640,
      agent_id: 21,
      proposal_id: 3,
      status: 'Submited',
      title: 'What is Lorem Ipsum?',
      location: '',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy',
      area: 120,
      amount: 120,
      areaUnit: 'sq.ft',
      amountCurrency: 'GBP',
      city: 'Karachi',
      bedrooms: 0,
      connects: '',
      bathrooms: 0,
      parking: 0,
      other_features: [],
      purpose: 'Rent',
      propertyCategory: 'House',
      propertyType: 'Pent House',
      instalmentAvailable: true,
      readyPossession: true,
      images: [],
      videos: [],
    },
  ],
  reducers: {
    addProposal: (state, action) => {
      const { property_id } = action.payload;
      const foundObject = state?.find(
        (obj) => obj?.property_id === property_id
      );
      if (foundObject) {
        null;
      } else {
        state?.push(action.payload);
      }
    },

    handleConnectProposal: (state, action) => {
      const { proposal_id, property_id } = action.payload;
      const proposalIndex = state.findIndex(
        (proposal) => proposal?.proposal_id === proposal_id
      );
      const propertyIndex = state?.findIndex(
        (property) => property?.property_id === property_id
      );
      if (proposalIndex !== -1 && propertyIndex !== -1) {
        state[proposalIndex].status = 'Connected';
        state?.forEach((proposal) => {
          if (
            proposal?.property_id === property_id &&
            proposal?.proposal_id !== proposal_id
          ) {
            proposal.status = 'Archive';
          }
        });
      }
    },

    handleRejectedProposal: (state, action) => {
      const { proposal_id } = action.payload;
      const proposal_index = state?.findIndex(
        (proposal) => proposal?.proposal_id === proposal_id
      );
      if (proposal_index !== -1) {
        state[proposal_index].status = 'Rejected';
      }
    },
  },
});

export const {
  addProposal,
  handleConnectProposal,
  handleRejectedProposal,
  updateProposal,
  deleteProposal,
  selectProposal,
} = proposalsSlice.actions;
export default proposalsSlice.reducer;

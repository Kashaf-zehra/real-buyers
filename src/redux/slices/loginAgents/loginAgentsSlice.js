import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 20,
    profileImage: '/images/profile.png',
    firstName: 'Arman',
    lastName: 'Khan',
    status: 'Active',
    email: 'arman@esparkconsultants.com',
    landline: 4523100000,
    mobile: '+923192013292',
    whatsapp: '+923192013292',
    isVerified: true,
    userType: 'agent',
    city: 'Karachi',
    area: 'Gulistn e Johar',
    address: '301/A, Blossom Trade Center',
    country: 'Pakistan',
  },
  {
    id: 10,
    profileImage: '/images/profile.png',
    firstName: 'Bilal',
    lastName: 'Ahmed Khan',
    status: 'Active',
    email: 'arman@esparkconsultants.com',
    landline: 4523100000,
    mobile: '+923192013292',
    whatsapp: '+923192013292',
    isVerified: true,
    userType: 'agent',
    city: 'Karachi',
    area: 'Gulistn e Johar',
    address: '301/A, Blossom Trade Center',
    country: 'Pakistan',
  },
  {
    id: 12,
    profileImage: '/images/profile.png',
    firstName: 'Syed Ali',
    lastName: 'Naqi Hasni',
    status: 'Active',
    email: 'arman@esparkconsultants.com',
    landline: 4523100000,
    mobile: '+923192013292',
    whatsapp: '+923192013292',
    isVerified: true,
    userType: 'agent',
    city: 'Karachi',
    area: 'Gulistn e Johar',
    address: '301/A, Blossom Trade Center',
    country: 'Pakistan',
  },
  {
    id: 15,
    profileImage: '/images/profile.png',
    firstName: 'Saad',
    lastName: 'Zafar',
    status: 'Active',
    email: 'arman@esparkconsultants.com',
    landline: 4523100000,
    mobile: '+923192013292',
    whatsapp: '+923192013292',
    isVerified: true,
    userType: 'agent',
    city: 'Karachi',
    area: 'Gulistn e Johar',
    address: '301/A, Blossom Trade Center',
    country: 'Pakistan',
  },
];

const loginAgentsSlice = createSlice({
  name: 'loginAgents',
  initialState,
  reducers: {
    handleEdit: (state, action) => {
      const updatedAgent = action.payload;
      const agentIndex = state.findIndex(
        (agent) => agent.id === updatedAgent.id
      );
      if (agentIndex !== -1) {
        state[agentIndex] = { ...state[agentIndex], ...updatedAgent };
      }
    },
    handleImageChange: (state, action) => {
      state[0].profileImage = action.payload;
    },
  },
});

export const { handleEdit, handleImageChange } = loginAgentsSlice.actions;
export default loginAgentsSlice.reducer;

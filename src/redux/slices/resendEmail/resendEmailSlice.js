import { createSlice } from '@reduxjs/toolkit';

const resendEmailSlice = createSlice({
  name: 'resendEmail',
  initialState: {
    email: '',
  },
  reducers: {
    updateReceivedEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { updateReceivedEmail } = resendEmailSlice.actions;
export const selectReceivedEmail = (state) => state.resendEmail.received.email;
export default resendEmailSlice.reducer;

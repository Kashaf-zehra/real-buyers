import { VERIFICATION_OTP } from '@/src/constants/Verfication_Modal';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  verificationCode: {
    code_one: '',
    code_two: '',
    code_three: '',
    code_four: '',
  },
};
const verificationSlice = createSlice({
  name: VERIFICATION_OTP.name,
  initialState,
  reducers: {
    saveVerificationCode: (state, action) => {
      state.verificationCode = { ...action.payload };
    },
  },
});

export const { saveVerificationCode } = verificationSlice.actions;
export default verificationSlice.reducer;

import { LOGIN_FORM } from '@/src/constants/Login';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFormData: '',
  signupFormData: '',
  resetFormData: '',
  loggedInState: false,
  user: null,
};
const authSlice = createSlice({
  name: LOGIN_FORM.auth,
  initialState,
  reducers: {
    saveLoginData: (state, action) => {
      state.loginFormData = { ...action.payload };
    },
    saveSignupData: (state, action) => {
      state.signupFormData = { ...action.payload };
    },
    saveResetData: (state, action) => {
      state.resetFormData = { ...action.payload };
    },
    setLoggedIn: (state, action) => {
      state.loggedInState = true;
      state.user = action.payload.user;
    },
    setLoggedOut: (state) => {
      state.loggedInState = false;
      state.user = null;
    },
  },
});

export const {
  saveLoginData,
  saveSignupData,
  saveResetData,
  setLoggedIn,
  setLoggedOut,
} = authSlice.actions;
export default authSlice.reducer;

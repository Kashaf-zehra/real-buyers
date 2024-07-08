import { SIGN_IN } from '@/src/constants/SignIn';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const signinSlice = createSlice({
  name: { SIGN_IN },
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpenModal } = signinSlice.actions;

export default signinSlice.reducer;

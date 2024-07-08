import { USERS_DATA } from '@/src/constants/user';
import { createSlice } from '@reduxjs/toolkit';
const userdata = USERS_DATA;
const users = {
  userdata,
};

const initialState = { users };

const usersSlice = createSlice({
  name: USERS_DATA.users,
  initialState,
  reducers: {
    savePreferenceData: (state, action) => {
      const { emailNotification, areaUnit, currencyUnit } = action.payload;
      state.users.userdata.areaUnit = areaUnit;
      state.users.userdata.currencyUnit = currencyUnit;
      state.users.userdata.emailNotification = emailNotification;
    },
  },
});

export const {
  adduser,
  updateuser,
  deleteuser,
  selectuser,
  savePreferenceData,
} = usersSlice.actions;
export default usersSlice.reducer;

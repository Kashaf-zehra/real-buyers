import { createSlice } from '@reduxjs/toolkit';

const userDraftSlice = createSlice({
  name: 'userDraft',
  initialState: {
    drafts: [],
  },
  reducers: {
    handleUserDraft: (state, action) => {
      state.drafts.push(action.payload);
    },
  },
});

export const { handleUserDraft } = userDraftSlice.actions;
export default userDraftSlice.reducer;

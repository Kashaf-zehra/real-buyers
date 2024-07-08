import { createSlice } from '@reduxjs/toolkit';

const chats = {};

const initialState = { chats };

// function generateUniqueId(chats) {
//   let newId = (chats.length + 1).toString();
//   while (chats.some((chat) => chat.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
});

export default chatsSlice.reducer;

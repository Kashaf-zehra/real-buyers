import { createSlice } from '@reduxjs/toolkit';

const blogs = {};

const initialState = { blogs };

// function generateUniqueId(blogs) {
//   let newId = (blogs.length + 1).toString();
//   while (blogs.some((blog) => blog.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
});

export default blogsSlice.reducer;

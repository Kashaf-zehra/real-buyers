import { createSlice } from '@reduxjs/toolkit';

const projects = {};

const initialState = { projects };

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;

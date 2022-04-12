import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggleDark: false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.toggleDark = !state.toggleDark;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;

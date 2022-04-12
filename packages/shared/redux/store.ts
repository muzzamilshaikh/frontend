import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './demoSlice';
import darkModeSlice from './darkModeSlice';

export const store = configureStore({
  reducer: { counter: counterReducer, darkMode: darkModeSlice },
});

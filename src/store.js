import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './redux/formDataSlice';
import platformReducer from './redux/platformSlice'

const store = configureStore({
  reducer: {
    profile: profileReducer,
    platform: platformReducer,
  }
});

export default store;

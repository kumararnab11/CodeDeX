import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './redux/formDataSlice';
import platformReducer from './redux/platformSlice'
import resumeReducer from './redux/resumeDataSlice'

const store = configureStore({
  reducer: {
    profile: profileReducer,
    platform: platformReducer,
    resume:resumeReducer
  }
});

export default store;

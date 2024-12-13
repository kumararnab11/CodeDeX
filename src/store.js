import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './redux/formDataSlice';
import platformReducer from './redux/platformSlice'
import resumeReducer from './redux/resumeDataSlice'
import toggleReducer from './redux/toggleSlice'
import avatarReducer from './redux/avatarSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    platform: platformReducer,
    resume:resumeReducer,
    toggle:toggleReducer,
    avatar:avatarReducer,
  }
});

export default store;

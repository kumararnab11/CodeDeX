import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage if it exists, or set default values
const savedProfile = JSON.parse(localStorage.getItem('profile')) || {
  location: '',
  institution: '',
  email: '',
  linkedin:'',
  twitter: '',
  language: '',
  github: '',
  nme:'',
  time:''
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: savedProfile,
  reducers: {
    // Update profile action
    updateProfile: (state, action) => {
      const updatedProfile = { ...state, ...action.payload };
      // Update localStorage with the new profile data
      localStorage.setItem('profile', JSON.stringify(updatedProfile));
      return updatedProfile;
    },
    // Reset profile action (optional)
    resetProfile: () => {
      const defaultProfile = {
        location: '',
        institution: '',
        email: '',
        linkedin:'',
        twitter: '',
        language: '',
        github: '',
        nme:'',
      };
      // Clear profile data in localStorage
      localStorage.setItem('profile', JSON.stringify(defaultProfile));
      return defaultProfile;
    }
  }
});

// Export actions for use in components
export const { updateProfile, resetProfile } = profileSlice.actions;

// Export reducer for use in the Redux store
export default profileSlice.reducer;

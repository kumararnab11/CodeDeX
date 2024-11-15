import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage if it exists, or set default values
const savedData = JSON.parse(localStorage.getItem('platform')) || {
  leetcode: {
    name:'Leetcode',
    numbers: 0,
    contests: 0,
    rating: 10
  },
  codeforces: {
    name:'CodeForces',
    numbers: 0,
    contests: 0,
    rating: 10
  },
  gfg: {
    numbers: 0,
    contests: 0,
    rating: 10
  },
  codechef: {
    numbers: 0,
    contests: 0,
    rating: 10
  },
  codingninja: {
    numbers: 0,
    contests: 0,
    rating: 10
  },
  atcoder: {
    numbers: 0,
    contests: 0,
    rating: 10
  }
};

const platformSlice = createSlice({
  name: 'platform',
  initialState: savedData,
  reducers: {
    // Update platform action
    updatePlatform: (state, action) => {
      const updatedData = { ...state, ...action.payload };
      // Update localStorage with the new platform data
      localStorage.setItem('platform', JSON.stringify(updatedData));
      return updatedData;
    },
  }
});

// Export actions for use in components
export const { updatePlatform } = platformSlice.actions;

// Export reducer for use in the Redux store
export default platformSlice.reducer;

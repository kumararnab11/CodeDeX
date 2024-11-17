import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Default Data
const defaultData = {
  leetcode: { name: 'Leetcode', username: 'N/A', questions: 0, rating: 10, points: '0' },
  gfg: { name: 'gfg', username: 'N/A', questions: '0', score: '0', instituterank: '0' },
  codeforces: { name: 'CodeForces', username: 'N/A', rating: '0', maxrating: '0', badge: 'N/A', maxBadge: 'N/A' },
  codechef: { name: 'CodeChef', username: 'N/A', rating: '0', maxrating: '0', badge: 'N/A', countryRank: '0' },
};

// Load saved data from localStorage or use default data
const savedData = (() => {
  try {
    const data = JSON.parse(localStorage.getItem('platform'));
    return data || defaultData;
  } catch {
    return defaultData;
  }
})();

// Async thunk to fetch data for all platforms
export const fetchPlatformData = createAsyncThunk('platform/fetchPlatformData', async () => {
  const updatedData = { ...savedData };

  const fetches = [];
  if (savedData.leetcode.username !== 'N/A') {
    fetches.push(
      axios.get(`/leetcode/${savedData.leetcode.username}`).then((res) => ({ key: 'leetcode', data: res.data }))
    );
  }
  if (savedData.gfg.username !== 'N/A') {
    fetches.push(
      axios.get(`/gfg/${savedData.gfg.username}`).then((res) => ({ key: 'gfg', data: res.data }))
    );
  }
  if (savedData.codeforces.username !== 'N/A') {
    fetches.push(
      axios.get(`https://codeforces.com/api/user.info?handles=${savedData.codeforces.username}`).then((res) => ({
        key: 'codeforces',
        data: res.data,
      }))
    );
  }
  if (savedData.codechef.username !== 'N/A') {
    fetches.push(
      axios.get(`https://codechef-api.vercel.app/handle/${savedData.codechef.username}`).then((res) => ({
        key: 'codechef',
        data: res.data,
      }))
    );
  }

  const responses = await Promise.allSettled(fetches);

  console.log('printing response')
  console.log(responses);

  responses.forEach((response) => {
    if (response.status === 'fulfilled') {
      const { key, data } = response.value;

      if (key === 'leetcode') {
        updatedData.leetcode = {
          ...updatedData.leetcode,
          rating: data.rating || updatedData.leetcode.rating,
        };
      } else if (key === 'gfg') {
        // Validate data.info exists
        const info = data?.info || {};
        updatedData.gfg = {
          ...updatedData.gfg,
          questions: info.totalProblemsSolved || updatedData.gfg.questions,
          score: info.codingScore || updatedData.gfg.score,
          instituterank: info.instituteRank || updatedData.gfg.instituterank,
        };
      } else if (key === 'codeforces') {
        updatedData.codeforces = {
          ...updatedData.codeforces,
          rating: data.result[0].rating || updatedData.codeforces.rating,
          maxrating: data.result[0].maxRating || updatedData.codeforces.maxrating,
          badge: data.result[0].rank || updatedData.codeforces.badge,
          maxBadge: data.result[0].maxRank || updatedData.codeforces.maxBadge,
        };
      } else if (key === 'codechef') {
        updatedData.codechef = {
          ...updatedData.codechef,
          rating: data.currentRating || updatedData.codechef.rating,
          maxrating: data.highestRating || updatedData.codechef.maxrating,
          badge: data.stars || updatedData.codechef.badge,
          countryRank: data.countryRank || updatedData.codechef.countryRank,
        };
      }
    } else {
      console.warn(`API fetch failed for ${response.reason?.config?.url || 'unknown'}`);
    }
  });

  // Save updated data to localStorage
  localStorage.setItem('platform', JSON.stringify(updatedData));

  return updatedData;
});

// Slice for platform data
const platformSlice = createSlice({
  name: 'platform',
  initialState: savedData,
  reducers: {
    updatePlatform: (state, action) => {
      const updatedData = { ...state, ...action.payload };
      localStorage.setItem('platform', JSON.stringify(updatedData));
      Object.assign(state, updatedData);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlatformData.pending, (state) => {
        state.loading = true; // Mutating draft state
      })
      .addCase(fetchPlatformData.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload); // Merging fetched data with current state
      })
      .addCase(fetchPlatformData.rejected, (state, action) => {
        state.loading = false;
        console.error('Fetch failed:', action.error.message);
      });
  },
});

// Export actions and reducer
export const { updatePlatform } = platformSlice.actions;
export default platformSlice.reducer;
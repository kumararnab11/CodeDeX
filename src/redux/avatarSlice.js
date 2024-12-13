import { createSlice } from '@reduxjs/toolkit';

const avatarData = localStorage.getItem('profile') || 1;

const avatarSlice =createSlice({
    name:'avatar',
    initialState: avatarData,
    reducers:
    {
        updateAvatar: (state, action) => {
            const updatedAvatar = action.payload;
            localStorage.setItem('avatar', updatedAvatar);
            return updatedAvatar;
          },
    }
})

export const { updateAvatar} = avatarSlice.actions;

export default avatarSlice.reducer;
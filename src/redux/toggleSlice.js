import { createSlice } from '@reduxjs/toolkit';

const data= JSON.parse(localStorage.getItem('toggle'))||
{
    leetcode: false,
    codeforces:false,
    codechef:false,
    gfg:false,
    achievement:false,
    workExp:false,
    projects:false,
    languages:false,
    skills:false,
    leadership:false
}

const toggleSlice=createSlice({
    name:'toggle',
    initialState:data,
    reducers:{
        updateToggle: (state, action) => {
            const updatedToggle = { ...state, ...action.payload };
            localStorage.setItem('toggle', JSON.stringify(updatedToggle));
            return updatedToggle;
          }
    }
  })

export const { updateToggle} = toggleSlice.actions;
export default toggleSlice.reducer;
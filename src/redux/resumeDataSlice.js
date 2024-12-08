import { createSlice } from '@reduxjs/toolkit';

const savedResume = JSON.parse(localStorage.getItem('resume')) || {
    hs:{
        scl:'',
        marks:'0',
        board:'',
    },
    sec:{
        scl:'',
        marks:'0',
        board:'',
    },
    clg:{
        scl:'',
        marks:'0',
        board:'',
    },
    achievements:[
        {
            desc:'',
            link:''
        }
    ],
    projects:[
        {
            head:'',
            desc:'',
            link:''
        }
    ],
    skills:[
        {
            skill:'',
            link:''
        }
    ]
  };


  const resumeDataSlice=createSlice({
    name:'resume',
    initialState:savedResume,
    reducers:{
        updateResume: (state, action) => {
            const updatedResume = { ...state, ...action.payload };
            localStorage.setItem('resume', JSON.stringify(updatedResume));
            return updatedResume;
          }
    }
  })

export const { updateResume} = resumeDataSlice.actions;
export default resumeDataSlice.reducer;
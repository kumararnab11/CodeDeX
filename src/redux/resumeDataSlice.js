import { createSlice } from '@reduxjs/toolkit';

const savedResume = JSON.parse(localStorage.getItem('resume')) || {
    hs:{
        scl:'',
        marks:'0',
        board:'',
        from:'',
        till:'',
        major:''
    },
    sec:{
        scl:'',
        marks:'0',
        board:'',
        from:'',
        till:'',
        major:''
    },
    clg:{
        scl:'',
        marks:'0',
        board:'',
        from:'',
        till:'',
        major:''
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
            link:'',
            git:'',
            technologies:''
        }
    ],
    skills:[
        {
            skill:'',
            link:''
        }
    ],
    workExp:[
        {
            companyName: "",
            role: "", 
            jobDesc: "", 
            from: "", 
            till: ""
        }
    ],
    leadership:[
        {
            quality: "",
            link: ""
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
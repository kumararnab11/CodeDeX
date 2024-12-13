import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import Platforms from './Platforms'

function Home() {
  const [width,setWidth]=useState(window.innerWidth>800);
  useEffect(
    ()=>{
      const handleResize=()=>{setWidth(window.innerWidth>800)}
      window.addEventListener('resize',handleResize);
      return window.removeEventListener('resize',handleResize)
    },[]
  )
  return (
    <div>
      <div className={width?'flex flex-row justify-start flex-wrap':'flex flex-row justify-center flex-wrap'}>
        <Profile/>
        <Platforms/>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import Profile from './Profile'
import Platforms from './Platforms'

function Home() {
  return (
    <div>
      <div className='flex flex-row justify-items-start'>
        <Profile/>
        <Platforms/>
      </div>
    </div>
  )
}

export default Home

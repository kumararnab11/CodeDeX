import React from 'react'
import { Button } from './components/ui/button'

function Resume() {
  return (
    <div className='flex justify-around'>
      <Button className='bg-orange-500 hover:bg-orange-700'>Edit Resume</Button>
      <Button className='bg-orange-500 hover:bg-orange-700'>View Resume</Button>
      <Button className='bg-orange-500 hover:bg-orange-700'>Update Resume</Button>
    </div>
  )
}

export default Resume

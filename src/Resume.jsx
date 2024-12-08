import React from 'react'
import { Button } from './components/ui/button'
import { useNavigate } from 'react-router-dom'
function Resume() {
  const navigate=useNavigate();
  return (
    <div className='flex justify-around'>
      <Button className='bg-orange-500 hover:bg-orange-700' 
      onClick={()=>navigate('/resume/edit/education')}
      >Edit Resume</Button>
      <Button className='bg-orange-500 hover:bg-orange-700'
      onClick={()=>navigate('/resume/view')}
      >View Resume</Button>
      <Button className='bg-orange-500 hover:bg-orange-700'>Update Resume</Button>
    </div>
  )
}

export default Resume

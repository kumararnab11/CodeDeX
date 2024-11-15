import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PlatformCard from './PlatformCard';
import { useNavigate } from 'react-router-dom';

function Platforms() {
    const platformData=useSelector((state)=>state.platform);
    const dispatch=useDispatch();
    const navigate=useNavigate();
  return (
    <div className="w-[55%] mx-auto p-4">
      <h2 className="text-center text-2xl font-semibold mb-6">Platforms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(platformData).map((platform) => (
            <PlatformCard
                platformName={platform.charAt(0).toUpperCase() + platform.slice(1)}
                questionsSolved={platformData[platform].numbers}
                contestsGiven={platformData[platform].contests}
                rating={platformData[platform].rating}
            />
        ))}        
      </div>
      <div className='flex'>
        <button
         className="mt-4 mr-4 w-full bg-green-100 text-green-600 border hover:border-green-700 font-semibold py-2 rounded"
         onClick={()=>navigate('/updateusernames')}
         >Update Usernames</button>
        <button className="mt-4 ml-4 w-full bg-green-100 text-green-600 border hover:border-green-700 font-semibold py-2 rounded">Refresh</button>
      </div>
    </div>
  );
}

export default Platforms;

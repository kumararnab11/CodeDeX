import React, { useState } from 'react';
import { IoLocationSharp,IoLanguageSharp  } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaIdBadge } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import AppDrawer from './AppDrawer';
import Resume from './Resume';
import Badge from './Badge';
import { FaPencilAlt } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { updateAvatar } from './redux/avatarSlice';

import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import avatar4 from './assets/avatar4.jpg';
import avatar5 from './assets/avatar5.jpg';
import avatar6 from './assets/avatar6.jpg';



function Profile() {
  const dispatch = useDispatch();
  const [popup,setPopup]=useState(false);
  const navigate = useNavigate();
  const data = useSelector((state) => state.profile);
  
  // Safe retrieval of platform data from localStorage
  const platformData = JSON.parse(localStorage.getItem('platform'));
  const profilePic = useSelector((state) => state.avatar);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBadgeOpen, setBadgeClose] = useState(false);
  const[avatar,setAvatar]=useState(profilePic);

  return (
    <div className="w-[25%] min-w-[300px] p-4 m-2 bg-white rounded-lg shadow-lg border">
      {/* Profile Picture and Name */}
      <div className="flex flex-col items-center text-center">
        <div className='relative h-[80px]'>
          <img
            src={
              profilePic === 0 
                ? (platformData?.codeforces?.avatar || "https://via.placeholder.com/80") 
                : profilePic === 1 ? avatar1
                : profilePic === 2 ? avatar2
                : profilePic === 3 ? avatar3
                : profilePic === 4 ? avatar4
                : profilePic === 5 ? avatar5
                : profilePic === 6 ? avatar6
                : "https://via.placeholder.com/80"
            }
          
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
          <div className='absolute bottom-0 right-0 text-green-600 hover:text-orange-600'
            onClick={()=>setPopup(true)}
          >
            <FaPencilAlt/>
          </div>
        </div>
        <h2 className="mt-2 text-xl font-semibold">{data.nme || 'Anonymous'}</h2>
        <a href="#" className="text-blue-500 text-sm">{data.username || '@9cYFubNP'}</a>
        <p className="text-gray-500 text-xs mt-1">
          Last Refreshed at: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
        </p>
      </div>

      {/* Edit Profile Button */}
      <button
        className="mt-4 w-full bg-green-100 text-green-600 border hover:border-green-700 font-semibold py-2 rounded"
        onClick={() => navigate('/editprofile')}
      >
        Edit Profile
      </button>

      {/* Info Section */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-500 text-sm">
          <IoLocationSharp className="mr-2 text-blue-600" />
          <span>{data.location || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaGraduationCap className="mr-2 text-purple-700" />
          <span>{data.institution || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <HiOutlineMail className="mr-2 text-red-700" />
          <span>{data.email || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <IoLogoLinkedin className="mr-2 text-blue-600" />
          <span>{data.linkedin || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaSquareXTwitter className="mr-2 text-black" />
          <span>{data.twitter || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <IoLanguageSharp  className="mr-2 text-green-400" />
          <span>{data.language || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaGithub className="mr-2 text-black" />
          <span>{data.github || 'N/A'}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 space-y-2">
        <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 rounded flex items-center justify-center"
          onClick={()=>{setBadgeClose(true)}}
        >
          <span className="flex items-center">
            <span className="mr-2">CodeDeX Badge</span>
            <FaIdBadge className="text-lg" />
          </span>
        </button>
        <button className="w-full bg-gray-100 text-gray-700 font-semibold py-2 rounded"
        onClick={() => setIsDrawerOpen(true)}
        >
          Resume
        </button>
      </div>
      
      {/* Drawer Component */}
      <AppDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Stay updated with your Resume"
        description="auto updated resume feature"
      >
        <Resume/>
      </AppDrawer>
      
      {/* Badge Component */}
      <Badge
        openBadge={isBadgeOpen}
        onCloseBadge={() => setBadgeClose(false)}
      />

      {/* Alert Dialog */}
      {popup && (
        <AlertDialog open={popup} onOpenChange={setPopup}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Choose Your Avatar</AlertDialogTitle>
              <AlertDialogDescription>currently avatar {avatar} is selected</AlertDialogDescription>
              <div className='flex flex-row flex-wrap'>
                <div onClick={()=>setAvatar(0)}><img src={platformData?.codeforces?.avatar||"https://via.placeholder.com/80"} alt="" /></div>
              <div className='h-[80px] w-[80px] m-2' onClick={()=>setAvatar(1)}><img src={avatar1} alt="" /></div>
                <div className='h-[80px] w-[80px] m-2' onClick={()=>setAvatar(2)}><img src={avatar2} alt="" /></div>
                <div className='h-[80px] w-[80px] m-2' onClick={()=>setAvatar(3)}><img src={avatar3} alt="" /></div>
                <div className='h-[80px] w-[80px] m-2' onClick={()=>setAvatar(4)}><img src={avatar4} alt="" /></div>
                <div className='h-[80px] w-[80px] m-2' onClick={()=>setAvatar(5)}><img src={avatar5} alt="" /></div>
                <div className='h-[80px] w-[80px] m-2' onClick={()=>setAvatar(6)}><img src={avatar6} alt="" /></div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setPopup(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => {
                setPopup(false)
                dispatch(updateAvatar(avatar));
                }}>Save</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

    </div>
  );
}

export default Profile;

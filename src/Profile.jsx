import React, { useEffect,useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitterSquare, FaGithub, FaIdBadge } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from './redux/formDataSlice';
import AppDrawer from './AppDrawer';
import Resume from './Resume';
import Badge from './Badge';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.profile);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBadgeOpen, setBadgeClose] = useState(false);

  return (
    <div className="w-[25%] p-4 m-2 bg-white rounded-lg shadow-lg border">
      {/* Profile Picture and Name */}
      <div className="flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
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
          <span>{data.email || 'kumararnab0342@gmail.com'}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <IoLogoLinkedin className="mr-2 text-blue-600" />
          <span>{data.linkedin || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaTwitterSquare className="mr-2 text-blue-500" />
          <span>{data.twitter || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <GrLanguage className="mr-2 text-green-400" />
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
    </div>
  );
}

export default Profile;

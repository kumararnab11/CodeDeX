import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaIdBadge } from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.profile); 
  
  return (
    <div className="w-[25%] p-4 m-2 bg-white rounded-lg shadow-lg border">
      {/* Profile Picture and Name */}
      <div className="flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
        <h2 className="mt-2 text-xl font-semibold">{data.name || 'Arnab Kumar'}</h2> {/* Display name from Redux */}
        <a href="#" className="text-blue-500 text-sm">{data.username || '@9cYFubNP'}</a> {/* Display username from Redux */}
        <p className="text-gray-500 text-xs mt-1">Last Refreshed at: {data.lastRefreshed || '14-11-2024 11:57:22'}</p> {/* Display last refreshed */}
      </div>

      {/* Edit Profile Button */}
      <button className="mt-4 w-full bg-green-100 text-green-600 border hover:border-green-700 font-semibold py-2 rounded"
        onClick={() => navigate('/editprofile')}
      >
        Edit Profile
      </button>

      {/* Info Section */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-500 text-sm">
          <IoLocationSharp className="mr-2" />
          <span>{data.location || 'N/A'}</span> {/* Display location from Redux */}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaGraduationCap className="mr-2" />
          <span>{data.institution || 'N/A'}</span> {/* Display institution */}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <HiOutlineMail className="mr-2" />
          <span>{data.email || 'kumararnab0342@gmail.com'}</span> {/* Display email */}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <IoLogoLinkedin className="mr-2" />
          <span>{data.linkedin || 'N/A'}</span> {/* Display LinkedIn */}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaTwitterSquare className="mr-2" />
          <span>{data.twitter || 'N/A'}</span> {/* Display Twitter */}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <GrLanguage className="mr-2" />
          <span>{data.language || 'N/A'}</span> {/* Display Language */}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaGithub className="mr-2" />
          <span>{data.github || 'N/A'}</span> {/* Display GitHub */}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 space-y-2">
      <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 rounded flex items-center justify-center">
        <span className="flex items-center">
          <span className="mr-2">CodeDeX Badge</span>
          <FaIdBadge className="text-lg" />
        </span>
      </button>
        <button className="w-full bg-gray-100 text-gray-700 font-semibold py-2 rounded">
          Overall stats
        </button>
      </div>
    </div>
  );
}

export default Profile;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlatformData, updatePlatform } from './redux/platformSlice'; 
import { useNavigate } from 'react-router-dom';

const PlatformForm = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const platformData = useSelector((state) => state.platform);

  // Local state for form inputs
  const [formData, setFormData] = useState({
    leetcode: platformData.leetcode.username,
    gfg: platformData.gfg.username,
    codeforces: platformData.codeforces.username,
    codechef: platformData.codechef.username,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an updated object while maintaining immutability
    const updatedData = {
      leetcode: { ...platformData.leetcode, username: formData.leetcode },
      gfg: { ...platformData.gfg, username: formData.gfg },
      codeforces: { ...platformData.codeforces, username: formData.codeforces },
      codechef: { ...platformData.codechef, username: formData.codechef },
    };

    dispatch(updatePlatform(updatedData)); // Dispatch the action with updated data
    alert('Platform data updated successfully!');
    dispatch(fetchPlatformData())
    navigate("/")
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Update Platform Usernames</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* LeetCode */}
        <div>
          <label htmlFor="leetcode" className="block text-sm font-medium text-gray-700">
            LeetCode Username:
          </label>
          <input
            id="leetcode"
            type="text"
            name="leetcode"
            value={formData.leetcode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* GFG */}
        <div>
          <label htmlFor="gfg" className="block text-sm font-medium text-gray-700">
            GFG Username:
          </label>
          <input
            id="gfg"
            type="text"
            name="gfg"
            value={formData.gfg}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Codeforces */}
        <div>
          <label htmlFor="codeforces" className="block text-sm font-medium text-gray-700">
            Codeforces Username:
          </label>
          <input
            id="codeforces"
            type="text"
            name="codeforces"
            value={formData.codeforces}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* CodeChef */}
        <div>
          <label htmlFor="codechef" className="block text-sm font-medium text-gray-700">
            CodeChef Username:
          </label>
          <input
            id="codechef"
            type="text"
            name="codechef"
            value={formData.codechef}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlatformForm;

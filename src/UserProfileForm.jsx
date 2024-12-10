import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from './redux/formDataSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function UserProfileForm() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    toast.success("User Details Updated");
    navigate("/")
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">User Profile Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="nme"
            value={formData.nme}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Institution:</label>
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Linkedin:</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Twitter:</label>
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-gray-700">Language:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-gray-700">GitHub:</label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-gray-700">Phone no:</label>
          <input
            type="number"
            name="ph"
            value={formData.ph}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserProfileForm;

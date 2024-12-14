import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/redux/resumeDataSlice";
import { updateToggle } from "@/redux/toggleSlice";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaToggleOff,FaToggleOn } from "react-icons/fa6";

function Achievements() {
  const dispatch = useDispatch();

  // Fetch initial achievements data from Redux
  const achievementsData = useSelector((state) => state.resume.achievements);
  const resumeData = { ...useSelector((state) => state.resume) };
  const toggleData = { ...useSelector((state) => state.toggle) };

  // States for tags
  const [tags, setTags] = useState(toggleData);

  // State to manage achievements
  const [achievements, setAchievements] = useState(
    achievementsData.length > 0
      ? achievementsData
      : [{ desc: "", link: "" }]
  );

  // State for controlling hover card visibility
  const [isHovered, setIsHovered] = useState(false);

  // Toggle the state of a tag
  const toggleTag = (tag) => {
    setTags((prevTags) => ({
      ...prevTags,
      [tag]: !prevTags[tag],
    }));
    //console.log(tags);
  };

  // Handle input change for achievements
  const handleChange = (index, field, value) => {
    const updatedAchievements = achievements.map((achievement, i) =>
      i === index ? { ...achievement, [field]: value } : achievement
    );
    setAchievements(updatedAchievements);
  };

  // Add a new achievement input field
  const addAchievement = () => {
    setAchievements([...achievements, { desc: "", link: "" }]);
  };

  // Remove an achievement input field
  const removeAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare updated achievements data
    const updatedAchievements = achievements.filter(
      (achievement) => achievement.desc.trim() !== ""
    );

    // Dispatch the updated achievements to Redux
    const updatedResume = {
      ...resumeData,
      achievements: updatedAchievements,
    };
    dispatch(updateResume(updatedResume));

    const updatedToggle ={
      ...tags
    }
    dispatch(updateToggle(updatedToggle))

    alert("Achievements updated successfully!");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Achievements</h2>
        {tags.achievement
        ?<FaToggleOn className="text-orange-500 ml-4 mb-3 size-5" onClick={()=>toggleTag('achievement')}/>
        :<FaToggleOff className="text-orange-500 ml-4 mb-3 size-5" onClick={()=>toggleTag('achievement')}/>}
      </div>

      {/* Tags Section */}
      <div className="flex space-x-4 mb-6">
        {["leetcode", "codechef", "gfg", "codeforces"].map((tag) => (
          <div key={tag} className="flex items-center">
            <button
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-md text-white ${
                tags[tag] ? "bg-orange-600" : "bg-gray-500"
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)} {tags[tag] ? "On" : "Off"}
            </button>
          </div>
        ))}

        {/* Custom Hover Card */}
        <div
          className="flex items-center relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <IoMdInformationCircleOutline className="text-gray-500 cursor-pointer" />

          {/* Hover content */}
          {isHovered && (
            <div className="absolute left-0 top-10 p-4 bg-white shadow-lg rounded-lg z-10">
              <p className="text-sm text-gray-700">
                You can select various platforms to auto update data. Toggle them on or off.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Achievement Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
        {achievements.map((achievement, index) => (
          <div key={index} className="space-y-4">
            {/* Achievement Description and Link Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <input
                type="text"
                placeholder={`Achievement Description ${index + 1}`}
                value={achievement.desc}
                onChange={(e) =>
                  handleChange(index, "desc", e.target.value)
                }
                className="border p-2 rounded-md w-full"
              />
              <input
                type="text"
                placeholder={`Link ${index + 1} (optional)`}
                value={achievement.link}
                onChange={(e) =>
                  handleChange(index, "link", e.target.value)
                }
                className="border p-2 rounded-md w-full"
              />
            </div>

            {/* Remove Button */}
            <button
              type="button"
              onClick={() => removeAchievement(index)}
              className="text-red-500 hover:text-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}

        {/* Add More Achievements */}
        <div
          onClick={addAchievement}
          className="flex items-center justify-center cursor-pointer text-orange-500 hover:text-orange-600"
        >
          <FaPlus className="mr-2" /> Add More
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Achievements;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/redux/resumeDataSlice";
import { FaPlus, FaTrash } from "react-icons/fa";
import { updateToggle } from "@/redux/toggleSlice";
import { FaToggleOff,FaToggleOn } from "react-icons/fa6";

function Skills() {
  const dispatch = useDispatch();

  // Fetch initial skills data from Redux
  const skillsData = useSelector((state) => state.resume.skills);

  // State to manage the list of skills
  const [skills, setSkills] = useState(
    skillsData.length > 0
      ? skillsData
      : Array(4).fill({ skill: "", link: "" }) // Start with 4 empty inputs if no data
  );

  const toggleData= {...useSelector((state)=>state.toggle)};
  
    const [tags,setTags]=useState(toggleData);
  
    const toggleTag = (tag) => {
      setTags((prevTags) => ({
        ...prevTags,
        [tag]: !prevTags[tag],
      }));
    };

  // Handle input change
  const handleChange = (index, field, value) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, [field]: value } : skill
    );
    setSkills(updatedSkills);
  };

  // Add a new skill input field
  const addSkill = () => {
    setSkills([...skills, { skill: "", link: "" }]);
  };

  // Remove a skill input field
  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index); // Remove the skill at the given index
    setSkills(updatedSkills);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Remove any empty skill entries before submitting
    const updatedSkills = skills.filter((e) => e.skill !== "");

    // Dispatch to Redux to update the skills in the resume
    dispatch(updateResume({ skills: updatedSkills }));

    const updatedToggle ={
      ...tags
    }
    dispatch(updateToggle(updatedToggle))

    alert("Skills updated successfully!");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Skills</h2>
          {tags.skills
            ?<FaToggleOn className="text-orange-500 ml-4 mb-3 size-5" onClick={()=>toggleTag('skills')}/>
            :<FaToggleOff className="text-orange-500 ml-4 mb-3 size-5" onClick={()=>toggleTag('skills')}/>
          }
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
        {skills.map((skill, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <input
              type="text"
              placeholder={`Skill ${index + 1}`}
              value={skill.skill}
              onChange={(e) => handleChange(index, "skill", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`Link ${index + 1} (optional)`}
              value={skill.link}
              onChange={(e) => handleChange(index, "link", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            {/* Remove Button */}
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-red-500 hover:text-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        {/* Add more inputs */}
        <div
          onClick={addSkill}
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

export default Skills;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/redux/resumeDataSlice";
import { FaPlus, FaTrash } from "react-icons/fa";
import { updateToggle } from "@/redux/toggleSlice";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

function WorkExp() {
  const dispatch = useDispatch();

  const workData = useSelector((state) => state.resume.workExp);
  const resumeData = { ...useSelector((state) => state.resume) };
  const toggleData = { ...useSelector((state) => state.toggle) };

  const [tags, setTags] = useState(toggleData);

  const toggleTag = (tag) => {
    setTags((prevTags) => ({
      ...prevTags,
      [tag]: !prevTags[tag],
    }));
  };

  const [workExperiences, setWorkExperiences] = useState(
    workData?.length > 0
      ? workData
      : Array(1).fill({ companyName: "", role: "", jobDesc: "", from: "", till: "" })
  );

  const handleChange = (index, field, value) => {
    const updatedExperiences = workExperiences.map((experience, i) =>
      i === index ? { ...experience, [field]: value } : experience
    );
    setWorkExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { companyName: "", role: "", jobDesc: "", from: "", till: "" },
    ]);
  };

  const removeExperience = (index) => {
    const updatedExperiences = workExperiences.filter((_, i) => i !== index);
    setWorkExperiences(updatedExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExperiences = workExperiences.filter(
      (exp) => exp.companyName !== "" && exp.role !== ""
    );

    const data = { ...resumeData, workExp: updatedExperiences };
    dispatch(updateResume(data));

    const updatedToggle = {
      ...tags,
    };
    dispatch(updateToggle(updatedToggle));

    alert("Work Experience updated successfully!");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Work Experience</h2>
        {tags.workExp ? (
          <FaToggleOn
            className="text-orange-500 ml-4 mb-3 size-5"
            onClick={() => toggleTag("workExp")}
          />
        ) : (
          <FaToggleOff
            className="text-orange-500 ml-4 mb-3 size-5"
            onClick={() => toggleTag("workExp")}
          />
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
        {workExperiences.map((experience, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <input
              type="text"
              placeholder={`Company Name ${index + 1}`}
              value={experience.companyName}
              onChange={(e) => handleChange(index, "companyName", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`Role ${index + 1}`}
              value={experience.role}
              onChange={(e) => handleChange(index, "role", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`Job Description ${index + 1}`}
              value={experience.jobDesc}
              onChange={(e) => handleChange(index, "jobDesc", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`From ${index + 1}`}
              value={experience.from}
              onChange={(e) => handleChange(index, "from", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`Till ${index + 1}`}
              value={experience.till}
              onChange={(e) => handleChange(index, "till", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="text-red-500 hover:text-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <div
          onClick={addExperience}
          className="flex items-center justify-center cursor-pointer text-orange-500 hover:text-orange-600"
        >
          <FaPlus className="mr-2" /> Add More
        </div>
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

export default WorkExp;

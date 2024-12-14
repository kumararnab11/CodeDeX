import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/redux/resumeDataSlice";
import { FaPlus, FaTrash } from "react-icons/fa";
import { updateToggle } from "@/redux/toggleSlice";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

function Leadership() {
  const dispatch = useDispatch();

  const leadershipData = useSelector((state) => state.resume.leadership);
  const resumeData = { ...useSelector((state) => state.resume) };
  const toggleData = { ...useSelector((state) => state.toggle) };

  const [tags, setTags] = useState(toggleData);

  const toggleTag = (tag) => {
    setTags((prevTags) => ({
      ...prevTags,
      [tag]: !prevTags[tag],
    }));
  };

  const [qualities, setQualities] = useState(
    leadershipData?.length > 0
      ? leadershipData
      : Array(2).fill({ quality: "", link: "" })
  );

  const handleChange = (index, field, value) => {
    const updatedQualities = qualities.map((quality, i) =>
      i === index ? { ...quality, [field]: value } : quality
    );
    setQualities(updatedQualities);
  };

  const addQuality = () => {
    setQualities([...qualities, { quality: "", link: "" }]);
  };

  const removeQuality = (index) => {
    const updatedQualities = qualities.filter((_, i) => i !== index);
    setQualities(updatedQualities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedQualities = qualities.filter((quality) => quality.quality !== "");

    const data = { ...resumeData, leadership: updatedQualities };
    dispatch(updateResume(data));

    const updatedToggle = {
      ...tags,
    };
    dispatch(updateToggle(updatedToggle));

    alert("Leadership qualities updated successfully!");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Leadership Qualities</h2>
        {tags.leadership ? (
          <FaToggleOn
            className="text-orange-500 ml-4 mb-3 size-5"
            onClick={() => toggleTag("leadership")}
          />
        ) : (
          <FaToggleOff
            className="text-orange-500 ml-4 mb-3 size-5"
            onClick={() => toggleTag("leadership")}
          />
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
        {qualities.map((quality, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <input
              type="text"
              placeholder={`Leadership Quality ${index + 1}`}
              value={quality.quality}
              onChange={(e) => handleChange(index, "quality", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`Link ${index + 1} (optional)`}
              value={quality.link}
              onChange={(e) => handleChange(index, "link", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <button
              type="button"
              onClick={() => removeQuality(index)}
              className="text-red-500 hover:text-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <div
          onClick={addQuality}
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

export default Leadership;

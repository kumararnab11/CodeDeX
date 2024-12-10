import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/redux/resumeDataSlice";
import { FaPlus, FaTrash } from "react-icons/fa";

function Projects() {
  const dispatch = useDispatch();

  const projectsData = useSelector((state) => state.resume.projects);
  const resumeData = { ...useSelector((state) => state.resume.projects) };

  const [projects, setProjects] = useState(
    projectsData.length > 0
      ? projectsData
      : Array(4).fill({ head: "", desc: "", link: "",git:"",technologies:"" }) // Start with 4 empty inputs if no data
  );

  const handleChange = (index, field, value) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project
    );
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([...projects, { head: "", desc: "", link: "",git:"",technologies:"" }]);
  };


  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProjects = projects.filter((project) => project.head !== "");

    const data = { ...resumeData, projects: updatedProjects };
    dispatch(updateResume(data));

    alert("Projects updated successfully!");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Projects</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <input
              type="text"
              placeholder={`Project Title ${index + 1}`}
              value={project.head}
              onChange={(e) => handleChange(index, "head", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`Description ${index + 1}`}
              value={project.desc}
              onChange={(e) => handleChange(index, "desc", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`Link ${index + 1} (optional)`}
              value={project.link}
              onChange={(e) => handleChange(index, "link", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`Git Repo ${index + 1} (optional)`}
              value={project.git}
              onChange={(e) => handleChange(index, "git", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder={`Technologies Used ${index + 1} (optional)`}
              value={project.technologies}
              onChange={(e) => handleChange(index, "technologies", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            {/* Remove Button */}
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="text-red-500 hover:text-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        {/* Add more inputs */}
        <div
          onClick={addProject}
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

export default Projects;
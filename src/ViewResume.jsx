import React from "react";
import { FaGithub, FaLink,FaLinkedin } from "react-icons/fa";
import { SiLeetcode,SiCodeforces,SiCodechef,SiGeeksforgeeks,SiGithub } from "react-icons/si";

function ViewResume() {
  const name = "Arnab Kumar";
  const contact = {
    location: "Kolkata, West Bengal",
    phone: "+91 9547428943",
    email: "kumararnab0342@gmail.com",
    linkedin: "https://linkedin.com/in/arnab-kumar-896737253",
    github: "https://github.com/kumararnab11",
  };

  const education = [
    {
      institution: "Narula Institute of Technology",
      degree: "B.Tech in Computer Science",
      duration: "Sept 2022 - July 2026",
      grade: "CGPA: 9.08 (till 3rd Semester)",
      location: "West Bengal, India",
    },
    {
      institution: "Maldanga R M Institution",
      degree: "10+2 Higher Secondary Education (PCM)",
      duration: "April 2019 - June 2021",
      grade: "Percentage: 89.6%",
      location: "West Bengal, India",
    },
    {
      institution: "Maldanga R M Institution",
      degree: "10th Secondary Education",
      duration: "2019",
      grade: "Percentage: 94%",
      location: "West Bengal, India",
    },
  ];

  const achievements = [
    "ACM ICPC Regionalist 2023-24",
    "Secured Global rank of 255 in TCS Codevita Season 11",
    "Attained a peak rating of 1437 (Specialist) on Codeforces",
    "Peak rating of 1740 (3 star) on Codechef",
    "Rated 1885 (Knight) at LeetCode with solved over 600 problems",
  ];

  const skills = ["C++", "Python", "ReactJS", "HTML/CSS", "JavaScript"];

  const projects = [
    {
      name: "Portfolio",
      description:
        "A frontend website showcasing modern web design principles using HTML and CSS.",
      technologies: ["HTML", "CSS"],
      projectLink: "https://example.com/portfolio",
      repoLink: "https://github.com/example/portfolio",
    },
    {
      name: "GPA Achiever",
      description: "A ReactJS app for calculating average CGPA.",
      technologies: ["ReactJS", "HTML", "CSS"],
      projectLink: "https://example.com/gpa-achiever",
      repoLink: "https://github.com/example/gpa-achiever",
    },
    {
      name: "Color Generator",
      description: "A tool to generate random Hex, RGB, and normal colors.",
      technologies: ["JavaScript", "HTML", "CSS"],
      projectLink: "https://example.com/color-generator",
      repoLink: "https://github.com/example/color-generator",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
        {/* Name and Contact */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-700">{name}</h1>
          <p className="text-gray-500 text-sm">
            {contact.location} | {contact.phone} | {contact.email}
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href={contact.linkedin}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href={contact.github}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={contact.github}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>
            <a
              href={contact.github}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodechef />
            </a>
            <a
              href={contact.github}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodeforces />
            </a>
            <a
              href={contact.github}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGeeksforgeeks />
            </a>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-700 border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div>
                  <h3 className="font-medium text-gray-800">{edu.institution}</h3>
                  <p className="text-gray-600 italic">{edu.degree}</p>
                </div>
                <div className="text-right text-gray-500">
                  <p>{edu.duration}</p>
                  <p>{edu.grade}</p>
                  <p className="italic">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-700 border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="text-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">{project.name}</h3>
                  <div className="flex space-x-4">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-lg"
                    >
                      <FaLink />
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-lg"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-gray-500">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-700 border-b border-gray-300 pb-1 mb-2">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-lg font-semibold text-blue-700 border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-lg text-gray-600"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ViewResume;

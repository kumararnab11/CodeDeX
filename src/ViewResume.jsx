import React from "react";
import { FaGithub, FaLink,FaLinkedin } from "react-icons/fa";
import { SiLeetcode,SiCodeforces,SiCodechef,SiGeeksforgeeks,SiGithub } from "react-icons/si";
import { useSelector } from "react-redux";

function ViewResume() {
  const resumeData = useSelector((state) => state.resume) ;
  const profileData=useSelector((state) => state.profile);
  const platformData=useSelector((state) => state.platform);
  const toggleData=useSelector((state)=>state.toggle)
  const name = profileData.nme || "Enter Name in Profile Section";
  const contact = {
    location: profileData.location|| "Enter Location in Profile Section",
    phone: "+91 9547428943",
    email: profileData.email|| "Enter Email in Profile Section",
    linkedin: profileData.linkedin|| "Enter Linkedin in Profile Section",
    github: profileData.github|| "Enter Github in Profile Section",
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

  const achievements = resumeData.achievements;

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
            {[resumeData.clg,resumeData.hs,resumeData.sec].map((edu, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div>
                  <h3 className="font-medium text-gray-800">{edu.scl}</h3>
                  <p className="text-gray-600 italic">{edu.major}</p>
                </div>
                <div className="text-right text-gray-500">
                  <p>{`${edu.from} ${edu.till}`}</p>
                  <p>{edu.marks}</p>
                  <p className="italic">{edu.board}</p>
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
            {resumeData.projects.map((project, index) => (
              <li key={index} className="text-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">{project.head}</h3>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-lg"
                    >
                      <FaLink />
                    </a>
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-lg"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600">{project.desc}</p>
                <p className="text-gray-500">
                  <strong>Technologies:</strong> {project.technologies}
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
            {toggleData.leetcode && (
              <li>
                <a href={`https://leetcode.com/${platformData.leetcode.username}`}>
                  {`With a contest rating of `} 
                  <span className="font-bold">{platformData.leetcode.rating}</span> 
                  {` solved `} 
                  <span className="font-bold">{platformData.leetcode.questions}</span> 
                  {`+ problems in `}
                  <span className="text-blue-700">Leetcode</span>
                </a>
              </li>
            )}
            {toggleData.codeforces && (
              <li>
                <a href={`https://leetcode.com/${platformData.leetcode.username}`}>
                <span className="font-bold">{platformData.codeforces.maxBadge}</span>
                  {`(${platformData.codeforces.maxrating}) in `}
                  <span className="text-blue-700">Codeforces</span>
                </a>
              </li>
            )}
            {toggleData.codechef && (
              <li>
                <a href={`https://codechef.com/${platformData.codechef.username}`}>
                <span className="font-bold">{platformData.codechef.badge}</span>
                  {`(${platformData.codechef.maxrating}) in `}
                  <span className="text-blue-700">Codechef</span>
                </a>
              </li>
            )}
            {toggleData.gfg && (
              <li>
                <a href={`https://gfg.com/${platformData.gfg.username}`}>
                  {`Has solved `}
                  <span className="font-bold">{platformData.gfg.questions}</span>
                  {`+ questions in `}
                  <span className="text-blue-700">GeekforGeeks</span>
                </a>
              </li>
            )}
            {achievements.map((achievement, index) => (
              <li key={index}>
                <a href={achievement.link}>{achievement.desc}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-lg font-semibold text-blue-700 border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {resumeData.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-lg text-gray-600"
              >
              <a href={skill.link}>{skill.skill}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ViewResume;

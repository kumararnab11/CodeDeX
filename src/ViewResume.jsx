import React, {useRef } from "react";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2pdf from "html2pdf.js";
import { ImDownload2 } from "react-icons/im";

function ViewResume() {
  const resumeData = useSelector((state) => state.resume) ;
  const profileData=useSelector((state) => state.profile);
  const platformData=useSelector((state) => state.platform);
  const toggleData=useSelector((state)=>state.toggle)
  const name = profileData.nme || "Enter Name in Profile Section";
  const contact = {
    location: profileData.location|| "Enter Location in Profile Section",
    phone: profileData.ph||"Enter Phone no in Profile Section",
    email: profileData.email|| "Enter Email in Profile Section",
    linkedin: profileData.linkedin|| "Enter Linkedin in Profile Section",
    github: profileData.github|| "Enter Github in Profile Section",
  };
  const achievements = resumeData.achievements;


  const contentRef = useRef(null);

  const handleDownload = () => {
    const content = contentRef.current;
    if (!content) return;

    const options = {
      margin: 0,
      filename: "resume.pdf",
      html2canvas: {
        scale: 2,
        useCORS: true, // Enable CORS for cross-origin images
      },
      jsPDF: {
        unit: "in",
        format: "letter",
        orientation: "portrait",
      },
    };

    html2pdf().from(content).set(options).save();
  };


  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        <ImDownload2/>
      </button>
      <div ref={contentRef} className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
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
              href={`https://github.com/${contact.github}`}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={`https://leetcode.com/${platformData.leetcode.username}`}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>
            <a
              href={`https://www.codechef.com/users/${platformData.codechef.username}`}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodechef />
            </a>
            <a
              href={`https://codeforces.com/profile/${platformData.codeforces.username}`}
              className="text-blue-600 hover:text-blue-800 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodeforces />
            </a>
            <a
              href={`https://www.geeksforgeeks.org/user/${platformData.gfg.username}`}
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
                  <span className="font-bold">{platformData.leetcode.rating.toString().substr(0,4)}</span> 
                  {` solved `} 
                  <span className="font-bold">{platformData.leetcode.questions}</span> 
                  {`+ problems in `}
                  <span className="text-blue-700">Leetcode</span>
                </a>
              </li>
            )}
            {toggleData.codeforces && (
              <li>
                <a href={`https://codeforces.com/profile/${platformData.codeforces.username}`}>
                <span className="font-bold">{platformData.codeforces.maxBadge}</span>
                  {`(${platformData.codeforces.maxrating}) in `}
                  <span className="text-blue-700">Codeforces</span>
                </a>
              </li>
            )}
            {toggleData.codechef && (
              <li>
                <a href={`https://www.codechef.com/users/${platformData.codechef.username}`}>
                <span className="font-bold">{platformData.codechef.badge}</span>
                  {`(${platformData.codechef.maxrating}) in `}
                  <span className="text-blue-700">Codechef</span>
                </a>
              </li>
            )}
            {toggleData.gfg && (
              <li>
                <a href={`https://www.geeksforgeeks.org/user/${platformData.gfg.username}`}>
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

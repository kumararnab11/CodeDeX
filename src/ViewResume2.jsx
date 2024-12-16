import React, { useRef } from "react";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";
import { FaMapMarkerAlt, FaPhone, FaEnvelope,FaLink,FaGithub } from "react-icons/fa";
import { ImDownload2 } from "react-icons/im";

const ViewResume2 = () => {
  const resumeData = useSelector((state) => state.resume);
  const profileData = useSelector((state) => state.profile);
  const toggleData = useSelector((state) => state.toggle);

  const contentRef = useRef(null);

  const handleDownload = () => {
    const options = {
      margin: 0.5,
      filename: "resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(contentRef.current).set(options).save();
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <button
        onClick={handleDownload}
        className="fixed top-16 right-4  p-2 rounded "
      >
        <ImDownload2 className="text-gray-500 hover:text-gray-700"/>
      </button>

      {/* Resume Content */}
      <div
        ref={contentRef}
        className="max-w-3xl mx-auto bg-white p-8 shadow-lg grid grid-cols-3 gap-6 font-sans"
      >
        {/* Left Column */}
        <div className="col-span-1 text-gray-700">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              {profileData.nme || "TAYLOR COOK"}
            </h1>
          </div>

          {/* Details */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-2">DETAILS</h2>
            <p className="text-sm flex items-center mb-1">
              <FaMapMarkerAlt className="mr-2" /> {profileData.location || "Enter Address"}
            </p>
            <p className="text-sm flex items-center mb-1">
              <FaPhone className="mr-2" /> {profileData.ph || "+123 456 789"}
            </p>
            <p className="text-sm flex items-center">
              <FaEnvelope className="mr-2" /> {profileData.email || "example@gmail.com"}
            </p>
          </section>

          {/* Skills */}
          {toggleData.skills && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2">SKILLS</h2>
              <ul className="text-sm">
                {resumeData.skills.map((skill, index) => (
                  <li key={index} className="mb-1">
                    {skill.skill}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {/* Employment History */}
          {toggleData.workExp && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2 border-b-2 pb-2">
                EMPLOYMENT HISTORY
              </h2>
              {resumeData.workExp.map((job, index) => (
                <div key={index} className="mb-4">
                  <div className="text-sm italic text-gray-500 mb-2 flex justify-between">
                    <p><span className="font-bold text-gray-700">{job.companyName}</span> | {job.from} - {job.till}</p>
                    <p>{job.role}</p>
                  </div>
                  <div className="list-disc list-inside text-sm text-gray-600">
                    {job.jobDesc}
                  </div>
                </div>
              ))}
            </section>
          )}

          {toggleData.projects &&
            (<section className="mb-6">
            <h2 className="text-lg font-bold mb-2 border-b-2 pb-2">
                PROJECTS
            </h2>
            <ul className="space-y-4">
                {resumeData.projects.map((project, index) => (
                <li key={index} className="text-sm">
                    <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-600">{project.head}</h3>
                    <div className="flex space-x-4">
                        <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-grey-600 hover:text-grey-800 text-lg"
                        >
                        <FaLink />
                        </a>
                        <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-grey-600 hover:text-grey-800 text-lg"
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
            </section>)}

          {/* Leadership Qualities */}
          {toggleData.leadership && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2 border-b-2 pb-2">
                LEADERSHIP QUALITIES
              </h2>
              {resumeData.leadership.map((quality, index) => (
                <div key={index} className="mb-4">
                  <p className="text-sm font-semibold">{quality.quality}</p>
                  <p className="text-sm text-gray-500">{quality.link}</p>
                </div>
              ))}
            </section>
          )}

          {/* Achievements */}
          {toggleData.achievement && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2 border-b-2 pb-2">
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {resumeData.achievements.map((achievement, index) => (
                  <li key={index} className="mb-2">
                    <a href={achievement.link}>{achievement.desc}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold mb-2 border-b-2 pb-2">EDUCATION</h2>
            {[resumeData.clg, resumeData.hs, resumeData.sec].map((edu, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-md font-bold">{edu.scl}</h3>
                <p className="text-sm italic text-gray-500">
                  {edu.major} | {edu.from} - {edu.till}
                </p>
                <p className="text-sm text-gray-600">{edu.marks}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ViewResume2;

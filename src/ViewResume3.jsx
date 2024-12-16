import React, { useRef } from "react";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";
import { ImDownload2 } from "react-icons/im";
import { FaGithub, FaLink} from "react-icons/fa";

function ViewResume3() {
  const resumeData = useSelector((state) => state.resume);
  const profileData = useSelector((state) => state.profile);
  const toggleData = useSelector((state) => state.toggle);

  const name = profileData.nme || "John David Alonzo";
  const address = profileData.location || "98 Green Meadows Avenue, Pasig, Philippines";
  const phone = profileData.ph || "0917 - XXX - XXXX";
  const email = profileData.email || "johndavidalonzo@gmail.com";
  const dob = "September 3, 1993"; // Static placeholder for Date of Birth.

  const contentRef = useRef(null);

  const handleDownload = () => {
    const options = {
      margin: 0,
      filename: "resume.pdf",
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(contentRef.current).set(options).save();
  };

  // Styled Section Heading
  const SectionHeading = ({ title }) => (
    <div className="mt-4 mb-2">
      <div className="flex items-center">
        <div className="bg-orange-500 w-6 h-6 mr-2"></div>
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider">{title}</h2>
      </div>
      <div className="h-1 bg-orange-500"></div>
    </div>
  );
  

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <button
        onClick={handleDownload}
        className="absolute top-16 right-4 bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600 flex items-center gap-2"
      >
        <ImDownload2 />
      </button>

      {/* Resume Content */}
      <div
        ref={contentRef}
        className="max-w-3xl mx-auto bg-white shadow-lg border-t-8 border-orange-500 p-6"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
          <p className="text-sm text-gray-700 mt-2">{address}</p>
          <p className="text-sm text-gray-700">
            Phone: {phone} | Email: <span className="text-orange-500">{email}</span>
          </p>
          <hr className="my-4 border-t-2 border-orange-500" />
        </div>

        {/* TECHNICAL SKILLS */}
        <SectionHeading title="Technical Skills" />
        <ul className="list-disc list-inside text-sm text-gray-700">
          {toggleData.skills &&
             resumeData.skills.map((skill, index) => <li key={index}><a href={skill.link}>{skill.skill}</a></li>)
            }
        </ul>

        {/* EDUCATION */}
        <SectionHeading title="Education" />
        <div className="text-sm text-gray-700">
          {resumeData.clg && (
            <>
              <p className="font-bold">{resumeData.clg.scl}</p>
              <p>{`BS in ${resumeData.clg.major || "Information and Communications Engineering"}`}</p>
              <p>{`${resumeData.clg.from} - ${resumeData.clg.till}`}</p>
            </>
          )}
        </div>
        <div className="text-sm text-gray-700">
          {resumeData.hs && (
            <>
              <p className="font-bold">{resumeData.hs.scl}</p>
              <p>{`BS in ${resumeData.hs.major || "Information and Communications Engineering"}`}</p>
              <p>{`${resumeData.hs.from} - ${resumeData.hs.till}`}</p>
            </>
          )}
        </div>
        <div className="text-sm text-gray-700">
          {resumeData.clg && (
            <>
              <p className="font-bold">{resumeData.sec.scl}</p>
              <p>{`BS in ${resumeData.sec.major || "Information and Communications Engineering"}`}</p>
              <p>{`${resumeData.sec.from} - ${resumeData.sec.till}`}</p>
            </>
          )}
        </div>

        {/* PROJECTS */}
        <SectionHeading title="Projects" />
        <ul className="text-sm text-gray-700 mt-2">
        {toggleData.projects &&
            resumeData.projects.map((project, index) => (
            <li key={index} className="flex items-start mb-4">
                {/* Custom Grey Bullet */}
                <div className="w-2 h-2 mt-1 mr-3 bg-gray-500 rounded-full"></div>

                {/* Content */}
                <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-600">{project.head}</h3>
                    <div className="flex space-x-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800 text-lg"
                    >
                        <FaLink />
                    </a>
                    <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800 text-lg"
                    >
                        <FaGithub />
                    </a>
                    </div>
                </div>
                <p className="text-gray-600">{project.desc}</p>
                <p className="text-gray-500">
                    <strong>Technologies:</strong> {project.technologies}
                </p>
                </div>
            </li>
            ))}
        </ul>


        {/* PRE-PROFESSIONAL EXPERIENCE */}
        <SectionHeading title="Pre-Professional Experience" />
        {resumeData.workExp?.map((work, index) => (
          <div key={index} className="text-sm text-gray-700 mt-2">
            <p className="font-bold">{work.companyName || "Xerox Business Services"}</p>
            <p>
              {work.role || "Technical Support Intern"} | {work.from} - {work.till}
            </p>
            <p>{work.jobDesc}</p>
          </div>
        ))}

        {/* ACHIEVEMENTS */}
        <SectionHeading title="ACHIEVEMENTS" />
        <ul className="list-disc list-inside text-sm text-gray-700">
          {toggleData.achievement &&
             resumeData.achievements.map((achievement, index) => <li key={index}><a href={achievement.link}>{achievement.desc}</a></li>)
            }
        </ul>


        {/* LEADERSHIP */}
        <SectionHeading title="LEADERSHIP QUALITIES" />
        <ul className="list-disc list-inside text-sm text-gray-700">
          {toggleData.leadership &&
             resumeData.leadership.map((leadership, index) => <li key={index}><a href={leadership.link}>{leadership.quality}</a></li>)
            }
        </ul>
        
      </div>
      <div className="max-w-3xl mx-auto border-t-8 border-orange-500"></div>
    </div>
  );
}

export default ViewResume3;

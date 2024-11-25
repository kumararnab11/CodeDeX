import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import html2pdf from "html2pdf.js"; // Import html2pdf.js

function Badge({ openBadge, onCloseBadge }) {
  const profileData = JSON.parse(localStorage.getItem("profile")) || {};
  const platformData = JSON.parse(localStorage.getItem("platform")) || {};
  const [level, setLevel] = useState("Newbie");

  const contentRef = useRef(null); // Ref to capture the content

  // Determine the level
  useState(() => {
    if (
      platformData.leetcode?.rating >= 2150 ||
      platformData.codeforces?.maxrating >= 1800 ||
      platformData.codechef?.maxrating >= 2000
    ) {
      setLevel("Master");
    } else if (
      platformData.leetcode?.rating >= 1850 ||
      platformData.codeforces?.maxrating >= 1500 ||
      platformData.codechef?.maxrating >= 1800
    ) {
      setLevel("Pro");
    } else if (
      platformData.leetcode?.rating >= 1700 ||
      platformData.codeforces?.maxrating >= 1200 ||
      platformData.codechef?.maxrating >= 1500
    ) {
      setLevel("Intermediate");
    }
  }, [platformData]);

  // Links for icons
  const links = {
    linkedin: profileData.linkedin,
    github: `https://github.com/${profileData.github}`,
    gmail: `/send-email/${profileData.email}`,
    leetcode: `https://leetcode.com/u/${platformData.leetcode?.username}`,
    gfg: `https://www.geeksforgeeks.org/user/${platformData.gfg?.username}`,
    codechef: `https://www.codechef.com/users/${platformData.codechef?.username}`,
    codeforces: `https://codeforces.com/profile/${platformData.codeforces?.username}`,
  };

  // Generate PDF
  const handleDownload = () => {
    const content = contentRef.current;
    if (!content) return;

    const options = {
      margin: 1,
      filename: "badge.pdf",
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
    <Dialog open={openBadge} onOpenChange={onCloseBadge}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Badge</DialogTitle>
          <DialogDescription>Click the links below to navigate.</DialogDescription>
        </DialogHeader>

        {/* Ref targets this section */}
        <div
          ref={contentRef}
          className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center space-y-4 w-96"
        >
          {/* Profile Picture */}
          <img
            src={platformData.codeforces?.avatar || "https://via.placeholder.com/96"}
            alt="Profile"
            className="w-24 h-24 rounded-full"
            crossOrigin="anonymous"
          />

          {/* Info Section */}
          <div className="text-center">
            <h2 className="text-xl font-bold">{profileData.name || "Anonymous"}</h2>
            <p className="text-sm text-gray-600">
              Level: <span className="text-red-500">{level}</span>
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-4 text-gray-600">
            <Link to={links.linkedin} title="LinkedIn">
              <FaLinkedin className="text-blue-600 hover:scale-110 transition-transform" size={24} />
            </Link>
            <Link to={links.gmail} title="Gmail">
              <FaEnvelope className="text-red-600 hover:scale-110 transition-transform" size={24} />
            </Link>
            <Link to={links.leetcode} title="LeetCode">
              <SiLeetcode className="text-orange-500 hover:scale-110 transition-transform" size={24} />
            </Link>
            <Link to={links.gfg} title="GeeksforGeeks">
              <SiGeeksforgeeks className="text-green-600 hover:scale-110 transition-transform" size={24} />
            </Link>
            <Link to={links.codechef} title="CodeChef">
              <SiCodechef className="text-amber-700 hover:scale-110 transition-transform" size={24} />
            </Link>
            <Link to={links.codeforces} title="Codeforces">
              <SiCodeforces className="text-blue-500 hover:scale-110 transition-transform" size={24} />
            </Link>
            <Link to={links.github} title="GitHub">
              <FaGithub className="text-black hover:scale-110 transition-transform" size={24} />
            </Link>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={handleDownload}
          >
            Download
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            onClick={onCloseBadge}
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Badge;

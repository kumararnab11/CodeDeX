import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ResumeNav() {
  const navigate = useNavigate();
  const handleNavigation = (e, path) => {
    e.preventDefault(); // Prevent default NavLink behavior
    navigate(path, { replace: true }); // Replace the current route with the new one
  };

  const navItems = [
    { name: "Education", path: "/resume/edit/education" },
    { name: "Projects", path: "/resume/edit/projects" },
    { name: "Achievements", path: "/resume/edit/achievements" },
    { name: "Skills", path: "/resume/edit/skills" },
    { name: "Work Experience", path: "/resume/edit/workexperience" },
    { name: "Leadership", path: "/resume/edit/leadership" },
  ];

  return (
    <nav className="bg-white p-4 shadow-md overflow-x-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-100">
      <ul className="flex justify-start gap-4 min-w-max">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              onClick={(e) => handleNavigation(e, item.path)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-100 hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ResumeNav;

import React, { useState } from "react";
import logo from './assets/logo.jpeg';

function Navbar() {
  const [isSlidebarOpen, setSlidebarOpen] = useState(false);

  return (
    <div className="bg-gray-400">
      <img src={logo} alt="Logo" className="h-14 w-40 p-2" />
    </div>
  );
}

export default Navbar;

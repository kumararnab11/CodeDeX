import React, { useState } from "react";
import Slidebar from "./Slidebar";
import { Button } from "./components/ui/button";

function Navbar() {
  const [isSlidebarOpen, setSlidebarOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-end p-4 bg-gray-100">
        <Button
          className="bg-orange-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-orange-600 transition"
          onClick={() => setSlidebarOpen(true)}
        >
          Quick Links
        </Button>
      </div>

      {/* Slidebar */}
      <Slidebar isOpen={isSlidebarOpen} onClose={() => setSlidebarOpen(false)} />
    </div>
  );
}

export default Navbar;

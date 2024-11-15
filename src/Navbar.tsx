import React from 'react';

function Navbar() {
  return (
    <div className="flex justify-end space-x-2 p-2 bg-gray-100">
      <button className="bg-orange-500 text-white text-sm font-medium py-1 px-3 rounded hover:bg-orange-600 transition duration-300">
        Edit Resume
      </button>
      <button className="bg-orange-500 text-white text-sm font-medium py-1 px-3 rounded hover:bg-orange-600 transition duration-300">
        View Resume
      </button>
      <button className="bg-orange-500 text-white text-sm font-medium py-1 px-3 rounded hover:bg-orange-600 transition duration-300">
        Download Resume
      </button>
    </div>
  );
}

export default Navbar;

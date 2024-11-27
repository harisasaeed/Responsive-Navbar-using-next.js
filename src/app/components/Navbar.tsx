"use client"

import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">MyApp</div>

        {/* Regular menu for large screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Burger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#home" className="block py-2 px-4 hover:bg-gray-600">Home</a>
          <a href="#about" className="block py-2 px-4 hover:bg-gray-600">About</a>
          <a href="#services" className="block py-2 px-4 hover:bg-gray-600">Services</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-gray-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-3xl font-bold tracking-wide">McLaren</div>
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#" className="hover:text-yellow-300 transition duration-300">Home</a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">About</a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">Contact</a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">Service</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">  
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

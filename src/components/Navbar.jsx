import React, { useState } from "react";

export default function Navbar() {
  const [smallMenu, setSmallMenu] = useState(false);

  const handleSmallMenu = () => {
    setSmallMenu(!smallMenu);
  };
  return (
    <>
      <header className="p-4 px-10 lg:px-24 shadow">
        <div className="container flex justify-between h-10 mx-auto">
          <div className="flex items-center   text-xl">
            {/* <img className="lg:block hidden" src="/vite.svg" alt="" /> */}
            <span>Zidane</span>
          </div>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex hover:bg-indigo-500 rounded-md items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-white transition-all duration-300">
                Home
              </a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#skills" className="flex hover:bg-indigo-500 rounded-md items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-white transition-all duration-300">
                Skills
              </a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#projects" className="flex hover:bg-indigo-500 rounded-md items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-white transition-all duration-300">
                Projects
              </a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#contact" className="flex hover:bg-indigo-500 rounded-md items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-white transition-all duration-300">
                Contact
              </a>
            </li>
          </ul>
          <button className="flex justify-end  items-center lg:hidden relative" onClick={handleSmallMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <div className={`absolute top-10 shadow-md rounded-tl-lg rounded-bl-lg rounded-br-lg w-36 bg-white ${smallMenu ? "scale-100 transition-all duration-500" : "scale-0 origin-top-right rotate-90 transition-all duration-500"}`}>
              <ul className="flex flex-col space-y-2 items-center p-3">
                <li className="hover:text-white transition-all duration-300 rounded-md hover:shadow hover:bg-indigo-500 px-4 py-1">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-white transition-all duration-300 rounded-md hover:shadow hover:bg-indigo-500 px-4 py-1">
                  <a href="#skills">Skills</a>
                </li>
                <li className="hover:text-white transition-all duration-300 rounded-md hover:shadow hover:bg-indigo-500 px-4 py-1">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-white transition-all duration-300 rounded-md hover:shadow hover:bg-indigo-500 px-4 py-1">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </header>
    </>
  );
}

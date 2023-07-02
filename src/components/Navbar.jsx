import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="p-4 px-12 lg:px-24 shadow">
        <div className="container flex justify-between h-10 mx-auto">
          <div className="flex items-center p-2  text-xl">
            {/* <img className="lg:block hidden" src="/vite.svg" alt="" /> */}
            <span>Zidane</span>
          </div>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 transition-all duration-300">
                Home
              </a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 transition-all duration-300">
                Skills
              </a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 transition-all duration-300">
                Projects
              </a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 transition-all duration-300">
                Contact
              </a>
            </li>
          </ul>
          <button className="flex justify-end  items-center lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

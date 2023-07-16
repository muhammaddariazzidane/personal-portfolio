import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavItem from "./NavItem";

export default function Navbar() {
  const [smallMenu, setSmallMenu] = useState(false);

  const handleSmallMenu = () => {
    setSmallMenu(!smallMenu);
  };

  return (
    <>
      <header className="p-4 px-10 lg:px-24 shadow">
        <div className="container flex justify-between h-10 mx-auto">
          <div className="flex items-center text-xl">
            <span className="font-semibold">Zidane</span>
          </div>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <NavItem href="#" label="Home" />
            <NavItem href="#skills" label="Skills" />
            <NavItem href="#projects" label="Projects" />
            <NavItem href="#contact" label="Contact" />
          </ul>
          <button className="flex justify-end items-center lg:hidden relative" onClick={handleSmallMenu}>
            {smallMenu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            <div
              className={`absolute top-10 shadow-md shadow-indigo-200 rounded-tl-lg rounded-bl-lg rounded-br-lg w-36 bg-white ${
                smallMenu ? "scale-100 transition-all duration-500" : "scale-0 origin-top-right rotate-90 transition-all duration-500"
              }`}
            >
              <ul className="flex flex-col space-y-2 items-center p-3">
                <NavItem href="#" label="Home" />
                <NavItem href="#skills" label="Skills" />
                <NavItem href="#projects" label="Projects" />
                <NavItem href="#contact" label="Contact" />
              </ul>
            </div>
          </button>
        </div>
      </header>
    </>
  );
}

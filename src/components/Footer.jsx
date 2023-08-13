import React from "react";
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-white pb-3 pt-12">
      <div className="max-w-screen-xl px-4 py-5 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-3 space-x-4">
          <a
            href="https://www.instagram.com/dzm416/"
            target="_blank"
            className="p-2  transition-all duration-300  shadow-md text-red-600  rounded-full"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://github.com/muhammaddariazzidane"
            target="_blank"
            className="p-2  transition-all duration-300  shadow-md text-gray-800  rounded-full"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.youtube.com/@zidaneuchiha1554"
            target="_blank"
            className="p-2  transition-all duration-300  shadow-md text-red-600  rounded-full"
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-dariaz-zidane/"
            target="_blank"
            className="p-2  transition-all duration-300  shadow-md text-blue-800  rounded-full"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className="mt-3 text-base leading-6 text-center text-gray-700">
          © 2023 MuhammadDariazZidane. All rights reserved.
        </p>
      </div>
    </section>
  );
}

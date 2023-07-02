import React from "react";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section className="flex gap-3 lg:flex-nowrap justify-center md:flex-nowrap flex-wrap md:py-12 py-6 px-12 lg:px-32 ">
        <div className="lg:w-1/2 w-full">
          <h1 className="lg:text-4xl text-4xl font-bold my-4">Hello There 👋</h1>
          <h3 className="font-semibold text-3xl ">I'm Muhammad Dariaz Zidane</h3>
          <h5 className="my-7 text-gray-600 lg:text-2xl text-xl">
            <span className="text-indigo-600">Fullstack</span> Web Developer.
          </h5>
          <button className="p-2  mt-2 px-4 rounded-full bg-indigo-600 shadow-lg text-white transition-all duration-300 hover:bg-indigo-500">Let's get in touch</button>
          <div className="flex mt-4 lb:mb-0 mb-4 space-x-2 items-center">
            <a href="" target="_blank" className="p-2  transition-all duration-300 shadow-md text-red-600  rounded-full">
              <FaInstagram size={25} />
            </a>
            <a href="https://github.com/muhammaddariazzidane" className="p-2  transition-all duration-300 shadow-md  text-gray-800  rounded-full">
              <FaGithub size={25} />
            </a>
            <a href="https://www.youtube.com/@zidaneuchiha1554" target="_blank" className="p-2  transition-all duration-300 shadow-md text-red-600  rounded-full">
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:block md:block hidden">
          <img src="/Formal.png" alt="" className=" rounded-full object-cover w-64 lg:w-96 h-64 lg:h-96 lg:translate-x-10 shadow-md  mx-auto" />
        </div>
      </section>
      ;
    </>
  );
}

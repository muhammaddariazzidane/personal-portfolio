import React from "react";
import {
  FaLaravel,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiPhp,
  SiCodeigniter,
  SiMysql,
  SiAlpinedotjs,
} from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="px-12 lg:px-32 pb-12  scroll-mb-96">
        <h1
          className="text-center font-semibold text-4xl my-5 lg:mb-14"
          id="skills"
          data-aos="fade-down"
        >
          My Skills
        </h1>
        <div className="flex py-7 flex-wrap justify-center items-center space-x-2 space-y-3 gap-3">
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
          >
            <div className="text-orange-500 flex justify-center ">
              <FaHtml5
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="300"
          >
            <div className="text-blue-500 flex justify-center ">
              <FaCss3
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="500"
          >
            <div className="text-yellow-400 flex justify-center ">
              <SiJavascript
                className="p-1 group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="700"
          >
            <div className="text-violet-600 flex justify-center ">
              <FaBootstrap
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="900"
          >
            <div className="text-teal-400 flex justify-center ">
              <SiTailwindcss
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-1 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="1100"
          >
            <div className="text-violet-900/70 flex justify-center ">
              <SiPhp
                className="group-hover:scale-125  transition-all duration-500"
                size={80}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="1300"
          >
            <div className="text-orange-500 flex justify-center ">
              <SiCodeigniter
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="1500"
          >
            <div className="text-red-600 flex justify-center ">
              <FaLaravel
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="1700"
          >
            <div className="text-zinc-700 flex justify-center ">
              <SiMysql
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="1900"
          >
            <div className="text-gray-700 flex justify-center ">
              <SiAlpinedotjs
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="2500"
          >
            <div className="text-lime-500 flex justify-center ">
              <FaNodeJs
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
          <div
            className="w-fit p-3 shadow rounded-full group cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="2700"
          >
            <div className="text-cyan-500 flex justify-center ">
              <FaReact
                className="group-hover:scale-125  transition-all duration-500"
                size={60}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

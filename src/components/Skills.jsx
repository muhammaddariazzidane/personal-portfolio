import React from "react";
import { FaLaravel, FaHtml5, FaCss3, FaBootstrap, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiPhp, SiCodeigniter, SiMysql, SiAlpinedotjs } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="px-12 lg:px-32 pb-12  scroll-mb-96">
        <h1 className="text-center font-semibold text-4xl my-5 lg:mb-14" id="skills" data-aos="fade-down">
          My Skills
        </h1>
        <div className="flex py-7 flex-wrap justify-center items-center space-x-2 gap-3">
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right">
            <div className="text-orange-600 flex justify-center ">
              <FaHtml5 size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="300">
            <div className="text-blue-500 flex justify-center ">
              <FaCss3 size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="500">
            <div className="text-yellow-400 flex justify-center ">
              <SiJavascript size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="700">
            <div className="text-violet-600 flex justify-center ">
              <FaBootstrap size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="900">
            <div className="text-teal-400 flex justify-center ">
              <SiTailwindcss size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="1100">
            <div className="text-violet-900/70 flex justify-center ">
              <SiPhp size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="1300">
            <div className="text-orange-500 flex justify-center ">
              <SiCodeigniter size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="1500">
            <div className="text-red-600 flex justify-center ">
              <FaLaravel size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="1700">
            <div className="text-orange-600 flex justify-center ">
              <SiMysql size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="1900">
            <div className="text-gray-700 flex justify-center ">
              <SiAlpinedotjs size={60} />
            </div>
          </div>
          <div className="lg:w-1/6 sm:w-1/2 md:w-1/4 w-1/4" data-aos="fade-down-right" data-aos-delay="2500">
            <div className="text-cyan-500 flex justify-center ">
              <FaReact size={60} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

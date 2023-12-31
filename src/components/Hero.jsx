import React from "react";
import { FaInstagram, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Hero() {
  return (
    <section className="flex gap-3 lg:flex-nowrap justify-center md:flex-nowrap flex-wrap md:py-12 py-6 px-12 lg:px-32">
      <div className="lg:w-1/2 w-full">
        <h1 className="lg:text-4xl text-4xl font-bold my-4">Hello There 👋</h1>
        <h3 className="font-semibold text-3xl">I'm Muhammad Dariaz Zidane</h3>
        <h5 className="my-7 text-gray-600 lg:text-2xl text-xl">
          <span className="text-indigo-600">Fullstack</span> Web Developer.
        </h5>
        <a
          href="#"
          download="true"
          className="p-2 mt-2   px-4 rounded-full flex w-fit items-center gap-1 bg-indigo-600 shadow-lg text-white transition-all duration-300 hover:bg-indigo-500"
        >
          <span>Download CV</span>
          <AiOutlineDownload size={22} />
        </a>
        <div className="flex mt-4 lb:mb-0 mb-4 space-x-2 items-center">
          <a
            href="https://www.instagram.com/dzm416/"
            data-aos="fade-down"
            data-aos-duration="700"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-all duration-300 shadow-md text-red-600 rounded-full"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://github.com/muhammaddariazzidane"
            data-aos="fade-down"
            data-aos-duration="700"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-all duration-300 shadow-md text-gray-800 rounded-full"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.youtube.com/@zidaneuchiha1554"
            data-aos="fade-down"
            data-aos-duration="700"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-all duration-300 shadow-md text-red-600 rounded-full"
          >
            <FaYoutube size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-dariaz-zidane/"
            data-aos="fade-down"
            data-aos-duration="700"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-all duration-300 shadow-md text-blue-800 rounded-full"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 w-full ">
        <LazyLoadImage
          src="/new_formal.png"
          alt="/"
          effect="blur"
          className="rounded-full rotate-3 object-cover w-64 lg:w-96 h-64 lg:h-96 lg:translate-x-10 shadow-md mx-auto"
        />
      </div>
    </section>
  );
}

import React from "react";
import { HiMail } from "react-icons/hi";

export default function About() {
  return (
    <div className="lg:py-12 md:py-12 px-10 lg:px-32">
      <h1 className="text-center font-semibold text-4xl my-5  ">About me</h1>
      <div className="flex justify-center space-x-4  flex-wrap gap-4 py-12">
        <div className="max-w-xl ">
          <img src="/new_formal.png" className="rounded-full rotate-2 shadow w-64 lg:w-72 h-64 lg:h-72 object-cover" alt="" />
        </div>
        <div className="max-w-2xl  p-2">
          {/* A fourth-semester student at Bina Sarana Informatika University with expertise in web development, I am proficient in HTML, CSS, JavaScript, object-oriented PHP, and the CodeIgniter framework. I have successfully completed various
          web development projects utilizing these skill sets. I am continuously keeping up with industry advancements and updating my skills through online learning platforms such as Skilvul and Dicoding.
           */}
          <p className="text-lg">
            Allow me to introduce myself, my name is Muhammad Dariaz Zidane. Currently, I reside in Karawang, West Java. I am a 21-year-old student at Bina Sarana Informatika University. My expertise lies in web development, particularly in
            full-stack web development. I am highly motivated to learn and enhance my skills in these fields, constantly seeking new and exciting projects to work on. I stay updated with industry advancements and continuously improve my
            skills through online learning platforms and YouTube.
          </p>
          <div className="mt-2 space-x-2 flex items-center">
            <HiMail size={35} className="bg-red-600 text-white rounded-md p-1" />
            <span className="text-lg">dariazzidane@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

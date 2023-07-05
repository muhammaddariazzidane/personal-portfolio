import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function BackToTop({ show }) {
  return (
    <>
      <div className={`${show ? "fixed" : "scale-0"} origin-bottom-right transition-all duration-500 fixed z-[9999] hover:cursor-pointer bottom-4 right-4`}>
        <div className="p-2 shadow-xl bg-indigo-600 rounded-full">
          <a href="#">
            <AiOutlineArrowUp className="h-8 w-8 text-white hover:animate-pulse" />
          </a>
        </div>
      </div>
    </>
  );
}

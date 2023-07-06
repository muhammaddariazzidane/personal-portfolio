import React, { useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

export default function Certificate({ sertifikat }) {
  // console.log();
  const SlideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 310;
  };
  const SlideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 310;
  };

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (serti, i) => {
    setCurrentIndex(i);
    setClickedImg(serti.image);
  };
  const resetClick = () => {
    setCurrentIndex(null);
    setClickedImg(null);
  };
  return (
    <>
      <h1 className="text-center font-semibold text-4xl my-5 lg:mb-14" id="certificate">
        My Certificate
      </h1>
      <div className="max-w-4xl mx-auto relative lg:px-0 px-6 pb-24">
        <div className="flex w-full  justify-center items-center">
          <MdChevronLeft onClick={SlideLeft} className="lg:w-12 lg:h-12 w-10 h-10 block lg:-left-12 left-1 absolute bg-indigo-600 text-violet-200 hover:animate-pulse  rounded-full cursor-pointer z-10" />

          <div id={"slider"} className="w-full  scrollbar-hide h-full overflow-x-scroll scroll whitespace-nowrap">
            <div>
              {sertifikat.map((serti, i) => (
                <div onClick={() => handleClick(serti, i)} className="lg:h-[50%] h-[80%]  w-[80%] lg:w-[50%] inline-block cursor-pointer relative p-3" key={i}>
                  <img className="w-full  h-full object-cover shadow" src={serti.image} alt="image" />
                </div>
              ))}
            </div>
          </div>

          <MdChevronRight onClick={SlideRight} className="lg:w-12 lg:h-12 w-10 h-10 block  lg:-right-12 right-1 absolute bg-indigo-600 text-violet-200 hover:animate-pulse  rounded-full cursor-pointer z-10" />
        </div>
      </div>
      {clickedImg && (
        <div onClick={resetClick} className="fixed top-0 bottom-0 right-0 left-0 z-[9991] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <img src={clickedImg} className="lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-xs" alt={clickedImg} />
        </div>
      )}
    </>
  );
}

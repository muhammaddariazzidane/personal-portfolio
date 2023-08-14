import React, { useState, useRef } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Certificate({ sertifikat }) {
  const sliderRef = useRef(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 310;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 310;
  };

  const handleClick = (serti, i) => {
    setCurrentIndex(i);
    setClickedImg(serti.image);
  };

  const resetClick = () => {
    setCurrentIndex(null);
    setClickedImg(null);
  };

  return (
    <div className="max-w-4xl mx-auto relative lg:px-0 px-6 pb-24">
      <h1
        className="text-center font-semibold text-4xl my-5 lg:mb-14"
        id="certificate"
      >
        My Certificate
      </h1>
      <div className="flex w-full justify-center items-center relative">
        <MdChevronLeft
          onClick={slideLeft}
          className="w-10 h-10 block absolute bg-indigo-600 text-violet-200 hover:animate-pulse rounded-full cursor-pointer z-10 left-1 lg:-left-12"
        />

        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll scrollbar-hide whitespace-nowrap"
        >
          {sertifikat.map((serti, i) => (
            <div
              key={i}
              onClick={() => handleClick(serti, i)}
              className={`inline-block p-3 w-[80%] h-[80%] lg:w-[50%] lg:h-[50%] cursor-pointer relative ${
                currentIndex === i ? "border-4 border-indigo-500" : ""
              }`}
            >
              <LazyLoadImage
                effect="blur"
                className="w-full h-full object-cover shadow"
                src={serti.image}
                alt="image"
              />
            </div>
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          className="w-10 h-10 block absolute bg-indigo-600 text-violet-200 hover:animate-pulse rounded-full cursor-pointer z-10 right-1 lg:-right-12"
        />
      </div>

      {clickedImg && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 z-[9991] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={resetClick}
        >
          <LazyLoadImage
            effect="blur"
            src={clickedImg}
            className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
            alt={clickedImg}
          />
        </div>
      )}
    </div>
  );
}

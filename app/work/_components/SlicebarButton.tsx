"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SlicebarButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex gap-2 absolute right0 button[calc(50%_-_22px)] xl:botton-0 z-20 w-full justify-between xl:w-max xl:justify-none">
      <button
        className="bg-green-500 text-yellow-500 flex justify-center items-center"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className="text-3xl" />
      </button>
      <button
        className="bg-green-500 text-yellow-500 flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className="text-3xl" />
      </button>
    </div>
  );
};

export default SlicebarButton;

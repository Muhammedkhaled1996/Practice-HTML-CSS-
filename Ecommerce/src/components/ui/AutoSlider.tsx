"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../node_modules/swiper/swiper.css";


import { Autoplay, Pagination, Navigation } from "swiper/modules";

type Props = {
  slides: React.ReactNode[];
  className?: string;
};

export default function AutoSlider({ slides, className }: Props) {
  return (
    <div className={`w-full h-full ${className || ""}`}>
      <Swiper
      spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter:true,

        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="
        w-full h-full
        [&_.swiper-button-next]:hidden! 
        [&_.swiper-button-prev]:hidden!
        md:[&_.swiper-button-next]:flex! 
        md:[&_.swiper-button-prev]:flex!

      [&_.swiper-button-next]:text-white!
      [&_.swiper-button-prev]:text-white!
        [&_.swiper-button-next]:after:text-[20px]!
        [&_.swiper-button-prev]:after:text-[20px]!

      [&_.swiper-pagination-bullet]:bg-gray-400!
        [&_.swiper-pagination-bullet]:opacity-100!
        [&_.swiper-pagination-bullet]:w-3!
        [&_.swiper-pagination-bullet]:h-3!

      [&_.swiper-pagination-bullet-active]:bg-white!
        [&_.swiper-pagination-bullet-active]:w-6!
        "
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center bg-gray-700 text-white text-lg"
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

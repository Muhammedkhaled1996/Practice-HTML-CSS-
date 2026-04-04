"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper/modules";
import { sepesificProductResponce } from "@/src/types/allProduct.interface";
import Image from "next/image";

type Props = {
  product: sepesificProductResponce;
};

export default function Gallery({ product }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  return (
    <>
      {/* MAIN */}
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[FreeMode, Thumbs]}
        className="w-full rounded-xl overflow-hidden"
      >
        {product.data.images.map((ele, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setZoom((prev) => !prev)}
              className="relative w-full h-100 overflow-hidden cursor-zoom-in"
            >
              <Image
                src={ele}
                alt="product image"
                fill
                className={`object-cover transition-transform duration-300 ${
                  zoom ? "scale-150 cursor-zoom-out" : ""
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBS */}
      <div className="mt-3 overflow-hidden">
        <Swiper
          onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className=""
        >
          {product.data.images.map((ele, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rounded-lg overflow-hidden border transition-all duration-200
                ${
                  activeIndex === index
                    ? "border-blue-500 border-2"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={ele}
                  alt="product image"
                  width={200}
                  height={200}
                  className="w-full h-20 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

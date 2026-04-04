"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Navigation } from "swiper/modules";
import { Product } from "@/src/types/allProduct.interface";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "lucide-react";
import { ProductCard } from "../../publicComponents/ProductCard/ProductCard";

interface Props {
  relatedProducts: Product[];
}

export default function SliderRelatedProduct({ relatedProducts }: Props) {
  return (
    <>
      <div className="my-4 relative">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            You May Also <span className="text-emerald-600">Like</span>
          </h2>
        </div>

        <div className="flex gap-2 absolute top-0 right-0 z-10">
          <div className="custom-prev w-10 h-10 flex items-center justify-center bg-white rounded-full shadow cursor-pointer hover:bg-green-100 transition">
            <FaArrowLeft />
          </div>
          <div className="custom-next w-10 h-10 flex items-center justify-center bg-white rounded-full shadow cursor-pointer hover:bg-green-100 transition">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={15}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="mySwiper pt-12"
      >
        {relatedProducts?.map((ele) => (
          <SwiperSlide key={ele._id}>
            <ProductCard product={ele} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

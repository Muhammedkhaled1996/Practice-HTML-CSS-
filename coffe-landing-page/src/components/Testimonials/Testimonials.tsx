"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import Jonny from "@/assets/images/person1.jpeg";
import shap1 from "@/assets/images/shap1.png";

const testimonials = [
  {
    name: "Jonny Thomas",
    role: "Project Manager",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    image: Jonny,
  },
  {
    name: "Sarah Ali",
    role: "Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    image: Jonny,
  },
];

export default function Testimonials() {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <section className="bg-sokari font-playfair">
      <div className="container px-6 md:px-16 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 items-center justify-center text-center"
        >
          <h2 className="text-4xl md:text-[54px] font-bold text-coffee">
            Our coffee perfection feedback
          </h2>
          <p className="text-secondary text-lg md:text-[20px] tracking-wide">
            Our customers has amazing things to say about us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl, nextEl }}
          loop={true}
          className="my-6 relative !pb-14"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide
              key={i}
              className="flex justify-center overflow-visible"
            >
              <div className="relative w-full md:w-2/3 mx-auto text-center overflow-visible">
                {/* Quote Icon */}
                <Image
                  width={200}
                  height={200}
                  alt="shap1"
                  src={shap1}
                  className="absolute top-3 left-3 w-15  opacity-40 "
                />

                {/* Card */}
                <div className="bg-amber-200/20 border border-amber-200 px-10 pt-16 pb-20 ">
                  <p className="text-gray-600 text-lg leading-8">{item.text}</p>

                  <h4 className="mt-6 text-2xl font-bold text-coffee">
                    {item.name}
                  </h4>

                  <p className="text-gray-500">{item.role}</p>
                </div>

                {/* Avatar */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={90}
                    height={90}
                    className="rounded-xl border-4 border-white shadow-md object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Navigation */}
          <button
            ref={(node) => setPrevEl(node)}
            className="cursor-pointer absolute hidden md:block left-1/6 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border border-amber-100 size-12 rounded-lg flex items-center justify-center text-coffee hover:bg-coffee hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex justify-center items-center">
              <ChevronLeft />
            </div>
          </button>
          <button
            ref={(node) => setNextEl(node)}
            className="cursor-pointer absolute hidden md:block right-1/6 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border border-amber-100 size-12 rounded-lg flex items-center justify-center text-coffee hover:bg-coffee hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex justify-center items-center">
              <ChevronRight />
            </div>
          </button>
        </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import leftCup from "@/../public/images/leftCup.png";
import rightCup from "@/../public/images/rightCup.png";

export default function Subscribe() {
  return (
    <section  id="contact" className="relative min-h-[370px] py-12 bg-[url('/images/CTASection.png')] bg-cover bg-center bg-no-repeat font-playfair ">
      <div className="container">
        <div className="absolute inset-0 bg-coffee/80" />
        <div className="flex flex-col justify-center text-center items-center h-full w-full px-6 md:px-16 text-white gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col justify-center items-center w-full text-center"
          >
            <h2 className="text-4xl md:text-[54px] font-bold">
              Subscribe to get the Latest News
            </h2>
            <p className="mt-4 text-[18px] text-white/70 font-extralight">
              Don’t miss out on our latest news, updates, tips and special
              offers
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 mt-6 flex justify-center w-full md:w-1/3 "
          >
            <input
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-black bg-white"
            />

            <button className="bg-main-gold px-6 rounded-r-lg text-black font-bold">
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="absolute hidden md:block -bottom-30 -left-10 w-80 z-10"
      >
        <Image
          src={leftCup}
          alt="Coffee"
          width={400}
          height={300}
          className="w-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="absolute hidden md:block -bottom-35 -right-0 w-80 z-10 overhi "
      >
        <Image
          src={rightCup}
          alt="Coffee"
          width={400}
          height={300}
          className="w-full"
        />
      </motion.div>
    </section>
  );
}

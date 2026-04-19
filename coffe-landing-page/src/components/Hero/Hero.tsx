"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-8 overflow-hidden font-playfair bg-[url('/images/heroSection.png')] bg-cover bg-center bg-no-repeat bg-fixed backdrop:blur-2xl"
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/60 from-50%  to-transparent backdrop:blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="container relative z-10 text-white flex justify-center items-center md:justify-start md:items-start flex-col"
      >
        <p className="text-[22px] opacity-80 pt-20">
          We’ve got your morning covered with
        </p>

        <h1 className="text-[180px] md:text-[220px] text-main-gold font-clicker">
          Coffee
        </h1>

        <p className="mt-4 text-white/80 w-full md:w-2/3 lg:w-1/3 text-[20px] leading-8.5 text-center md:text-left">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>

        <button className="mt-6 px-6 py-3 bg-main-gold text-black rounded-full font-semibold hover:scale-105 transition">
          Order Now
        </button>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import cup from "@/../public/images/cup.png";
import coffee_bean from "@/../public/images/coffee_bean.png";

export default function CTA() {
  return (
    <section className="relative min-h-145 py-12 bg-[url('/images/CTASection.png')] bg-cover bg-center bg-no-repeat font-playfair ">
      <div className="absolute inset-0 bg-coffee/80" />
      <div className="container grid  md:grid-cols-2 justify-center items-center h-full w-full px-6 md:px-16 text-white gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col justify-center items-center w-full text-center md:text-left md:items-start"
        >
          <h2 className="text-4xl md:text-[54px] font-bold">
            Get a chance to have an Amazing morning
          </h2>

          <p className="mt-4 text-[22px] w-2/3 text-white/80">
            We are giving you are one time opportunity to experience a better
            life with coffee.
          </p>

          <button className="cursor-pointer mt-6 px-6 py-3 bg-[#F9C06A] text-black rounded-full">
            Order Now
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 flex justify-center items-center"
        >
          <Image src={cup} alt="Coffee" width={400} height={300} className="w-75 hover:-translate-y-2 hover:scale-110 transition-all duration-200 hover:rotate-5" />
        </motion.div>
      </div>
      <Image src={coffee_bean} alt="Coffee" width={400} height={300} className="absolute bottom-0 right-0 w-125" />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import flatCup from "@/assets/images/stylized-cup-coffee-out-coffee-beans-flat-lay 1.png";
import coffeeShape from "@/assets/images/coffee_blast.png";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative font-playfair bg-sokari ">
      <div className="container px-6 md:px-16 py-12 grid md:grid-cols-2 gap-6 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl  lg:text-[54px] text-shadow-lg font-bold text-coffee">
            Discover the best coffee
          </h2>

          <p className="mt-6 text-secondary lg:text-[20px] md:leading-6 lg:leading-8.5  ">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>

          <button className="relative z-20 cursor-pointer mt-8 px-6 py-3 bg-main-gold text-black rounded-full font-semibold hover:scale-105 transition">
            Learn More
          </button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full flex justify-center items-center"
        >
          <Image
            width={200}
            height={200}
            src={flatCup}
            alt="coffee"
            className="w-[500px]  object-cover"
          />
        </motion.div>
      </div>

      <Image
        width={200}
        height={200}
        src={coffeeShape}
        alt="coffee"
        className="absolute -bottom-[80px] lg:-bottom-[100px]  lg:-bottom-[120px] left-0 w-2/3 md:w-[498px] z-10"
      />
    </section>
  );
}

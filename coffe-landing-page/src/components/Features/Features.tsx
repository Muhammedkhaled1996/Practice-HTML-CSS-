"use client";
import { motion } from "framer-motion";
import { Coffee, Star, Award, DollarSign } from "lucide-react";

import image1 from "@/assets/images/coffee-beans 1.png";
import image2 from "@/assets/images/badge 1.png";
import image3 from "@/assets/images/coffee-cup 1.png";
import image4 from "@/assets/images/best-price 1.png";
import { image } from "framer-motion/client";
import Image from "next/image";

const features = [
  {
    icon: Coffee,
    title: "Supreme Beans",
    desc: "Best taste beans",
    image: image1,
  },
  {
    icon: Star,
    title: "High Quality",
    desc: "Premium coffee quality",
    image: image2,
  },
  {
    icon: Award,
    title: "Extraordinary",
    desc: "Unique experience",
    image: image3,
  },
  { icon: DollarSign, title: "Affordable", desc: "Best price", image: image4 },
];

export default function Features() {
  return (
    <section id="about" className=" bg-sokari">
      <div className="container px-6 md:px-16 py-12 text-center font-playfair flex flex-col gap-2">
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 flex-col"
        >
          <h2 className="text-4xl md:text-[54px] font-bold text-coffee">
            Why are we different?
          </h2>
          <p className="text-secondary md:text-[20px] md:leading-8.5 tracking-wide">
            We don’t just make your coffee, we make your day!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mt-14">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.10  }}
                className="p-8 bg-amber-200/20 border border-amber-200"
              >
                <Image
                  width={100}
                  height={100}
                  src={item.image}
                  alt={item.title}
                  className="mx-auto mb-4 size-15"
                />
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="flex flex-col gap-2 items-center"
        >
          <div className="flex justify-center items-center gap-2 flex-col mt-16">
            <p className="text-secondary md:text-[20px] md:leading-8.5 tracking-wide text-center">
              Great ideas start with great coffee, Lets help you achieve that{" "}
            </p>
            <span className="text-4xl md:text-[54px] font-bold text-coffee">
              Get started today.
            </span>
          </div>
          <button className="cursor-pointer w-fit bg-main-gold self-center px-6 py-2 rounded-full hover:scale-105 duration-300 transition-all hover:shadow-xl mt-4">
            Join Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

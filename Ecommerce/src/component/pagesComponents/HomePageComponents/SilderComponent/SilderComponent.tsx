"use client";
import AutoSlider from "@/src/components/ui/AutoSlider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cart from "@/src/assets/images/freshcartpic.png";

export default function SilderComponent() {
  return (
    <AutoSlider
      slides={[
        <React.Fragment key="slide-1">
          <Image src={cart} alt="cart" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-green-600/80 to-green-400/60"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl text-white font-bold text-4xl text-center md:text-start">
                <motion.p
                  initial={{ x: -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="max-md:text-center"
                >
                  Fresh Product Delivered
                </motion.p>

                <motion.p
                  initial={{ x: -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  to your Door
                </motion.p>

                <motion.p
                  initial={{ x: -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-lg mt-2 font-normal"
                >
                  Get 20% off your first order
                </motion.p>

                <motion.div
                  initial={{ x: 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-3 mt-4 max-md:justify-center"
                >
                  <Link
                    href={"/products"}
                    className="px-3 py-2 text-2xl rounded-xl bg-white text-green-600 hover:scale-105 transition-all"
                  >
                    Shop Now
                  </Link>

                  <Link
                    href={"/contact"}
                    className="px-3 py-2 text-2xl rounded-xl border border-white text-white hover:scale-105 transition-all"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        <React.Fragment key="slide-2">
          <Image
            src={cart}
            alt="cart"
            className="relative w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-green-600/80 to-green-400/60"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl text-white font-bold text-4xl text-center md:text-start">
                <p>Fast & Free Delivery</p>
                <span className="text-lg font-normal block mt-2">
                  Same day delivery available{" "}
                </span>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-6 ">
                  <Link
                    href={"/products"}
                    className="px-3 py-2 text-2xl rounded-xl cursor-pointer bg-white text-green-600 hover:scale-105 duration-200 transition-all"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href={"/contact"}
                    className="px-3 py-2 text-2xl rounded-xl cursor-pointer bg-transparent text-white border border-white hover:scale-105 duration-200 transition-all "
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        <React.Fragment key="slide-3">
          <Image
            src={cart}
            alt="cart"
            className="relative w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-green-600/80 to-green-400/60"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl text-white font-bold text-4xl text-center md:text-start">
                <p>Premium Quality</p>
                <span>Guaranteed</span>
                <br className="max-md:hidden" />
                <span className="text-lg my-4 font-normal block">
                  Fresh from farm to your table{" "}
                </span>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-6 ">
                  <Link
                    href={"/products"}
                    className="px-3 py-2 text-2xl rounded-xl cursor-pointer bg-white text-green-600 hover:scale-105 duration-200 transition-all"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href={"/contact"}
                    className="px-3 py-2 text-2xl rounded-xl cursor-pointer bg-transparent text-white border border-white hover:scale-105 duration-200 transition-all "
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
      ]}
    />
  );
}

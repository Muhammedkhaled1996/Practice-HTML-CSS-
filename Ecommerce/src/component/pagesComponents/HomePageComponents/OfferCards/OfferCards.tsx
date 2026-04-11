"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function OfferCards() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay:0.2 , ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 p-8 text-white"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
              <span>🔥</span>
              <span>Deal of the Day</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Fresh Organic Fruits
            </h3>
            <p className="text-white/80 mb-4">
              Get up to 40% off on selected organic fruits
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl font-bold">40% OFF</div>
              <div className="text-sm text-white/70">
                Use code:{" "}
                <span className="font-bold text-white">ORGANIC40</span>
              </div>
            </div>
            <Link
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              href="/products"
            >
              Shop Now
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-400 to-rose-500 p-8 text-white"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
              <span>✨</span>
              <span>New Arrivals</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Exotic Vegetables
            </h3>
            <p className="text-white/80 mb-4">
              Discover our latest collection of premium vegetables
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl font-bold">25% OFF</div>
              <div className="text-sm text-white/70">
                Use code: <span className="font-bold text-white">FRESH25</span>
              </div>
            </div>
            <Link
              className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              href="/products?sort=newest"
            >
              Explore Now
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

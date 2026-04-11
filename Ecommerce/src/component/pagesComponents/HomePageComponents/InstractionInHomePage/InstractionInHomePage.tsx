"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { FaHeadset, FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function InstractionInHomePage() {
  return (
    <div className="bg-gray-50">
      <div className="container py-6 px-4 md:px-0">
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-blue-50 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <FaTruck />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Free Shipping
              </h3>
              <p className="text-xs text-gray-500">On orders over 500 EGP</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-emerald-50 text-emerald-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <FaShieldAlt />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Secure Payment
              </h3>
              <p className="text-xs text-gray-500">100% secure transactions</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-orange-50 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <FaArrowRotateLeft />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Easy Returns
              </h3>
              <p className="text-xs text-gray-500">14-day return policy</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-purple-50 text-purple-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <FaHeadset />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                24/7 Support
              </h3>
              <p className="text-xs text-gray-500">Dedicated support team</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

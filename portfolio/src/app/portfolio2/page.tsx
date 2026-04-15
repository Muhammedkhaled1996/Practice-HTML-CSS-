"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-[#FBFBFB] dark:bg-darkBg">
      {/* الـ Background Circle خلف الصورة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <span className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium dark:text-white">
          Hello!
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4 dark:text-white">
          I'm{" "}
          <span className="text-primary">
            <TypeAnimation
              sequence={["Jenny", 2000, "Product Designer", 2000]}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h1>

        <p className="max-w-md mx-auto text-gray-500 dark:text-gray-400">
          Jenny’s Exceptional product design ensures our website’s success.
          Highly Recommended.
        </p>
      </motion.div>

      {/* منطقة الصورة الشخصية */}
      <div className="relative mt-12 w-full max-w-lg">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 flex justify-center"
        >
          {/* استبدل المسار بصورتك */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-darkCard shadow-2xl">
            <Image
              src="/hero-image.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -right-4 top-1/4 bg-white dark:bg-darkCard p-4 rounded-2xl shadow-lg"
          >
            <p className="text-2xl font-bold text-primary">10 Years</p>
            <p className="text-xs text-gray-400">Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  { title: "UI/UX Design", icon: "🎨", count: "120+ Projects" },
  { title: "Web Design", icon: "💻", count: "85+ Projects" },
  { title: "Landing Page", icon: "🚀", count: "50+ Projects" },
];

export function Services() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-darkBg">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold dark:text-white">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="max-w-xs text-sm text-gray-500">
            Helping you build better products with modern design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[40px] bg-[#F3F3F3] dark:bg-darkCard border border-transparent hover:border-primary transition-all group"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-8">{service.count}</p>
              <div className="w-12 h-12 rounded-full bg-white dark:bg-black flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="group-hover:text-white">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-100 dark:bg-darkCard transition-all"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}

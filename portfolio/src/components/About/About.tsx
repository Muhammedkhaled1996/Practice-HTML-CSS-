import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const cn = (...classes: any) => classes.filter(Boolean).join(" ");

export default function About() {
  const timeline = [
    {
      year: "2021",
      title: "Frontend Beginner",
      company: "Freelance",
      desc: "Started the journey by learning HTML, CSS, and JavaScript fundamentals to build responsive static websites.",
    },
    {
      year: "2022",
      title: "Frontend Trainee",
      company: "Route Academy",
      desc: "Focused on modern frontend development using React, building dynamic user interfaces and understanding best practices.",
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Creative Agency",
      desc: "Developed interactive UI components, integrated APIs, and improved performance for web applications.",
    },
    {
      year: "2024",
      title: "Mid-Level Frontend Developer",
      company: "Tech Solutions",
      desc: "Built scalable Next.js applications, enhanced UX, and collaborated with teams to deliver high-quality products.",
    },
    {
      year: "2025",
      title: "Senior Frontend Developer",
      company: "Route Academy",
      desc: "Mentoring developers, reviewing code, and leading frontend architecture using React and Next.js.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-20 underline decoration-orange-500 decoration-4 underline-offset-2">
          My Journey
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-orange-500/0 via-orange-500 to-orange-500/0 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {timeline.map((item, idx) => (
              <TimelineItem key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TimelineItem = ({ item, idx }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // تحديد إذا كان العنصر فردي أم زوجي للعرض يمين أو شمال
  const isEven = idx % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col md:flex-row items-center justify-between w-full mb-12",
        isEven ? "md:flex-row-reverse" : "md:flex-row",
      )}
    >
      {/* 1. Spacer for Desktop - Occupies the opposite side */}
      <div className="hidden md:block w-[45%]" />

      {/* 2. Center Dot - The anchor point */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white dark:border-[#1E1E1E] shadow-[0_0_15px_rgba(249,115,22,0.5)]"
        />
      </div>

      {/* 3. Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-[45%] bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl hover:border-orange-500/30 transition-colors relative"
      >
        {/* Arrow for Desktop - Points toward the center dot */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 hidden md:block w-4 h-4 bg-gray-50 dark:bg-slate-800 rotate-45 border-gray-100 dark:border-gray-800",
            /* If even, card is on the left, arrow should be on the right pointing right */
            /* If odd, card is on the right, arrow should be on the left pointing left */
            isEven ? "-right-2 border-r border-t" : "-left-2 border-l border-b",
          )}
        />

        <span className="text-orange-500 font-black text-sm tracking-tighter bg-orange-500/10 px-3 py-1 rounded-full">
          {item.year}
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3">
          {item.title}
        </h3>
        <p className="text-orange-500/80 font-medium text-sm mb-3">
          {item.company}
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
};

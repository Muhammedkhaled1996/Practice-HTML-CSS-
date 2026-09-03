import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const cn = (...classes: any) => classes.filter(Boolean).join(" ");

export default function About() {
  const timeline = [
    {
      year: "2013 – 2018",
      title: "B.Sc. in Architectural Engineering",
      company: "Military Technical College (MTC)",
      badge: "Highest Honors",
      desc: "Graduated with Highest Honors (Excellent with Honors). Built a solid foundation in engineering problem-solving, structural precision, advanced mathematics, and leadership under high-pressure environments.",
    },
    {
      year: "2018 – Present",
      title: "Systems & Database Solutions Engineer",
      company: "Engineering & Management Authority",
      badge: "60% Time Saved",
      desc: "Built internal management systems using SQL Server and MS Access (VBA). Automated BOQ & cost estimation, cutting preparation time by 60% and eliminating calculation errors. Built interactive Power BI dashboards for executive tracking.",
    },
    {
      year: "2024 – Present",
      title: "Frontend Developer (React.js & Next.js)",
      company: "Freelance / Self-Employed",
      badge: "Production Apps",
      desc: "Architected and delivered fast, responsive web applications and commercial platforms using Next.js, React, and Tailwind CSS. Implemented state management (Redux Toolkit / Context API) and RESTful API integrations.",
    },
    {
      year: "2025 – 2026",
      title: "Frontend Development Fellow",
      company: "Route Academy",
      badge: "Professional Diploma",
      desc: "Completed an intensive professional program building 8+ production-ready web applications. Mastered TypeScript, React.js lifecycle and performance optimization, Next.js App Router (SSR/SSG), and Agile sprint collaboration.",
    },
    {
      year: "Ongoing",
      title: "Full-Stack & Systems Architecture",
      company: "Continuous Specialization",
      badge: "In Progress",
      desc: "Expanding full-stack engineering proficiency with Node.js, Express.js, and MongoDB, bridging scalable backend services with high-performance, data-driven frontend interfaces.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Background & Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">
            My <span className="text-orange-500">Journey</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            From military engineering discipline and database automation to modern
            full-stack and frontend architecture. Here is how my technical journey
            evolved over the years.
          </p>
        </div>

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

        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="text-orange-500 font-black text-sm tracking-tighter bg-orange-500/10 px-3 py-1 rounded-full">
            {item.year}
          </span>
          {item.badge && (
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-200/70 dark:bg-slate-700/60 px-2.5 py-0.5 rounded-full">
              {item.badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
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

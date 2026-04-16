import React, { useState } from "react";

import freshCartApp from "@/assets/images/apps/FreshCart.png";
import blablaApp from "@/assets/images/apps/blablaSocialMedia.png";
import gameArena from "@/assets/images/apps/gameArena.png";
import nutriPlan from "@/assets/images/apps/nutriPlan.png";
import whatDinner from "@/assets/images/apps/what'sDinner.png";
import contacthub from "@/assets/images/apps/contacthub.png";
import adasa from "@/assets/images/apps/3adasa.png";
import elitehome from "@/assets/images/apps/eliteHomes.png";
import modaber from "@/assets/images/apps/modaber.png";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../About/About";
import Image from "next/image";
import { Cpu, Layout, Rocket } from "lucide-react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const projectList = [
    {
      title: "E-Commerce App",
      category: "Next.Js",
      img: freshCartApp,
      demo: "https://freshcart-khaki-one.vercel.app/",
      desc: "An online store built with React, featuring a dynamic product catalog, shopping cart, and seamless checkout experience.",
      tech: ["React", "Tailwind", "Vite"],
    },
    {
      title: "Social Media Platform",
      category: "React",
      img: blablaApp,
      demo: "https://social-media-app-ten-theta.vercel.app/",
      desc: "A modern social media platform built with React, offering interactive user feeds, real-time updates, and seamless user engagement features.",
      tech: ["React", "Tailwind", "Vite"],
    },
    {
      title: "Games Website",
      category: "Vanilla JS",
      img: gameArena,
      demo: "https://gameswebsite-ruddy.vercel.app/",
      desc: "A dynamic games website built with Vanilla JavaScript, featuring multiple interactive games, smooth gameplay, and an engaging user experience.",
      tech: ["Html", "Css", "Vanilla JS"],
    },
    {
      title: "NutriPlan Website",
      category: "Vanilla JS",
      img: nutriPlan,
      demo: "https://nutriplan-mu.vercel.app/",
      desc: "A responsive nutrition-focused website built with Vanilla JavaScript, offering personalized meal plans, healthy recipes, and an intuitive user experience for better lifestyle management.",
      tech: ["Html", "Css", "Vanilla JS"],
    },
    {
      title: "what's Dinner Website",
      category: "Vanilla JS",
      img: whatDinner,
      demo: "https://practice-html-css-31lo.vercel.app/",
      desc: "A user-friendly recipe website built with Vanilla JavaScript, designed to help users explore dishes, get meal inspiration, and easily decide what to cook.",
      tech: ["Html", "Css", "Vanilla JS"],
    },
    {
      title: "Contacts Hub Website",
      category: "Vanilla JS",
      img: contacthub,
      demo: "https://contactshub-mu.vercel.app/",
      desc: "A clean and efficient contacts management website built with Vanilla JavaScript, allowing users to store, organize, and manage their contacts with an intuitive and seamless experience.",
      tech: ["Html", "Css", "Vanilla JS"],
    },
    {
      title: "3adasa Photography Website",
      category: "Vanilla JS",
      img: adasa,
      demo: "https://3adasa-photography.vercel.app/",
      desc: "A modern photography portfolio website built with Vanilla JavaScript, showcasing creative photo collections with a clean layout and smooth browsing experience.",
      tech: ["Html", "Css", "Vanilla JS"],
    },
    {
      title: "Real Estate Website",
      category: "Html & Css",
      img: elitehome,
      demo: "https://elitehomes-phi.vercel.app/",
      desc: "A modern real estate website built with HTML and CSS, presenting property listings in a clean, elegant layout with a smooth and user-friendly browsing experience.",
      tech: ["Html", "Css"],
    },
    {
      title: "Modaber Website",
      category: "Html & Css",
      img: modaber,
      demo: "https://modaber-six.vercel.app/",
      desc: "A personal finance management website built with HTML and CSS, designed to track income and expenses while helping users manage their budget in an organized and simple way.",
      tech: ["Html", "Css"],
    },
  ];

  const filtered =
    activeTab === "All"
      ? projectList
      : projectList.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
            >
              Featured{" "}
              <span className="text-orange-500 underline decoration-dotted underline-offset-8">
                Projects
              </span>
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-300 mt-4 text-lg">
              A collection of digital products built with passion and precision.
            </p>
          </div>

          <div className="flex justify-center mb-12">
          <div className="relative flex items-center justify-center gap-2 flex-wrap p-2 rounded-2xl 
bg-white/60 dark:bg-slate-900/40 
backdrop-blur-xl 
border border-white/20 dark:border-white/10 
shadow-lg shadow-black/5">

  {["All", "Next.Js", "React", "Vanilla JS", "Html & Css"].map(
    (tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={cn(
          "relative px-6 py-2 text-sm font-semibold rounded-xl transition-all duration-300",
          "text-slate-600 dark:text-slate-300 hover:text-orange-500",
          "hover:bg-white/40 dark:hover:bg-white/5",
          activeTab === tab && "text-white"
        )}
      >
        <span className="relative z-20">{tab}</span>

        {activeTab === tab && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 rounded-xl 
            bg-gradient-to-r from-orange-500 to-orange-400 
            shadow-[0_8px_25px_rgba(249,115,22,0.35)]"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          />
        )}
      </button>
    )
  )}
</div>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                {/* IMAGE LAYER */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* weird gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-black/60 via-transparent to-black/40 opacity-60 group-hover:opacity-0 transition" />
                </div>

                {/* FLOATING CARD (offset design) */}
                <div className="relative -mt-16 mx-4 p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-500 group-hover:-translate-y-2">
                  {/* HEADER */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight group-hover:text-orange-500">
                      {project.title}
                    </h3>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      title="View Demo"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="text-orange-500"
                    >
                      <Rocket size={18} />
                    </motion.a>
                  </div>

                  {/* DESC */}
                  <p className=" text-start text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
                    {project.desc}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-orange-500 font-bold">
                      {project.category}
                    </span>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      whileHover={{ x: 5 }}
                      className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                    >
                      View →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

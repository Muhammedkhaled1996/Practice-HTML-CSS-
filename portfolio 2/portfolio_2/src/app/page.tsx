"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// استبدل الصور بمساراتك الحقيقية
import Headerimage1 from "@/assets/images/Headerimage1.png"; 

export default function ProfessionalPortfolio() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-purple-200 font-sans">
      
      {/* 1. الخلفية الديناميكية (Cursor Follower) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
        }}
      />

      {/* 2. الهيدر (Navigation) */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
      >
        <div className="flex items-center gap-8 px-6 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
          <a href="#" className="text-sm font-medium hover:text-purple-400 transition">Home</a>
          <a href="#projects" className="text-sm font-medium hover:text-purple-400 transition">Projects</a>
          <a href="#about" className="text-sm font-medium hover:text-purple-400 transition">About</a>
          <div className="w-[1px] h-4 bg-white/20" />
          <a href="#contact" className="text-sm font-bold text-purple-400">Hire Me</a>
        </div>
      </motion.nav>

      <main className="container mx-auto px-6 pt-32 relative z-10">
        
        {/* 3. قسم الـ Hero (بأسلوب Typography ضخم) */}
        <section className="grid lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-tighter"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Top Performer at Route Academy
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]"
            >
              FRONTEND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
                ENGINEER.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-md text-lg text-white/60 font-medium leading-relaxed"
            >
              أبني واجهات مستخدم تفاعلية باستخدام React و Next.js مع تركيز عالي على الأداء وتجربة المستخدم السلسة.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 overflow-hidden relative group">
              <Image 
                src={Headerimage1} 
                alt="Profile" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </section>

        {/* 4. قسم الـ Bento Grid للمشاريع */}
        <section id="projects" className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black tracking-tighter italic">SELECTED WORK</h2>
            <p className="text-white/40 text-sm font-mono tracking-widest">/ 01 — PROJECTS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* مشروع كبير (POS System) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8"
            >
              <div className="relative z-10">
                <span className="text-xs font-bold text-purple-400 uppercase">Featured Project</span>
                <h3 className="text-3xl font-bold mt-2">POS System</h3>
                <p className="text-white/50 mt-4 max-w-xs">نظام مبيعات متكامل تم تطويره لإدارة المخازن والفواتير بكفاءة عالية.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-purple-500/20 blur-3xl group-hover:bg-purple-500/40 transition-all" />
            </motion.div>

            {/* مشروع صغير (Engineering Tracker) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8"
            >
              <h3 className="text-xl font-bold">Engineering Workflow Tracker</h3>
              <p className="text-white/40 text-sm mt-2 font-medium italic">Custom Management Solution</p>
            </motion.div>

            {/* مشاريع أخرى */}
            {["Next.js Portfolio", "E-commerce UI"].map((title) => (
              <motion.div 
                key={title}
                whileHover={{ y: -5 }}
                className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 aspect-square flex flex-col justify-end"
              >
                <h3 className="font-bold">{title}</h3>
                <div className="mt-4 flex gap-2">
                  <div className="h-1 w-8 bg-purple-500 rounded-full" />
                  <div className="h-1 w-4 bg-white/20 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. قسم الـ Tech Stack (أيقونات عائمة) */}
        <section className="py-20 border-t border-white/5 text-center">
          <h3 className="text-white/20 font-black text-7xl md:text-9xl mb-12 tracking-tighter opacity-10">TECH STACK</h3>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 hover:opacity-100 transition-opacity">
            {["React", "Next.js", "Tailwind", "Framer Motion", "VBA", "SQL Server"].map((skill) => (
              <span key={skill} className="text-2xl font-black italic tracking-tighter hover:text-purple-400 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 6. قسم التواصل */}
        <section id="contact" className="py-32">
           <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">LET'S BUILD <br /> THE FUTURE.</h2>
              <p className="text-white/60 font-medium italic">متاح حالياً للمشاريع الجديدة والتعاون الإبداعي.</p>
              <div className="pt-8">
                <a 
                  href="mailto:your-email@example.com"
                  className="px-12 py-5 rounded-full bg-white text-black font-black text-xl hover:bg-purple-400 hover:text-white transition-all shadow-2xl shadow-white/5"
                >
                  Get In Touch
                </a>
              </div>
           </div>
        </section>

      </main>

      <footer className="p-10 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-white/20">
        <div>Mohamed Khaled — 2026</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Github</a>
        </div>
      </footer>
    </div>
  );
}






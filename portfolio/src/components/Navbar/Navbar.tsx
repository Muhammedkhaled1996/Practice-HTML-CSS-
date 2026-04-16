"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";

export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: any;
  setDarkMode: any;
}) {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    const sections = [
      "home",
      "about",
      "skills",
      "services",
      "projects",
      "contact",
    ];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 130 && rect.bottom >= 130) {
          setActiveSection(section);
        }
      }
    }
  });

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 25 }}
            className="w-10 h-10 bg-linear-to-tr from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold"
          >
            M
          </motion.div>

          <span className="text-xl font-bold">
            Muhammed <span className="text-orange-500">Codex</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-sm font-semibold transition-colors ${
                activeSection === link.id
                  ? "text-orange-500"
                  : "text-slate-700 dark:text-slate-200 hover:text-orange-500"
              }`}
            >
              {link.name}

              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800">
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-6">
                {/* Header (Logo) */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-linear-to-tr from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    M
                  </div>

                  <div className="flex flex-col leading-tight">
                    <span className="font-bold text-lg text-slate-900 dark:text-white">
                      Muhammed
                    </span>
                    <span className="text-sm text-orange-500 font-semibold">
                      Codex
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gray-200 dark:bg-gray-800 mb-6" />

                {/* Navigation */}
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`px-3 py-2 rounded-xl text-base font-medium transition-all duration-200 ${
                        activeSection === link.id
                          ? "bg-orange-500/10 text-orange-500"
                          : "text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

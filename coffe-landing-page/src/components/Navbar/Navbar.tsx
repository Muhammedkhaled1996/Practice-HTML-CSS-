"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { lable: "Home", alt: "home" },
  { lable: "Menu", alt: "menu" },
  { lable: "About Us", alt: "about" },
  { lable: "Contact Us", alt: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 ring-0 w-full z-50 backdrop-blur-lg bg-black/30 text-white font-playfair"
    >
      <div className="container flex items-center justify-between px-4 py-4">
        {/* LOGO */}
        <a href="#" className=" text-[35px] font-clicker">Bean Scene</a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-12">
          {links.map((link) => (
            <a
              href={`#${link.alt}`}
              key={link.alt}
              className="relative group cursor-pointer"
            >
              {link.lable}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-main-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <span className="cursor-pointer hover:text-main-gold">Sign In</span>

          <button className="bg-main-gold text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
            Sign Up
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden cursor-pointer ">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="text-2xl cursor-pointer hover:text-main-gold duration-200 transition-colors" />
            ) : (
              <Menu className="text-2xl cursor-pointer hover:text-main-gold duration-200 transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col gap-6 text-center">
              {links.map((link) => (
                <a
                  key={link}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-lg hover:text-main-gold transition"
                >
                  {link}
                </a>
              ))}

              <button className="cursor-pointer bg-main-gold text-black py-3 rounded-full mt-4">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

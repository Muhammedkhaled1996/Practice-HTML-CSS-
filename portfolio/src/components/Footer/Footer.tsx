import { motion } from "framer-motion";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    Icon: FaGithub,
    href: "#",
    label: "Github",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/muhammed-khaled-8a495b196",
    label: "LinkedIn",
  },
  {
    Icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    Icon: FaWhatsapp,
    href: "https://wa.me/201002165352",
    label: "WhatsApp",
  },
];
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-8 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-3">
          {socialLinks.map(({ Icon, href, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank" // لفتح الرابط في تبويب جديد
              rel="noopener noreferrer" // حماية أمنية للروابط الخارجية
              whileHover={{ y: -6, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 dark:text-gray-500 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-500 text-sm mb-6 text-center">
          © {new Date().getFullYear()} MuhammedCodex. Built with 🧡 using
          Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}

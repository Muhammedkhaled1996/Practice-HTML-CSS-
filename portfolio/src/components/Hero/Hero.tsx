import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import profilePicture from "@/assets/images/profilePicture.png";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
    >
      <div className="flex-1 text-center lg:text-left space-y-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-orange-500 font-bold text-xl tracking-widest uppercase">
            Hi, I'm Muhammed
          </h3>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mt-2 leading-tight ">
            Frontend <br />
            <span className="text-orange-500 h-20">
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "React Expert",
                  2000,
                  "Next.js Ninja",
                  2000,
                ]}
                repeat={Infinity}
                cursor={true}
                deletionSpeed={50}
              />
            </span>
          </h1>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-xl text-lg leading-relaxed">
            Turning complex visions into pixel-perfect reality. I build fast,
            interactive, and scalable web solutions using the power of React and
            Next.js.
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <Link
            href="#contact"
            className="cursor-pointer bg-orange-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all hover:-translate-y-1 active:scale-95"
          >
            Hire Me Now
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 cursor-pointer border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 active:scale-95 shadow-lg shadow-orange-500/10"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
      <div className="flex-1 relative flex justify-center items-center">
        <motion.div
          animate={{
            borderRadius: [
              "40% 60% 70% 30% / 40% 40% 60% 50%",
              "50% 50% 30% 70% / 50% 60% 40% 50%",
              "60% 40% 60% 40% / 70% 30% 50% 60%",
              "40% 60% 70% 30% / 40% 40% 60% 50%",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut", // التغيير هنا بيخلي الحركة ناعمة جداً
          }}
          className="relative w-72 h-72 md:w-105 md:h-105 bg-linear-to-tr from-orange-500 to-orange-400 overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.3)] border-4 border-white/20 dark:border-white/10"
        >
          <Image
            width={500}
            height={500}
            src={profilePicture.src}
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import {
  Sun,
  Moon,
  Layout,
  Smartphone,
  Monitor,
  Palette,
  Mail,
  Send,
  Phone,
  Code2,
  CheckCircle2,
  Cpu,
  Globe,
  Rocket,
  MapPin,
  MessageSquare,
} from "lucide-react";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

// --- Utility for dynamic classes ---
const cn = (...classes: any) => classes.filter(Boolean).join(" ");

// --- Components ---

// Navbar component with active link highlighting based on scroll position
const Navbar = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: any;
  setDarkMode: any;
}) => {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const sections = ["home", "about", "services", "projects", "contact"];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
        }
      }
    }
  });

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-100 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group cursor-pointer">
          <motion.div
            whileHover={{ rotate: 25 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-10 h-10 bg-linear-to-tr from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/20"
          >
            M
          </motion.div>
          <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Muhammed
            <span className="text-orange-500 font-extrabold underline decoration-2 underline-offset-4">
              Codex
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "relative text-sm font-semibold transition-colors duration-300",
                activeSection === link.id
                  ? "text-orange-500"
                  : "text-slate-700 dark:text-slate-200 hover:text-orange-500",
              )}
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

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white hover:ring-2 ring-orange-500/50 transition-all"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 75 : 150,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return <span>{words[index].substring(0, subIndex)}</span>;
};

// hero section
const Hero = () => (
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
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mt-2 leading-tight h-40">
          Frontend <br />
          <span className="text-orange-500 h-20">
            <Typewriter
              words={["Developer", "React Expert", "Next.js Ninja"]}
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
        <motion.img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
          alt="Profile"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 "
          whileHover={{ scale: 1.2 }}
        />
      </motion.div>
    </div>
  </section>
);

// --- New About (Timeline) Section ---
const About = () => {
  const timeline = [
    {
      year: "2021",
      title: "The Beginning",
      company: "Freelance",
      desc: "Started the journey by mastering HTML, CSS, and pure JavaScript to build static websites.",
    },
    {
      year: "2022",
      title: "Full Stack Certification",
      company: "Route Academy",
      desc: "Mastered modern web technologies (MERN Stack) and industrial development standards.",
    },
    {
      year: "2023",
      title: "React Developer",
      company: "Creative Agency",
      desc: "Built complex UI components, integrated RESTful APIs, and optimized web performance.",
    },
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Tech Solutions",
      desc: "Leading the development of high-performance Next.js applications and mentoring junior developers.",
    },
    {
      year: "2025",
      title: "Senior Frontend Developer",
      company: "Route Academy",
      desc: "Currently sharing knowledge as a mentor, helping aspiring developers master React and Next.js.",
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
};

const TimelineItem = ({ item, idx }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // تحديد إذا كان العنصر فردي أم زوجي للعرض يمين أو شمال
  const isEven = idx % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col md:flex-row items-center justify-between w-full mb-12", // Added margin for spacing
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

// --- New Services Section ---
const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      desc: "Building scalable, fast, and SEO-friendly web apps using Next.js.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Responsive Design",
      desc: "Ensuring your website looks perfect on every screen size.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Performance Optimization",
      desc: "Speeding up load times and improving Core Web Vitals.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Implementation",
      desc: "Translating Figma designs into pixel-perfect React components.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Premium <span className="text-orange-500">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            I don't just build websites; I craft high-performance digital
            products focused on
            <span className="text-orange-500 font-semibold italic">
              Scalability
            </span>
            ,
            <span className="text-orange-500 font-semibold italic"> Speed</span>
            , and
            <span className="text-orange-500 font-semibold italic">
              User-Centric Design
            </span>
            .
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-gray-200/50 border border-transparent hover:border-orange-500/50 transition-all group hover:shadow-lg/30 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Rest of your components (Projects, Contact, Footer) ---
const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const projectList = [
    {
      title: "E-Commerce App",
      category: "React",
      img: "https://placehold.co/600x400/orange/white?text=React+App",
      demo: "",
      desc: "An online store built with React, featuring a dynamic product catalog, shopping cart, and seamless checkout experience.",
    },
    {
      title: "SaaS Dashboard",
      category: "Next.js",
      img: "https://placehold.co/600x400/333/orange?text=NextJS+Admin",
      demo: "",
      desc: "An online store built with React, featuring a dynamic product catalog, shopping cart, and seamless checkout experience.",
    },
    {
      title: "Social Media Platform",
      category: "React",
      img: "https://placehold.co/600x400/orange/white?text=Social+UI",
      demo: "",
      desc: "An online store built with React, featuring a dynamic product catalog, shopping cart, and seamless checkout experience.",
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
          <div className="mb-16">
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

          <div className="flex justify-center mb-16">
            <div className="relative flex p-1.5 bg-gray-100 dark:bg-slate-800 backdrop-blur-lg rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              {["All", "React", "Next.js"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "relative px-8 py-2.5 text-sm font-bold transition-all duration-500 rounded-xl z-10",
                    activeTab === tab
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-orange-500",
                  )}
                >
                  <span className="relative z-20">{tab}</span>

                  {activeTab === tab && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-orange-500 rounded-xl shadow-[0_4px_15px_rgba(249,115,22,0.3)]"
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.6,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout // يحافظ على انسيابية الحركة عند إعادة الترتيب
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{
                  type: "tween",
                  stiffness: 260,
                  damping: 20,
                }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 transition-all duration-500 shadow hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Container الصورة */}
                <div className="relative h-64 w-full overflow-hidden rounded-t-2xl isolation-auto">
                  <img
                    src={project.img}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.17,0.67,0.83,0.67)] group-hover:scale-110"
                    alt={project.title}
                  />

                  {/* الطبقة الزجاجية عند الـ Hover */}
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
                    <motion.p
                      whileHover={{ y: -5 }}
                      className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <Code2 size={20} />
                    </motion.p>
                    <motion.a
                      href="#"
                      whileHover={{ y: -5 }}
                      className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:bg-white hover:text-orange-500 transition-colors"
                    >
                      <Globe size={20} />
                    </motion.a>
                  </div>

                  {/* Badge القسم */}
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md text-orange-600 dark:text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-2xl shadow-sm border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* تفاصيل الكارت */}
                <div className="py-6 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-1.5 text-orange-500/50">
                      <Cpu size={16} />
                      <Layout size={16} />
                    </div>
                  </div>

                  <p className="text-start text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.desc ||  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                  </p>

                  {/* Footer الكارت */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-gray-800/50">
                    <div className="flex -space-x-3">
                      {["React", "Next"].map((tech, i) => (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-full border-4 border-white dark:border-[#232323] bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-[9px] font-black dark:text-gray-300"
                        >
                          {tech === "React" ? "RE" : "NX"}
                        </div>
                      ))}
                    </div>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      className="cursor-pointer group/btn flex items-center gap-2 text-sm font-black uppercase tracking-widest text-orange-500"
                      whileHover={{ gap: "12px" }}
                    >
                      Explore
                      <Rocket
                        size={16}
                        className="transition-transform group-hover/btn:-translate-y-1"
                      />
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
};

// skills section
const skills = [
  { name: "HTML5", level: 95, color: "#E34F26" },
  { name: "CSS3", level: 90, color: "#1572B6" },
  { name: "Bootstrap", level: 80, color: "#7952B3" },
  { name: "Tailwind CSS", level: 95, color: "#06B6D4" },
  { name: "JavaScript", level: 88, color: "#F7DF1E" },
  { name: "React.js", level: 92, color: "#61DAFB" },
  { name: "Next.js", level: 87, color: "black" },
];

// مصفوفة الأيقونات العائمة (Icons Floating)
const FloatingIcon = ({ name, color, index }: any) => {
  // حركات عشوائية بسيطة لكل أيقونة لتعطي إيحاء أنها تسبح
  const randomY = [0, -20, 0];
  const randomX = [0, 10, 0];

  return (
    <motion.div
      animate={{
        y: randomY,
        x: randomX,
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 4 + index, // اختلاف السرعة لكل أيقونة
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
      style={{
        width: "80px",
        height: "80px",
        // توزيع الأيقونات بشكل عشوائي في المساحة المخصصة
        left: `${(index % 3) * 30 + 10}%`,
        top: `${Math.floor(index / 3) * 30 + 10}%`,
      }}
    >
      {/* هنا نضع اسم المهارة أو اللوجو الخاص بها */}
      <span className="font-bold text-[10px] text-center" style={{ color }}>
        {name}
      </span>
      {/* تأثير الإضاءة الخلفية لكل أيقونة */}
      <div
        className="absolute inset-0 opacity-10 blur-xl rounded-full"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-[#0B1120] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* الجزء الأيسر: الأيقونات العائمة */}
        <div className="relative h-100 hidden md:block">
          <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl" />
          {skills.map((skill, idx) => (
            <FloatingIcon key={idx} {...skill} index={idx} />
          ))}
        </div>

        {/* الجزء الأيمن: الـ Progress Bars */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
              My <span className="text-orange-500">Technical</span> Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Expertise in building modern web applications with focus on
              performance and clean code.
            </p>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-700 dark:text-slate-200">
                    {skill.name}
                  </span>
                  <span className="text-orange-500 font-mono">
                    {skill.level}%
                  </span>
                </div>

                {/* الخلفية الخاصة بالبار */}
                <div className="h-3 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden border border-gray-200 dark:border-slate-700">
                  {/* البار المتحرك */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: idx * 0.1,
                    }}
                    className="h-full rounded-full relative"
                    style={{ backgroundColor: skill.color }}
                  >
                    {/* تأثير لمعان (Glow) فوق البار */}
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- New Contact Section with EmailJS Integration ---
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast"; // استيراد المكتبة
import Link from "next/link";
import { desc } from "framer-motion/client";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleWhatsApp = () =>
    window.open(`https://wa.me/201002165352`, "_blank");

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ffuq4k4",
        "template_ivpsa0e",
        form.current, // نستخدم المرجع هنا لضمان قراءة الـ names صح
        "zawaZRIGzLeIJethB",
      )
      .then(
        (result) => {
          toast.success("Successfully created!");
          e.target.reset(); // تصفير الفورم بعد الإرسال
        },
        (error) => {
          toast.error("Something went wrong!");
        },
      );
  };

  return (
    <section id="contact" className="py-16 px-6 relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-orange-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-500 font-black uppercase tracking-[0.3em]"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mt-4"
          >
            Ready to <span className="text-orange-500">Collaborate?</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* 1. Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: <Mail className="text-orange-500" />,
                label: "Email Me",
                value: "MuhammedKhaled25@",
                action: () =>
                  (window.location.href = "mailto:muhammedkhaled25@gmail.com"),
                color: "bg-orange-500/10",
              },
              {
                icon: <FaWhatsapp size={24} className="text-green-500" />,
                label: "WhatsApp",
                value: "+20 100 216 5352",
                action: handleWhatsApp,
                color: "bg-green-500/10",
              },
              {
                icon: <MapPin className="text-blue-500" />,
                label: "Location",
                value: "Cairo, Egypt",
                color: "bg-blue-500/10",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={item.action}
                className="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl "
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                      {item.label}
                    </p>
                    <p className="text-slate-900 dark:text-white font-bold text-sm md:text-base break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Modern Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl p-3 border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-6 md:top-0 right-0 p-8 opacity-5 dark:opacity-10">
              <MessageSquare
                size={30}
                className="text-slate-900 dark:text-white"
              />
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="relative z-10 grid md:grid-cols-2 gap-6"
            >
              {/* هيدن انبت عشان الـ Subject {{title}} اللى فى الصورة يوصل صح */}
              <input type="hidden" name="title" value="Portfolio Contact" />

              <div className="space-y-2 md:col-span-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Name
                </label>
                <input
                  name="name" // طابقناه مع {{name}} فى صورتك
                  required
                  type="text"
                  placeholder="Muhammed Khaled"
                  className="mt-3 w-full px-6 py-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-300 focus:border-orange-500/50 focus:ring-4 ring-orange-500/5 text-slate-900 dark:text-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Email
                </label>
                <input
                  name="email" // طابقناه مع {{email}} فى صورتك
                  required
                  type="email"
                  placeholder="muhammed@example.com"
                  className="mt-3 w-full px-6 py-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-300 focus:border-orange-500/50 focus:ring-4 ring-orange-500/5 text-slate-900 dark:text-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Your Message
                </label>
                <textarea
                  name="message" // طابقناه مع {{message}} فى صورتك
                  required
                  rows={4}
                  placeholder="Tell me about your Dream..."
                  className="mt-3 w-full px-6 py-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-300 focus:border-orange-500/50 focus:ring-4 ring-orange-500/5 text-slate-900 dark:text-white outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer md:col-span-2 w-full bg-orange-500 text-white py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] hover:bg-orange-600 transition-all"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Footer with Social Links ---
const socialLinks = [
  {
    Icon: FaGithub,
    href: "#",
    label: "Github",
  },
  {
    Icon: FaLinkedin,
    href: "www.linkedin.com/in/muhammed-khaled-8a495b196",
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

const Footer = () => (
  <footer className="bg-white dark:bg-slate-950 pt-10 border-t border-gray-100 dark:border-gray-800">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
      <div className="flex gap-6 mb-3">
        {socialLinks.map(({ Icon, href, label }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank" // لفتح الرابط في تبويب جديد
            rel="noopener noreferrer" // حماية أمنية للروابط الخارجية
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 dark:text-gray-500 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </div>
      <p className="text-gray-500 text-sm mb-8 text-center">
        © {new Date().getFullYear()} MuhammedCodex. Built with 🧡 using Next.js
        & Tailwind.
      </p>
    </div>
  </footer>
);

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-orange-500 selection:text-white transition-colors duration-500 overflow-x-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

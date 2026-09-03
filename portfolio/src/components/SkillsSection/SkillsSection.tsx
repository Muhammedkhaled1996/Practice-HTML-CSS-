import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  BarChart3,
  CheckCircle2,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      icon: Code2,
      badge: "Core Expertise",
      accent: "from-orange-500/20 to-orange-500/5",
      border: "hover:border-orange-500/50",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
      description:
        "Building fast, accessible, and SEO-optimized web applications with modern component-driven architectures.",
      skills: [
        "React.js",
        "Next.js (App Router, SSR, SSG)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 & Semantic Web",
        "CSS3 & Responsive Design",
        "Bootstrap",
      ],
    },
    {
      title: "State & Data Fetching",
      icon: Layers,
      badge: "Architecture",
      accent: "from-blue-500/20 to-blue-500/5",
      border: "hover:border-blue-500/50",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
      description:
        "Architecting clean, scalable data flows, optimistic UI updates, and robust server-state synchronization.",
      skills: [
        "Redux Toolkit",
        "Context API",
        "React Query / TanStack Query",
        "Axios",
        "RESTful API Integration",
        "Client-Side Caching",
      ],
    },
    {
      title: "Backend & Engineering DBs",
      icon: Database,
      badge: "Systems & Data",
      accent: "from-emerald-500/20 to-emerald-500/5",
      border: "hover:border-emerald-500/50",
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-500/10",
      description:
        "Years of practical experience developing database management systems, relational schemas, and backend APIs.",
      skills: [
        "SQL Server",
        "MS Access (VBA)",
        "Relational Schema Design",
        "Node.js",
        "Express.js",
        "MongoDB / Mongoose",
        "Process Automation",
      ],
    },
    {
      title: "Data Analytics & Dev Tools",
      icon: BarChart3,
      badge: "Insights & Tooling",
      accent: "from-purple-500/20 to-purple-500/5",
      border: "hover:border-purple-500/50",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
      description:
        "Translating data and designs into executive insights, clean developer workflows, and scalable deliverables.",
      skills: [
        "Power BI (Interactive Dashboards)",
        "Data Modeling & DAX",
        "Git & GitHub Version Control",
        "Postman (API Testing)",
        "Figma to Code",
        "Adobe Photoshop",
      ],
    },
  ];

  const coreCompetencies = [
    "Analytical Problem Solving",
    "System & UI Architecture",
    "BOQ & Cost Estimation Automation",
    "Agile & Scrum Sprints",
    "Clean Code & Modular Design",
    "High-Pressure Project Delivery",
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50/50 dark:bg-[#0B1120] relative overflow-hidden transition-colors"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-500 font-bold uppercase tracking-widest text-xs mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Technical Arsenal
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Skills & <span className="text-orange-500">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg leading-relaxed"
          >
            A multi-disciplinary skill set combining modern frontend
            architecture, state management, database systems engineering, and
            data analytics.
          </motion.p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group bg-white dark:bg-slate-900/90 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-xl ${category.border} transition-all duration-300 relative overflow-hidden`}
              >
                {/* Subtle Gradient Backlight */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-linear-to-bl ${category.accent} rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-2xl ${category.iconBg} ${category.iconColor}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {category.badge}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:border-orange-500/50 hover:text-orange-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Competencies Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-orange-500/10 via-slate-100 dark:via-slate-900 to-orange-500/10 border border-orange-500/20"
        >
          <div className="flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-wider mb-4 justify-center">
            <Cpu className="w-4 h-4" />
            Core Engineering Competencies
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {coreCompetencies.map((comp, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{comp}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

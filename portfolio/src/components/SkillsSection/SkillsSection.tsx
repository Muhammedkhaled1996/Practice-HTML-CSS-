import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", level: 90, icon: FaCss3Alt, color: "#1572B6" },
  // { name: "Bootstrap", level: 80, icon: FaBootstrap, color: "#7952B3" },
  { name: "Tailwind", level: 95, icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", level: 88, icon: FaJs, color: "#F7DF1E" },
  { name: "React", level: 92, icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", level: 87, icon: SiNextdotjs, color: "#000000" },
];

const FloatingIcon = ({ icon: Icon, color, index }: any) => {
  const randomY = [0, -10, 0];
  const randomX = [0, 10, 0];

  return (
    <motion.div
      animate={{
        y: randomY,
        x: randomX,
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 4 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute flex items-center justify-center rounded-2xl border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
      style={{
        width: "80px",
        height: "80px",
        left: `${(index % 3) * 30 + 10}%`,
        top: `${Math.floor(index / 3) * 65 + 10}%`,
        background: "rgba(255,255,255,0.1)", // glass effect
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl opacity-20"
        style={{ backgroundColor: color }}
      />

      {/* Icon */}
      <Icon size={45} style={{ color }} className="relative z-10" />
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-[#0B1120] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
      </div>

      {/* ******************************** */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* الجزء الأيسر: الأيقونات العائمة */}
        <div className="relative h-50">
          <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl" />
          {skills.map((skill, idx) => (
            <FloatingIcon key={idx} {...skill} index={idx} />
          ))}
        </div>

        {/* الجزء الأيمن: الـ Progress Bars */}
        <div className="space-y-8">
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
}

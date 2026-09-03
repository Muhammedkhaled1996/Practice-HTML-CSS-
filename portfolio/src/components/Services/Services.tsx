import { motion } from 'framer-motion';
import { BarChart3, Database, Globe, Palette } from 'lucide-react';
import React from 'react'


export default function Services() {

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Next.js & React Web Apps",
      desc: "Building scalable, high-performance, and SEO-optimized web applications using Next.js App Router and TypeScript.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Interactive Data Dashboards",
      desc: "Designing dynamic Power BI and web dashboards to visualize complex KPIs, site metrics, and project milestones.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Systems & Process Automation",
      desc: "Architecting SQL Server and database workflows to automate estimation, reporting, and multi-department operations.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Pixel-Perfect UI/UX",
      desc: "Transforming Figma designs into responsive, accessible, mobile-first interfaces with smooth micro-interactions.",
    },
  ];
  return   <section id="services" className="py-24 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4">
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
}

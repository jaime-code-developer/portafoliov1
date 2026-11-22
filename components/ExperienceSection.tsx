"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/data";

const typeConfig = {
  "full-time": { label: "Tiempo Completo", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  freelance: { label: "Freelance", color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  contract: { label: "Contrato", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  personal: { label: "Personal", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
};

export default function ExperienceSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="experience"
      className="py-24 bg-slate-950/80 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 mb-4"
          >
            <span className="text-violet-400">03.</span>
            <span>experiencia</span>
            <div className="h-px w-12 bg-cyan-400/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 mb-4"
          >
            Trayectoria{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Profesional
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const typeCfg = typeConfig[exp.type];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: Math.min((i % 3) * 0.1, 0.25) }}
                  className="relative md:pl-16"
                  id={`experience-${exp.id}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center hidden md:flex group-hover:border-cyan-500 transition-colors">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Card */}
                  <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-slate-950/50">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-slate-100 font-bold text-xl">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-400 font-semibold text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${typeCfg.color}`}
                        >
                          {typeCfg.label}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

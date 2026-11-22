"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Monitor,
  Server,
  HardDrive,
  Shield,
  GitBranch,
  Wrench,
} from "lucide-react";
import { skillGroups } from "@/data";
import type { SkillGroup, SkillLevel } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  HardDrive,
  Shield,
  GitBranch,
  Wrench,
};

const levelConfig: Record<
  SkillLevel,
  { label: string; bars: number; color: string }
> = {
  expert: { label: "Experto", bars: 4, color: "bg-cyan-400" },
  advanced: { label: "Avanzado", bars: 3, color: "bg-violet-400" },
  intermediate: { label: "Intermedio", bars: 2, color: "bg-amber-400" },
  learning: { label: "Aprendiendo", bars: 1, color: "bg-slate-500" },
};

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[group.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 overflow-hidden"
    >
      {/* Card glow */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg`}
        >
          {Icon && <Icon className="w-5 h-5 text-white" />}
        </div>
        <h3 className="text-slate-100 font-bold text-base">{group.title}</h3>
      </div>

      {/* Skills list */}
      <ul className="space-y-3">
        {group.skills.map((skill, i) => {
          const cfg = levelConfig[skill.level];
          return (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-slate-300 font-medium">
                {skill.name}
              </span>
              <div className="flex items-center gap-1.5">
                {/* Skill level dots */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((bar) => (
                    <motion.div
                      key={bar}
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.05 + bar * 0.05,
                      }}
                      className={`w-1.5 h-4 rounded-full origin-bottom ${
                        bar <= cfg.bars
                          ? cfg.color
                          : "bg-slate-700/60"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500 w-20 text-right hidden sm:block">
                  {cfg.label}
                </span>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default function SkillsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.04),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 mb-4"
          >
            <span className="text-violet-400">01.</span>
            <span>habilidades</span>
            <div className="h-px w-12 bg-cyan-400/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 mb-4"
          >
            Matriz de{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Habilidades
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Perfil técnico multidisciplinario: desde el frontend con Angular y Vue, hasta APIs robustas con NestJS y Laravel, pasando por bases de datos SQL y NoSQL.
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-5 justify-center"
        >
          {Object.entries(levelConfig).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`w-1 h-3 rounded-full ${
                      bar <= cfg.bars ? cfg.color : "bg-slate-700"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-slate-500">{cfg.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

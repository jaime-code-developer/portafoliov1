"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  Shield,
  Server,
  Code2,
  ChevronDown,
  FileText,
} from "lucide-react";
import { Github, Linkedin, Youtube } from "@/components/icons/SocialIcons";
import { personalInfo, socialLinks } from "@/data";

const floatingIcons = [
  { Icon: Terminal, x: "8%", y: "25%", delay: 0, size: 20 },
  { Icon: Shield, x: "90%", y: "20%", delay: 0.3, size: 22 },
  { Icon: Server, x: "85%", y: "65%", delay: 0.6, size: 18 },
  { Icon: Code2, x: "5%", y: "70%", delay: 0.9, size: 24 },
];

const stats = [
  { value: `${personalInfo.yearsOfExperience}+`, label: "Años de Experiencia" },
  {
    value: `${personalInfo.projectsCompleted}+`,
    label: "Proyectos Entregados",
  },
  {
    value: `${personalInfo.technologiesMastered}+`,
    label: "Tecnologías Dominadas",
  },
];

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Youtube,
  Mail,
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-slate-700 hidden lg:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={size} />
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {personalInfo.available
              ? "Disponible para nuevos proyectos"
              : "Ocupado actualmente"}
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-100 leading-[1.05] tracking-tight mb-4"
          >
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              {personalInfo.firstName}.
            </span>
            <br />
            <span className="text-slate-300">Desarrollo que funciona.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-sm text-cyan-400/80 mb-6"
          >
            <span className="text-violet-400">$</span>{" "}
            whoami &rarr;{" "}
            <span className="text-slate-300">{personalInfo.tagline}</span>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              id="hero-projects-btn"
              onClick={() => handleScroll("#projects")}
              className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105"
            >
              Ver Proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="hero-contact-btn"
              onClick={() => handleScroll("#contact")}
              className="flex items-center gap-2 px-6 py-3.5 bg-slate-800/60 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 hover:border-slate-600 hover:text-slate-100 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Contactar
            </button>
            <Link
              id="hero-cv-minimal-btn"
              href="/cv-minimalista.pdf"
              download="CV-Jaime-Mamani-Minimalista.pdf"
              className="group flex items-center gap-2 px-5 py-3.5 bg-slate-800/60 border border-slate-700/80 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 hover:border-cyan-500/60 hover:text-cyan-400 transition-all duration-300 shadow-sm"
              title="Descargar Curriculum Vitae en formato minimalista"
            >
              <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>CV Minimalista</span>
            </Link>
            <Link
              id="hero-cv-detailed-btn"
              href="/cv-detallado.pdf"
              download="CV-Jaime-Mamani-Detallado.pdf"
              className="group flex items-center gap-2 px-5 py-3.5 bg-slate-800/60 border border-slate-700/80 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 hover:border-violet-500/60 hover:text-violet-400 transition-all duration-300 shadow-sm"
              title="Descargar Curriculum Vitae en formato detallado"
            >
              <Download className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
              <span>CV Detallado</span>
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return Icon ? (
                <a
                  key={link.id}
                  id={`hero-social-${link.id}`}
                  href={link.url}
                  target={link.id !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 hover:scale-110"
                  title={link.username}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ) : null;
            })}
            <div className="h-px w-12 bg-gradient-to-r from-slate-700 to-transparent" />
            <span className="text-slate-600 text-xs font-mono">
              {personalInfo.location}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full"
      >
        <div className="grid grid-cols-3 gap-4 max-w-lg">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm"
            >
              <div className="text-2xl font-black text-cyan-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

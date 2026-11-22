"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import { Github, Linkedin, Youtube } from "@/components/icons/SocialIcons";
import { socialLinks, personalInfo } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Youtube,
  Mail,
};

const cardColors = [
  "hover:border-slate-500/50",
  "hover:border-blue-500/40",
  "hover:border-red-500/40",
  "hover:border-cyan-500/40",
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [copied, setCopied] = useState(false);

  const email = "jaime.aspx@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 mb-4"
          >
            <span className="text-violet-400">05.</span>
            <span>contacto</span>
            <div className="h-px w-12 bg-cyan-400/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 mb-4"
          >
            ¿Hablamos de tu{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              próximo proyecto?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Siempre abierto a nuevas oportunidades — ya sea un proyecto
            freelance, consultoría o una colaboración técnica interesante.
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Social cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-xs font-mono text-slate-600 mb-6">
              — Canales disponibles
            </p>

            {socialLinks.map((link, i) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target={link.id !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  id={`contact-${link.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 transition-all duration-200 group ${cardColors[i]}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-slate-600 transition-colors shrink-0">
                    {Icon && (
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-200 font-semibold text-sm">
                      {link.label}
                    </p>
                    <p className="text-slate-500 text-xs font-mono truncate">
                      {link.username}
                    </p>
                  </div>
                  <Send className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 ml-auto transition-colors shrink-0" />
                </motion.a>
              );
            })}

            {/* Location & email copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60"
            >
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-800/60 rounded-lg px-3 py-2 flex-1 border border-slate-700/50">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="truncate">{email}</span>
                </div>
                <button
                  id="contact-copy-email"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                  title="Copiar email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-700/60 rounded-2xl p-8 overflow-hidden h-full flex flex-col justify-between min-h-[380px]">
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {personalInfo.available ? "Disponible ahora" : "No disponible"}
                </div>

                <h3 className="text-2xl font-black text-slate-100 mb-3">
                  Cuéntame sobre <br />
                  <span className="text-cyan-400">tu proyecto</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Tiempo de respuesta promedio:{" "}
                  <strong className="text-slate-300">menos de 24 horas.</strong>{" "}
                  Trabajo de forma remota y colaboro con equipos de cualquier
                  tamaño.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <a
                  id="contact-email-cta"
                  href={`mailto:${email}?subject=Consulta de proyecto&body=Hola, me gustaría hablar sobre...`}
                  className="flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Enviar mensaje
                </a>
                <a
                  id="contact-linkedin-cta"
                  href="https://linkedin.com/in/jaime-mamani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 bg-slate-800/60 border border-slate-700 text-slate-300 font-medium rounded-xl hover:bg-slate-800 hover:border-slate-600 hover:text-slate-100 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  Conectar en LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

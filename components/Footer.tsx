"use client";

import { Terminal, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Tutoriales", href: "#content" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-mono text-slate-300 font-bold text-sm">
                {personalInfo.name.toLowerCase().replace(" ", ".")}.
                <span className="text-cyan-400">dev</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 font-mono text-center md:text-left max-w-xs">
              {"// Código limpio, sistemas robustos, seguridad por diseño."}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Back to top */}
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200 hover:scale-110"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-700 flex items-center gap-1.5">
            Diseñado y desarrollado con{" "}
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            usando Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

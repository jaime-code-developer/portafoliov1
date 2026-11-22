"use client";

import { useState } from "react";
import { ExternalLink, Clock, CheckCircle2, Archive, ChevronLeft, ChevronRight, X, Building2 } from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/lib/basePath";
import type { Project, ProjectCategory } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryConfig: Record<
  ProjectCategory,
  { label: string; color: string; bg: string }
> = {
  fullstack: {
    label: "Full Stack",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  frontend: {
    label: "Frontend",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  backend: {
    label: "Backend",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  mobile: {
    label: "Mobile",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  infrastructure: {
    label: "Infraestructura",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  security: {
    label: "Seguridad",
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  networking: {
    label: "Redes",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  tooling: {
    label: "DevOps/Tooling",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
};

const categoryGradient: Record<ProjectCategory, string> = {
  fullstack: "from-violet-500 to-purple-600",
  frontend: "from-cyan-500 to-blue-600",
  backend: "from-amber-500 to-orange-600",
  mobile: "from-emerald-500 to-green-600",
  infrastructure: "from-emerald-500 to-green-600",
  security: "from-rose-500 to-red-600",
  networking: "from-amber-500 to-orange-600",
  tooling: "from-cyan-500 to-blue-600",
};

const statusConfig = {
  completed: {
    label: "Completado",
    icon: CheckCircle2,
    color: "text-emerald-400",
  },
  "in-progress": {
    label: "En progreso",
    icon: Clock,
    color: "text-amber-400",
  },
  archived: {
    label: "Archivado",
    icon: Archive,
    color: "text-slate-500",
  },
};

// Gallery Modal component
function GalleryModal({
  images,
  title,
  onClose,
}: {
  images: string[];
  title: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800">
          <span className="text-slate-200 font-semibold text-sm truncate">{title}</span>
          <div className="flex items-center gap-3">
            <span className="text-slate-500 text-xs font-mono">
              {current + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-video w-full bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={getAssetPath(images[current])}
                alt={`${title} - imagen ${current + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 p-3 overflow-x-auto border-t border-slate-800">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  i === current ? "border-cyan-400" : "border-slate-700 opacity-60 hover:opacity-90"
                }`}
              >
                <Image
                  src={getAssetPath(img)}
                  alt={`thumb ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const catCfg = categoryConfig[project.category];
  const statusCfg = statusConfig[project.status];
  const StatusIcon = statusCfg.icon;
  const gradient = categoryGradient[project.category];
  const hasImages = project.images && project.images.length > 0;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
        whileHover={{ y: -4 }}
        className="group relative flex flex-col bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-950/80"
        id={`project-card-${project.id}`}
      >
        {/* Top accent line */}
        <div className={`h-0.5 w-full bg-gradient-to-r ${gradient}`} />

        {/* Project image */}
        {project.image && (
          <button
            onClick={() => hasImages && setGalleryOpen(true)}
            className={`relative w-full h-44 overflow-hidden bg-slate-900 ${hasImages ? "cursor-pointer" : "cursor-default"}`}
            title={hasImages ? `Ver galería (${project.images!.length} imágenes)` : ""}
          >
            <Image
              src={getAssetPath(project.image)}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            {hasImages && (
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/70 border border-slate-600 text-slate-200 text-xs font-mono px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Ver galería ({project.images!.length})
                </span>
              </div>
            )}
          </button>
        )}

        {/* Card content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex flex-wrap gap-2">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${catCfg.bg} ${catCfg.color}`}
              >
                {catCfg.label}
              </span>
              <span className="text-xs text-slate-600 font-mono self-center">
                {project.year}
              </span>
            </div>
            <div className={`flex items-center gap-1 ${statusCfg.color} shrink-0`}>
              <StatusIcon className="w-3.5 h-3.5" />
              <span className="text-xs font-medium whitespace-nowrap">
                {statusCfg.label}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-slate-100 font-bold text-base leading-snug mb-2 group-hover:text-cyan-300 transition-colors duration-200">
            {project.title}
          </h3>

          {/* Client */}
          {project.client && (
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-3">
              <Building2 className="w-3 h-3" />
              <span>{project.client}</span>
            </div>
          )}

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs font-mono hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-150"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-github-${project.id}`}
                className="flex items-center gap-1.5 text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors duration-200 group/link"
              >
                <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                Código
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-demo-${project.id}`}
                className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 group/link"
              >
                <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                Demo en vivo
              </a>
            )}
            {hasImages && (
              <button
                onClick={() => setGalleryOpen(true)}
                className="ml-auto flex items-center gap-1 text-xs text-slate-600 hover:text-slate-400 font-mono transition-colors"
              >
                📷 {project.images!.length} fotos
              </button>
            )}
            {!project.githubUrl && !project.demoUrl && !hasImages && (
              <span className="text-xs text-slate-600 font-mono italic">
                Proyecto privado
              </span>
            )}
          </div>
        </div>
      </motion.article>

      {/* Gallery Modal */}
      <AnimatePresence>
        {galleryOpen && hasImages && (
          <GalleryModal
            images={project.images!}
            title={project.title}
            onClose={() => setGalleryOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Play,
  ExternalLink,
  Clock,
  Server,
  Box,
  Network,
  ShieldCheck,
  Sparkles,
  X,
  Radio,
  Layers,
} from "lucide-react";
import { Youtube as YoutubeIcon } from "@/components/icons/SocialIcons";
import { videos, youtubeChannel } from "@/data/videos";
import type { Video, VideoCategory } from "@/types";

const categoryFilters: {
  id: VideoCategory;
  label: string;
  icon: React.ElementType;
}[] = [
  { id: "all", label: "Todos", icon: Layers },
  { id: "sysadmin", label: "SysAdmin & Linux", icon: Server },
  { id: "docker", label: "Docker & Contenedores", icon: Box },
  { id: "redes", label: "Redes & Networking", icon: Network },
  { id: "seguridad", label: "Seguridad & SSH", icon: ShieldCheck },
];

export default function VideosSection() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  const handleCardClick = (video: Video) => {
    if (video.youtubeId) {
      setSelectedVideo(video);
    } else {
      window.open(video.videoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="content"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background ambience */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.05),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 mb-4"
          >
            <span className="text-violet-400">04.</span>
            <span>tutoriales & contenido</span>
            <div className="h-px w-12 bg-cyan-400/40" />
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight"
              >
                Tutoriales Técnicos &{" "}
                <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                  Canal de YouTube
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-400 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed"
              >
                Contenido práctico y especializado en administración de servidores Linux,
                despliegues con Docker, configuración de redes y hardening de seguridad.
              </motion.p>
            </div>

            {/* Direct Channel Link */}
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              href={youtubeChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-red-600/90 to-rose-600/90 hover:from-red-500 hover:to-rose-500 text-white font-medium text-sm shadow-lg shadow-red-600/25 hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-red-500/40 self-start lg:self-auto"
            >
              <YoutubeIcon className="w-5 h-5 fill-white text-white" />
              <span>Suscribirse a {youtubeChannel.handle}</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </motion.a>
          </div>
        </div>

        {/* Channel Highlights Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mb-12 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-sm overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0 border border-red-400/30">
                <Radio className="w-7 h-7 text-white animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {youtubeChannel.name}
                  </h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-red-500/20 text-red-300 border border-red-500/30">
                    CANAL OFICIAL
                  </span>
                </div>
                <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
                  {youtubeChannel.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {youtubeChannel.topicBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={youtubeChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white text-xs font-mono tracking-wider transition-all duration-200 shrink-0 self-stretch sm:self-auto justify-center"
            >
              <YoutubeIcon className="w-4 h-4 text-red-400" />
              <span>VER CANAL COMPLETO</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-2">
          {categoryFilters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeCategory === filter.id;
            const count =
              filter.id === "all"
                ? videos.length
                : videos.filter((v) => v.category === filter.id).length;

            return (
              <button
                key={filter.id}
                onClick={() => setActiveCategory(filter.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-cyan-400" : "text-slate-500"
                  }`}
                />
                <span>{filter.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive
                      ? "bg-cyan-400/20 text-cyan-300"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Videos Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group flex flex-col rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
              >
                {/* Thumbnail Container */}
                <div
                  onClick={() => handleCardClick(video)}
                  className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer select-none"
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                      {video.categoryLabel}
                    </span>

                    {video.youtubeId ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-red-600/90 text-white backdrop-blur-md shadow-md">
                        <YoutubeIcon className="w-3.5 h-3.5 fill-white" />
                        YouTube
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-violet-600/80 text-white backdrop-blur-md shadow-md">
                        Tutorial
                      </span>
                    )}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/40 group-hover:scale-115 group-hover:shadow-red-500/60 transition-all duration-300 border border-white/20">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {video.duration && (
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-md bg-slate-950/85 backdrop-blur-md text-slate-200 text-xs font-mono border border-slate-800">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      <span>{video.duration}</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Title */}
                  <h3
                    onClick={() => handleCardClick(video)}
                    className="font-bold text-base sm:text-lg text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    title={video.title}
                  >
                    {video.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed line-clamp-3 flex-1">
                    {video.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/60">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2.5 mt-4 pt-2">
                    <button
                      onClick={() => handleCardClick(video)}
                      className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/15 to-violet-500/15 hover:from-cyan-500/25 hover:to-violet-500/25 text-cyan-300 font-medium text-xs border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-200"
                    >
                      <Play className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                      <span>{video.youtubeId ? "Ver Video" : "Ver Tutorial"}</span>
                    </button>

                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
                      title="Abrir en YouTube"
                      aria-label="Abrir enlace de YouTube"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/60">
                <div className="flex items-center gap-2.5 pr-4 min-w-0">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-mono text-xs text-slate-400 truncate">
                    {selectedVideo.categoryLabel} &bull; {selectedVideo.duration}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Cerrar reproductor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                {selectedVideo.youtubeId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-slate-300 font-medium mb-3">
                      Este tutorial está disponible en el canal de YouTube.
                    </p>
                    <a
                      href={selectedVideo.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white font-medium text-sm hover:bg-red-500 transition-colors"
                    >
                      <YoutubeIcon className="w-4 h-4 fill-white" />
                      Ver en YouTube
                    </a>
                  </div>
                )}
              </div>

              {/* Modal Info Footer */}
              <div className="p-5 sm:p-6 overflow-y-auto bg-slate-900/90">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {selectedVideo.description}
                    </p>
                  </div>
                  <a
                    href={selectedVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white text-xs font-medium transition-colors shrink-0 shadow-lg shadow-red-600/20"
                  >
                    <YoutubeIcon className="w-4 h-4 fill-white" />
                    <span>Abrir en YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-800">
                  {selectedVideo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

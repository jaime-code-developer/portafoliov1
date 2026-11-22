"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronUp, Plus, Sparkles } from "lucide-react";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard";
import type { ProjectCategory } from "@/types";

type FilterKey = "all" | ProjectCategory;

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
];

const INITIAL_PROJECTS_COUNT = 6;
const PROJECTS_PER_PAGE = 6;

export default function ProjectsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const remainingCount = Math.max(0, filtered.length - visibleCount);
  const nextBatchCount = Math.min(PROJECTS_PER_PAGE, remainingCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PROJECTS_PER_PAGE, filtered.length));
  };

  const handleLoadAll = () => {
    setVisibleCount(filtered.length);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_PROJECTS_COUNT);
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 mb-4"
          >
            <span className="text-violet-400">02.</span>
            <span>proyectos</span>
            <div className="h-px w-12 bg-cyan-400/40" />
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 mb-3"
              >
                Proyectos{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Destacados
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-400 text-lg"
              >
                {projects.length} proyectos — Full Stack, Frontend, Backend y Mobile.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
          id="projects-filter"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              id={`filter-${filter.key}`}
              onClick={() => {
                setActiveFilter(filter.key);
                setVisibleCount(INITIAL_PROJECTS_COUNT);
              }}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter.key
                  ? "text-slate-950 bg-gradient-to-r from-cyan-400 to-violet-500 shadow-lg shadow-violet-500/20"
                  : "text-slate-400 bg-slate-800/60 border border-slate-700/60 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              {filter.label}
              {activeFilter === filter.key && (
                <span className="ml-2 text-xs opacity-70">
                  (
                  {filter.key === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === filter.key).length}
                  )
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Show more / Load more controls */}
        {filtered.length > INITIAL_PROJECTS_COUNT && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex flex-col items-center gap-4 text-center"
          >
            {/* Progress indicator */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-mono text-slate-400">
                Mostrando <span className="text-cyan-400 font-semibold">{displayed.length}</span> de{" "}
                <span className="text-slate-200 font-semibold">{filtered.length}</span> proyectos
              </span>
              <div className="w-48 h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full transition-all duration-300"
                  style={{
                    width: `${(displayed.length / filtered.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 relative z-20">
              {hasMore ? (
                <>
                  <button
                    type="button"
                    id="projects-load-more"
                    onClick={handleLoadMore}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600/30 to-cyan-600/30 hover:from-violet-600/50 hover:to-cyan-600/50 border border-violet-500/40 hover:border-cyan-400 text-slate-100 font-medium rounded-xl shadow-lg shadow-violet-500/10 hover:shadow-cyan-500/20 transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4 text-cyan-400" />
                    <span>Cargar más proyectos</span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800/80 text-cyan-300 font-mono border border-slate-700">
                      +{nextBatchCount}
                    </span>
                  </button>

                  {remainingCount > nextBatchCount && (
                    <button
                      type="button"
                      id="projects-load-all"
                      onClick={handleLoadAll}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800/60 border border-slate-700 text-slate-300 font-medium rounded-xl hover:bg-slate-800 hover:border-slate-600 hover:text-slate-100 transition-all duration-200 cursor-pointer active:scale-95"
                    >
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span>Ver todos ({filtered.length})</span>
                    </button>
                  )}

                  {visibleCount > INITIAL_PROJECTS_COUNT && (
                    <button
                      type="button"
                      id="projects-show-less"
                      onClick={handleShowLess}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800/60 border border-slate-700 text-slate-300 font-medium rounded-xl hover:bg-slate-800 hover:border-slate-600 hover:text-slate-100 transition-all duration-200 cursor-pointer active:scale-95"
                    >
                      <ChevronUp className="w-4 h-4" />
                      <span>Mostrar menos</span>
                    </button>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <p className="text-sm text-slate-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    Has visto todos los proyectos disponibles en esta categoría
                  </p>
                  <button
                    type="button"
                    id="projects-show-less"
                    onClick={handleShowLess}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-800/60 border border-slate-700 text-slate-300 font-medium rounded-xl hover:bg-slate-800 hover:border-slate-600 hover:text-slate-100 transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <ChevronUp className="w-4 h-4" />
                    <span>Mostrar menos</span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

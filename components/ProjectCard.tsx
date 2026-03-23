"use client";

import { ExternalLink, Github, Link } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number; // 1-based for #1, #2, #3
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isGradient = project.image.startsWith("linear-gradient");
  const linkUrl = project.liveUrl || project.githubUrl;
  const layoutClass =
    "flex flex-col gap-8 items-stretch lg:items-start lg:gap-10 " +
    (index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row");

  return (
    <article className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] dark:backdrop-blur-md shadow-lg dark:shadow-[0_0_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-500/10 focus-within:ring-2 focus-within:ring-cyan-500 dark:focus-within:ring-cyan-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-[#0a192f]">
      <div className={layoutClass}>
        {/* project-image-wrapper: column for image — badge-style like certifications */}
        <div className="project-image-wrapper flex w-full min-w-0 shrink-0 flex-col lg:w-[48%] lg:max-w-[50%]">
          <div className="group relative w-full">
            {/* project-image-box: padded “badge” shell — centers asset, no crop */}
            <div className="project-image-box flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] sm:p-6 lg:p-8">
              {isGradient ? (
                <div
                  className="aspect-video w-full max-w-full rounded-xl bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  style={{ background: project.image }}
                  role="img"
                  aria-hidden
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="block h-auto w-full max-h-[min(75vh,900px)] max-w-full object-contain object-center [image-rendering:auto] transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              )}
            </div>

            {/* Hover overlay — matches badge box only */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-black/0 transition-all duration-300 group-hover:pointer-events-auto group-hover:bg-black/45 dark:group-hover:bg-black/50 flex flex-col items-center justify-end p-5 pb-8 sm:p-6 sm:pb-10">
              <p className="text-white text-sm text-center line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 mb-4 drop-shadow-md">
                {project.description}
              </p>
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/95 dark:bg-white/90 text-zinc-800 dark:text-zinc-900 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 delay-100 shadow-lg hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Open project"
              >
                <Link className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex min-w-0 flex-1 flex-col px-5 pb-6 pt-2 text-left sm:px-6 sm:pb-8 sm:pt-4 lg:w-[52%] lg:px-6 lg:pb-8 lg:pt-6">
          <h3 className="mb-3 flex flex-wrap items-baseline gap-2">
            <span className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">
              #{index}
            </span>
            <span className="text-xl font-bold leading-tight text-black dark:text-white">
              {project.title}
            </span>
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {project.description}
          </p>

          {project.tags && project.tags.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/5 bg-black/8 px-3 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:bg-white/15 dark:text-white dark:hover:bg-white/25 dark:focus-visible:ring-cyan-400"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                Live
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20 dark:focus-visible:ring-cyan-400"
            >
              <Github className="h-4 w-4 shrink-0" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

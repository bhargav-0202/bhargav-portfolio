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

  return (
    <article
      className="flex flex-col rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] dark:backdrop-blur-md shadow-lg dark:shadow-[0_0_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-500/10 focus-within:ring-2 focus-within:ring-cyan-500 dark:focus-within:ring-cyan-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-[#0a192f]"
    >
      {/* Image section - top of card; hover overlay only on image */}
      <div className="group relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
          style={
            isGradient
              ? { background: project.image }
              : { backgroundImage: `url(${project.image})` }
          }
        />
        {/* Hover overlay: dark overlay + description + round link button (only when hovering image) */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 dark:group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-end pb-6 pt-12 px-4">
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

      {/* Content section */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 text-left">
        <h3 className="flex items-baseline gap-2 flex-wrap mb-2">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">
            #{index}
          </span>
          <span className="text-black dark:text-white font-bold text-lg leading-tight">
            {project.title}
          </span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technology tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-medium bg-black/8 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-black/5 dark:border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Live + GitHub buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-200 dark:bg-white/15 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/25 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              Live
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-800 dark:bg-white/10 text-white hover:bg-gray-700 dark:hover:bg-white/20 border border-gray-700/50 dark:border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400"
          >
            <Github className="w-4 h-4 shrink-0" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

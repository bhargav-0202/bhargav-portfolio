"use client";

import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isGradient = project.image.startsWith("linear-gradient");

  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden shadow-lg border border-white/10 bg-[#0a192f] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-cyan-500/10 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Background image or gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={
            isGradient
              ? { background: project.image }
              : { backgroundImage: `url(${project.image})` }
          }
        />

        {/* Bottom title overlay (always visible) */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent pt-12 pb-4 px-4">
          <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-sm">
            {project.title}
          </h3>
        </div>

        {/* Hover overlay: description + View on GitHub */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <p className="text-white/95 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
          <span className="inline-flex items-center gap-2 text-cyan-400 font-medium text-sm group-hover:underline">
            View on GitHub
            <ExternalLink className="w-4 h-4 shrink-0" />
          </span>
        </div>
      </div>
    </a>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { SkyToggle } from "@/components/ui/sky-toggle";

const navLinks = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Certifications",
  "Contact",
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#0a192f]/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-black dark:text-white font-medium text-lg tracking-tight">
          {"{ SB }"}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm text-black/90 dark:text-white/90 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <SkyToggle />
          <Button
            className="bg-cyan-500 hover:bg-cyan-400 text-white border-0 rounded-md px-4 py-2 text-sm font-medium"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
    const roles = [
        "Data Engineer..",
        "Databricks Data Engineer..",
        "Cloud Data Engineer..",
      ];
      
      const [roleIndex, setRoleIndex] = useState(0);
      const [displayText, setDisplayText] = useState("");
      const [isDeleting, setIsDeleting] = useState(false);
      
      useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;
      
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentRole.length) {
            timeout = setTimeout(() => {
              setDisplayText(currentRole.slice(0, displayText.length + 1));
            }, 80);
          } else {
            // Pause before deleting
            timeout = setTimeout(() => {
              setIsDeleting(true);
            }, 1200);
          }
        } else {
          // Deleting (fade-out feel)
          if (displayText.length > 0) {
            timeout = setTimeout(() => {
              setDisplayText(currentRole.slice(0, displayText.length - 1));
            }, 40);
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      
        return () => clearTimeout(timeout);
      }, [displayText, isDeleting, roleIndex]);
      
      
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Dark base */}
      <div className="absolute inset-0 bg-[#0a192f]" />

      {/* Dot grid + lines (network feel) */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(0, 188, 212, 0.4) 1px, transparent 0)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,188,212,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,188,212,0.15) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-5">
          <p className="text-white/80 text-xl sm:text-2xl font-medium tracking-wide
              transition-all duration-300
              hover:text-cyan-400">
              Hi, I am
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Sai {" "}
              <span className="text-[#f5a623]">Bhargav</span>
            </h1>

            {/* Fixed-height container so only role text animates; content below stays static */}
            <div className="min-h-[2.75rem] flex items-center">
              <p className="text-xl font-semibold text-cyan-400 flex items-center gap-1 min-w-0">
                <span className="tabular-nums truncate" aria-live="polite">
                  {displayText}
                </span>
                <span
                  className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 shrink-0 animate-pulse"
                  aria-hidden
                />
              </p>
            </div>

            <p className="text-white/70 text-sm">Philadelphia, USA.</p>

            <p className="text-gray-300 max-w-xl leading-relaxed text-lg">
            I work behind the scenes where data becomes power. Clean pipelines, 
            solid architecture, and systems that don’t break  --that’s my game.

            </p>

            {/* Socials */}
            <div className="flex gap-4 text-white/80">
              <a
                href="https://www.linkedin.com/in/bhargav-c-89b0423a0cfs567/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/bhargav-0202"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:bhargavxm0214@gmail.com"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                className="bg-cyan-500 hover:bg-cyan-400 text-white border-0 rounded-md px-5 py-2.5 text-sm font-medium"
                asChild
              >
                <a href="#projects">View Projects →</a>
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-md px-5 py-2.5 text-sm"
                asChild
              >
                
              </Button>
            </div>
            {/* Hero content grid */}
            <div className="grid md:grid-cols-2 gap-8">
            {/* Left */}
            {/* Right */}
            </div>

            {/* Scroll indicator */}
            <div className="pt-10 flex justify-center w-full">
            <a
             href="#about"
             className="text-white/60 hover:text-cyan-400 transition-colors"
            aria-label="Scroll down"
              >
            <ChevronDown className="w-8 h-8 animate-bounce transition-transform hover:scale-110" />
            </a>
            </div>
          </div>

          {/* Right - Profile: circular frame; add profile-bg.png to public/ for splatter behind photo (shows when profile has transparent background) */}
          <div className="relative flex justify-center order-first md:order-last">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-white/5">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-full"
                style={{ backgroundImage: "url(/profile-bg.png)" }}
                aria-hidden
              />
              <img
                src="/profile.png"
                alt="Sai Bhargav"
                className="absolute inset-0 w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

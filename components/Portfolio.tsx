import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import SkillsSection from "@/components/SkillsSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const sectionClass =
  "border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 rounded-xl backdrop-blur-sm";
const headingClass = "text-2xl font-semibold text-black dark:text-white mb-4";
const textClass = "text-gray-700 dark:text-gray-300";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-black dark:text-white">
      <Nav />

      <main className="space-y-16 pb-24">
        {/* Hero */}
        <Hero />

        {/* About Me */}
        <AboutMe />

        {/* Skills */}
        <SkillsSection />

        {/* Projects - exactly 3 cards, reference layout */}
        {/*<section id="projects" className="max-w-7xl mx-auto px-6 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-10 text-center sm:text-left">
            Projects
            <span className="text-cyan-500 dark:text-cyan-400 align-middle ml-1.5 w-2 h-2 rounded-full bg-current inline-block" aria-hidden />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 1} />
            ))}
          </div>
        </section>*/}

        {/* Certifications + Education */}
        <section className="max-w-7xl mx-auto px-6 scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Certifications */}
            <div id="certifications">
              <Card className={sectionClass + " h-full"}>
                <CardContent className="p-6 h-full flex flex-col">
                  <h2 className={headingClass + " text-center"}>
                    Certifications
                  </h2>
                  <div className="h-px w-full bg-black/10 dark:bg-white/10 my-4" />

                  {/* Badges: side by side, equal spacing, within boundaries */}
                  <div className="flex flex-wrap justify-center items-start gap-8 mt-2">
                    {/* Databricks Badge */}
                    <a
                      href="https://credentials.databricks.com/2fca2c29-66b5-4d99-8a45-e32619a6c591"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center flex-1 min-w-0 max-w-[200px]"
                    >
                      <div className="relative w-full rounded-2xl p-4 bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] flex justify-center items-center">
                        <img
                          src="/databricks.png"
                          alt="Databricks Certified Data Engineer Professional badge"
                          className="h-36 w-auto max-w-full object-contain transform-gpu transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5"
                        />
                        <span
                          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-black/5 dark:via-white/10 to-transparent"
                          aria-hidden
                        />
                      </div>
                      <p className="text-black/90 dark:text-white/90 text-sm font-medium text-center mt-3 w-full">
                        Databricks Certified Data Engineer Professional
                      </p>
                    </a>

                    {/* Azure Fabric Badge */}
                    <a
                      href="https://learn.microsoft.com/api/credentials/share/en-us/SaiBhargavChelmela-5965/8834C0F6A8C621DC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center flex-1 min-w-0 max-w-[200px]"
                    >
                      <div className="relative w-full rounded-2xl p-4 bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] flex justify-center items-center">
                        <img
                          src="/Microsoft.png"
                          alt="Microsoft Fabric Data Engineer Associate badge"
                          className="h-36 w-auto max-w-full object-contain transform-gpu transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5"
                        />
                        <span
                          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-black/5 dark:via-white/10 to-transparent"
                          aria-hidden
                        />
                      </div>
                      <p className="text-black/90 dark:text-white/90 text-sm font-medium text-center mt-3 w-full">
                        Microsoft Fabric Data Engineer Associate
                      </p>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education */}
            <div id="education">
              <Card className={sectionClass + " h-full"}>
                <CardContent className="p-6 h-full flex flex-col items-center text-center">
                  <h2 className={headingClass + " text-center w-full"}>
                    Education
                  </h2>
                  <div className="h-px w-full bg-black/10 dark:bg-white/10 my-4" />

                  <div className="relative w-full rounded-2xl p-4 bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] flex justify-center items-center">
                    <img
                      src="/ucm-logo.png"
                      alt="University of Central Missouri logo"
                      className="h-33 w-auto max-w-full object-contain transform-gpu transition-transform duration-300  group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-black dark:text-white font-semibold text-lg leading-tight">
                      University of Central Missouri
                    </p>
                    <p className="text-black dark:text-white text-base leading-tight">
                      Master&apos;s in Computer Science
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="max-w-3xl mx-auto px-6 scroll-mt-24"
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
              Get In Touch<span className="text-cyan-600 dark:text-cyan-400">.</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Get in touch or shoot me an email directly at{" "}
              <a
                href="mailto:bhargavxm0214@gmail.com"
                className="text-black dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                bhargavxm0214@gmail.com
              </a>
            </p>
          </div>

          {/* Form Card - glassy in dark mode */}
          <div className="border border-black/10 dark:border-white/20 bg-white/60 dark:bg-white/[0.06] rounded-2xl p-8 backdrop-blur-sm dark:backdrop-blur-md dark:shadow-[0_0_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="b5d049a7-c934-40e7-a864-90395d643562"
              />

              {/* Optional: Email subject */}
              <input
                type="hidden"
                name="subject"
                value="New message from portfolio"
              />

              {/* Optional: Redirect after submit */}
              <input
                type="hidden"
                name="redirect"
                value="https://bhargav-portfolio.vercel.app/thank-you"
              />

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl bg-white/80 dark:bg-white/[0.06] border border-black/10 dark:border-white/15 px-4 py-3
                            text-black dark:text-white placeholder-gray-500
                            focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400
                            focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 dark:backdrop-blur-sm transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl bg-white/80 dark:bg-white/[0.06] border border-black/10 dark:border-white/15 px-4 py-3
                            text-black dark:text-white placeholder-gray-500
                            focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400
                            focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 dark:backdrop-blur-sm transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full rounded-xl bg-white/80 dark:bg-white/[0.06] border border-black/10 dark:border-white/15 px-4 py-3
                            text-black dark:text-white placeholder-gray-500 resize-none
                            focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400
                            focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 dark:backdrop-blur-sm transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                group w-full flex items-center justify-center gap-3
                rounded-full bg-cyan-400 text-black
                py-4 px-8 font-semibold text-lg
                transition-all duration-300
                hover:bg-cyan-300
                hover:shadow-[0_0_30px_rgba(34,211,238,0.65)]
                focus:outline-none
                "
              >
                <Image
                  src="/send-icon.png"
                  alt="Send message"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

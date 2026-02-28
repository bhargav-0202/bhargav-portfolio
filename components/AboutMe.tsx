"use client";

import {
  Database,
  Brain,
  BarChart3,
  Cloud,
  Layers,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const featureCards: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Designing, building, and maintaining scalable batch and streaming data pipelines with strong reliability and data quality.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transforming raw data into analytics-ready datasets and insights that support business and operational decisions.",
  },
  {
    icon: Cloud,
    title: "Cloud Data Engineering",
    description:
      "Building cloud-native data platforms on Azure, AWS, and GCP using managed services for scalability, security, and performance.",
  },
  {
    icon: Layers,
    title: "Big Data & Distributed Systems",
    description:
      "Processing large-scale data efficiently using distributed frameworks like Spark, Hadoop, and Databricks.",
  },
  {
    icon: Brain,
    title: "Machine Learning Enablement",
    description:
      "Supporting ML workflows by building clean feature pipelines and scalable data infrastructure for model training and inference.",
  },
  {
    icon: ShieldCheck,
    title: "Data Governance & Security",
    description:
      "Implementing data quality checks, governance frameworks, and security controls to ensure trusted and compliant data.",
  },
];

const cardBase =
  "rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 ease-out " +
  "hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 " +
  "focus:outline-none focus-visible:-translate-y-1 focus-visible:scale-[1.02] focus-visible:shadow-lg focus-visible:shadow-cyan-500/20 dark:focus-visible:shadow-cyan-500/10 focus-visible:border-cyan-500/40 dark:focus-visible:border-cyan-500/30 focus-visible:ring-2 focus-visible:ring-cyan-500/50 dark:focus-visible:ring-cyan-400/50";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 scroll-mt-24 overflow-hidden"
    >
      <header className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
          About <span className="text-cyan-600 dark:text-cyan-400">Me</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-xl mx-auto">
          Crafting data-driven solutions & intelligent systems.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8">
        {/* Left: Background card */}
        <article
          className={`${cardBase} p-6 md:p-8 flex flex-col order-1 lg:order-1`}
          tabIndex={0}
        >
          <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg mb-4">
            Background
          </h3>
          <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed space-y-3">
            <p>
              I specialize in{" "}
              <strong className="text-black dark:text-white">Data Engineering and Analytics</strong>
              , with hands-on experience designing and building scalable batch and 
              streaming data pipelines, cloud-native data platforms, and analytics-ready 
              data systems that power business decisions. I enjoy working across the data lifecycle, 
              from ingestion and transformation to warehousing and visualization. 
              </p>
              <p>
              I’m deeply interested in{" "}
              <strong className="text-black dark:text-white">automation, AI agents, and GenAI-driven systems,</strong> 
              where I focus on connecting enterprise data with LLMs through reliable pipelines, 
              RAG architectures, and intelligent workflows. With a strong foundation in algorithms 
              and problem-solving, I approach complex data challenges with clean, efficient, 
              and production-ready solutions, turning messy data into trusted systems that scale.
            </p>
            <p>
              My foundation in{" "}
              <strong className="text-black dark:text-white">competitive programming</strong> and
              algorithms helps me tackle complex problems with clean, efficient
              solutions. I enjoy turning messy data into clear stories and
              reliable systems that scale.
            </p>
          </div>
        </article>

        {/* Right: Feature cards grid */}
        <div className="grid grid-cols-2 gap-4 order-2 lg:order-2">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className={`${cardBase} p-5 flex flex-col items-center text-center`}
              tabIndex={0}
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-black dark:text-white font-semibold text-sm mb-2">
                {title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed line-clamp-4">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

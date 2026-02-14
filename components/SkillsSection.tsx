"use client";

import {
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiJavascript,
  SiR,
  SiGo,
  SiScala,
  SiLinux,
  SiApple,
  SiAmazon,
  SiGooglecloud,
  SiApachehadoop,
  SiApachespark,
  SiApachehive,
  SiApachekafka,
  SiDatabricks,
  SiGoogledataflow,
  SiSnowflake,
  SiGooglebigquery,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPandas,
  SiTableau,
  SiLooker,
  SiTensorflow,
  SiGit,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiSelenium,
  SiJira,
  SiConfluence,
  SiSlack,
  SiGoogledocs,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { skillCategories } from "@/lib/skills";

const VERIFIED_ICON_MAP: Record<string, IconType> = {
  "Java (11 / 17)": SiOpenjdk,
  Python: SiPython,
  Scala: SiScala,
  "C++": SiCplusplus,
  R: SiR,
  JavaScript: SiJavascript,
  Go: SiGo,
  Linux: SiLinux,
  "macOS": SiApple,
  "Amazon Web Services (AWS)": SiAmazon,
  "Google Cloud Platform (GCP)": SiGooglecloud,
  "Apache Hadoop": SiApachehadoop,
  "Apache Spark": SiApachespark,
  "Apache Hive": SiApachehive,
  "Apache Kafka": SiApachekafka,
  Databricks: SiDatabricks,
  "Google Cloud Dataflow": SiGoogledataflow,
  Snowflake: SiSnowflake,
  "Google BigQuery": SiGooglebigquery,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  "Scikit-learn": SiPandas,
  Pandas: SiPandas,
  NumPy: SiPandas,
  TensorFlow: SiTensorflow,
  Tableau: SiTableau,
  Looker: SiLooker,
  Git: SiGit,
  Jenkins: SiJenkins,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Selenium: SiSelenium,
  JIRA: SiJira,
  Confluence: SiConfluence,
  Slack: SiSlack,
  "Google Docs": SiGoogledocs,
};

/** Brand colors for icons (original / recognizable on dark background) */
const BRAND_COLORS: Record<string, string> = {
  Python: "#3776AB",
  "Java (11 / 17)": "#ED8B00",
  "C++": "#00599C",
  R: "#276DC3",
  JavaScript: "#F7DF1E",
  Go: "#00ADD8",
  Scala: "#DC322F",
  Linux: "#FCC624",
  "macOS": "#000000",
  "Amazon Web Services (AWS)": "#FF9900",
  "Google Cloud Platform (GCP)": "#4285F4",
  "Apache Hadoop": "#66CCFF",
  "Apache Spark": "#E25A1C",
  "Apache Hive": "#FDEE00",
  "Apache Kafka": "#231F20",
  Databricks: "#FF3621",
  "Google Cloud Dataflow": "#4285F4",
  Snowflake: "#29B5E8",
  "Google BigQuery": "#4285F4",
  PostgreSQL: "#336791",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  "Scikit-learn": "#F89939",
  Pandas: "#150458",
  NumPy: "#013243",
  TensorFlow: "#FF6F00",
  Tableau: "#E97627",
  Looker: "#4285F4",
  Git: "#F05032",
  Jenkins: "#D24939",
  Docker: "#2496ED",
  Kubernetes: "#326CE5",
  Terraform: "#7B42BC",
  Selenium: "#43B02A",
  JIRA: "#0052CC",
  Confluence: "#172B4D",
  Slack: "#4A154B",
  "Google Docs": "#4285F4",
};

function SkillCard({ name }: { name: string }) {
  const Icon = VERIFIED_ICON_MAP[name];
  const color = BRAND_COLORS[name] ?? "#94a3b8";

  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 min-w-[120px] h-[100px] shrink-0 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
      title={name}
    >
      {Icon ? (
        <Icon
          className="w-9 h-9 shrink-0 mb-2"
          style={{ color }}
          aria-hidden
        />
      ) : (
        <span
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 text-sm font-bold mb-2"
          aria-hidden
        >
          {name.charAt(0)}
        </span>
      )}
      <span className="text-white text-xs font-medium text-center leading-tight line-clamp-2">
        {name}
      </span>
    </div>
  );
}

function ScrollingRow({
  skills,
  direction,
}: {
  skills: string[];
  direction: "right" | "left";
}) {
  const duplicated = [...skills, ...skills];
  const animation =
    direction === "right"
      ? "skills-scroll-right 50s linear infinite"
      : "skills-scroll-left 50s linear infinite";

  return (
    <div className="overflow-hidden w-full" aria-hidden>
      <div
        className="flex gap-4 w-max"
        style={{ animation }}
      >
        {duplicated.map((name, i) => (
          <SkillCard key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const n = Math.ceil(allSkills.length / 3);
  const row1 = allSkills.slice(0, n);
  const row2 = allSkills.slice(n, n * 2);
  const row3 = allSkills.slice(n * 2);

  return (
    <section
      id="skills"
      className="relative max-w-full mx-auto px-4 sm:px-6 scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-[#0d2137]" />

      <header className="text-center mb-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Data engineering technologies and tools I use to build scalable data
          systems.
        </p>
      </header>

      <div className="space-y-4 max-w-full">
        <ScrollingRow skills={row1} direction="right" />
        <ScrollingRow skills={row2} direction="left" />
        <ScrollingRow skills={row3} direction="right" />
      </div>
    </section>
  );
}

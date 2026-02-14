export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      "Java (11 / 17)",
      "Python",
      "SQL",
      "Scala",
      "C++",
      "R",
      "JavaScript",
      "Go",
    ],
  },
  {
    title: "Operating Systems",
    skills: ["Linux", "Windows", "macOS"],
  },
  {
    title: "Cloud Platforms & Services",
    skills: [
      "Microsoft Azure",
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
    ],
  },
  {
    title: "Big Data & Distributed Processing",
    skills: [
      "Apache Hadoop",
      "Apache Spark",
      "Apache Hive",
      "Apache Pig",
      "Apache Flume",
      "Databricks",
    ],
  },
  {
    title: "Streaming & Data Pipelines",
    skills: [
      "Apache Kafka",
      "Apache Beam",
      "Google Cloud Dataflow",
    ],
  },
  {
    title: "Databases & Data Warehousing",
    skills: [
      "Snowflake",
      "Google BigQuery",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Machine Learning & Analytics Libraries",
    skills: [
      "Spark MLlib",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "TensorFlow",
    ],
  },
  {
    title: "Data Visualization & BI Tools",
    skills: [
      "Power BI",
      "Tableau",
      "Looker",
      "Microsoft Excel",
      "Microsoft PowerPoint",
    ],
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      "Git",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    title: "Testing & Quality Assurance",
    skills: ["JUnit", "PyTest", "Selenium"],
  },
  {
    title: "Security & Compliance",
    skills: [
      "Data Encryption",
      "Identity and Access Management (IAM)",
      "GDPR Compliance",
    ],
  },
  {
    title: "Collaboration & Documentation",
    skills: [
      "JIRA",
      "Confluence",
      "Slack",
      "Microsoft Teams",
      "Markdown",
      "Google Docs",
      "Microsoft Word",
    ],
  },
];

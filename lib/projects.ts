export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // URL or CSS gradient
  githubUrl: string;
  liveUrl?: string; // optional live demo URL
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: "databricks-lake",
    title: "Unified Azure Databricks Data Lake",
    description:
      "Cloud-native data lake processing 5 PB+ of data across sales, inventory, and finance for 10K+ daily users.",
    image:
      "linear-gradient(135deg, #0f766e 0%, #134e4a 50%, #0c4a6e 100%)",
    githubUrl: "https://github.com",
    liveUrl: "#",
    tags: ["PySpark", "dbt", "Airflow", "Databricks"],
  },
  {
    id: "customer-360",
    title: "Customer 360 Analytics Platform",
    description:
      "Analytical models for 35M+ customers using RFM segmentation to improve campaign targeting efficiency.",
    image:
      "linear-gradient(135deg, #1e3a5f 0%, #312e81 50%, #4c1d95 100%)",
    githubUrl: "https://github.com",
    liveUrl: "#",
    tags: ["SQL", "PySpark", "Power BI"],
  },
  {
    id: "realtime-pipeline",
    title: "Real-Time Analytics Pipeline",
    description:
      "Streaming pipelines with Kafka and Spark Streaming for near real-time operational KPIs.",
    image:
      "linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)",
    githubUrl: "https://github.com",
    liveUrl: "#",
    tags: ["Kafka", "Spark Streaming", "AWS", "GCP"],
  },
  {
    id: "supply-chain",
    title: "Supply Chain Resilience Analysis",
    description:
      "Cross-national supply chain and sustainability analysis with predictive dashboards.",
    image:
      "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
    githubUrl: "https://github.com",
    tags: ["Python", "Pandas", "Visualization"],
  },
  {
    id: "powerbi-dashboard",
    title: "Profit Report Dashboard in Power BI",
    description:
      "Interactive profit and performance dashboards with drill-down and regional views.",
    image:
      "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
    githubUrl: "https://github.com",
    tags: ["Power BI", "DAX", "SQL"],
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis for Social Media",
    description:
      "NLP pipeline for social media sentiment with real-time classification and reporting.",
    image:
      "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%)",
    githubUrl: "https://github.com",
    tags: ["Python", "NLP", "Transformers"],
  },
];

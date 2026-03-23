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
    id: "disaster-intelligence",
    title: "Real-Time Disaster Intelligence Platform",
    description:
      "This project ingests live earthquake data from the USGS (United States Geological Survey) API every 60 seconds, processes it through a Medallion Architecture (Bronze → Silver → Gold), applies machine learning for anomaly detection and severity classification, generates intelligent natural language summaries using GPT-4o, exports curated data to Snowflake, and visualizes insights on Power BI dashboards — all in real time.",
    image: "/projects/disaster-intelligence-platform.png",
    githubUrl: "https://github.com/bhargav-0202/Real-Time-Disaster-Intelligence-Platform",
    tags: ["Azure", "Databricks", "Snowflake", "GPT-4o", "Power BI"],
  },
  {
    id: "ml-loan-risk-lending-club",
    title: "ML Loan Risk Scoring Pipeline ~ LENDING CLUB",
    description:
      "PySpark and SQL-based data pipeline to compute loan risk scores using weighted financial factors, classifying loans into A–F grades to support risk mitigation, improve portfolio quality, and enable consistent, audit-ready lending decisions.",
    image: "/projects/ml-loan-risk-lending-club.jpg",
    githubUrl: "https://github.com/bhargav-0202",
    tags: ["PySpark", "SQL", "Feature Engineering", "Lending Club", "Machine Learning"],
  },
  {
    id: "realtime-pipeline",
    title: "Real-Time Analytics Pipeline",
    description:
      "Lambda architecture analytics platform processing real-time clickstream data using Kafka and PySpark Structured Streaming, with Airflow and dbt for batch transformations and Snowflake for warehousing, enabling reliable, analytics-ready insights.",
    image:
      "/projects/Project3.png",
    githubUrl: "https://github.com/bhargav-0202/Real-Time-User-Behaviour-Analytics-Platform",
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

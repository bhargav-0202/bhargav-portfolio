import {
    SiPython,
    SiApachespark,
    SiApachekafka,
    SiDatabricks,
    SiSnowflake,
    SiDbt,
    SiPostgresql,
    SiAmazon,
    SiGooglecloud,
    SiDocker,
    SiKubernetes,
    SiTerraform
  } from "react-icons/si";
  
  export default function TechIcons() {
    const iconClass =
      "w-12 h-12 text-gray-400 hover:text-cyan-400 transition-colors";
  
    return (
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 place-items-center py-4">
        <SiPython className={iconClass} title="Python" />
        <SiApachespark className={iconClass} title="Apache Spark" />
        <SiApachekafka className={iconClass} title="Kafka" />
        <SiDatabricks className={iconClass} title="Databricks" />
        <SiSnowflake className={iconClass} title="Snowflake" />
        <SiDbt className={iconClass} title="dbt" />
        <SiPostgresql className={iconClass} title="PostgreSQL" />
        <SiAmazon className={iconClass} title="AWS" />
        <SiGooglecloud className={iconClass} title="GCP" />
        <SiDocker className={iconClass} title="Docker" />
        <SiKubernetes className={iconClass} title="Kubernetes" />
        <SiTerraform className={iconClass} title="Terraform" />
      </div>
    );
  }
  
import Portfolio from "@/components/Portfolio";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground className="text-black dark:bg-[#0a192f] dark:text-white">
      <Portfolio />
    </AuroraBackground>
  );
}

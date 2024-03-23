import { AuroraBackgroundDemo } from "@/components/ui/Home/landing";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full items-center justify-between bg-black text-white">
      <AuroraBackground>
        <AuroraBackgroundDemo />
      </AuroraBackground>
    </main>
  );
}

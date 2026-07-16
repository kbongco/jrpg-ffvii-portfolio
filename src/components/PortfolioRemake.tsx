import {
  ChevronRight,
  ArrowRight,
  Disc,
  Hexagon,
  Circle,
  Shield,
  Zap,
  Terminal,
  Database,
  Code,
  Layout,
  Globe,
  Mail,
  Github,
  Twitter,
  User,
  Star,
} from "lucide-react";
import HeroSection from "./HeroSection";
import Profile from "./Profile";
import Status from "./Status";
import BattleLog from "./BattleLog";
import Sidequests from "./Sidequests";
import Contact from "./Contact";

export default function PortfolioRemake() {
  return (
    <div className="remake-theme min-h-screen font-share-tech selection:bg-[#00d4e8] selection:text-black overflow-x-hidden relative">
      {/* Background Image & Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#050d12]/80 z-10 backdrop-blur-sm" />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 212, 232, 0.1) 0%, transparent 60%)",
            animation: "pulse-glow 8s infinite alternate",
          }}
        />
      </div>
    <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-24 flex flex-col gap-16">
        <HeroSection />
        <Profile />
        <Status />
        <BattleLog />
        <Sidequests />
        <Contact/>
      </div>
    </div>
  );
}

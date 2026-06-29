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

        {/* SAVE POINT / CONTACT */}
        <section className="py-16 flex flex-col items-center justify-center space-y-8 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div
              className="w-64 h-64 border border-[#00d4e8] rounded-full animate-ping"
              style={{ animationDuration: "3s" }}
            />
          </div>

          <h2 className="font-rajdhani text-3xl md:text-5xl font-bold tracking-widest text-white text-center">
            DO YOU WANT TO SAVE YOUR PROGRESS?
          </h2>
          <p className="text-[#00d4e8] tracking-widest mb-4">
            Connect with me for future missions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
            {/* TODO: Add real mailto/github links */}
            <a
              href="#email"
              className="flex-1 remake-panel remake-cut-both p-4 flex items-center justify-center gap-3 hover:bg-[#00d4e8]/10 hover:border-[#00d4e8] transition-all group"
            >
              <Mail className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00d4e8] transition-colors" />
              <span className="font-rajdhani text-xl font-bold tracking-widest group-hover:text-glow-teal">
                EMAIL
              </span>
            </a>
            <a
              href="#github"
              className="flex-1 remake-panel remake-cut-both p-4 flex items-center justify-center gap-3 hover:bg-[#00d4e8]/10 hover:border-[#00d4e8] transition-all group"
            >
              <Github className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00d4e8] transition-colors" />
              <span className="font-rajdhani text-xl font-bold tracking-widest group-hover:text-glow-teal">
                GITHUB
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

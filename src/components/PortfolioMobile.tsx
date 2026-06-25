import { useState, useEffect } from "react";
import {
  User,
  Code,
  Hexagon,
  Mail,
  ChevronRight,
  Zap,
  Star,
  BookOpen,
} from "lucide-react";

export default function PortfolioMobile() {
  const [activeTab, setActiveTab] = useState("status");
  const [hp, setHp] = useState(0);
  const [mp, setMp] = useState(0);

  useEffect(() => {
    // Initial animation delay
    const timer = setTimeout(() => {
      setHp(7777);
      setMp(999);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="remake-theme min-h-screen w-full font-rajdhani overflow-x-hidden relative flex flex-col bg-[#050d12]">
      {/* Container simulating a mobile viewport */}
      <div className="w-full relative pb-24 shadow-2xl bg-gradient-to-b from-[#050d12] to-[#0a151c]">
        {/* Background / Hero image */}
        <div className="absolute top-0 left-0 w-full h-[300px] z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-[#050d12]/60 to-transparent z-10" />
          <div
            className="w-full h-full opacity-40 blur-sm"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(0, 212, 232, 0.2) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 p-4 space-y-6 pt-12">
          {/* Header & Hero */}
          <header className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-glow-teal tracking-wider text-white">
                Kathleen Bongco
              </h1>
              <p className="text-[#00d4e8] font-share-tech uppercase tracking-widest text-sm">
                Ex-SOLDIER / Full Stack Dev
              </p>
            </div>

            {/* Vitals Bar - Mobile style */}
            <div className="remake-panel remake-cut-tl p-4 space-y-3">
              <div className="flex items-end justify-between font-share-tech">
                <span className="text-white text-lg font-bold">HP</span>
                <span className="text-white text-2xl text-glow-teal">
                  {hp} / 7777
                </span>
              </div>
              <div className="remake-bar-container h-2 w-full rounded-sm">
                <div
                  className="remake-bar-fill-hp h-full"
                  style={{ width: `${(hp / 7777) * 100}%` }}
                />
              </div>

              <div className="flex items-end justify-between font-share-tech mt-2">
                <span className="text-[#94a3b8] text-sm">MP</span>
                <span className="text-[#00d4e8] text-lg">{mp} / 999</span>
              </div>
              <div className="remake-bar-container h-1.5 w-full rounded-sm">
                <div
                  className="remake-bar-fill-mp h-full"
                  style={{ width: `${(mp / 999) * 100}%` }}
                />
              </div>
            </div>
          </header>

          {/* Dynamic Content based on activeTab */}
          <main className="space-y-6 pb-6">
            {activeTab === "status" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[#00d4e8] font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                  <User className="w-5 h-5" /> Status
                </h2>

                <div className="space-y-4">
                  {[
                    { name: "REACT / NEXT.JS", val: 92 },
                    { name: "TYPESCRIPT", val: 88 },
                    { name: "TAILWIND CSS", val: 95 },
                    { name: "NODE.JS", val: 82 },
                  ].map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between font-share-tech text-sm">
                        <span className="text-white uppercase">
                          {skill.name}
                        </span>
                        <span className="text-[#00d4e8]">LV. MAX</span>
                      </div>
                      <div className="remake-bar-container h-1.5 w-full">
                        <div
                          className="remake-bar-fill-hp h-full"
                          style={{
                            width: `${skill.val}%`,
                            transitionDelay: `${i * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "materia" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[#00d4e8] font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                  <Hexagon className="w-5 h-5" /> Materia
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Frontend", type: "magic", desc: "React, Vue" },
                    { name: "Backend", type: "support", desc: "Node, Python" },
                    {
                      name: "Database",
                      type: "independent",
                      desc: "Postgres, Mongo",
                    },
                    { name: "DevOps", type: "command", desc: "Docker, AWS" },
                  ].map((mat, i) => (
                    <div
                      key={i}
                      className="remake-panel remake-cut-tl p-3 flex flex-col gap-2 cursor-pointer hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 materia-orb materia-${mat.type}`}
                        />
                        <span className="font-bold text-sm tracking-wide">
                          {mat.name}
                        </span>
                      </div>
                      <span className="text-xs text-[#94a3b8] font-share-tech">
                        {mat.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[#00d4e8] font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                  <Code className="w-5 h-5" /> Projects
                </h2>

                {[
                  {
                    title: "Shinra Dashboard",
                    desc: "Enterprise resource planning and mako reactor analytics dashboard.",
                  },
                  {
                    title: "Avalanche Network",
                    desc: "Secure communication P2P chat app for eco-resistance operatives.",
                  },
                  {
                    title: "Gold Saucer Arcade",
                    desc: "Collection of web-based mini-games with global leaderboards.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="remake-panel remake-cut-tl p-4 group"
                  >
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-glow-teal transition-all">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#94a3b8] mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 bg-[#00d4e8]/20 border border-[#00d4e8]/40 text-[#00d4e8] text-xs font-share-tech">
                          React
                        </span>
                        <span className="px-2 py-0.5 bg-[#00d4e8]/20 border border-[#00d4e8]/40 text-[#00d4e8] text-xs font-share-tech">
                          TS
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#00d4e8] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "about" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[#00d4e8] font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                  <User className="w-5 h-5" /> Profile
                </h2>

                <div className="remake-panel remake-cut-tl p-4 flex gap-4 items-start">
                  <div className="w-16 h-16 flex-none remake-panel flex items-center justify-center border border-[#00d4e8]/40">
                    <User className="w-8 h-8 text-[#00d4e8] opacity-60" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-white tracking-wide">
                      Kathleen Bongco
                    </div>
                    <div className="text-[#00d4e8] font-share-tech text-xs tracking-widest">
                      LV 99 · FULL STACK DEV
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 font-share-tech text-xs">
                      <span className="text-[#94a3b8]">EXP</span>
                      <span className="text-white">∞</span>
                      <span className="text-[#94a3b8]">GIL</span>
                      <span className="text-[#00d4e8]">99,999</span>
                      <span className="text-[#94a3b8]">LOC</span>
                      <span className="text-white">Midgar</span>
                    </div>
                  </div>
                </div>

                <div className="remake-panel p-4 space-y-3">
                  <p className="text-sm text-[#e0e6ed] leading-relaxed">
                    Ex-SOLDIER turned Full Stack Developer. I build scalable web
                    apps with obsessive attention to performance and craft —
                    reactive UIs to distributed backends.
                  </p>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    3+ years shipping production systems. Remote-first,
                    async-friendly. Available for new missions.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "YEARS", value: "3+" },
                    { label: "SHIPPED", value: "20+" },
                    { label: "RESPONSE", value: "<24h" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="remake-panel remake-cut-tl p-3 text-center"
                    >
                      <div className="font-bold text-lg text-white">
                        {item.value}
                      </div>
                      <div className="text-[#94a3b8] font-share-tech text-[10px] tracking-widest">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "sidequests" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="flex items-center gap-2 font-bold text-xl uppercase tracking-wider text-glow-magenta text-[#e040c0]">
                  <Star className="w-5 h-5" /> Sidequests
                </h2>
                <p className="font-share-tech text-xs text-[#94a3b8] tracking-widest">
                  OPTIONAL · HIGH REWARD
                </p>

                {[
                  {
                    title: "Open Source",
                    reward: "EXP +500",
                    desc: "PRs and bug fixes across the React and Node ecosystems.",
                    status: "COMPLETE",
                  },
                  {
                    title: "Tech Blog",
                    reward: "WISDOM +20",
                    desc: "Writing about TypeScript tricks, patterns, and codebase war stories.",
                    status: "IN PROGRESS",
                  },
                  {
                    title: "Materia Collector",
                    reward: "ALL MATERIA",
                    desc: "Grinding certs — AWS Cloud Practitioner up next.",
                    status: "IN PROGRESS",
                  },
                  {
                    title: "Community Mentor",
                    reward: "KARMA +999",
                    desc: "Helping junior devs level up on Discord and meetups.",
                    status: "ONGOING",
                  },
                ].map((sq) => (
                  <div
                    key={sq.title}
                    className="remake-panel p-4 flex gap-3 group border border-[#e040c0]/10 hover:border-[#e040c0]/40 transition-all remake-cut-tr"
                  >
                    <Star className="w-4 h-4 flex-none mt-0.5 text-[#e040c0] drop-shadow-[0_0_5px_rgba(224,64,192,0.8)]" />
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-sm text-white">
                          {sq.title}
                        </span>
                        <span
                          className={`font-share-tech text-[10px] px-1.5 py-0.5 flex-none ${sq.status === "COMPLETE" ? "bg-[#00d4e8]/20 text-[#00d4e8]" : sq.status === "ONGOING" ? "bg-[#e040c0]/20 text-[#e040c0]" : "bg-white/10 text-[#94a3b8]"}`}
                        >
                          {sq.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {sq.desc}
                      </p>
                      <div className="font-share-tech text-[10px] text-[#e040c0]">
                        {sq.reward}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[#00d4e8] font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Comm
                </h2>

                <div className="remake-panel remake-cut-both p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#00d4e8]/20 border border-[#00d4e8] flex items-center justify-center animate-pulse-glow">
                    <Zap className="w-8 h-8 text-[#00d4e8]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Save Point Reached
                    </h3>
                    <p className="text-sm text-[#94a3b8]">
                      Ready to initiate a new sequence? Open comms channel
                      below.
                    </p>
                  </div>
                  {/* TODO: Add real mailto action */}
                  <a
                    href="#email"
                    className="w-full py-3 bg-gradient-to-r from-[#0055aa] to-[#0088ff] text-white font-bold uppercase tracking-widest hover:brightness-125 transition-all remake-cut-tl flex items-center justify-center gap-2 mt-4"
                  >
                    <Mail className="w-4 h-4" /> Initialize
                  </a>
                </div>
              </div>
            )}
          </main>
        </div>

        {/* Sticky Bottom Tab Bar */}
        <div className="fixed bottom-0 left-0 w-full h-16 bg-[#050d12]/90 backdrop-blur-md border-t border-[#00d4e8]/30 flex overflow-x-auto z-50 scrollbar-none">
          {[
            { id: "status", icon: User, label: "STATUS" },
            { id: "about", icon: BookOpen, label: "PROFILE" },
            { id: "materia", icon: Hexagon, label: "MATERIA" },
            { id: "projects", icon: Code, label: "DATA" },
            { id: "sidequests", icon: Star, label: "QUESTS" },
            { id: "contact", icon: Mail, label: "COMM" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center gap-1 transition-all relative ${
                  isActive
                    ? "text-[#00d4e8] bg-[#00d4e8]/10"
                    : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00d4e8] shadow-[0_0_8px_#00d4e8]" />
                )}
                <Icon
                  className={`w-5 h-5 ${isActive ? "drop-shadow-[0_0_5px_rgba(0,212,232,0.8)]" : ""}`}
                />
                <span className="text-[10px] font-share-tech tracking-widest">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

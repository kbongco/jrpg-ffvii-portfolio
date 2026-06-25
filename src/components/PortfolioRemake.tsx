import { ChevronRight, ArrowRight, Disc, Hexagon, Circle, Shield, Zap, Terminal, Database, Code, Layout, Globe, Mail, Github, Twitter, User, Star } from 'lucide-react';
import HeroSection from './HeroSection';
import Profile from './Profile';
import Status from './Status';

export default function PortfolioRemake() {
  return (
    <div className="remake-theme min-h-screen font-share-tech selection:bg-[#00d4e8] selection:text-black overflow-x-hidden relative">
      {/* Background Image & Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#050d12]/80 z-10 backdrop-blur-sm" />
        <div className="absolute inset-0 z-10" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 232, 0.1) 0%, transparent 60%)',
          animation: 'pulse-glow 8s infinite alternate'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-24 flex flex-col gap-16">
        
<HeroSection/>

<Profile/>
<Status/>

        {/* BATTLE LOG / PROJECTS */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="font-rajdhani text-4xl font-bold tracking-widest text-[#00d4e8] text-glow-teal uppercase">Battle Log</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00d4e8]/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Shinra Dashboard" 
              desc="Enterprise resource planning and mako reactor analytics dashboard."
              tech={['React', 'TypeScript', 'Recharts']}
            />
            <ProjectCard 
              title="Avalanche Network" 
              desc="Secure communication P2P chat app for eco-resistance operatives."
              tech={['Node.js', 'WebSockets', 'Crypto']}
            />
            <ProjectCard 
              title="Gold Saucer Arcade" 
              desc="Collection of web-based mini-games with global leaderboards."
              tech={['Canvas API', 'Next.js', 'Redis']}
            />
          </div>
        </section>

        {/* SIDEQUESTS */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="font-rajdhani text-4xl font-bold tracking-widest text-[#e040c0] uppercase text-glow-magenta">Sidequests</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#e040c0]/50 to-transparent" />
            <span className="font-share-tech text-xs text-[#94a3b8] tracking-widest">OPTIONAL · HIGH REWARD</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Open Source Contributions', reward: 'EXP +500', desc: 'Bug fixes and feature PRs across community projects. Mostly in the React and Node ecosystems.', status: 'COMPLETE' },
              { title: 'Technical Blog', reward: 'WISDOM +20', desc: 'Writing about what I learn — TypeScript tricks, architecture patterns, and war stories from the codebase.', status: 'IN PROGRESS' },
              { title: 'Materia Collector', reward: 'ALL MATERIA', desc: 'Currently grinding certifications — AWS Cloud Practitioner queued up as the next acquisition.', status: 'IN PROGRESS' },
              { title: 'Community Mentor', reward: 'KARMA +999', desc: 'Helping junior devs level up on Discord and local meetups. Teaching is the best way to master a skill.', status: 'ONGOING' },
            ].map(sq => (
              <div key={sq.title} className="remake-panel p-5 flex gap-4 group hover:border-[#e040c0]/60 transition-all duration-300 remake-cut-tr">
                <div className="flex-none pt-1">
                  <Star className="w-5 h-5 text-[#e040c0] drop-shadow-[0_0_6px_rgba(224,64,192,0.8)]" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-rajdhani font-bold text-lg text-white tracking-wide group-hover:text-[#e040c0] transition-colors">{sq.title}</h3>
                    <span className={`font-share-tech text-xs px-2 py-0.5 flex-none ${sq.status === 'COMPLETE' ? 'bg-[#00d4e8]/20 text-[#00d4e8] border border-[#00d4e8]/30' : sq.status === 'ONGOING' ? 'bg-[#e040c0]/20 text-[#e040c0] border border-[#e040c0]/30' : 'bg-white/10 text-[#94a3b8] border border-white/10'}`}>
                      {sq.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{sq.desc}</p>
                  <div className="font-share-tech text-xs text-[#e040c0]">{sq.reward}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SAVE POINT / CONTACT */}
        <section className="py-16 flex flex-col items-center justify-center space-y-8 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-64 h-64 border border-[#00d4e8] rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          </div>
          
          <h2 className="font-rajdhani text-3xl md:text-5xl font-bold tracking-widest text-white text-center">
            DO YOU WANT TO SAVE YOUR PROGRESS?
          </h2>
          <p className="text-[#00d4e8] tracking-widest mb-4">Connect with me for future missions.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
            {/* TODO: Add real mailto/github links */}
            <a href="#email" className="flex-1 remake-panel remake-cut-both p-4 flex items-center justify-center gap-3 hover:bg-[#00d4e8]/10 hover:border-[#00d4e8] transition-all group">
              <Mail className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00d4e8] transition-colors" />
              <span className="font-rajdhani text-xl font-bold tracking-widest group-hover:text-glow-teal">EMAIL</span>
            </a>
            <a href="#github" className="flex-1 remake-panel remake-cut-both p-4 flex items-center justify-center gap-3 hover:bg-[#00d4e8]/10 hover:border-[#00d4e8] transition-all group">
              <Github className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00d4e8] transition-colors" />
              <span className="font-rajdhani text-xl font-bold tracking-widest group-hover:text-glow-teal">GITHUB</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tech }: { title: string, desc: string, tech: string[] }) {
  return (
    <div className="remake-panel remake-cut flex flex-col h-full group hover:border-[#00d4e8] hover:bg-black/40 transition-all duration-300">
      <div className="p-6 flex-1 flex flex-col gap-4">
        <h3 className="font-rajdhani text-2xl font-bold tracking-widest text-white group-hover:text-glow-teal flex items-center gap-2">
          <Disc className="w-5 h-5 text-[#00d4e8]" />
          {title}
        </h3>
        <p className="text-[#94a3b8] leading-relaxed text-sm flex-1">{desc}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map(t => (
            <span key={t} className="text-xs text-[#00d4e8] bg-[#00d4e8]/10 border border-[#00d4e8]/20 px-2 py-1 tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <div className="border-t border-[#00d4e8]/20 p-4 flex justify-end">
        <button className="flex items-center gap-2 font-rajdhani text-lg tracking-widest text-[#94a3b8] group-hover:text-[#00d4e8] transition-colors">
          VIEW MISSION
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

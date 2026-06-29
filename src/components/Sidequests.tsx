import { Star } from "lucide-react";
import { sideQuests } from "@/data/sidequests";

export default function Sidequests() {
  return (
            <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="font-rajdhani text-4xl font-bold tracking-widest text-[#e040c0] uppercase text-glow-magenta">Sidequests</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#e040c0]/50 to-transparent" />
            <span className="font-share-tech text-xs text-[#94a3b8] tracking-widest">OPTIONAL · HIGH REWARD</span>
          </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sideQuests.map((sq) => (
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
  )
}
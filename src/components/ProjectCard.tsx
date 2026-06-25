import { ArrowRight, Disc } from "lucide-react";

export default function ProjectCard({ title, desc, tech }: { title: string, desc: string, tech: string[] }) {
  return (
    <div className="remake-panel remake-cut flex flex-col h-full group hover:border-[#00d4e8] hover:bg-black/40 transition-all duration-300">
      <div className="p-6 flex-1 flex flex-col gap-4">
        <h3 className="font-rajdhani text-lg font-bold tracking-widest text-white group-hover:text-glow-teal flex items-center gap-2">
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
      

    </div>
  );
}
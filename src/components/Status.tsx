import StatRow from "./StatRow";
import MateriaSlot from "./MateriaSlot";
import { materia } from "@/data/sidequests";
import { useState } from "react";
import { stats } from "@/data/sidequests";

export default function Status() {

  const materiaFilter = ["magic", "command", "support"]
  const [filter, setFilter] = useState('magic')
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4 remake-panel p-6 remake-cut-tl space-y-8 animate-pulse-glow">
        <h2 className="font-rajdhani text-3xl font-bold tracking-widest border-b border-[#00d4e8]/20 pb-2 mb-6">
          STATUS
        </h2>

        <div className="space-y-6">
          {stats.map((stat) => (
            <StatRow label={stat.label} category={stat.category} value={stat.value}/>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#00d4e8]/20 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#e040c0] font-bold tracking-widest text-glow-magenta">
              LIMIT BREAK
            </span>
            <span className="text-white">Developer who can design too!</span>
          </div>
          <div className="remake-bar-container h-3 w-full skew-x-[-15deg]">
            <div className="remake-bar-fill-limit h-full w-[100%]" />
          </div>
        </div>
      </div>

      <div className="md:col-span-8 remake-panel p-6 remake-cut flex flex-col">
        <h2 className="font-rajdhani text-3xl font-bold tracking-widest border-b border-[#00d4e8]/20 pb-2 mb-6">
          MATERIA LOADOUT
        </h2>

        <div className="flex flex-wrap gap-2 mb-6 justify-end">
  {materiaFilter.map((t) => (
    <button
      key={t}
      onClick={() => setFilter(t)}
      className={`px-3 py-1 text-xs font-share-tech border transition
        ${filter === t
          ? "bg-[#00d4e8]/20 border-[#00d4e8] text-white"
          : "border-white/10 text-[#94a3b8]"
        }`}
    >
      {t.toUpperCase()}
    </button>
  ))}
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 content-start">
{materia
  .filter((m) => filter === "all" || m.type === filter)
  .map((mat) => (
    <MateriaSlot
      key={mat.name}
      type={mat.type}
      name={mat.name}
      level={mat.level}
      max={mat.max}
    />
  ))}
        </div>
      </div>
    </section>
  );
}

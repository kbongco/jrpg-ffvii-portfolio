import StatRow from "./StatRow";
import MateriaSlot from "./MateriaSlot";
import { materia, stats } from "@/data/sidequests";
import { useState } from "react";

export default function Status({ variant = "desktop" }) {
  const isMobile = variant === "mobile";

  const materiaFilter = ["magic", "command", "support"];
  const [filter, setFilter] = useState("magic");

  return (
    <section
      className={
        isMobile
          ? "flex flex-col gap-6"
          : "grid grid-cols-1 md:grid-cols-12 gap-8"
      }
    >
      {/* LEFT PANEL (STATUS) */}
      <div
        className={
          isMobile
            ? "remake-panel p-4 space-y-6"
            : "md:col-span-4 remake-panel p-6 remake-cut-tl space-y-8 animate-pulse-glow"
        }
      >
        <h2
          className={`font-rajdhani font-bold tracking-widest border-b border-[#00d4e8]/20 pb-2 mb-6 ${
            isMobile ? "text-xl" : "text-3xl"
          }`}
        >
          STATUS
        </h2>

        <div className="space-y-6">
          {stats.map((stat) => (
            <StatRow
              key={stat.label}
              label={stat.label}
              category={stat.category}
              value={stat.value}
            />
          ))}
        </div>

        {/* LIMIT BREAK */}
        {!isMobile && (
          <div className="mt-8 pt-6 border-t border-[#00d4e8]/20 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#e040c0] font-bold tracking-widest text-glow-magenta">
                LIMIT BREAK
              </span>
              <span className="text-white">
                Developer who can design too!
              </span>
            </div>
            <div className="remake-bar-container h-3 w-full skew-x-[-15deg]">
              <div className="remake-bar-fill-limit h-full w-[100%]" />
            </div>
          </div>
        )}

        {/* Mobile compact version */}
        {isMobile && (
          <div className="text-xs text-[#e040c0] pt-2 border-t border-[#00d4e8]/20">
            LIMIT: Developer who can design too!
          </div>
        )}
      </div>

      {/* RIGHT PANEL (MATERIA) */}
      <div
        className={
          isMobile
            ? "remake-panel p-4 flex flex-col"
            : "md:col-span-8 remake-panel p-6 remake-cut flex flex-col"
        }
      >
        <h2
          className={`font-rajdhani font-bold tracking-widest border-b border-[#00d4e8]/20 pb-2 mb-6 ${
            isMobile ? "text-xl" : "text-3xl"
          }`}
        >
          MATERIA LOADOUT
        </h2>

        {/* FILTER BUTTONS */}
        <div
          className={`flex flex-wrap gap-2 mb-6 ${
            isMobile ? "justify-start" : "justify-end"
          }`}
        >
          {materiaFilter.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1 text-xs font-share-tech border transition
                ${
                  filter === t
                    ? "bg-[#00d4e8]/20 border-[#00d4e8] text-white"
                    : "border-white/10 text-[#94a3b8]"
                }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* MATERIA GRID */}
        <div
          className={`grid gap-4 flex-1 content-start ${
            isMobile ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {materia
            .filter((m) => m.type === filter)
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
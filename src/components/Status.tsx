import StatRow from './StatRow';
import MateriaSlot from './MateriaSlot';

export default function Status() {
  return (
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 remake-panel p-6 remake-cut-tl space-y-8 animate-pulse-glow">
            <h2 className="font-rajdhani text-3xl font-bold tracking-widest border-b border-[#00d4e8]/20 pb-2 mb-6">STATUS</h2>
            
            <div className="space-y-6">
              <StatRow label="Strength" category="Frontend" value={92} />
              <StatRow label="Magic" category="TypeScript" value={88} />
              <StatRow label="Vitality" category="DevOps" value={75} />
              <StatRow label="Spirit" category="Design" value={95} />
              <StatRow label="Luck" category="Debugging" value={80} />
            </div>

            <div className="mt-8 pt-6 border-t border-[#00d4e8]/20 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#e040c0] font-bold tracking-widest text-glow-magenta">LIMIT BREAK</span>
                <span className="text-white">OMNISLASH</span>
              </div>
              <div className="remake-bar-container h-3 w-full skew-x-[-15deg]">
                <div className="remake-bar-fill-limit h-full w-[100%]" />
              </div>
            </div>
          </div>

          {/* MATERIA LOADOUT */}
          <div className="md:col-span-8 remake-panel p-6 remake-cut flex flex-col">
            <h2 className="font-rajdhani text-3xl font-bold tracking-widest border-b border-[#00d4e8]/20 pb-2 mb-6">MATERIA LOADOUT</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 content-start">
              <MateriaSlot type="magic" name="React.js" level={5} max={5} />
              <MateriaSlot type="magic" name="Next.js" level={4} max={5} />
              <MateriaSlot type="support" name="Tailwind CSS" level={5} max={5} />
              <MateriaSlot type="command" name="Node.js" level={4} max={5} />
              <MateriaSlot type="independent" name="PostgreSQL" level={3} max={5} />
              <MateriaSlot type="summon" name="Docker" level={3} max={5} />
              <MateriaSlot type="support" name="Framer Motion" level={4} max={5} />
              <MateriaSlot type="command" name="GraphQL" level={3} max={5} />
            </div>
          </div>
        </section>

  )
}
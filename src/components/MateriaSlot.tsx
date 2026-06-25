export default function MateriaSlot({ type, name, level, max }: { type: 'magic' | 'command' | 'support' | 'independent' | 'summon', name: string, level: number, max: number }) {
  return (
    <div className="flex items-center gap-4 bg-black/20 p-2 rounded-sm border border-white/5 hover:border-[#00d4e8]/30 transition-colors group cursor-default">
      <div className={`w-5 h-5 materia-orb materia-${type} flex-none shrink-0`} />
      <div className="flex-1 min-w-0">
        <div className="text-white font-bold tracking-wide truncate group-hover:text-glow-teal transition-all">{name}</div>
        <div className="flex gap-1 mt-1">
          {Array.from({ length: max }).map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 w-4 skew-x-[-15deg] ${i < level ? 'bg-[#00d4e8] shadow-[0_0_5px_#00d4e8]' : 'bg-black/50 border border-white/10'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

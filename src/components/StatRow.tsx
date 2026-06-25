export default function StatRow({ label, category, value }: { label: string, category: string, value: number }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
      <span className="text-[#00d4e8] font-bold tracking-widest">{label}</span>
      <div className="flex items-center gap-3">
        <span className="text-white w-24 truncate">{category}</span>
        <div className="flex-1 remake-bar-container h-1.5 skew-x-[-15deg]">
          <div className="bg-[#00d4e8] h-full shadow-[0_0_8px_#00d4e8]" style={{ width: `${value}%` }} />
        </div>
        <span className="text-[#94a3b8] w-8 text-right">{value}</span>
      </div>
    </div>
  );
}
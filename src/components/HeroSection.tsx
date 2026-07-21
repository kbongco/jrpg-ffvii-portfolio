export default function HeroSection({ variant = "desktop" }) {
  const isMobile = variant === "mobile";

  return (
    <section className="flex flex-col md:flex-row gap-8 items-end justify-between border-b border-[#00d4e8]/30 pb-8 relative">
      
      {!isMobile && (
        <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-[#00d4e8] to-transparent shadow-[0_0_10px_#00d4e8]" />
      )}

      {/* Name */}
      <div className="flex-1 space-y-2">
        <h1 className="font-rajdhani text-5xl md:text-8xl font-bold tracking-wider text-glow-teal text-[#f0f8ff] uppercase leading-none">
          Kathleen Bongco
        </h1>

        <p className="font-rajdhani text-xl md:text-3xl text-[#94a3b8] tracking-widest uppercase pl-1">
          Software Engineer
        </p>
      </div>

      {/* Stats */}
      {!isMobile && (
        <div className="flex-none w-full md:w-80 space-y-4 remake-panel p-4 remake-cut">
          {/* HP */}
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-[#00d4e8] font-bold tracking-widest">HP</span>
              <span className="text-white">9999 / 9999</span>
            </div>
            <div className="remake-bar-container h-2 w-full skew-x-[-15deg]">
              <div className="remake-bar-fill-hp h-full w-full" />
            </div>
          </div>

          {/* MP */}
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-[#0088ff] font-bold tracking-widest">MP</span>
              <span className="text-white">999 / 999</span>
            </div>
            <div className="remake-bar-container h-2 w-full skew-x-[-15deg]">
              <div className="remake-bar-fill-mp h-full w-[85%]" />
            </div>
          </div>
        </div>
      )}

      {/* Optional: mobile version of stats */}
      {isMobile && (
        <div className="w-full text-sm text-[#94a3b8] flex justify-between">
          <span>HP: 9999</span>
          <span>MP: 999</span>
        </div>
      )}
    </section>
  );
}
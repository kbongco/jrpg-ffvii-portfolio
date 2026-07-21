type Tab = {
  activeTab: string
  tabNames: string[];
  setActiveTab: (id: string) => void;
}

export default function Tabs({activeTab, setActiveTab, tabNames }: Tab) {
          <div className="fixed bottom-0 left-0 w-full h-16 bg-[#050d12]/90 backdrop-blur-md border-t border-[#00d4e8]/30 flex overflow-x-auto z-50 scrollbar-none">
            {tabNames.map((tab) => {
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
              )
          })}
        </div>
}
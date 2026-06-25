import { User } from "lucide-react";

export default function Profile() {
  return (
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-3 flex flex-col items-center gap-4">
            <div className="w-28 h-28 rounded-sm remake-panel flex items-center justify-center relative overflow-hidden border border-[#00d4e8]/40">
              <User className="w-16 h-16 text-[#00d4e8] opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050d12]/60" />
            </div>
            <div className="text-center space-y-1">
              <div className="font-rajdhani text-sm tracking-widest text-[#94a3b8] uppercase">CLASS</div>
              <div className="font-rajdhani text-lg font-bold text-[#00d4e8]">Full Stack Dev</div>
            </div>
            <div className="w-full remake-panel p-3 space-y-2 text-xs font-share-tech">
              <div className="flex justify-between"><span className="text-[#94a3b8]">LEVEL</span><span className="text-white">99</span></div>
              <div className="flex justify-between"><span className="text-[#94a3b8]">EXP</span><span className="text-white">∞</span></div>
              <div className="flex justify-between"><span className="text-[#94a3b8]">GIL</span><span className="text-[#00d4e8]">99,999</span></div>
              <div className="flex justify-between"><span className="text-[#94a3b8]">LOCATION</span><span className="text-white">New York City Metro</span></div>
            </div>
          </div>

          <div className="md:col-span-9 remake-panel remake-cut p-6 space-y-5">
            <div className="flex items-center gap-4">
              <h2 className="font-rajdhani text-3xl font-bold tracking-widest text-[#00d4e8] text-glow-teal uppercase">About</h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00d4e8]/40 to-transparent" />
            </div>

            <p className="text-[#e0e6ed] leading-loose text-sm md:text-base">
          Former Food Scientist turned Software Engineer, operating out of the New York City Metro area. I build scalable web applications with attention to performance and detail. I can work the front end and the back end of the stack, and I never stop leveling up. 
            </p>
            <p className="text-[#94a3b8] leading-loose text-sm">
          3 years working as a software engineer. Most of my experience is in Typescript, React, Python, Node.js and PostGreSQL. I'm available for work based out of the New York City metro area as well as remote roles

            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                { label: 'Experience', value: '3+ Years' },
                { label: 'Projects Shipped', value: '20+' },
                { label: 'Response Time', value: '< 24hrs' },
              ].map(item => (
                <div key={item.label} className="bg-black/30 border border-[#00d4e8]/10 p-3 remake-cut-tl">
                  <div className="text-[#94a3b8] text-xs font-share-tech tracking-widest mb-1">{item.label.toUpperCase()}</div>
                  <div className="font-rajdhani font-bold text-lg text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
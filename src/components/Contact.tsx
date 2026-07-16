import { Github, Mail } from "lucide-react";

export default function Contact() {
  return (
            <section className="py-16 flex flex-col items-center justify-center space-y-8 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div
              className="w-64 h-64 border border-[#00d4e8] rounded-full animate-ping"
              style={{ animationDuration: "3s" }}
            />
          </div>

          <h2 className="font-rajdhani text-2xl md:text-4xl font-bold tracking-widest text-white text-center uppercase">
           Like what you see and want to learn more?
          </h2>
          <p className="text-[#00d4e8] tracking-widest mb-4">
            Connect with me for future missions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">

            <a
              href="https://www.linkedin.com/in/kathleen-bongco-11843197"
              className="flex-1 remake-panel remake-cut-both p-4 flex items-center justify-center gap-3 hover:bg-[#00d4e8]/10 hover:border-[#00d4e8] transition-all group"
            >
              <Mail className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00d4e8] transition-colors" />
              <span className="font-rajdhani text-xl font-bold tracking-widest group-hover:text-glow-teal uppercase">
                LinkedIn
              </span>
            </a>
            <a
              href="github.com/kbongco"
              className="flex-1 remake-panel remake-cut-both p-4 flex items-center justify-center gap-3 hover:bg-[#00d4e8]/10 hover:border-[#00d4e8] transition-all group"
            >
              <Github className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00d4e8] transition-colors" />
              <span className="font-rajdhani text-xl font-bold tracking-widest group-hover:text-glow-teal uppercase">
               Github
              </span>
            </a>
          </div>
        </section>
  )
}
"use client";
import { useEffect, useState } from "react";

const roles = ["Flutter Developer", "Mobile App Builder", "Dart Enthusiast", "Cross-Platform Dev"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden grid-bg scanline">
      {/* Corner decorations - hidden on very small screens */}
      <div className="hidden sm:block absolute top-20 left-4 sm:left-6 w-10 sm:w-16 h-10 sm:h-16 border-l-2 border-t-2 border-[#00ff88]/60" />
      <div className="hidden sm:block absolute top-20 right-4 sm:right-6 w-10 sm:w-16 h-10 sm:h-16 border-r-2 border-t-2 border-[#00ff88]/60" />
      <div className="hidden sm:block absolute bottom-6 left-4 sm:left-6 w-10 sm:w-16 h-10 sm:h-16 border-l-2 border-b-2 border-[#00ff88]/60" />
      <div className="hidden sm:block absolute bottom-6 right-4 sm:right-6 w-10 sm:w-16 h-10 sm:h-16 border-r-2 border-b-2 border-[#00ff88]/60" />

      <div className="absolute top-1/3 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-[#00ff88]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-[#00e5ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <p className="font-mono text-[#00ff88] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 animate-flicker">
          &gt;&gt; PLAYER_ONE CONNECTED
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 tracking-tight leading-none">
          <span className="text-white">KIRAN</span>{" "}
          <span className="neon-text-green">SHAJI</span>{" "}
          <span className="text-white">P P</span>
        </h1>

        <div className="h-10 flex items-center justify-center gap-2 mb-8 sm:mb-10">
          <span className="text-[#00e5ff] font-mono text-base sm:text-xl" style={{ textShadow: "0 0 8px #00e5ff" }}>
            {displayed}
          </span>
          <span className="w-0.5 h-5 sm:h-6 bg-[#00ff88] animate-pulse" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 font-mono font-bold tracking-widest uppercase text-xs sm:text-sm border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-200"
            style={{ boxShadow: "0 0 12px #00ff8866" }}
          >
            [ VIEW WORK ]
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 font-mono font-bold tracking-widest uppercase text-xs sm:text-sm border-2 border-[#00e5ff]/50 text-[#00e5ff]/70 hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all duration-200"
          >
            [ CONTACT ]
          </a>
          <a
            href="/Kiran_Shaji_CV.docx"
            download
            className="px-6 sm:px-8 py-3 font-mono font-bold tracking-widest uppercase text-xs sm:text-sm border-2 border-[#bf00ff]/50 text-[#bf00ff]/70 hover:border-[#bf00ff] hover:text-[#bf00ff] transition-all duration-200"
          >
            [ DOWNLOAD CV ]
          </a>
        </div>

        <p className="mt-10 sm:mt-12 font-mono text-xs text-gray-600 tracking-widest">
          ▼ SCROLL TO EXPLORE ▼
        </p>
      </div>
    </section>
  );
}

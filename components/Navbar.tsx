"use client";
import { useState, useEffect } from "react";

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050510]/90 backdrop-blur border-b border-[#00ff88]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-black tracking-widest neon-text-green animate-pulse-neon font-mono">
          &lt;KS /&gt;
        </span>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-mono text-sm tracking-widest text-gray-400 hover:neon-text-green transition-all duration-200 uppercase hover:text-[#00ff88]"
                style={{ textShadow: "none" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.textShadow =
                    "0 0 8px #00ff88, 0 0 20px #00ff88aa")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.textShadow = "none")
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

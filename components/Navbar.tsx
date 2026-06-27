"use client";
import { useState, useEffect } from "react";

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <span className="text-lg sm:text-xl font-black tracking-widest neon-text-green animate-pulse-neon font-mono">
          &lt;KS /&gt;
        </span>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-mono text-sm tracking-widest text-gray-400 transition-all duration-200 uppercase hover:text-[#00ff88]"
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#00ff88] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#00ff88] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#00ff88] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#050510]/95 backdrop-blur border-t border-[#00ff88]/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-mono text-sm tracking-widest text-gray-400 uppercase hover:text-[#00ff88] transition block"
                  onClick={() => setMenuOpen(false)}
                >
                  &gt; {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

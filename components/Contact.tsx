"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#07071a] relative">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00ff88]/50" />
          <h2 className="text-3xl font-black font-mono tracking-widest neon-text-green">
            // CONTACT
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00ff88]/50" />
        </div>
        <p className="text-center font-mono text-gray-500 text-sm tracking-widest mb-12">
          &gt; SEND_MESSAGE / INIT_COLLAB
        </p>

        {sent ? (
          <div className="text-center py-16 border border-[#00ff88]/30 bg-[#00ff88]/5">
            <div className="text-5xl mb-4">🎮</div>
            <p
              className="text-xl font-black font-mono tracking-widest"
              style={{ color: "#00ff88", textShadow: "0 0 12px #00ff88" }}
            >
              MESSAGE DELIVERED
            </p>
            <p className="text-gray-500 font-mono text-sm mt-2 tracking-widest">
              &gt; AWAITING RESPONSE...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {(["name", "email"] as const).map((field) => (
              <div key={field} className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-[#00ff88]/60">
                  &gt;
                </span>
                <input
                  type={field === "email" ? "email" : "text"}
                  placeholder={field.toUpperCase()}
                  required
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full pl-8 pr-5 py-4 bg-[#050510] border border-[#00ff88]/20 text-white font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-[#00ff88] transition tracking-widest"
                  style={{ caretColor: "#00ff88" }}
                />
              </div>
            ))}
            <div className="relative">
              <span className="absolute left-4 top-5 font-mono text-xs text-[#00ff88]/60">&gt;</span>
              <textarea
                rows={5}
                placeholder="YOUR_MESSAGE..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full pl-8 pr-5 py-4 bg-[#050510] border border-[#00ff88]/20 text-white font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-[#00ff88] transition resize-none tracking-widest"
                style={{ caretColor: "#00ff88" }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-black font-mono tracking-widest text-sm uppercase border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-200"
              style={{ boxShadow: "0 0 16px #00ff8844" }}
            >
              [ TRANSMIT_MESSAGE ]
            </button>
          </form>
        )}

        <div className="mt-12 flex justify-center gap-8 font-mono text-xs text-gray-600 tracking-widest">
          <a
            href="mailto:kiranshaji763@gmail.com"
            className="hover:text-[#00ff88] transition"
            style={{ textShadow: "none" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.textShadow = "0 0 8px #00ff88")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.textShadow = "none")
            }
          >
            EMAIL
          </a>
          <a
            href="https://github.com/kiranshaji763"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff88] transition"
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.textShadow = "0 0 8px #00ff88")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.textShadow = "none")
            }
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/kiran-shaji-590936272/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff88] transition"
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.textShadow = "0 0 8px #00ff88")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.textShadow = "none")
            }
          >
            LINKEDIN
          </a>
        </div>

        <p className="text-center font-mono text-xs text-gray-700 tracking-widest mt-8">
          © 2026 KIRAN_SHAJI_PP // ALL RIGHTS RESERVED
        </p>
      </div>
    </section>
  );
}

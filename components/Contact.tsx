"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AnimateIn from "@/components/AnimateIn";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.send(
        "service_8u5z7tl",
        "template_fv2iekk",
        { from_name: form.name, from_email: form.email, message: form.message },
        "A0CxNbRoJyTAfEUev"
      );
      setSent(true);
    } catch {
      setError("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#07071a] relative">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00ff88]/50" />
          <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-widest neon-text-green">
            // CONTACT
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00ff88]/50" />
        </div>
        <p className="text-center font-mono text-gray-500 text-xs sm:text-sm tracking-widest mb-10 sm:mb-12">
          &gt; SEND_MESSAGE / INIT_COLLAB
        </p>

        <AnimateIn direction="up">
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
                  className="w-full pl-8 pr-5 py-3 sm:py-4 bg-[#050510] border border-[#00ff88]/20 text-white font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-[#00ff88] transition tracking-widest"
                  style={{ caretColor: "#00ff88" }}
                />
              </div>
            ))}
            <div className="relative">
              <span className="absolute left-4 top-4 font-mono text-xs text-[#00ff88]/60">&gt;</span>
              <textarea
                rows={5}
                placeholder="YOUR_MESSAGE..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full pl-8 pr-5 py-3 sm:py-4 bg-[#050510] border border-[#00ff88]/20 text-white font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-[#00ff88] transition resize-none tracking-widest"
                style={{ caretColor: "#00ff88" }}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 sm:py-4 font-black font-mono tracking-widest text-xs sm:text-sm uppercase border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ boxShadow: "0 0 16px #00ff8844" }}
            >
              {sending ? "[ TRANSMITTING... ]" : "[ TRANSMIT_MESSAGE ]"}
            </button>
            {error && <p className="text-red-400 font-mono text-xs text-center">{error}</p>}
          </form>
        )}

        </AnimateIn>
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
          <a
            href="mailto:kiranshaji763@gmail.com"
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-[#00ff88] transition group"
          >
            <MdEmail className="text-3xl sm:text-4xl group-hover:drop-shadow-[0_0_8px_#00ff88]" />
            <span className="font-mono text-xs tracking-widest">EMAIL</span>
          </a>
          <a
            href="https://github.com/kiranshaji763"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-[#00ff88] transition group"
          >
            <FaGithub className="text-3xl sm:text-4xl group-hover:drop-shadow-[0_0_8px_#00ff88]" />
            <span className="font-mono text-xs tracking-widest">GITHUB</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kiran-shaji-590936272/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-[#00ff88] transition group"
          >
            <FaLinkedin className="text-3xl sm:text-4xl group-hover:drop-shadow-[0_0_8px_#00ff88]" />
            <span className="font-mono text-xs tracking-widest">LINKEDIN</span>
          </a>
          <a
            href="https://wa.me/919633995810"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-[#00ff88] transition group"
          >
            <FaWhatsapp className="text-3xl sm:text-4xl group-hover:drop-shadow-[0_0_8px_#00ff88]" />
            <span className="font-mono text-xs tracking-widest">WHATSAPP</span>
          </a>
          <a
            href="https://www.instagram.com/dark__apocalypse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-[#00ff88] transition group"
          >
            <FaInstagram className="text-3xl sm:text-4xl group-hover:drop-shadow-[0_0_8px_#00ff88]" />
            <span className="font-mono text-xs tracking-widest">INSTAGRAM</span>
          </a>
        </div>

        <p className="text-center font-mono text-xs text-gray-700 tracking-widest mt-6 sm:mt-8">
          © 2026 KIRAN_SHAJI_PP // ALL RIGHTS RESERVED
        </p>
      </div>
    </section>
  );
}

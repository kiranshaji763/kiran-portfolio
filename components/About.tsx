export default function About() {
  const stats = [
    { label: "LEVEL", value: "99" },
    { label: "XP", value: "∞" },
    { label: "PROJECTS", value: "10+" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative grid-bg">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00ff88]/50" />
          <h2 className="text-3xl font-black font-mono tracking-widest neon-text-green">
            // ABOUT_ME
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00ff88]/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div
                className="w-48 h-48 border-2 border-[#00ff88] flex items-center justify-center text-6xl bg-[#050510]"
                style={{ boxShadow: "0 0 30px #00ff8844, inset 0 0 30px #00ff8811" }}
              >
                👾
              </div>
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[#00e5ff]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-[#00e5ff]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-[#00e5ff]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[#00e5ff]" />
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-[#00ff88]/30 p-3 text-center bg-[#00ff88]/5"
                >
                  <div className="text-2xl font-black neon-text-green font-mono">{s.value}</div>
                  <div className="text-xs font-mono text-gray-500 tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 font-mono">
            <p className="text-gray-300 leading-relaxed">
              <span className="text-[#00ff88]">&gt;</span> I&apos;m{" "}
              <span className="text-[#00e5ff]" style={{ textShadow: "0 0 8px #00e5ff" }}>
                Kiran Shaji P P
              </span>
              , a Flutter developer with a Master&apos;s in Computer Science from Teesside University,
              Middlesbrough. I specialise in building high-performance, visually polished cross-platform
              mobile applications for Android and iOS using Flutter and Dart.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-[#00ff88]">&gt;</span> With a strong academic foundation and
              hands-on development experience, I bring both technical depth and an eye for detail
              to every project. I&apos;m passionate about clean architecture, smooth animations,
              and delivering exceptional user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-[#00ff88]">&gt;</span> I&apos;m currently open to Flutter
              developer roles and freelance opportunities where I can build impactful mobile
              products and grow alongside a driven team.
            </p>

            <div className="mt-4 space-y-3">
              <p className="text-[#00ff88] text-xs tracking-widest">// EDUCATION</p>
              <div className="border border-[#00ff88]/20 bg-[#00ff88]/5 p-3 flex justify-between items-start">
                <div>
                  <p className="text-white text-sm font-bold">MSc Computer Science</p>
                  <p className="text-[#00e5ff] text-xs mt-0.5">Teesside University, Middlesbrough</p>
                </div>
                <span className="text-[#00ff88] text-xs font-bold">2026</span>
              </div>
              <div className="border border-[#00ff88]/20 bg-[#00ff88]/5 p-3 flex justify-between items-start">
                <div>
                  <p className="text-white text-sm font-bold">BSc Computer Science</p>
                  <p className="text-[#00e5ff] text-xs mt-0.5">LeMent College, Calicut University</p>
                </div>
                <span className="text-[#00ff88] text-xs font-bold">2024</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-4 text-sm text-[#00ff88] border border-[#00ff88]/40 px-4 py-2 hover:bg-[#00ff88]/10 transition tracking-widest uppercase"
            >
              &gt; INIT_CONTACT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

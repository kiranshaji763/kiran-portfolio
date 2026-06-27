"use client";

const projects = [
  {
    id: "01",
    title: "Project One",
    description:
      "A full-stack web application built with modern technologies. Replace this with your real project description.",
    tags: ["React", "Node.js", "MongoDB"],
    status: "COMPLETED",
    color: "#00ff88",
  },
  {
    id: "02",
    title: "Project Two",
    description:
      "An innovative solution that solves real-world problems. Replace this with your real project description.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    status: "COMPLETED",
    color: "#00e5ff",
  },
  {
    id: "03",
    title: "Project Three",
    description:
      "A creative project showcasing design and engineering skills. Replace this with your real project description.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    status: "IN_PROGRESS",
    color: "#bf00ff",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#07071a] relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10 sm:mb-12 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00ff88]/50" />
          <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-widest neon-text-green">
            // PROJECTS
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00ff88]/50" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="relative border border-[#00ff88]/20 bg-[#050510] p-5 sm:p-6 group hover:border-[#00ff88]/60 transition-all duration-300"
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${p.color}22`)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = "none")
              }
            >
              <div
                className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: p.color }}
              />

              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs tracking-widest" style={{ color: p.color }}>
                  PROJECT_{p.id}
                </span>
                <span
                  className="font-mono text-xs px-2 py-0.5 border"
                  style={{
                    color: p.status === "COMPLETED" ? "#00ff88" : "#bf00ff",
                    borderColor: p.status === "COMPLETED" ? "#00ff8840" : "#bf00ff40",
                    background: p.status === "COMPLETED" ? "#00ff8810" : "#bf00ff10",
                  }}
                >
                  {p.status}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-black mb-3 text-white group-hover:text-[#00ff88] transition-colors font-mono tracking-wide">
                {p.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-5 leading-relaxed font-mono">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono border border-[#00ff88]/20 text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import AnimateIn from "@/components/AnimateIn";

const skillGroups = [
  {
    category: "FLUTTER & DART",
    icon: "⚔️",
    color: "#00ff88",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 90 },
      { name: "State Management", level: 85 },
      { name: "Custom Widgets", level: 90 },
      { name: "Animations", level: 80 },
    ],
  },
  {
    category: "MOBILE & BACKEND",
    icon: "🛡️",
    color: "#00e5ff",
    skills: [
      { name: "Firebase", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "Android", level: 80 },
      { name: "iOS", level: 75 },
      { name: "Supabase", level: 70 },
    ],
  },
  {
    category: "TOOLS",
    icon: "🔧",
    color: "#bf00ff",
    skills: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 80 },
      { name: "Play Store", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative grid-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10 sm:mb-12 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00ff88]/50" />
          <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-widest neon-text-green">
            // SKILL_TREE
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00ff88]/50" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group, i) => (
            <AnimateIn key={group.category} direction="up" delay={i * 0.15}>
            <div
              key={group.category}
              className="border border-[#00ff88]/20 bg-[#050510] p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <span className="text-xl sm:text-2xl">{group.icon}</span>
                <h3
                  className="font-black font-mono tracking-widest text-xs sm:text-sm"
                  style={{ color: group.color, textShadow: `0 0 8px ${group.color}88` }}
                >
                  {group.category}
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs text-gray-300">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: group.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#0f0f2a] border border-[#ffffff08] overflow-hidden">
                      <div
                        className="h-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${group.color}88, ${group.color})`,
                          boxShadow: `0 0 8px ${group.color}66`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

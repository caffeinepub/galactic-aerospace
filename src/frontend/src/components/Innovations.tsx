import { Home, Orbit, Radio, Zap } from "lucide-react";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

const innovations = [
  {
    icon: Zap,
    title: "Advanced Propulsion Systems",
    description:
      "Revolutionary ion drive and plasma propulsion technologies enabling faster, more efficient deep space travel.",
    detail:
      "Our proprietary magnetohydrodynamic engines achieve specific impulse values 10x greater than conventional chemical rockets, enabling missions to the outer solar system within months.",
    color: "#00f5ff",
    gradient: "from-cyan-500/20 to-blue-600/10",
  },
  {
    icon: Orbit,
    title: "Orbital Transport Technology",
    description:
      "Reusable orbital transfer vehicles and space tugs for efficient cargo and crew transport between orbital stations.",
    detail:
      "Our autonomous orbital transfer vehicles can rendezvous and dock with any spacecraft in LEO, MEO, or GEO, providing flexible logistics for the growing space economy.",
    color: "#c084fc",
    gradient: "from-purple-500/20 to-violet-600/10",
  },
  {
    icon: Home,
    title: "Space Habitat Design",
    description:
      "Next-generation modular space habitats with artificial gravity, radiation shielding, and closed-loop life support.",
    detail:
      "Our inflatable habitat modules provide 500m³ of pressurized living space with 99.97% air recycling efficiency, designed for permanent human occupation beyond Earth orbit.",
    color: "#34d399",
    gradient: "from-emerald-500/20 to-teal-600/10",
  },
  {
    icon: Radio,
    title: "Deep Space Communication",
    description:
      "Quantum-entanglement-assisted communication arrays enabling real-time data transmission across the solar system.",
    detail:
      "Our phased-array laser communication systems achieve 100 Gbps data rates at distances up to 5 AU, with quantum key distribution for secure military and scientific communications.",
    color: "#fb923c",
    gradient: "from-orange-500/20 to-amber-600/10",
  },
];

export default function Innovations() {
  const { ref: sectionRef, isVisible } = useScrollTrigger(0.05);

  return (
    <section
      id="innovations"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative z-10 py-24 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 scroll-reveal ${isVisible ? "visible" : ""}`}
        >
          <span className="text-space-cyan text-xs font-semibold tracking-widest uppercase font-exo mb-3 block">
            What We Build
          </span>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            Our <span className="text-space-cyan">Innovations</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full section-glow-divider" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto font-exo">
            Pushing the boundaries of what's possible in aerospace engineering
            and space exploration technology.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`innovation-card glass-card rounded-2xl p-6 group scroll-reveal ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `radial-gradient(circle, ${item.color}25 0%, ${item.color}08 100%)`,
                    border: `1px solid ${item.color}30`,
                    boxShadow: `0 0 20px ${item.color}15`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: item.color }} />
                </div>

                {/* Title */}
                <h3
                  className="font-orbitron font-bold text-base text-white mb-3 group-hover:transition-colors duration-300"
                  style={{ transition: "color 0.3s" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm font-exo leading-relaxed mb-4 group-hover:text-white/80 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Reveal detail on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  <div
                    className="pt-4 border-t text-xs font-exo leading-relaxed"
                    style={{
                      borderColor: `${item.color}25`,
                      color: `${item.color}cc`,
                    }}
                  >
                    {item.detail}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

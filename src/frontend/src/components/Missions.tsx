import {
  FlaskConical,
  Globe,
  Rocket,
  Satellite,
  Star,
  Zap,
} from "lucide-react";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

const milestones = [
  {
    year: "2026",
    quarter: "Q2",
    title: "Advanced Rocket Development Program",
    description:
      "Galactic Aerospace is engineering cost-effective, reusable medium-lift launch vehicles designed to carry satellites, research payloads, and defense equipment into low Earth orbit — with an unwavering focus on safety, efficiency, and continuous performance advancement.",
    status: "In Progress",
    icon: Rocket,
    color: "#00f5ff",
  },
  {
    year: "2027",
    quarter: "Q1",
    title: "Tactical Aerospace Drone Systems",
    description:
      "We are developing high-altitude, long-endurance (HALE) unmanned aerial systems for defense and strategic surveillance. Built with lightweight aerospace materials, these drones deliver long-range operational capability, real-time data transmission, and advanced autonomous navigation.",
    status: "Planned",
    icon: Zap,
    color: "#c084fc",
  },
  {
    year: "2027",
    quarter: "Q4",
    title: "Small Satellite Launch Mission",
    description:
      "As demand for communication and Earth observation satellites accelerates, Galactic Aerospace is developing compact, dedicated launch systems tailored to serve both commercial and government clients with precision and reliability.",
    status: "Planned",
    icon: Satellite,
    color: "#fb923c",
  },
  {
    year: "2028",
    quarter: "Q3",
    title: "Reusable Rocket Booster Project",
    description:
      "To dramatically reduce mission costs and increase launch frequency, we are engineering rocket boosters capable of autonomous recovery and reuse — a pivotal step toward making space access more affordable and sustainable for all.",
    status: "Planned",
    icon: Globe,
    color: "#34d399",
  },
  {
    year: "2030",
    quarter: "Q2",
    title: "Earth Observation & Surveillance Systems",
    description:
      "Galactic Aerospace will design and deploy advanced observation satellites supporting environmental monitoring, disaster response, precision mapping, and national security — delivering reliable, real-time intelligence from orbit.",
    status: "Concept",
    icon: Star,
    color: "#f472b6",
  },
  {
    year: "2031",
    quarter: "Q1",
    title: "Aerospace Research & Testing Center",
    description:
      "We are establishing a world-class research and development facility housing cutting-edge labs for propulsion systems, aerodynamics research, UAV testing, and materials engineering — the innovation engine powering every Galactic Aerospace breakthrough.",
    status: "Concept",
    icon: FlaskConical,
    color: "#fbbf24",
  },
];

const statusColors: Record<string, string> = {
  "In Progress": "#00f5ff",
  Planned: "#c084fc",
  Concept: "#fb923c",
};

export default function Missions() {
  const { ref: sectionRef, isVisible } = useScrollTrigger(0.05);

  return (
    <section
      id="missions"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative z-10 py-24 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 scroll-reveal ${isVisible ? "visible" : ""}`}
        >
          <span className="text-space-cyan text-xs font-semibold tracking-widest uppercase font-exo mb-3 block">
            The Roadmap
          </span>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            Future <span className="text-space-cyan">Missions</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full section-glow-divider" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto font-exo">
            Our ambitious roadmap for the next decade of space exploration and
            aerospace innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block timeline-line" />
          {/* Mobile left line */}
          <div className="absolute left-6 top-0 bottom-0 w-px md:hidden timeline-line" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={milestone.title}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } scroll-reveal ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  {/* Desktop: Content card */}
                  <div
                    className={`hidden md:block w-[calc(50%-2.5rem)] ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}
                  >
                    <div className="glass-card rounded-2xl p-6 group hover:shadow-cyan-sm transition-all duration-300">
                      <div
                        className={`flex items-center gap-2 mb-3 ${isLeft ? "justify-end" : "justify-start"}`}
                      >
                        <span
                          className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                          style={{
                            background: `${statusColors[milestone.status]}15`,
                            color: statusColors[milestone.status],
                            border: `1px solid ${statusColors[milestone.status]}30`,
                          }}
                        >
                          {milestone.status}
                        </span>
                      </div>
                      <div
                        className={`font-orbitron font-bold text-2xl mb-1 ${isLeft ? "text-right" : "text-left"}`}
                        style={{ color: milestone.color }}
                      >
                        {milestone.year}{" "}
                        <span className="text-base text-white/50">
                          {milestone.quarter}
                        </span>
                      </div>
                      <h3
                        className={`font-orbitron font-bold text-lg text-white mb-3 ${isLeft ? "text-right" : "text-left"}`}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className={`text-white/60 text-sm font-exo leading-relaxed ${isLeft ? "text-right" : "text-left"}`}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10"
                    style={{
                      background: `radial-gradient(circle, ${milestone.color}50 0%, ${milestone.color}20 100%)`,
                      border: `2px solid ${milestone.color}90`,
                      boxShadow: `0 0 20px ${milestone.color}80, 0 0 40px ${milestone.color}50, 0 0 60px ${milestone.color}20`,
                      animation: "pulseGlow 2s ease-in-out infinite",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: milestone.color }}
                    />
                  </div>

                  {/* Desktop: Empty space on other side */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />

                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-4 pl-14 w-full">
                    {/* Mobile dot */}
                    <div
                      className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center z-10"
                      style={{
                        background: `radial-gradient(circle, ${milestone.color}50 0%, ${milestone.color}20 100%)`,
                        border: `2px solid ${milestone.color}90`,
                        boxShadow: `0 0 20px ${milestone.color}80, 0 0 40px ${milestone.color}40`,
                        animation: "pulseGlow 2s ease-in-out infinite",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: milestone.color }}
                      />
                    </div>

                    <div className="glass-card rounded-2xl p-5 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                          style={{
                            background: `${statusColors[milestone.status]}15`,
                            color: statusColors[milestone.status],
                            border: `1px solid ${statusColors[milestone.status]}30`,
                          }}
                        >
                          {milestone.status}
                        </span>
                      </div>
                      <div
                        className="font-orbitron font-bold text-xl mb-1"
                        style={{ color: milestone.color }}
                      >
                        {milestone.year}{" "}
                        <span className="text-sm text-white/50">
                          {milestone.quarter}
                        </span>
                      </div>
                      <h3 className="font-orbitron font-bold text-base text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white/60 text-sm font-exo leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

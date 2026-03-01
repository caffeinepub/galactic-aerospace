import { Atom, Eye, Target } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

function StatCard({
  value,
  suffix,
  label,
  triggered,
}: { value: number; suffix: string; label: string; triggered: boolean }) {
  const count = useCountUp(value, 2200, triggered);
  return (
    <div className="glass-card rounded-2xl p-6 text-center group hover:shadow-cyan-sm transition-all duration-300">
      <div className="font-orbitron font-black text-4xl sm:text-5xl text-space-cyan mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white/60 text-sm tracking-widest uppercase font-exo">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollTrigger(0.1);

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative z-10 py-24 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 scroll-reveal ${isVisible ? "visible" : ""}`}
        >
          <span className="text-space-cyan text-xs font-semibold tracking-widest uppercase font-exo mb-3 block">
            Who We Are
          </span>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            About <span className="text-space-cyan">Galactic Aerospace</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full section-glow-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Mission */}
          <div
            className={`scroll-reveal-left ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-space-cyan/15 flex items-center justify-center">
                  <Target className="w-5 h-5 text-space-cyan" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed font-exo text-base mb-5">
                Our mission is to design, develop, and deliver next-generation
                aerospace solutions that power the new era of space exploration.
              </p>
              <p className="text-white/80 font-exo text-sm mb-3">
                We are committed to:
              </p>
              <ul className="space-y-2 text-white/70 font-exo text-sm">
                <li>
                  🚀 Developing advanced propulsion and spacecraft systems
                </li>
                <li>
                  🛰 Creating sustainable orbital and deep-space transport
                  technologies
                </li>
                <li>
                  🔬 Investing in research and breakthrough aerospace innovation
                </li>
                <li>
                  🌍 Promoting responsible and sustainable space exploration
                </li>
                <li>
                  🤝 Collaborating with global partners to accelerate cosmic
                  discovery
                </li>
              </ul>
              <p className="text-white/60 font-exo text-sm mt-4 italic">
                At Galactic Aerospace, innovation is not just our strategy — it
                is our responsibility to the future of humanity.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`scroll-reveal-right ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-space-purple/30 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-300" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed font-exo text-base mb-4">
                At Galactic Aerospace, our vision is to redefine humanity's
                future beyond Earth.
              </p>
              <p className="text-white/70 leading-relaxed font-exo text-base">
                We aspire to become a global leader in advanced aerospace
                innovation, pioneering technologies that make space exploration
                safer, sustainable, and accessible for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div
          className={`mb-20 scroll-reveal ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Atom className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-white">
                Research & Innovation
              </h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Advanced R&D",
                  desc: "Cutting-edge research in quantum propulsion, materials science, and AI-driven navigation systems.",
                },
                {
                  title: "Global Collaboration",
                  desc: "Partnering with leading space agencies, universities, and tech companies across 40+ countries.",
                },
                {
                  title: "Sustainable Space",
                  desc: "Committed to responsible space exploration with zero-debris policies and green propulsion technologies.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-space-cyan/30 pl-4"
                >
                  <h4 className="font-orbitron font-semibold text-sm text-space-cyan mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm font-exo leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: 150, suffix: "+", label: "Missions Completed" },
            { value: 42, suffix: "", label: "Active Projects" },
            { value: 12, suffix: "", label: "Research Labs" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`scroll-reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                triggered={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

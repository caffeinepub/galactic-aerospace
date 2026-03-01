import { ChevronDown, Globe, Zap } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-space.dim_1920x1080.png"
          alt="Deep space background"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.55 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,10,26,0.3) 0%, rgba(5,10,26,0.1) 40%, rgba(5,10,26,0.7) 85%, rgba(5,10,26,1) 100%)",
          }}
        />
      </div>

      {/* Animated orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="absolute w-[500px] h-[500px] rounded-full border border-space-cyan/20"
          style={{
            animation: "spin-slow 40s linear infinite",
            filter: "drop-shadow(0 0 8px rgba(0, 245, 255, 0.4))",
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full border border-space-purple/20"
          style={{
            animation: "spin-slow 60s linear infinite reverse",
            filter: "drop-shadow(0 0 8px rgba(192, 132, 252, 0.4))",
          }}
        />
        <div
          className="absolute w-[900px] h-[900px] rounded-full border border-space-cyan/10"
          style={{
            animation: "spin-slow 80s linear infinite",
            filter: "drop-shadow(0 0 6px rgba(0, 245, 255, 0.3))",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 glass neon-border px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-space-cyan mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <Zap className="w-3.5 h-3.5" />
          NEXT-GENERATION SPACE TECHNOLOGY
        </div>

        {/* Main tagline */}
        <h1
          className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.25s", animationFillMode: "both" }}
        >
          <span className="text-white">Reaching</span>
          <br />
          <span
            className="inline-block"
            style={{
              background:
                "linear-gradient(135deg, #00f5ff 0%, #c084fc 50%, #00f5ff 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
            }}
          >
            Beyond the Stars
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-exo animate-fade-in-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          Pioneering the future of space exploration through advanced propulsion
          systems, orbital transport solutions, and next-generation spacecraft
          technology.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.55s", animationFillMode: "both" }}
        >
          <button
            type="button"
            onClick={() => handleScroll("innovations")}
            className="btn-solid-glow px-8 py-4 rounded-full text-base font-bold font-orbitron tracking-wide flex items-center gap-2 shadow-cyan-md"
          >
            <Zap className="w-4 h-4" />
            Discover Innovations
          </button>
          <button
            type="button"
            onClick={() => handleScroll("missions")}
            className="btn-glow px-8 py-4 rounded-full text-base font-semibold font-orbitron tracking-wide flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            View Missions
          </button>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.7s", animationFillMode: "both" }}
        >
          {[
            { value: "150+", label: "Missions" },
            { value: "42", label: "Projects" },
            { value: "12", label: "Research Labs" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-orbitron font-bold text-2xl sm:text-3xl text-space-cyan">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => handleScroll("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-space-cyan transition-colors duration-300 group"
      >
        <span className="text-xs tracking-widest uppercase font-exo">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}

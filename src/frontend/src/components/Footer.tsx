import { Heart, Rocket } from "lucide-react";
import { useRef } from "react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { useParticleAnimation } from "../hooks/useParticleAnimation";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Innovations", href: "#innovations" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Missions", href: "#missions" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: SiX, label: "X", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiYoutube, label: "YouTube", href: "#" },
  { icon: SiGithub, label: "GitHub", href: "#" },
];

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleAnimation(canvasRef, 80);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 overflow-hidden border-t border-space-cyan/10">
      {/* Star canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,10,26,0.85) 0%, rgba(5,10,26,0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-space-cyan to-space-purple flex items-center justify-center">
                <Rocket className="w-5 h-5 text-space-deep" />
              </div>
              <span className="font-orbitron font-bold text-lg tracking-wider text-white">
                GALACTIC<span className="text-space-cyan"> AEROSPACE</span>
              </span>
            </div>
            <p className="text-white/50 text-sm font-exo leading-relaxed max-w-xs">
              Pioneering the future of space exploration and aerospace
              innovation for a multi-planetary humanity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-sm text-white tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 hover:text-space-cyan text-sm font-exo transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-orbitron font-bold text-sm text-white tracking-widest uppercase mb-5">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-space-cyan hover:border-space-cyan/40 transition-all duration-300 hover:scale-110 hover:shadow-cyan-sm"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
            <p className="text-white/40 text-xs font-exo leading-relaxed">
              Stay updated with our latest missions, innovations, and space
              exploration breakthroughs.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.3), rgba(107, 33, 168, 0.3), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-exo">
          <p>
            © 2026 Galactic Aerospace | Designed &amp; Developed by Abul Quaish
          </p>
          <p className="flex items-center gap-1.5">
            Built with{" "}
            <Heart className="w-3 h-3 text-space-cyan fill-space-cyan" />{" "}
            passion
          </p>
        </div>
      </div>
    </footer>
  );
}

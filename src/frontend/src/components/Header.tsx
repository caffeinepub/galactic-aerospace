import { Menu, Rocket, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Innovations", href: "#innovations" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Missions", href: "#missions" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-space-cyan to-space-purple flex items-center justify-center shadow-cyan-sm group-hover:shadow-cyan-md transition-all duration-300">
              <Rocket className="w-5 h-5 text-space-deep" />
            </div>
            <div className="absolute inset-0 rounded-full bg-space-cyan opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
          </div>
          <span className="font-orbitron font-bold text-lg tracking-wider text-white group-hover:text-cyan-glow transition-colors duration-300">
            GALACTIC<span className="text-space-cyan"> AEROSPACE</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-space-cyan active"
                  : "text-white/80"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="btn-glow px-5 py-2.5 rounded-full text-sm font-semibold font-orbitron tracking-wide relative z-10"
          >
            Explore the Future
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden text-white/80 hover:text-space-cyan transition-colors duration-300 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-space-cyan/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`nav-link text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 hover:bg-space-cyan/10 ${
                activeSection === link.href.replace("#", "")
                  ? "text-space-cyan bg-space-cyan/5"
                  : "text-white/80"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="btn-glow mt-2 px-5 py-2.5 rounded-full text-sm font-semibold font-orbitron tracking-wide relative z-10 text-center"
          >
            Explore the Future
          </button>
        </div>
      </div>
    </header>
  );
}

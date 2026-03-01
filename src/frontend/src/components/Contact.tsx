import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

const socialLinks = [
  { icon: SiX, label: "X (Twitter)", href: "#", color: "#00f5ff" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#", color: "#0077b5" },
  { icon: SiInstagram, label: "Instagram", href: "#", color: "#e1306c" },
  { icon: SiYoutube, label: "YouTube", href: "#", color: "#ff0000" },
  { icon: SiGithub, label: "GitHub", href: "#", color: "#c084fc" },
];

export default function Contact() {
  const { ref: sectionRef, isVisible } = useScrollTrigger(0.05);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Message from ${formData.name} via Galactic Aerospace Website`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.open(
      `mailto:sufishoaib2012@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative z-10 py-24 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 scroll-reveal ${isVisible ? "visible" : ""}`}
        >
          <span className="text-space-cyan text-xs font-semibold tracking-widest uppercase font-exo mb-3 block">
            Get In Touch
          </span>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            Join the <span className="text-space-cyan">Journey</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full section-glow-divider" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto font-exo">
            Ready to be part of humanity's greatest adventure? Reach out to us
            and let's explore the cosmos together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <div
            className={`scroll-reveal-left ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "sufishoaib2012@gmail.com",
                  color: "#00f5ff",
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "+916392652147",
                  color: "#c084fc",
                },
                {
                  icon: MapPin,
                  label: "Visit Us",
                  value:
                    "Space Innovation Hub, Near Gudamba Thana, Kursi Road, Lucknow, Uttar Pradesh",
                  color: "#34d399",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="glass-card rounded-xl p-5 flex items-center gap-4 group hover:shadow-cyan-sm transition-all duration-300"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs tracking-widest uppercase font-exo mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-white font-exo font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <p className="text-white/50 text-xs tracking-widest uppercase font-exo mb-4">
                Follow Our Journey
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 glass-card rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-cyan-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`scroll-reveal-right ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div
              className="glass-card rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,245,255,0.35),0_0_120px_rgba(107,33,168,0.25),0_0_180px_rgba(0,245,255,0.1)] hover:border-cyan-400/50"
              style={{ animation: "contactFormGlow 4s ease-in-out infinite" }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-space-cyan/15 border border-space-cyan/40 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Send className="w-7 h-7 text-space-cyan" />
                  </div>
                  <h3 className="font-orbitron font-bold text-xl text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/60 font-exo">
                    We'll get back to you at warp speed.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-white/60 text-xs tracking-widest uppercase font-exo mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="abul.version 2.0"
                      className="input-glow w-full px-4 py-3 rounded-xl font-exo text-white placeholder:text-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:shadow-[0_0_25px_rgba(0,245,255,0.6),0_0_50px_rgba(0,245,255,0.2)] hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(0, 245, 255, 0.25)",
                        transition:
                          "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-white/60 text-xs tracking-widest uppercase font-exo mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="explorer@galacticaerospace.com"
                      className="input-glow w-full px-4 py-3 rounded-xl font-exo text-white placeholder:text-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:shadow-[0_0_25px_rgba(0,245,255,0.6),0_0_50px_rgba(0,245,255,0.2)] hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(0, 245, 255, 0.25)",
                        transition:
                          "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-white/60 text-xs tracking-widest uppercase font-exo mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your mission..."
                      className="input-glow w-full px-4 py-3 rounded-xl font-exo text-white placeholder:text-white/40 transition-all duration-300 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:shadow-[0_0_25px_rgba(0,245,255,0.6),0_0_50px_rgba(0,245,255,0.2)] hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(0, 245, 255, 0.25)",
                        transition:
                          "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="relative w-full py-4 rounded-xl font-orbitron font-bold tracking-widest text-sm overflow-hidden group transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #00f5ff 0%, #6b21a8 50%, #00f5ff 100%)",
                      backgroundSize: "200% 200%",
                      boxShadow:
                        "0 0 25px rgba(0, 245, 255, 0.5), 0 0 50px rgba(107, 33, 168, 0.3)",
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      LAUNCH YOUR MESSAGE INTO SPACE
                    </span>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, #00d4e0 0%, #8b21d8 50%, #00d4e0 100%)",
                      }}
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

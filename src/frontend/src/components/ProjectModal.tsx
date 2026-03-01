import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

export interface ProjectTag {
  name: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: ProjectTag[];
  color: string;
  bgGradient: string;
  image?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <button
      type="button"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 w-full"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 animate-fade-in-up text-left"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Header image area */}
        <div
          className="relative h-48 sm:h-64 rounded-t-2xl overflow-hidden"
          style={{ background: project.bgGradient }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-orbitron font-black text-5xl sm:text-7xl opacity-10 text-white select-none">
              {project.id.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <span
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2 inline-block"
                style={{
                  background: `${project.color}25`,
                  color: project.color,
                  border: `1px solid ${project.color}40`,
                }}
              >
                {project.category}
              </span>
              <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white">
                {project.title}
              </h3>
            </div>
          </div>
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <p className="text-white/80 font-exo leading-relaxed mb-6">
            {project.longDescription}
          </p>

          {/* Tags with descriptions */}
          <div className="flex flex-col gap-3 mb-6">
            {project.tags.map((tag) => (
              <div
                key={tag.name}
                className="rounded-xl p-3"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                <span
                  className="text-xs font-bold font-orbitron tracking-wider uppercase block mb-1"
                  style={{ color: project.color }}
                >
                  {tag.name}
                </span>
                <p className="text-white/70 text-sm font-exo leading-relaxed">
                  {tag.description}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn-glow px-6 py-3 rounded-full text-sm font-semibold font-orbitron tracking-wide flex items-center gap-2 relative z-10"
          >
            <ExternalLink className="w-4 h-4" />
            View Full Project
          </button>
        </div>
      </div>
    </button>
  );
}

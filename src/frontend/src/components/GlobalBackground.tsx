import { useRef } from "react";
import { useParticleAnimation } from "../hooks/useParticleAnimation";

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleAnimation(canvasRef, 200);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep space base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #050a1a 0%, #0a0e2a 30%, #0d0520 60%, #050a1a 100%)",
        }}
      />
      {/* Nebula blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vh] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(107, 33, 168, 0.6) 0%, transparent 70%)",
          animation: "nebulaDrift 25s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vh] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 245, 255, 0.4) 0%, transparent 70%)",
          animation: "nebulaDrift 30s ease-in-out infinite reverse",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vh] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
          animation: "nebulaDrift 35s ease-in-out infinite",
          filter: "blur(70px)",
        }}
      />
      {/* Blood-red horror nebula - top right */}
      <div
        className="absolute top-[-5%] right-[-5%] w-[55vw] h-[55vh] rounded-full pointer-events-none horror-atmosphere"
        style={{
          background:
            "radial-gradient(ellipse, rgba(220, 20, 60, 0.4) 0%, rgba(139, 0, 0, 0.2) 40%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.18,
        }}
      />
      {/* Electric blue orb - center left */}
      <div
        className="absolute top-[30%] left-[-10%] w-[45vw] h-[45vh] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 100, 255, 0.3) 0%, transparent 70%)",
          animation: "nebulaDrift 28s ease-in-out infinite",
          filter: "blur(90px)",
          opacity: 0.15,
        }}
      />
      {/* Deep magenta horror orb - bottom center */}
      <div
        className="absolute bottom-[10%] left-[20%] w-[50vw] h-[40vh] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200, 0, 180, 0.25) 0%, rgba(120, 0, 80, 0.15) 50%, transparent 70%)",
          animation: "nebulaDrift 22s ease-in-out infinite reverse",
          filter: "blur(100px)",
          opacity: 0.2,
        }}
      />
      {/* Scanline overlay for sci-fi/horror texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 0, 0, 0.03) 3px, rgba(0, 0, 0, 0.03) 4px)",
          backgroundSize: "100% 4px",
          animation: "scanlineScroll 8s linear infinite",
          opacity: 1,
        }}
      />
      {/* Star canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import { ThemeButton } from "../foundations/ThemeButton";
import { ArrowDown, Network } from "lucide-react";
import { AnimWrapper } from "../foundations/AnimWrapper";

const PIPELINE_NODES = ["SOURCE", "INGEST", "TRANSFORM", "STORE", "ANALYZE", "INTELLIGENCE"];
const ORBIT_TECH = ["Python", "PySpark", "Azure", "Databricks", "SQL", "AI/GenAI"];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [sysTime, setSysTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSysTime(now.toTimeString().split(" ")[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initNodes();
    };
    window.addEventListener("resize", handleResize);

    interface NodePos {
      name: string;
      x: number;
      y: number;
      radius: number;
      pulse: number;
      flashTimer: number;
    }

    const nodes: NodePos[] = [];

    const initNodes = () => {
      nodes.length = 0;
      const padding = 30;
      const stepY = (height - padding * 2) / (PIPELINE_NODES.length - 1);

      for (let i = 0; i < PIPELINE_NODES.length; i++) {
        nodes.push({
          name: PIPELINE_NODES[i],
          x: width / 2,
          y: padding + stepY * i,
          radius: 4.5,
          pulse: Math.random() * 10,
          flashTimer: 0
        });
      }
    };

    initNodes();

    class DataPacket {
      x: number = 0;
      y: number = 0;
      currentNodeIdx: number = 0;
      nextNodeIdx: number = 0;
      progress: number = 0;
      speed: number = 0;
      size: number = 0;
      color: string = "";

      constructor() {
        this.reset();
        this.currentNodeIdx = Math.floor(Math.random() * (PIPELINE_NODES.length - 1));
        this.nextNodeIdx = this.currentNodeIdx + 1;
        this.progress = Math.random();
      }

      reset() {
        this.currentNodeIdx = 0;
        this.nextNodeIdx = 1;
        this.progress = 0;
        this.speed = 0.008 + Math.random() * 0.012;
        this.size = 1.6 + Math.random() * 1.6;
        this.color = Math.random() > 0.5 ? "rgba(6, 182, 212, 1)" : "rgba(139, 92, 246, 1)";
      }

      update(mX: number, mY: number) {
        const start = nodes[this.currentNodeIdx];
        const end = nodes[this.nextNodeIdx];
        if (!start || !end) return;

        let currentSpeed = this.speed;
        let targetX = start.x + (end.x - start.x) * this.progress;
        let targetY = start.y + (end.y - start.y) * this.progress;

        const dx = mX - targetX;
        const dy = mY - targetY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 60) {
          currentSpeed *= 2.0;
          targetX += (dx / dist) * -4;
        }

        this.x = targetX;
        this.y = targetY;
        this.progress += currentSpeed;

        if (this.progress >= 1) {
          const nextNode = nodes[this.nextNodeIdx];
          if (nextNode) {
            nextNode.flashTimer = 1.0;
          }

          this.currentNodeIdx = this.nextNodeIdx;
          this.nextNodeIdx = this.currentNodeIdx + 1;
          this.progress = 0;

          if (this.nextNodeIdx >= PIPELINE_NODES.length) {
            this.reset();
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
        c.shadowBlur = 4;
        c.shadowColor = this.color;
      }
    }

    const packets: DataPacket[] = [];
    for (let i = 0; i < 12; i++) {
      packets.push(new DataPacket());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const rect = canvas.getBoundingClientRect();
      const relativeMouseX = mousePos.x - rect.left;
      const relativeMouseY = mousePos.y - rect.top;

      // 1. Connection line
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      if (nodes[0]) ctx.moveTo(nodes[0].x, nodes[0].y);
      for (let i = 1; i < nodes.length; i++) {
        const start = nodes[i - 1];
        const end = nodes[i];
        const midY = (start.y + end.y) / 2;
        const midX = width / 2;

        const dx = relativeMouseX - midX;
        const dy = relativeMouseY - midY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          const bendX = midX + (dx / dist) * 6;
          ctx.quadraticCurveTo(bendX, midY, end.x, end.y);
        } else {
          ctx.lineTo(end.x, end.y);
        }
      }
      ctx.stroke();

      // 2. Packets
      packets.forEach((p) => {
        p.update(relativeMouseX, relativeMouseY);
        p.draw(ctx);
      });

      // 3. Nodes
      nodes.forEach((node, idx) => {
        node.pulse += 0.02;
        if (node.flashTimer > 0) {
          node.flashTimer -= 0.04;
        }

        const isEven = idx % 2 === 0;
        const pulseOffset = Math.sin(node.pulse) * 1.5;
        const flashIntensity = Math.max(0, node.flashTimer);
        const baseColor = isEven ? "rgba(139, 92, 246," : "rgba(6, 182, 212,";

        ctx.shadowBlur = 0;

        ctx.strokeStyle = `${baseColor} ${0.2 + flashIntensity * 0.8})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3.5 + pulseOffset + (flashIntensity * 3), 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = `${baseColor} ${0.85 + flashIntensity * 0.15})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (flashIntensity * 1.2), 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = flashIntensity > 0 ? "#ffffff" : "rgba(255, 255, 255, 0.4)";
        ctx.font = "bold 8px monospace";
        ctx.textAlign = "left";
        ctx.fillText(`[${node.name}]`, node.x + 14, node.y + 3);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion, mousePos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion) return;
    setMousePos({ x: e.clientX, y: e.clientY });

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setParallax({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
    setMousePos({ x: -1000, y: -1000 });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-radial-dark pt-24"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.18] bg-grid-pattern z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-primary/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* Left Column: Hero Details */}
        <div className="col-span-1 md:col-span-2 lg:col-span-6 flex flex-col items-start text-left">

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.15}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-white mb-3 leading-[1.1] break-words w-full">
              Kaviram Sudharajanainar Paramasivan
            </h1>
            <div className="text-[11px] font-bold font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
              Data Engineer (Associate) &bull; Systech Solutions, Inc.
            </div>
            <div className="text-[10px] font-semibold font-mono text-muted-foreground uppercase tracking-wider mb-6">
              Chennai, India
            </div>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.25}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Engineering Data. <br />
              <span className="text-gradient-primary">Building Intelligence.</span>
            </h2>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.35}>
            <div className="border-l-2 border-primary/20 pl-4 mb-8 max-w-xl">
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Building reliable data pipelines and cloud data solutions with modern data engineering technologies, while exploring AI/GenAI applications.
              </p>
            </div>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.45}>
            <div className="flex flex-wrap gap-3 items-center">
              <ThemeButton
                variant="default"
                size="lg"
                glow
                onClick={() => scrollToSection("projects")}
                className="gap-1.5 cursor-pointer font-bold uppercase tracking-wider text-xs shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Explore My Work
              </ThemeButton>
              <ThemeButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="gap-1.5 cursor-pointer font-bold uppercase tracking-wider text-xs transition-transform hover:-translate-y-0.5"
              >
                Let's Connect
              </ThemeButton>
            </div>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.55}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-6 mt-8 w-full max-w-lg font-mono">
              <div>
                <span className="text-[9px] text-muted-foreground block uppercase mb-1">Data Engineering</span>
                <span className="text-[11px] font-bold text-white block uppercase">Azure Databricks</span>
                <span className="text-[9px] text-cyan-400 font-medium">PySpark &bull; SQL</span>
              </div>
              <div>
                <span className="text-[9px] text-muted-foreground block uppercase mb-1">Cloud Data</span>
                <span className="text-[11px] font-bold text-white block uppercase">Microsoft Fabric</span>
                <span className="text-[9px] text-cyan-400 font-medium">Azure</span>
              </div>
              <div>
                <span className="text-[9px] text-muted-foreground block uppercase mb-1">AI / GenAI</span>
                <span className="text-[11px] font-bold text-white block uppercase">RAG System</span>
                <span className="text-[9px] text-cyan-400 font-medium">Azure OpenAI</span>
              </div>
            </div>
          </AnimWrapper>
        </div>

        {/* Middle Column: Clean Portrait Cutout (No overlay on other visuals) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-3 w-full h-[260px] sm:h-[320px] md:h-[420px] relative flex items-end justify-center rounded-2xl border border-white/5 bg-[#05050a]/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div
            style={{
              transform: `translate(${parallax.x * 10}px, ${parallax.y * 10}px)`,
              transition: reducedMotion ? "none" : "transform 0.2s ease-out",
            }}
            className="w-auto h-[95%] pointer-events-none flex items-end justify-center select-none"
          >
            <img
              src="/kaviram_chibi.png"
              alt="Kaviram Sudharajanainar Paramasivan"
              className="max-h-full w-auto object-contain filter drop-shadow-[0_0_15px_rgba(139,92,246,0.35)] drop-shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            />
          </div>
        </div>

        {/* Right Column: Live Data Pipeline Canvas (No overlay on other visuals) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-3 w-full h-[260px] sm:h-[320px] md:h-[420px] relative flex items-center justify-center rounded-2xl border border-white/5 bg-[#05050a]/10 overflow-hidden">
          <div
            style={{
              transform: `translate(${parallax.x * 3}px, ${parallax.y * 3}px)`,
              transition: reducedMotion ? "none" : "transform 0.2s ease-out",
            }}
            className="absolute inset-0 w-full h-full"
          >
            {!reducedMotion ? (
              <canvas ref={canvasRef} className="w-full h-full block" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <Network className="size-10 text-primary animate-pulse mb-3" />
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex flex-col gap-0.5">
                  {PIPELINE_NODES.map((node) => (
                    <span key={node}>↓ {node}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Orbiting Tech Badges */}
          {!reducedMotion && (
            <div
              style={{
                transform: `translate(${parallax.x * 12}px, ${parallax.y * 12}px)`,
                transition: "transform 0.2s ease-out",
              }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {ORBIT_TECH.map((tech, idx) => {
                const angle = (idx / ORBIT_TECH.length) * Math.PI * 2;
                const distance = 80 + (idx % 2) * 15;
                const duration = 20 + (idx % 2) * 5;
                const animationDelay = `${idx * -3}s`;

                return (
                  <div
                    key={tech}
                    style={{
                      "--orbit-duration": `${duration}s`,
                      "--orbit-distance": `${distance}px`,
                      animationDelay,
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    } as React.CSSProperties}
                    className="absolute select-none animate-orbit opacity-75"
                  >
                    <span className="px-1.5 py-0.5 rounded border border-white/5 bg-[#0a0914]/90 text-[8px] text-white font-semibold font-mono tracking-wide shadow-md whitespace-nowrap">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[9px] font-semibold font-mono uppercase tracking-widest text-muted-foreground">About</span>
        <ArrowDown className="size-3.5 text-primary animate-bounce" />
      </div>
    </section>
  );
}

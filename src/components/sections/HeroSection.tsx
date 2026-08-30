"use client";

import React, { useEffect, useRef, useState } from "react";
import { ThemeButton } from "../foundations/ThemeButton";
import { ArrowDown, Network, Terminal as TerminalIcon } from "lucide-react";
import { AnimWrapper } from "../foundations/AnimWrapper";

const PIPELINE_NODES = ["SOURCE", "INGEST", "TRANSFORM", "STORE", "ANALYZE", "INTELLIGENCE"];
const ORBIT_TECH = [
  "SQL", "Python", "PySpark", "Azure Data Factory", "Databricks", 
  "Delta Lake", "Microsoft Fabric", "Power BI", "RAG", "Azure OpenAI"
];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [sysTime, setSysTime] = useState("");

  useEffect(() => {
    // Clock for command center look
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

    // Node Pos Interface
    interface NodePos {
      name: string;
      x: number;
      y: number;
      radius: number;
      pulse: number;
      flashTimer: number; // for node brightening when data passes
    }

    const nodes: NodePos[] = [];

    const initNodes = () => {
      nodes.length = 0;
      // Position nodes vertically down the center of the canvas
      const padding = 40;
      const stepY = (height - padding * 2) / (PIPELINE_NODES.length - 1);
      
      for (let i = 0; i < PIPELINE_NODES.length; i++) {
        nodes.push({
          name: PIPELINE_NODES[i],
          x: width / 2,
          y: padding + stepY * i,
          radius: 5,
          pulse: Math.random() * 10,
          flashTimer: 0
        });
      }
    };

    initNodes();

    // Particle definition
    class DataPacket {
      x: number = 0;
      y: number = 0;
      currentNodeIdx: number = 0;
      nextNodeIdx: number = 0;
      progress: number = 0; // 0 to 1
      speed: number = 0;
      size: number = 0;
      color: string = "";

      constructor() {
        this.reset();
        // Start randomly along the pipeline
        this.currentNodeIdx = Math.floor(Math.random() * (PIPELINE_NODES.length - 1));
        this.nextNodeIdx = this.currentNodeIdx + 1;
        this.progress = Math.random();
      }

      reset() {
        this.currentNodeIdx = 0;
        this.nextNodeIdx = 1;
        this.progress = 0;
        this.speed = 0.008 + Math.random() * 0.012;
        this.size = 2 + Math.random() * 2;
        this.color = Math.random() > 0.5 ? "rgba(6, 182, 212, 1)" : "rgba(139, 92, 246, 1)";
      }

      update(mX: number, mY: number) {
        const start = nodes[this.currentNodeIdx];
        const end = nodes[this.nextNodeIdx];
        if (!start || !end) return;

        // Base progress speed
        let currentSpeed = this.speed;

        // Interpolated coordinate
        let targetX = start.x + (end.x - start.x) * this.progress;
        let targetY = start.y + (end.y - start.y) * this.progress;

        // Cursor proximity physics: particles accelerate or bend near mouse
        const dx = mX - targetX;
        const dy = mY - targetY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 80) {
          // Accelerate particle progress
          currentSpeed *= 2.2;
          // Apply horizontal drift towards or away from cursor
          targetX += (dx / dist) * -6; // push away slightly
        }

        this.x = targetX;
        this.y = targetY;
        this.progress += currentSpeed;

        // Check node arrival
        if (this.progress >= 1) {
          // Trigger node flash
          const nextNode = nodes[this.nextNodeIdx];
          if (nextNode) {
            nextNode.flashTimer = 1.0; // full bright
          }

          this.currentNodeIdx = this.nextNodeIdx;
          this.nextNodeIdx = this.currentNodeIdx + 1;
          this.progress = 0;

          // End of pipeline reset
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

        // Glow
        c.shadowBlur = 6;
        c.shadowColor = this.color;
      }
    }

    const packets: DataPacket[] = [];
    for (let i = 0; i < 18; i++) {
      packets.push(new DataPacket());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Track mouse in relative canvas coordinates
      const rect = canvas.getBoundingClientRect();
      const relativeMouseX = mousePos.x - rect.left;
      const relativeMouseY = mousePos.y - rect.top;

      // 1. Draw connection line
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (nodes[0]) ctx.moveTo(nodes[0].x, nodes[0].y);
      for (let i = 1; i < nodes.length; i++) {
        // Curve connection lines subtly towards mouse
        const start = nodes[i - 1];
        const end = nodes[i];
        const midY = (start.y + end.y) / 2;
        const midX = width / 2;

        const dx = relativeMouseX - midX;
        const dy = relativeMouseY - midY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          // Curve path toward mouse slightly
          const bendX = midX + (dx / dist) * 10;
          ctx.quadraticCurveTo(bendX, midY, end.x, end.y);
        } else {
          ctx.lineTo(end.x, end.y);
        }
      }
      ctx.stroke();

      // 2. Draw packets
      packets.forEach((p) => {
        p.update(relativeMouseX, relativeMouseY);
        p.draw(ctx);
      });

      // 3. Draw nodes
      nodes.forEach((node, idx) => {
        node.pulse += 0.02;
        if (node.flashTimer > 0) {
          node.flashTimer -= 0.04; // fade flash
        }

        const isEven = idx % 2 === 0;
        const pulseOffset = Math.sin(node.pulse) * 2;
        const flashIntensity = Math.max(0, node.flashTimer);

        // Core colors matching theme
        const baseColor = isEven ? "rgba(139, 92, 246," : "rgba(6, 182, 212,";
        
        ctx.shadowBlur = 0;
        
        // Node outer tracking circle
        ctx.strokeStyle = `${baseColor} ${0.2 + flashIntensity * 0.8})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 4 + pulseOffset + (flashIntensity * 4), 0, Math.PI * 2);
        ctx.stroke();

        // Node center core
        ctx.fillStyle = `${baseColor} ${0.85 + flashIntensity * 0.15})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (flashIntensity * 1.5), 0, Math.PI * 2);
        ctx.fill();

        // Node name tag text
        ctx.fillStyle = flashIntensity > 0 ? "#ffffff" : "rgba(255, 255, 255, 0.4)";
        ctx.font = "bold 8px monospace";
        ctx.textAlign = "left";
        ctx.fillText(`[${node.name}]`, node.x + 16, node.y + 3);
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
    setMousePos({ x: e.clientX, y: e.clientY });
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
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-radial-dark pt-24"
    >
      {/* Visual background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.18] bg-grid-pattern z-0" />
      
      {/* Core command center top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-primary/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Info Panel */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Prompter Console */}
          <AnimWrapper variant="fade-up" duration={0.8}>
            <div className="flex items-center gap-2 mb-4 bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-xl font-mono text-[10px] text-cyan-400">
              <span className="size-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
              <span className="text-white/60">SYS_STATUS:</span>
              <span className="font-semibold uppercase tracking-wider">INITIALIZING DATA ENGINEER...</span>
              <span className="text-white/20">|</span>
              <span className="text-white/50">{sysTime}</span>
            </div>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.15}>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Engineering Data.<br />
              <span className="text-gradient-primary">Building Intelligence.</span>
            </h1>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.3}>
            <div className="border-l-2 border-primary/20 pl-4 mb-10 max-w-xl">
              <h2 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase font-mono mb-2">
                Kaviram Sudharajanainar Paramasivan &bull; Associate Data Engineer
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Focused on building reliable medallion data pipelines, secure cloud data platforms, and automated RAG pipelines utilizing PySpark, Azure, and OpenAI models.
              </p>
            </div>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.45}>
            <div className="flex flex-wrap gap-4">
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
        </div>

        {/* Right Side: Command Center Pipeline Graphic */}
        <div className="lg:col-span-5 w-full h-[360px] md:h-[440px] relative flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-[2px] overflow-hidden">
          
          {/* Radial visual glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Floating tech badges orbiting */}
          {!reducedMotion && ORBIT_TECH.map((tech, idx) => {
            const angle = (idx / ORBIT_TECH.length) * Math.PI * 2;
            const distance = 95 + (idx % 3) * 18; 
            const duration = 24 + (idx % 2) * 6;
            const animationDelay = `${idx * -2.8}s`;

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
                className="absolute z-10 select-none pointer-events-none animate-orbit opacity-75 hover:opacity-100 transition-opacity"
              >
                <span className="px-2 py-0.5 rounded border border-white/5 bg-[#0a0914]/85 text-[9px] text-muted-foreground/75 font-semibold font-mono tracking-wide shadow-md whitespace-nowrap">
                  {tech}
                </span>
              </div>
            );
          })}

          {/* Canvas Engine */}
          {!reducedMotion ? (
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <Network className="size-12 text-primary animate-pulse mb-4" />
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex flex-col gap-1.5 mb-4">
                {PIPELINE_NODES.map((node) => (
                  <span key={node}>↓ {node}</span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Down pointer arrow */}
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

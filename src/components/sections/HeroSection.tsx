"use client";

import React, { useEffect, useRef, useState } from "react";
import { ThemeButton } from "../foundations/ThemeButton";
import { ArrowDown, Network } from "lucide-react";
import { AnimWrapper } from "../foundations/AnimWrapper";

const PIPELINE_NODES = ["SOURCE", "INGEST", "TRANSFORM", "STORE", "ANALYZE", "INTELLIGENCE"];
const ORBIT_TECH = [
  "SQL", "Python", "PySpark", "Azure Data Factory", "Databricks", 
  "Delta Lake", "Microsoft Fabric", "Power BI", "RAG", "Azure OpenAI"
];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
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

    // Particle definition
    class Particle {
      x: number = 0;
      y: number = 0;
      targetNodeIdx: number = 0;
      speed: number = 0;
      size: number = 0;
      color: string = "";

      constructor(startNodeIdx: number) {
        this.reset(startNodeIdx);
      }

      reset(startNodeIdx: number) {
        this.targetNodeIdx = (startNodeIdx + 1) % PIPELINE_NODES.length;
        const startNode = nodes[startNodeIdx];
        if (startNode) {
          this.x = startNode.x;
          this.y = startNode.y;
        }
        this.speed = 0.6 + Math.random() * 1.4;
        this.size = 1.5 + Math.random() * 2;
        this.color = this.targetNodeIdx % 2 === 0 ? "rgba(139, 92, 246, 0.85)" : "rgba(6, 182, 212, 0.85)";
      }

      update() {
        const target = nodes[this.targetNodeIdx];
        if (!target) return;

        const dx = target.x - this.x;
        const dy = target.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 4) {
          this.reset(this.targetNodeIdx);
        } else {
          this.x += (dx / dist) * this.speed;
          this.y += (dy / dist) * this.speed;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
      }
    }

    // Nodes positioning list
    interface NodePos {
      name: string;
      x: number;
      y: number;
      radius: number;
      pulse: number;
    }
    const nodes: NodePos[] = [];
    const particles: Particle[] = [];

    const initNodes = () => {
      nodes.length = 0;
      const stepX = width / (PIPELINE_NODES.length + 1);
      for (let i = 0; i < PIPELINE_NODES.length; i++) {
        // Curve layout slightly
        const offsetMultiplier = Math.sin((i / (PIPELINE_NODES.length - 1)) * Math.PI);
        const yPos = height / 2 + offsetMultiplier * (height * 0.12);
        nodes.push({
          name: PIPELINE_NODES[i],
          x: stepX * (i + 1),
          y: yPos,
          radius: 5,
          pulse: Math.random() * 10
        });
      }
    };

    initNodes();

    // Create particles
    for (let i = 0; i < 40; i++) {
      const randomNodeIdx = Math.floor(Math.random() * (PIPELINE_NODES.length - 1));
      particles.push(new Particle(randomNodeIdx));
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw paths
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (nodes[0]) ctx.moveTo(nodes[0].x, nodes[0].y);
      for (let i = 1; i < nodes.length; i++) {
        ctx.lineTo(nodes[i].x, nodes[i].y);
      }
      ctx.stroke();

      // 2. Flow particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // 3. Draw nodes
      nodes.forEach((node, idx) => {
        node.pulse += 0.03;
        const currentPulse = Math.sin(node.pulse) * 3;

        // Outer pulse circle
        ctx.strokeStyle = idx % 2 === 0 ? "rgba(139, 92, 246, 0.3)" : "rgba(6, 182, 212, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3 + currentPulse, 0, Math.PI * 2);
        ctx.stroke();

        // Core dot
        ctx.fillStyle = idx % 2 === 0 ? "rgba(139, 92, 246, 0.95)" : "rgba(6, 182, 212, 0.95)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node label
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.font = "bold 8px monospace";
        ctx.textAlign = "center";
        ctx.fillText(node.name, node.x, node.y - 14);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

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
      className="relative min-h-[92vh] w-full flex flex-col justify-center items-center overflow-hidden bg-radial-dark pt-24"
    >
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-grid-pattern z-0" />
      
      {/* Decorative top ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Profile info block */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <AnimWrapper variant="fade-up" duration={0.8}>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-4 inline-block bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Data Engineering &bull; Azure &bull; AI / GenAI
            </span>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.15}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Engineering Data.<br />
              <span className="text-gradient-primary">Building Intelligence.</span>
            </h1>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.3}>
            <p className="text-sm md:text-base text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Kaviram Sudharajanainar Paramasivan</span>, a Data Engineer (Associate) at <span className="text-white font-semibold">Systech Solutions, Inc.</span> focused on building reliable data pipelines, cloud-based data solutions, and intelligent AI applications.
            </p>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" duration={0.8} delay={0.45}>
            <div className="flex flex-wrap gap-4">
              <ThemeButton
                variant="default"
                size="lg"
                glow
                onClick={() => scrollToSection("projects")}
                className="gap-1.5 cursor-pointer font-semibold uppercase tracking-wider text-xs"
              >
                Explore My Work
              </ThemeButton>
              <ThemeButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="gap-1.5 cursor-pointer font-semibold uppercase tracking-wider text-xs"
              >
                Let's Connect
              </ThemeButton>
            </div>
          </AnimWrapper>
        </div>

        {/* Dynamic canvas graphics */}
        <div className="lg:col-span-6 w-full h-[280px] md:h-[360px] relative flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm overflow-hidden">
          
          {/* Spotlight blur backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Floating tech badges */}
          {!reducedMotion && ORBIT_TECH.map((tech, idx) => {
            const angle = (idx / ORBIT_TECH.length) * Math.PI * 2;
            const distance = 90 + (idx % 3) * 20; 
            const duration = 20 + (idx % 2) * 8;
            const animationDelay = `${idx * -2.5}s`;

            return (
              <div
                key={tech}
                style={{
                  "--orbit-duration": `${duration}s`,
                  "--orbit-distance": `${distance}px`,
                  animationDelay,
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%)`,
                } as React.CSSProperties}
                className="absolute z-10 select-none pointer-events-none animate-orbit"
              >
                <span className="px-2 py-0.5 rounded border border-white/5 bg-[#0a0914]/80 text-[9px] text-muted-foreground font-semibold font-mono tracking-wide shadow-lg whitespace-nowrap">
                  {tech}
                </span>
              </div>
            );
          })}

          {!reducedMotion ? (
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <Network className="size-12 text-primary animate-pulse mb-4" />
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2 mb-4">
                Pipeline: {PIPELINE_NODES.join(" → ")}
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-sm">
                {ORBIT_TECH.map((tech) => (
                  <span key={tech} className="px-2 py-1 rounded border border-white/5 bg-white/5 text-[9px] text-muted-foreground font-mono">
                    {tech}
                  </span>
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
        <span className="text-[9px] font-semibold font-mono uppercase tracking-widest text-muted-foreground">Scroll</span>
        <ArrowDown className="size-3.5 text-primary animate-bounce" />
      </div>
    </section>
  );
}

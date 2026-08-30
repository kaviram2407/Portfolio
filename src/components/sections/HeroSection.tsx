"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";

export function HeroSection() {
  return (
    <SectionContainer id="hero" className="min-h-[90vh] justify-center pt-32">
      <div className="max-w-4xl mx-auto w-full">
        <AnimWrapper variant="scale-up" duration={1.2}>
          <GlassCard className="text-center py-20 border-primary/20 bg-primary/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Portfolio <span className="text-gradient-primary">Foundation</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Phase 1 has established the visual theme, design system tokens, responsive navigation shell, and advanced animation configurations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {["Next.js 15+", "Tailwind v4", "TypeScript", "shadcn/ui", "GSAP", "Three.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg border border-white/5 bg-white/5 text-xs text-muted-foreground font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

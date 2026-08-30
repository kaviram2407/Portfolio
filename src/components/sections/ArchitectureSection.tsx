"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";

export function ArchitectureSection() {
  return (
    <SectionContainer id="architecture">
      <SectionHeading title="System Architecture" subtitle="Blueprints" />
      <AnimWrapper variant="scale-up">
        <GlassCard className="py-12 bg-white/[0.01]">
          <h3 className="text-xl font-semibold mb-4 text-white text-center">Interactive Architecture Diagrams</h3>
          <p className="text-xs md:text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
            In Phase 2, this section will render interactive architecture maps (such as RAG pipelines and data flows) using GSAP + ScrollTrigger to animate data packages traveling between nodes.
          </p>
        </GlassCard>
      </AnimWrapper>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionHeading title="About Me" subtitle="Biography" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimWrapper variant="slide-right">
          <GlassCard>
            <h3 className="text-xl font-semibold mb-4 text-white">Professional Profile</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              This space will detail professional achievements, experience focus, and biography in Phase 2. The layout is structured as a responsive split grid.
            </p>
          </GlassCard>
        </AnimWrapper>
        <AnimWrapper variant="slide-left" delay={0.2}>
          <GlassCard>
            <h3 className="text-xl font-semibold mb-4 text-white">Focus & Values</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Core design philosophies, development approaches, and architectural methodologies will be rendered in this component.
            </p>
          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

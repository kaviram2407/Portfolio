"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <SectionHeading title="Featured Projects" subtitle="Portfolio" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimWrapper variant="fade-up" delay={0.1}>
          <GlassCard>
            <h3 className="text-xl font-semibold mb-3 text-white">Project Pipeline Alpha</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              This card will display project descriptions, tech-stack badges, links to repositories, and visual design assets in Phase 2.
            </p>
          </GlassCard>
        </AnimWrapper>
        <AnimWrapper variant="fade-up" delay={0.2}>
          <GlassCard>
            <h3 className="text-xl font-semibold mb-3 text-white">Project Pipeline Beta</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              This card is pre-configured with responsive structures and hover scaling transitions.
            </p>
          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

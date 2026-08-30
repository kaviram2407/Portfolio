"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { AnimWrapper } from "../foundations/AnimWrapper";

export function TimelineSection() {
  return (
    <SectionContainer id="timeline">
      <SectionHeading title="Work Experience" subtitle="Timeline" />
      <div className="relative pl-6 border-l border-primary/20 max-w-3xl mx-auto flex flex-col gap-10">
        <AnimWrapper variant="fade-up" delay={0.1}>
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 size-3.5 rounded-full bg-primary border-2 border-background" />
            <h3 className="text-lg font-semibold text-white">Role Milestone Alpha</h3>
            <span className="text-xs text-primary font-semibold mb-2 block">Company &bull; Timeframe</span>
            <p className="text-xs md:text-sm text-muted-foreground">
              A placeholder node. This list will render professional details, achievements, and milestones in Phase 2.
            </p>
          </div>
        </AnimWrapper>
        <AnimWrapper variant="fade-up" delay={0.2}>
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 size-3.5 rounded-full bg-accent border-2 border-background" />
            <h3 className="text-lg font-semibold text-white">Role Milestone Beta</h3>
            <span className="text-xs text-accent font-semibold mb-2 block">Company &bull; Timeframe</span>
            <p className="text-xs md:text-sm text-muted-foreground">
              Pre-aligned timeline connectors and vertical borders configured for high-fidelity experience tracking.
            </p>
          </div>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";

export function EducationSection() {
  return (
    <SectionContainer id="education">
      <SectionHeading title="Education" subtitle="Academics" />
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <AnimWrapper variant="fade-up">
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Degree Placeholder</h3>
            <span className="text-xs text-primary font-semibold block mb-2 font-mono">Institution name &bull; Graduation Year</span>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              This space will display formal academic credentials, degrees, and core coursework in Phase 2.
            </p>
          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

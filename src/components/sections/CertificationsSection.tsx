"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";

export function CertificationsSection() {
  return (
    <SectionContainer id="certifications">
      <SectionHeading title="Certifications" subtitle="Credentials" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <AnimWrapper variant="fade-up" delay={0.1}>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Certification Title</h3>
            <span className="text-xs text-primary font-semibold block mb-2 font-mono">Issuing Authority &bull; Date</span>
            <p className="text-xs md:text-sm text-muted-foreground">
              Professional credentials, cloud vendor badges, and specialization paths will be displayed here in Phase 2.
            </p>
          </GlassCard>
        </AnimWrapper>
        <AnimWrapper variant="fade-up" delay={0.2}>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Certification Title</h3>
            <span className="text-xs text-accent font-semibold block mb-2 font-mono">Issuing Authority &bull; Date</span>
            <p className="text-xs md:text-sm text-muted-foreground">
              Configured with interactive hover cards and credential verification link structures.
            </p>
          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

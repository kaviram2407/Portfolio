"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <SectionContainer id="certifications">
      <SectionHeading title="Certifications" subtitle="Credentials" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <AnimWrapper variant="fade-up" delay={0.1}>
          <GlassCard interactive={true} className="border-white/5 bg-white/[0.01]">
            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Award className="size-5" />
              </div>
              <div>
                <span className="text-[9px] font-bold font-mono text-primary uppercase block mb-1">
                  Technical Program &bull; 2026
                </span>
                <h3 className="text-base font-bold text-white mb-2 leading-tight">
                  MSSQL, Python, ADF, Databricks, Power BI
                </h3>
                <h4 className="text-xs text-muted-foreground font-semibold font-mono">
                  Bootcamp 2026 Training Path
                </h4>
              </div>
            </div>
          </GlassCard>
        </AnimWrapper>

        <AnimWrapper variant="fade-up" delay={0.2}>
          <GlassCard interactive={true} className="border-white/5 bg-white/[0.01]">
            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <Award className="size-5" />
              </div>
              <div>
                <span className="text-[9px] font-bold font-mono text-cyan-400 uppercase block mb-1">
                  Professional Certification
                </span>
                <h3 className="text-base font-bold text-white mb-2 leading-tight">
                  DI Certification
                </h3>
                <h4 className="text-xs text-muted-foreground font-semibold font-mono">
                  Systech Solutions, Inc.
                </h4>
              </div>
            </div>
          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

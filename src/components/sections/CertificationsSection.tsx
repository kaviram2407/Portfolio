"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { GlassCard } from "../foundations/GlassCard";
import { ThemeButton } from "../foundations/ThemeButton";
import { ShieldCheck, Award, ExternalLink, CheckCircle2 } from "lucide-react";

export function CertificationsSection() {
  const credentialUrl =
    "https://learn.microsoft.com/api/credentials/share/en-gb/KaviramSudharajanainar-6525/B3FA9AF39FCA0594?sharingId=5FD6155A391E8E4";

  return (
    <SectionContainer id="certifications">
      <SectionHeading title="Credentials" subtitle="Certifications & Training" />

      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Primary Verified Certification Card */}
        <AnimWrapper variant="fade-up" delay={0.1}>
          <GlassCard
            interactive={true}
            glowColor="rgba(6, 182, 212, 0.2)"
            className="p-6 md:p-8 border border-cyan-500/30 bg-[#060b18]/60 relative overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.1)]"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="flex gap-4 items-start">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                  <ShieldCheck className="size-7" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-extrabold font-mono text-cyan-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-1">
                      <CheckCircle2 className="size-3 text-cyan-400" />
                      Officially Verified Credential
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight">
                    Microsoft Certified: <br className="hidden sm:inline" />
                    Fabric Data Engineer Associate
                  </h3>
                  <p className="text-xs font-semibold font-mono text-muted-foreground uppercase tracking-wider">
                    Issuer: <span className="text-white">Microsoft</span>
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <a
                  href={credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto"
                >
                  <ThemeButton
                    variant="default"
                    size="lg"
                    glow
                    glowColor="cyan"
                    className="w-full md:w-auto gap-2 cursor-pointer font-bold uppercase tracking-wider text-xs bg-cyan-500 hover:bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="size-4" />
                  </ThemeButton>
                </a>
              </div>
            </div>
          </GlassCard>
        </AnimWrapper>

        {/* Secondary / Additional Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimWrapper variant="fade-up" delay={0.2}>
            <div className="p-5 rounded-2xl border border-white/5 bg-[#05050a]/40 flex gap-4 items-start hover:border-white/10 transition-all duration-300 h-full">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <Award className="size-5" />
              </div>
              <div>
                <span className="text-[9px] font-bold font-mono text-cyan-400 uppercase block mb-1">
                  Professional Credentials &bull; Systech Solutions
                </span>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  DI Certification
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Professional validation of cloud data ingestion and ETL modeling capabilities at Systech Solutions.
                </p>
              </div>
            </div>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" delay={0.3}>
            <div className="p-5 rounded-2xl border border-white/5 bg-[#05050a]/40 flex gap-4 items-start hover:border-white/10 transition-all duration-300 h-full">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Award className="size-5" />
              </div>
              <div>
                <span className="text-[9px] font-bold font-mono text-primary uppercase block mb-1">
                  Technical Training &bull; 2026
                </span>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  MSSQL, Python, ADF, Databricks, Power BI
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bootcamp 2026 core training covering relational engines, cloud orchestrations, conformed ETL, and DirectQuery dashboards.
                </p>
              </div>
            </div>
          </AnimWrapper>
        </div>
      </div>
    </SectionContainer>
  );
}


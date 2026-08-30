"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <SectionContainer id="certifications">
      <SectionHeading title="Credentials" subtitle="Certifications & Training" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        
        <AnimWrapper variant="fade-up" delay={0.1}>
          <div className="p-5 rounded-2xl border border-white/5 bg-[#05050a]/40 flex gap-4 items-start hover:border-white/10 transition-all duration-300">
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

        <AnimWrapper variant="fade-up" delay={0.2}>
          <div className="p-5 rounded-2xl border border-white/5 bg-[#05050a]/40 flex gap-4 items-start hover:border-white/10 transition-all duration-300">
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

      </div>
    </SectionContainer>
  );
}

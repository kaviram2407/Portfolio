"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";

interface TechStage {
  step: string;
  title: string;
  desc: string;
}

export function TimelineSection() {
  const systechStages: TechStage[] = [
    {
      step: "01",
      title: "Source Analysis",
      desc: "Perform data profiling, analyze schemas, and compile source-to-target mapping logic specifying datatype conformance rules."
    },
    {
      step: "02",
      title: "Data Modeling",
      desc: "Construct conceptual, logical, and physical models (star-schemas) matching reporting search criteria."
    },
    {
      step: "03",
      title: "Ingestion Pipeline",
      desc: "Configure ADF copy activities and templates to replicate operational source tables into Bronze Parquet landing folders."
    },
    {
      step: "04",
      title: "Transformation Layers",
      desc: "Write PySpark scripts in Databricks to clean values, resolve keys, and compute conformed Silver Delta Lake tables with SCD Type 1 & 2 history."
    },
    {
      step: "05",
      title: "Data Quality Assurance",
      desc: "Enforce null constraints, run integrity checks, and write automated tests verifying incremental ingestion counts."
    },
    {
      step: "06",
      title: "Analytics Integration",
      desc: "Build Gold relational layers, configure DirectQuery semantic models, and design interactive dashboards in Power BI."
    }
  ];

  return (
    <SectionContainer id="timeline">
      <SectionHeading title="Where I've Worked" subtitle="Experience Timeline" />

      {/* Main Experience Wrapper */}
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Banner Block for Systech Role: Data Engineer (Associate) */}
        <AnimWrapper variant="fade-up" className="mb-10">
          <div className="p-6 rounded-2xl border border-white/5 bg-[#0a0914]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-widest">
                Jul 2026 – Present &bull; Chennai, India
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide mt-1">
                Data Engineer (Associate)
              </h3>
              <h4 className="text-sm font-semibold text-muted-foreground font-mono uppercase tracking-wide">
                Systech Solutions, Inc.
              </h4>
            </div>
            <div className="text-left md:text-right shrink-0">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-primary/10 text-primary border border-primary/20 uppercase font-mono">
                Full-Time Role
              </span>
            </div>
          </div>
        </AnimWrapper>

        {/* 6-Stage Grid Progression */}
        <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono text-center mb-8">
          Engineering Progression Workflow (Associate Role)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-16">
          {systechStages.map((stage, idx) => (
            <AnimWrapper key={stage.step} variant="fade-up" delay={idx * 0.08}>
              <GlassCard
                interactive={true}
                glowColor="rgba(139, 92, 246, 0.08)"
                className="p-5 border-white/5 bg-[#07060c]/40 hover:bg-[#07060c]/80 flex gap-4 h-full"
              >
                {/* Stage number bubble */}
                <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-extrabold text-primary shrink-0 select-none">
                  {stage.step}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1.5">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </GlassCard>
            </AnimWrapper>
          ))}
        </div>

        {/* Trainee Banner Block */}
        <AnimWrapper variant="fade-up" className="mb-16">
          <div className="p-6 rounded-2xl border border-white/5 bg-[#0a0914]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-widest">
                Jan 2026 – Jul 2026 &bull; Chennai, India
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide mt-1">
                Trainee
              </h3>
              <h4 className="text-sm font-semibold text-muted-foreground font-mono uppercase tracking-wide">
                Systech Solutions, Inc.
              </h4>
            </div>
            <div className="text-left md:text-right shrink-0">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase font-mono">
                Bootcamp Training
              </span>
            </div>
          </div>
          <div className="border-l-2 border-primary/20 pl-4 mt-4 font-mono text-xs text-muted-foreground leading-relaxed">
            Completed Data Integration (DI) certification bootcamp training at Systech Solutions. Built foundational competencies in Microsoft SQL Server database design, Python application scripting, Azure Data Factory ETL pipeline templates, Azure Databricks PySpark transformations, and Power BI dashboard delivery.
          </div>
        </AnimWrapper>

        {/* Previous Internships Timeline */}
        <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono text-center mb-8">
          Previous Internships
        </h4>

        <div className="relative pl-6 border-l border-primary/20 flex flex-col gap-8 max-w-2xl mx-auto">
          
          <AnimWrapper variant="fade-up" delay={0.1}>
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 size-3.5 rounded-full bg-[#27263b] border-2 border-background" />
              <div className="flex flex-col gap-1.5 text-left">
                <div>
                  <span className="text-[9px] font-bold font-mono text-primary uppercase">
                    2024 &bull; Chennai, India
                  </span>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    SDE Intern &bull; <span className="text-muted-foreground font-mono text-xs">Virtusa Consultancy</span>
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Contributed to React.js frontend structures for an insurance policy portal, optimized layouts, and handled cross-device debugging.
                </p>
              </div>
            </div>
          </AnimWrapper>

          <AnimWrapper variant="fade-up" delay={0.2}>
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 size-3.5 rounded-full bg-[#27263b] border-2 border-background" />
              <div className="flex flex-col gap-1.5 text-left">
                <div>
                  <span className="text-[9px] font-bold font-mono text-primary uppercase">
                    2024 &bull; Chennai, India
                  </span>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Data Science Intern &bull; <span className="text-muted-foreground font-mono text-xs">Besant Technologies</span>
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Conducted data analysis and profiling in Python (Pandas, NumPy, Matplotlib) and designed KPI monitoring reports in Power BI.
                </p>
              </div>
            </div>
          </AnimWrapper>

        </div>

      </div>
    </SectionContainer>
  );
}

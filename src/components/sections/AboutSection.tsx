"use client";

import React, { useState } from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { cn } from "@/lib/utils";
import { ArrowRight, Database, Cloud, ShieldCheck, BarChart3, Cpu } from "lucide-react";

interface ProgressionStep {
  title: string;
  subtitle: string;
  desc: string;
}

interface FocusItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export function AboutSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const progression: ProgressionStep[] = [
    {
      title: "Computer Science",
      subtitle: "Integrated M.Tech",
      desc: "Deep study in algorithms, data structures, and database engines."
    },
    {
      title: "Data Engineering",
      subtitle: "Pipeline Design",
      desc: "Hands-on conformed ETL pipelines and medallion workflows."
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "Azure Services",
      desc: "Orchestration in ADF, ADLS Gen2, Databricks, and Fabric."
    },
    {
      title: "AI / GenAI Integration",
      subtitle: "RAG & LLMs",
      desc: "Calculating dense vector embeddings and pgvector storage."
    }
  ];

  const focusAreas: FocusItem[] = [
    {
      title: "Data Pipelines",
      desc: "Robust medallion flow designs using Databricks and PySpark.",
      icon: <Database className="size-5" />,
      color: "rgba(139,92,246,0.15)"
    },
    {
      title: "Cloud Data Platforms",
      desc: "Serverless pipelines and ADF orchestration on Microsoft Azure.",
      icon: <Cloud className="size-5" />,
      color: "rgba(6,182,212,0.15)"
    },
    {
      title: "Data Quality",
      desc: "Logical schema enforcement, constraint checking, and profiling.",
      icon: <ShieldCheck className="size-5" />,
      color: "rgba(16,185,129,0.15)"
    },
    {
      title: "Analytics",
      desc: "Star-schema dimensional modeling and Power BI reporting.",
      icon: <BarChart3 className="size-5" />,
      color: "rgba(245,158,11,0.15)"
    },
    {
      title: "Generative AI",
      desc: "Retrieval-Augmented Generation (RAG) and OpenAI APIs.",
      icon: <Cpu className="size-5" />,
      color: "rgba(244,63,94,0.15)"
    }
  ];

  return (
    <SectionContainer id="about">
      <SectionHeading title="Who I Am" subtitle="Biography" />
      
      {/* 1. Visual Progression Timeline Chain */}
      <div className="mb-20 w-full">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono text-center mb-10">
          Professional Evolution
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch relative">
          {progression.map((step, index) => {
            const isHovered = activeStep === index;
            
            return (
              <div key={step.title} className="flex flex-col relative h-full">
                
                {/* Horizontal connector line on desktop */}
                {index < progression.length - 1 && (
                  <div className="absolute right-[-12px] top-6 w-6 h-px bg-white/5 hidden md:block" />
                )}

                <AnimWrapper variant="fade-up" delay={index * 0.08} className="h-full">
                  <div
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={cn(
                      "p-5 rounded-2xl border bg-white/[0.01] transition-all duration-500 h-full flex flex-col justify-between cursor-default",
                      isHovered
                        ? "border-primary/40 bg-primary/[0.02] shadow-[0_0_15px_rgba(139,92,246,0.15)] -translate-y-1"
                        : "border-white/5"
                    )}
                  >
                    <div>
                      <span className="text-[9px] font-bold font-mono text-primary uppercase block mb-1">
                        Phase 0{index + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-1">
                        {step.title}
                      </h4>
                      <h5 className="text-[10px] font-semibold text-muted-foreground font-mono uppercase mb-4">
                        {step.subtitle}
                      </h5>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </AnimWrapper>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Engineering Focus Area */}
      <div className="w-full">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono text-center mb-10">
          Core Engineering Focus
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {focusAreas.map((focus, index) => (
            <AnimWrapper key={focus.title} variant="fade-up" delay={index * 0.06}>
              <GlassCard
                interactive={true}
                glowColor={focus.color}
                className="p-5 flex flex-col justify-between h-full border-white/5 bg-white/[0.01] hover:border-white/10"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 inline-block text-white/70 mb-4 group-hover:text-white transition-colors">
                    {focus.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    {focus.title}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                  {focus.desc}
                </p>
              </GlassCard>
            </AnimWrapper>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

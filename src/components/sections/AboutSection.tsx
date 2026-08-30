"use client";

import React, { useState } from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { cn } from "@/lib/utils";
import { Database, Cloud, ShieldCheck, BarChart3, Cpu } from "lucide-react";

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
      subtitle: "Integrated M.Tech Foundation",
      desc: "Integrated M.Tech study in database engines, structures, and core software algorithms."
    },
    {
      title: "Data Engineering",
      subtitle: "Pipeline Design",
      desc: "Hands-on conformed ELT pipelines, key deduplications, and medallion workflows."
    },
    {
      title: "Cloud Data Platforms",
      subtitle: "Azure & Databricks Scale",
      desc: "Designing lakehouses and orchestrating pipelines using ADF, ADLS Gen2, Databricks, and Fabric."
    },
    {
      title: "AI / GenAI",
      subtitle: "RAG & LLM Integration",
      desc: "Exploring RAG workflows using embeddings, pgvector similarity search, and Azure OpenAI."
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
      
      {/* 1. Main Bio Layout: Image left, progression timeline right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 w-full">
        
        {/* Left Side: Plaid shirt portrait cutout with laptop & coffee */}
        <div className="lg:col-span-5 col-span-12 flex justify-center">
          <AnimWrapper variant="scale-up" className="w-full max-w-sm">
            <GlassCard interactive={true} className="p-4 border-white/5 bg-[#05050a]/40 relative overflow-hidden group">
              
              {/* Decorative glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="rounded-xl overflow-hidden bg-[#07060c]/80 flex justify-center items-center relative z-10 border border-white/5">
                <img
                  src="/kaviram_about.png"
                  alt="Kaviram Sudharajanainar Portrait"
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_12px_rgba(139,92,246,0.25)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </GlassCard>
          </AnimWrapper>
        </div>

        {/* Right Side: Professional Evolution Timeline Tree */}
        <div className="lg:col-span-7 col-span-12 flex flex-col">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">
            Professional Summary
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-8 border-l-2 border-primary/20 pl-4">
            I am a Data Engineer (Associate) at Systech Solutions, focused on building reliable data pipelines, transforming data using cloud-based platforms, and working with modern data engineering technologies. My work spans data ingestion, transformation, data quality, dimensional modeling, analytics, and emerging AI/GenAI applications.
          </p>

          <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-6">
            Evolution Path
          </h3>

          <div className="relative pl-6 border-l border-primary/20 flex flex-col gap-6">
            {progression.map((step, index) => {
              const isHovered = activeStep === index;
              
              return (
                <div
                  key={step.title}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="relative group cursor-default"
                >
                  {/* Circle indicator on left line */}
                  <div className={cn(
                    "absolute -left-[31px] top-1.5 size-3.5 rounded-full border-2 border-background transition-colors duration-300",
                    isHovered ? "bg-primary" : "bg-[#27263b]"
                  )} />

                  <AnimWrapper variant="fade-up" delay={index * 0.08}>
                    <div className={cn(
                      "p-4 rounded-xl border bg-white/[0.01] transition-all duration-300",
                      isHovered
                        ? "border-primary/40 bg-primary/[0.02] shadow-[0_0_12px_rgba(139,92,246,0.1)] translate-x-1"
                        : "border-white/5"
                    )}>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                          {step.title}
                        </h4>
                        <span className="text-[8px] font-bold font-mono text-primary uppercase">
                          Phase 0{index + 1} &bull; {step.subtitle}
                        </span>
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

      </div>

      {/* 2. Core Engineering Focus Area */}
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

"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { Database, Cloud, Cpu, Server } from "lucide-react";

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionHeading title="About Me" subtitle="Biography" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Brief Introduction */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <AnimWrapper variant="slide-right" className="h-full">
            <GlassCard className="h-full flex flex-col justify-center border-white/5 bg-white/[0.01]">
              <h3 className="text-xl font-bold text-white mb-6">
                Professional Journey
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                I am a highly motivated Computer Science and Engineering graduate with an Integrated M.Tech degree from Sri Krishna College of Engineering and Technology. My primary engineering focus revolves around Data Engineering, Azure Cloud infrastructure, and artificial intelligence implementations.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                I have hands-on experience designing and operating cloud-scale data pipelines. My skill set covers robust ingestion, medallion transformation workflows, data quality validation, and ETL orchestration using tools like Databricks, PySpark, Delta Lake, Azure Data Factory, and Microsoft Fabric.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Beyond traditional analytics pipelines, I am exposed to modern Generative AI implementations, including prompt engineering and RAG patterns, enabling intelligence layers on top of enterprise data assets.
              </p>
            </GlassCard>
          </AnimWrapper>
        </div>

        {/* Right Column: Core Disciplines */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-6">
          <AnimWrapper variant="slide-left" delay={0.15}>
            <GlassCard interactive glowColor="rgba(6,182,212,0.1)" className="p-5 flex gap-4 items-start border-white/5 bg-white/[0.01]">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Database className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1.5 text-sm md:text-base">Data Pipelines & ETL</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Design end-to-end medallion pipelines (Bronze → Silver → Gold) incorporating PySpark, Delta Lake tables, and ADF.
                </p>
              </div>
            </GlassCard>
          </AnimWrapper>

          <AnimWrapper variant="slide-left" delay={0.3}>
            <GlassCard interactive glowColor="rgba(139,92,246,0.1)" className="p-5 flex gap-4 items-start border-white/5 bg-white/[0.01]">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <Cloud className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1.5 text-sm md:text-base">Azure Cloud Ecosystem</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Orchestrate data operations using Azure Databricks, Data Factory, ADLS Gen2, and Microsoft Fabric.
                </p>
              </div>
            </GlassCard>
          </AnimWrapper>

          <AnimWrapper variant="slide-left" delay={0.45}>
            <GlassCard interactive glowColor="rgba(244,63,94,0.1)" className="p-5 flex gap-4 items-start border-white/5 bg-white/[0.01]">
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <Cpu className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1.5 text-sm md:text-base">Generative AI & ML</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Implement Retrieval-Augmented Generation (RAG) pipelines, Prompt Engineering, and NLP models.
                </p>
              </div>
            </GlassCard>
          </AnimWrapper>
        </div>

      </div>
    </SectionContainer>
  );
}

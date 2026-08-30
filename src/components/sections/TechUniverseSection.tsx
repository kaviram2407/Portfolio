"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";

export function TechUniverseSection() {
  return (
    <SectionContainer id="tech-universe">
      <SectionHeading title="Technology Universe" subtitle="Skills & Stack" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimWrapper variant="fade-up" delay={0.1}>
          <GlassCard glowColor="rgba(6,182,212,0.12)">
            <h3 className="text-lg font-semibold mb-4 text-white">Data Engineering</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Azure Databricks, ADF, PySpark, Delta Lake, Fabric. In the next phase, this category will map to floating interactive nodes.
            </p>
          </GlassCard>
        </AnimWrapper>
        <AnimWrapper variant="fade-up" delay={0.2}>
          <GlassCard glowColor="rgba(139,92,246,0.12)">
            <h3 className="text-lg font-semibold mb-4 text-white">AI & Machine Learning</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Azure OpenAI, RAG pipelines, Vector databases, LLM orchestration, NLP, and regression/classification ML models.
            </p>
          </GlassCard>
        </AnimWrapper>
        <AnimWrapper variant="fade-up" delay={0.3}>
          <GlassCard glowColor="rgba(244,63,94,0.12)">
            <h3 className="text-lg font-semibold mb-4 text-white">Programming & Core</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Python scripting, complex SQL queries, Java runtime systems, and clean enterprise software engineering principles.
            </p>
          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

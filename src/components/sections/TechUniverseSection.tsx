"use client";

import React, { useState } from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { cn } from "@/lib/utils";
import { Database, Terminal, ShieldAlert, BarChart3, Brain, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  glowColor: string;
  skills: string[];
}

export function TechUniverseSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      title: "Data Engineering",
      icon: <Database className="size-5 text-cyan-400" />,
      glowColor: "rgba(6,182,212,0.15)",
      skills: ["Azure Databricks", "Azure Data Factory", "PySpark", "Delta Lake", "ADLS Gen2", "Microsoft Fabric"],
    },
    {
      title: "Programming",
      icon: <Terminal className="size-5 text-violet-400" />,
      glowColor: "rgba(139,92,246,0.15)",
      skills: ["Python", "SQL", "PySpark", "Java"],
    },
    {
      title: "Databases",
      icon: <ShieldAlert className="size-5 text-emerald-400 rotate-180" />, // using shield alert upside down as custom database container visual
      glowColor: "rgba(16,185,129,0.15)",
      skills: ["SQL Server", "PostgreSQL", "MySQL"],
    },
    {
      title: "Analytics",
      icon: <BarChart3 className="size-5 text-amber-400" />,
      glowColor: "rgba(245,158,11,0.15)",
      skills: ["Power BI", "HEX"],
    },
    {
      title: "AI / GenAI",
      icon: <Brain className="size-5 text-rose-400" />,
      glowColor: "rgba(244,63,94,0.15)",
      skills: ["Generative AI", "Prompt Engineering", "RAG", "NLP", "Machine Learning"],
    },
    {
      title: "Tools & Git",
      icon: <Wrench className="size-5 text-blue-400" />,
      glowColor: "rgba(59,130,246,0.15)",
      skills: ["Git", "GitHub"],
    },
  ];

  // Helper to check if a skill is related or identical to the hovered one
  const isSkillActive = (skill: string) => {
    if (!hoveredSkill) return false;
    
    const hLower = hoveredSkill.toLowerCase();
    const sLower = skill.toLowerCase();
    
    // Exact match or partial match (e.g. PySpark matches in Programming & DE)
    return sLower === hLower || sLower.includes(hLower) || hLower.includes(sLower);
  };

  return (
    <SectionContainer id="tech-universe">
      <SectionHeading title="Technology Universe" subtitle="Skills Matrix" />
      
      <div className="text-center mb-8">
        <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Hover over individual skill nodes below to visualize cross-domain relations and system dependencies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        
        {categories.map((cat, idx) => (
          <AnimWrapper key={cat.title} variant="fade-up" delay={idx * 0.08}>
            <GlassCard
              glowColor={cat.glowColor}
              className="h-full flex flex-col justify-between border-white/5 bg-white/[0.01] hover:border-white/10"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-wide uppercase font-mono">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Nodes List */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const active = isSkillActive(skill);
                    const isAnyHovered = hoveredSkill !== null;
                    
                    return (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={cn(
                          "px-3 py-1.5 rounded-xl border text-xs font-mono font-medium tracking-wide transition-all duration-300 cursor-pointer select-none",
                          active
                            ? "bg-primary/20 text-white border-primary/50 shadow-[0_0_12px_rgba(139,92,246,0.4)] scale-[1.04]"
                            : isAnyHovered
                            ? "bg-white/[0.02] text-muted-foreground/40 border-white/[0.02]"
                            : "bg-white/[0.04] text-muted-foreground border-white/5 hover:border-white/20 hover:text-white hover:bg-white/[0.06]"
                        )}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </AnimWrapper>
        ))}
      </div>
    </SectionContainer>
  );
}

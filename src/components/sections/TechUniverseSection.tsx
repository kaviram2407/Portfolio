"use client";

import React, { useState } from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { cn } from "@/lib/utils";

interface SkillNode {
  name: string;
  desc: string;
  category: "primary" | "secondary" | "ai";
  relations: string[];
}

export function TechUniverseSection() {
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);

  const skills: SkillNode[] = [
    // PRIMARY STACK
    {
      name: "Azure Databricks",
      desc: "Managed Apache Spark analytics platform used for scalable conformed data transformations and Delta table computations.",
      category: "primary",
      relations: ["PySpark", "Delta Lake", "Python"]
    },
    {
      name: "Azure Data Factory",
      desc: "Cloud-scale serverless ETL and orchestration tool for importing source transaction tables into the Bronze landing layer.",
      category: "primary",
      relations: ["Delta Lake", "SQL Server"]
    },
    {
      name: "PySpark",
      desc: "Python API for Apache Spark. Utilized for scalable, conformed cleansing, transformations, and SCD calculations.",
      category: "primary",
      relations: ["Azure Databricks", "Python", "Delta Lake"]
    },
    {
      name: "Delta Lake",
      desc: "Storage layer offering ACID transactions and schema validation. Supports historical SCD Type 1/2 tracking.",
      category: "primary",
      relations: ["Azure Databricks", "PySpark", "Azure Data Factory"]
    },
    {
      name: "SQL",
      desc: "Structured Query Language. Core engine queries for logical data transformations, profiling, and view aggregates.",
      category: "primary",
      relations: ["SQL Server", "PostgreSQL", "MySQL"]
    },
    {
      name: "Python",
      desc: "Primary backend language for automation scripts, data transformations, PySpark jobs, and RAG pipelines.",
      category: "primary",
      relations: ["PySpark", "Azure Databricks", "Git & GitHub"]
    },
    {
      name: "Microsoft Fabric",
      desc: "SaaS-based unified analytics ecosystem, merging storage (OneLake), compute (Synapse), and visual layers (Power BI).",
      category: "primary",
      relations: ["ADLS Gen2", "Power BI", "Delta Lake"]
    },
    
    // SECONDARY STACK
    {
      name: "Power BI",
      desc: "BI dashboard reporting platform connected directly to Gold semantic star schemas via DirectQuery.",
      category: "secondary",
      relations: ["Microsoft Fabric", "Delta Lake"]
    },
    {
      name: "ADLS Gen2",
      desc: "Highly scalable, secure object storage for hosting Bronze, Silver, and Gold layers of the Medallion lakehouse.",
      category: "secondary",
      relations: ["Azure Data Factory", "Azure Databricks", "Microsoft Fabric"]
    },
    {
      name: "PostgreSQL",
      desc: "Open-source SQL database. Acts as the core vector store utilizing extension indexes for RAG embeddings.",
      category: "secondary",
      relations: ["SQL", "RAG"]
    },
    {
      name: "MySQL",
      desc: "Relational database management system supporting structured transactional application schemas.",
      category: "secondary",
      relations: ["SQL"]
    },
    {
      name: "SQL Server",
      desc: "Relational database server hosting source operational tables replicated by ADF pipelines.",
      category: "secondary",
      relations: ["SQL", "Azure Data Factory"]
    },
    {
      name: "Git & GitHub",
      desc: "Distributed version control system and repository hosting platform for pipeline scripts and Continuous Integration.",
      category: "secondary",
      relations: ["Python"]
    },

    // AI & GENAI
    {
      name: "RAG",
      desc: "Retrieval-Augmented Generation. Architecture combining semantic document lookups with LLM prompts.",
      category: "ai",
      relations: ["Azure OpenAI", "PostgreSQL", "NLP"]
    },
    {
      name: "Azure OpenAI",
      desc: "Secure deployment of GPT models and text-embedding algorithms inside the Azure cloud ecosystem.",
      category: "ai",
      relations: ["RAG", "Generative AI"]
    },
    {
      name: "Generative AI",
      desc: "Core LLM models and instruction frameworks used to automate proposal responses and context merges.",
      category: "ai",
      relations: ["Azure OpenAI", "RAG"]
    },
    {
      name: "NLP",
      desc: "Natural Language Processing algorithms used for semantic chunking, keyword extraction, and document parsing.",
      category: "ai",
      relations: ["Generative AI", "RAG"]
    },
    {
      name: "Machine Learning",
      desc: "Supervised and unsupervised models used for classification, predictive analysis, and regression tasks.",
      category: "ai",
      relations: ["Python", "SQL"]
    }
  ];

  const categories = [
    { id: "primary", label: "Primary Stack" },
    { id: "secondary", label: "Secondary Stack" },
    { id: "ai", label: "AI & GenAI Stack" }
  ];

  const getRelationsForActiveNode = () => {
    if (!hoveredNode) return [];
    return [hoveredNode.name, ...hoveredNode.relations];
  };

  const activeRelations = getRelationsForActiveNode();

  return (
    <SectionContainer id="tech-universe">
      <SectionHeading title="Technology Universe" subtitle="What I Build With" />

      {/* Central Identity Radial Display */}
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="relative p-0.5 rounded-full bg-gradient-to-r from-primary to-cyan-500 animate-pulse-slow">
          <div className="px-8 py-3 bg-[#05050a] rounded-full border border-white/5 flex items-center justify-center">
            <span className="text-sm font-extrabold tracking-widest text-white uppercase font-mono">
              KAVIRAM SUDHARAJANAINAR
            </span>
          </div>
        </div>
        <p className="text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest mt-4">
          Core Stack Topology Map
        </p>
      </div>

      {/* Main Graph Grid (Prioritized 3-Column Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-stretch max-w-5xl mx-auto">
        {categories.map((cat, idx) => {
          const categoryNodes = skills.filter((s) => s.category === cat.id);
          
          return (
            <AnimWrapper key={cat.id} variant="fade-up" delay={idx * 0.08} className="h-full">
              <GlassCard
                interactive={false}
                className="p-6 h-full flex flex-col border-white/5 bg-white/[0.01]"
              >
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 font-mono border-b border-white/5 pb-2 text-primary">
                  {cat.label}
                </h4>

                <div className="flex flex-wrap gap-2.5">
                  {categoryNodes.map((node) => {
                    const isActive = hoveredNode !== null && activeRelations.includes(node.name);
                    const isHoveredSelf = hoveredNode?.name === node.name;
                    const isAnyHovered = hoveredNode !== null;

                    return (
                      <div
                        key={node.name}
                        onMouseEnter={() => setHoveredNode(node)}
                        onMouseLeave={() => setHoveredNode(null)}
                        className={cn(
                          "px-3 py-2 rounded-xl border text-xs font-mono font-medium tracking-wide transition-all duration-300 cursor-pointer select-none",
                          isHoveredSelf
                            ? "bg-primary text-white border-primary shadow-[0_0_12px_rgba(139,92,246,0.5)] scale-[1.03]"
                            : isActive
                            ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_8px_rgba(6,182,212,0.2)]"
                            : isAnyHovered
                            ? "opacity-35 border-transparent text-muted-foreground/40"
                            : "bg-white/[0.02] text-muted-foreground border-white/5 hover:border-white/20 hover:text-white"
                        )}
                      >
                        {node.name}
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </AnimWrapper>
          );
        })}
      </div>

      {/* Technical Use Case Display Console */}
      <div className="max-w-4xl mx-auto w-full">
        <GlassCard
          interactive={false}
          className="p-5 border border-white/5 bg-[#0a0914]/65 min-h-[90px] flex items-center justify-center font-mono"
        >
          {hoveredNode ? (
            <div className="w-full text-left">
              <span className="text-[10px] font-bold text-primary uppercase block mb-1">
                SYSTEM_NODE: {hoveredNode.name}
              </span>
              <p className="text-xs md:text-sm text-white leading-relaxed">
                {hoveredNode.desc}
              </p>
            </div>
          ) : (
            <div className="text-center text-xs text-muted-foreground">
              [ Hover over stack components above to initialize technical console description ]
            </div>
          )}
        </GlassCard>
      </div>

    </SectionContainer>
  );
}

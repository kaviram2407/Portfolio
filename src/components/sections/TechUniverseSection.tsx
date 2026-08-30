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
  category: "de" | "ai" | "prog" | "analytics" | "cloud" | "tools";
  relations: string[]; // Related skills to highlight
}

export function TechUniverseSection() {
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);

  const skills: SkillNode[] = [
    // Data Engineering
    {
      name: "Azure Databricks",
      desc: "Managed Apache Spark analytics platform used for scalable conformed data transformations and Delta table computations.",
      category: "de",
      relations: ["PySpark", "Delta Lake", "Python"]
    },
    {
      name: "Azure Data Factory",
      desc: "Cloud-scale serverless ETL and orchestration tool for importing source transaction tables into the Bronze landing layer.",
      category: "de",
      relations: ["Delta Lake", "SQL Server"]
    },
    {
      name: "PySpark",
      desc: "Python API for Apache Spark. Utilized for scalable, conformed cleansing, transformations, and SCD calculations.",
      category: "de",
      relations: ["Azure Databricks", "Python", "Delta Lake"]
    },
    {
      name: "Delta Lake",
      desc: "Storage layer offering ACID transactions and schema validation. Supports historical SCD Type 1/2 tracking.",
      category: "de",
      relations: ["Azure Databricks", "PySpark", "Azure Data Factory"]
    },
    {
      name: "ADLS Gen2",
      desc: "Highly scalable, secure object storage for hosting Bronze, Silver, and Gold layers of the Medallion lakehouse.",
      category: "de",
      relations: ["Azure Data Factory", "Azure Databricks", "Microsoft Fabric"]
    },
    {
      name: "Microsoft Fabric",
      desc: "SaaS-based unified analytics ecosystem, merging storage (OneLake), compute (Synapse), and visual layers (Power BI).",
      category: "de",
      relations: ["ADLS Gen2", "Power BI", "Delta Lake"]
    },
    
    // AI / GenAI
    {
      name: "Generative AI",
      desc: "Core models and prompt systems used to automate content extraction and proposal generation.",
      category: "ai",
      relations: ["Azure OpenAI", "RAG", "Prompt Engineering"]
    },
    {
      name: "Prompt Engineering",
      desc: "Optimizing instructions and structure within LLM contexts to extract structured responses from RFP text blocks.",
      category: "ai",
      relations: ["Generative AI", "Azure OpenAI", "RAG"]
    },
    {
      name: "RAG",
      desc: "Retrieval-Augmented Generation. Architecture combining semantic document lookups with LLM prompts.",
      category: "ai",
      relations: ["Azure OpenAI", "PostgreSQL", "pgvector"]
    },
    {
      name: "NLP",
      desc: "Natural Language Processing algorithms used for semantic chunking, keyword extraction, and document parsing.",
      category: "ai",
      relations: ["Generative AI", "RAG", "Azure OpenAI"]
    },
    {
      name: "Azure OpenAI",
      desc: "Secure deployment of GPT models and text-embedding algorithms inside the Azure cloud ecosystem.",
      category: "ai",
      relations: ["RAG", "Generative AI", "Prompt Engineering"]
    },

    // Programming
    {
      name: "Python",
      desc: "Primary backend language for automation scripts, data transformations, PySpark jobs, and RAG pipelines.",
      category: "prog",
      relations: ["PySpark", "Azure Databricks", "Git"]
    },
    {
      name: "SQL",
      desc: "Structured Query Language. Core engine queries for logical data transformations, profiling, and view aggregates.",
      category: "prog",
      relations: ["SQL Server", "PostgreSQL", "MySQL"]
    },
    {
      name: "Java",
      desc: "Object-oriented language used for enterprise runtimes and implementing algorithmic data structures.",
      category: "prog",
      relations: ["SQL", "Git"]
    },

    // Databases
    {
      name: "SQL Server",
      desc: "Relational database server hosting source operational tables replicated by ADF pipelines.",
      category: "tools", // grouped visual databases
      relations: ["SQL", "Azure Data Factory"]
    },
    {
      name: "PostgreSQL",
      desc: "Open-source SQL database. Acts as the core vector store utilizing extension indexes for RAG embeddings.",
      category: "tools",
      relations: ["SQL", "pgvector", "RAG"]
    },
    {
      name: "MySQL",
      desc: "Relational database management system supporting structured transactional application schemas.",
      category: "tools",
      relations: ["SQL"]
    },

    // Analytics
    {
      name: "Power BI",
      desc: "BI dashboard reporting platform connected directly to Gold semantic star schemas via DirectQuery.",
      category: "analytics",
      relations: ["Microsoft Fabric", "Delta Lake"]
    },
    {
      name: "HEX",
      desc: "Collaborative SQL and Python notebook environment for advanced analytics and interactive data profiling.",
      category: "analytics",
      relations: ["Python", "SQL"]
    },

    // Tools
    {
      name: "Git",
      desc: "Distributed version control system for tracking source changes and orchestrating feature branches.",
      category: "tools",
      relations: ["GitHub", "Python"]
    },
    {
      name: "GitHub",
      desc: "Repository hosting platform managing pipeline scripts, infrastructure-as-code files, and continuous integrations.",
      category: "tools",
      relations: ["Git"]
    },
    {
      name: "pgvector",
      desc: "PostgreSQL vector similarity extension used to store 1536-dimensional OpenAI embeddings for cosine searches.",
      category: "tools",
      relations: ["PostgreSQL", "RAG", "Azure OpenAI"]
    }
  ];

  // Group skills by categories
  const categories = [
    { id: "de", label: "Data Engineering" },
    { id: "ai", label: "AI & Generative AI" },
    { id: "prog", label: "Programming & Code" },
    { id: "analytics", label: "Analytics & BI" },
    { id: "tools", label: "Databases & Tools" }
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

      {/* Main Graph Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10 items-stretch">
        {categories.map((cat, idx) => {
          const categoryNodes = skills.filter((s) => s.category === cat.id);
          
          return (
            <AnimWrapper key={cat.id} variant="fade-up" delay={idx * 0.06} className="h-full">
              <GlassCard
                interactive={false}
                className="p-5 h-full flex flex-col border-white/5 bg-white/[0.01]"
              >
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5 font-mono border-b border-white/5 pb-2 text-primary">
                  {cat.label}
                </h4>

                <div className="flex flex-col gap-3">
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
                            ? "opacity-30 border-transparent text-muted-foreground/50"
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

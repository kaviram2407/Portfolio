"use client";

import React, { useState } from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { cn } from "@/lib/utils";
import { Database, FileText, ArrowRight, ShieldCheck, Cpu, Terminal, Sparkles, BarChart3, Binary, GitCommit } from "lucide-react";

interface PipelineStage {
  id: string;
  label: string;
  tech: string;
  desc: string;
}

export function ProjectsSection() {
  const [activeStarAirStage, setActiveStarAirStage] = useState<string>("BRONZE");
  const [activeRfpStage, setActiveRfpStage] = useState<string>("pgvector");

  const starAirStages: PipelineStage[] = [
    {
      id: "SQL SERVER",
      label: "SOURCE",
      tech: "Microsoft SQL Server",
      desc: "Source database holding transactional flight, airport, sales, and carrier logs."
    },
    {
      id: "ADF",
      label: "INGEST",
      tech: "Azure Data Factory",
      desc: "Triggers automated replication pipelines to copy source tables into cloud landing folders."
    },
    {
      id: "BRONZE",
      label: "BRONZE",
      tech: "ADF / ADLS Gen2",
      desc: "Raw ingestion and initial data quality validation. Stores raw schema history logs."
    },
    {
      id: "SILVER",
      label: "SILVER",
      tech: "Databricks & PySpark",
      desc: "Conformed transformations, key deduplication, data cleansing, and Slowly Changing Dimensions (SCD) handling."
    },
    {
      id: "GOLD",
      label: "GOLD",
      tech: "Delta Lake",
      desc: "Business-ready analytical star-schemas. Structured data models pre-aggregated for direct analytics query support."
    },
    {
      id: "POWER BI",
      label: "ANALYTICS",
      tech: "Power BI DirectQuery",
      desc: "Interactive dashboards detailing carrier performance, passenger sales, and flight uplift metrics."
    }
  ];

  const rfpStages: PipelineStage[] = [
    {
      id: "DOCUMENT",
      label: "RFP DOC",
      tech: "Unstructured PDF",
      desc: "Initial request for proposal requirements document uploaded by the client."
    },
    {
      id: "PyMuPDF",
      label: "PARSING",
      tech: "PyMuPDF Library",
      desc: "Extracts textual contents, structure headers, and metadata tags from documents."
    },
    {
      id: "CHUNKING",
      label: "CHUNKING",
      tech: "LangChain splitters",
      desc: "Splits extracted text segments into logical, semantic chunks preserving metadata."
    },
    {
      id: "EMBEDDINGS",
      label: "EMBEDDINGS",
      tech: "Azure OpenAI",
      desc: "Transforms semantic chunks into 1536-dimensional vector weight definitions."
    },
    {
      id: "pgvector",
      label: "VECTOR DB",
      tech: "PostgreSQL & pgvector",
      desc: "Stores text chunks and indexes vector dimensions for similarity search lookups."
    },
    {
      id: "VECTOR SEARCH",
      label: "SEARCH",
      tech: "Cosine Distance Query",
      desc: "Compares query embeddings against pgvector records to extract closely matching chunks."
    },
    {
      id: "RAG",
      label: "RAG PROMPT",
      tech: "Context Merger",
      desc: "Orchestrates prompts by merging extracted context chunks with user requirements."
    },
    {
      id: "AZURE OPENAI",
      label: "LLM SYNTHESIS",
      tech: "GPT-4o API",
      desc: "Synthesizes responses referencing specific segments of the source files."
    },
    {
      id: "SOURCED RESPONSE",
      label: "INTERFACE",
      tech: "Next.js UI Output",
      desc: "Presents structured final answers mapped back to document citations."
    }
  ];

  const starAirTech = [
    "SQL Server", "Azure Data Factory", "Azure Databricks", "PySpark", 
    "Delta Lake", "Microsoft Azure", "Power BI", "SQL", "Python"
  ];

  const rfpTech = [
    "Python", "FastAPI", "Next.js", "Azure OpenAI", "RAG", 
    "PostgreSQL", "pgvector", "Vector Embeddings", "PyMuPDF", "Antigravity"
  ];

  return (
    <SectionContainer id="projects">
      <SectionHeading title="What I've Built" subtitle="Projects Case Studies" />
      
      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        
        {/* CASE STUDY 1: STARAIR AIRLINE */}
        <AnimWrapper variant="fade-up">
          <GlassCard interactive={false} className="border-white/5 bg-[#05050a]/40 p-6 md:p-8">
            <div className="flex flex-col gap-6">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-[10px] font-bold font-mono tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full uppercase">
                    Data Engineering Case Study
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-wide mt-2">
                    StarAir Airline Data Platform
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {starAirTech.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded border border-white/5 bg-white/5 text-[9px] text-muted-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Details */}
              <div className="border-l-2 border-primary/20 pl-4 my-2">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  An aviation-focused data solution designed to process flight operation details, airport logistics, sales, and carrier logs. Built on a Medallion framework, the platform replicates operational tables, profiles schema types, enforces validation, handles historical SCD, and delivers structured star schemas for business reporting.
                </p>
              </div>

              {/* Interactive Pipeline Visual */}
              <div className="p-5 rounded-2xl border border-white/5 bg-[#0a0914]/75 relative overflow-hidden flex flex-col gap-6 mt-4">
                
                {/* Visual grid pattern */}
                <div className="absolute inset-0 opacity-[0.05] bg-grid-pattern pointer-events-none" />

                <div className="flex justify-between items-center z-10 border-b border-white/5 pb-3">
                  <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-widest">
                    Interactive Medallion Pipeline Track
                  </span>
                  <span className="text-[8px] font-bold font-mono text-muted-foreground uppercase bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    Hover Stages Below
                  </span>
                </div>

                {/* Horizontal flow line track */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 z-10 relative">
                  
                  {starAirStages.map((stage) => {
                    const isActive = activeStarAirStage === stage.id;
                    
                    return (
                      <div
                        key={stage.id}
                        onMouseEnter={() => setActiveStarAirStage(stage.id)}
                        className={cn(
                          "p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all duration-300 relative select-none",
                          isActive
                            ? "bg-primary/10 border-primary text-white shadow-[0_0_10px_rgba(139,92,246,0.2)] scale-[1.03]"
                            : "bg-[#0c0b1a]/50 border-white/5 text-muted-foreground/70 hover:border-white/20 hover:text-white"
                        )}
                      >
                        <span className="text-[8px] font-bold font-mono tracking-wider block mb-1">
                          {stage.label}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wide truncate">
                          {stage.id}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Display Panel */}
                <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl z-10 font-mono">
                  {(() => {
                    const active = starAirStages.find((s) => s.id === activeStarAirStage);
                    return active ? (
                      <div>
                        <div className="flex items-center justify-between mb-1.5 border-b border-white/5 pb-1">
                          <span className="text-xs font-bold text-white uppercase">{active.id}</span>
                          <span className="text-[9px] text-primary uppercase font-bold">{active.tech}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {active.desc}
                        </p>
                      </div>
                    ) : null;
                  })()}
                </div>

              </div>

            </div>
          </GlassCard>
        </AnimWrapper>

        {/* CASE STUDY 2: AI RFP / PROPOSAL ASSISTANT */}
        <AnimWrapper variant="fade-up">
          <GlassCard interactive={false} className="border-white/5 bg-[#05050a]/40 p-6 md:p-8">
            <div className="flex flex-col gap-6">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase font-mono">
                    Self-Initiated AI Application
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-wide mt-2">
                    AI RFP / Proposal Assistant
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {rfpTech.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded border border-white/5 bg-white/5 text-[9px] text-muted-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Details */}
              <div className="border-l-2 border-primary/20 pl-4 my-2">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  An AI application designed to parse and index massive PDF proposal/RFP documents. It breaks documents down into semantic tokens, calculates vectors using OpenAI, indexes them in PostgreSQL using pgvector, and coordinates context synthesis with LLMs to generate answers mapping directly back to original page sources.
                </p>
              </div>

              {/* Interactive Pipeline Visual */}
              <div className="p-5 rounded-2xl border border-white/5 bg-[#0a0914]/75 relative overflow-hidden flex flex-col gap-6 mt-4">
                
                {/* Visual grid pattern */}
                <div className="absolute inset-0 opacity-[0.05] bg-grid-pattern pointer-events-none" />

                <div className="flex justify-between items-center z-10 border-b border-white/5 pb-3">
                  <span className="text-[10px] font-bold font-mono text-rose-400 uppercase tracking-widest">
                    Interactive RAG Ingestion Pipeline Track
                  </span>
                  <span className="text-[8px] font-bold font-mono text-muted-foreground uppercase bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    Hover Stages Below
                  </span>
                </div>

                {/* Horizontal flow line track (split into grid to avoid overflow) */}
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 z-10 relative">
                  {rfpStages.map((stage) => {
                    const isActive = activeRfpStage === stage.id;
                    
                    return (
                      <div
                        key={stage.id}
                        onMouseEnter={() => setActiveRfpStage(stage.id)}
                        className={cn(
                          "p-2.5 rounded-xl border flex flex-col justify-between cursor-pointer transition-all duration-300 relative select-none",
                          isActive
                            ? "bg-primary/10 border-primary text-white shadow-[0_0_10px_rgba(139,92,246,0.2)] scale-[1.03]"
                            : "bg-[#0c0b1a]/50 border-white/5 text-muted-foreground/70 hover:border-white/20 hover:text-white"
                        )}
                      >
                        <span className="text-[7px] font-bold font-mono tracking-wider block mb-1">
                          {stage.label}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wide truncate">
                          {stage.id}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Display Panel */}
                <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl z-10 font-mono">
                  {(() => {
                    const active = rfpStages.find((s) => s.id === activeRfpStage);
                    return active ? (
                      <div>
                        <div className="flex items-center justify-between mb-1.5 border-b border-white/5 pb-1">
                          <span className="text-xs font-bold text-white uppercase">{active.id}</span>
                          <span className="text-[9px] text-primary uppercase font-bold">{active.tech}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {active.desc}
                        </p>
                      </div>
                    ) : null;
                  })()}
                </div>

              </div>

            </div>
          </GlassCard>
        </AnimWrapper>

      </div>
    </SectionContainer>
  );
}

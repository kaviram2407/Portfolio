"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { Database, FileText, Cpu, ArrowRight } from "lucide-react";

export function ProjectsSection() {
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
      <SectionHeading title="Featured Projects" subtitle="Portfolio" />
      
      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        
        {/* Project 1: StarAir Airline */}
        <AnimWrapper variant="fade-up">
          <GlassCard interactive={false} className="border-white/5 bg-white/[0.01] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Text content (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase font-mono">
                    Data Engineering Simulation
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  StarAir Airline Data Platform
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  An aviation-focused data engineering solution designed to profile, ingest, and transform flight, airport, carrier, sales, and uplift-related datasets. It standardizes operational inputs into a robust analytical data model to support strategic airline metrics.
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Architecture</h4>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-xs text-muted-foreground border border-white/5 font-semibold font-mono">
                    Medallion Architecture (Bronze → Silver → Gold)
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {starAirTech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg border border-white/5 bg-white/5 text-[10px] text-muted-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ingestion Pipeline Graphic (5 cols) */}
              <div className="lg:col-span-5 w-full flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-[#0a0914]/65 relative h-[300px]">
                
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-6 font-mono absolute top-4 left-4">
                  Medallion Pipeline Flow
                </h4>

                {/* Animated Pipeline Nodes */}
                <div className="flex flex-col items-center w-full gap-4 relative mt-6">
                  
                  {/* Pipeline Step 1 */}
                  <div className="flex items-center justify-between w-full max-w-[280px] bg-white/5 border border-white/5 p-2 rounded-xl relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Database className="size-4" />
                      </div>
                      <span className="text-xs font-semibold text-white font-mono">SQL Server</span>
                    </div>
                    <ArrowRight className="size-3.5 text-muted-foreground animate-pulse" />
                    <span className="text-[10px] font-semibold text-primary font-mono">ADF Ingest</span>
                  </div>

                  {/* Flow SVG line 1 */}
                  <div className="h-6 w-0.5 bg-gradient-to-b from-cyan-400/50 to-primary/50 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                  </div>

                  {/* Pipeline Step 2 (Bronze) */}
                  <div className="flex items-center justify-between w-full max-w-[280px] bg-white/5 border border-white/5 p-2 rounded-xl relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-[10px] font-bold text-amber-400 font-mono">B</div>
                      <span className="text-xs font-semibold text-white font-mono">Bronze Layer</span>
                    </div>
                    <span className="text-[9px] text-muted-foreground font-mono">Raw File Landing</span>
                  </div>

                  {/* Flow SVG line 2 */}
                  <div className="h-6 w-0.5 bg-gradient-to-b from-amber-500/50 to-violet-500/50 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                  </div>

                  {/* Pipeline Step 3 (Silver) */}
                  <div className="flex items-center justify-between w-full max-w-[280px] bg-white/5 border border-white/5 p-2 rounded-xl relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-[10px] font-bold text-violet-400 font-mono">S</div>
                      <span className="text-xs font-semibold text-white font-mono">Silver Layer</span>
                    </div>
                    <span className="text-[9px] text-muted-foreground font-mono">PySpark Cleansing</span>
                  </div>

                  {/* Flow SVG line 3 */}
                  <div className="h-6 w-0.5 bg-gradient-to-b from-violet-500/50 to-emerald-500/50 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping" />
                  </div>

                  {/* Pipeline Step 4 (Gold) */}
                  <div className="flex items-center justify-between w-full max-w-[280px] bg-white/5 border border-white/5 p-2 rounded-xl relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] font-bold text-emerald-400 font-mono">G</div>
                      <span className="text-xs font-semibold text-white font-mono">Gold Layer</span>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-mono">Analytical Models</span>
                  </div>

                </div>

              </div>

            </div>
          </GlassCard>
        </AnimWrapper>

        {/* Project 2: AI RFP Assistant */}
        <AnimWrapper variant="fade-up">
          <GlassCard interactive={false} className="border-white/5 bg-white/[0.01] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Ingestion Pipeline Graphic (5 cols) */}
              <div className="lg:col-span-5 w-full flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-[#0a0914]/65 relative h-[320px] order-last lg:order-first">
                
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-6 font-mono absolute top-4 left-4">
                  RAG Execution pipeline
                </h4>

                {/* Vertical Step tracker for RAG */}
                <div className="flex flex-col items-start w-full max-w-[260px] gap-3.5 relative mt-6 font-mono">
                  
                  {/* Step 1 */}
                  <div className="flex items-center gap-3">
                    <div className="size-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[9px] font-bold text-white">01</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white uppercase">Documents Ingest</span>
                      <span className="text-[8px] text-muted-foreground">PyMuPDF parsing</span>
                    </div>
                  </div>

                  {/* Connect */}
                  <div className="h-4 w-px bg-white/10 ml-3" />

                  {/* Step 2 */}
                  <div className="flex items-center gap-3">
                    <div className="size-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[9px] font-bold text-primary">02</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white uppercase">Vector Storage</span>
                      <span className="text-[8px] text-primary">pgvector database</span>
                    </div>
                  </div>

                  {/* Connect */}
                  <div className="h-4 w-px bg-white/10 ml-3" />

                  {/* Step 3 */}
                  <div className="flex items-center gap-3">
                    <div className="size-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[9px] font-bold text-cyan-400">03</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white uppercase">Similarity Query</span>
                      <span className="text-[8px] text-cyan-400">Cosine Distance Lookup</span>
                    </div>
                  </div>

                  {/* Connect */}
                  <div className="h-4 w-px bg-white/10 ml-3" />

                  {/* Step 4 */}
                  <div className="flex items-center gap-3">
                    <div className="size-6 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-[9px] font-bold text-rose-400">04</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white uppercase">LLM Synthesis</span>
                      <span className="text-[8px] text-rose-400">Azure OpenAI RAG Response</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Text content (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase font-mono">
                    Self-Initiated AI Application
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  AI RFP / Proposal Assistant
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  An AI-powered application designed to simplify Request for Proposal (RFP) document analysis and automate proposal drafting. It processes large document sets, generates contextually accurate embeddings, indexes chunks into a vector database, and applies RAG mechanisms to generate source-referenced answers.
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Architecture</h4>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-xs text-muted-foreground border border-white/5 font-semibold font-mono">
                    RAG Pipeline (Embeddings → PostgreSQL/pgvector → LLM)
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {rfpTech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg border border-white/5 bg-white/5 text-[10px] text-muted-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </GlassCard>
        </AnimWrapper>

      </div>
    </SectionContainer>
  );
}

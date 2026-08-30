"use client";

import React, { useState } from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Database, GitCommit, FileText, ArrowRight, ShieldAlert, Cpu, Terminal, Sparkles, BarChart3, Binary } from "lucide-react";

type ArchTab = "starair" | "rfp";

interface ArchNode {
  name: string;
  purpose: string;
  tech: string;
  icon: React.ReactNode;
}

export function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState<ArchTab>("starair");

  const starAirNodes: ArchNode[] = [
    {
      name: "Transactional Source",
      purpose: "Host flight bookings, airport logs, and sales details",
      tech: "SQL Server (On-Premises)",
      icon: <Database className="size-5 text-cyan-400" />
    },
    {
      name: "ETL Ingestion Engine",
      purpose: "Orchestrate scheduled pipelines to replicate raw source tables",
      tech: "Azure Data Factory",
      icon: <Sparkles className="size-5 text-violet-400" />
    },
    {
      name: "Medallion Bronze Storage",
      purpose: "Store raw schema-neutral history logs",
      tech: "ADLS Gen2 / Parquet",
      icon: <Binary className="size-5 text-amber-500" />
    },
    {
      name: "Cleansing & Conformance",
      purpose: "Deduplicate keys, enforce datatypes, validate quality checks",
      tech: "Azure Databricks / PySpark",
      icon: <Terminal className="size-5 text-primary" />
    },
    {
      name: "Medallion Silver Tables",
      purpose: "Provide clean queryable delta tables with history",
      tech: "Delta Lake / ACID Compliant",
      icon: <GitCommit className="size-5 text-violet-400" />
    },
    {
      name: "Gold Dimensional Models",
      purpose: "Aggregate dimensional star-schemas and flight business metrics",
      tech: "Azure Databricks / Gold Layer",
      icon: <Sparkles className="size-5 text-emerald-400" />
    },
    {
      name: "Analytics & BI reporting",
      purpose: "Deliver carrier performance and uplift dashboard reports",
      tech: "Power BI / DirectQuery",
      icon: <BarChart3 className="size-5 text-amber-400" />
    }
  ];

  const rfpNodes: ArchNode[] = [
    {
      name: "RFP Documents",
      purpose: "Client requirements, terms, and scope statements source",
      tech: "Unstructured PDF / Word Docs",
      icon: <FileText className="size-5 text-rose-400" />
    },
    {
      name: "Document Processing",
      purpose: "Extract text from PDFs and split into semantic tokens",
      tech: "PyMuPDF & LangChain Chunking",
      icon: <Terminal className="size-5 text-cyan-400" />
    },
    {
      name: "Embeddings Generator",
      purpose: "Calculate dense vector weights for chunk semantics",
      tech: "Azure OpenAI / text-embedding-3",
      icon: <Sparkles className="size-5 text-violet-400" />
    },
    {
      name: "Vector Store Database",
      purpose: "Store text chunks alongside high-dimensional vectors",
      tech: "PostgreSQL & pgvector index",
      icon: <Database className="size-5 text-emerald-400" />
    },
    {
      name: "Similarity Retrieval Engine",
      purpose: "Perform cosine similarity query to extract matched chunks",
      tech: "Cosine Distance Vector Search",
      icon: <Binary className="size-5 text-amber-400" />
    },
    {
      name: "Context Synthesis",
      purpose: "Combine query with context chunks to generate responses",
      tech: "Azure OpenAI GPT-4o RAG Prompt",
      icon: <Cpu className="size-5 text-rose-400" />
    },
    {
      name: "Interactive Front-End",
      purpose: "Present final citation-referenced answers to end-user",
      tech: "Next.js / FastAPI interface",
      icon: <Sparkles className="size-5 text-primary" />
    }
  ];

  const activeNodes = activeTab === "starair" ? starAirNodes : rfpNodes;

  return (
    <SectionContainer id="architecture">
      <SectionHeading title="System Architecture" subtitle="Interactive Blueprints" />
      
      {/* Selector Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-[#0a0914] border border-white/5 p-1 rounded-2xl max-w-lg w-full">
          <button
            onClick={() => setActiveTab("starair")}
            className={`flex-1 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "starair"
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            StarAir Data Platform
          </button>
          <button
            onClick={() => setActiveTab("rfp")}
            className={`flex-1 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "rfp"
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            AI RFP / Proposal Assistant
          </button>
        </div>
      </div>

      {/* Nodes Map layout */}
      <div className="max-w-4xl mx-auto w-full relative">
        
        {/* Continuous animation overlay path line */}
        <div className="absolute left-[38px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/30 via-cyan-500/30 to-rose-500/30 hidden md:block" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 relative z-10"
          >
            {activeNodes.map((node, index) => {
              const isEven = index % 2 === 0;
              const glowColor = isEven ? "rgba(139, 92, 246, 0.1)" : "rgba(6, 182, 212, 0.1)";
              
              return (
                <div key={node.name} className="flex gap-6 items-start relative">
                  
                  {/* Left Side indicator Node circle */}
                  <div className="flex flex-col items-center select-none z-10">
                    <div className="size-10 rounded-xl bg-[#0a0914] border border-white/10 flex items-center justify-center shadow-lg relative group">
                      <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      {node.icon}
                    </div>
                    
                    {index < activeNodes.length - 1 && (
                      <div className="w-[1.5px] h-12 bg-white/5 md:hidden" />
                    )}
                  </div>

                  {/* Right Side card detail */}
                  <div className="flex-grow">
                    <GlassCard
                      interactive={true}
                      glowColor={glowColor}
                      className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border-white/5 bg-white/[0.01]"
                    >
                      <div className="max-w-xl">
                        <span className="text-[10px] font-bold font-mono text-primary uppercase mb-1 block">
                          Step 0{index + 1} &bull; {node.tech}
                        </span>
                        <h4 className="text-base font-bold text-white mb-1 tracking-wide">
                          {node.name}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {node.purpose}
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="text-[8px] font-bold font-mono uppercase tracking-widest text-muted-foreground bg-white/5 px-2 py-1 rounded border border-white/5">
                          Active Flow
                        </span>
                        <div className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                      </div>
                    </GlassCard>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </SectionContainer>
  );
}

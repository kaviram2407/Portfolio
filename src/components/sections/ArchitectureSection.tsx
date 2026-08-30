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
      name: "On-Premises Database",
      purpose: "Source transaction tables capturing flight paths, sales, airport codes, and carrier details.",
      tech: "Microsoft SQL Server",
      icon: <Database className="size-5 text-cyan-400" />
    },
    {
      name: "Ingestion Orchestrator",
      purpose: "Schedules copy pipelines to replicate raw tables into ADLS Gen2 landing zones.",
      tech: "Azure Data Factory",
      icon: <Sparkles className="size-5 text-violet-400" />
    },
    {
      name: "Bronze raw landing",
      purpose: "Stores raw history files in Parquet/JSON formats with schema logs preserved.",
      tech: "ADLS Gen2 Storage",
      icon: <Binary className="size-5 text-amber-500" />
    },
    {
      name: "Cleansing Spark Compute",
      purpose: "Cleanses values, validates schemas, enforces null constraints, and deduplicates transaction keys.",
      tech: "Azure Databricks / PySpark",
      icon: <Terminal className="size-5 text-primary" />
    },
    {
      name: "Silver Delta Tables",
      purpose: "ACID conformed tables. Handles Slowly Changing Dimensions (SCD Type 1 & 2) history.",
      tech: "Delta Lake Storage",
      icon: <GitCommit className="size-5 text-violet-400" />
    },
    {
      name: "Gold Dimensional Aggs",
      purpose: "Aggregate dimensional star-schemas built for business reports and analytics models.",
      tech: "Azure Databricks / Spark SQL",
      icon: <Sparkles className="size-5 text-emerald-400" />
    },
    {
      name: "Business Dashboarding",
      purpose: "DirectQuery semantic layers tracking flight passenger metrics and carrier performance.",
      tech: "Power BI DirectQuery",
      icon: <BarChart3 className="size-5 text-amber-400" />
    }
  ];

  const rfpNodes: ArchNode[] = [
    {
      name: "RFP Document Sources",
      purpose: "Client requirements, terms, and scope statements source.",
      tech: "Unstructured PDF / Word Files",
      icon: <FileText className="size-5 text-rose-400" />
    },
    {
      name: "Document Parsing",
      purpose: "Extracts textual contents, structure headers, and metadata tags from files.",
      tech: "PyMuPDF Library",
      icon: <Terminal className="size-5 text-cyan-400" />
    },
    {
      name: "Embedding Generator",
      purpose: "Calculates dense vector weights for semantic chunks.",
      tech: "Azure OpenAI text-embedding-3",
      icon: <Sparkles className="size-5 text-violet-400" />
    },
    {
      name: "Vector Store Storage",
      purpose: "Indexes and stores text chunks and vector dimensions.",
      tech: "PostgreSQL & pgvector index",
      icon: <Database className="size-5 text-emerald-400" />
    },
    {
      name: "Similarity Engine",
      purpose: "Executes similarity comparisons using cosine distance metrics.",
      tech: "Cosine Distance Vector Search",
      icon: <Binary className="size-5 text-amber-400" />
    },
    {
      name: "RAG Synthesis",
      purpose: "Combines query and matched contexts to formulate LLM prompt contexts.",
      tech: "Context Merger Prompt",
      icon: <Cpu className="size-5 text-rose-400" />
    },
    {
      name: "User Web UI",
      purpose: "Presents finalized answers with exact citations back to user interface.",
      tech: "Next.js / FastAPI integration",
      icon: <Sparkles className="size-5 text-primary" />
    }
  ];

  const activeNodes = activeTab === "starair" ? starAirNodes : rfpNodes;

  return (
    <SectionContainer id="architecture">
      <SectionHeading title="How It Works" subtitle="System Architecture Diagrams" />
      
      {/* Tab selectors */}
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

      {/* Main diagram container */}
      <div className="max-w-4xl mx-auto w-full relative p-6 rounded-2xl border border-white/5 bg-[#05050a]/40 overflow-hidden">
        
        {/* Blinking Live Simulation Console Status */}
        <div className="absolute top-4 right-4 flex items-center gap-2 font-mono text-[9px] text-cyan-400 bg-cyan-950/20 border border-cyan-800/30 px-2 py-1 rounded">
          <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>LIVE PIPELINE SIMULATION (ACTIVE)</span>
        </div>

        {/* Continuous animation path line on desktop */}
        <div className="absolute left-[54px] top-16 bottom-16 w-[1px] bg-gradient-to-b from-primary/20 via-cyan-500/20 to-rose-500/20 hidden md:block" />

        <div className="mt-8">
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
                const glowColor = isEven ? "rgba(139, 92, 246, 0.08)" : "rgba(6, 182, 212, 0.08)";
                
                return (
                  <div key={node.name} className="flex gap-6 items-start relative">
                    
                    {/* Left node point */}
                    <div className="flex flex-col items-center select-none z-10">
                      <div className="size-10 rounded-xl bg-[#0a0914] border border-white/10 flex items-center justify-center shadow-lg relative group">
                        <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        {node.icon}
                      </div>
                    </div>

                    {/* Right detail card */}
                    <div className="flex-grow">
                      <GlassCard
                        interactive={true}
                        glowColor={glowColor}
                        className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border-white/5 bg-[#07060c]/50 hover:bg-[#07060c]/80"
                      >
                        <div className="max-w-xl">
                          <span className="text-[9px] font-bold font-mono text-primary uppercase mb-1 block">
                            STAGE 0{index + 1} &bull; {node.tech}
                          </span>
                          <h4 className="text-sm font-bold text-white mb-1 tracking-wide uppercase">
                            {node.name}
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {node.purpose}
                          </p>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <span className="text-[8px] font-bold font-mono uppercase tracking-widest text-muted-foreground bg-white/5 px-2 py-0.5 rounded border border-white/5">
                            FLOWING
                          </span>
                          <div className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
                        </div>
                      </GlassCard>
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </SectionContainer>
  );
}

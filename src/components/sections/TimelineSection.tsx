"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
  projectDetails?: string;
}

export function TimelineSection() {
  const experiences: ExperienceItem[] = [
    {
      company: "Systech Solutions, Inc.",
      role: "Data Engineer (Associate)",
      location: "Chennai, India",
      duration: "Present",
      highlights: [
        "Perform initial data profiling to analyze source system structures and ensure data cleanliness.",
        "Assist in conceptual, logical, and physical data modeling matching analytical requirements.",
        "Create source-to-target mapping documents defining business-specific transformation logic.",
        "Configure ingestion templates in Azure Data Factory to import raw data into ADLS Gen2 Bronze layer.",
        "Build medallion transformations using Azure Databricks, PySpark, and Delta Lake tables.",
        "Implement Slowly Changing Dimensions (SCD Type 1 & Type 2) and handle incremental updates.",
        "Formulate gold-layer aggregate tables matching business reporting star schemas.",
        "Design automated data-quality testing and validate integrity constraints on target datasets.",
        "Configure semantic layers and direct connections for Power BI dashboard integration."
      ],
      projectDetails: "Simulated the end-to-end StarAir aviation data platform within this role, developing modular ingestion paths and analytical data models."
    },
    {
      company: "Virtusa Consultancy",
      role: "SDE Intern",
      location: "Chennai, India",
      duration: "2024",
      highlights: [
        "Contributed to the design and frontend scripts of an insurance policy portal using React.js.",
        "Collaborated with cross-functional teams to gather requirements and optimize application execution.",
        "Applied agile methodologies to debug responsive features and adapt to project requirement shifts."
      ]
    },
    {
      company: "Besant Technologies",
      role: "Data Science Intern",
      location: "Chennai, India",
      duration: "2024",
      highlights: [
        "Cleaned and processed large datasets using Python libraries such as Pandas, NumPy, and Matplotlib.",
        "Implemented standard regression, classification, and clustering machine learning algorithms.",
        "Designed Power BI dashboards to track key metrics and business performance trends in real-time."
      ]
    }
  ];

  return (
    <SectionContainer id="timeline">
      <SectionHeading title="Work Experience" subtitle="Timeline" />
      
      <div className="relative pl-6 border-l border-primary/20 max-w-4xl mx-auto flex flex-col gap-12 mt-8">
        
        {experiences.map((exp, index) => {
          const isFirst = index === 0;
          
          return (
            <AnimWrapper key={exp.company + exp.role} variant="fade-up" delay={index * 0.1}>
              <div className="relative">
                
                {/* Timeline Node connector point */}
                <div className={`absolute -left-[31px] top-1.5 size-3.5 rounded-full border-2 border-background z-10 transition-colors ${
                  isFirst ? "bg-primary animate-pulse" : "bg-[#27263b]"
                }`} />

                {/* Experience details block */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <div>
                      <span className="text-[10px] font-bold font-mono text-primary uppercase">
                        {exp.duration} &bull; {exp.location}
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-muted-foreground font-mono">
                        {exp.company}
                      </h4>
                    </div>
                  </div>

                  <GlassCard interactive={false} className="mt-3 border-white/5 bg-white/[0.01] p-5">
                    {exp.projectDetails && (
                      <p className="text-xs md:text-sm font-semibold text-cyan-400 mb-4 bg-cyan-950/20 border border-cyan-800/20 px-3 py-2 rounded-lg leading-relaxed">
                        Project Work: {exp.projectDetails}
                      </p>
                    )}
                    
                    <ul className="list-disc pl-4 flex flex-col gap-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="marker:text-primary">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>

              </div>
            </AnimWrapper>
          );
        })}
      </div>
    </SectionContainer>
  );
}

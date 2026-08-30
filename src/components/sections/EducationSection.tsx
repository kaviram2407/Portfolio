"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { AnimWrapper } from "../foundations/AnimWrapper";

export function EducationSection() {
  return (
    <SectionContainer id="education">
      <SectionHeading title="Education" subtitle="Academic Milestones" />
      
      <div className="max-w-3xl mx-auto w-full relative">
        <AnimWrapper variant="fade-up">
          <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#05050a]/40 relative overflow-hidden flex flex-col md:flex-row gap-6 md:items-center justify-between">
            
            {/* Background highlight glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

            <div>
              <span className="text-[10px] font-bold font-mono text-primary uppercase block mb-1">
                Integrated 5-Year Master's Degree &bull; 2019 - 2024
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-wide leading-tight mb-2">
                M.Tech in Computer Science and Engineering
              </h3>
              <p className="text-sm font-semibold text-muted-foreground font-mono uppercase mb-4">
                Sri Krishna College of Engineering and Technology
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl">
                Coimbatore, India. Focused on core computer architectures, distributed algorithms, database engines, data structures, and machine learning models.
              </p>
            </div>

            {/* GPA display panel */}
            <div className="shrink-0 flex flex-col items-start md:items-end justify-center gap-1 bg-white/5 border border-white/5 p-4 rounded-xl font-mono relative z-10">
              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                Academic CGPA
              </span>
              <span className="text-2xl font-extrabold text-white leading-none">
                8.72
              </span>
              <span className="text-[9px] text-muted-foreground">
                scale: 10.00 max
              </span>
            </div>

          </div>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

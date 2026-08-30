"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <SectionContainer id="education">
      <SectionHeading title="Education" subtitle="Academics" />
      
      <div className="max-w-3xl mx-auto w-full">
        <AnimWrapper variant="fade-up">
          <GlassCard interactive={false} className="border-white/5 bg-white/[0.01] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            
            {/* Academic Icon */}
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
              <GraduationCap className="size-6" />
            </div>

            {/* Academic Info */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-4">
                <div>
                  <span className="text-[10px] font-bold font-mono text-primary uppercase">
                    2019 - 2024 &bull; Coimbatore, India
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wide mt-0.5">
                    M.Tech [5-Year Integrated]
                  </h3>
                  <h4 className="text-sm font-semibold text-muted-foreground font-mono">
                    Computer Science and Engineering
                  </h4>
                </div>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6 border-l-2 border-white/5 pl-3">
                Completed five years of integrated study at Sri Krishna College of Engineering and Technology, covering core software engineering, computer network infrastructure, algorithms, database designs, and machine learning models.
              </p>

              {/* CGPA display */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl px-4 py-3 max-w-xs">
                <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-muted-foreground">
                  Performance
                </span>
                <div className="h-4 w-px bg-white/10" />
                <span className="text-xs font-semibold text-white">
                  CGPA: <span className="text-sm font-bold text-primary">8.72</span> / 10.00
                </span>
              </div>

            </div>

          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { ThemeButton } from "../foundations/ThemeButton";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <SectionContainer id="contact">
      <SectionHeading title="Let's Connect" subtitle="Final Command" alignment="center" />
      
      <div className="max-w-2xl mx-auto w-full relative">
        
        {/* Glow ambient background spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <AnimWrapper variant="scale-up">
          <GlassCard interactive={false} className="text-center py-16 border border-white/5 bg-[#05050a]/40 relative z-10">
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide mb-4">
              Let's Build Something Intelligent.
            </h3>
            
            <p className="text-xs md:text-sm text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
              Seeking to collaborate on high-performance cloud data architectures, medallion ingestion models, or semantic RAG engines. Let's connect to engineer your next data solution.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <a href="mailto:pkaviram24@gmail.com" className="w-full sm:w-auto">
                <ThemeButton variant="default" size="lg" className="w-full sm:w-auto gap-2.5 uppercase tracking-wider text-xs font-bold transition-all duration-300 hover:scale-[1.03]" glow>
                  <Mail className="size-4" />
                  Email Me
                </ThemeButton>
              </a>
              
              <a
                href="https://www.linkedin.com/in/kaviram2407"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <ThemeButton variant="outline" size="lg" className="w-full sm:w-auto gap-2.5 uppercase tracking-wider text-xs font-bold transition-all duration-300 hover:scale-[1.03]">
                  <Linkedin className="size-4" />
                  LinkedIn
                </ThemeButton>
              </a>

              <a
                href="https://github.com/Kaviram2407"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <ThemeButton variant="outline" size="lg" className="w-full sm:w-auto gap-2.5 uppercase tracking-wider text-xs font-bold transition-all duration-300 hover:scale-[1.03]">
                  <Github className="size-4" />
                  GitHub
                </ThemeButton>
              </a>
            </div>

          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

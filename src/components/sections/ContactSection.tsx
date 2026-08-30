"use client";

import React, { useState } from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { ThemeButton } from "../foundations/ThemeButton";
import { Mail, Linkedin, Github, Check } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pkaviram24@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SectionContainer id="contact">
      <SectionHeading title="Let's Connect" subtitle="Final Command" alignment="center" />
      
      <div className="max-w-2xl mx-auto w-full relative">
        {/* Glowing background bubble */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <AnimWrapper variant="scale-up">
          <GlassCard interactive={false} className="text-center py-16 border border-white/5 bg-[#05050a]/40 relative z-10">
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide mb-4">
              Let's Build Something Intelligent.
            </h3>
            
            <p className="text-xs md:text-sm text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
              Open to opportunities in data engineering, cloud data platforms and AI/GenAI applications.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              
              {/* Copy Email Action Button */}
              <div className="relative w-full sm:w-auto">
                <ThemeButton
                  variant="default"
                  size="lg"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto gap-2.5 uppercase tracking-wider text-xs font-bold transition-all duration-300 hover:scale-[1.03]"
                  glow
                >
                  {copied ? <Check className="size-4 text-emerald-400" /> : <Mail className="size-4" />}
                  {copied ? "Email Copied!" : "Copy Email"}
                </ThemeButton>

                {/* Blinking toast pill indicator */}
                {copied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest animate-bounce">
                    Copied!
                  </span>
                )}
              </div>
              
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

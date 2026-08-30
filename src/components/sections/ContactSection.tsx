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
      <SectionHeading title="Get In Touch" subtitle="Contact" alignment="center" />
      
      <div className="max-w-xl mx-auto w-full">
        <AnimWrapper variant="scale-up">
          <GlassCard className="text-center py-12 border-primary/20 bg-primary/5">
            <h3 className="text-xl font-bold text-white mb-3">Let's Connect</h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
              If you have any questions or would like to discuss data engineering solutions, pipeline architectures, or AI collaborations, feel free to reach out.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="mailto:pkaviram24@gmail.com" className="w-full sm:w-auto">
                <ThemeButton variant="default" size="sm" className="w-full sm:w-auto gap-2 uppercase tracking-wider text-xs font-semibold" glow>
                  <Mail className="size-4" />
                  Email Me
                </ThemeButton>
              </a>
              
              <a
                href="https://www.linkedin.com/in/kaviramsudharajanainar-paramasivan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <ThemeButton variant="outline" size="sm" className="w-full sm:w-auto gap-2 uppercase tracking-wider text-xs font-semibold">
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
                <ThemeButton variant="outline" size="sm" className="w-full sm:w-auto gap-2 uppercase tracking-wider text-xs font-semibold">
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

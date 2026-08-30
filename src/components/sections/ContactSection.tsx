"use client";

import React from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { ThemeButton } from "../foundations/ThemeButton";
import { Mail, MessageSquare } from "lucide-react";

export function ContactSection() {
  return (
    <SectionContainer id="contact">
      <SectionHeading title="Get In Touch" subtitle="Contact" alignment="center" />
      <div className="max-w-xl mx-auto w-full">
        <AnimWrapper variant="scale-up">
          <GlassCard className="text-center py-12 bg-primary/2">
            <h3 className="text-xl font-semibold mb-3 text-white">Let's Connect</h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
              A placeholder contact card. Phase 2 will introduce an interactive messaging form and secure social platform bindings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ThemeButton variant="outline" size="sm" className="gap-2">
                <Mail className="size-4" />
                Email
              </ThemeButton>
              <ThemeButton variant="default" size="sm" className="gap-2" glow>
                <MessageSquare className="size-4" />
                Send Message
              </ThemeButton>
            </div>
          </GlassCard>
        </AnimWrapper>
      </div>
    </SectionContainer>
  );
}

"use client";

import React, { useState } from "react";
import { SectionContainer } from "../foundations/SectionContainer";
import { SectionHeading } from "../foundations/SectionHeading";
import { GlassCard } from "../foundations/GlassCard";
import { AnimWrapper } from "../foundations/AnimWrapper";
import { ThemeButton } from "../foundations/ThemeButton";
import { Mail, Linkedin, Github, Check, Send } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pkaviram24@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:pkaviram24@gmail.com?subject=${encodeURIComponent(form.subject || "Data Portfolio Contact")}&body=${encodeURIComponent(
      `Sender Name: ${form.name}\nSender Email: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <SectionContainer id="contact">
      <SectionHeading title="Let's Connect" subtitle="Final Command" />
      
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
        
        {/* Left Column: Details & Social Handles */}
        <div className="lg:col-span-5 col-span-12 flex flex-col justify-between">
          <AnimWrapper variant="fade-up" className="h-full">
            <GlassCard interactive={false} className="p-6 md:p-8 border border-white/5 bg-[#05050a]/40 h-full flex flex-col justify-between relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-wide mb-4">
                  Let's Build Something Intelligent.
                </h3>
                
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-8">
                  Open to opportunities involving data engineering, cloud data platforms and AI-powered applications.
                </p>

                <div className="flex flex-col gap-3.5 mb-8">
                  {/* Email Clipboard button */}
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors duration-200 cursor-pointer select-none"
                    >
                      <Mail className="size-4 text-primary" />
                      <span>pkaviram24@gmail.com</span>
                    </button>
                    {copied && (
                      <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest animate-pulse">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Verified links row */}
              <div className="flex gap-4 border-t border-white/5 pt-6 mt-6">
                <a
                  href="https://www.linkedin.com/in/kaviram2407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <ThemeButton variant="outline" size="sm" className="w-full gap-2 uppercase tracking-wider text-[10px] font-bold">
                    <Linkedin className="size-3.5" />
                    LinkedIn
                  </ThemeButton>
                </a>

                <a
                  href="https://github.com/Kaviram2407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <ThemeButton variant="outline" size="sm" className="w-full gap-2 uppercase tracking-wider text-[10px] font-bold">
                    <Github className="size-3.5" />
                    GitHub
                  </ThemeButton>
                </a>
              </div>

            </GlassCard>
          </AnimWrapper>
        </div>

        {/* Right Column: Interactive Send Form */}
        <div className="lg:col-span-7 col-span-12">
          <AnimWrapper variant="fade-up" delay={0.1}>
            <GlassCard interactive={false} className="p-6 md:p-8 border border-white/5 bg-[#05050a]/40">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-6 border-b border-white/5 pb-2">
                Send Command Message
              </h4>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 font-mono text-xs text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-name" className="text-[10px] font-bold text-muted-foreground uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Recruiter Name"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/5 bg-[#0a0914]/60 text-white placeholder-muted-foreground/30 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-email" className="text-[10px] font-bold text-muted-foreground uppercase">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. contact@company.com"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/5 bg-[#0a0914]/60 text-white placeholder-muted-foreground/30 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-subject" className="text-[10px] font-bold text-muted-foreground uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. Data Pipeline Collaboration"
                    className="w-full px-3 py-2.5 rounded-xl border border-white/5 bg-[#0a0914]/60 text-white placeholder-muted-foreground/30 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="text-[10px] font-bold text-muted-foreground uppercase">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Type your engineering inquiry or project details here..."
                    className="w-full px-3 py-2.5 rounded-xl border border-white/5 bg-[#0a0914]/60 text-white placeholder-muted-foreground/30 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <div className="mt-2">
                  <ThemeButton
                    type="submit"
                    variant="default"
                    size="lg"
                    glow
                    className="w-full sm:w-auto gap-2.5 uppercase tracking-wider text-xs font-bold transition-transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="size-4" />
                    Send Message
                  </ThemeButton>
                </div>

              </form>
            </GlassCard>
          </AnimWrapper>
        </div>

      </div>
    </SectionContainer>
  );
}

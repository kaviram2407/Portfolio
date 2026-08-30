"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#05050a] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xs font-medium text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Built with Next.js, Tailwind v4, & Framer Motion.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Kaviram2407"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-wider text-muted-foreground hover:text-white uppercase transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kaviram2407"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-wider text-muted-foreground hover:text-white uppercase transition-colors"
          >
            LinkedIn
          </a>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center size-8 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 text-white hover:text-primary transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

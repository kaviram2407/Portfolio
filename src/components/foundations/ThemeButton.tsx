"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeButtonProps extends React.ComponentProps<typeof Button> {
  glow?: boolean;
  glowColor?: "primary" | "cyan" | "rose";
  children: React.ReactNode;
}

export function ThemeButton({
  glow = false,
  glowColor = "primary",
  className,
  children,
  ...props
}: ThemeButtonProps) {
  const glowClasses = {
    primary: "shadow-[0_0_12px_rgba(139,92,246,0.25)] hover:shadow-[0_0_20px_rgba(139,92,246,0.45)] border border-primary/20",
    cyan: "shadow-[0_0_12px_rgba(6,182,212,0.25)] hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] border border-cyan-400/20",
    rose: "shadow-[0_0_12px_rgba(244,63,94,0.25)] hover:shadow-[0_0_20px_rgba(244,63,94,0.45)] border border-rose-500/20",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Button
        className={cn(
          "relative overflow-hidden font-medium rounded-xl transition-all duration-300 cursor-pointer active:translate-y-0",
          glow && glowClasses[glowColor],
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}

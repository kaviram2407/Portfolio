"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = alignment === "center";
  const isRight = alignment === "right";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16 flex flex-col",
        {
          "items-center text-center": isCenter,
          "items-end text-right": isRight,
          "items-start text-left": !isCenter && !isRight,
        },
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3 inline-block bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gradient-primary pb-2 leading-tight"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "h-0.5 w-16 bg-gradient-to-r from-primary to-accent mt-4 origin-left",
          {
            "origin-center": isCenter,
            "origin-right": isRight,
          }
        )}
      />
    </div>
  );
}

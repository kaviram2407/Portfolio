"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimationVariant = "fade-up" | "fade-down" | "fade-in" | "scale-up" | "slide-left" | "slide-right";

interface AnimWrapperProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  className?: string;
  viewportOnce?: boolean;
  margin?: string;
}

export function AnimWrapper({
  children,
  variant = "fade-up",
  duration = 0.8,
  delay = 0,
  className,
  viewportOnce = true,
  margin = "-50px",
}: AnimWrapperProps) {
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "scale-up": {
      hidden: { opacity: 0, scale: 0.92 },
      visible: { opacity: 1, scale: 1 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Premium easing token
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

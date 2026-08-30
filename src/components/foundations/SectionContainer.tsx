"use client";

import React, { ForwardedRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerSize?: "default" | "narrow" | "wide";
}

export const SectionContainer = forwardRef(
  (
    { id, children, className, containerSize = "default", ...props }: SectionContainerProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "relative py-20 md:py-28 lg:py-36 overflow-hidden flex flex-col justify-center",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-grid-pattern" />
        <div
          className={cn(
            "w-full mx-auto px-6 md:px-12 lg:px-16 relative z-10",
            {
              "max-w-6xl": containerSize === "default",
              "max-w-4xl": containerSize === "narrow",
              "max-w-7xl": containerSize === "wide",
            }
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

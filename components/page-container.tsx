"use client";

import React from "react";
import { AnimatedPlanesBackground } from "@/components/animated-planes-background";

type PageContainerProps = {
  className?: string;
  borderLeft?: boolean;
  planeCount?: number;
  children: React.ReactNode;
};
export function PageContainer({ className, borderLeft, planeCount = 4, children }: PageContainerProps) {
  const showBorderLeft = borderLeft || false;

  return (
    <section className={`calc-min-h-screen md:calc-min-h-screen-md relative flex items-center overflow-hidden ${className}`}>
      <AnimatedPlanesBackground count={planeCount} className="z-0" />

      {showBorderLeft && (
        <span className="hidden lg:block absolute border-l border-gray-200 left-1/4 top-0 bottom-0"></span>
      )}

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

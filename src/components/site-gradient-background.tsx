"use client";

import { GradientDots } from "@/components/ui/gradient-dots";

/**
 * Full-viewport layer behind app content (`z-[1]`). Replaces WebGL `DottedSurface`.
 */
export function SiteGradientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] isolate overflow-hidden [contain:paint]"
      aria-hidden
    >
      <GradientDots
        className="h-full w-full"
        backgroundColor="#050510"
        dotSize={8}
        spacing={10}
        duration={40}
        colorCycleDuration={8}
      />
    </div>
  );
}

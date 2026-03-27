"use client";

import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type TextColorLines = readonly [string, string, string];

type TextColorProps = {
  lines: TextColorLines;
  className?: string;
};

export function TextColor({ lines, className }: TextColorProps) {
  const [line1, line2, line3] = lines;

  return (
    <div className={cn("mt-2", className)}>
      <div className="relative w-full">
        <div className="px-0 sm:px-2">
          <div className="relative h-full w-full border border-white/12 [mask-image:radial-gradient(200rem_24rem_at_center,white,transparent)] p-5 sm:p-6">
            <h1 className="flex select-none flex-col gap-1 px-1 py-2 text-center font-display text-4xl font-extrabold leading-[0.95] tracking-tighter sm:text-5xl lg:text-6xl">
              <Plus className="absolute -left-3 -top-3 h-7 w-7 text-[#22D3EE] sm:-left-4 sm:-top-4 sm:h-8 sm:w-8" />
              <Plus className="absolute -bottom-3 -left-3 h-7 w-7 text-[#22D3EE] sm:-bottom-4 sm:-left-4 sm:h-8 sm:w-8" />
              <Plus className="absolute -right-3 -top-3 h-7 w-7 text-[#22D3EE] sm:-right-4 sm:-top-4 sm:h-8 sm:w-8" />
              <Plus className="absolute -bottom-3 -right-3 h-7 w-7 text-[#22D3EE] sm:-bottom-4 sm:-right-4 sm:h-8 sm:w-8" />

              <span
                data-content={line1}
                className="before:animate-gradient-background-1 relative before:absolute before:bottom-4 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] before:text-center before:text-white/20 sm:before:top-0"
              >
                <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-1 text-transparent sm:px-5">
                  {line1}
                </span>
              </span>
              <span
                data-content={line2}
                className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] before:text-center before:text-white/20 sm:before:top-0"
              >
                <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-1 text-transparent sm:px-5">
                  {line2}
                </span>
              </span>
              <span
                data-content={line3}
                className="before:animate-gradient-background-3 relative before:absolute before:bottom-1 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] before:text-center before:text-white/20 sm:before:top-0"
              >
                <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-1 text-transparent sm:px-5">
                  {line3}
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

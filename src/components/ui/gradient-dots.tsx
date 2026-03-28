"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

export type GradientDotsProps = Omit<HTMLMotionProps<"div">, "style"> & {
  /** Dot radius-ish size (default: 8) */
  dotSize?: number;
  /** Spacing between dots (default: 10) */
  spacing?: number;
  /** Background drift animation duration in seconds (default: 30) */
  duration?: number;
  /** Hue cycle duration in seconds (default: 6) */
  colorCycleDuration?: number;
  /** Page background — should match body for seamless edges */
  backgroundColor?: string;
  style?: React.CSSProperties;
};

function buildBackgroundStyles(
  dotSize: number,
  spacing: number,
  hexSpacing: number,
  backgroundColor: string,
): React.CSSProperties {
  return {
    backgroundColor,
    backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, #f00, transparent 60%),
          radial-gradient(circle at 50% 50%, #ff0, transparent 60%),
          radial-gradient(circle at 50% 50%, #0f0, transparent 60%),
          radial-gradient(ellipse at 50% 50%, #00f, transparent 60%)
        `,
    backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
    backgroundPosition: `
          0px 0px,
          ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%
        `,
  };
}

/**
 * Animated hex dot grid + drifting color washes (community pattern, adapted for this app).
 * @see https://21st.dev/community/components/efferd/gradient-dots/default
 */
export function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  colorCycleDuration = 6,
  backgroundColor = "var(--background)",
  className,
  style,
  ...props
}: GradientDotsProps) {
  const hexSpacing = spacing * 1.732;
  const baseStyle = buildBackgroundStyles(
    dotSize,
    spacing,
    hexSpacing,
    backgroundColor,
  );
  const mergedStyle: React.CSSProperties = { ...baseStyle, ...style };

  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div
        className={cn("absolute inset-0", className)}
        style={mergedStyle}
        aria-hidden
        {...(props as React.ComponentProps<"div">)}
      />
    );
  }

  const posEnd = `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`;
  const posStart = `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`;

  return (
    <motion.div
      className={cn("absolute inset-0", className)}
      style={mergedStyle}
      aria-hidden
      animate={{
        backgroundPosition: [posEnd, posStart],
        filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
      }}
      transition={{
        backgroundPosition: {
          duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
        filter: {
          duration: colorCycleDuration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      }}
      {...props}
    />
  );
}

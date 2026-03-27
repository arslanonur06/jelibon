"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  type HTMLAttributes,
} from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

export interface VelocityMarqueeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: string;
  baseVelocity?: number;
  /** Applied to each repeated text span (gradient, size, etc.) */
  textClassName?: string;
  scrollDependent?: boolean;
  delay?: number;
}

/**
 * Infinite horizontal velocity marquee. Uses `motion/react` + `@motionone/utils/wrap`.
 */
export const VelocityMarquee = forwardRef<HTMLDivElement, VelocityMarqueeProps>(
  function VelocityMarquee(
    {
      children,
      baseVelocity = -4,
      className,
      textClassName,
      scrollDependent = false,
      delay = 0,
      ...rest
    },
    ref,
  ) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
      clamp: false,
    });

    /** Two equal segments → translate wraps at -50% for a seamless infinite loop */
    const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

    const directionFactor = useRef<number>(1);
    const hasStarted = useRef(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        hasStarted.current = true;
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    useAnimationFrame((_t, delta) => {
      if (!hasStarted.current) return;

      const dt = delta / 1000;
      let moveBy = directionFactor.current * baseVelocity * dt;

      if (scrollDependent) {
        if (velocityFactor.get() < 0) {
          directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
          directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
      }

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-nowrap overflow-hidden whitespace-nowrap",
          className,
        )}
        {...rest}
      >
        <motion.div
          className="flex w-max flex-nowrap gap-0 whitespace-nowrap"
          style={{ x }}
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              className={cn(
                "inline-block shrink-0 px-6 font-display text-xs font-semibold uppercase tracking-[0.18em] sm:px-10 sm:text-sm md:text-base",
                textClassName,
              )}
            >
              {children}
            </span>
          ))}
        </motion.div>
      </div>
    );
  },
);

VelocityMarquee.displayName = "VelocityMarquee";

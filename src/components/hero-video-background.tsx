"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const MOBILE_BREAKPOINT = 768;

type Props = {
  className?: string;
  objectFit?: "contain" | "cover";
  objectPositionClassName?: string;
};

/**
 * Full-bleed muted looping hero video.
 * kaplanseker.mp4 on desktop (≥768 px), kaplanvideo.mp4 on mobile.
 * Uses a single static <video> element — no key-based remounting that can
 * interrupt autoPlay during hydration.
 */
export function HeroVideoBackground({
  className,
  objectFit = "contain",
  objectPositionClassName = "max-lg:object-[center_68%]",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  /* Swap src + restart on breakpoint cross (resize only — rare in real use). */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function getSrc() {
      return window.innerWidth < MOBILE_BREAKPOINT
        ? "/assets/kaplanvideo.mp4"
        : "/assets/kaplanseker.mp4";
    }

    /* Set the correct src for the current viewport on mount. */
    const initial = getSrc();
    if (el.getAttribute("src") !== initial) {
      el.src = initial;
      el.load();
    }
    el.play().catch(() => {});

    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    function onChange() {
      if (!el) return;
      el.src = getSrc();
      el.load();
      el.play().catch(() => {});
    }
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <video
      ref={ref}
      src="/assets/kaplanseker.mp4"
      className={cn(
        "absolute inset-0 h-full w-full",
        objectFit === "contain"
          ? "object-contain object-center"
          : cn(
              "object-cover lg:object-contain lg:object-center",
              objectPositionClassName,
            ),
        className,
      )}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      disablePictureInPicture
    />
  );
}

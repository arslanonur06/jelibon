"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** `contain` shows the full frame (letterboxing). `cover` fills and may crop. */
  objectFit?: "contain" | "cover";
  /** Only used when `objectFit` is `cover` — e.g. `object-bottom` to crop from the top */
  objectPositionClassName?: string;
};

/**
 * Muted looping MP4 only (no GIF) — H.264 decodes on GPU and avoids huge animated-GIF decode cost.
 * Recompress if needed: ffmpeg -i in.mp4 -vf scale=1280:-2 -c:v libx264 -crf 26 -movflags +faststart out.mp4
 */
export function HeroVideoBackground({
  className,
  objectFit = "contain",
  /** Focal point when using `cover` below `lg` only (wide screens use `contain`). */
  objectPositionClassName = "max-lg:object-[center_68%]",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const p = el.play();
    if (p !== undefined) p.catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
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
      poster="/assets/jelibon-brand.png"
      aria-hidden
      disablePictureInPicture
    >
      <source src="/assets/kaplanvideo.mp4" type="video/mp4" />
    </video>
  );
}

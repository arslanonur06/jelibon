import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  objectFit?: "contain" | "cover";
  objectPositionClassName?: string;
};

const baseClass = (
  objectFit: "contain" | "cover",
  objectPositionClassName: string,
  extra?: string,
) =>
  cn(
    "absolute inset-0 h-full w-full",
    objectFit === "contain"
      ? "object-contain object-center"
      : cn(
          "object-cover lg:object-contain lg:object-center",
          objectPositionClassName,
        ),
    extra,
  );

/**
 * Mobile: short loop (MP4) in a smaller hero slot. md+: animated GIF to avoid
 * loading video on large viewports. Single compositor path each (no rAF).
 */
export function HeroVideoBackground({
  className,
  objectFit = "contain",
  objectPositionClassName = "max-lg:object-[center_68%]",
}: Props) {
  const mediaClass = baseClass(
    objectFit,
    objectPositionClassName,
    className,
  );

  return (
    <>
      <video
        className={cn(mediaClass, "md:hidden")}
        src="/assets/kaplanvideo.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/webseker-hero.gif"
        alt=""
        aria-hidden
        decoding="async"
        fetchPriority="high"
        className={cn(mediaClass, "hidden md:block")}
      />
    </>
  );
}

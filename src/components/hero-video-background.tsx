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
 * Desktop (md+): animated `webseker.gif` — pure <img>, no JS needed, autoplays.
 * Mobile  (<md) : `kaplanvideo.mp4`    — muted looping <video>.
 * Both rendered in static HTML; CSS hides the unused element per breakpoint.
 */
export function HeroVideoBackground({
  className,
  objectFit = "contain",
  objectPositionClassName = "max-lg:object-[center_68%]",
}: Props) {
  return (
    <>
      {/* ── Desktop: GIF ── shown md and up, hidden on mobile */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/webseker.gif"
        alt=""
        aria-hidden
        decoding="async"
        fetchPriority="low"
        className={cn(
          baseClass(objectFit, objectPositionClassName, className),
          "hidden md:block",
        )}
      />

      {/* ── Mobile: video ── shown below md, hidden on desktop */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        src="/assets/kaplanvideo.mp4"
        poster="/assets/jelibon-brand.png"
        className={cn(
          baseClass(objectFit, objectPositionClassName, className),
          "block md:hidden",
        )}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
    </>
  );
}

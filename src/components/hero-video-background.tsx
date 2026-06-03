import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  objectFit?: "contain" | "cover";
  objectPositionClassName?: string;
};

/**
 * Hero media — animated GIF on all viewports (no mobile MP4; avoids native play button).
 */
export function HeroVideoBackground({
  className,
  objectFit = "contain",
  objectPositionClassName = "max-lg:object-[center_68%]",
}: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/webseker.gif"
      alt=""
      aria-hidden
      decoding="async"
      fetchPriority="high"
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
    />
  );
}

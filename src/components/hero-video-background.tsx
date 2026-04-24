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
 * Optimized animated hero GIF. Kept as a plain image to avoid JS/video runtime
 * work while still preserving the animated visual.
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
      className={baseClass(objectFit, objectPositionClassName, className)}
    />
  );
}

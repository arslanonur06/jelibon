import { cn } from "@/lib/utils";

/**
 * DottedSurface is mounted globally from `layout.tsx`.
 * This page only adds foreground content to preview the effect.
 */
export default function DemoDottedPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-transparent px-4">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-10 left-1/2 size-[min(90vw,720px)] -translate-x-1/2 rounded-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(255,105,180,0.12),transparent_55%)]",
          "blur-[32px]",
        )}
      />
      <h1 className="relative z-10 font-mono text-3xl font-semibold text-white sm:text-4xl">
        Dotted surface
      </h1>
      <p className="relative z-10 mt-3 max-w-md text-center text-sm text-zinc-400">
        Global background + starfield on the home page. Your hero logo stays in{" "}
        <code className="text-zinc-300">HeroSection</code>.
      </p>
    </div>
  );
}

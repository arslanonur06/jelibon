/**
 * Lightweight CSS background (no WebGL). Replaces Three.js `DottedSurface` for stable painting.
 */
export function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] bg-dot-grid opacity-[0.22]"
      aria-hidden
    />
  );
}

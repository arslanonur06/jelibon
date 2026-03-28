/** Solid dark background layer — no dots, no animated grid. */
export function SiteGradientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] bg-[#050510]"
      aria-hidden
    />
  );
}

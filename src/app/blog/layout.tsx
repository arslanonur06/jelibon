import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative pr-0 lg:pr-72">
      {children}
      <aside
        className="pointer-events-none fixed bottom-0 right-0 top-0 z-0 hidden w-72 border-l border-white/10 bg-[#050510] lg:block"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,105,180,0.12),transparent_38%),radial-gradient(circle_at_60%_72%,rgba(0,212,255,0.08),transparent_42%),linear-gradient(180deg,#090912_0%,#050510_100%)]" />
      </aside>
    </div>
  );
}

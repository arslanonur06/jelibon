import { DemoDock } from "./demo-dock";

/**
 * Full-page preview of the dock (same items as the navbar).
 * Icons/routes live in `src/data/nav-dock-items.ts`.
 */
export default function DemoDockPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050510] px-4 py-24">
      <p className="mb-8 text-center text-sm text-zinc-500">
        Dock — same navigation as the header
      </p>
      <DemoDock />
    </div>
  );
}

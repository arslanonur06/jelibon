"use client";

import { DockTabs } from "@/components/ui/dock-tabs";
import { navDockItems } from "@/data/nav-dock-items";

export function DemoDock() {
  return (
    <DockTabs
      items={navDockItems}
      className="mx-auto flex h-20 items-end gap-4 rounded-3xl border-2 border-white/20 bg-gray-100/10 px-4 pb-3.5 shadow-xl backdrop-blur-md"
    />
  );
}

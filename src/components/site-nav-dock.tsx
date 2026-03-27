"use client";

import { DockTabs } from "@/components/ui/dock-tabs";
import type { Locale } from "@/lib/i18n/locales";
import { getNavDockItems } from "@/data/nav-dock-items";

export function SiteNavDock({ locale }: { locale: Locale }) {
  return (
    <div className="flex min-h-[3.75rem] min-w-0 flex-1 justify-start overflow-x-auto overscroll-x-contain px-0.5 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:min-h-0 sm:px-0.5">
      <DockTabs items={getNavDockItems(locale)} />
    </div>
  );
}


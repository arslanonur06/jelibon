"use client";

import { DockTabs } from "@/components/ui/dock-tabs";
import type { Locale } from "@/lib/i18n/locales";
import { getNavDockItems } from "@/data/nav-dock-items";

export function SiteNavDock({ locale }: { locale: Locale }) {
  return (
    <div className="flex min-h-[4.75rem] min-w-0 flex-1 justify-center overflow-x-auto overscroll-x-contain px-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:min-h-0 sm:px-1">
      <DockTabs items={getNavDockItems(locale)} />
    </div>
  );
}

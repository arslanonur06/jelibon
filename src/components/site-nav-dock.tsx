"use client";

import { DockTabs } from "@/components/ui/dock-tabs";
import type { Locale } from "@/lib/i18n/locales";
import { getNavDockItems } from "@/data/nav-dock-items";

export function SiteNavDock({ locale }: { locale: Locale }) {
  const items = getNavDockItems(locale);
  return (
    /**
     * On mobile: horizontally scrollable strip (hidden scrollbar).
     * On sm+: flex row that can center naturally.
     */
    <div
      className="
        flex w-full items-end
        overflow-x-auto overscroll-x-contain
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
      "
    >
      <DockTabs items={items} />
    </div>
  );
}

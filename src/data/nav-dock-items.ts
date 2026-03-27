import {
  BookOpen,
  Layers,
  Mail,
  Orbit,
  Package,
  Sparkles,
} from "lucide-react";
import type { DockNavItem } from "@/components/ui/dock-tabs";
import type { Locale } from "@/lib/i18n/locales";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";

/** Use `/#…` so anchors work from /blog and other routes */
const navDockItemsBase: Omit<DockNavItem, "name">[] = [
  {
    id: "solutions",
    href: "/#solutions",
    icon: Layers,
    color: "bg-gradient-to-br from-[#FF69B4] to-[#A020F0]",
    colorHover: "bg-gradient-to-br from-[#FFA8D8] to-[#C084FC]",
  },
  {
    id: "orbital",
    href: "/#orbital",
    icon: Orbit,
    color: "bg-gradient-to-br from-[#A020F0] to-[#6366f1]",
    colorHover: "bg-gradient-to-br from-[#C084FC] to-[#818CF8]",
  },
  {
    id: "packages",
    href: "/#packages",
    icon: Package,
    color: "bg-gradient-to-br from-[#22D3EE] to-[#3b82f6]",
    colorHover: "bg-gradient-to-br from-[#67E8F9] to-[#60A5FA]",
  },
  {
    id: "combo",
    href: "/#combo",
    icon: Sparkles,
    color: "bg-gradient-to-br from-amber-400 to-orange-500",
    colorHover: "bg-gradient-to-br from-[#FDE68A] to-[#FB923C]",
  },
  {
    id: "blog",
    href: "/blog",
    icon: BookOpen,
    color: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
    colorHover: "bg-gradient-to-br from-[#F0ABFC] to-[#FB7185]",
  },
  {
    id: "contact",
    href: "/#contact",
    icon: Mail,
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    colorHover: "bg-gradient-to-br from-[#6EE7B7] to-[#2DD4BF]",
  },
];

export function getNavDockItems(locale: Locale): DockNavItem[] {
  const dict = DICTIONARIES[locale];
  return navDockItemsBase.map((item) => ({
    ...item,
    name: dict.nav[item.id as keyof typeof dict.nav],
  }));
}

// Backwards-compatible export for demo pages that don't care about locale.
export const navDockItems = getNavDockItems("en");

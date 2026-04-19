import {
  BookOpen,
  Calculator,
  CircleHelp,
  Layers,
  MessageCircle,
  Orbit,
  Package,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n/locales";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";

export type DockNavItem = {
  id: string;
  name: string;
  href: string;
  icon: LucideIcon;
  color: string;
  colorHover: string;
};

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
    id: "calculator",
    href: "/#calculator",
    icon: Calculator,
    color: "bg-gradient-to-br from-sky-500 to-indigo-600",
    colorHover: "bg-gradient-to-br from-sky-300 to-indigo-400",
  },
  {
    id: "combo",
    href: "/#combo",
    icon: Sparkles,
    color: "bg-gradient-to-br from-amber-400 to-orange-500",
    colorHover: "bg-gradient-to-br from-[#FDE68A] to-[#FB923C]",
  },
  {
    id: "testimonials",
    href: "/#testimonials",
    icon: Star,
    color: "bg-gradient-to-br from-rose-500 to-pink-600",
    colorHover: "bg-gradient-to-br from-rose-300 to-pink-400",
  },
  {
    id: "blog",
    href: "/blog",
    icon: BookOpen,
    color: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
    colorHover: "bg-gradient-to-br from-[#F0ABFC] to-[#FB7185]",
  },
  {
    id: "faq",
    href: "/#faq",
    icon: CircleHelp,
    color: "bg-gradient-to-br from-violet-500 to-purple-700",
    colorHover: "bg-gradient-to-br from-violet-300 to-purple-500",
  },
  {
    id: "contact",
    href: "/#contact",
    icon: MessageCircle,
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

export const navDockItems = getNavDockItems("en");

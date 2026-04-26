import type { Locale } from "@/lib/i18n/locales";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";

export type DockNavItem = {
  id: string;
  name: string;
  href: string;
  color: string;
  colorHover: string;
};

/** Use `/#…` so anchors work from /blog and other routes */
const navDockItemsBase: Omit<DockNavItem, "name">[] = [
  {
    id: "solutions",
    href: "/#solutions",
    color: "bg-gradient-to-br from-[#FF69B4] to-[#A020F0]",
    colorHover: "bg-gradient-to-br from-[#FFA8D8] to-[#C084FC]",
  },
  {
    id: "packages",
    href: "/#packages",
    color: "bg-gradient-to-br from-[#22D3EE] to-[#3b82f6]",
    colorHover: "bg-gradient-to-br from-[#67E8F9] to-[#60A5FA]",
  },
  {
    id: "calculator",
    href: "/#calculator",
    color: "bg-gradient-to-br from-sky-500 to-indigo-600",
    colorHover: "bg-gradient-to-br from-sky-300 to-indigo-400",
  },
  {
    id: "combo",
    href: "/#combo",
    color: "bg-gradient-to-br from-amber-400 to-orange-500",
    colorHover: "bg-gradient-to-br from-[#FDE68A] to-[#FB923C]",
  },
  {
    id: "testimonials",
    href: "/#testimonials",
    color: "bg-gradient-to-br from-rose-500 to-pink-600",
    colorHover: "bg-gradient-to-br from-rose-300 to-pink-400",
  },
  {
    id: "blog",
    href: "/blog",
    color: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
    colorHover: "bg-gradient-to-br from-[#F0ABFC] to-[#FB7185]",
  },
  {
    id: "faq",
    href: "/#faq",
    color: "bg-gradient-to-br from-violet-500 to-purple-700",
    colorHover: "bg-gradient-to-br from-violet-300 to-purple-500",
  },
  {
    id: "contact",
    href: "/#contact",
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

export function resolveNavItemHref(href: string, pathname?: string | null) {
  if (pathname === "/" && href.startsWith("/#")) {
    return href.slice(1);
  }

  return href;
}

export const navDockItems = getNavDockItems("en");

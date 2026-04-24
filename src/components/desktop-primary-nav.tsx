"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { getNavDockItems, resolveNavItemHref } from "@/data/nav-dock-items";

type DesktopPrimaryNavProps = {
  locale: Locale;
};

export function DesktopPrimaryNav({ locale }: DesktopPrimaryNavProps) {
  const pathname = usePathname();
  const navItems = getNavDockItems(locale);

  return (
    <nav
      aria-label="Primary"
      className="hidden lg:flex lg:flex-1 lg:justify-center"
    >
      <ul className="flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.05] px-2 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.24)] backdrop-blur-xl">
        {navItems.map((item) => {
          const href = resolveNavItemHref(item.href, pathname);
          const isBlogItem = item.href === "/blog";
          const isActive = isBlogItem ? pathname?.startsWith("/blog") : false;

          return (
            <li key={item.id}>
              <Link
                href={href}
                className={`block rounded-full px-3 py-2 text-sm font-medium transition xl:px-4 ${
                  isActive
                    ? "bg-white/[0.1] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                    : "text-zinc-300 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

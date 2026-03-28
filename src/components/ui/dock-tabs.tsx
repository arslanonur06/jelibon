"use client";

/**
 * Dock-style tab bar — lightweight CSS hover (no magnetic springs / per-frame layout).
 */
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type DockNavItem = {
  id: string;
  name: string;
  href: string;
  icon: LucideIcon;
  color: string;
  colorHover: string;
};

function DockIcon({ item }: { item: DockNavItem }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="group flex shrink-0 flex-col items-center gap-1 px-1.5 sm:px-2"
    >
      <div
        className={cn(
          "relative flex h-11 w-11 cursor-pointer items-center justify-center sm:h-[3.25rem] sm:w-[3.25rem]",
          "transition-transform duration-200 ease-out will-change-transform",
          "group-hover:-translate-y-0.5 group-active:translate-y-0 group-active:scale-[0.96]",
        )}
      >
        <div
          className={cn(
            "relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl text-white shadow-md ring-1 ring-white/15",
            "transition-[box-shadow] duration-200 ease-out",
            "group-hover:shadow-[0_0_20px_rgba(255,105,180,0.45)] group-hover:ring-[#FF69B4]/35",
            item.color,
          )}
        >
          <span
            className={cn(
              "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100",
              item.colorHover,
            )}
            aria-hidden
          />
          <span className="relative z-[1] text-base transition-transform duration-200 group-hover:scale-110 sm:text-lg">
            <Icon className="h-[1em] w-[1em]" strokeWidth={2} />
          </span>
          <span
            className="pointer-events-none absolute inset-0 z-[2] rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-25 transition-opacity duration-200 group-hover:opacity-40"
            aria-hidden
          />
        </div>
      </div>

      <span className="w-full truncate text-center text-[9px] font-medium leading-tight text-white/80 sm:text-[10px]">
        {item.name}
      </span>
    </Link>
  );
}

export type DockTabsProps = {
  items: DockNavItem[];
  className?: string;
};

export function DockTabs({ items, className }: DockTabsProps) {
  return (
    <div
      className={
        className ??
        "flex items-end gap-0.5 rounded-2xl border border-white/[0.12] bg-[#0c0c18]/92 px-1.5 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.25)] sm:gap-1 sm:px-2 sm:py-2"
      }
    >
      {items.map((item) => (
        <DockIcon key={item.id} item={item} />
      ))}
    </div>
  );
}

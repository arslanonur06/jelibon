"use client";

/**
 * Dock-style tab bar with magnetic hover (framer-motion).
 * Place in `src/components/ui` per shadcn convention.
 */
import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
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

function DockIcon({
  item,
  mouseX,
}: {
  item: DockNavItem;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = item.icon;

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(distance, [-100, 0, 100], [40, 60, 40]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Link
      href={item.href}
      className="flex shrink-0 flex-col items-center gap-1 px-1.5 sm:px-2"
    >
      {/* Icon tile */}
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        className="relative flex cursor-pointer items-center justify-center"
        whileTap={{ scale: 0.92 }}
      >
        <motion.div
          className={cn(
            "relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl text-white shadow-md ring-1 ring-white/15 transition-[box-shadow,background-image] duration-200",
            isHovered ? item.colorHover : item.color,
            isHovered && "shadow-[0_0_22px_rgba(255,105,180,0.5)] ring-[#FF69B4]/40",
          )}
          animate={{ y: isClicked ? 2 : isHovered ? -5 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.span
            className="text-base sm:text-lg"
            animate={{ scale: isHovered ? 1.12 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Icon className="h-[1em] w-[1em]" strokeWidth={2} />
          </motion.span>

          {/* Gloss overlay */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/25 to-transparent"
            animate={{ opacity: isHovered ? 0.3 : 0.1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.div>

      {/* Label — always visible */}
      <span className="w-full truncate text-center text-[9px] font-medium leading-tight text-white/75 sm:text-[10px]">
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
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={
        className ??
        "flex items-end gap-0.5 rounded-2xl border border-white/[0.12] bg-white/[0.06] px-1.5 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:gap-1 sm:px-2 sm:py-2"
      }
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.05 }}
    >
      {items.map((item) => (
        <DockIcon key={item.id} item={item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}

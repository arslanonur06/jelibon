"use client";

/**
 * Dock-style tab bar with magnetic hover (framer-motion).
 * Place in `src/components/ui` per shadcn convention alongside button, card, etc.
 *
 * Dependencies: framer-motion, lucide-react, next/link
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
  /** Default tile gradient */
  color: string;
  /** Brighter / alternate gradient on hover */
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

  const widthSync = useTransform(distance, [-120, 0, 120], [48, 70, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const heightSync = useTransform(distance, [-120, 0, 120], [48, 70, 48]);
  const height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Link
      href={item.href}
      className="touch-manipulation flex shrink-0 min-w-[3.4rem] max-w-[3.8rem] snap-center flex-col items-center justify-end gap-0.5 sm:min-w-[4.75rem] sm:max-w-[5.5rem]"
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        className="group relative flex aspect-square cursor-pointer items-center justify-center"
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={cn(
            "relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl text-white shadow-lg ring-1 ring-white/15 transition-[box-shadow,background-image] duration-200",
            isHovered ? item.colorHover : item.color,
            isHovered && "shadow-[0_0_26px_rgba(255,105,180,0.55)] ring-[#FF69B4]/40",
          )}
          animate={{
            y: isClicked ? 2 : isHovered ? -6 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <motion.div
            className="text-lg sm:text-xl"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <Icon className="h-[1.1em] w-[1.1em]" strokeWidth={2} />
          </motion.div>

          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 to-transparent"
            animate={{
              opacity: isHovered ? 0.35 : 0.12,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/80"
          animate={{
            scale: isClicked ? 1.5 : 1,
            opacity: isClicked ? 1 : 0.65,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </motion.div>

      <span className="hidden line-clamp-2 w-full max-h-[2.5rem] text-center text-[9px] font-medium leading-tight text-white/80 sm:block sm:max-h-none sm:text-[10px]">
        {item.name}
      </span>
    </Link>
  );
}

export type DockTabsProps = {
  items: DockNavItem[];
  /** Dock bar container classes (omit default glass bar when passing full custom layout) */
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
        "flex w-max min-h-[3.65rem] min-w-max items-end gap-1 rounded-2xl border border-white/[0.12] bg-white/[0.06] px-2 pb-1 pt-1 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-2xl backdrop-saturate-150 sm:min-h-[5.25rem] sm:gap-2 sm:rounded-3xl sm:px-3 sm:pb-2 sm:pt-1.5 md:gap-3 md:px-4"
      }
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
        delay: 0.05,
      }}
    >
      {items.map((item) => (
        <DockIcon key={item.id} item={item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getNavDockItems, resolveNavItemHref } from "@/data/nav-dock-items";

type SiteMobileNavProps = {
  locale: Locale;
};

export function SiteMobileNav({ locale }: SiteMobileNavProps) {
  const items = getNavDockItems(locale);
  const dict = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition hover:bg-white/10 lg:hidden"
        aria-label={dict.header.openMenu}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[500] lg:hidden">
              <button
                type="button"
                className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
                aria-label={dict.header.closeMenu}
                onClick={() => setOpen(false)}
              />
              <aside
                id={panelId}
                role="dialog"
                aria-modal="true"
                aria-labelledby="site-mobile-nav-heading"
                className="absolute inset-y-0 right-0 flex w-[min(20.5rem,92vw)] flex-col overflow-hidden rounded-l-[2.25rem] border-l border-white/25 bg-[#08081c]/70 shadow-[-20px_0_48px_rgba(255,105,180,0.18)] backdrop-blur-2xl backdrop-saturate-150"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-center bg-cover opacity-95"
                  style={{ backgroundImage: "url('/assets/blog-sidebar-bg.png')" }}
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#050510]/60 via-[#050510]/34 to-[#050510]/18" />
                <div className="relative z-10 flex min-h-0 flex-1 flex-col bg-gradient-to-b from-white/[0.12] via-transparent to-white/[0.04]">
                  <div className="flex items-center justify-between border-b border-white/[0.12] px-4 py-3.5">
                    <h2
                      id="site-mobile-nav-heading"
                      className="bg-gradient-to-r from-[#F9A8D4] via-[#E9D5FF] to-[#7DD3FC] bg-clip-text text-xs font-semibold uppercase tracking-[0.2em] text-transparent"
                    >
                      {dict.header.menu}
                    </h2>
                    <button
                      ref={closeRef}
                      type="button"
                      className="rounded-xl p-2 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                      aria-label={dict.header.closeMenu}
                      onClick={() => setOpen(false)}
                    >
                      <X className="h-5 w-5" aria-hidden />
                    </button>
                  </div>
                  <nav
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-3"
                    aria-label="Primary"
                  >
                    <ul className="space-y-1">
                      {items.map((item) => {
                        const Icon = item.icon;
                        const href = resolveNavItemHref(item.href, pathname);
                        return (
                          <li key={item.id}>
                            <Link
                              href={href}
                              prefetch
                              className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-zinc-100 transition hover:bg-white/[0.14] hover:shadow-[0_0_20px_rgba(255,105,180,0.12)] active:scale-[0.99]"
                              onClick={() => setOpen(false)}
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F9A8D4] ring-1 ring-white/15 backdrop-blur-sm">
                                <Icon
                                  className="h-[1.125rem] w-[1.125rem]"
                                  strokeWidth={1.75}
                                />
                              </span>
                              <span className="leading-snug">{item.name}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

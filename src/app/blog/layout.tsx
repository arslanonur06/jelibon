import type { ReactNode } from "react";

const BLOG_SIDEBAR_BG = "/assets/blog-sidebar-bg.png";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative pr-0 lg:pr-72">
      {children}
      <aside
        className="pointer-events-none fixed bottom-0 right-0 top-0 z-0 hidden w-72 border-l border-white/10 bg-[#050510] lg:block"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-95"
          style={{ backgroundImage: `url('${BLOG_SIDEBAR_BG}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#050510]/85 via-[#050510]/50 to-transparent" />
      </aside>
    </div>
  );
}

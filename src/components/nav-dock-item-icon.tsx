import type { ReactNode, SVGProps } from "react";

const S = (props: {
  className?: string;
  children: ReactNode;
} & SVGProps<SVGSVGElement>) => {
  const { className, children, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-[1.125rem] w-[1.125rem] shrink-0 ${className ?? ""}`}
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
};

/** Inline SVGs — avoids bundling lucide-react for mobile nav. */
export function NavDockItemIcon({
  navId,
  ...rest
}: { navId: string } & SVGProps<SVGSVGElement>) {
  switch (navId) {
    case "solutions":
      return (
        <S {...rest}>
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="M22 12.65l-8.6 3.9a2 2 0 0 1-1.66 0L3 12.65" />
          <path d="M2 17.65l8.6 3.9a2 2 0 0 0 1.66 0L22 17.65" />
        </S>
      );
    case "packages":
      return (
        <S {...rest}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
        </S>
      );
    case "calculator":
      return (
        <S {...rest}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 10h2M8 14h2M8 18h2M14 10h2M14 14h2M14 18h2" />
        </S>
      );
    case "combo":
      return (
        <S {...rest}>
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.563l-6.907-6.91a1.5 1.5 0 0 1 0-2.121l.93-.93a1.5 1.5 0 0 1 2.122 0L10 8.5" />
          <path d="M20 2v4M22 4h-4" />
          <path d="M14.314 2.2a.6.6 0 0 0-.628 0L2.2 7.3a.6.6 0 0 0 0 1.12l9.6 3.2a.6.6 0 0 0 .4 0l9.6-3.2a.6.6 0 0 0 0-1.12L14.31 2.2Z" />
          <path d="M2.2 16.3a.6.6 0 0 0 0 1.12L11.8 20.5a.6.6 0 0 0 .4 0l9.6-3.2a.6.6 0 0 0 0-1.12L12.2 9.1a.6.6 0 0 0-.4 0L2.2 16.3Z" />
        </S>
      );
    case "testimonials":
      return (
        <S {...rest}>
          <path d="M12 2l2.2 5.2L20 9.5l-4.2 3.2L17.5 18 12 15.4 6.5 18l1.7-5.3L4 9.5l5.8-2.3L12 2Z" />
        </S>
      );
    case "blog":
      return (
        <S {...rest}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a2 2 0 0 0-2-2H2V3Z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a2 2 0 0 1 2-2h8V3Z" />
        </S>
      );
    case "faq":
      return (
        <S {...rest}>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </S>
      );
    case "contact":
      return (
        <S {...rest}>
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </S>
      );
    default:
      return (
        <S {...rest}>
          <circle cx="12" cy="12" r="10" />
        </S>
      );
  }
}

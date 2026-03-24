import { BlogPreview } from "@/components/blog-preview";
import { ComboSection } from "@/components/combo-section";
import { GrowthPillars } from "@/components/growth-pillars";
import { HeroSection } from "@/components/hero-section";
import { PackagesSection } from "@/components/packages-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 -z-30 starfield opacity-70"
        aria-hidden
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <GrowthPillars />
        <PackagesSection />
        <ComboSection />
        <BlogPreview />
      </main>
      <SiteFooter />
    </div>
  );
}

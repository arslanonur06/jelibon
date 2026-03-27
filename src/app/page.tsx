import { BlogPreview } from "@/components/blog-preview";
import { ComboSection } from "@/components/combo-section";
import { GrowthPillars } from "@/components/growth-pillars";
import { HeroSection } from "@/components/hero-section";
import { OrbitalTimelineSection } from "@/components/orbital-timeline-section";
import { PackagesSection } from "@/components/packages-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Starfield sits above Three.js dots; hero image + logo unchanged in HeroSection */}
      <div
        className="pointer-events-none fixed inset-0 z-0 starfield opacity-45"
        aria-hidden
      />
      <SiteHeader />
      <main className="relative z-10">
        <HeroSection />
        {/* Cropped dot-grid band: rounded top + overflow clips the pattern */}
        <div className="relative -mt-4 overflow-hidden rounded-t-[1.75rem] border-t border-white/[0.08] bg-[#050510]/45 shadow-[0_-12px_48px_rgba(0,0,0,0.4)] backdrop-blur-[1px] sm:-mt-5 sm:rounded-t-[2rem]">
          <GrowthPillars />
          <OrbitalTimelineSection />
          <PackagesSection />
          <ComboSection />
          <BlogPreview />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

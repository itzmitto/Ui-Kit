import { HomeCategories } from "@/components/home/categories";
import { HomeFeatures } from "@/components/home/features";
import { HomeHero } from "@/components/home/hero";
import { PlaygroundPromo } from "@/components/home/playground-promo";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { HomeStarterKits } from "@/components/home/starter-kits";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffdfa] text-[#111a35]">
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeCategories />
        <HomeStarterKits />
        <PlaygroundPromo />
      </main>
      <SiteFooter />
    </div>
  );
}

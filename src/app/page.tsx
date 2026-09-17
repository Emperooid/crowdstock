import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { RealPeople } from "@/components/RealPeople";
import { HowItWorks } from "@/components/HowItWorks";
import { RoundsPreview } from "@/components/RoundsPreview";
import { AutoStockSpotlight } from "@/components/AutoStockSpotlight";
import { Features } from "@/components/Features";
import { Security } from "@/components/Security";
import { InviteEarn } from "@/components/InviteEarn";
import { Faq } from "@/components/Faq";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RealPeople />
        <HowItWorks />
        <RoundsPreview />
        <AutoStockSpotlight />
        <Features />
        <Security />
        <InviteEarn />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}

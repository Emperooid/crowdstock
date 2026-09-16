import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { RoundsPreview } from "@/components/RoundsPreview";
import { AutoPlaySpotlight } from "@/components/AutoPlaySpotlight";
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
        <HowItWorks />
        <RoundsPreview />
        <AutoPlaySpotlight />
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

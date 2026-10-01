import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Value } from "@/components/Value";
import { Services } from "@/components/Services";
import { Price } from "@/components/Price";
import { Diagnostics } from "@/components/Diagnostics";
import { Route } from "@/components/Route";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CallButton } from "@/components/CallButton";
import { SectionCut } from "@/components/SectionCut";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Value />
        <SectionCut index={0} />
        <Services />
        <SectionCut index={1} />
        <Price />
        <SectionCut index={2} />
        <Diagnostics />
        <SectionCut index={3} />
        <Route />
        <SectionCut index={4} />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CallButton />
    </>
  );
}

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
import { Seam } from "@/components/motion/Seam";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* cream → warm → cream → ember → cream → calm → подвал */}
        <Hero />
        <Value />
        <Services />
        <Price />
        <Diagnostics />
        <Route />
        <Faq />
        <Seam from="var(--cream)" to="var(--blue-field)" />
        <Contact />
      </main>
      <Footer />
      <CallButton />
    </>
  );
}

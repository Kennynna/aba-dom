import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Audience } from "@/components/Audience";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

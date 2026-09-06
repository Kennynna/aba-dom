import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Friends } from "@/components/Friends";
import { Audience } from "@/components/Audience";
import { Team } from "@/components/Team";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Friends />
        <Audience />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { Nav } from "../components/layout/Nav";
import { Hero } from "../components/sections/Hero";
import { StatsBar } from "../components/sections/StatsBar";
import { Platform } from "../components/sections/Platform";
import { Features } from "../components/sections/Features";
import { CaseStudies } from "../components/sections/CaseStudies";
import { Contact } from "../components/sections/Contact";
import { CtaBand } from "../components/sections/CtaBand";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Platform />
        <Features />
        <CaseStudies />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

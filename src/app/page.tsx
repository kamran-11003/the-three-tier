import dynamic from "next/dynamic";
import { Nav } from "../components/layout/Nav";
import { Hero } from "../components/sections/Hero";
import { StatsBar } from "../components/sections/StatsBar";

// Dynamically import below-the-fold sections to reduce main thread blocking
const Platform = dynamic(() => import("../components/sections/Platform").then(mod => mod.Platform));
const Features = dynamic(() => import("../components/sections/Features").then(mod => mod.Features));
const CaseStudies = dynamic(() => import("../components/sections/CaseStudies").then(mod => mod.CaseStudies));
const Contact = dynamic(() => import("../components/sections/Contact").then(mod => mod.Contact));
const CtaBand = dynamic(() => import("../components/sections/CtaBand").then(mod => mod.CtaBand));
const Footer = dynamic(() => import("../components/layout/Footer").then(mod => mod.Footer));

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Three Tier",
    "url": "https://www.thethreetier.com",
    "logo": "https://www.thethreetier.com/images/logo_v4.png",
    "description": "Enterprise-scale AI infrastructure for high-stakes decisions."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content" role="main" className="flex-1">
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

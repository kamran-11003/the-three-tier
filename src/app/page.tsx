import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Nav } from "../components/layout/Nav";
import { Hero } from "../components/sections/Hero";
import { StatsBar } from "../components/sections/StatsBar";

// Dynamically import below-the-fold sections — reduces initial JS bundle
const Platform = dynamic(() =>
  import("../components/sections/Platform").then((mod) => mod.Platform)
);
const Features = dynamic(() =>
  import("../components/sections/Features").then((mod) => mod.Features)
);
const CaseStudies = dynamic(() =>
  import("../components/sections/CaseStudies").then((mod) => mod.CaseStudies)
);
const Contact = dynamic(() =>
  import("../components/sections/Contact").then((mod) => mod.Contact)
);
const CtaBand = dynamic(() =>
  import("../components/sections/CtaBand").then((mod) => mod.CtaBand)
);
const Footer = dynamic(() =>
  import("../components/layout/Footer").then((mod) => mod.Footer)
);

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Three Tier",
    url: "https://www.thethreetier.com",
    logo: "https://www.thethreetier.com/images/logo_v5.png",
    description:
      "Enterprise-scale AI infrastructure for high-stakes decisions.",
    sameAs: ["https://www.thethreetier.com"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content" role="main" className="flex-1">
        {/* Above-fold: statically imported, no Suspense needed */}
        <Hero />
        <StatsBar />

        {/* Below-fold: dynamic imports with Suspense + content-visibility */}
        <div className="cv-auto">
          <Suspense fallback={null}>
            <Platform />
          </Suspense>
        </div>
        <div className="cv-auto">
          <Suspense fallback={null}>
            <Features />
          </Suspense>
        </div>
        <div className="cv-auto">
          <Suspense fallback={null}>
            <CaseStudies />
          </Suspense>
        </div>
        <div className="cv-auto">
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </div>
        <Suspense fallback={null}>
          <CtaBand />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

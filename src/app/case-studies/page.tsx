import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Case Studies — The Three Tier",
  description:
    "Real deployments, measurable outcomes. See how The Three Tier built AI infrastructure for VoiceStream Intelligence Platform across voice kiosk reliability, turn-taking, and accessibility.",
  openGraph: {
    title: "Case Studies — The Three Tier",
    type: "website",
    url: "https://www.thethreetier.com/case-studies",
    siteName: "The Three Tier",
  },
  alternates: { canonical: "https://www.thethreetier.com/case-studies" },
};

export default function CaseStudiesIndex() {
  return (
    <>
      <Nav />
      <main className="bg-ink min-h-screen">
        {/* Page header */}
        <section className="border-b border-wire py-20 pt-36">
          <div className="container">
            <span className="font-mono text-[11px] tracking-widest text-ghost uppercase block mb-5">
              Case Studies
            </span>
            <h1 className="font-display text-[clamp(48px,6vw,80px)] text-paper leading-[0.95] tracking-[-0.02em] max-w-2xl">
              Built. Deployed. Measured.
            </h1>
            <p className="font-body text-[16px] text-ghost max-w-lg mt-6 leading-relaxed">
              Three production deployments across voice AI infrastructure — designed,
              engineered, and shipped by The Three Tier.
            </p>
          </div>
        </section>

        {/* All cards */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-smoke border border-smoke">
              {CASE_STUDIES.map((cs, i) => (
                <div key={cs.slug} className="bg-ink">
                  <CaseStudyCard cs={cs} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyJsonLd } from "@/components/seo/CaseStudyJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CaseStudyHero } from "@/components/sections/CaseStudyHero";
import { CoverAbstractBand } from "@/components/sections/CoverAbstractBand";
import { ArticleBody } from "@/components/sections/ArticleBody";
import { RelatedCases } from "@/components/sections/RelatedCases";
import { CtaBand } from "@/components/sections/CtaBand";

// Static generation — pre-renders all slugs at build time
export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};

  return {
    title: cs.seo.metaTitle,
    description: cs.seo.metaDescription,
    keywords: cs.seo.keywords,
    openGraph: {
      title: cs.seo.metaTitle,
      description: cs.seo.metaDescription,
      url: cs.seo.canonicalUrl,
      type: "article",
      publishedTime: cs.publishDate,
      images: [
        {
          url: `https://www.thethreetier.com${cs.seo.ogImage}`,
          width: 1920,
          height: 640,
          alt: cs.title,
        },
      ],
      siteName: "The Three Tier",
    },
    twitter: {
      card: "summary_large_image",
      title: cs.seo.metaTitle,
      description: cs.seo.metaDescription,
      images: [`https://www.thethreetier.com${cs.seo.ogImage}`],
    },
    alternates: {
      canonical: cs.seo.canonicalUrl,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const related = CASE_STUDIES.filter((c) => c.slug !== cs.slug);

  return (
    <>
      <Nav />

      {/* JSON-LD — in <head> via Next.js metadata pipeline */}
      <CaseStudyJsonLd cs={cs} />
      <BreadcrumbJsonLd cs={cs} />

      <main id="main-content" className="bg-ink min-h-screen">
        {/* Hero — LCP target; priority image loaded eagerly */}
        <CaseStudyHero cs={cs} />

        {/*
          Below-the-fold: content-visibility skips paint/layout until near viewport.
          containIntrinsicSize prevents scroll-position jumps (CLS fix).
        */}
        <div
          style={{
            contentVisibility: "auto",
            containIntrinsicSize: "0 2400px",
          }}
        >
          <CoverAbstractBand abstract={cs.coverAbstract} />
          <ArticleBody sections={cs.sections} />
          <RelatedCases cases={related} />
          <CtaBand />
        </div>
      </main>

      <Footer />
    </>
  );
}

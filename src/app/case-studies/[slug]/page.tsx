import React, { Suspense } from "react";
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
          url: cs.seo.ogImage,
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
      images: [cs.seo.ogImage],
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
      <main className="bg-ink min-h-screen">
        {/* JSON-LD structured data */}
        <CaseStudyJsonLd cs={cs} />
        <BreadcrumbJsonLd cs={cs} />

        {/* Hero */}
        <CaseStudyHero cs={cs} />

        {/* Below-the-fold content optimized with content-visibility */}
        <div style={{ contentVisibility: "auto" }}>
          {/* Cover abstract */}
          <CoverAbstractBand abstract={cs.coverAbstract} />

          {/* Article body with sticky sidebar nav */}
          <ArticleBody sections={cs.sections} />

          {/* Related cases */}
          <Suspense>
            <RelatedCases cases={related} />
          </Suspense>

          {/* CTA */}
          <Suspense>
            <CtaBand />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}

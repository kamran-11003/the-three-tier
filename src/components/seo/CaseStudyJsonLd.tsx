import React from "react";
import { CaseStudyMeta } from "@/lib/case-studies";

interface Props {
  cs: CaseStudyMeta;
}

export function CaseStudyJsonLd({ cs }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": cs.schema.articleType,
    headline: cs.title,
    description: cs.seo.metaDescription,
    image: `https://www.thethreetier.com${cs.seo.ogImage}`,
    datePublished: cs.publishDate,
    dateModified: cs.publishDate,
    author: {
      "@type": "Organization",
      name: "The Three Tier",
      url: "https://www.thethreetier.com",
    },
    publisher: {
      "@type": "Organization",
      name: "The Three Tier",
      logo: {
        "@type": "ImageObject",
        url: "https://www.thethreetier.com/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "@id",
      "@id": cs.seo.canonicalUrl,
    },
    about: cs.schema.about.map((t) => ({ "@type": "Thing", name: t })),
    keywords: cs.seo.keywords.join(", "),
    url: cs.seo.canonicalUrl,
    timeRequired: `PT${cs.readTime}M`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

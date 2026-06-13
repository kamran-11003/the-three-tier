import React from "react";
import { CaseStudyMeta } from "@/lib/case-studies";

interface Props {
  cs: CaseStudyMeta;
}

export function BreadcrumbJsonLd({ cs }: Props) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.thethreetier.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://www.thethreetier.com/case-studies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cs.title,
        item: cs.seo.canonicalUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}

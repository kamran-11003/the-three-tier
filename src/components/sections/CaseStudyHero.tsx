// Server Component
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyMeta } from "@/lib/case-studies";

interface Props {
  cs: CaseStudyMeta;
}

// Tiny base64 1×1 dark placeholder — prevents layout flash while hero loads
const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

export function CaseStudyHero({ cs }: Props) {
  const formattedDate = new Date(cs.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section
      className="relative h-[560px] flex items-center overflow-hidden"
      aria-label={`Case study hero: ${cs.title}`}
    >
      {/* Decorative background image — aria-hidden because the heading carries the meaning */}
      <Image
        src={cs.images.hero}
        alt=""
        aria-hidden="true"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        className="object-cover"
        style={{ filter: "grayscale(15%) brightness(0.45)" }}
      />

      {/* Gradient — ensures text contrast regardless of image content */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-20">
        {/* Back nav */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-ghost hover:text-paper transition-colors mb-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-4"
          aria-label="Back to all case studies"
        >
          <span aria-hidden="true">&larr;</span> CASE STUDIES
        </Link>

        {/* Client badge */}
        <div
          className="inline-flex items-center gap-2 mb-4 border border-smoke bg-ink/50 backdrop-blur-sm px-3 py-1.5 font-mono text-[10px] tracking-widest text-ghost"
          aria-label={`Client: ${cs.client}`}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#7A9A6A] inline-block"
            aria-hidden="true"
          />
          {cs.client.toUpperCase()}
        </div>

        {/* H1 — the primary landmark for the page */}
        <h1 className="font-display text-[clamp(36px,4.5vw,60px)] text-paper leading-[1.05] tracking-[-0.02em] max-w-3xl mb-4">
          {cs.title}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-[17px] text-ghost max-w-xl mb-6">
          {cs.subtitle}
        </p>

        {/* Meta row — use <time> for machine-readable date */}
        <div
          className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-wide text-whisper uppercase"
          aria-label="Article metadata"
        >
          <time dateTime={cs.publishDate}>{formattedDate}</time>
          <span aria-hidden="true" className="text-wire hidden sm:inline">
            &middot;
          </span>
          <span>{cs.readTime} MIN READ</span>
          <span aria-hidden="true" className="text-wire hidden sm:inline">
            &middot;
          </span>
          <div
            className="flex flex-wrap items-center gap-3 text-[#4A4A4A]"
            aria-label="Tags"
          >
            {cs.tags.slice(0, 3).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

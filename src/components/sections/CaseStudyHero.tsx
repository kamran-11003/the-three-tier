import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyMeta } from "@/lib/case-studies";

interface Props {
  cs: CaseStudyMeta;
}

export function CaseStudyHero({ cs }: Props) {
  return (
    <section className="relative h-[560px] flex items-center overflow-hidden">
      {/* BG image */}
      <Image
        src={cs.images.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ filter: "grayscale(15%) brightness(0.45)" }}
      />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-20">
        {/* Back nav */}
        <Link
          href="/case-studies"
          className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-ghost hover:text-paper transition-colors mb-8"
        >
          &larr; CASE STUDIES
        </Link>

        {/* Client badge */}
        <div className="inline-flex items-center gap-2 mb-4 border border-smoke bg-ink/50 backdrop-blur-sm px-3 py-1.5 font-mono text-[10px] tracking-widest text-ghost">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7A9A6A] inline-block" />
          {cs.client.toUpperCase()}
        </div>

        {/* H1 */}
        <h1 className="font-display text-[clamp(36px,4.5vw,60px)] text-paper leading-[1.05] tracking-[-0.02em] max-w-3xl mb-4">
          {cs.title}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-[17px] text-ghost max-w-xl mb-6">
          {cs.subtitle}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-wide text-whisper uppercase">
          <span>
            {new Date(cs.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="text-wire hidden sm:inline">&middot;</span>
          <span>{cs.readTime} MIN READ</span>
          <span className="text-wire hidden sm:inline">&middot;</span>
          <div className="flex flex-wrap items-center gap-3 text-[#4A4A4A]">
            {cs.tags.slice(0, 3).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

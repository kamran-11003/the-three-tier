"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CaseStudyCard as CaseStudyCardType } from "@/lib/case-studies";
import { TagChip } from "./TagChip";

interface Props {
  cs: CaseStudyCardType;
  index: number;
  /** Pass true for above-the-fold cards (e.g. hero landing section) */
  priority?: boolean;
}

// Tiny dark 1×1 blur placeholder
const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

export function CaseStudyCard({ cs, index, priority = false }: Props) {
  const href = `/case-studies/${cs.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col h-full bg-ash border border-smoke hover:border-signal hover:-translate-y-1 transition-[border-color,transform] duration-300"
      aria-label={`Case study: ${cs.title}`}
    >
      {/* Cover image */}
      <Link
        href={href}
        className="block overflow-hidden relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={cs.images.card}
            alt=""
            aria-hidden="true"
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-70"
            aria-hidden="true"
          />
          {/* Case index */}
          <span
            className="absolute top-3 left-3 font-mono text-[10px] text-ghost tracking-widest z-10 bg-ink/50 backdrop-blur-sm px-2 py-1 border border-smoke/50"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div
          className="flex flex-wrap gap-1.5 mb-3"
          aria-label="Tags"
        >
          {cs.tags.slice(0, 4).map((tag) => (
            <TagChip key={tag}>{tag}</TagChip>
          ))}
        </div>

        {/* Title — primary link with accessible label */}
        <h3 className="font-body font-semibold text-[17px] text-paper leading-snug line-clamp-2 mb-2.5">
          <Link
            href={href}
            className="hover:text-signal transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2"
          >
            {cs.title}
          </Link>
        </h3>

        {/* Abstract */}
        <p className="font-body text-[13.5px] text-ghost leading-relaxed line-clamp-3 flex-1">
          {cs.coverAbstract}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-smoke">
          <span className="font-mono text-[10px] text-whisper tracking-wide">
            {cs.readTime} MIN READ
          </span>
          <Link
            href={href}
            className="font-mono text-[10px] tracking-widest text-ghost hover:text-paper transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2"
            aria-label={`Read case study: ${cs.title}`}
          >
            READ CASE &rarr;
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

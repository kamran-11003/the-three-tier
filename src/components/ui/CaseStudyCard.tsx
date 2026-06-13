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
}

export function CaseStudyCard({ cs, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col h-full bg-ash border border-smoke hover:border-signal hover:-translate-y-1 transition-all duration-300"
    >
      {/* Cover image */}
      <Link href={`/case-studies/${cs.slug}`} className="block overflow-hidden relative">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={cs.images.card}
            alt={cs.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-70" />
          {/* Case index */}
          <span className="absolute top-3 left-3 font-mono text-[10px] text-ghost tracking-widest z-10 bg-ink/50 backdrop-blur-sm px-2 py-1 border border-smoke/50 rounded-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {cs.tags.slice(0, 4).map((tag) => (
            <TagChip key={tag}>{tag}</TagChip>
          ))}
        </div>

        {/* Title */}
        <Link href={`/case-studies/${cs.slug}`}>
          <h3 className="font-body font-semibold text-[17px] text-paper leading-snug hover:text-signal transition-colors duration-200 line-clamp-2 mb-2.5">
            {cs.title}
          </h3>
        </Link>

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
            href={`/case-studies/${cs.slug}`}
            className="font-mono text-[10px] tracking-widest text-ghost hover:text-paper transition-colors duration-200"
          >
            READ CASE &rarr;
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

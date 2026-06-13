"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CaseStudyCard } from "../ui/CaseStudyCard";

export const CaseStudies: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section
      id="case-studies"
      className="py-[clamp(80px,12vw,160px)] bg-ash border-t border-wire relative overflow-hidden"
    >
      <div className="case-studies-scan-bg z-0" />
      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="font-mono text-[11px] tracking-[0.12em] text-ghost uppercase block mb-4">
              Case Studies
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,58px)] text-paper leading-[1.0] tracking-[-0.01em]">
              Infrastructure in production.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest text-ghost hover:text-paper transition-colors"
          >
            ALL CASES &rarr;
          </Link>
        </div>

        {/* 3-col card grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-smoke border border-smoke"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CASE_STUDIES.map((cs, i) => (
            <div key={cs.slug} className="bg-ink h-full">
              <CaseStudyCard cs={cs} index={i} />
            </div>
          ))}
        </motion.div>
        
        {/* Mobile View All button */}
        <div className="mt-10 flex md:hidden justify-center">
          <Link
            href="/case-studies"
            className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-ghost hover:text-paper transition-colors border border-wire px-6 py-3 bg-ink"
          >
            ALL CASES &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

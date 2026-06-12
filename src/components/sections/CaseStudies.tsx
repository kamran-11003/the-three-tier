"use client";

import React from "react";
import Image from "next/image";
import { TagChip } from "../ui/TagChip";
import { motion, Variants } from "framer-motion";

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      no: "Case 01",
      company: "Aventra CRM",
      desc: "Automated lead scoring and data extraction.",
      tags: ["AI Scoring", "CRM Integration", "Data Extraction"],
      image: "/images/case-aventra.png",
      fallbackImage: "/assets/case_aventra_v3.png",
    },
    {
      no: "Case 02",
      company: "Nexora Ledger",
      desc: "Multi-tenant financial dashboard scaling.",
      tags: ["Multi-Tenant", "Finance", "Dashboard"],
      image: "/images/case-nexora.png",
      fallbackImage: "/assets/case_nexora_v3.png",
    },
    {
      no: "Case 03",
      company: "DocuFlow OCR",
      desc: "Optical data stream scanning infrastructure.",
      tags: ["OCR", "Document AI", "Pipeline"],
      image: "/images/case-docuflow.png",
      fallbackImage: "/assets/case_docuflow_v3.png",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <section
      id="case-studies"
      className="py-24 bg-ash border-t border-wire relative overflow-hidden"
    >
      <div className="case-studies-scan-bg z-0" />
      <div className="container relative z-10">
        <h2 className="font-display text-[clamp(36px,4.5vw,64px)] text-paper leading-[1.0] mb-12">
          Case Studies.
        </h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cases.map((c, idx) => (
            <motion.a
              variants={itemVariants}
              key={idx}
              href="#contact"
              className="bg-ink border border-smoke p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-signal transition-all duration-300 group cursor-pointer active:scale-[0.98]"
              style={{ transitionTimingFunction: 'var(--ease-out)' }}
            >
              <div className="space-y-5">
                <span className="font-mono text-[10px] tracking-widest text-ghost uppercase block">
                  {c.no}
                </span>

                {/* Image Container (16:9) */}
                <div className="relative w-full aspect-[16/9] overflow-hidden border border-smoke">
                  <Image
                    src={c.image}
                    alt={c.company}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = c.fallbackImage || "";
                    }}
                  />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-body text-base font-semibold text-paper group-hover:text-signal transition-colors duration-300">
                    {c.company}
                  </h3>
                  <p className="font-body text-[14px] text-ghost leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-2 mt-6">
                {c.tags.map((tag) => (
                  <TagChip key={tag}>{tag}</TagChip>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

import React from "react";
import { CaseStudyCard as CaseStudyCardType } from "@/lib/case-studies";
import { CaseStudyCard } from "../ui/CaseStudyCard";

interface Props {
  cases: CaseStudyCardType[];
}

export function RelatedCases({ cases }: Props) {
  if (!cases || cases.length === 0) return null;

  return (
    <section className="bg-ash py-24 border-t border-wire">
      <div className="container">
        <h2 className="font-display text-[32px] sm:text-[40px] text-paper mb-12">
          Related Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-smoke border border-smoke">
          {cases.map((cs, i) => (
            <div key={cs.slug} className="bg-ink">
              <CaseStudyCard cs={cs} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { CaseStudySection } from "@/lib/case-studies";

interface Props {
  sections: Pick<CaseStudySection, "id" | "heading">[];
}

export function ArticleSideNav({ sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside
      className="col-span-3 hidden lg:block"
      aria-label="Article section navigation"
    >
      <div className="sticky top-28">
        <p
          className="font-mono text-[9px] text-whisper tracking-widest uppercase mb-4"
          aria-hidden="true"
        >
          In This Article
        </p>
        <nav aria-label="Table of contents">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={activeId === s.id ? "location" : undefined}
              className={`block font-body text-[12.5px] py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                activeId === s.id
                  ? "text-paper border-signal"
                  : "text-ghost border-wire hover:text-paper hover:border-ghost"
              }`}
            >
              {s.heading}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

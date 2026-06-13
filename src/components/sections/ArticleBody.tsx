"use client";

import React, { useState, useEffect } from "react";
import { CaseStudySection } from "@/lib/case-studies";

// Simple markdown parser for the specific needs of the case studies
function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Bold text: **text** -> <strong>text</strong>
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Italic text: *text* -> <em>text</em>
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Handle lists first to avoid wrapping list items in paragraphs
  // Unordered lists
  html = html.replace(/(?:^|\n)(-[^\n]+)(?:\n|$)+/g, (match) => {
    const items = match
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^- /, "")}</li>`)
      .join("");
    return `<ul>${items}</ul>\n`;
  });

  // Ordered lists
  html = html.replace(/(?:^|\n)(\d+\.[^\n]+)(?:\n|$)+/g, (match) => {
    const items = match
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^\d+\.\s/, "")}</li>`)
      .join("");
    return `<ol>${items}</ol>\n`;
  });

  // Paragraphs
  html = html
    .split(/\n\n+/)
    .map((p) => {
      if (p.startsWith("<ul") || p.startsWith("<ol")) return p;
      return `<p>${p.trim()}</p>`;
    })
    .join("\n");

  return html;
}

interface Props {
  sections: CaseStudySection[];
}

export function ArticleBody({ sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const visibleEntry = entries.find((e) => e.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="bg-ink py-20">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          {/* Sticky sidebar nav */}
          <aside className="col-span-3 hidden lg:block">
            <div className="sticky top-28">
              <p className="font-mono text-[9px] text-whisper tracking-widest uppercase mb-4">
                In This Article
              </p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
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

          {/* Article content */}
          <article className="col-span-12 lg:col-span-8 lg:col-start-4">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="mb-16 scroll-mt-28 group">
                <h2 className="font-display text-[32px] text-paper leading-tight tracking-[-0.01em] mb-6 transition-colors duration-300">
                  {s.heading}
                </h2>
                <div
                  className="prose-custom"
                  dangerouslySetInnerHTML={{ __html: markdownToHtml(s.body) }}
                />
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}

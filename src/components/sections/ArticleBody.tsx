// Server Component — no "use client" directive
// Markdown is processed at build time; zero JS shipped for the body itself.

import React from "react";
import { CaseStudySection } from "@/lib/case-studies";
import { ArticleSideNav } from "./ArticleSideNav";

// ─────────────────────────────────────────────
// Lightweight markdown → safe HTML (server-side only)
// ─────────────────────────────────────────────
function markdownToHtml(md: string): string {
  let html = md;

  // Bold / italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Unordered lists — group consecutive "- " lines
  html = html.replace(/((?:^|\n)-[^\n]+)+/g, (block) => {
    const items = block
      .trim()
      .split("\n")
      .map((l) => `<li>${l.replace(/^-\s*/, "").trim()}</li>`)
      .join("");
    return `<ul>${items}</ul>`;
  });

  // Ordered lists — group consecutive "N. " lines
  html = html.replace(/((?:^|\n)\d+\.[^\n]+)+/g, (block) => {
    const items = block
      .trim()
      .split("\n")
      .map((l) => `<li>${l.replace(/^\d+\.\s*/, "").trim()}</li>`)
      .join("");
    return `<ol>${items}</ol>`;
  });

  // Paragraphs — double newlines that aren't already block-level
  html = html
    .split(/\n\n+/)
    .map((p) => {
      const t = p.trim();
      if (!t) return "";
      if (/^<(ul|ol|li|h[1-6])/.test(t)) return t;
      return `<p>${t}</p>`;
    })
    .filter(Boolean)
    .join("\n");

  return html;
}

interface Props {
  sections: CaseStudySection[];
}

export function ArticleBody({ sections }: Props) {
  return (
    <section className="bg-ink py-20" aria-label="Article body">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          {/* Client-only sticky nav (tiny JS island) */}
          <ArticleSideNav
            sections={sections.map(({ id, heading }) => ({ id, heading }))}
          />

          {/* Article content — pure Server HTML, zero JS */}
          <article
            className="col-span-12 lg:col-span-8 lg:col-start-4"
            aria-label="Case study content"
          >
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="mb-16 scroll-mt-28"
              >
                <h2 className="font-display text-[32px] text-paper leading-tight tracking-[-0.01em] mb-6">
                  {s.heading}
                </h2>
                <div
                  className="prose-custom"
                  // Safe: content is authored internally, not user-generated
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

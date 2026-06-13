import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <div className="bg-ink min-h-screen flex items-center justify-center">
      <div className="container max-w-lg text-center py-32">
        <p className="font-mono text-[10px] tracking-widest text-ghost uppercase mb-6">
          404
        </p>
        <h1 className="font-display text-[48px] text-paper leading-tight mb-4">
          Case study not found.
        </h1>
        <p className="font-body text-[15px] text-ghost mb-10">
          This case study may have been moved or no longer exists.
        </p>
        <Link
          href="/case-studies"
          className="font-mono text-[11px] tracking-widest text-ghost border border-wire px-6 py-3 hover:border-paper hover:text-paper transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
        >
          VIEW ALL CASE STUDIES
        </Link>
      </div>
    </div>
  );
}

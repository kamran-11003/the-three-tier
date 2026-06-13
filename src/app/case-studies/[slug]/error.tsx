"use client";

import Link from "next/link";

export default function CaseStudyError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="bg-ink min-h-screen flex items-center justify-center"
      role="alert"
      aria-live="assertive"
    >
      <div className="container max-w-lg text-center py-32">
        <p className="font-mono text-[10px] tracking-widest text-ghost uppercase mb-6">
          Error
        </p>
        <h1 className="font-display text-[48px] text-paper leading-tight mb-4">
          Something went wrong.
        </h1>
        <p className="font-body text-[15px] text-ghost mb-10">
          {error.message ?? "An unexpected error occurred loading this case study."}
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="font-mono text-[11px] tracking-widest text-ghost border border-wire px-6 py-3 hover:border-paper hover:text-paper transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
          >
            TRY AGAIN
          </button>
          <Link
            href="/case-studies"
            className="font-mono text-[11px] tracking-widest text-ghost border border-wire px-6 py-3 hover:border-paper hover:text-paper transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
          >
            ALL CASES
          </Link>
        </div>
      </div>
    </div>
  );
}

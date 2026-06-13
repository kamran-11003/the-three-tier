"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-ink text-paper flex flex-col items-center justify-center px-8">
      <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ghost mb-4">
        Error / Unexpected
      </span>
      <h1 className="font-display text-[clamp(48px,6vw,80px)] leading-[0.92] tracking-[-0.02em] text-paper mb-6">
        Something broke.
      </h1>
      <p className="font-body text-[14px] text-ghost max-w-sm text-center mb-10 leading-relaxed">
        An unexpected error occurred. We have been notified. Try refreshing the page.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 bg-transparent text-ghost border border-smoke px-6 py-3 font-body text-[12px] font-semibold tracking-[0.08em] uppercase hover:border-signal hover:text-paper transition-all duration-150 active:scale-[0.97] cursor-pointer"
        style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
      >
        Try again
      </button>
    </div>
  );
}

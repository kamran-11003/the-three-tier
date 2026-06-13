import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink text-paper flex flex-col items-center justify-center px-8">
      <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ghost mb-4">
        404 / Not Found
      </span>
      <h1 className="font-display text-[clamp(64px,10vw,120px)] leading-[0.88] tracking-[-0.03em] text-paper mb-2">
        404.
      </h1>
      <p className="font-body text-[14px] text-ghost max-w-sm text-center mb-10 leading-relaxed mt-4">
        This page does not exist or has been moved. Check the URL and try again.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-transparent text-ghost border border-smoke px-6 py-3 font-body text-[12px] font-semibold tracking-[0.08em] uppercase hover:border-signal hover:text-paper transition-all duration-150 active:scale-[0.97]"
        style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
      >
        ← Return home
      </Link>
    </div>
  );
}

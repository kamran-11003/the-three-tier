import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink border-t border-wire pt-[60px] pb-[40px] text-ghost font-body relative overflow-hidden">
      <div className="footer-grid z-0" />
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
        {/* Col 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border border-signal flex flex-col justify-between p-0.5">
              <div className="h-1 bg-signal w-full" />
              <div className="h-1 bg-signal w-full" />
              <div className="h-1 bg-signal w-full" />
            </div>
            <span className="font-mono text-xs tracking-[0.12em] uppercase text-paper font-semibold">
              THE THREE TIER
            </span>
          </div>
          <p className="text-[14px] leading-relaxed max-w-xs text-ghost">
            Enterprise AI infrastructure for the operations layer.
          </p>
          <p className="font-mono text-[10px] tracking-wide text-whisper uppercase">
            © {new Date().getFullYear()} The Three Tier. All rights reserved.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-4">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-paper block">
            Product
          </span>
          <ul className="space-y-2 text-[13px]">
            {["Platform", "Agents", "Integrations", "Changelog", "Pricing"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#platform"
                    className="hover:text-paper transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-4">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-paper block">
            Company
          </span>
          <ul className="space-y-2 text-[13px]">
            {["About", "Careers", "Contact", "Terms", "Privacy"].map((item) => (
              <li key={item}>
                <a
                  href="#contact"
                  className="hover:text-paper transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

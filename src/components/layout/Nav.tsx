"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[60px] z-50 transition-all duration-300 flex items-center ${
        isScrolled
          ? "backdrop-blur-xl bg-ink/80 border-b border-wire"
          : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: 'var(--ease-out)' }}
    >
      <div className="container w-full flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-3 group active:scale-[0.97] transition-transform duration-200" style={{ transitionTimingFunction: 'var(--ease-out)' }}>
          <div className="w-5 h-5 border border-signal flex flex-col justify-between p-0.5 transition-colors group-hover:border-paper">
            <div className="h-1 bg-signal w-full transition-colors group-hover:bg-paper" />
            <div className="h-1 bg-signal w-full transition-colors group-hover:bg-paper" />
            <div className="h-1 bg-signal w-full transition-colors group-hover:bg-paper" />
          </div>
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-paper font-semibold">
            THE THREE TIER
          </span>
        </a>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Product", href: "/#platform" },
            { label: "Use Cases", href: "/#case-studies" },
            { label: "Platform", href: "/#platform" },
            { label: "Pricing", href: "/pricing" },
            { label: "Contact", href: "/#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-ghost hover:text-paper active:scale-[0.97] transition-all duration-200"
              style={{ transitionTimingFunction: 'var(--ease-out)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Button & Separator */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block w-[1px] h-4 bg-smoke" />
          <a
            href="/app"
            className="inline-flex items-center gap-1.5 bg-transparent text-signal border border-signal hover:bg-signal hover:text-signal-dark px-4 py-1.5 text-[11px] font-semibold tracking-[0.06em] uppercase font-body active:scale-[0.97] transition-all duration-200"
            style={{ transitionTimingFunction: 'var(--ease-out)' }}
          >
            <span>Open app</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </header>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MonoLabel } from "../ui/MonoLabel";
import { Button } from "../ui/Button";
import { TerminalHero } from "./TerminalHero";
import { TRANSITION_BASE } from "../../lib/motion";

export const Hero: React.FC = () => {
  const brands = [
    "Aventra",
    "Nexora",
    "DocuFlow",
    "ResolvAI",
    "QuantumAI",
    "VaultSync",
    "Orbita",
  ];

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-between bg-ink overflow-hidden">
      {/* Background Silhouette Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.12] desaturate pointer-events-none select-none z-0">
        <Image
          src="/images/hero-bg-infra.jpg"
          alt="Infrastructure Silhouette"
          fill
          priority
          quality={60}
          sizes="50vw"
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/assets/hero_background_v4.png";
          }}
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent" />
      </div>

      {/* Hero Background Animations */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 2.0, ease: 'easeOut' }}
      />
      <div className="hero-scanline z-0" />
      {/* Main Grid Content */}
      <div className="container flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 pt-16 pb-28 md:pt-24 md:pb-40">
        {/* Left column */}
        <div className="md:col-span-6 space-y-6">
          {/* Label clip-reveal */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ...TRANSITION_BASE, delay: 0 }}
            >
              <MonoLabel>Built for Enterprise Scale</MonoLabel>
            </motion.div>
          </div>

          {/* H1 display */}
          <h1 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.92] tracking-[-0.02em] text-paper font-normal">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ...TRANSITION_BASE, delay: 0.12 }}
              >
                Precision Infrastructure
              </motion.div>
            </div>
            <div className="overflow-hidden italic">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ...TRANSITION_BASE, delay: 0.24 }}
              >
                Powered by AI.
              </motion.div>
            </div>
          </h1>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...TRANSITION_BASE, delay: 0.36 }}
            className="font-body text-[15px] md:text-base text-ghost leading-relaxed max-w-lg"
          >
            99% automation accuracy. 60% faster operational cycles.
            Enterprise-scale infrastructure for high-stakes decisions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...TRANSITION_BASE, delay: 0.48 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full">
                Request Demo
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full">
                View Pilot Program →
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right column (Terminal) */}
        <div className="md:col-span-6 flex items-center justify-end z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[600px] shadow-2xl"
          >
            <TerminalHero />
          </motion.div>
        </div>
      </div>

      {/* Bottom Marquee Strip — CSS animation runs off main thread */}
      <div className="border-t border-wire bg-ink py-5 z-10">
        <div className="container flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span className="font-mono text-[10px] tracking-wider text-ghost uppercase shrink-0">
            built for SaaS brands
          </span>
          <div className="overflow-hidden whitespace-nowrap relative flex-1">
            {/* Fade bounds */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

            <div
              className="inline-flex gap-16 animate-marquee"
              aria-hidden="true"
            >
              {[...brands, ...brands].map((brand, i) => (
                <span
                  key={i}
                  className="font-mono text-[11px] tracking-widest text-ghost uppercase"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

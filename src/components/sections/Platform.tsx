"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MonoLabel } from "../ui/MonoLabel";
import { TagChip } from "../ui/TagChip";
import { CircuitTraces } from "../backgrounds/CircuitTraces";

export const Platform: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Continuous Integration",
      body: "Our platform orchestrates AI models, structured data, and custom business operations to deliver fast, real-time automated workflows. Connect forms, databases, and APIs.",
      image: "/images/dashboard-ci.png",
      fallbackImage: "/assets/platform_mockup_v2.png",
    },
    {
      title: "Autonomous Agents",
      body: "Deploy custom fine-tuned LLMs and smart tools trained on your internal data to automate cognitive tasks without hallucination risk.",
      image: "/images/dashboard-agents.png",
      fallbackImage: "/assets/platform_mockup_v2.png",
    },
    {
      title: "Case Deployments",
      body: "Three live deployments across CRM, ledger, and OCR infrastructure showcase the breadth and reliability of the system.",
      cases: [
        {
          name: "Aventra CRM",
          type: "AI Scoring",
          desc: "Lead scoring pipeline",
        },
        {
          name: "Nexora Ledger",
          type: "Multi-Tenant",
          desc: "Financial ledger scale",
        },
        {
          name: "DocuFlow OCR",
          type: "OCR Engine",
          desc: "Document processing pipeline",
        },
      ],
    },
  ];

  return (
    <section
      id="platform"
      className="py-24 bg-void border-t border-wire relative overflow-hidden"
    >
      <CircuitTraces />
      <div className="container relative z-10">
        {/* Header Row */}
        <div className="mb-12">
          <MonoLabel>01 / The Platform</MonoLabel>
          <h2 className="font-display text-[clamp(36px,4.5vw,64px)] text-paper leading-[1.0] mt-2">
            Operate at scale.
          </h2>
        </div>

        {/* Desktop View: Tabs + Pane (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-start">
          {/* Left: Sticky Tab List (col-span 4) */}
          <div className="col-span-4 sticky top-24 space-y-4">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative w-full text-left py-4 px-4 border-l-2 transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                  activeTab === idx
                    ? "border-transparent text-paper bg-ash"
                    : "border-wire text-ghost hover:text-paper hover:bg-ash/30"
                }`}
                style={{ transitionTimingFunction: 'var(--ease-out)' }}
              >
                {activeTab === idx && <div className="tab-indicator" />}
                <span className="font-mono text-[11px] tracking-wider block text-whisper mb-1">
                  01.{idx + 1}
                </span>
                <span className="font-body text-base font-semibold leading-tight">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Content Pane (col-span 8) */}
          <div className="col-span-8 min-h-[420px] bg-ash border border-smoke p-8 relative overflow-hidden flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-body text-xl font-semibold text-paper">
                    {tabs[activeTab].title}
                  </h3>
                  <p className="font-body text-[15px] text-ghost leading-relaxed mt-2 max-w-xl">
                    {tabs[activeTab].body}
                  </p>
                </div>

                {/* Pane Content */}
                <div className="mt-8 flex-1 flex items-end">
                  {tabs[activeTab].cases ? (
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {tabs[activeTab].cases?.map((c, i) => (
                        <div
                          key={i}
                          className="border border-smoke p-4 bg-ink space-y-3"
                        >
                          <TagChip>{c.type}</TagChip>
                          <div>
                            <h4 className="font-body text-sm font-semibold text-paper">
                              {c.name}
                            </h4>
                            <p className="font-body text-xs text-ghost mt-1">
                              {c.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[1.83] overflow-hidden border border-smoke bg-ink">
                      <Image
                        src={tabs[activeTab].image}
                        alt={tabs[activeTab].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = tabs[activeTab].fallbackImage || "";
                        }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View: Accordion (hidden on desktop) */}
        <div className="md:hidden space-y-4">
          {tabs.map((tab, idx) => {
            const isOpen = activeTab === idx;
            return (
              <div
                key={idx}
                className="border border-smoke bg-ash overflow-hidden"
              >
                <button
                  onClick={() => setActiveTab(isOpen ? -1 : idx)}
                  className="w-full text-left py-4 px-5 flex items-center justify-between border-b border-wire bg-ink active:scale-[0.98] transition-transform duration-200"
                  style={{ transitionTimingFunction: 'var(--ease-out)' }}
                >
                  <div>
                    <span className="font-mono text-[9px] tracking-wider text-ghost uppercase block mb-0.5">
                      01.{idx + 1}
                    </span>
                    <span className="font-body text-sm font-semibold text-paper">
                      {tab.title}
                    </span>
                  </div>
                  <span className="text-ghost font-mono text-xs">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 space-y-6"
                    >
                      <p className="font-body text-xs text-ghost leading-relaxed">
                        {tab.body}
                      </p>

                      {tab.cases ? (
                        <div className="grid grid-cols-1 gap-3">
                          {tab.cases.map((c, i) => (
                            <div
                              key={i}
                              className="border border-smoke p-4 bg-ink space-y-2"
                            >
                              <TagChip>{c.type}</TagChip>
                              <div>
                                <h4 className="font-body text-xs font-semibold text-paper">
                                  {c.name}
                                </h4>
                                <p className="font-body text-[11px] text-ghost mt-0.5">
                                  {c.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="relative w-full aspect-[1.83] overflow-hidden border border-smoke bg-ink">
                          <Image
                            src={tab.image}
                            alt={tab.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = tab.fallbackImage || "";
                            }}
                          />
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

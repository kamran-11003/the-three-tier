"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Shield, Plug, BarChart3, Layers } from "lucide-react";
import { FADE_UP, STAGGER_CONTAINER } from "../../lib/motion";

export const Features: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const features = [
    {
      icon: (
        <Cpu className="h-8 w-8 stroke-[1] text-ghost group-hover:text-signal transition-colors duration-300" />
      ),
      title: "AI Orchestration",
      body: "Connect AI models, data pipelines, and custom logic into production workflows.",
    },
    {
      icon: (
        <Zap className="h-8 w-8 stroke-[1] text-ghost group-hover:text-signal transition-colors duration-300" />
      ),
      title: "Zero Hallucination",
      body: "Fine-tuned LLMs trained on your internal data deliver accurate, grounded outputs.",
    },
    {
      icon: (
        <Shield className="h-8 w-8 stroke-[1] text-ghost group-hover:text-signal transition-colors duration-300" />
      ),
      title: "Enterprise Security",
      body: "SOC2-compliant infrastructure with multi-tenant isolation and audit trails.",
    },
    {
      icon: (
        <Plug className="h-8 w-8 stroke-[1] text-ghost group-hover:text-signal transition-colors duration-300" />
      ),
      title: "API-First Design",
      body: "Headless by design. Connect any frontend, form, CRM, or database via REST.",
    },
    {
      icon: (
        <BarChart3 className="h-8 w-8 stroke-[1] text-ghost group-hover:text-signal transition-colors duration-300" />
      ),
      title: "Real-Time Analytics",
      body: "Live monitoring dashboards with custom KPI tracking and alert systems.",
    },
    {
      icon: (
        <Layers className="h-8 w-8 stroke-[1] text-ghost group-hover:text-signal transition-colors duration-300" />
      ),
      title: "Multi-Tenant Scale",
      body: "Serve thousands of tenants from a single deployment with zero shared state.",
    },
  ];

  return (
    <section className="py-24 bg-ink border-t border-wire relative overflow-hidden">
      <div className="container" ref={containerRef}>
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={FADE_UP}
              className="bg-ash border border-smoke p-8 flex flex-col justify-between min-h-[260px] group hover:border-signal hover:bg-ember transition-all duration-300"
            >
              <div className="space-y-6">
                <div>{feat.icon}</div>
                <div className="space-y-2">
                  <h3 className="font-body text-[18px] font-semibold text-paper tracking-[-0.01em]">
                    {feat.title}
                  </h3>
                  <p className="font-body text-[14px] text-ghost leading-relaxed">
                    {feat.body}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <span className="font-mono text-[10px] tracking-wide text-ghost group-hover:text-signal transition-colors duration-300 uppercase">
                  → Learn more
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

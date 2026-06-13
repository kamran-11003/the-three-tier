"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Layers } from "lucide-react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";
import { MonoLabel } from "../../components/ui/MonoLabel";

const TRANSITION_BASE = {
  duration: 0.4,
  ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
};

const plans = [
  {
    index: "01",
    name: "Pilot",
    price: { monthly: "$0", annual: "$0" },
    period: "14-day free trial",
    tagline: "For teams evaluating enterprise AI infrastructure.",
    icon: <Zap className="h-5 w-5" strokeWidth={1} />,
    cta: "Start free trial",
    ctaStyle: "secondary",
    features: [
      "Up to 3 AI workflows",
      "1 autonomous agent",
      "5,000 API calls / month",
      "Community support",
      "Single tenant",
      "Basic analytics",
    ],
    highlighted: false,
  },
  {
    index: "02",
    name: "Scale",
    price: { monthly: "$490", annual: "$390" },
    period: "per month",
    tagline: "For growing companies running AI at production scale.",
    icon: <Layers className="h-5 w-5" strokeWidth={1} />,
    cta: "Request access",
    ctaStyle: "primary",
    features: [
      "Unlimited AI workflows",
      "10 autonomous agents",
      "500,000 API calls / month",
      "Priority email support",
      "Multi-tenant ready",
      "Real-time analytics",
      "Custom model fine-tuning",
      "99.9% uptime SLA",
    ],
    highlighted: true,
  },
  {
    index: "03",
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    period: "volume pricing",
    tagline: "For organisations with mission-critical infrastructure needs.",
    icon: <Shield className="h-5 w-5" strokeWidth={1} />,
    cta: "Talk to sales",
    ctaStyle: "secondary",
    features: [
      "Unlimited everything",
      "Unlimited agents",
      "Dedicated infrastructure",
      "Dedicated success engineer",
      "Air-gapped deployment option",
      "SOC2 audit support",
      "Custom SLAs",
      "Contract pricing",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "What counts as an API call?",
    a: "Every request routed through The Three Tier platform — whether to an AI model, database, or external integration — counts as one API call. Webhook receipts do not count.",
  },
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Yes. Plan changes take effect immediately and are prorated to the day. Downgrades apply at the start of the next billing cycle.",
  },
  {
    q: "Is my data used to train models?",
    a: "Never. All data processed through your workflows is strictly isolated per tenant and is never used for model training of any kind.",
  },
  {
    q: "How long does onboarding take?",
    a: "Pilot accounts are live in minutes. Full Scale and Enterprise integrations are typically complete in under two weeks, with dedicated engineer support.",
  },
  {
    q: "Do you offer non-profit or startup discounts?",
    a: "Yes. Contact us — we have specific programs for early-stage startups and non-profit organisations operating on tight infrastructure budgets.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "The Three Tier",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        name: "Pilot",
        price: "0",
        priceCurrency: "USD",
        description: "14-day free trial for teams evaluating enterprise AI infrastructure.",
      },
      {
        "@type": "Offer",
        name: "Scale",
        price: "490",
        priceCurrency: "USD",
        description: "For growing companies running AI at production scale.",
        billingIncrement: "P1M",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        description: "Custom pricing for mission-critical infrastructure needs.",
      },
    ],
  };

  return (
    <div className="min-h-full flex flex-col bg-ink text-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-wire relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 60% 80% at 50% 40%, black 0%, transparent 100%)",
          }}
        />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...TRANSITION_BASE, delay: 0 }}
          >
            <MonoLabel>02 / Pricing</MonoLabel>
          </motion.div>
          <div className="overflow-hidden mt-4">
            <motion.h1
              className="font-display text-[clamp(48px,6vw,88px)] leading-[0.92] tracking-[-0.02em] text-paper"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ...TRANSITION_BASE, delay: 0.1 }}
            >
              Simple, honest pricing.
            </motion.h1>
          </div>
          <motion.p
            className="font-body text-[15px] text-ghost leading-relaxed mt-6 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...TRANSITION_BASE, delay: 0.2 }}
          >
            No seat fees. No hidden overages. Pay for infrastructure usage, not
            headcount. Start free — scale when you&apos;re ready.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            className="mt-10 inline-flex items-center gap-4 border border-smoke p-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 font-mono text-[11px] tracking-[0.08em] uppercase transition-all duration-200 cursor-pointer ${
                !annual
                  ? "bg-signal text-signal-dark"
                  : "text-ghost hover:text-paper"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 font-mono text-[11px] tracking-[0.08em] uppercase transition-all duration-200 cursor-pointer ${
                annual
                  ? "bg-signal text-signal-dark"
                  : "text-ghost hover:text-paper"
              }`}
            >
              Annual
              <span className="ml-2 text-[9px] tracking-wider opacity-70">
                −20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-void">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-smoke">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.index}
                className={`flex flex-col p-8 relative ${
                  plan.highlighted ? "bg-ash" : "bg-ink"
                }`}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ ...TRANSITION_BASE, delay: 0.05 * idx + 0.1 }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-signal" />
                )}

                {/* Plan header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest text-whisper uppercase">
                      {plan.index}
                    </span>
                    <span className="text-ghost">{plan.icon}</span>
                  </div>

                  <div>
                    <h2 className="font-body text-xl font-semibold text-paper">
                      {plan.name}
                    </h2>
                    <p className="font-body text-[13px] text-ghost mt-1 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-smoke">
                    <div className="font-display text-[clamp(36px,4vw,52px)] leading-none tracking-[-0.02em] text-paper">
                      {annual ? plan.price.annual : plan.price.monthly}
                    </div>
                    <span className="font-mono text-[10px] tracking-wide text-ghost uppercase mt-1 block">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 font-body text-[13px] text-ghost"
                    >
                      <Check
                        className="h-3.5 w-3.5 text-signal mt-0.5 flex-shrink-0"
                        strokeWidth={2}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10">
                  <a
                    href={plan.name === "Enterprise" ? "/contact" : "/app"}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-body text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-150 active:scale-[0.97] cursor-pointer ${
                      plan.ctaStyle === "primary"
                        ? "bg-signal text-signal-dark hover:bg-transparent hover:text-signal border border-signal"
                        : "bg-transparent text-ghost border border-smoke hover:border-ghost hover:text-paper"
                    }`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                  >
                    {plan.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison note */}
      <section className="py-16 border-t border-wire bg-ink">
        <div className="container text-center">
          <MonoLabel>All plans include</MonoLabel>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-smoke max-w-3xl mx-auto">
            {[
              "End-to-end encryption",
              "GDPR compliant",
              "99% accuracy guarantee",
              "Zero vendor lock-in",
            ].map((item) => (
              <div
                key={item}
                className="bg-ink px-6 py-5 font-body text-[13px] text-ghost text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-void border-t border-wire">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <MonoLabel>Frequently asked</MonoLabel>
            <h2 className="font-display text-[clamp(32px,3.5vw,52px)] text-paper leading-[1.0] mt-3 mb-12">
              Common questions.
            </h2>

            <div className="space-y-px">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-smoke bg-ash">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === idx ? null : idx)
                    }
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-ember transition-colors duration-150"
                  >
                    <span className="font-body text-[14px] font-semibold text-paper leading-snug">
                      {faq.q}
                    </span>
                    <motion.span 
                      className="font-mono text-ghost text-lg flex-shrink-0 origin-center inline-block"
                      animate={{ rotate: openFaq === idx ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                      animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                      exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="px-6 pb-5 overflow-hidden"
                    >
                      <p className="font-body text-[13px] text-ghost leading-relaxed border-t border-smoke pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 border-t border-wire bg-ink relative overflow-hidden">
        <div className="cta-grid-pulse" />
        <div className="container relative z-10 text-center">
          <MonoLabel>Ready to deploy?</MonoLabel>
          <h2 className="font-display text-[clamp(36px,4.5vw,64px)] text-paper leading-[1.0] mt-4 mb-6">
            Start operating at enterprise scale.
          </h2>
          <p className="font-body text-[15px] text-ghost max-w-md mx-auto mb-10">
            Full integration in under two weeks. No contracts on Pilot.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/app"
              className="inline-flex items-center gap-2 bg-signal text-signal-dark px-8 py-3.5 font-body text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-transparent hover:text-signal border border-signal transition-all duration-150 active:scale-[0.97]"
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
            >
              Start free trial
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-transparent text-ghost border border-smoke px-8 py-3.5 font-body text-[13px] font-semibold tracking-[0.06em] uppercase hover:border-ghost hover:text-paper transition-all duration-150 active:scale-[0.97]"
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

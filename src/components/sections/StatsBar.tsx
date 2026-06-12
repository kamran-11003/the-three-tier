"use client";

import React from "react";
import { CounterStat } from "../ui/CounterStat";
import { motion, Variants } from "framer-motion";

export const StatsBar: React.FC = () => {
  const stats = [
    { value: "99%", label: "Automation Accuracy" },
    { value: "60%", label: "Faster Operational Cycles" },
    { value: "3×", label: "Faster Deployment" },
    { value: "SOC2", label: "Compliant Infrastructure" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <section className="py-8 bg-ash border-y border-wire relative overflow-hidden">
      <div className="container">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              variants={item}
              key={idx}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                idx > 0 ? "md:border-l md:border-wire" : ""
              }`}
            >
              <span className="font-display text-[clamp(48px,6vw,80px)] leading-none text-paper tracking-[-0.02em]">
                <CounterStat value={stat.value} />
              </span>
              <span className="font-mono text-[10px] text-ghost tracking-wider uppercase mt-2 max-w-[150px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

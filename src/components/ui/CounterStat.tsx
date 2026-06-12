"use client";

import React, { useEffect, useState, useRef } from "react";

interface CounterStatProps {
  value: string;
}

export const CounterStat: React.FC<CounterStatProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [ripple, setRipple] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const numericMatch = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!numericMatch) {
      setTimeout(() => setDisplayValue(value), 0);
      return;
    }

    const targetNumber = parseFloat(numericMatch[1]);
    const suffix = numericMatch[2];
    const duration = 1200;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutExpo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = ease * targetNumber;

            const isFloat = numericMatch[1].includes(".");
            const formatted = isFloat
              ? current.toFixed(1)
              : Math.floor(current).toString();
            setDisplayValue(`${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
              setRipple(true);
              setTimeout(() => setRipple(false), 800);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="relative inline-block">
      {ripple && (
        <span
          className="absolute inset-0 rounded-full border border-[#E3D9C6]"
          style={{ animation: 'ripple-out 0.8s ease-out forwards' }}
        />
      )}
      <span ref={elementRef}>{displayValue}</span>
    </div>
  );
};

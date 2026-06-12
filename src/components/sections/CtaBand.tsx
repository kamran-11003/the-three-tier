import React from "react";
import { MonoLabel } from "../ui/MonoLabel";
import { Button } from "../ui/Button";

export const CtaBand: React.FC = () => {
  return (
    <section className="py-36 bg-void border-t border-wire relative overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Grid Overlay */}
      <div className="cta-grid-pulse" />

      <div className="container relative z-10 max-w-2xl space-y-6">
        <MonoLabel>Ready to deploy?</MonoLabel>
        <h2 className="font-display text-[clamp(36px,4.5vw,64px)] text-paper leading-[1.0]">
          Start operating at enterprise scale.
        </h2>
        <p className="font-body text-[15px] text-ghost leading-relaxed max-w-md mx-auto">
          Join the pilot program. Full integration in under 2 weeks.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#contact">
            <Button variant="primary">Request Demo</Button>
          </a>
          <a href="#contact">
            <Button variant="secondary">View Pilot →</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

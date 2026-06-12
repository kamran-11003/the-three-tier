import React from "react";

interface MonoLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const MonoLabel: React.FC<MonoLabelProps> = ({
  children,
  className = "",
}) => {
  return (
    <span
      className={`font-mono text-[11px] tracking-[0.12em] uppercase text-ghost ${className}`}
    >
      {children}
    </span>
  );
};

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseClass =
    "inline-flex items-center justify-center gap-2 px-7 py-3 text-[13px] font-semibold tracking-[0.06em] uppercase font-body transition-all duration-200 focus:outline-none cursor-pointer active:scale-[0.97]";
  const variantClass =
    variant === "primary"
      ? "bg-signal text-signal-dark border border-signal hover:bg-transparent hover:text-signal"
      : "bg-transparent text-ghost border border-smoke hover:border-ghost hover:text-paper";

  return (
    <button 
      className={`${baseClass} ${variantClass} ${className}`} 
      style={{ transitionTimingFunction: 'var(--ease-out)', ...props.style }}
      {...props}
    >
      <span className="inline-flex items-center gap-2 group-active:blur-[1px] transition-all duration-200">
        {children}
      </span>
    </button>
  );
};

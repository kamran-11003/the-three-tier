import React from "react";

interface TagChipProps {
  children: React.ReactNode;
}

export const TagChip: React.FC<TagChipProps> = ({ children }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-mono tracking-wider text-ghost uppercase border border-smoke bg-void">
      {children}
    </span>
  );
};

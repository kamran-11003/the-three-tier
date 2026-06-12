export const TRANSITION_BASE = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
};

export const FADE_UP = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { ...TRANSITION_BASE },
};

export const CLIP_REVEAL = {
  initial: { clipPath: "inset(100% 0 0 0)" },
  animate: { clipPath: "inset(0% 0 0 0)" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export const STAGGER_CONTAINER = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

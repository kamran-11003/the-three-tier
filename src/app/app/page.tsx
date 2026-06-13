"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, EyeOff, Loader } from "lucide-react";

const TRANSITION_BASE = {
  duration: 0.4,
  ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
};

const DEMO_WORKSPACES = [
  {
    id: "aventra",
    name: "Aventra CRM",
    slug: "aventra.thethreetier.com",
    status: "operational",
    agents: 3,
    lastActive: "2 min ago",
  },
  {
    id: "nexora",
    name: "Nexora Ledger",
    slug: "nexora.thethreetier.com",
    status: "operational",
    agents: 7,
    lastActive: "Just now",
  },
  {
    id: "docuflow",
    name: "DocuFlow OCR",
    slug: "docuflow.thethreetier.com",
    status: "operational",
    agents: 2,
    lastActive: "12 min ago",
  },
];

type Screen = "login" | "workspace";

export default function AppPage() {
  const [screen, setScreen] = useState<Screen>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setScreen("workspace");
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-ink text-paper flex flex-col relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top bar */}
      <header className="relative z-10 h-[60px] flex items-center border-b border-wire px-8">
        <a
          href="/"
          className="flex items-center gap-3 group active:scale-[0.97] transition-transform duration-200"
        >
          <div className="w-5 h-5 border border-signal flex flex-col justify-between p-0.5 transition-colors group-hover:border-paper">
            <div className="h-1 bg-signal w-full transition-colors group-hover:bg-paper" />
            <div className="h-1 bg-signal w-full transition-colors group-hover:bg-paper" />
            <div className="h-1 bg-signal w-full transition-colors group-hover:bg-paper" />
          </div>
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-paper font-semibold">
            THE THREE TIER
          </span>
        </a>

        <div className="ml-auto flex items-center gap-6">
          <span className="font-mono text-[10px] tracking-widest uppercase text-whisper">
            Secure access
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            <span className="font-mono text-[10px] tracking-wide text-ghost uppercase">
              System operational
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center py-16 relative z-10">
        <AnimatePresence mode="wait">
          {screen === "login" ? (
            <motion.div
              key="login"
              className="w-full max-w-sm"
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={TRANSITION_BASE}
            >
            {/* Header */}
            <div className="mb-10">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ghost">
                01 / Authentication
              </span>
              <h1 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] tracking-[-0.02em] text-paper mt-3">
                Sign in to your{" "}
                <em className="italic">workspace.</em>
              </h1>
              <p className="font-body text-[13px] text-ghost mt-4 leading-relaxed">
                Enterprise access only. Contact your administrator if you need
                an account.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1">
                <label className="font-mono text-[10px] tracking-[0.1em] uppercase text-ghost block">
                  Work email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-ash border border-smoke text-paper font-body text-[14px] px-4 py-3 placeholder:text-whisper focus:outline-none focus:border-signal transition-colors duration-200"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] tracking-[0.1em] uppercase text-ghost block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-ash border border-smoke text-paper font-body text-[14px] px-4 py-3 pr-12 placeholder:text-whisper focus:outline-none focus:border-signal transition-colors duration-200"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-ghost hover:text-paper transition-colors duration-200 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" strokeWidth={1.5} />
                    ) : (
                      <Eye className="h-4 w-4" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <p className="font-mono text-[10px] tracking-wide text-red-400 uppercase">
                  {error}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-signal text-signal-dark px-6 py-3.5 font-body text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-transparent hover:text-signal border border-signal transition-all duration-150 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  {loading ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      className="flex items-center gap-2"
                    >
                      <Loader className="h-3.5 w-3.5 animate-spin" />
                      Authenticating
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      className="flex items-center gap-2"
                    >
                      Sign in
                      <ArrowRight className="h-3.5 w-3.5" />
                    </motion.div>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href="#"
                  className="font-mono text-[10px] tracking-wide text-ghost hover:text-paper uppercase transition-colors duration-200"
                >
                  Forgot password?
                </a>
                <a
                  href="/pricing"
                  className="font-mono text-[10px] tracking-wide text-ghost hover:text-paper uppercase transition-colors duration-200"
                >
                  Request access →
                </a>
              </div>
            </form>

            {/* Demo notice */}
            <div className="mt-10 p-4 border border-wire bg-ash">
              <p className="font-mono text-[10px] tracking-wide text-ghost leading-relaxed uppercase">
                Demo mode — use any email and password to preview the workspace
                selector.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="workspace"
            className="w-full max-w-xl"
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={TRANSITION_BASE}
          >
            <div className="mb-10">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ghost">
                02 / Workspace
              </span>
              <h1 className="font-display text-[clamp(28px,3.5vw,44px)] leading-[0.95] tracking-[-0.02em] text-paper mt-3">
                Select workspace.
              </h1>
              <p className="font-body text-[13px] text-ghost mt-3">
                You have access to {DEMO_WORKSPACES.length} workspaces.
              </p>
            </div>

            <div className="space-y-px">
              {DEMO_WORKSPACES.map((ws, idx) => (
                <motion.a
                  key={ws.id}
                  href="#"
                  className="flex items-center justify-between p-5 bg-ash border border-smoke hover:border-signal hover:bg-ember group transition-all duration-150 active:scale-[0.99] block"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                  initial={{ opacity: 0, x: -12, filter: "blur(2px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ ...TRANSITION_BASE, delay: idx * 0.05 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-smoke flex items-center justify-center group-hover:border-signal transition-colors duration-200">
                      <span className="font-mono text-[9px] text-ghost group-hover:text-signal uppercase tracking-wider transition-colors duration-200">
                        0{idx + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-paper">
                        {ws.name}
                      </h3>
                      <p className="font-mono text-[10px] text-whisper tracking-wide mt-0.5">
                        {ws.slug}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden sm:block text-right">
                      <p className="font-mono text-[10px] text-ghost uppercase tracking-wide">
                        {ws.agents} agents
                      </p>
                      <p className="font-mono text-[10px] text-whisper tracking-wide mt-0.5">
                        {ws.lastActive}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-signal" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-ghost">
                        {ws.status}
                      </span>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-ghost group-hover:text-signal transition-colors duration-200 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setScreen("login")}
                className="font-mono text-[10px] tracking-wide text-ghost hover:text-paper uppercase transition-colors duration-200 cursor-pointer"
              >
                ← Sign out
              </button>
              <a
                href="/pricing"
                className="font-mono text-[10px] tracking-wide text-ghost hover:text-paper uppercase transition-colors duration-200"
              >
                Add workspace →
              </a>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>

      {/* Footer strip */}
      <footer className="relative z-10 h-[48px] border-t border-wire flex items-center px-8">
        <div className="container flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-wide text-whisper uppercase">
            © {new Date().getFullYear()} The Three Tier
          </span>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Status"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-mono text-[10px] tracking-wide text-whisper hover:text-ghost uppercase transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

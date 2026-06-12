import React, { useState } from "react";
import {
  Cpu,
  GitBranch,
  Bot,
  Layers,
  BarChart3,
  Settings,
  Search,
  Bell,
  CheckCircle,
} from "lucide-react";

export const ProductMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState("workflows");

  // Simulation of workflow nodes
  const nodes = [
    {
      id: "input",
      label: "API Webhook",
      sub: "Inbound Stream",
      x: 10,
      y: 50,
      icon: <Layers className="h-4 w-4" />,
      status: "active",
    },
    {
      id: "orchestrator",
      label: "AI Orchestrator",
      sub: "GPT-4 / Claude",
      x: 42,
      y: 20,
      icon: <Cpu className="h-4 w-4" />,
      status: "active",
    },
    {
      id: "agent",
      label: "Agent Guard",
      sub: "Grounded RAG",
      x: 42,
      y: 80,
      icon: <Bot className="h-4 w-4" />,
      status: "active",
    },
    {
      id: "output",
      label: "Ledger Commit",
      sub: "ERP Integration",
      x: 80,
      y: 50,
      icon: <CheckCircle className="h-4 w-4" />,
      status: "pending",
    },
  ];

  return (
    <div className="relative w-full aspect-[1.56] bg-[#0A0A0A] border border-smoke text-paper font-body overflow-hidden shadow-2xl flex select-none">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Sidebar */}
      <div className="w-[180px] bg-ink border-r border-smoke p-4 flex flex-col justify-between z-10">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border border-signal flex flex-col justify-between p-0.5">
              <div className="h-1 bg-signal w-full" />
              <div className="h-1 bg-signal w-full" />
              <div className="h-1 bg-signal w-full" />
            </div>
            <span className="font-mono text-[9px] tracking-wider uppercase text-paper font-semibold">
              The Three Tier
            </span>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {[
              { id: "overview", label: "Overview", icon: <BarChart3 className="h-3.5 w-3.5" /> },
              { id: "workflows", label: "Workflows", icon: <GitBranch className="h-3.5 w-3.5" /> },
              { id: "agents", label: "Agents", icon: <Bot className="h-3.5 w-3.5" /> },
              { id: "settings", label: "Settings", icon: <Settings className="h-3.5 w-3.5" /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 text-[11px] font-mono tracking-wider uppercase transition-colors ${
                  activeTab === item.id
                    ? "text-signal border-l-2 border-signal bg-ash"
                    : "text-ghost hover:text-paper hover:bg-ember/50 border-l-2 border-transparent"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 border-t border-wire pt-3">
          <div className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
          <span className="font-mono text-[9px] tracking-wider text-ghost uppercase">
            Sys: Operational
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 z-10">
        {/* Top bar */}
        <div className="h-12 border-b border-smoke px-6 flex items-center justify-between bg-ink">
          <div className="flex items-center gap-2 text-ghost">
            <Search className="h-3.5 w-3.5" />
            <span className="text-[10px] font-mono tracking-wider uppercase">
              Search workflows...
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-3.5 w-3.5 text-ghost hover:text-paper cursor-pointer" />
            <div className="w-5 h-5 rounded-full border border-smoke bg-ash flex items-center justify-center text-[9px] font-mono">
              F1
            </div>
          </div>
        </div>

        {/* Content Pane */}
        <div className="flex-1 p-6 flex flex-col space-y-5 bg-[#0F0F0F] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-ghost uppercase">
                Core System
              </span>
              <h3 className="text-sm font-semibold text-paper -mt-0.5">
                Workflow Orchestrator
              </h3>
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono tracking-wider text-signal border border-signal bg-signal-dark uppercase">
                Active Node Graph
              </span>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Pipeline Runs", val: "142,891", rate: "+14.2%" },
              { label: "Exec Accuracy", val: "99.92%", rate: "Optimal" },
              { label: "Latency Target", val: "165ms", rate: "-12ms" },
            ].map((stat, i) => (
              <div key={i} className="bg-ash border border-smoke p-3">
                <p className="text-[8px] font-mono tracking-widest text-ghost uppercase">
                  {stat.label}
                </p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-base font-semibold font-body text-paper leading-none">
                    {stat.val}
                  </span>
                  <span className="text-[9px] font-mono text-signal">
                    {stat.rate}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Node Graph Area */}
          <div className="flex-1 min-h-[160px] bg-ash border border-smoke relative flex items-center justify-between p-4 overflow-hidden">
            {/* SVG Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Path 1: Input to Orchestrator */}
              <path
                d="M 60 90 Q 150 90 150 50"
                fill="none"
                stroke="var(--smoke)"
                strokeWidth="1"
              />
              <path
                d="M 60 90 Q 150 90 150 50"
                fill="none"
                stroke="var(--signal)"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="animate-[marquee_10s_linear_infinite]"
              />

              {/* Path 2: Input to Agent */}
              <path
                d="M 60 90 Q 150 90 150 130"
                fill="none"
                stroke="var(--smoke)"
                strokeWidth="1"
              />
              <path
                d="M 60 90 Q 150 90 150 130"
                fill="none"
                stroke="var(--signal)"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="animate-[marquee_10s_linear_infinite]"
                style={{ animationDirection: "reverse" }}
              />

              {/* Path 3: Orchestrator to Output */}
              <path
                d="M 230 50 Q 230 90 320 90"
                fill="none"
                stroke="var(--smoke)"
                strokeWidth="1"
              />
              <path
                d="M 230 50 Q 230 90 320 90"
                fill="none"
                stroke="var(--signal)"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="animate-[marquee_10s_linear_infinite]"
              />

              {/* Path 4: Agent to Output */}
              <path
                d="M 230 130 Q 230 90 320 90"
                fill="none"
                stroke="var(--smoke)"
                strokeWidth="1"
              />
              <path
                d="M 230 130 Q 230 90 320 90"
                fill="none"
                stroke="var(--signal)"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="animate-[marquee_10s_linear_infinite]"
                style={{ animationDirection: "reverse" }}
              />
            </svg>

            {/* Nodes */}
            <div className="relative w-full h-full flex items-center justify-between px-6">
              {/* Col 1 */}
              <div className="flex flex-col justify-center h-full">
                <NodeItem node={nodes[0]} />
              </div>

              {/* Col 2 */}
              <div className="flex flex-col justify-between h-full py-2">
                <NodeItem node={nodes[1]} />
                <NodeItem node={nodes[2]} />
              </div>

              {/* Col 3 */}
              <div className="flex flex-col justify-center h-full">
                <NodeItem node={nodes[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NodeItem: React.FC<{ node: any }> = ({ node }) => {
  return (
    <div className="w-[120px] bg-ink border border-smoke hover:border-signal p-2 transition-all duration-300 cursor-pointer group flex flex-col space-y-1 z-20">
      <div className="flex items-center justify-between">
        <div className="text-ghost group-hover:text-signal transition-colors">
          {node.icon}
        </div>
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            node.status === "active" ? "bg-signal" : "bg-wire"
          }`}
        />
      </div>
      <div className="mt-1">
        <p className="text-[9px] font-semibold text-paper tracking-tight truncate leading-none">
          {node.label}
        </p>
        <p className="text-[7px] font-mono text-ghost tracking-wider uppercase mt-0.5 truncate">
          {node.sub}
        </p>
      </div>
    </div>
  );
};

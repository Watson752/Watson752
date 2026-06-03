import type { NodeEvidenceLevel, PortfolioNodeCategory } from "@/lib/types";

export function evidenceLabel(level: NodeEvidenceLevel): string {
  const labels: Record<NodeEvidenceLevel, string> = {
    "project-live": "Live project",
    "project-built": "Built project",
    documented: "Documented",
    learning: "Learning",
    interest: "Interest",
  };
  return labels[level];
}

export function evidenceBadgeClass(level: NodeEvidenceLevel): string {
  const map: Record<NodeEvidenceLevel, string> = {
    "project-live": "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
    "project-built": "bg-emerald-500/10 text-emerald-200 ring-emerald-500/20",
    documented: "bg-violet-500/15 text-violet-200 ring-violet-500/30",
    learning: "bg-amber-500/15 text-amber-200 ring-amber-500/30",
    interest: "bg-slate-500/15 text-slate-300 ring-slate-500/30",
  };
  return map[level];
}

export function nodeGlowClass(
  evidenceLevel: NodeEvidenceLevel,
  category: PortfolioNodeCategory,
  highlighted: boolean,
): string {
  if (!highlighted && category === "domain") {
    return "shadow-[0_0_24px_rgba(59,130,246,0.35)] ring-blue-400/40";
  }
  switch (evidenceLevel) {
    case "project-live":
    case "project-built":
      return highlighted
        ? "shadow-[0_0_28px_rgba(52,211,153,0.55)] ring-emerald-400/60"
        : "shadow-[0_0_16px_rgba(52,211,153,0.25)] ring-emerald-500/30";
    case "documented":
      return highlighted
        ? "shadow-[0_0_28px_rgba(167,139,250,0.5)] ring-violet-400/60"
        : "shadow-[0_0_14px_rgba(167,139,250,0.2)] ring-violet-500/25";
    case "learning":
    case "interest":
      return highlighted
        ? "shadow-[0_0_24px_rgba(250,204,21,0.4)] ring-amber-400/50"
        : "shadow-[0_0_12px_rgba(250,204,21,0.15)] ring-amber-500/20";
    default:
      return highlighted
        ? "shadow-[0_0_20px_rgba(148,163,184,0.35)] ring-slate-400/40"
        : "";
  }
}

export function nodeSizeClass(category: PortfolioNodeCategory): string {
  switch (category) {
    case "domain":
      return "min-w-[140px] px-4 py-3 text-sm font-semibold";
    case "project":
    case "documentation":
      return "min-w-[120px] px-3 py-2.5 text-xs font-medium";
    default:
      return "min-w-[100px] px-3 py-2 text-xs";
  }
}

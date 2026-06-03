import type { NodeEvidenceLevel, PortfolioNode } from "@/lib/types";

export const EVIDENCE_LABELS: Record<NodeEvidenceLevel, string> = {
  "project-live": "Live project",
  "project-built": "Built project",
  documented: "Documented",
  learning: "Learning",
  interest: "Interest area",
};

export function getNodeHref(node: PortfolioNode): string {
  return `/knowledge/${node.id}`;
}

export const DEFAULT_VISIBLE_DOMAIN_IDS = [
  "domain-frontend",
  "domain-backend",
  "domain-data-ai",
  "domain-systems",
  "domain-projects",
  "domain-documentation",
] as const;

export const DEFAULT_SEED_NODE_IDS = [
  "project-portfolio-graph",
  "project-happyhour",
  "tech-nextjs",
] as const;

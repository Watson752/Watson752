import { portfolioEdges } from "@/data/portfolio-edges";
import { portfolioNodes } from "@/data/portfolio-nodes";
import {
  DEFAULT_SEED_NODE_IDS,
  DEFAULT_VISIBLE_DOMAIN_IDS,
} from "@/lib/node-helpers";
import type { PortfolioEdge, PortfolioNode } from "@/lib/types";

export function getVisibleNodeIds(options: {
  highlightedIds: string[];
  expandedDomainIds: string[];
  showRelated: boolean;
}): Set<string> {
  const visible = new Set<string>([
    ...DEFAULT_VISIBLE_DOMAIN_IDS,
    ...DEFAULT_SEED_NODE_IDS,
  ]);

  for (const domainId of options.expandedDomainIds) {
    visible.add(domainId);
    portfolioNodes
      .filter((n) => n.parentDomainId === domainId)
      .forEach((n) => visible.add(n.id));
  }

  const queue = [...options.highlightedIds];
  const seen = new Set<string>();

  while (queue.length) {
    const id = queue.shift()!;
    if (seen.has(id)) continue;
    seen.add(id);
    visible.add(id);

    const node = portfolioNodes.find((n) => n.id === id);
    if (!node) continue;

    node.relatedNodeIds.forEach((relatedId) => {
      if (!seen.has(relatedId)) queue.push(relatedId);
    });

    if (options.showRelated) {
      portfolioEdges
        .filter((e) => e.source === id || e.target === id)
        .forEach((e) => {
          const other = e.source === id ? e.target : e.source;
          if (!seen.has(other)) queue.push(other);
        });
    }
  }

  if (visible.size > 35) {
    const priority = new Set([
      ...DEFAULT_VISIBLE_DOMAIN_IDS,
      ...options.highlightedIds,
      ...DEFAULT_SEED_NODE_IDS,
    ]);
    const trimmed = new Set<string>();
    for (const id of visible) {
      if (priority.has(id) || trimmed.size < 35) trimmed.add(id);
      if (trimmed.size >= 35) break;
    }
    return trimmed;
  }

  return visible;
}

export function filterGraphData(visibleIds: Set<string>): {
  nodes: PortfolioNode[];
  edges: PortfolioEdge[];
} {
  const nodes = portfolioNodes.filter((n) => visibleIds.has(n.id));
  const nodeIdSet = new Set(nodes.map((n) => n.id));
  const edges = portfolioEdges.filter(
    (e) => nodeIdSet.has(e.source) && nodeIdSet.has(e.target),
  );
  return { nodes, edges };
}

export function layoutNodes(
  nodes: PortfolioNode[],
  expandedDomainIds: string[],
): Map<string, { x: number; y: number }> {
  const positions = new Map<string, { x: number; y: number }>();

  const domainOrder = [
    "domain-frontend",
    "domain-backend",
    "domain-data-ai",
    "domain-systems",
    "domain-projects",
    "domain-documentation",
  ];

  domainOrder.forEach((id, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    positions.set(id, { x: col * 320 + 80, y: row * 200 + 40 });
  });

  const childrenByDomain = new Map<string, PortfolioNode[]>();
  for (const node of nodes) {
    if (node.category === "domain") continue;
    const parent =
      node.parentDomainId ??
      node.relatedNodeIds.find((r) => r.startsWith("domain-")) ??
      "domain-projects";
    if (!childrenByDomain.has(parent)) childrenByDomain.set(parent, []);
    childrenByDomain.get(parent)!.push(node);
  }

  for (const [domainId, children] of childrenByDomain) {
    const base = positions.get(domainId) ?? { x: 400, y: 300 };
    const expanded = expandedDomainIds.includes(domainId);
    const slice = expanded ? children : children.slice(0, 4);
    slice.forEach((child, i) => {
      const angle = (i / Math.max(slice.length, 1)) * Math.PI * 1.2 - 0.6;
      const radius = child.category === "project" || child.category === "documentation" ? 140 : 100;
      positions.set(child.id, {
        x: base.x + Math.cos(angle) * radius,
        y: base.y + Math.sin(angle) * radius + 80,
      });
    });
  }

  nodes.forEach((node, index) => {
    if (!positions.has(node.id)) {
      positions.set(node.id, {
        x: 480 + (index % 5) * 40,
        y: 380 + Math.floor(index / 5) * 36,
      });
    }
  });

  return positions;
}

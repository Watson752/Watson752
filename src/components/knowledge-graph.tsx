"use client";

import { useCallback, useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  Handle,
  Position,
} from "@xyflow/react";
import type { PortfolioNode } from "@/lib/types";
import { getNodeHref } from "@/lib/node-helpers";
import { cn } from "@/lib/utils";

type GraphNodeData = {
  label: string;
  node: PortfolioNode;
  highlighted: boolean;
  dimmed: boolean;
};

function glowClass(node: PortfolioNode, highlighted: boolean): string {
  if (highlighted) return "ring-2 ring-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.45)]";
  switch (node.evidenceLevel) {
    case "project-live":
    case "project-built":
      return "shadow-[0_0_14px_rgba(52,211,153,0.35)] border-emerald-500/50";
    case "documented":
      return "shadow-[0_0_12px_rgba(167,139,250,0.35)] border-violet-500/40";
    case "learning":
    case "interest":
      return "shadow-[0_0_10px_rgba(251,191,36,0.25)] border-amber-500/30";
    default:
      return "border-slate-600/60";
  }
}

function sizeClass(category: PortfolioNode["category"]): string {
  switch (category) {
    case "domain":
      return "min-w-[120px] px-4 py-3 text-sm font-semibold";
    case "project":
    case "documentation":
      return "min-w-[100px] max-w-[140px] px-3 py-2 text-[11px]";
    default:
      return "min-w-[90px] px-3 py-2 text-xs";
  }
}

function PortfolioFlowNode({ data }: { data: GraphNodeData }) {
  const { node, label, highlighted, dimmed } = data;
  const href = getNodeHref(node);

  return (
    <>
      <Handle type="target" position={Position.Top} className="!bg-slate-500 !w-2 !h-2" />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block rounded-lg border bg-slate-900/95 text-center text-slate-100 transition-all",
          sizeClass(node.category),
          glowClass(node, highlighted),
          dimmed && !highlighted && "opacity-40",
          highlighted && "opacity-100 scale-105",
        )}
        aria-label={`${label}, ${node.evidenceLevel}`}
      >
        <span className="line-clamp-2">{label}</span>
      </a>
      <Handle type="source" position={Position.Bottom} className="!bg-slate-500 !w-2 !h-2" />
    </>
  );
}

const nodeTypes = { portfolio: PortfolioFlowNode };

type KnowledgeGraphProps = {
  flowNodes: Node[];
  flowEdges: Edge[];
  onDomainClick?: (domainId: string) => void;
};

export function KnowledgeGraph({
  flowNodes,
  flowEdges,
  onDomainClick,
}: KnowledgeGraphProps) {
  const defaultViewport = useMemo(() => ({ x: 0, y: 0, zoom: 0.85 }), []);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      const data = node.data as GraphNodeData;
      if (data?.node?.category === "domain" && onDomainClick) {
        onDomainClick(data.node.id);
      }
    },
    [onDomainClick],
  );

  return (
    <div className="h-[min(520px,70vh)] w-full min-w-[320px] overflow-x-auto overflow-y-hidden rounded-xl border border-slate-700/60 bg-slate-950/50">
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        defaultViewport={defaultViewport}
        minZoom={0.4}
        maxZoom={1.4}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#334155" gap={20} size={1} />
        <Controls className="!bg-slate-900 !border-slate-700 [&>button]:!bg-slate-800 [&>button]:!border-slate-600 [&>button]:!text-slate-200" />
        <MiniMap
          className="!bg-slate-900 !border-slate-700"
          nodeColor={(n) => {
            const d = n.data as GraphNodeData;
            if (d?.highlighted) return "#22d3ee";
            if (d?.node?.evidenceLevel?.includes("project")) return "#34d399";
            return "#64748b";
          }}
        />
      </ReactFlow>
    </div>
  );
}

export type { GraphNodeData };

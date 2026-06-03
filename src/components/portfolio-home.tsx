"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { Edge, Node } from "@xyflow/react";
import { MarkerType } from "@xyflow/react";
import { getNodeById } from "@/data/portfolio-nodes";
import { emptyQueryResponse } from "@/data/query-presets";
import { matchPortfolioQuery } from "@/lib/query-matcher";
import {
  filterGraphData,
  getVisibleNodeIds,
  layoutNodes,
} from "@/lib/graph-utils";
import type { PortfolioQueryResponse } from "@/lib/types";
import { SiteNavbar } from "@/components/site-navbar";
import { PortfolioHero } from "@/components/portfolio-hero";
import { PortfolioChat } from "@/components/portfolio-chat";
import { AnswerCard } from "@/components/answer-card";
import { SuggestedPrompts } from "@/components/suggested-prompts";
import { GraphLegend } from "@/components/graph-legend";
import { EvidenceCard } from "@/components/evidence-card";
import { FeaturedProjects } from "@/components/featured-projects";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import type { GraphNodeData } from "@/components/knowledge-graph";

const KnowledgeGraph = dynamic(
  () =>
    import("@/components/knowledge-graph").then((m) => m.KnowledgeGraph),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(520px,70vh)] items-center justify-center rounded-xl border border-slate-700/60 bg-slate-950/50 text-sm text-slate-500">
        Loading knowledge graph…
      </div>
    ),
  },
);

export function PortfolioHome() {
  const [query, setQuery] = useState("");
  const [hasQuery, setHasQuery] = useState(false);
  const [response, setResponse] =
    useState<PortfolioQueryResponse>(emptyQueryResponse);
  const [expandedDomains, setExpandedDomains] = useState<string[]>([]);
  const [showRelated, setShowRelated] = useState(false);
  const graphRef = useRef<HTMLElement>(null);

  const runQuery = useCallback((text: string) => {
    const trimmed = text.trim();
    setQuery(trimmed);
    if (!trimmed) {
      setHasQuery(false);
      setResponse(emptyQueryResponse);
      setShowRelated(false);
      return;
    }
    const result = matchPortfolioQuery(trimmed);
    setHasQuery(true);
    setResponse(result);
    setShowRelated(true);
    requestAnimationFrame(() => {
      graphRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const highlightedSet = useMemo(
    () => new Set(response.highlightedNodeIds),
    [response.highlightedNodeIds],
  );

  const visibleIds = useMemo(
    () =>
      getVisibleNodeIds({
        highlightedIds: response.highlightedNodeIds,
        expandedDomainIds: expandedDomains,
        showRelated: showRelated,
      }),
    [response.highlightedNodeIds, expandedDomains, showRelated],
  );

  const { nodes: visibleNodes, edges: visibleEdges } = useMemo(
    () => filterGraphData(visibleIds),
    [visibleIds],
  );

  const positions = useMemo(
    () => layoutNodes(visibleNodes, expandedDomains),
    [visibleNodes, expandedDomains],
  );

  const flowNodes: Node[] = useMemo(
    () =>
      visibleNodes.map((node) => {
        const pos = positions.get(node.id) ?? { x: 0, y: 0 };
        const highlighted = highlightedSet.has(node.id);
        const dimmed =
          hasQuery &&
          response.highlightedNodeIds.length > 0 &&
          !highlighted &&
          !node.id.startsWith("domain-");
        return {
          id: node.id,
          type: "portfolio",
          position: pos,
          data: {
            label: node.title,
            node,
            highlighted,
            dimmed,
          } satisfies GraphNodeData,
        };
      }),
    [visibleNodes, positions, highlightedSet, hasQuery, response.highlightedNodeIds],
  );

  const activeEdgeIds = useMemo(() => {
    const set = new Set<string>();
    visibleEdges.forEach((e) => {
      if (
        highlightedSet.has(e.source) ||
        highlightedSet.has(e.target)
      ) {
        set.add(e.id);
      }
    });
    return set;
  }, [visibleEdges, highlightedSet]);

  const flowEdges: Edge[] = useMemo(
    () =>
      visibleEdges.map((edge) => {
        const active = activeEdgeIds.has(edge.id);
        return {
          id: edge.id,
          source: edge.source,
          target: edge.target,
          animated: active,
          style: {
            stroke: active ? "#22d3ee" : "#475569",
            strokeWidth: edge.strength === "strong" ? 2.5 : edge.strength === "medium" ? 1.5 : 1,
            opacity: active ? 1 : 0.45,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: active ? "#22d3ee" : "#64748b",
            width: 16,
            height: 16,
          },
        };
      }),
    [visibleEdges, activeEdgeIds],
  );

  const evidenceNodes = useMemo(
    () =>
      response.evidenceCardNodeIds
        .map((id) => getNodeById(id))
        .filter((n): n is NonNullable<typeof n> => Boolean(n)),
    [response.evidenceCardNodeIds],
  );

  const toggleDomain = (domainId: string) => {
    setExpandedDomains((prev) =>
      prev.includes(domainId)
        ? prev.filter((d) => d !== domainId)
        : [...prev, domainId],
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteNavbar />
      <PortfolioHero />
      <PortfolioChat
        value={query}
        onChange={setQuery}
        onSubmit={() => runQuery(query)}
      />
      <AnswerCard response={response} hasQuery={hasQuery} />
      <SuggestedPrompts
        onSelect={(p) => runQuery(p)}
        activeFollowups={
          hasQuery ? response.suggestedFollowups : undefined
        }
      />

      {evidenceNodes.length > 0 && (
        <section
          className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:hidden"
          aria-labelledby="evidence-heading-mobile"
        >
          <h2 id="evidence-heading-mobile" className="text-xl font-bold text-slate-50">
            Evidence
          </h2>
          <div className="mt-6 grid gap-4">
            {evidenceNodes.map((node) => (
              <EvidenceCard key={node.id} node={node} />
            ))}
          </div>
        </section>
      )}

      <section
        ref={graphRef}
        id="knowledge-graph"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-6"
        aria-labelledby="graph-heading"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="graph-heading" className="text-2xl font-bold text-slate-50">
              Knowledge Graph Evidence Map
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              A visual map of my software engineering strengths, projects,
              documentation, and learning areas.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "domain-frontend",
              "domain-backend",
              "domain-data-ai",
            ].map((id) => (
              <Button
                key={id}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => toggleDomain(id)}
              >
                {expandedDomains.includes(id) ? "Collapse" : "Expand"}{" "}
                {getNodeById(id)?.title.replace(" Engineering", "").replace(" / AI", "")}
              </Button>
            ))}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowRelated((s) => !s)}
            >
              {showRelated ? "Fewer related" : "Expand related"}
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_280px]">
          <KnowledgeGraph flowNodes={flowNodes} flowEdges={flowEdges} />
          <GraphLegend />
        </div>

        {hasQuery && response.highlightedNodeIds.length > 0 && (
          <div className="mt-6 rounded-lg border border-slate-700/50 bg-slate-900/40 p-4">
            <h3 className="text-sm font-medium text-slate-300">
              Highlighted nodes (accessible list)
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {response.highlightedNodeIds.map((id) => {
                const node = getNodeById(id);
                if (!node) return null;
                return (
                  <li key={id}>
                    <a
                      href={`/knowledge/${id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-slate-800 px-2 py-1 text-xs text-cyan-300 hover:bg-slate-700"
                    >
                      {node.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>

      {evidenceNodes.length > 0 && (
        <section
          className="mx-auto max-w-6xl hidden px-4 py-8 sm:px-6 md:block"
          aria-labelledby="evidence-heading"
        >
          <h2 id="evidence-heading" className="text-xl font-bold text-slate-50">
            Evidence
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {evidenceNodes.map((node) => (
              <EvidenceCard key={node.id} node={node} />
            ))}
          </div>
        </section>
      )}

      <FeaturedProjects />
      <ContactSection />
    </div>
  );
}

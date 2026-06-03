import { ExternalLink, FileText } from "lucide-react";
import { Badge, evidenceToBadgeVariant } from "@/components/ui/badge";
import { buttonClass } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PortfolioNode } from "@/lib/types";
import { EVIDENCE_LABELS, getNodeHref } from "@/lib/node-helpers";

type EvidenceCardProps = {
  node: PortfolioNode;
};

export function EvidenceCard({ node }: EvidenceCardProps) {
  const href = getNodeHref(node);
  const status =
    node.hasProject
      ? node.liveUrl
        ? "Live project + docs"
        : "Project + documentation"
      : "Documentation";

  return (
    <Card className="flex h-full flex-col border-slate-700/60 transition-colors hover:border-cyan-500/30">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="text-base">{node.title}</CardTitle>
          <Badge variant={evidenceToBadgeVariant(node.evidenceLevel)}>
            {EVIDENCE_LABELS[node.evidenceLevel]}
          </Badge>
        </div>
        <p className="text-xs text-slate-500">{status}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm text-slate-400">{node.summary}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("default", "sm")}
          >
            <FileText className="h-3.5 w-3.5" aria-hidden />
            Open node
          </a>
          {node.liveUrl && (
            <a
              href={node.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("secondary", "sm")}
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              Live demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge, evidenceToBadgeVariant } from "@/components/ui/badge";
import { buttonClass } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PortfolioDoc } from "@/lib/types";
import type { PortfolioNode } from "@/lib/types";
import { EVIDENCE_LABELS, getNodeHref } from "@/lib/node-helpers";
import { getNodeById } from "@/data/portfolio-nodes";

type ProjectDocSplitProps = {
  node: PortfolioNode;
  doc: PortfolioDoc;
};

function DocSection({
  title,
  content,
}: {
  title: string;
  content?: string;
}) {
  if (!content) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{content}</p>
    </div>
  );
}

export function ProjectDocSplit({ node, doc }: ProjectDocSplitProps) {
  const related = node.relatedNodeIds
    .map((id) => getNodeById(id))
    .filter((n): n is PortfolioNode => Boolean(n))
    .slice(0, 8);

  const status =
    node.evidenceLevel === "project-live"
      ? "Live"
      : node.evidenceLevel === "project-built"
        ? "Built"
        : "In progress";

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="border-b border-slate-800 bg-slate-900/50 p-6 lg:border-b-0 lg:border-r lg:p-10">
        <Badge variant={evidenceToBadgeVariant(node.evidenceLevel)} className="mb-4">
          {EVIDENCE_LABELS[node.evidenceLevel]}
        </Badge>
        <h1 className="text-3xl font-bold text-slate-50">{node.title}</h1>
        <p className="mt-2 text-sm text-slate-500">Status: {status}</p>
        <p className="mt-4 text-slate-400">{node.summary}</p>

        <div className="mt-6 aspect-video overflow-hidden rounded-xl border border-slate-700 bg-slate-950 flex items-center justify-center">
          {node.previewImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={node.previewImage}
              alt={`${node.title} preview`}
              className="h-full w-full object-cover"
            />
          ) : (
            <p className="text-sm text-slate-500 px-4 text-center">
              Project preview — add previewImage or embed iframe URL in node data
            </p>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {node.liveUrl && (
            <a
              href={node.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("default", "sm")}
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live project
            </a>
          )}
          {node.githubUrl && (
            <a
              href={node.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("secondary", "sm")}
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-1">
          {node.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </aside>

      <main className="p-6 lg:p-10">
        <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/90">
          Documentation
        </p>
        <h2 className="mt-1 text-2xl font-semibold text-slate-50">{doc.title}</h2>
        <div className="mt-8 space-y-6">
          <DocSection title="Overview" content={doc.overview} />
          <DocSection title="Architecture" content={doc.architecture} />
          <DocSection title="Technical decisions" content={doc.technicalDecisions} />
          <DocSection title="What was built" content={doc.whatWasBuilt} />
          <DocSection
            title="Reliability / security / performance"
            content={doc.reliability}
          />
          <DocSection title="Lessons learned" content={doc.lessonsLearned} />
          <DocSection title="Details" content={doc.body} />
        </div>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="text-base">Related nodes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              {related.map((rel) => (
                <li key={rel.id}>
                  <Link
                    href={getNodeHref(rel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-400 hover:underline"
                  >
                    {rel.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

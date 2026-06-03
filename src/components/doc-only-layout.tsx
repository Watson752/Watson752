import Link from "next/link";
import { Badge, evidenceToBadgeVariant } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PortfolioDoc, PortfolioNode } from "@/lib/types";
import { EVIDENCE_LABELS, getNodeHref } from "@/lib/node-helpers";
import { getNodeById } from "@/data/portfolio-nodes";
import { SiteNavbar } from "@/components/site-navbar";

type DocOnlyLayoutProps = {
  node: PortfolioNode;
  doc: PortfolioDoc;
};

export function DocOnlyLayout({ node, doc }: DocOnlyLayoutProps) {
  const related = node.relatedNodeIds
    .map((id) => getNodeById(id))
    .filter((n): n is PortfolioNode => Boolean(n));

  const relatedProjects = related.filter((n) => n.hasProject);

  return (
    <div className="min-h-screen bg-slate-950">
      <SiteNavbar />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Badge variant={evidenceToBadgeVariant(node.evidenceLevel)}>
          {EVIDENCE_LABELS[node.evidenceLevel]}
        </Badge>
        <h1 className="mt-4 text-3xl font-bold text-slate-50">{node.title}</h1>
        <p className="mt-4 text-lg text-slate-400">{node.summary}</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-6 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-slate-100">Overview</h2>
            <p className="mt-2 text-sm leading-relaxed">{doc.overview || doc.body}</p>
          </section>
          {doc.architecture && (
            <section>
              <h2 className="text-xl font-semibold text-slate-100">Architecture</h2>
              <p className="mt-2 text-sm leading-relaxed">{doc.architecture}</p>
            </section>
          )}
          <section>
            <h2 className="text-xl font-semibold text-slate-100">Documentation</h2>
            <p className="mt-2 text-sm leading-relaxed">{doc.body}</p>
          </section>
        </div>

        {relatedProjects.length > 0 && (
          <Card className="mt-10">
            <CardHeader>
              <CardTitle className="text-base">Related projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {relatedProjects.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={getNodeHref(p)}
                      className="text-cyan-400 hover:underline"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Related nodes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              {related.map((rel) => (
                <li key={rel.id}>
                  <Link
                    href={getNodeHref(rel)}
                    className="rounded-md bg-slate-800 px-2 py-1 text-xs text-cyan-300 hover:bg-slate-700"
                  >
                    {rel.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <p className="mt-10 text-sm text-slate-500">
          <Link href="/" className="text-cyan-400 hover:underline">
            ← Back to portfolio home
          </Link>
        </p>
      </article>
    </div>
  );
}

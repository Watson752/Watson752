import Link from "next/link";
import { portfolioNodes } from "@/data/portfolio-nodes";
import { Badge, evidenceToBadgeVariant } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EVIDENCE_LABELS, getNodeHref } from "@/lib/node-helpers";
import { buttonClass } from "@/components/ui/button";

const featuredIds = [
  "project-portfolio-graph",
  "project-happyhour",
  "project-pathify",
  "project-cra-analytics",
];

export function FeaturedProjects() {
  const projects = featuredIds
    .map((id) => portfolioNodes.find((n) => n.id === id))
    .filter(Boolean);

  return (
    <section
      id="featured-projects"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      aria-labelledby="featured-heading"
    >
      <h2 id="featured-heading" className="text-2xl font-bold text-slate-50">
        Featured projects
      </h2>
      <p className="mt-2 max-w-2xl text-slate-400">
        Recruiter-friendly highlights. Use the knowledge graph above for evidence-backed
        exploration.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project!.id}>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle>{project!.title}</CardTitle>
                <Badge variant={evidenceToBadgeVariant(project!.evidenceLevel)}>
                  {EVIDENCE_LABELS[project!.evidenceLevel]}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-400">{project!.summary}</p>
              <div className="flex flex-wrap gap-1">
                {project!.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={getNodeHref(project!)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("outline", "sm")}
              >
                View evidence
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-6">
        <Link href="/projects" className="text-sm text-cyan-400 hover:text-cyan-300">
          View all projects →
        </Link>
      </p>
    </section>
  );
}

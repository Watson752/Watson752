import Link from "next/link";
import { portfolioNodes } from "@/data/portfolio-nodes";
import { SiteNavbar } from "@/components/site-navbar";
import { Badge, evidenceToBadgeVariant } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EVIDENCE_LABELS, getNodeHref } from "@/lib/node-helpers";
import { buttonClass } from "@/components/ui/button";

export const metadata = {
  title: "Projects | Srivathsan Murali",
};

export default function ProjectsPage() {
  const projects = portfolioNodes.filter((n) => n.category === "project");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteNavbar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-50">Projects</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          All project-backed evidence nodes. Prefer the{" "}
          <Link href="/" className="text-cyan-400 hover:underline">
            knowledge graph
          </Link>{" "}
          for exploratory Q&amp;A.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex flex-wrap gap-2">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant={evidenceToBadgeVariant(project.evidenceLevel)}>
                      {EVIDENCE_LABELS[project.evidenceLevel]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-400">{project.summary}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={getNodeHref(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass("outline", "sm")}
                  >
                    Open evidence page
                  </Link>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

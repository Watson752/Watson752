import { notFound } from "next/navigation";
import { portfolioNodes } from "@/data/portfolio-nodes";
import { getDocBySlug } from "@/data/portfolio-docs";
import { SiteNavbar } from "@/components/site-navbar";
import { ProjectDocSplit } from "@/components/project-doc-split";
import { DocOnlyLayout } from "@/components/doc-only-layout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioNodes.map((node) => ({ slug: node.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const node = portfolioNodes.find((n) => n.id === slug);
  return {
    title: node ? `${node.title} | Srivathsan Murali` : "Knowledge",
  };
}

export default async function KnowledgePage({ params }: PageProps) {
  const { slug } = await params;
  const node = portfolioNodes.find((n) => n.id === slug);
  if (!node) notFound();

  const doc =
    getDocBySlug(node.docSlug) ??
    getDocBySlug(slug) ?? {
      slug: node.docSlug,
      title: node.title,
      overview: node.summary,
      body: node.docExcerpt,
    };

  if (node.hasProject) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <SiteNavbar />
        <ProjectDocSplit node={node} doc={doc} />
      </div>
    );
  }

  return <DocOnlyLayout node={node} doc={doc} />;
}

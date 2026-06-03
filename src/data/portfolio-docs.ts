import type { PortfolioDoc } from "@/lib/types";

export const portfolioDocs: PortfolioDoc[] = [
  {
    slug: "project-happyhour",
    title: "HappyHour",
    overview:
      "HappyHour is a mobile-first event discovery web application built with Next.js, emphasizing responsive UI, PWA-oriented install flows, and production-style deployment patterns.",
    architecture:
      "Client-heavy Next.js App Router UI with API routes for data fetching. Component boundaries separate discovery views, filters, and detail panels.",
    technicalDecisions:
      "Tailwind for speed and consistency; card-based layouts for scanability; PWA manifest and install prompt strategy documented separately.",
    whatWasBuilt:
      "Event listing UX, responsive navigation, API route stubs/handlers, and deployment pipeline to Vercel.",
    reliability:
      "API errors return structured JSON; client surfaces friendly empty and error states.",
    lessonsLearned:
      "Mobile-first constraints early prevent desktop-only debt; document PWA behavior before shipping install prompts.",
    body: "HappyHour demonstrates end-to-end frontend delivery with backend-minded API structure.",
  },
  {
    slug: "project-pathify",
    title: "Pathify",
    overview:
      "Pathify explores real-time route optimization using maps, live data feeds, and AI-assisted routing suggestions.",
    architecture:
      "Event-driven updates between map UI, routing service boundary, and optional AI suggestion module.",
    technicalDecisions:
      "Separation between map rendering, route calculation, and AI overlay keeps the system testable.",
    whatWasBuilt:
      "Architecture diagrams, routing flow prototypes, and concept documentation for scaling live updates.",
    reliability:
      "Graceful degradation when live data is unavailable; cached routes as fallback (concept).",
    lessonsLearned:
      "Real-time systems need explicit diagrams before code sprawls across layers.",
    body: "Pathify is architecture-forward proof of systems and data/AI interest.",
  },
  {
    slug: "project-brain-tumour",
    title: "Brain Tumour Detection",
    overview:
      "Medical image classification project using Python ML workflows with emphasis on evaluation metrics.",
    whatWasBuilt:
      "Preprocessing pipeline, model training experiments, and evaluation reports.",
    lessonsLearned:
      "Medical ML requires careful validation framing; learning-stage depth is honest here.",
    body: "Focus on classification, data prep, and evaluation — not production clinical deployment claims.",
  },
  {
    slug: "project-cra-analytics",
    title: "CRA/Data Analytics Tools",
    overview:
      "Anonymized analytics workflows combining Python scripts, SQL queries, and KPI-style reporting.",
    architecture:
      "Ingest → clean → validate → aggregate → report. No employer-specific or confidential data in this portfolio.",
    whatWasBuilt:
      "Reusable cleaning steps, SQL reporting queries, and summary outputs for stakeholders.",
    lessonsLearned:
      "Generic documentation allows proof of skill without exposing private context.",
    body: "Demonstrates data cleaning, SQL, and KPI reporting at project-built evidence level.",
  },
  {
    slug: "project-portfolio-graph",
    title: "Portfolio Knowledge Graph",
    overview:
      "This site: preset query matching, React Flow graph, evidence cards, and split project/documentation pages.",
    architecture:
      "Static TypeScript data layer → query matcher → client state → graph highlight → node detail routes. Ready for AI SDK + RAG swap.",
    technicalDecisions:
      "Local data first; no database for MVP. MDX-ready doc slugs. Progressive graph disclosure capped near 35 nodes.",
    whatWasBuilt:
      "Homepage chat flow, knowledge graph, evidence cards, projects/resume/contact routes.",
    reliability:
      "Accessible fallbacks below graph; honest evidence badges; no overstated expertise.",
    lessonsLearned:
      "Product-shaped portfolios outperform skill lists when evidence is one click away.",
    body: "Live proof of full-stack portfolio engineering with AI upgrade path documented.",
  },
  {
    slug: "doc-pwa-install",
    title: "PWA Install Prompts",
    overview: "Guide to beforeinstallprompt, manifest requirements, and UX timing.",
    body: "Covers manifest fields, icons, display mode, and when to show install UI vs. banner fatigue.",
  },
  {
    slug: "doc-api-error-handling",
    title: "API Error Handling",
    overview: "Consistent API error contract for Next.js route handlers.",
    body: "Define error codes, HTTP status mapping, safe client messages, and logging fields for debugging.",
  },
  {
    slug: "doc-rag-portfolio",
    title: "RAG Portfolio Search",
    overview: "Future architecture for semantic search over portfolio nodes and MDX docs.",
    architecture:
      "Embed nodes + docs → vector store → retrieve on query → AI SDK structured answer with cited node IDs.",
    body: "MVP uses preset matching; this doc is the upgrade blueprint.",
  },
  {
    slug: "doc-system-design-notes",
    title: "System Design Notes",
    overview: "Trade-off logs for routing, portfolio, and analytics boundaries.",
    body: "Includes context diagrams, failure modes, and scaling considerations at concept level.",
  },
  {
    slug: "doc-data-pipeline-notes",
    title: "Data Pipeline Notes",
    overview: "Stages from raw ingest to KPI outputs.",
    body: "Validation gates, cleaning rules, and reporting snapshots — described generically.",
  },
];

export const portfolioDocMap = new Map(
  portfolioDocs.map((doc) => [doc.slug, doc]),
);

export function getDocBySlug(slug: string): PortfolioDoc | undefined {
  return portfolioDocMap.get(slug);
}

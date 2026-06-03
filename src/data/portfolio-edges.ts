import type { PortfolioEdge } from "@/lib/types";

export const portfolioEdges: PortfolioEdge[] = [
  // Domain → children (strong)
  { id: "e-fe-react", source: "domain-frontend", target: "tech-react", strength: "strong", relationship: "uses" },
  { id: "e-fe-next", source: "domain-frontend", target: "tech-nextjs", strength: "strong", relationship: "uses" },
  { id: "e-fe-tailwind", source: "domain-frontend", target: "tech-tailwind", strength: "medium", relationship: "uses" },
  { id: "e-fe-pwa", source: "domain-frontend", target: "tech-pwa", strength: "medium", relationship: "related-to" },
  { id: "e-fe-ui", source: "domain-frontend", target: "concept-ui-systems", strength: "medium", relationship: "related-to" },
  { id: "e-fe-responsive", source: "domain-frontend", target: "concept-responsive", strength: "medium", relationship: "related-to" },

  { id: "e-be-api", source: "domain-backend", target: "tech-api-routes", strength: "strong", relationship: "uses" },
  { id: "e-be-db", source: "domain-backend", target: "tech-databases", strength: "medium", relationship: "related-to" },
  { id: "e-be-auth", source: "domain-backend", target: "tech-auth", strength: "weak", relationship: "interested-in" },
  { id: "e-be-errors", source: "domain-backend", target: "tech-error-handling", strength: "strong", relationship: "documents" },
  { id: "e-be-deploy", source: "domain-backend", target: "tech-deployment", strength: "strong", relationship: "uses" },

  { id: "e-da-python", source: "domain-data-ai", target: "tech-python", strength: "strong", relationship: "uses" },
  { id: "e-da-sql", source: "domain-data-ai", target: "tech-sql", strength: "strong", relationship: "uses" },
  { id: "e-da-clean", source: "domain-data-ai", target: "concept-data-cleaning", strength: "medium", relationship: "related-to" },
  { id: "e-da-kpi", source: "domain-data-ai", target: "concept-kpi-reporting", strength: "medium", relationship: "related-to" },
  { id: "e-da-lc", source: "domain-data-ai", target: "tech-langchain", strength: "weak", relationship: "interested-in" },
  { id: "e-da-rag", source: "domain-data-ai", target: "concept-rag", strength: "medium", relationship: "documents" },
  { id: "e-da-assistant", source: "domain-data-ai", target: "concept-portfolio-assistant", strength: "strong", relationship: "proves" },

  { id: "e-sys-design", source: "domain-systems", target: "concept-system-design", strength: "strong", relationship: "documents" },
  { id: "e-sys-diag", source: "domain-systems", target: "concept-architecture-diagrams", strength: "medium", relationship: "related-to" },
  { id: "e-sys-rel", source: "domain-systems", target: "concept-reliability", strength: "medium", relationship: "related-to" },
  { id: "e-sys-docs", source: "domain-systems", target: "concept-systems-docs", strength: "medium", relationship: "documents" },
  { id: "e-sys-test", source: "domain-systems", target: "concept-testing", strength: "weak", relationship: "interested-in" },

  { id: "e-proj-hh", source: "domain-projects", target: "project-happyhour", strength: "strong", relationship: "proves" },
  { id: "e-proj-path", source: "domain-projects", target: "project-pathify", strength: "strong", relationship: "proves" },
  { id: "e-proj-brain", source: "domain-projects", target: "project-brain-tumour", strength: "medium", relationship: "proves" },
  { id: "e-proj-cra", source: "domain-projects", target: "project-cra-analytics", strength: "strong", relationship: "proves" },
  { id: "e-proj-port", source: "domain-projects", target: "project-portfolio-graph", strength: "strong", relationship: "proves" },

  { id: "e-doc-pwa", source: "domain-documentation", target: "doc-pwa-install", strength: "medium", relationship: "documents" },
  { id: "e-doc-api", source: "domain-documentation", target: "doc-api-error-handling", strength: "strong", relationship: "documents" },
  { id: "e-doc-rag", source: "domain-documentation", target: "doc-rag-portfolio", strength: "strong", relationship: "documents" },
  { id: "e-doc-sd", source: "domain-documentation", target: "doc-system-design-notes", strength: "strong", relationship: "documents" },
  { id: "e-doc-pipe", source: "domain-documentation", target: "doc-data-pipeline-notes", strength: "medium", relationship: "documents" },

  // Project proofs
  { id: "e-hh-next", source: "project-happyhour", target: "tech-nextjs", strength: "strong", relationship: "built-with" },
  { id: "e-hh-pwa", source: "project-happyhour", target: "tech-pwa", strength: "strong", relationship: "built-with" },
  { id: "e-hh-api", source: "project-happyhour", target: "tech-api-routes", strength: "medium", relationship: "built-with" },
  { id: "e-hh-ui", source: "project-happyhour", target: "concept-ui-systems", strength: "medium", relationship: "built-with" },
  { id: "e-hh-responsive", source: "project-happyhour", target: "concept-responsive", strength: "medium", relationship: "built-with" },
  { id: "e-hh-deploy", source: "project-happyhour", target: "tech-deployment", strength: "medium", relationship: "built-with" },
  { id: "e-hh-doc", source: "project-happyhour", target: "doc-pwa-install", strength: "medium", relationship: "documents" },

  { id: "e-path-design", source: "project-pathify", target: "concept-system-design", strength: "strong", relationship: "proves" },
  { id: "e-path-diag", source: "project-pathify", target: "concept-architecture-diagrams", strength: "strong", relationship: "proves" },
  { id: "e-path-sd-doc", source: "project-pathify", target: "doc-system-design-notes", strength: "medium", relationship: "documents" },

  { id: "e-brain-py", source: "project-brain-tumour", target: "tech-python", strength: "strong", relationship: "built-with" },
  { id: "e-brain-clean", source: "project-brain-tumour", target: "concept-data-cleaning", strength: "medium", relationship: "built-with" },

  { id: "e-cra-py", source: "project-cra-analytics", target: "tech-python", strength: "strong", relationship: "built-with" },
  { id: "e-cra-sql", source: "project-cra-analytics", target: "tech-sql", strength: "strong", relationship: "built-with" },
  { id: "e-cra-kpi", source: "project-cra-analytics", target: "concept-kpi-reporting", strength: "strong", relationship: "proves" },
  { id: "e-cra-clean", source: "project-cra-analytics", target: "concept-data-cleaning", strength: "strong", relationship: "proves" },
  { id: "e-cra-pipe", source: "project-cra-analytics", target: "doc-data-pipeline-notes", strength: "medium", relationship: "documents" },

  { id: "e-port-next", source: "project-portfolio-graph", target: "tech-nextjs", strength: "strong", relationship: "built-with" },
  { id: "e-port-react", source: "project-portfolio-graph", target: "tech-react", strength: "strong", relationship: "built-with" },
  { id: "e-port-rag", source: "project-portfolio-graph", target: "concept-rag", strength: "strong", relationship: "documents" },
  { id: "e-port-assist", source: "project-portfolio-graph", target: "concept-portfolio-assistant", strength: "strong", relationship: "proves" },
  { id: "e-port-ui", source: "project-portfolio-graph", target: "concept-ui-systems", strength: "medium", relationship: "built-with" },
  { id: "e-port-rag-doc", source: "project-portfolio-graph", target: "doc-rag-portfolio", strength: "strong", relationship: "documents" },

  // Doc links
  { id: "e-err-doc", source: "tech-error-handling", target: "doc-api-error-handling", strength: "strong", relationship: "documents" },
  { id: "e-api-err", source: "tech-api-routes", target: "doc-api-error-handling", strength: "medium", relationship: "related-to" },
  { id: "e-pwa-doc", source: "tech-pwa", target: "doc-pwa-install", strength: "strong", relationship: "documents" },
  { id: "e-rag-doc", source: "concept-rag", target: "doc-rag-portfolio", strength: "strong", relationship: "documents" },
  { id: "e-sd-doc", source: "concept-system-design", target: "doc-system-design-notes", strength: "strong", relationship: "documents" },
  { id: "e-clean-pipe", source: "concept-data-cleaning", target: "doc-data-pipeline-notes", strength: "medium", relationship: "documents" },

  // Cross-domain weak ties
  { id: "e-fe-hh", source: "domain-frontend", target: "project-happyhour", strength: "medium", relationship: "related-to" },
  { id: "e-da-path", source: "domain-data-ai", target: "project-pathify", strength: "medium", relationship: "related-to" },
  { id: "e-fe-port", source: "domain-frontend", target: "project-portfolio-graph", strength: "strong", relationship: "related-to" },
];

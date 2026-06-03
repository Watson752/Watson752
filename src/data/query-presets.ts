import type { PortfolioQueryResponse } from "@/lib/types";

export const suggestedPrompts = [
  "What proves you can build full-stack systems?",
  "What frontend/UI work have you done?",
  "Do you have backend experience?",
  "What have you built with AI?",
  "What data projects have you worked on?",
  "Which projects are live?",
  "What documentation have you written?",
  "What is your strongest project?",
] as const;

type QueryPreset = {
  id: string;
  prompts: string[];
  keywords: string[];
  response: PortfolioQueryResponse;
};

export const queryPresets: QueryPreset[] = [
  {
    id: "full-stack",
    prompts: ["What proves you can build full-stack systems?"],
    keywords: [
      "full-stack",
      "full stack",
      "fullstack",
      "end to end",
      "prove",
      "systems",
    ],
    response: {
      answer:
        "HappyHour and this Portfolio Knowledge Graph are the strongest full-stack proofs: Next.js frontends, API-minded backend patterns, deployment, and written architecture notes. HappyHour shows mobile-first UI plus backend routes; the portfolio demonstrates graph UX, structured data, and documentation-backed claims.",
      highlightedNodeIds: [
        "project-happyhour",
        "project-portfolio-graph",
        "tech-nextjs",
        "tech-api-routes",
        "tech-deployment",
        "domain-frontend",
        "domain-backend",
      ],
      evidenceCardNodeIds: [
        "project-happyhour",
        "project-portfolio-graph",
        "tech-api-routes",
        "doc-api-error-handling",
      ],
      confidence: "high",
      suggestedFollowups: [
        "Which projects are live?",
        "What frontend/UI work have you done?",
      ],
    },
  },
  {
    id: "frontend",
    prompts: ["What frontend/UI work have you done?"],
    keywords: ["frontend", "ui", "react", "next", "tailwind", "responsive", "pwa"],
    response: {
      answer:
        "Frontend work centers on React and Next.js with Tailwind CSS, UI systems, and responsive layouts. HappyHour is the primary product-style proof (PWA direction, mobile-first UX). This portfolio itself is a live UI product with card-based dashboard design and an interactive graph.",
      highlightedNodeIds: [
        "domain-frontend",
        "tech-react",
        "tech-nextjs",
        "tech-tailwind",
        "concept-ui-systems",
        "concept-responsive",
        "project-happyhour",
        "project-portfolio-graph",
      ],
      evidenceCardNodeIds: [
        "project-happyhour",
        "project-portfolio-graph",
        "tech-nextjs",
        "doc-pwa-install",
      ],
      confidence: "high",
      suggestedFollowups: [
        "Which projects are live?",
        "What documentation have you written?",
      ],
    },
  },
  {
    id: "backend",
    prompts: ["Do you have backend experience?"],
    keywords: ["backend", "api", "server", "database", "auth", "deployment"],
    response: {
      answer:
        "Yes, with honest scope: API routes, deployment, and documented error handling are project-backed. Databases and auth are learning areas — I document patterns and apply them where projects require, without overstating production auth expertise.",
      highlightedNodeIds: [
        "domain-backend",
        "tech-api-routes",
        "tech-deployment",
        "tech-error-handling",
        "tech-databases",
        "tech-auth",
        "project-happyhour",
      ],
      evidenceCardNodeIds: [
        "tech-api-routes",
        "doc-api-error-handling",
        "project-happyhour",
        "tech-deployment",
      ],
      confidence: "medium",
      suggestedFollowups: [
        "What proves you can build full-stack systems?",
        "What documentation have you written?",
      ],
    },
  },
  {
    id: "ai",
    prompts: ["What have you built with AI?"],
    keywords: ["ai", "ml", "machine learning", "langchain", "rag", "assistant"],
    response: {
      answer:
        "AI-related work includes the Brain Tumour Detection ML project (learning-stage depth), Pathify's AI-assisted routing concept, and this portfolio's AI-ready assistant (preset matching today, RAG architecture documented for upgrade). LangChain is actively explored, not yet a production specialty claim.",
      highlightedNodeIds: [
        "domain-data-ai",
        "project-brain-tumour",
        "project-pathify",
        "concept-rag",
        "concept-portfolio-assistant",
        "tech-langchain",
        "project-portfolio-graph",
      ],
      evidenceCardNodeIds: [
        "project-brain-tumour",
        "project-pathify",
        "doc-rag-portfolio",
        "project-portfolio-graph",
      ],
      confidence: "medium",
      suggestedFollowups: [
        "What data projects have you worked on?",
        "What is your strongest project?",
      ],
    },
  },
  {
    id: "data",
    prompts: ["What data projects have you worked on?"],
    keywords: ["data", "sql", "python", "analytics", "kpi", "pipeline", "cleaning"],
    response: {
      answer:
        "CRA/Data Analytics Tools demonstrates Python, SQL, data cleaning, and KPI reporting in anonymized workflows. Brain Tumour Detection adds ML/data-prep experience. Data pipeline and system design notes document how work is structured without exposing confidential details.",
      highlightedNodeIds: [
        "project-cra-analytics",
        "project-brain-tumour",
        "tech-python",
        "tech-sql",
        "concept-data-cleaning",
        "concept-kpi-reporting",
        "doc-data-pipeline-notes",
      ],
      evidenceCardNodeIds: [
        "project-cra-analytics",
        "project-brain-tumour",
        "doc-data-pipeline-notes",
        "concept-kpi-reporting",
      ],
      confidence: "high",
      suggestedFollowups: [
        "What have you built with AI?",
        "What documentation have you written?",
      ],
    },
  },
  {
    id: "live",
    prompts: ["Which projects are live?"],
    keywords: ["live", "demo", "production", "deployed", "url"],
    response: {
      answer:
        "The Portfolio Knowledge Graph is live (this site). HappyHour is built with deployment experience; add a live URL in data when available. Other projects are built or learning-stage with GitHub and documentation evidence.",
      highlightedNodeIds: [
        "project-portfolio-graph",
        "project-happyhour",
        "tech-deployment",
        "domain-projects",
      ],
      evidenceCardNodeIds: [
        "project-portfolio-graph",
        "project-happyhour",
        "project-pathify",
      ],
      confidence: "high",
      suggestedFollowups: [
        "What is your strongest project?",
        "What proves you can build full-stack systems?",
      ],
    },
  },
  {
    id: "documentation",
    prompts: ["What documentation have you written?"],
    keywords: ["documentation", "docs", "written", "notes", "guide"],
    response: {
      answer:
        "Documentation nodes cover PWA install prompts, API error handling, RAG portfolio search architecture, system design notes, and data pipeline notes. These back project claims and show how I think about reliability and upgrade paths.",
      highlightedNodeIds: [
        "domain-documentation",
        "doc-pwa-install",
        "doc-api-error-handling",
        "doc-rag-portfolio",
        "doc-system-design-notes",
        "doc-data-pipeline-notes",
      ],
      evidenceCardNodeIds: [
        "doc-rag-portfolio",
        "doc-api-error-handling",
        "doc-system-design-notes",
        "doc-data-pipeline-notes",
      ],
      confidence: "high",
      suggestedFollowups: [
        "Do you have backend experience?",
        "What frontend/UI work have you done?",
      ],
    },
  },
  {
    id: "strongest",
    prompts: ["What is your strongest project?"],
    keywords: ["strongest", "best", "highlight", "flagship", "top"],
    response: {
      answer:
        "The Portfolio Knowledge Graph is the strongest holistic proof: live, documented, and demonstrates frontend, systems thinking, and AI-ready architecture. HappyHour is the strongest product-style app proof for mobile-first full-stack delivery.",
      highlightedNodeIds: [
        "project-portfolio-graph",
        "project-happyhour",
        "concept-portfolio-assistant",
        "concept-ui-systems",
      ],
      evidenceCardNodeIds: [
        "project-portfolio-graph",
        "project-happyhour",
        "doc-rag-portfolio",
      ],
      confidence: "high",
      suggestedFollowups: [
        "Which projects are live?",
        "What proves you can build full-stack systems?",
      ],
    },
  },
];

export const emptyQueryResponse: PortfolioQueryResponse = {
  answer:
    "Ask a question above or choose a prompt to see relevant knowledge nodes light up.",
  highlightedNodeIds: [],
  evidenceCardNodeIds: [],
  confidence: "low",
  suggestedFollowups: [...suggestedPrompts.slice(0, 3)],
};

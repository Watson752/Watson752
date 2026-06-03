export type NodeEvidenceLevel =
  | "project-live"
  | "project-built"
  | "documented"
  | "learning"
  | "interest";

export type PortfolioNodeCategory =
  | "domain"
  | "technology"
  | "concept"
  | "project"
  | "documentation"
  | "interest";

export type PortfolioNode = {
  id: string;
  title: string;
  category: PortfolioNodeCategory;
  summary: string;
  tags: string[];
  evidenceLevel: NodeEvidenceLevel;
  relatedNodeIds: string[];
  parentDomainId?: string;
  hasProject: boolean;
  projectSlug?: string;
  liveUrl?: string;
  githubUrl?: string;
  previewImage?: string;
  docSlug: string;
  docExcerpt: string;
};

export type PortfolioEdge = {
  id: string;
  source: string;
  target: string;
  strength: "strong" | "medium" | "weak";
  relationship:
    | "uses"
    | "documents"
    | "proves"
    | "related-to"
    | "built-with"
    | "interested-in";
};

export type PortfolioQueryResponse = {
  answer: string;
  highlightedNodeIds: string[];
  evidenceCardNodeIds: string[];
  confidence: "high" | "medium" | "low";
  suggestedFollowups: string[];
};

export type PortfolioDoc = {
  slug: string;
  title: string;
  overview: string;
  architecture?: string;
  technicalDecisions?: string;
  whatWasBuilt?: string;
  reliability?: string;
  lessonsLearned?: string;
  body: string;
};

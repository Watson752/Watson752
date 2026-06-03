import { queryPresets, emptyQueryResponse } from "@/data/query-presets";
import type { PortfolioQueryResponse } from "@/lib/types";

function normalize(text: string): string {
  return text.toLowerCase().trim().replace(/\s+/g, " ");
}

function scoreMatch(query: string, keywords: string[], prompts: string[]): number {
  const q = normalize(query);
  let score = 0;

  for (const prompt of prompts) {
    if (normalize(prompt) === q) score += 100;
    if (q.includes(normalize(prompt)) || normalize(prompt).includes(q)) score += 50;
  }

  for (const keyword of keywords) {
    if (q.includes(keyword)) score += 10 + keyword.length;
  }

  return score;
}

export function matchPortfolioQuery(query: string): PortfolioQueryResponse {
  const trimmed = query.trim();
  if (!trimmed) return emptyQueryResponse;

  let best: { score: number; response: PortfolioQueryResponse } | null = null;

  for (const preset of queryPresets) {
    const score = scoreMatch(trimmed, preset.keywords, preset.prompts);
    if (score > 0 && (!best || score > best.score)) {
      best = { score, response: preset.response };
    }
  }

  if (best && best.score >= 10) {
    return best.response;
  }

  return {
    answer:
      "I could not match that question to a preset yet. Try one of the suggested prompts, or ask about frontend, backend, data, AI, live projects, or documentation.",
    highlightedNodeIds: ["domain-projects", "domain-documentation"],
    evidenceCardNodeIds: ["project-portfolio-graph"],
    confidence: "low",
    suggestedFollowups: [
      "What is your strongest project?",
      "What proves you can build full-stack systems?",
      "What documentation have you written?",
    ],
  };
}

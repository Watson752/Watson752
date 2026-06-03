"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PortfolioQueryResponse } from "@/lib/types";
import { emptyQueryResponse } from "@/data/query-presets";

type AnswerCardProps = {
  response: PortfolioQueryResponse;
  hasQuery: boolean;
};

export function AnswerCard({ response, hasQuery }: AnswerCardProps) {
  const isEmpty = !hasQuery && response.answer === emptyQueryResponse.answer;

  return (
    <section
      className="mx-auto max-w-6xl px-4 pt-6 sm:px-6"
      aria-live="polite"
      aria-atomic="true"
    >
      <Card
        className={
          isEmpty
            ? "border-slate-700/50"
            : "border-cyan-500/30 shadow-cyan-950/20"
        }
      >
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <CardTitle className="text-base sm:text-lg">
              {isEmpty ? "Portfolio answer" : "Answer"}
            </CardTitle>
            {hasQuery && (
              <Badge variant="default" className="capitalize">
                Confidence: {response.confidence}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {response.answer}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

"use client";

import { suggestedPrompts } from "@/data/query-presets";

type SuggestedPromptsProps = {
  onSelect: (prompt: string) => void;
  activeFollowups?: string[];
};

export function SuggestedPrompts({
  onSelect,
  activeFollowups,
}: SuggestedPromptsProps) {
  const prompts =
    activeFollowups && activeFollowups.length > 0
      ? activeFollowups
      : [...suggestedPrompts];

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-6 sm:px-6"
      aria-label="Suggested questions"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
        Suggested questions
      </p>
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => onSelect(prompt)}
            className="rounded-full border border-slate-600/80 bg-slate-900/80 px-3 py-1.5 text-left text-xs text-slate-300 transition-colors hover:border-cyan-500/50 hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 sm:text-sm"
          >
            {prompt}
          </button>
        ))}
      </div>
    </section>
  );
}

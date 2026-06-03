"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PortfolioChatProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export function PortfolioChat({ value, onChange, onSubmit }: PortfolioChatProps) {
  return (
    <section
      className="mx-auto max-w-6xl px-4 sm:px-6"
      aria-labelledby="portfolio-chat-heading"
    >
      <label
        id="portfolio-chat-heading"
        htmlFor="portfolio-query"
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        Ask my portfolio anything
      </label>
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Input
          id="portfolio-query"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="What do you want to know about my work?"
          autoComplete="off"
        />
        <Button type="submit" className="shrink-0 sm:w-auto">
          <Search className="h-4 w-4" aria-hidden />
          Search portfolio
        </Button>
      </form>
    </section>
  );
}

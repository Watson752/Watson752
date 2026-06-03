"use client";

import { SiteNavbar } from "@/components/site-navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteNavbar />
      <main className="mx-auto max-w-xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-50">Contact</h1>
        <p className="mt-2 text-slate-400">
          Reach out for roles, collaborations, or questions about this portfolio.
        </p>

        <div className="mt-8 space-y-3 text-sm text-slate-400">
          <p>
            Email:{" "}
            <a href="mailto:srivathsan@example.com" className="text-cyan-400">
              srivathsan@example.com
            </a>
          </p>
          <p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              LinkedIn
            </a>
            {" · "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label htmlFor="name" className="mb-1 block text-xs text-slate-400">
                  Name
                </label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-xs text-slate-400">
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-xs text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="flex w-full rounded-lg border border-slate-600 bg-slate-950/80 px-4 py-2 text-sm text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                />
              </div>
              <Button type="submit">Send (UI only — wire API later)</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

import { SiteNavbar } from "@/components/site-navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Resume | Srivathsan Murali",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-50">Resume</h1>
        <p className="mt-2 text-slate-400">
          Structured summary for recruiters. Replace placeholder PDF when ready.
        </p>

        <Button className="mt-6" type="button" disabled>
          Download PDF (placeholder)
        </Button>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Srivathsan Murali</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-sm text-slate-400">
            <section>
              <h2 className="font-semibold text-slate-200">Summary</h2>
              <p className="mt-2">
                Software engineer building documented systems across frontend, backend,
                data, and AI — with honest evidence levels and live project proof where
                available.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-200">Experience highlights</h2>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Full-stack web apps with Next.js and deployment to Vercel</li>
                <li>Data analytics workflows with Python and SQL (anonymized)</li>
                <li>ML/AI projects and architecture documentation</li>
              </ul>
            </section>
            <section>
              <h2 className="font-semibold text-slate-200">Education</h2>
              <p className="mt-2">Add your education details here.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-200">Skills</h2>
              <p className="mt-2">
                React, Next.js, TypeScript, Tailwind, Python, SQL, system design
                documentation, React Flow — see knowledge graph for evidence mapping.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

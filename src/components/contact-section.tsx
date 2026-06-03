import Link from "next/link";
import { buttonClass } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 pb-20 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="text-2xl font-bold text-slate-50">
        Contact & resume
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-400">
            <p>
              Email:{" "}
              <a
                href="mailto:srivathsan@example.com"
                className="text-cyan-400 hover:underline"
              >
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
            <Link href="/contact" className={buttonClass("default", "sm")}>
              Contact form
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resume</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-400">
            <p>Download a PDF resume or view the structured resume page.</p>
            <Link href="/resume" className={buttonClass("secondary", "sm")}>
              View resume
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

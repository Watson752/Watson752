import Link from "next/link";
import { buttonClass } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Main"
      >
        <Link href="/" className="group flex flex-col">
          <span className="text-sm font-semibold tracking-wide text-slate-100">
            Srivathsan Murali
          </span>
          <span className="text-xs text-cyan-400/90">Software Engineering Lab</span>
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={buttonClass("ghost", "sm") + " !rounded-md px-3"}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/**
 * Landing-site entry points into the RetAI documentation.
 *
 * Mintlify hosts the docs itself at docs.retentionos.tech — it is not a React
 * component you can mount inside the Next app. What the landing site needs is
 * the doorway: a nav link, a footer column, and a promo card for the product
 * page. That is what this file is.
 *
 * Stack assumptions match the app: React 19, Tailwind v4, lucide-react. Drop it
 * into the landing repo at src/components/marketing/DocsEntry.tsx and import
 * what you need. Colours use the brand tokens already defined in globals.css
 * (--brand-green, --accent-cream, --surface-raised); swap them for literals if
 * the landing site does not share that stylesheet.
 */

import {
  ArrowUpRight,
  BookOpen,
  Rocket,
  ShieldCheck,
  Code2,
  LifeBuoy,
} from "lucide-react";

const DOCS_URL = "https://docs.retentionos.tech";

/* ------------------------------------------------------------------ */
/* 1. Nav link — for the landing site header                           */
/* ------------------------------------------------------------------ */

export function DocsNavLink({ className }: { className?: string }) {
  return (
    <a
      href={DOCS_URL}
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--text-secondary,#c9c7c0)] transition-colors hover:text-[color:var(--text-main,#f4f3ef)] ${className ?? ""}`}
    >
      Docs
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Footer column — the four links worth surfacing                   */
/* ------------------------------------------------------------------ */

const FOOTER_LINKS = [
  { label: "Documentation", href: DOCS_URL },
  { label: "Quickstart", href: `${DOCS_URL}/quickstart` },
  { label: "Security & trust", href: `${DOCS_URL}/security/overview` },
  { label: "API reference", href: `${DOCS_URL}/api-reference/introduction` },
] as const;

export function DocsFooterColumn() {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[color:var(--text-muted-retai,#a3a3a3)]">
        Resources
      </h3>
      <ul className="mt-4 space-y-2.5">
        {FOOTER_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-[color:var(--text-secondary,#c9c7c0)] transition-colors hover:text-[color:var(--text-main,#f4f3ef)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Promo section — for the product or pricing page                  */
/* ------------------------------------------------------------------ */

const CARDS = [
  {
    icon: Rocket,
    title: "Quickstart",
    body: "Sign in, set up your clinic, and send your first AI reminder in about 15 minutes.",
    href: `${DOCS_URL}/quickstart`,
  },
  {
    icon: BookOpen,
    title: "Module tour",
    body: "Every screen in the product, what it is for, and who should have access.",
    href: `${DOCS_URL}/features/overview`,
  },
  {
    icon: ShieldCheck,
    title: "Security & trust",
    body: "How patient data is isolated, encrypted, retained, and deleted — including our known limitations.",
    href: `${DOCS_URL}/security/overview`,
  },
  {
    icon: Code2,
    title: "API reference",
    body: "Every endpoint, its authentication, and its rate limit.",
    href: `${DOCS_URL}/api-reference/introduction`,
  },
] as const;

export function DocsPromoSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-[color:var(--olive-500,#7fa58e)]">
            Documentation
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[color:var(--text-main,#f4f3ef)]">
            Everything, written down
          </h2>
          <p className="mt-3 max-w-xl text-[color:var(--text-secondary,#c9c7c0)]">
            Setup guides, the daily front-desk routine, how the AI decides what to
            say, and exactly how your patients&rsquo; data is handled.
          </p>
        </div>

        <a
          href={DOCS_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[color:var(--brand-green,#34532b)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Browse the docs
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map(({ icon: Icon, title, body, href }) => (
          <a
            key={href}
            href={href}
            className="group rounded-2xl border border-white/8 bg-[color:var(--surface-raised,#12170f)] p-5 transition-colors hover:border-[color:var(--olive-500,#7fa58e)]/40"
          >
            <Icon
              className="h-5 w-5 text-[color:var(--olive-500,#7fa58e)]"
              aria-hidden
            />
            <h3 className="mt-4 flex items-center gap-1.5 text-base font-medium text-[color:var(--text-main,#f4f3ef)]">
              {title}
              <ArrowUpRight
                className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary,#c9c7c0)]">
              {body}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Support strip — pairs well above the footer                      */
/* ------------------------------------------------------------------ */

export function DocsSupportStrip() {
  return (
    <div className="flex flex-col items-center gap-3 border-t border-white/8 px-6 py-8 text-center sm:flex-row sm:justify-center sm:text-left">
      <LifeBuoy
        className="h-5 w-5 text-[color:var(--olive-500,#7fa58e)]"
        aria-hidden
      />
      <p className="text-sm text-[color:var(--text-secondary,#c9c7c0)]">
        Can&rsquo;t find what you need?{" "}
        <a
          href={`${DOCS_URL}/help/support`}
          className="font-medium text-[color:var(--text-main,#f4f3ef)] underline underline-offset-4"
        >
          Talk to us
        </a>
        {" — "}your clinic&rsquo;s WhatsApp group is the fastest route.
      </p>
    </div>
  );
}

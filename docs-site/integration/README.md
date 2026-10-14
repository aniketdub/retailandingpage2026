# Wiring the docs into the live landing site

## The shape of it

Mintlify hosts the documentation itself. It is **not** a React component you can
mount inside the Next app — it is a separate site on its own subdomain. So the
work on the landing site is two things:

1. A DNS record pointing `docs.retentionos.tech` at Mintlify
2. Links into it from the header, the footer, and the product page

`DocsEntry.tsx` in this directory is the second part, ready to paste.

```
www.retentionos.tech          →  landing site (your marketing repo)
docs.retentionos.tech         →  this Mintlify site
app / www.retentionos.tech    →  the RetAI application (this repo, main branch)
```

---

## 1. DNS

In the Mintlify dashboard: **Settings → Custom domain → `docs.retentionos.tech`**.
It gives you a CNAME. Add it at your DNS provider:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `docs` | *(the value Mintlify shows you)* |

Propagation is usually minutes. Mintlify issues the TLS certificate itself.

---

## 2. Drop in the component

Copy `DocsEntry.tsx` into the landing repo at
`src/components/marketing/DocsEntry.tsx`.

It exports four pieces, each independently usable:

| Export | Where it goes |
| --- | --- |
| `DocsNavLink` | Header nav, beside Product and Pricing |
| `DocsFooterColumn` | Footer, as a "Resources" column |
| `DocsPromoSection` | Product page, below the feature sections |
| `DocsSupportStrip` | Just above the footer on any page |

```tsx
import {
  DocsNavLink,
  DocsFooterColumn,
  DocsPromoSection,
  DocsSupportStrip,
} from "@/components/marketing/DocsEntry";
```

### Dependencies

`lucide-react` and Tailwind. Both are already in this repo's `package.json`; if
the landing site is a separate project, confirm it has them.

### Colours

The component reads the brand CSS variables from `globals.css`
(`--brand-green`, `--olive-500`, `--surface-raised`, `--text-main`,
`--text-secondary`). Each has a literal fallback baked in, so it renders
correctly even in a project that does not share that stylesheet — but it will
look properly on-brand where it does.

---

## 3. Reciprocal links

Already configured in `docs.json`, so the two sites point at each other:

- Navbar button **Open RetAI** → `https://www.retentionos.tech`
- Global anchor **Main site** → `https://www.retentionos.tech`
- Logo click → `https://www.retentionos.tech`
- Footer columns → pricing, support, feature tour

Check those URLs resolve on your landing site before publishing. A docs footer
linking to a 404 is worse than no footer link.

---

## 4. If you would rather not use a subdomain

Two alternatives, both worse for a reason worth knowing:

| Option | Trade-off |
| --- | --- |
| `retentionos.tech/docs` via a Next.js rewrite proxying Mintlify | Keeps one domain and consolidates SEO, but you now own a proxy in the request path and Mintlify's previews and search can behave oddly behind it. |
| Rebuild the docs as MDX pages inside the Next app | Full control, no third party — and you have just taken on building search, navigation, versioning, dark mode, and an AI assistant that Mintlify gives you for nothing. |

The subdomain is the right default. Take one of the alternatives only if you
have a concrete reason, not for tidiness.

---

## 5. Before you point the domain

Work through `../REVIEW-BEFORE-PUBLISH.md` first. There are placeholder contact
details and unverified compliance claims in the site that must be resolved —
including a support phone number that is currently a placeholder taken from a
competitor's site.

# RetAI documentation site (Mintlify)

Public product documentation for RetAI / RetentionOS, built with [Mintlify](https://mintlify.com).

Lives on the `docs-site` branch, in this `docs-site/` directory, deliberately separate from
the application so docs deploys never touch the app.

Not to be confused with `/docs` at the repo root — that is internal engineering
documentation (architecture, audits, legal drafts) and stays private.

---

## Run it locally

```bash
npm i -g mint
```

```bash
cd docs-site && mint dev
```

Opens on http://localhost:3000. Hot-reloads on save.

Check every link before shipping:

```bash
cd docs-site && mint broken-links
```

---

## Structure

```
docs-site/
├── docs.json                    # Site config: theme, colors, nav, footer, SEO
├── index.mdx                    # Home
├── quickstart.mdx
├── onboarding.mdx               # The 10-step rollout programme
├── concepts.mdx
├── workflows/                   # Task-oriented walkthroughs
├── features/                    # One page per product module
├── admin/                       # Setup and configuration
│   └── integrations/
├── security/                    # Security & Trust tab
├── api-reference/               # API tab
│   ├── endpoints/
│   └── webhooks/
├── help/                        # FAQ, troubleshooting, support, changelog
├── logo/                        # light.svg, dark.svg
├── images/                      # Screenshots — see SCREENSHOTS.md
└── snippets/                    # Reusable MDX fragments
```

Three tabs: **Documentation**, **Security & Trust**, **API Reference**.

---

## Before you publish

Two checklists, both mandatory:

- **`SCREENSHOTS.md`** — every image the site references, with the exact filename,
  what to capture, and the demo data to use. Pages render without them, but with
  broken image slots.
- **`REVIEW-BEFORE-PUBLISH.md`** — placeholders and unverified claims that must be
  confirmed before this goes public. Several are legal or compliance statements.

---

## Deploying

1. Sign in at [mintlify.com](https://mintlify.com) with GitHub
2. Connect this repository
3. Set the content directory to `docs-site`
4. Set the deployment branch (`docs-site` while drafting, `main` once merged)
5. Add the custom domain `docs.retentionos.tech` and create the CNAME Mintlify gives you

Every push to the configured branch redeploys.

---

## Editing conventions

- **One page per module.** If a page needs two H1-level ideas, it is two pages.
- **State limitations.** Known constraints are published, not hidden. It is the
  most credible thing on the site — see `security/architecture.mdx`.
- **Warnings are for real consequences.** Overuse makes them invisible.
- **Never write a claim you have not verified in the code.** This site is read by
  clinics evaluating whether to trust us with patient data.
- **No real patient data in screenshots, ever.** Demo tenant only.

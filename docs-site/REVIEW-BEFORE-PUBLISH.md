# Review before publishing

This site is read by clinics deciding whether to trust you with patient data,
and by their lawyers. Everything below is either a placeholder, an unverified
claim, or a feature described in the docs that may not exist in the product yet.

**Work through all four sections before pointing `docs.retentionos.tech` at this.**

---

## 1. Placeholders that will embarrass you

| File | Line item | Action |
| --- | --- | --- |
| `docs.json` | `integrations.ga4.measurementId: "G-XXXXXXXXXX"` | Real GA4 ID, or delete the `integrations` block |
| `docs.json` | `footer.socials` — LinkedIn and X URLs | Confirm they exist, or remove |
| `docs.json` | `navbar.links` → `status.retentionos.tech` | The status page must exist. It is linked from six pages. If there is no status page, remove every link to it. |
| `docs.json` | `logo`, `favicon` | Placeholder SVGs are committed. Replace with the real mark. |
| `docs.json` | `seo.metatags["og:image"]` | Create `images/og-cover.png` |
| `docs.json` | Global anchor → `wa.me/919108729324` | **This is Cliniceo's support number, used as a structural placeholder. Replace it with yours before publishing.** |
| Multiple | `support@retentionos.tech`, `security@retentionos.tech` | Both must be real, monitored mailboxes. `security@` is published as a vulnerability-report address with a one-business-day acknowledgement commitment. |
| `index.mdx`, `onboarding.mdx` | `https://www.retentionos.tech/pricing`, `/support` | Confirm these pages exist on the landing site |

---

## 2. Legal and compliance — needs a lawyer, not a developer

The source documents in `/docs/legal/` are marked **DRAFT — pending review by a
qualified Indian lawyer**. The docs site restates parts of them.

| Claim | Where | Status |
| --- | --- | --- |
| 99.5% monthly uptime target | `security/sla.mdx` | **Confirm you can stand behind this given Vercel's and Supabase's own SLAs.** Do not commit publicly to more than your infrastructure guarantees you. |
| Support response times (1h / 4h / 1d / 3d) | `security/sla.mdx`, `help/support.mdx` | Confirm these are operationally achievable. A published 1-hour critical response you cannot meet is a contractual problem. |
| Service credit percentages | `security/sla.mdx` | Legal review |
| 30-day export window, 30-day deletion, 90-day backup purge | `security/retention-and-deletion.mdx` | Verify against actual Supabase backup configuration. The source policy has these in `[brackets]` as placeholders. |
| Audit log retained 3 years minimum | `security/retention-and-deletion.mdx` | Verify against actual retention configuration |
| Access logs retained 12 months | `security/retention-and-deletion.mdx` | Verify |
| 15 business days to action a deletion instruction | `security/dpdp.mdx` | Legal review |
| 15 days' notice before a new subprocessor | `security/dpdp.mdx`, `security/subprocessors.mdx` | Must match the executed DPA |
| Bolna hosting region shown as "Confirm" | `security/subprocessors.mdx` | **Get the real answer from Bolna and state it.** A subprocessor table with "Confirm" in it looks worse than an unflattering true answer. |
| Supabase region "selected at project setup" | `security/subprocessors.mdx` | State the actual region |
| "Not HIPAA compliant, no BAAs" | `security/overview.mdx`, `subprocessors.mdx`, `help/faq.mdx` | Accurate today. Revisit if BAAs are ever executed. |

<br>

**A note on the honesty in these pages.** Several published limitations —
non-atomic invoice writes, per-instance rate limiting, backup rotation delay —
came out of your own audit. Publishing them is a deliberate trust play and it is
the most credible content on the site. Do not let a reviewer quietly delete
them; if any one is fixed, update the page rather than removing the section.

---

## 3. Features documented that may not exist yet

Written from the code, the architecture map, and the derma feature spec. Some
spec items are Stage 3–4 and not built. **Verify each against the running app;
delete or mark as "coming soon" anything that is not there.**

| Feature | Documented in | Verify |
| --- | --- | --- |
| Scheduled reports by email/WhatsApp | `features/reports.mdx` | Does the scheduler exist? |
| Vendors and purchase orders | `features/inventory.mdx` | Spec says missing as of the gap analysis |
| Prescription fulfilment against stock | `features/inventory.mdx`, `features/consultations.mdx` | Spec says missing |
| Stock take with variance posting | `features/inventory.mdx` | |
| Patient merge | `features/patients.mdx` | |
| Feedback capture and analytics | `features/reports.mdx` | Spec says missing |
| Incentive payout report | `features/reports.mdx` | Spec says missing |
| Demographics report | `features/reports.mdx` | Spec says missing |
| Quotation builder and PDF | `features/leads.mdx`, workflows | Spec lists counselling/quotations as missing entirely |
| Retainer and clinic credit | `features/billing.mdx` | Spec says missing |
| Photo collections | `features/gallery.mdx` | |
| Multi-location clinic switching | `concepts.mdx`, `help/faq.mdx` | |
| Recording consent announcement | `admin/integrations/voice.mdx` | Confirm Bolna supports it as described |
| Configurable image retention | `admin/clinic-setup.mdx` | |
| Full clinic export as a background job with a link | `admin/data-export.mdx` | Verify it is not a synchronous download |
| API query params on every endpoint | `api-reference/endpoints/*` | **Verify each parameter name against the actual route handlers.** These were written from the architecture map, which lists routes and methods but not every filter. |
| `source` field on appointments (`ai_whatsapp` etc.) | `api-reference/endpoints/appointments.mdx` | Confirm the field and its values |
| `at_risk_score` on the patient response | `api-reference/endpoints/patients.mdx` | Confirm it is exposed |

<br>

> **The cheapest way to do this section:** open the running app next to each
> page and click through it. Anything you cannot find in two minutes, a
> prospective customer will not find either.

---

## 4. Content and consistency

- [ ] All 35 screenshots captured — see `SCREENSHOTS.md`
- [ ] `mint broken-links` passes clean
- [ ] Product naming settled. The code uses **RetAI** (logo, architecture doc) and **RetentionOS** (README, package name, domain). This site treats RetentionOS as the company and RetAI as the product. **Confirm that is what you want, then make it consistent everywhere including the landing site.**
- [ ] The AI agent is called **Aisha** throughout. Confirm that is the shipping name.
- [ ] Currency shown as ₹ throughout — correct for the Indian market
- [ ] `help/changelog.mdx` dates match the actual release history
- [ ] `security/subprocessors.mdx` change-history table has a real first row
- [ ] The `docs.json` banner text is current (it announces WhatsApp booking)
- [ ] Read `index.mdx` and `quickstart.mdx` aloud. They are the two pages everyone reads.

---

## 5. Final gate

- [ ] No real patient data in any screenshot
- [ ] No secret, key, or token visible anywhere
- [ ] Legal pages reviewed by an Indian lawyer
- [ ] SLA numbers you can actually meet
- [ ] Every documented feature exists, or is marked as coming
- [ ] Someone other than the author has read the whole site

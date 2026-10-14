# Content prompts

Copy-paste prompts for extending this site without it drifting in voice or
accuracy. Each one is written to be pasted into Claude Code from the repo root,
so the model can read the actual code rather than inventing behaviour.

---

## The house style, in one paragraph

Paste this at the top of any content prompt so new pages match the existing ones.

> Write in RetAI documentation voice: direct, second person, no marketing
> adjectives. Short paragraphs. Lead with what the reader does, then why it
> behaves that way. State limitations plainly — a published constraint is more
> credible than an omission. Use `<Note>` for context, `<Tip>` for the thing
> experienced users know, and `<Warning>` only where the consequence is real
> (data loss, money, a message to a patient, a legal obligation). Never write a
> claim you have not verified in the code. Indian market: ₹, GST, DPDP, WhatsApp
> as the primary channel. No em-dashes-as-drama, no "simply", no "just", no
> "seamlessly", no "empower".

---

## 1. Add a page for a new module

```
Read src/app/(dashboard)/<module>/ and src/lib/<module>/ in full.

Write docs-site/features/<module>.mdx documenting it, matching the structure and
voice of docs-site/features/packages.mdx exactly:

- YAML frontmatter: title, description, icon (Font Awesome 6 free name)
- One <Frame> screenshot near the top with a caption
- What the module is for, in two sentences, before any UI detail
- <Steps> for the primary task
- A table for fields, statuses, or options
- <AccordionGroup> for secondary detail
- At least one <Warning> covering a real consequence
- A "Related" <CardGroup cols={2}> at the end

Document only behaviour you can point to in the code. Where the code has a
known limitation, say so in the page rather than omitting it.

Then add the page to docs.json under the Modules group, in sidebar order.
Finally, add any screenshots it references to docs-site/SCREENSHOTS.md with
capture instructions in the same format as the existing entries.
```

---

## 2. Verify a page against the code

Run this on every page before publishing. It is the single highest-value prompt here.

```
Read docs-site/<path>.mdx.

For every factual claim it makes about product behaviour, find the code that
implements it. Report a table:

| Claim | File:line that supports it | Verdict |

Verdict is one of: CONFIRMED, CONTRADICTED, NOT FOUND.

Do not fix anything. Do not assume a feature exists because it would be
reasonable. If you cannot find the code, say NOT FOUND.
```

---

## 3. Document an API endpoint accurately

```
Read src/app/api/<route>/route.ts in full, including its imports.

Write the endpoint section for docs-site/api-reference/endpoints/<group>.mdx:

- Method and path
- <ParamField> for every parameter the handler actually reads — no invented filters
- <ResponseField> for the real response shape, including nullability
- A curl example
- The exact status codes this handler can return, and why
- Any side effect the write triggers (queued message, stock deduction, calendar push)
- Its rate limit, if src/lib/rate-limit.ts covers it

Where the handler resolves clinic scope server-side, say so — that is a security
property worth documenting, not an implementation detail.
```

---

## 4. Write a workflow walkthrough

```
Write docs-site/workflows/<name>.mdx for the task: <describe the task>.

Match docs-site/workflows/consultation-to-invoice.mdx in structure and voice.

Rules:
- One <Steps> block, each <Step> a single action the reader takes
- Name the actual screen and button at each step
- After the steps, a table of what happens automatically afterwards
- Call out the one step people skip when busy, and why it matters most
- End with a "Related" CardGroup

Read the relevant code under src/app/(dashboard)/ first. Every screen and button
you name must exist.
```

---

## 5. Turn a support question into a docs entry

Use this whenever the same question reaches support twice.

```
A clinic asked: "<paste the question>"

Answer it from the code, then:
1. Add it to docs-site/help/faq.mdx under the right heading, as an <Accordion>
2. If it is a failure with a fix, add it to docs-site/help/troubleshooting.mdx
   instead, in the format: cause in one sentence, then **Fix:**, then
   **Prevent:** where prevention is possible
3. If it reveals a genuinely missing page, say so and propose the page

Keep it under 120 words. If the honest answer is "the product does not do
that", write that.
```

---

## 6. Refresh the changelog for a release

```
Read the git log since <tag or date>.

Add an <Update> block at the top of docs-site/help/changelog.mdx:
- label: the month
- description: a 2-4 word release theme
- H2 per user-visible change, with a short paragraph on what it means in the clinic
- Group small changes under a bold "Also in this release" list
- If anything corrects a previously wrong behaviour (a tax calculation, a
  permission), include a <Warning> telling clinics what to re-check

Skip internal refactors, dependency bumps, and test-only changes. If a change
is not visible to a clinic, it does not belong here.
```

---

## 7. Adapt the docs for a new specialty

```
This documentation is written for dermatology and aesthetic clinics. Produce a
variant for <dentistry / ophthalmology / physiotherapy / IVF>.

For each page under docs-site/features/ and docs-site/workflows/, list:
- What stays identical
- What needs different examples (services, packages, clinical terms)
- What is irrelevant and should be cut
- What the new specialty needs that is not documented at all

Do not write the pages yet. Produce the plan first, as a table.
```

---

## 8. Generate the landing-site copy from these docs

```
Read docs-site/index.mdx, features/overview.mdx, features/chats.mdx,
features/at-risk.mdx, and features/packages.mdx.

Write landing-page copy for www.retentionos.tech/product, structured like a
competitor product page: one section per feature cluster, each with a heading,
a one-line promise, and 4-6 short sub-features.

Constraints:
- Every claim must be traceable to something in these docs
- No outcome promises ("increase revenue by 40%")
- No claim about competitors
- Indian market: ₹, GST, WhatsApp, DPDP
- Marketing register is allowed, invention is not

End each section with a link to the matching docs page.
```

---

## 9. Write alt text for every screenshot

Do this once, after capture. It matters for accessibility and for SEO.

```
For every <img> in docs-site/**/*.mdx, the alt attribute currently repeats the
caption. Rewrite each one to describe what is visually in the image for someone
who cannot see it — the screen, the key elements, and the state being
demonstrated. Under 125 characters each.

Output as a list of file, current alt, proposed alt. Do not edit yet.
```

---

## 10. Pre-publish audit

Run this last, before pointing the domain at the site.

```
Audit docs-site/ for publication readiness. Report only problems, as a table of
file, issue, severity:

1. Any placeholder left: XXXXXXXX, TODO, TBD, [brackets], lorem, example.com
2. Any phone number, email, or URL that is not RetentionOS's own
3. Any internal detail that should not be public: env var names, table names,
   internal file paths, vendor pricing
4. Any claim about security, uptime, compliance, or data handling that is
   stated more strongly than docs/ARCHITECTURE.md and docs/legal/ support
5. Any broken internal link
6. Any referenced image file that does not exist
7. Voice inconsistency against docs-site/features/packages.mdx

Do not fix anything. Report only.
```

---

## Two prompts to avoid

**"Write documentation for this product."** Produces plausible fiction. The
model will invent screens that do not exist and features that sound reasonable.
Always scope a prompt to specific files it must read first.

**"Make this sound more professional."** Produces marketing mush and strips out
exactly the specific, verifiable detail that makes the site trustworthy. If a
page reads badly, say what is wrong with it.

# Screenshot capture checklist

35 images. Every path below is already referenced by a page — save each file at
exactly the path shown and it appears automatically.

---

## Ground rules — read before capturing anything

1. **Demo tenant only. Never a live clinic.** These pages go public. A real
   patient name in a screenshot is a data breach, not a typo.
2. **Use the demo patient set below** across every shot. The same names
   recurring makes the docs feel like one product instead of thirty unrelated
   screens.
3. **Browser: 1440 × 900, dark theme, 2× DPI.** The site's default appearance is
   dark and the app is dark-first. Retina export keeps text sharp.
4. **Hide browser chrome.** No URL bar, no bookmarks, no extensions, no OS clock.
   Capture the app viewport only.
5. **Populate the data first.** An empty calendar or a two-row patient list makes
   the product look unfinished. Every screen wants realistic density.
6. **PNG. Under 500 KB each.** Run everything through an optimiser before commit.
7. **Crop tight** to the region the caption talks about. A full-page screenshot
   where the caption discusses one panel wastes the reader's attention.

### Demo data set — use these everywhere

| Patients | Clinicians | Services |
| --- | --- | --- |
| Priya Sharma · Ananya Rao · Meghna Iyer | Dr Meera Iyer | Laser hair reduction — full legs (₹8,000, 45 min) |
| Rohan Desai · Kavya Nair · Aditi Menon | Dr Arjun Kapoor | HydraFacial (₹4,500, 60 min) |
| Sneha Pillai · Vikram Shetty | Dr Sana Qureshi | Chemical peel (₹3,500, 30 min) |
| Divya Krishnan · Nikhil Raman | | Acne consultation (₹800, 20 min) |
| | | PRP — scalp (₹12,000, 60 min) |

Phone numbers: `+9198765 4321x`. Clinic: **Lumière Skin & Hair, Bengaluru**.

---

## Home — 1 image

### `images/hero-dashboard.png`
**Screen:** Overview dashboard, signed in as owner
**Shows:** Revenue-recovered figure, at-risk count, today's appointment list, recent activity
**Set up:** Populate a month of history so charts have a real curve. Revenue recovered should show a non-trivial number — this is the first thing a prospect sees.
**Crop:** Full dashboard viewport
**Caption already written:** "The RetAI overview dashboard — revenue recovered, at-risk patients, and today's schedule on one screen."

---

## Quickstart — 4 images

### `images/quickstart/01-login.png`
**Screen:** `/login`
**Shows:** Clinic branding, Google sign-in button, email/password fields
**Set up:** Clean state, nothing typed, no error banner

### `images/quickstart/02-staff.png`
**Screen:** CRM → Staff
**Shows:** 5–6 staff members across all three roles, with the module permission matrix visible
**Set up:** At least one receptionist with a non-default toggle, so the matrix looks used rather than pristine

### `images/quickstart/03-calendar.png`
**Screen:** Calendar, day view
**Shows:** Three clinician columns, 10–14 appointments, a mix of statuses including at least one amber tentative
**Set up:** A realistic clinic day — busy morning, quieter afternoon, a lunch gap

### `images/quickstart/04-ai-draft.png`
**Screen:** At-Risk → Draft message modal
**Shows:** The generated message with the patient's context panel beside it
**Set up:** Priya Sharma, 3 of 6 laser sessions remaining, 9 weeks since last visit. Draft must read naturally — regenerate until it does.

---

## Modules — 20 images

### `images/features/calendar-day-view.png`
**Screen:** Calendar, day view
**Shows:** Resource columns per clinician, colour-coded statuses, live current-time line
**Crop:** 09:00–18:00 so the whole working day is visible

### `images/features/calendar-ai-booking.png`
**Screen:** Appointment detail for an AI-created booking
**Shows:** The appointment panel with its conversation origin visible — that it came from WhatsApp is the entire point of the shot
**Set up:** Book one through the demo WhatsApp flow so it is genuine

### `images/features/patient-profile.png`
**Screen:** Patients → Priya Sharma
**Shows:** Overview tab with history, active package, recent invoices, conversation preview, and a clinical flag pinned at top
**Set up:** Give her a full history — 9 visits, an allergy flag, one active package

### `images/features/at-risk-list.png`
**Screen:** At-Risk Patients
**Shows:** 8–10 rows sorted by revenue at stake, each with its stated reason and value
**Set up:** Vary the reasons — sessions remaining, long gap, expiring package, recent no-show. The variety is what shows the score is doing work.

### `images/features/at-risk-ai-draft.png`
**Screen:** At-Risk → Draft message, expanded
**Shows:** Draft alongside the grounding context the model was given
**Note:** Different crop from `quickstart/04` — this one emphasises the grounding panel

### `images/features/revenue-recovered-chart.png`
**Screen:** Reports → Revenue recovered
**Shows:** 6-month trend with attribution to outreach
**Set up:** An upward but not absurd curve. A hockey stick reads as fake.

### `images/features/whatsapp-inbox.png`
**Screen:** WhatsApp Inbox
**Shows:** Thread list on the left with unread badges and one **Needs attention** flag; an open conversation on the right with patient context beside it
**Set up:** The open thread should show a real exchange — patient asks about a treatment, Aisha answers, patient asks for a slot, Aisha offers times. 6–8 messages.

### `images/features/receptionist-call-log.png`
**Screen:** AI Receptionist call log
**Shows:** 6–8 calls with duration, outcome, attributed patient; one row expanded to show the transcript
**Set up:** Mixed outcomes — booked, enquiry captured, escalated

### `images/features/leads-pipeline.png`
**Screen:** CRM → Leads, board view
**Shows:** All six stage columns populated, owner avatars, at least one overdue flag

### `images/features/consultation-editor.png`
**Screen:** Consultations → in-progress consultation
**Shows:** Structured template fields on the left, annotated diagram on the right
**Set up:** Fill the fields with plausible derma findings. Do not leave placeholder text visible.

### `images/features/annotation-canvas.png`
**Screen:** Annotation canvas, face-front diagram
**Shows:** 4–5 numbered treatment-site markers plus one shaded region
**Set up:** Mark it as a clinician actually would — injectable sites with numbers, not scribble

### `images/features/gallery-grid.png`
**Screen:** Before & After library
**Shows:** Grid filtered by treatment, consent badges visible on each tile
**Set up:** **Use stock or synthetic images only.** Never a real patient, even a consenting one — this page is public and permanent.

### `images/features/gallery-comparison.png`
**Screen:** Photo comparison, slider view
**Shows:** Session 1 versus session 6, dates and session numbers on each side
**Set up:** Same synthetic-image rule

### `images/features/package-detail.png`
**Screen:** Packages → a sold package
**Shows:** Sessions delivered vs remaining, and the financial panel — agreed price, amount received, earned value, unearned advance
**Set up:** 2 of 6 delivered, part-paid, so all four numbers are non-zero and distinct. **This is the shot that proves the accounting works — get it right.**

### `images/features/package-session-allocation.png`
**Screen:** Package → allocate sessions
**Shows:** Six proposed dates across three months at the configured interval

### `images/features/services-catalogue.png`
**Screen:** CRM → Services
**Shows:** Catalogue grouped by category, with price, GST rate, and duration columns
**Set up:** Include a mix of 5% and 18% GST rates — mixed rates are a documented selling point

### `images/features/billing-checkout.png`
**Screen:** Billing → Checkout
**Shows:** 3–4 line items at **different GST rates**, live total with the per-rate tax breakdown expanded
**Set up:** Deliberately mix an 18% service with a 5% product. The breakdown is the whole point.

### `images/features/billing-split-payment.png`
**Screen:** Checkout → payment entry
**Shows:** A single invoice split across UPI and cash, both amounts visible

### `images/features/inventory-list.png`
**Screen:** Inventory
**Shows:** 10–12 products, at least one below reorder level and one nearing expiry, so both alert states are visible

### `images/features/inventory-bom.png`
**Screen:** Service → consumables
**Shows:** A procedure's bill of materials with quantities per session

### `images/features/reports-hub.png`
**Screen:** Reports landing
**Shows:** All report cards, filter controls, export button

### `images/features/reports-schedule.png`
**Screen:** Report → schedule dialog
**Shows:** Cadence, recipient, and WhatsApp delivery option selected

### `images/features/staff-permissions.png`
**Screen:** Staff → Permissions matrix
**Shows:** Full module grid with Doctor and Receptionist columns, at least one non-default toggle

### `images/features/staff-availability.png`
**Screen:** Staff → clinician availability
**Shows:** Working days, hours, breaks, and one leave block

### `images/features/mobile-app.png`
**Screen:** Mobile app — device frame
**Shows:** Two or three screens side by side: calendar, WhatsApp inbox, patient profile
**Set up:** Use a clean device frame. **Capture at 3× on a real device or a high-DPI simulator** — a scaled-up phone screenshot looks cheap next to the desktop shots.

---

## Workflows — 5 images

These tell a story in sequence. Capture them in one session with the same
patient so the narrative holds.

**Story patient: Priya Sharma — 3 of 6 laser sessions remaining, 9 weeks since last visit, package expires in 41 days, ₹18,400 at stake.**

### `images/workflows/winback-01-list.png`
At-Risk list, Priya's row at the top with its reason and value visible

### `images/workflows/winback-02-draft.png`
The AI draft for Priya, grounding context shown

### `images/workflows/winback-03-aisha-books.png`
The WhatsApp thread: message sent → Priya replies → Aisha offers slots → books.
**The most persuasive image on the whole site.** Make the exchange read naturally,
regenerate until it does, and do not fake it by hand — capture a genuine run.

### `images/workflows/package-01-allocation.png`
Six sessions allocated across three months

### `images/workflows/package-02-progress.png`
The same package after 2 of 6 delivered, with earned value and unearned advance visible

---

## Also needed

### `images/og-cover.png` — 1200 × 630
Social share card. Referenced in `docs.json` under `seo.metatags`. Logo, the
line *"RetAI — the clinic OS that books patients back in"*, dark brand background.

### `logo/light.svg` and `logo/dark.svg`
Placeholders are committed. Replace with the real wordmark before publishing.
Light = for light backgrounds (dark ink), dark = for dark backgrounds (cream ink).

### `favicon.svg`
Placeholder committed. Replace with the real mark.

---

## Capture order

Doing it in this order takes about three hours instead of a day, because each
group reuses the state the previous one set up.

1. **Seed the demo tenant** — patients, services, packages, a month of appointments and invoices
2. **Run one genuine WhatsApp conversation** end to end → gives you `winback-03`, `whatsapp-inbox`, `calendar-ai-booking`
3. **Calendar and dashboard** → `hero`, `calendar-day-view`, `quickstart/03`
4. **Patient and clinical** → `patient-profile`, `consultation-editor`, `annotation-canvas`, gallery pair
5. **Packages** → `package-detail`, both allocation shots, `package-02-progress`
6. **Money** → `billing-checkout`, `billing-split-payment`, `services-catalogue`, both inventory shots
7. **Reports** → `reports-hub`, `reports-schedule`, `revenue-recovered-chart`
8. **Admin** → both staff shots, `quickstart/01`, `quickstart/02`
9. **At-risk** → `at-risk-list`, both draft shots, `winback-01`, `winback-02`
10. **Mobile** last, on a device

---

## Final check before commit

- [ ] No real patient name, phone, or photograph anywhere
- [ ] No real staff email or personal phone number
- [ ] No API key, token, or secret visible in any UI or console
- [ ] No browser chrome, extension icons, or OS clock
- [ ] Consistent theme and window size across every image
- [ ] All 35 paths present — `mint dev` shows no broken image
- [ ] Every file under 500 KB

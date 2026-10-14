import Link from "next/link";
import Image from "next/image";
import PatientJourneyHero from "@/components/PatientJourneyHero";
import {
  MessageSquare,
  PhoneCall,
  Calendar,
  HeartPulse,
  Receipt,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  CreditCard,
} from "lucide-react";

export default function HomeLanding() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* PATIENT JOURNEY INTERACTIVE SLIDER (ABOVE BIG MOCKUP) */}
      <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-8 flex flex-col items-center">
        <PatientJourneyHero />

        {/* HERO MOCKUP: BIG SAAS DASHBOARD SCREENSHOT */}
        <div className="mt-8 w-full rounded-2xl border border-white/10 bg-[#121910] p-3 sm:p-4 shadow-2xl relative overflow-hidden group">
          <div className="w-full h-8 flex items-center justify-between px-3 border-b border-white/5 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-xs text-zinc-500 ml-2 font-mono">retai.in/dashboard</span>
            </div>
            <span className="text-[11px] text-zinc-500 hidden sm:inline">Clinic Operations Intelligence</span>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden border border-white/5 bg-[#090d08]">
            <Image
              src="/dashboard.png"
              alt="RetAI Clinic Intelligence Dashboard"
              width={1920}
              height={1536}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT 1: BILLING & TILL (Screenshot Left, Text Right) */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Screenshot side */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#121910] p-3 shadow-2xl overflow-hidden group">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 mb-2">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <span className="text-xs text-zinc-500 ml-2 font-mono">retai.in/billing</span>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#090d08]">
                <Image
                  src="/billing.png"
                  alt="RetAI Clinical Billing & Invoicing"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Copy side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2e15] text-[#ffecd0] text-xs font-semibold border border-[#ffecd0]/20">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Point of Sale & Invoicing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Clinical Billing Built for Aesthetic Packages & GST
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Eliminate front-desk invoice errors. RetAI generates branded, itemized GST receipts with support for multiple tenders, advance balance ledgers, and automated stock deductions the moment a procedure closes.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffecd0] shrink-0 mt-0.5" />
                <span>Multi-tender payments: Split bills across UPI, card, cash, and clinic wallet</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffecd0] shrink-0 mt-0.5" />
                <span>Treatment package credits: Deduct session 2 of 6 with zero manual reconciliation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffecd0] shrink-0 mt-0.5" />
                <span>One-click Day-End reconciliation reports for your accountants</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT 2: MOBILE APP & PATIENT ACCESS (Text Left, Screenshot Right) */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy side */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2e15] text-[#ffecd0] text-xs font-semibold border border-[#ffecd0]/20">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Your Clinic's Front Desk & Doctor Schedule in Your Pocket
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Doctors and clinic owners stay connected anywhere. Review today's patient roster, approve prescription notes, monitor real-time chair occupancy, and manage emergency reschedule requests on iOS and Android.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffecd0] shrink-0 mt-0.5" />
                <span>Instant mobile notifications when high-value VIP patients book</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffecd0] shrink-0 mt-0.5" />
                <span>Secure doctor access to before and after clinical photo comparisons</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffecd0] shrink-0 mt-0.5" />
                <span>Real-time WhatsApp inquiry stream with front-desk manual takeover</span>
              </li>
            </ul>
          </div>

          {/* Screenshot side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="rounded-2xl border border-white/10 bg-[#121910] p-3 shadow-2xl overflow-hidden group">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 mb-2">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <span className="text-xs text-zinc-500 ml-2 font-mono">retai.in/mobile</span>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#090d08]">
                <Image
                  src="/mobileapp.png"
                  alt="RetAI Mobile Clinic Application"
                  width={1920}
                  height={1440}
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 1: INBOUND AUTOMATION */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#ffecd0] uppercase tracking-widest mb-2">
            Inbound Automation
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Patients Want Fast Answers. RetAI Delivers Them Instantly.
          </p>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Never lose a high-ticket procedure inquiry because your front desk was assisting an in-clinic patient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Aisha */}
          <div className="glass-card p-8 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#1b2e15] border border-white/10 flex items-center justify-center text-white">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Aisha on WhatsApp</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              An intelligent conversational assistant that reads natural patient messages, answers questions regarding doctor availability, consultation charges, and procedure aftercare, and books slots on the spot.
            </p>
            <ul className="text-xs text-zinc-400 space-y-2 pt-1">
              <li className="flex items-center gap-2">✓ No robotic menu clicks (1 for Yes, 2 for No)</li>
              <li className="flex items-center gap-2">✓ Automated pre and post-care advice delivery</li>
              <li className="flex items-center gap-2">✓ Multi-language clinical responses</li>
            </ul>
          </div>

          {/* Card 2: Voice Receptionist */}
          <div className="glass-card p-8 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#1b2e15] border border-white/10 flex items-center justify-center text-white">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">AI Voice Receptionist</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Picks up calls your front desk misses 24/7. Understands patient symptoms, captures contact details, logs the call transcript, and books the appointment directly into the doctor's calendar.
            </p>
            <ul className="text-xs text-zinc-400 space-y-2 pt-1">
              <li className="flex items-center gap-2">✓ Instant call audio playback and AI transcription</li>
              <li className="flex items-center gap-2">✓ Handles after-hours emergency triage</li>
              <li className="flex items-center gap-2">✓ Zero missed revenue opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PILLAR 2: COMPLETE PRM ECOSYSTEM */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#ffecd0] uppercase tracking-widest mb-2">
            Core PRM Infrastructure
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built Exclusively for Aesthetic & Dermatology Clinics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-xl space-y-3">
            <Calendar className="w-5 h-5 text-white" />
            <h4 className="font-bold text-white text-base">Multi-Doctor Calendar</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Room and laser machine conflict management, automated buffer times, and waitlist auto-fill.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl space-y-3">
            <HeartPulse className="w-5 h-5 text-white" />
            <h4 className="font-bold text-white text-base">At-Risk Win-Back</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Identifies lapsed Botox, peel, and hair treatment cycles by revenue walking out the door.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl space-y-3">
            <Layers className="w-5 h-5 text-white" />
            <h4 className="font-bold text-white text-base">Treatment Packages</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Track 6-session laser hair reduction, PRP packages, session deductions, and expiry nudges.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl space-y-3">
            <Receipt className="w-5 h-5 text-white" />
            <h4 className="font-bold text-white text-base">GST Billing & Till</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Itemized digital invoices, split payment options, and inventory auto-depletion per procedure.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold text-[#ffecd0] uppercase tracking-widest mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Got Questions? We Have Answers.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Can RetAI integrate with our existing clinic WhatsApp number?",
              a: "Yes. RetAI connects to official WhatsApp Business APIs, enabling automated two-way AI chats while allowing your front desk to intervene at any moment.",
            },
            {
              q: "What makes PRM different from a generic hospital CRM?",
              a: "Generic CRMs lack clinical context. RetAI PRM natively supports multi-session packages (such as Session 3 of 6), before/after photo consent, dermatological prescriptions, and consumable stock depletion.",
            },
            {
              q: "How does the At-Risk Patient scoring work?",
              a: "RetAI calculates procedure intervals (such as 12 to 16 weeks for Botox, 4 weeks for HydraFacial) and alerts your team when a patient lapses, ranking them by lifetime value.",
            },
            {
              q: "Is patient medical data protected?",
              a: "RetAI is engineered with complete role-based permission tiers, TLS 1.3 encryption, and compliance ready for DPDP and healthcare regulations.",
            },
          ].map((faq, i) => (
            <div key={i} className="glass-card p-6 rounded-xl">
              <h4 className="text-base font-semibold text-white">{faq.q}</h4>
              <p className="text-sm text-zinc-300 mt-2 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="w-full max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-[#141d13] border border-white/10 p-10 md:p-16 text-center flex flex-col items-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl tracking-tight">
            Upgrade Your Clinic into a High-Retention Powerhouse
          </h2>
          <p className="text-zinc-300 max-w-lg mt-4 text-sm sm:text-base leading-relaxed">
            Join premier skin and aesthetic clinics utilizing RetAI to manage consultations, eliminate no-shows, and retain patients effortlessly.
          </p>
          <Link
            href="/contact"
            className="mt-8 px-8 py-3.5 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-sm hover:bg-white transition-all shadow-md hover:scale-105"
          >
            Book a Personal Demonstration
          </Link>
        </div>
      </section>
    </div>
  );
}

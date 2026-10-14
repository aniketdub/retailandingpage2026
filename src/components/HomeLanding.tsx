import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare,
  PhoneCall,
  Calendar,
  HeartPulse,
  Receipt,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function HomeLanding() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* HERO SECTION - Clean, purposeful, zero AI artifacts */}
      <section className="relative w-full max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.12]">
          Your Clinic's Operating System. <br />
          Now Powered by AI.
        </h1>

        <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
          RetAI runs your front desk, clinical records, billing, and treatment packages, with an AI agent that speaks to patients on WhatsApp and voice calls to drive recurring bookings.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-sm hover:bg-white transition-all shadow-md hover:scale-105"
          >
            <span>Schedule 15-Min Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/pricing"
            className="flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1b2e15] text-white border border-white/15 font-semibold text-sm hover:bg-[#253e1e] transition-all"
          >
            Explore Pricing
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffecd0]" /> Zero Missed Calls
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffecd0]" /> WhatsApp 2-Way Scheduling
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffecd0]" /> DPDP & HIPAA Ready
          </span>
        </div>

        {/* Hero Visual Preview */}
        <div className="mt-14 w-full rounded-2xl border border-white/10 bg-[#141d13] p-4 shadow-xl relative overflow-hidden">
          <div className="w-full h-8 flex items-center gap-2 px-2 border-b border-white/5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-xs text-zinc-500 ml-2 font-mono">retai.in/dashboard</span>
          </div>
          <div className="aspect-[16/9] w-full rounded-xl bg-[#090d08] border border-white/5 flex flex-col items-center justify-center p-8 text-center">
            <HeartPulse className="w-10 h-10 text-white mb-3" />
            <h3 className="text-xl font-bold text-white">RetAI Unified Clinic Intelligence</h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mt-1.5 leading-relaxed">
              Active patient appointments, at-risk recovery alerts, and real-time WhatsApp inquiry logs.
            </p>
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

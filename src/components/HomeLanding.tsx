"use client";

import { useState, useEffect, useRef } from "react";
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
  ChevronDown,
  Sparkles,
  Send,
  Loader2,
} from "lucide-react";

export default function HomeLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [demoForm, setDemoForm] = useState({
    name: "",
    clinicName: "",
    phone: "",
    specialty: "Dermatology & Skin",
  });
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoError, setDemoError] = useState("");

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitting(true);
    setDemoError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...demoForm,
          source: "Homepage Interactive Booking Section",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit request.");
      setDemoSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email help.retai@gmail.com directly.";
      setDemoError(msg);
    } finally {
      setDemoSubmitting(false);
    }
  };

  // IntersectionObserver for scroll-triggered popups and fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = containerRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const faqItems = [
    {
      q: "Can RetAI integrate with our existing clinic WhatsApp Business number?",
      a: "Yes. RetAI integrates directly via the official WhatsApp Business Cloud API without requiring you to change your existing clinic phone number or lose past patient chat histories. Aisha, our conversational clinical AI, handles inquiries, procedure FAQs, and booking 24/7. When your front-desk staff or doctor responds to a thread, Aisha automatically pauses to give your team instant manual takeover. The system also supports sending branded treatment pre-care guidelines, before and after consent forms, and automated GST receipts over the same verified WhatsApp thread.",
    },
    {
      q: "What makes RetAI PRM different from a generic hospital or dental CRM?",
      a: "Generic CRMs lack aesthetic medicine workflows. RetAI is engineered specifically for dermatology, trichology, and cosmetology clinics. It natively understands multi-session treatment packages (such as Session 3 of 6 for laser hair reduction), clinical intervals (calculating exactly when Botox touch-ups or chemical peel cycles are due), consumable inventory auto-deduction (vial, syringe, and laser tip usage deducted automatically upon procedure completion), and equipment-cabin conflict prevention to ensure two doctors never schedule the same diode laser simultaneously.",
    },
    {
      q: "How does the At-Risk Patient Win-Back engine calculate churn risk?",
      a: "RetAI calculates procedure interval baselines for every service in your clinic catalog (for example: 12 to 16 weeks for neurotoxins, 4 weeks for HydraFacials, 3 to 4 weeks for PRP). When a patient completes a session, RetAI starts a biological countdown. If the patient does not book their next cycle as the window approaches, they are flagged on the At-Risk Dashboard, ranked by their Lifetime Value (LTV) and revenue at stake. The system can trigger gentle, doctor-personalized WhatsApp check-ins, converting lapses back into booked consultations with zero awkward marketing spam.",
    },
    {
      q: "How does the AI Voice Receptionist handle inbound patient phone calls?",
      a: "When your front desk is busy attending patients in the waiting lounge or during after-hours, RetAI's AI Voice Receptionist answers in under 1 second. Using clinical conversational intelligence, it greets the patient, answers doctor schedule questions, verifies open slots on the live multi-doctor calendar, and books the appointment directly. An instant audio playback, full AI-transcribed dialogue, and clinical intent summary are logged in your clinic dashboard, followed by an immediate WhatsApp confirmation with clinic directions dispatched to the patient.",
    },
    {
      q: "How does RetAI handle billing, treatment packages, and GST invoicing?",
      a: "RetAI includes a clinical Point of Sale (POS) and Till ledger. It produces itemized digital GST invoices with correct SAC/HSN codes and handles split-tender transactions across UPI, credit card, cash, and clinic advance balances. When a patient purchases a multi-session package (e.g., 6 sessions of laser hair removal), RetAI tracks redemptions without confusing accountant adjustments. Front-desk staff can reconcile till cash against card settlements with one-click Day-End reports.",
    },
    {
      q: "Is patient medical data, clinical photography, and communication DPDP compliant?",
      a: "Yes. RetAI is built with strict privacy and security standards in mind, complying with India's Digital Personal Data Protection (DPDP) Act and international healthcare frameworks. All data is encrypted with TLS 1.3 in transit and AES-256 at rest. RetAI enforces strict role-based access controls: receptionists cannot edit medical prescriptions, and administrative accounts cannot access clinical before-and-after photographs without authorized doctor clearance.",
    },
    {
      q: "Can multi-doctor, multi-chair aesthetic clinics manage equipment and room allocations?",
      a: "Yes. The RetAI Multi-Doctor Calendar supports resource-level constraints. If your clinic operates 4 consultation cabins and 2 specialized laser procedure suites with shared equipment (like a Soprano Titanium diode laser or fractional CO2 laser), RetAI automatically reserves both the doctor and the required equipment upon booking. This eliminates double-booking chaos and incorporates configurable buffer times for cabin sanitization between patient appointments.",
    },
    {
      q: "How quickly can our clinic get started, and is staff training included?",
      a: "Aesthetic clinics are typically live within 24 to 48 hours. Our team assists with uploading your doctor rosters, service catalogs, package structures, and existing patient records. RetAI's interface is designed for high-stress front desks with zero technical complexity. We conduct live walkthrough sessions with your front-desk coordinators and doctors to ensure complete confidence prior to go-live.",
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col items-center w-full">
      {/* PATIENT JOURNEY INTERACTIVE SLIDER (ABOVE BIG MOCKUP) */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-8 flex flex-col items-center">
        <PatientJourneyHero />

        {/* HERO MOCKUP: BIG SAAS DASHBOARD SCREENSHOT */}
        <div className="mt-8 w-full rounded-2xl border border-white/10 bg-[#121910] p-3 sm:p-5 shadow-2xl relative overflow-hidden group scroll-reveal">
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
      <section className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-white/5 scroll-reveal">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b2e15] text-[#ffecd0] text-xs font-semibold border border-[#ffecd0]/20">
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
      <section className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-white/5 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy side */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b2e15] text-[#ffecd0] text-xs font-semibold border border-[#ffecd0]/20">
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
      <section className="w-full max-w-5xl mx-auto px-6 py-20 border-t border-white/5 scroll-reveal">
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
      <section className="w-full max-w-5xl mx-auto px-6 py-20 border-t border-white/5 scroll-reveal">
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

      {/* EXPANDED INTERACTIVE FAQ ACCORDION SECTION */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20 border-t border-white/5 scroll-reveal">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold text-[#ffecd0] uppercase tracking-widest mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Got Questions? We Have Answers.
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
            Everything clinical practice directors, dermatologists, and clinic managers need to know about adopting RetAI.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqItems.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-[#121910]/70 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 transition hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1b2e15] border-[#ffecd0]/30" : ""
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 ${isOpen ? "text-[#ffecd0]" : "text-zinc-400"}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 bg-[#0a0e09]/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE BOOK A DEMO & CONTACT SECTION */}
      <section id="demo" className="w-full max-w-5xl mx-auto px-6 py-16 scroll-reveal">
        <div className="rounded-3xl bg-[#141d13] border border-white/10 p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2b17] border border-[#ffecd0]/20 text-xs font-semibold text-[#ffecd0] mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Clinic Consultation</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Upgrade Your Clinic into a High-Retention Powerhouse
            </h2>
            <p className="text-zinc-300 mt-4 text-sm sm:text-base leading-relaxed">
              Experience RetAI live with your clinic's actual specialty workflows. Enter your details below for a 15-minute walkthrough, or email us at{" "}
              <a href="mailto:help.retai@gmail.com" className="text-[#ffecd0] underline hover:text-white">
                help.retai@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {demoSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#0b0f0a] border border-[#ffecd0]/20 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#1b2b17] border border-[#ffecd0]/30 flex items-center justify-center mx-auto text-[#ffecd0]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Demonstration Requested</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Thank you, Dr. <span className="text-white font-semibold">{demoForm.name}</span>. Your walkthrough request for <span className="text-white font-semibold">{demoForm.clinicName}</span> has been dispatched to{" "}
                  <span className="text-[#ffecd0]">help.retai@gmail.com</span>.
                </p>
                <p className="text-xs text-zinc-400">
                  Our clinic specialist will contact you on WhatsApp ({demoForm.phone}) within 2 hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setDemoSubmitted(false)}
                    className="text-xs text-[#ffecd0] hover:underline"
                  >
                    Submit another request or modify details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4 bg-[#0b0f0a]/90 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
                {demoError && (
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-xs text-red-200">
                    {demoError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Doctor / Contact Name
                    </label>
                    <input
                      type="text"
                      required
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      placeholder="Dr. Samantha Rao"
                      className="w-full rounded-xl bg-[#141d13] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Clinic Name & City
                    </label>
                    <input
                      type="text"
                      required
                      value={demoForm.clinicName}
                      onChange={(e) => setDemoForm({ ...demoForm, clinicName: e.target.value })}
                      placeholder="Aura Aesthetics, Bengaluru"
                      className="w-full rounded-xl bg-[#141d13] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={demoForm.phone}
                      onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl bg-[#141d13] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Specialty
                    </label>
                    <select
                      value={demoForm.specialty}
                      onChange={(e) => setDemoForm({ ...demoForm, specialty: e.target.value })}
                      className="w-full rounded-xl bg-[#141d13] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                    >
                      <option value="Dermatology & Skin">Dermatology & Skin</option>
                      <option value="Aesthetic Surgery & Cosmetology">Aesthetic Surgery & Cosmetology</option>
                      <option value="Trichology & Hair Restoration">Trichology & Hair Restoration</option>
                      <option value="Multi-Specialty Wellness">Multi-Specialty Wellness</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={demoSubmitting}
                  className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-sm hover:bg-white transition-all shadow-md hover:shadow-[#ffecd0]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {demoSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Dispatching to help.retai@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Live Walkthrough</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 pt-2 gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Bengaluru Headquarters | help.retai@gmail.com</span>
                  </div>
                  <Link href="/contact" className="text-[#ffecd0] hover:underline">
                    Detailed Walkthrough Questionnaire &rarr;
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

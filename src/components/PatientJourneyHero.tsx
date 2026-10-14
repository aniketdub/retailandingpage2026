"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  PhoneCall,
  MessageSquare,
  Receipt,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  User,
  Building2,
  Calendar as CalendarIcon,
  Clock,
  CreditCard,
  Send,
  AlertTriangle,
  RotateCcw,
  Volume2,
  ChevronRight,
  Activity,
  Layers,
} from "lucide-react";

export default function PatientJourneyHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Typewriter effect state for Slide 1 (Call transcript)
  const [typedPatient, setTypedPatient] = useState("");
  const [typedAi, setTypedAi] = useState("");
  const fullPatientText =
    "Hi, I want to book a consultation for carbon laser peel with Dr. Samantha this Thursday afternoon.";
  const fullAiText =
    "Hello Ananya! Dr. Samantha has an opening this Thursday at 3:30 PM. I've reserved that slot for you and am sending your confirmation to your WhatsApp right now.";

  // Message sequence triggers for Slide 2 (WhatsApp)
  const [waStep, setWaStep] = useState(0);

  // Calendar slot pop animation for Slide 3
  const [calBooked, setCalBooked] = useState(false);

  // Billing calculation animation for Slide 4
  const [billingTotal, setBillingTotal] = useState(0);

  // Retention pulse trigger for Slide 5
  const [retentionConfirmed, setRetentionConfirmed] = useState(false);

  const SLIDE_DURATION = 9500; // 9.5 seconds per slide for natural pacing

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;
    autoSlideTimerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, SLIDE_DURATION);

    return () => {
      if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current);
    };
  }, [currentSlide, isPlaying]);

  // Per-slide micro-animations trigger on slide activation
  useEffect(() => {
    if (currentSlide === 1) {
      // Typing effect for call transcript
      setTypedPatient("");
      setTypedAi("");
      let pIdx = 0;
      const pInterval = setInterval(() => {
        pIdx += 2;
        setTypedPatient(fullPatientText.slice(0, pIdx));
        if (pIdx >= fullPatientText.length) {
          clearInterval(pInterval);
          // start AI response typing
          let aIdx = 0;
          const aInterval = setInterval(() => {
            aIdx += 2;
            setTypedAi(fullAiText.slice(0, aIdx));
            if (aIdx >= fullAiText.length) clearInterval(aInterval);
          }, 35);
        }
      }, 30);
      return () => clearInterval(pInterval);
    }

    if (currentSlide === 2) {
      // WhatsApp message pop sequence
      setWaStep(0);
      const t1 = setTimeout(() => setWaStep(1), 500);
      const t2 = setTimeout(() => setWaStep(2), 2200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    if (currentSlide === 3) {
      // Calendar booking live slot population
      setCalBooked(false);
      const t = setTimeout(() => setCalBooked(true), 1200);
      return () => clearTimeout(t);
    }

    if (currentSlide === 4) {
      // Billing numbers tally animation
      setBillingTotal(0);
      const start = 0;
      const end = 6726;
      let cur = start;
      const bTimer = setInterval(() => {
        cur += 336;
        if (cur >= end) {
          setBillingTotal(end);
          clearInterval(bTimer);
        } else {
          setBillingTotal(cur);
        }
      }, 50);
      return () => clearInterval(bTimer);
    }

    if (currentSlide === 5) {
      // Retention recovery prompt
      setRetentionConfirmed(false);
      const t = setTimeout(() => setRetentionConfirmed(true), 2500);
      return () => clearTimeout(t);
    }
  }, [currentSlide]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current);
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto min-h-[660px] sm:min-h-[700px] flex flex-col justify-between items-center py-6 sm:py-10 px-4 sm:px-6"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Top Floating Step Indicator Pill */}
      <div className="flex items-center gap-2 mb-6 z-20">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#ffecd0] bg-[#1a2618] border border-[#ffecd0]/20 px-4 py-1.5 rounded-full shadow-lg">
          {currentSlide === 0 ? "RetAI Overview" : `Patient Journey · Step ${currentSlide} of 5`}
        </span>
      </div>

      {/* Main Slide Presentation Stage with Subtle Float */}
      <div className="relative w-full flex-1 flex items-center justify-center animate-float">
        {/* SLIDE 0: MAIN HERO */}
        <div
          className={`w-full flex flex-col items-center text-center transition-all duration-700 ease-out ${
            currentSlide === 0
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.12]">
            Your Clinic's Operating System. <br />
            Now Powered by AI.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            RetAI runs your front desk, clinical records, billing, and treatment packages, with an AI agent that speaks to patients on WhatsApp and voice calls to drive recurring bookings.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-sm hover:bg-white transition-all shadow-md hover:scale-105"
            >
              <span>Schedule 15-Min Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => goToSlide(1)}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1b2e15] text-white border border-white/15 font-semibold text-sm hover:bg-[#253e1e] transition-all"
            >
              <span>Watch Patient Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-400">
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
        </div>

        {/* SLIDE 1: CALL - AI VOICE RECEPTIONIST INBOUND (With Realtime Typewriter Transcript) */}
        <div
          className={`w-full max-w-2xl flex flex-col items-center transition-all duration-700 ease-out ${
            currentSlide === 1
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          {/* Animated Connecting Call Header */}
          <div className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-[#141d13] border border-white/10 mb-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#1b2e15] border border-[#ffecd0]/20 flex items-center justify-center text-[#ffecd0] animate-radar">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Inbound Patient Call</div>
                <div className="text-[11px] text-zinc-400 font-mono">+91 98201 •••• (Ananya S.)</div>
              </div>
            </div>

            {/* Glowing animated connection path */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4a753d] animate-ping" />
              <div className="w-16 sm:w-28 h-0.5 bg-gradient-to-r from-[#34532b] via-[#ffecd0]/60 to-[#34532b]" />
              <span className="w-2 h-2 rounded-full bg-[#4a753d]" />
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs font-bold text-white">RetAI Voice Agent</div>
                <div className="text-[11px] text-[#ffecd0] flex items-center gap-1 justify-end font-mono">
                  <Volume2 className="w-3 h-3 animate-pulse" /> Live Voice
                </div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#1b2e15] border border-white/10 flex items-center justify-center text-white">
                <Building2 className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Typewriter Transcript Dialogue Box */}
          <div className="w-full rounded-2xl bg-[#0f170e] border border-white/10 p-6 sm:p-7 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-2.5 border-b border-white/5 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                LIVE AUDIO TRANSCRIPTION
              </span>
              <span className="text-[#ffecd0]">AUDIO STREAM CONNECTED</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm min-h-[120px]">
              {/* Patient speaker */}
              <div className="flex gap-3 items-start">
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-semibold text-[11px] shrink-0 font-mono">
                  Patient
                </span>
                <p className="text-zinc-200 leading-relaxed">
                  "{typedPatient}"
                  {typedPatient.length < fullPatientText.length && (
                    <span className="inline-block w-1.5 h-3.5 bg-white ml-1 animate-pulse" />
                  )}
                </p>
              </div>

              {/* AI speaker */}
              {typedPatient.length >= fullPatientText.length && (
                <div className="flex gap-3 items-start animate-fade-in">
                  <span className="px-2 py-0.5 rounded bg-[#1b2e15] text-[#ffecd0] font-semibold text-[11px] shrink-0 border border-[#ffecd0]/20 font-mono">
                    RetAI
                  </span>
                  <p className="text-zinc-300 leading-relaxed">
                    "{typedAi}"
                    {typedAi.length < fullAiText.length && (
                      <span className="inline-block w-1.5 h-3.5 bg-[#ffecd0] ml-1 animate-pulse" />
                    )}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-white/5 text-[11px] text-zinc-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffecd0]" />
                <span>Call audio recorded & synced to patient timeline</span>
              </span>
              <span className="text-zinc-500 font-mono">0 Missed Calls</span>
            </div>
          </div>
        </div>

        {/* SLIDE 2: WHATSAPP - CONVERSATIONAL AGENT WITH ANIMATED MESSAGE POPS */}
        <div
          className={`w-full max-w-xl flex flex-col items-center transition-all duration-700 ease-out ${
            currentSlide === 2
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          <div className="w-full rounded-2xl bg-[#0b140c] border border-white/10 p-5 sm:p-6 shadow-2xl text-left space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1b2e15] border border-[#ffecd0]/30 flex items-center justify-center text-[#ffecd0] font-bold text-sm">
                  R
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Aura Dermatology (RetAI Verified)</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffecd0]" />
                  </div>
                  <div className="text-[11px] text-zinc-400">Official WhatsApp Business Assistant</div>
                </div>
              </div>
              <span className="text-[11px] text-zinc-500 font-mono">10:42 AM</span>
            </div>

            {/* Bubble 1: Booking confirmation pop */}
            <div
              className={`p-4 rounded-xl rounded-tl-none bg-[#142314] border border-[#34532b]/40 text-xs sm:text-sm text-zinc-200 space-y-2.5 transition-all duration-500 ${
                waStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">
                  Appointment Confirmed · Ananya Sharma
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">ID #AURA-941</span>
              </div>
              <div className="space-y-1.5 text-xs text-zinc-300 pt-1">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#ffecd0]" />
                  <span>Thursday, Oct 16 · 3:30 PM (45 mins)</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#ffecd0]" />
                  <span>Dr. Samantha Rao (Consultant Dermatologist)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffecd0]" />
                  <span>Procedure: Carbon Laser Peel Consultation</span>
                </div>
              </div>
            </div>

            {/* Bubble 2: Automated Pre-care instruction advice pop */}
            <div
              className={`p-3.5 rounded-xl rounded-tl-none bg-[#162516] border border-[#34532b]/50 text-xs text-zinc-300 space-y-1.5 transition-all duration-500 ${
                waStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="font-semibold text-[#ffecd0] text-xs">
                Clinical Pre-Care Protocol:
              </div>
              <p className="leading-relaxed">
                Please avoid active AHA/BHA chemical exfoliants or retinoid creams 48 hours prior to your laser session. Bring your current skincare bottles for Dr. Samantha's review.
              </p>
            </div>

            {/* Instant Actions */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-300">
                1-Click Calendar Add
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-300">
                View Clinic Google Map
              </span>
            </div>
          </div>
        </div>

        {/* SLIDE 3: AI CALENDAR SCHEDULER (NEW - Live slot population & room allocation) */}
        <div
          className={`w-full max-w-2xl flex flex-col items-center transition-all duration-700 ease-out ${
            currentSlide === 3
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          <div className="w-full rounded-2xl bg-[#121910] border border-white/10 p-5 sm:p-6 shadow-2xl text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <CalendarIcon className="w-5 h-5 text-white" />
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Dr. Samantha Rao · Laser Room 2
                  </span>
                  <div className="text-[11px] text-zinc-400">Thursday Schedule · Real-Time Chair Occupancy</div>
                </div>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono">Oct 16, 2026</span>
            </div>

            {/* Calendar Slots */}
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-zinc-500 w-16">02:00 PM</span>
                  <span>HydraFacial Deluxe (Priya M.)</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400">Completed</span>
              </div>

              {/* Newly Populated Slot with Animation */}
              <div
                className={`p-3.5 rounded-xl border transition-all duration-700 flex items-center justify-between ${
                  calBooked
                    ? "bg-[#1b2e15] border-[#ffecd0]/40 shadow-lg shadow-[#1b2e15]/50 scale-[1.01]"
                    : "bg-white/5 border-dashed border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-white w-16">03:30 PM</span>
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      <span>Ananya Sharma · Carbon Laser Peel</span>
                      {calBooked && (
                        <span className="w-2 h-2 rounded-full bg-[#ffecd0] animate-ping" />
                      )}
                    </div>
                    <div className="text-[11px] text-zinc-300">
                      Booked by AI Voice Agent · Laser Device Confirmed
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#34532b] text-[#ffecd0] text-[10px] font-bold border border-[#ffecd0]/20">
                  {calBooked ? "Confirmed & Reserved" : "Holding Slot..."}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-zinc-500 w-16">04:30 PM</span>
                  <span>Botox Follow-Up 15 Units (Rohit K.)</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400">Scheduled</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-zinc-500 flex items-center justify-between">
              <span>Automatic buffer windows calculated (15 mins turnover)</span>
              <span className="text-[#ffecd0] font-mono">0 Conflict Conflicts</span>
            </div>
          </div>
        </div>

        {/* SLIDE 4: CLINICAL BILLING & PAYMENT (Animated Counter Tally) */}
        <div
          className={`w-full max-w-xl flex flex-col items-center transition-all duration-700 ease-out ${
            currentSlide === 4
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          <div className="w-full rounded-2xl bg-[#121910] border border-white/10 p-5 sm:p-6 shadow-2xl text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-white" />
                <span className="text-xs sm:text-sm font-bold text-white">GST Tax Invoice #INV-2026-881</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#1b2e15] text-[#ffecd0] font-bold text-[11px] border border-[#ffecd0]/20">
                PAID VIA UPI
              </span>
            </div>

            {/* Line Items */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between text-zinc-300">
                <span>Carbon Laser Peel Treatment</span>
                <span className="font-semibold text-white">₹4,500.00</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Post-Procedure Soothing Gel SPF 50</span>
                <span className="font-semibold text-white">₹1,200.00</span>
              </div>
              <div className="flex justify-between text-zinc-400 text-xs">
                <span>CGST (9%) + SGST (9%)</span>
                <span>₹1,026.00</span>
              </div>

              {/* Live Tally Counter */}
              <div className="pt-2 border-t border-white/10 flex justify-between text-base sm:text-lg font-bold text-white">
                <span>Total Amount Paid</span>
                <span className="font-mono text-white">₹{billingTotal.toLocaleString("en-IN")}.00</span>
              </div>
            </div>

            {/* Automated Dispatch Notification */}
            <div className="p-3 rounded-xl bg-[#162214] border border-white/5 flex items-center justify-between text-xs text-zinc-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffecd0] shrink-0" />
                <span>PDF receipt automatically dispatched to patient WhatsApp</span>
              </span>
              <span className="font-mono text-[11px] text-zinc-500">100% Paperless</span>
            </div>
          </div>
        </div>

        {/* SLIDE 5: RETENTION & AT-RISK WIN-BACK (With Interactive Rebooking Trigger) */}
        <div
          className={`w-full max-w-xl flex flex-col items-center transition-all duration-700 ease-out ${
            currentSlide === 5
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          <div className="w-full rounded-2xl bg-[#141d13] border border-white/10 p-5 sm:p-6 shadow-2xl text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#ffecd0]" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  At-Risk Patient Detected by RetAI Engine
                </span>
              </div>
              <span className="text-[11px] text-[#ffecd0] font-semibold px-2.5 py-0.5 rounded-full bg-[#1b2e15] border border-[#ffecd0]/20">
                Due in 11 Days
              </span>
            </div>

            <div className="text-xs sm:text-sm text-zinc-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-zinc-400">Patient:</span>
                <span className="font-semibold text-white">Ananya Sharma (Session 2/4 Due)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Clinical Protocol:</span>
                <span>Carbon Laser Maintenance Cycle (4-Week Gap)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Revenue at Stake:</span>
                <span className="font-bold text-white">₹4,500.00</span>
              </div>
            </div>

            {/* Automated Personalized WhatsApp Win-Back */}
            <div className="p-3.5 rounded-xl bg-[#0e170d] border border-white/10 text-xs text-zinc-300 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-[#ffecd0] font-semibold">
                <span>AUTOMATED WHATSAPP OUTREACH TRIGGERED</span>
                <span>DELIVERED</span>
              </div>
              <p className="italic text-zinc-200 leading-relaxed">
                "Hi Ananya, it's been 3 weeks since your first laser session with Dr. Samantha. To lock in your peak collagen results, your next session is ideal next Tuesday or Thursday. Would you like me to book your preferred 3:30 PM slot?"
              </p>
            </div>

            {/* Result animation */}
            <div
              className={`p-2.5 rounded-xl border transition-all duration-500 flex items-center gap-2 text-xs font-semibold ${
                retentionConfirmed
                  ? "bg-[#1b2e15] border-[#ffecd0]/30 text-white"
                  : "bg-white/5 border-white/5 text-zinc-400"
              }`}
            >
              <RotateCcw className="w-4 h-4 text-[#ffecd0]" />
              <span>
                {retentionConfirmed
                  ? "Result: Patient confirmed Thursday 3:30 PM · Booked without human effort"
                  : "Waiting for patient reply..."}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DOT NAVIGATION SLIDER */}
      <div className="w-full max-w-sm flex flex-col items-center gap-3 pt-6 z-20">
        <div className="flex items-center gap-3">
          {[
            { label: "Overview", icon: Sparkles },
            { label: "AI Voice Call", icon: PhoneCall },
            { label: "WhatsApp", icon: MessageSquare },
            { label: "AI Calendar", icon: CalendarIcon },
            { label: "Billing", icon: Receipt },
            { label: "Retention", icon: HeartPulse },
          ].map((item, idx) => {
            const isSelected = currentSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`group relative flex items-center justify-center transition-all ${
                  isSelected ? "w-8 h-2.5 rounded-full bg-white" : "w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}: ${item.label}`}
              >
                <span className="sr-only">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Label of Current Slide */}
        <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
          {currentSlide === 0 && "1. Complete Platform Overview"}
          {currentSlide === 1 && "2. Live Inbound Voice Call & Real-Time Transcription"}
          {currentSlide === 2 && "3. WhatsApp Booking Confirmation & Pre-Care Advice"}
          {currentSlide === 3 && "4. Conflict-Free Multi-Doctor Calendar Allocation"}
          {currentSlide === 4 && "5. Itemized GST Billing & UPI Tally"}
          {currentSlide === 5 && "6. At-Risk Detection & Automated Retention Win-Back"}
        </span>
      </div>
    </div>
  );
}

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
  Calendar,
  Clock,
  CreditCard,
  Send,
  AlertTriangle,
  RotateCcw,
  Volume2,
} from "lucide-react";

export default function PatientJourneyHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 8000; // 8 seconds per slide for smooth reading

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;
    autoSlideTimerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, SLIDE_DURATION);

    return () => {
      if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current);
    };
  }, [currentSlide, isPlaying]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    // Pause briefly or reset timer
    if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current);
  };

  return (
    <div
      className="relative w-full min-h-[580px] sm:min-h-[620px] flex flex-col justify-between items-center py-6 sm:py-10 px-4 sm:px-6 overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Step Indicator Top Pill */}
      <div className="flex items-center gap-2 mb-6 z-20">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#ffecd0] bg-[#1a2618] border border-[#ffecd0]/20 px-3.5 py-1 rounded-full">
          {currentSlide === 0 ? "RetAI Overview" : `Patient Journey · Step ${currentSlide} of 4`}
        </span>
      </div>

      {/* Slide Content Viewport */}
      <div className="relative w-full max-w-4xl flex-1 flex items-center justify-center">
        {/* SLIDE 0: MAIN HERO */}
        <div
          className={`w-full flex flex-col items-center text-center transition-all duration-700 ease-out ${
            currentSlide === 0
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-3xl leading-[1.12]">
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

        {/* SLIDE 1: CALL - AI VOICE RECEPTIONIST INBOUND */}
        <div
          className={`w-full max-w-2xl flex flex-col items-center transition-all duration-700 ease-out ${
            currentSlide === 1
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          {/* Animated Call Connection Header */}
          <div className="w-full flex items-center justify-between px-6 py-3.5 rounded-2xl bg-[#141d13] border border-white/10 mb-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-pulse">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Incoming Call Connected</div>
                <div className="text-[11px] text-zinc-400">+91 98201 •••• (Ananya S.)</div>
              </div>
            </div>

            {/* Pulsing connection line */}
            <div className="hidden sm:flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-500/50 via-[#ffecd0]/50 to-emerald-500/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs font-bold text-white">RetAI Voice Agent</div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 justify-end">
                  <Volume2 className="w-3 h-3" /> Live Audio
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#1b2e15] border border-white/10 flex items-center justify-center text-white">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Transcript Dialogue Box */}
          <div className="w-full rounded-2xl bg-[#0f170e] border border-white/10 p-5 sm:p-6 space-y-3.5 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs text-zinc-400 font-mono">
              <span>LIVE TRANSCRIPT</span>
              <span className="text-emerald-400">00:42 SEC</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex gap-2.5 items-start">
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-semibold text-[11px] shrink-0">
                  Patient
                </span>
                <p className="text-zinc-200">
                  "Hi, I want to book a consultation for carbon laser peel with Dr. Samantha this Thursday afternoon."
                </p>
              </div>

              <div className="flex gap-2.5 items-start">
                <span className="px-2 py-0.5 rounded bg-[#1b2e15] text-[#ffecd0] font-semibold text-[11px] shrink-0 border border-[#ffecd0]/20">
                  RetAI
                </span>
                <p className="text-zinc-300">
                  "Hello Ananya! Dr. Samantha has an opening this Thursday at 3:30 PM. I've reserved that slot for you and am sending your booking confirmation directly to your WhatsApp right now."
                </p>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-zinc-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call logged to patient profile · Slot synced to doctor calendar</span>
            </div>
          </div>
        </div>

        {/* SLIDE 2: WHATSAPP CONFIRMATION */}
        <div
          className={`w-full max-w-xl flex flex-col items-center transition-all duration-700 ease-out ${
            currentSlide === 2
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          {/* WhatsApp UI Simulation Card */}
          <div className="w-full rounded-2xl bg-[#0b140c] border border-emerald-900/40 p-4 sm:p-6 shadow-2xl text-left space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                  R
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Aura Dermatology (RetAI Verified)</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-[11px] text-emerald-400">Official WhatsApp Business</div>
                </div>
              </div>
              <span className="text-[11px] text-zinc-500">Just now</span>
            </div>

            {/* Bubble 1: Automated confirmation */}
            <div className="p-4 rounded-xl rounded-tl-none bg-[#142314] border border-emerald-800/30 text-xs sm:text-sm text-zinc-200 space-y-2.5">
              <p className="font-semibold text-white">
                Appointment Confirmed for Ananya Sharma
              </p>
              <div className="space-y-1 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Thursday, Oct 16 · 3:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dr. Samantha Rao (Consultant Dermatologist)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Procedure: Carbon Laser Peel Consultation</span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 pt-1 border-t border-white/5">
                Pre-care tip: Avoid retinoid creams 48 hours prior to your laser session.
              </p>
            </div>

            {/* Interactive response chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-300">
                Add to Apple/Google Calendar
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-300">
                Directions to Clinic
              </span>
            </div>
          </div>
        </div>

        {/* SLIDE 3: CLINICAL BILLING & PAYMENT */}
        <div
          className={`w-full max-w-xl flex flex-col items-center transition-all duration-700 ease-out ${
            currentSlide === 3
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          {/* Digital GST Invoice Card */}
          <div className="w-full rounded-2xl bg-[#121910] border border-white/10 p-5 sm:p-6 shadow-2xl text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-emerald-400" />
                <span className="text-xs sm:text-sm font-bold text-white">GST Tax Invoice #INV-2026-881</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[11px] border border-emerald-500/30">
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
              <div className="pt-2 border-t border-white/10 flex justify-between text-sm sm:text-base font-bold text-white">
                <span>Total Amount Paid</span>
                <span className="text-white">₹6,726.00</span>
              </div>
            </div>

            {/* Automated Dispatch Notification */}
            <div className="p-3 rounded-xl bg-[#162214] border border-white/5 flex items-center justify-between text-xs text-zinc-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>PDF receipt automatically dispatched to patient WhatsApp</span>
              </span>
              <span className="font-mono text-[11px] text-zinc-500">100% Paperless</span>
            </div>
          </div>
        </div>

        {/* SLIDE 4: AT-RISK INTELLIGENCE & WIN-BACK */}
        <div
          className={`w-full max-w-xl flex flex-col items-center transition-all duration-700 ease-out ${
            currentSlide === 4
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none absolute"
          }`}
        >
          {/* At-Risk Intelligence Alert Card */}
          <div className="w-full rounded-2xl bg-[#141d13] border border-amber-500/30 p-5 sm:p-6 shadow-2xl text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  At-Risk Patient Detected by RetAI Engine
                </span>
              </div>
              <span className="text-[11px] text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
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
            <div className="p-3.5 rounded-xl bg-[#0e170d] border border-emerald-900/40 text-xs text-zinc-300 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
                <span>AUTOMATED WHATSAPP OUTREACH TRIGGERED</span>
                <span>SENT</span>
              </div>
              <p className="italic text-zinc-200">
                "Hi Ananya, it's been 3 weeks since your first laser session with Dr. Samantha. To lock in your peak collagen results, your next session is ideal next Tuesday or Thursday. Would you like me to book your preferred 3:30 PM slot?"
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-1">
              <RotateCcw className="w-4 h-4" />
              <span>Result: Patient replied "Yes Thursday please" · Booked automatically</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DOT NAVIGATION SLIDER */}
      <div className="w-full max-w-xs flex flex-col items-center gap-3 pt-6 z-20">
        <div className="flex items-center gap-3">
          {[
            { label: "Overview", icon: Sparkles },
            { label: "AI Call", icon: PhoneCall },
            { label: "WhatsApp", icon: MessageSquare },
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

        {/* Text Label of Current Slide */}
        <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
          {currentSlide === 0 && "1. Complete Platform Overview"}
          {currentSlide === 1 && "2. Patient Inbound Call & AI Voice Triage"}
          {currentSlide === 2 && "3. Real-Time WhatsApp Booking Confirmation"}
          {currentSlide === 3 && "4. Paperless Billing & Instant Receipt"}
          {currentSlide === 4 && "5. At-Risk Detection & Automated Retention"}
        </span>
      </div>
    </div>
  );
}

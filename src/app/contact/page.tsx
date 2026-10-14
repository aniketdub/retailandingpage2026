"use client";

import { useState } from "react";
import { CheckCircle2, Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Experience RetAI in Action
        </h1>
        <p className="mt-4 text-base text-zinc-300">
          Book a 15-minute live walkthrough tailored to your clinic's specialty, doctor workflow, and retention goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact form */}
        <div className="glass-card rounded-2xl p-8 border border-white/10">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#ffecd0] mx-auto" />
              <h3 className="text-xl font-bold text-white">Demonstration Requested!</h3>
              <p className="text-sm text-zinc-300 max-w-xs mx-auto">
                Our clinic practice specialist will reach out within 2 hours to confirm your preferred time slot.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Samantha Rao"
                  className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Clinic Name & Location
                </label>
                <input
                  type="text"
                  required
                  placeholder="Aura Aesthetics, Bengaluru"
                  className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Work WhatsApp / Phone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Primary Specialty
                </label>
                <select className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition">
                  <option>Dermatology & Skin</option>
                  <option>Aesthetic Surgery & Cosmetology</option>
                  <option>Trichology & Hair Restoration</option>
                  <option>Multi-Specialty Wellness</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-sm hover:bg-white transition"
              >
                <span>Request Live Clinic Walkthrough</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Value side */}
        <div className="space-y-8 pt-4">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">What We Cover in Your Demo:</h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="text-[#ffecd0] font-bold">1.</span>
                <span>Live simulation of Aisha responding to an aesthetic patient inquiry on WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#ffecd0] font-bold">2.</span>
                <span>Voice AI handling an after-hours patient consultation booking.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#ffecd0] font-bold">3.</span>
                <span>How RetAI automatically scores and recovers at-risk treatment cycle revenue.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#141d13] border border-[#ffecd0]/10 space-y-3">
            <h4 className="text-sm font-semibold text-[#ffecd0] uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ffecd0]" />
                <a href="mailto:support@retai.in" className="hover:underline">support@retai.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffecd0]" />
                <span>+91 99000 RETAI</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ffecd0]" />
                <span>Bengaluru & Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

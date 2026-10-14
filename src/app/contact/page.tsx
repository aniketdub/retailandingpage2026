"use client";
import { useState } from "react";
import { CheckCircle2, Send, Mail, MapPin, Loader2, Calendar, Phone, Building2, User, Stethoscope } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    clinicName: "",
    phone: "",
    email: "",
    specialty: "Dermatology & Skin",
    preferredTime: "Morning (10:00 AM - 1:00 PM)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Contact Page (/contact)",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please email help.retai@gmail.com directly.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2b17] border border-[#ffecd0]/20 text-xs font-semibold text-[#ffecd0] mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>Personalized Clinical Demonstration</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Experience RetAI in Action
        </h1>
        <p className="mt-4 text-base text-zinc-300 leading-relaxed">
          Book a 15-minute live walkthrough tailored to your clinic's specialty, doctor workflow, and patient retention metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact form card */}
        <div className="glass-card rounded-2xl p-8 border border-white/10 shadow-2xl bg-[#0f150e]/80">
          {submitted ? (
            <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1b2b17] border border-[#ffecd0]/30 flex items-center justify-center mx-auto text-[#ffecd0]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Demonstration Requested</h3>
              <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                Thank you, Dr. <span className="text-white font-semibold">{formData.name}</span>. Your details have been transmitted directly to our clinical specialists at <span className="text-[#ffecd0]">help.retai@gmail.com</span>.
              </p>
              <div className="p-4 rounded-xl bg-[#090d08] border border-white/5 text-xs text-zinc-400 max-w-sm mx-auto text-left space-y-1.5">
                <div><span className="text-zinc-500">Clinic:</span> <span className="text-zinc-200">{formData.clinicName}</span></div>
                <div><span className="text-zinc-500">Contact:</span> <span className="text-zinc-200">{formData.phone}</span></div>
                <div><span className="text-zinc-500">Slot:</span> <span className="text-zinc-200">{formData.preferredTime}</span></div>
              </div>
              <p className="text-xs text-zinc-400">
                Our clinic specialist will reach out on WhatsApp within 2 hours to confirm your video meeting link.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#ffecd0] hover:underline pt-2 font-medium"
              >
                Book another walkthrough or update details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-xs text-red-200">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  <User className="w-3.5 h-3.5 text-[#ffecd0]" />
                  <span>Doctor / Contact Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. Samantha Rao"
                  className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-[#ffecd0]" />
                  <span>Clinic Name & Location</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.clinicName}
                  onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                  placeholder="Aura Aesthetics, Bengaluru"
                  className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    <Phone className="w-3.5 h-3.5 text-[#ffecd0]" />
                    <span>WhatsApp / Phone</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    <Mail className="w-3.5 h-3.5 text-[#ffecd0]" />
                    <span>Work Email</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="doctor@clinic.com"
                    className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  <Stethoscope className="w-3.5 h-3.5 text-[#ffecd0]" />
                  <span>Primary Specialty</span>
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                >
                  <option value="Dermatology & Skin">Dermatology & Skin</option>
                  <option value="Aesthetic Surgery & Cosmetology">Aesthetic Surgery & Cosmetology</option>
                  <option value="Trichology & Hair Restoration">Trichology & Hair Restoration</option>
                  <option value="Multi-Specialty Wellness">Multi-Specialty Wellness</option>
                  <option value="Dental Aesthetics">Dental Aesthetics</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-[#ffecd0]" />
                  <span>Preferred Walkthrough Window</span>
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                  <option value="Urgent (Today)">Urgent (Today if available)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Specific Requirements or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Inquiring about WhatsApp AI integration with our existing EMR software"
                  className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-sm hover:bg-white transition shadow-lg hover:shadow-[#ffecd0]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Details...</span>
                  </>
                ) : (
                  <>
                    <span>Request Live Clinic Walkthrough</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Value & Direct Contact side */}
        <div className="space-y-8 pt-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">What We Cover in Your 15-Min Walkthrough:</h3>
            <ul className="space-y-3.5 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1b2b17] border border-[#ffecd0]/30 flex items-center justify-center text-xs text-[#ffecd0] font-bold">1</span>
                <span><strong className="text-white">Conversational WhatsApp AI:</strong> Live simulation of Aisha answering patient queries, quoting procedure packages, and booking directly into calendars.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1b2b17] border border-[#ffecd0]/30 flex items-center justify-center text-xs text-[#ffecd0] font-bold">2</span>
                <span><strong className="text-white">24/7 Voice AI Receptionist:</strong> Handling overflow and after-hours emergency calls with natural speech and real-time transcription.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1b2b17] border border-[#ffecd0]/30 flex items-center justify-center text-xs text-[#ffecd0] font-bold">3</span>
                <span><strong className="text-white">Patient Retention Engine:</strong> Automated algorithmic follow-ups, at-risk churn prediction, and cycle re-engagement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1b2b17] border border-[#ffecd0]/30 flex items-center justify-center text-xs text-[#ffecd0] font-bold">4</span>
                <span><strong className="text-white">Unified POS & WhatsApp Billing:</strong> Instant invoice generation, 3-click payment links, and real-time GST summaries.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#141d13] border border-[#ffecd0]/15 space-y-4 shadow-xl">
            <h4 className="text-xs font-bold text-[#ffecd0] uppercase tracking-wider">
              Direct Clinical Inquiries
            </h4>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0b0f0a] border border-white/10 flex items-center justify-center text-[#ffecd0]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Direct Support & Demo Mail</div>
                  <a href="mailto:help.retai@gmail.com" className="hover:underline text-white font-medium">help.retai@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0b0f0a] border border-white/10 flex items-center justify-center text-[#ffecd0]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Headquarters</div>
                  <span className="text-white font-medium">Bengaluru, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

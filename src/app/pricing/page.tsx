import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const TIERS = [
  {
    name: "Starter Clinic",
    price: "₹8,999",
    period: "/month",
    description: "Ideal for boutique dermatology and aesthetic practices getting started with automated scheduling.",
    features: [
      "Up to 2 Doctor Calendars",
      "Aisha WhatsApp Assistant (500 chats/mo)",
      "Standard Patient Record Timeline",
      "GST Invoicing & Billing",
      "Email & Chat Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth Clinic",
    price: "₹18,499",
    period: "/month",
    description: "For established practices looking to maximize retention, packages, and missed call recovery.",
    features: [
      "Up to 6 Doctor & Treatment Room Calendars",
      "AI Voice Receptionist (Zero Missed Calls)",
      "Aisha WhatsApp Assistant (Unlimited)",
      "Treatment Packages (Session Ledger)",
      "At-Risk Patient Intelligence & Win-Back",
      "Procedure Consumables Auto-Depletion",
      "Priority Clinical Support",
    ],
    cta: "Get Started with Growth",
    popular: true,
  },
  {
    name: "Multi-Location Enterprise",
    price: "Custom",
    period: "",
    description: "For aesthetic chains and multi-branch healthcare centers needing custom routing and audit compliance.",
    features: [
      "Unlimited Locations, Doctors & Staff",
      "Custom Multi-Branch Voice & WhatsApp IVR",
      "Centralized Inventory & Warehouse Sync",
      "Custom DPDP & HIPAA Data Governance",
      "Dedicated Account Manager & 99.9% SLA",
      "On-site Clinic Staff Training",
    ],
    cta: "Contact Enterprise Sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Transparent Investment for Your Clinic's Growth
        </h1>
        <p className="mt-4 text-base md:text-lg text-zinc-300">
          Recover lost revenue from missed calls and no-shows in your very first month.
        </p>
      </div>

      {/* Pricing Cards Ladder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
              tier.popular
                ? "bg-[#1b2e15] border-2 border-[#ffecd0] shadow-2xl relative scale-105"
                : "glass-card border border-white/10"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#ffecd0] text-[#0d120c] text-xs font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <div>
              <h3 className="text-xl font-bold text-white">{tier.name}</h3>
              <p className="text-xs text-zinc-400 mt-2 min-h-[36px]">
                {tier.description}
              </p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-white">
                  {tier.price}
                </span>
                <span className="text-sm text-zinc-400 ml-1">{tier.period}</span>
              </div>
              <ul className="space-y-3 text-sm text-zinc-300 border-t border-white/10 pt-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#ffecd0] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className={`mt-8 w-full py-3 rounded-full text-center text-sm font-bold transition-all ${
                tier.popular
                  ? "bg-[#ffecd0] text-[#0d120c] hover:bg-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Feature Comparison Brief */}
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold text-white">Need a Tailored Clinic Pilot?</h3>
        <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
          We run a 14-day assisted pilot with your front desk team to guarantee no-show reduction.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-full bg-[#1b2e15] border border-[#ffecd0]/30 text-[#ffecd0] text-sm font-semibold hover:bg-[#253e1e]"
        >
          <span>Speak with our Practice Specialist</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

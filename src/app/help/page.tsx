import Link from "next/link";
import { BookOpen, ExternalLink, HelpCircle, Shield, Workflow, MessageSquare } from "lucide-react";

const DOC_MODULES = [
  {
    title: "Quickstart & Clinic Setup",
    desc: "Set up clinic timings, doctor calendars, and send your first AI reminder in under 15 minutes.",
    icon: Workflow,
  },
  {
    title: "Aisha on WhatsApp",
    desc: "Configure clinic tone of voice, automated booking guardrails, and message templates.",
    icon: MessageSquare,
  },
  {
    title: "Roles & Permissions",
    desc: "Granular access configuration for front desk, therapists, consulting doctors, and accountants.",
    icon: Shield,
  },
  {
    title: "API Reference & Webhooks",
    desc: "REST endpoints, voice event streams, inbound WhatsApp webhooks, and rate limits.",
    icon: ExternalLink,
  },
];

export default function HelpPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2e15] text-[#ffecd0] text-xs font-semibold mb-4 border border-[#ffecd0]/20">
          <BookOpen className="w-3.5 h-3.5" />
          <span>RetAI Documentation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          RetAI Knowledge Base & Docs
        </h1>
        <p className="mt-4 text-base text-zinc-300">
          Everything your clinical, front-desk, and management team needs to master RetAI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DOC_MODULES.map((mod, i) => {
          const Icon = mod.icon;
          return (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#ffecd0]/30 transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1b2e15] border border-[#ffecd0]/20 flex items-center justify-center text-[#ffecd0] mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#ffecd0] transition">
                {mod.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                {mod.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 p-8 rounded-2xl bg-[#141d13] border border-[#ffecd0]/15 text-center">
        <HelpCircle className="w-8 h-8 text-[#ffecd0] mx-auto mb-3" />
        <h3 className="text-lg font-bold text-white">Need live technical support?</h3>
        <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto">
          Our dedicated clinic onboarding engineers are available 7 days a week over WhatsApp and direct voice support.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-5 px-6 py-2.5 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-xs hover:bg-white transition"
        >
          Contact Support Desk
        </Link>
      </div>
    </div>
  );
}

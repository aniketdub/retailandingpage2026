import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

const POSTS = [
  {
    slug: "retaining-aesthetic-patients-in-2026",
    title: "Why 42% of Aesthetic Patients Never Book Their Second Session (And How to Fix It)",
    excerpt: "Dermatology and cosmetology clinics bleed revenue not at patient acquisition, but in the 90-day window following the initial consultation.",
    category: "Patient Retention",
    readTime: "5 min read",
    date: "Oct 12, 2026",
  },
  {
    slug: "ai-whatsapp-vs-traditional-front-desk",
    title: "How Aisha on WhatsApp Recovers 18 Hours of Front-Desk Time Every Week",
    excerpt: "A breakdown of why rigid menu bots fail in clinics, and how conversational AI handles nuanced questions about downtime, peeling, and costs.",
    category: "AI Technology",
    readTime: "4 min read",
    date: "Oct 05, 2026",
  },
  {
    slug: "managing-multi-session-laser-packages",
    title: "The Clinic Owner's Blueprint for Multi-Session Laser & PRP Package Ledgers",
    excerpt: "Prevent untracked session leakage, automate expiration reminders, and simplify therapist commission splits seamlessly.",
    category: "Clinic Operations",
    readTime: "6 min read",
    date: "Sep 28, 2026",
  },
];

export default function BlogsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Clinical Operations & Retention Insights
        </h1>
        <p className="mt-4 text-base md:text-lg text-zinc-300">
          Strategies, benchmarks, and tactical guides for dermatology, cosmetology, and aesthetic clinic leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <article
            key={post.slug}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#ffecd0]/30 transition group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#ffecd0] mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#1b2e15] border border-[#ffecd0]/20 font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-zinc-400">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-[#ffecd0] transition leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span>{post.date}</span>
              <span className="flex items-center gap-1 text-[#ffecd0] font-semibold group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

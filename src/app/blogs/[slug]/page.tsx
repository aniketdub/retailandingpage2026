import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Share2,
  Sparkles,
} from "lucide-react";
import { getBlogPost, getAllBlogSlugs, getRelatedPosts } from "@/data/blogs";
import BlogMarkdownRenderer from "@/components/BlogMarkdownRenderer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | RetAI",
    };
  }

  return {
    title: `${post.title} | RetAI Clinical Insights`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      url: `https://retai.in/blogs/${post.slug}`,
    },
    alternates: {
      canonical: `https://retai.in/blogs/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Top Breadcrumb & Return Link */}
      <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Link href="/home" className="hover:text-white transition">
          Home
        </Link>
        <span>/</span>
        <Link href="/blogs" className="hover:text-white transition">
          Blogs
        </Link>
        <span>/</span>
        <span className="text-zinc-500">{post.category}</span>
        <span>/</span>
        <span className="text-[#ffecd0] truncate max-w-[200px] sm:max-w-xs">
          {post.title}
        </span>
      </nav>

      <div className="mb-6">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Publications</span>
        </Link>
      </div>

      {/* Article Header Card */}
      <header className="rounded-3xl glass-card p-6 sm:p-10 border border-white/10 mb-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="px-3.5 py-1 rounded-full bg-[#1b2e15] text-[#ffecd0] border border-[#ffecd0]/25 font-semibold">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
          {post.title}
        </h1>

        {/* Executive Clinical Abstract Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#111a0f]/90 border border-white/10 space-y-2.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#ffecd0]">
            <FileText className="w-4 h-4" />
            <span>Executive Clinical Abstract</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
            {post.abstract}
          </p>
        </div>

        {/* Key Clinical Takeaways Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#152313]/70 border border-[#ffecd0]/15 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#ffecd0]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Key Practice Takeaways</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-200">
            {post.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#ffecd0] font-bold">•</span>
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Main Content Layout with Sticky Table of Contents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Table of Contents Sidebar */}
        <aside className="lg:col-span-4 order-2 lg:order-1">
          <div className="sticky top-28 rounded-2xl glass-card p-6 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#ffecd0] pb-2 border-b border-white/10">
              <Compass className="w-4 h-4" />
              <span>Table of Contents</span>
            </div>
            <nav className="space-y-2 text-xs">
              {post.tableOfContents.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.id}`}
                  className="block text-zinc-400 hover:text-white transition py-1 leading-snug border-l-2 border-transparent hover:border-[#ffecd0] pl-2.5"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* In-Article Clinical Contact Card */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs font-semibold text-white">
                Interested in Clinical PRM Deployment?
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                RetAI provides protocolized patient journey management and voice telephony for premier aesthetic clinics.
              </p>
              <Link
                href="/contact"
                className="block text-center py-2 px-4 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-xs hover:bg-white transition"
              >
                Schedule Clinic Demo
              </Link>
            </div>
          </div>
        </aside>

        {/* Article Body */}
        <article className="lg:col-span-8 order-1 lg:order-2">
          <div className="rounded-3xl glass-card p-6 sm:p-10 border border-white/10">
            <BlogMarkdownRenderer content={post.content} />
          </div>
        </article>
      </div>

      {/* In-Content Footer CTA Banner */}
      <section className="mt-16 rounded-3xl bg-[#141d13] border border-white/10 p-8 sm:p-12 text-center flex flex-col items-center shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight max-w-xl">
          Transform Your Clinical Retention with RetAI
        </h3>
        <p className="text-zinc-300 max-w-lg mt-3 text-sm leading-relaxed">
          Automate post-procedure check-ins, eliminate consultation no-shows, and manage multi-session packages effortlessly.
        </p>
        <Link
          href="/contact"
          className="mt-6 px-8 py-3.5 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-sm hover:bg-white transition-all shadow-md hover:scale-105"
        >
          Book a 15-Minute Live Practice Walkthrough
        </Link>
      </section>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Related Clinical Research
            </h3>
            <Link
              href="/blogs"
              className="text-xs font-semibold text-[#ffecd0] hover:underline"
            >
              View all 20 publications
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blogs/${related.slug}`}
                className="group block"
              >
                <div className="h-full glass-card rounded-2xl p-5 flex flex-col justify-between border border-white/10 hover:border-[#ffecd0]/30 transition group-hover:-translate-y-1">
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-semibold text-[#ffecd0] px-2.5 py-0.5 rounded-full bg-[#1b2e15] border border-[#ffecd0]/20 inline-block">
                      {related.category}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#ffecd0] transition-colors leading-snug line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {related.abstract}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500">
                    <span>{related.readTime}</span>
                    <span className="text-[#ffecd0] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

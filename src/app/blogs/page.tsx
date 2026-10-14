"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Search, Sparkles } from "lucide-react";
import { BLOG_POSTS, getBlogCategories } from "@/data/blogs";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => ["All", ...getBlogCategories()], []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.some((k) =>
          k.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b2e15] text-[#ffecd0] text-xs font-semibold border border-[#ffecd0]/20">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Clinical & Operational Research</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Clinical Operations & Retention Insights
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Peer-level methodologies, health informatics frameworks, and retention algorithms for aesthetic dermatology, plastic surgery, and medical spa directors.
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="mb-12 space-y-6">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search clinical topics, procedures, or algorithms..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#111910] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffecd0]/50 transition"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-4 py-2 rounded-full transition-all ${
                  isSelected
                    ? "bg-[#ffecd0] text-[#0d120c] font-bold shadow-md"
                    : "bg-[#141d13] text-zinc-400 border border-white/10 hover:text-white hover:border-white/25"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Posts Counter */}
      <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 pb-3 border-b border-white/10">
        <span>Showing {filteredPosts.length} clinical research articles</span>
        <span className="font-mono text-zinc-500">20 Peer-Grade Papers Available</span>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group block"
          >
            <article className="h-full glass-card rounded-2xl p-6.5 flex flex-col justify-between border border-white/10 hover:border-[#ffecd0]/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#ffecd0]">
                  <span className="px-2.5 py-1 rounded-full bg-[#1b2e15] border border-[#ffecd0]/20 font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-400 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#ffecd0] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed">
                  {post.abstract}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end text-xs font-semibold text-[#ffecd0]">
                <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  Read Clinical Paper <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20 glass-card rounded-3xl p-12 border border-white/10">
          <BookOpen className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white">No articles matched your criteria</h3>
          <p className="text-sm text-zinc-400 mt-2 max-w-sm mx-auto">
            Try adjusting your search query or reset the category filter to explore all 20 research publications.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-6 px-6 py-2.5 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-xs hover:bg-white transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

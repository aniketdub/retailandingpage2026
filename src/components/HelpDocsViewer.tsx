"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import docsData from "@/data/docsData.json";
import {
  Search,
  BookOpen,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

// Optimized Markdown Renderer: Clean editorial typography without heavy borders or black box wrappers
const MemoizedMarkdown = React.memo(function MemoizedMarkdown({
  content,
  onDocClick,
}: {
  content: string;
  onDocClick: (docId: string) => void;
}) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-2xl sm:text-3xl font-bold text-white pt-6 pb-2 border-b border-white/10">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl sm:text-2xl font-bold text-white pt-6 pb-1 border-b border-white/5">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-semibold text-[#ffecd0] pt-4">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-base font-semibold text-white pt-3">
            {children}
          </h4>
        ),
        p: ({ children }) => (
          <p className="leading-relaxed text-zinc-300 my-2 text-sm">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="space-y-1.5 pl-5 list-disc marker:text-[#ffecd0] my-3">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="space-y-1.5 pl-5 list-decimal marker:text-[#ffecd0] my-3">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-zinc-300 pl-1 leading-relaxed">{children}</li>
        ),
        // Clean editorial notes instead of dark boxed blocks
        blockquote: ({ children }) => (
          <div className="border-l-2 border-[#4a753d] pl-4 py-1 text-zinc-300 italic my-3 text-sm">
            {children}
          </div>
        ),
        // Tables: seamless integration with standard table view
        table: ({ children }) => (
          <div className="overflow-x-auto my-6 border border-white/10 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-[#182415] text-[#ffecd0] border-b border-white/10">
            {children}
          </thead>
        ),
        th: ({ children }) => (
          <th className="p-3 font-semibold text-[#ffecd0]">{children}</th>
        ),
        td: ({ children }) => (
          <td className="p-3 border-b border-white/5 text-zinc-300">
            {children}
          </td>
        ),
        // Clean inline text token (no chunky black container)
        code: ({ inline, className, children, ...props }: any) => {
          if (inline) {
            return (
              <span className="font-mono text-xs text-[#ffecd0] bg-[#1a2618] px-1 py-0.5 rounded border border-[#ffecd0]/15">
                {children}
              </span>
            );
          }
          // Only true multi-line code blocks (e.g. JSON or bash endpoints)
          return (
            <pre className="my-3 p-4 rounded-xl bg-[#090d08] border border-white/10 font-mono text-xs text-zinc-200 overflow-x-auto">
              <code>{children}</code>
            </pre>
          );
        },
        a: ({ href, children }) => {
          if (href?.startsWith("#doc-")) {
            const targetId = href.replace("#doc-", "");
            return (
              <button
                type="button"
                onClick={() => onDocClick(targetId)}
                className="text-[#ffecd0] underline underline-offset-2 decoration-[#ffecd0]/40 hover:decoration-[#ffecd0] hover:text-white transition font-medium inline text-left cursor-pointer"
              >
                {children}
              </button>
            );
          }

          return (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[#ffecd0] underline underline-offset-2 decoration-[#ffecd0]/40 hover:decoration-[#ffecd0] transition"
            >
              {children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
});

export default function HelpDocsViewer() {
  const [activeTab, setActiveTab] = useState("Documentation");
  const [activePageId, setActivePageId] = useState("index");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const tabs = docsData.navigation.tabs;
  const currentTabObj = tabs.find((t: any) => t.tab === activeTab) || tabs[0];

  const activeDoc = (docsData.docs as any)[activePageId] || {
    title: "Documentation",
    description: "",
    content: "Select a topic from the sidebar to view documentation.",
  };

  const handleDocClick = useCallback((docId: string) => {
    for (const tab of tabs) {
      for (const grp of tab.groups) {
        for (const p of grp.pages) {
          if (p === docId) {
            setActiveTab(tab.tab);
            break;
          }
          if (typeof p === "object" && p.pages?.includes(docId)) {
            setActiveTab(tab.tab);
            break;
          }
        }
      }
    }
    setActivePageId(docId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tabs]);

  // Precomputed search index
  const searchIndex = useMemo(() => {
    return Object.entries(docsData.docs).map(([id, doc]: [string, any]) => ({
      id,
      title: doc.title,
      desc: doc.description || doc.content.slice(0, 80),
      raw: `${doc.title} ${doc.description}`.toLowerCase(),
    }));
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return searchIndex
      .filter((item) => item.raw.includes(q))
      .slice(0, 6);
  }, [searchQuery, searchIndex]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 min-h-[85vh] flex flex-col font-sans">
      {/* Top Docs Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ffecd0] mb-1">
            <BookOpen className="w-4 h-4" />
            <span>RetAI Knowledge Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Clinic Platform & Developer Guides
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search docs (Aisha, GST, WhatsApp, Calendar)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#141d13] border border-white/10 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition placeholder:text-zinc-500"
          />

          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#141d13] border border-[#ffecd0]/25 rounded-xl p-2 shadow-2xl z-50 max-h-80 overflow-y-auto space-y-1">
              {searchResults.map((res) => (
                <button
                  key={res.id}
                  onClick={() => {
                    handleDocClick(res.id);
                    setSearchQuery("");
                  }}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-[#1b2e15] transition flex flex-col"
                >
                  <span className="text-sm font-semibold text-white">{res.title}</span>
                  <span className="text-xs text-zinc-400 truncate">{res.desc}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between gap-2 pt-4 pb-2 overflow-x-auto border-b border-white/5">
        <div className="flex items-center gap-2">
          {tabs.map((tab: any) => {
            const isTabActive = tab.tab === activeTab;
            return (
              <button
                key={tab.tab}
                onClick={() => {
                  setActiveTab(tab.tab);
                  const firstGroup = tab.groups[0];
                  if (firstGroup) {
                    const firstPage =
                      typeof firstGroup.pages[0] === "string"
                        ? firstGroup.pages[0]
                        : firstGroup.pages[0].pages[0];
                    if (firstPage) setActivePageId(firstPage);
                  }
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 whitespace-nowrap ${
                  isTabActive
                    ? "bg-[#34532b] text-[#ffecd0] font-semibold border border-[#ffecd0]/25 shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{tab.tab}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="md:hidden flex items-center gap-1.5 text-xs text-[#ffecd0] bg-[#1b2e15] px-3 py-1.5 rounded-lg border border-[#ffecd0]/20"
        >
          <Menu className="w-4 h-4" />
          <span>Modules</span>
        </button>
      </div>

      {/* Main Layout: Sidebar + Document */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 flex-1">
        {/* Left Sidebar */}
        <aside
          className={`md:col-span-3 space-y-6 ${
            mobileSidebarOpen
              ? "block fixed inset-0 z-50 bg-[#0d120c] p-6 overflow-y-auto"
              : "hidden md:block"
          }`}
        >
          {mobileSidebarOpen && (
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <span className="text-sm font-bold text-[#ffecd0]">Topics</span>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="space-y-6">
            {currentTabObj.groups.map((grp: any, gIdx: number) => {
              return (
                <div key={gIdx} className="space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#ffecd0]/80 px-2 py-1">
                    {grp.group}
                  </h3>
                  <div className="space-y-0.5">
                    {grp.pages.map((p: any, pIdx: number) => {
                      if (typeof p === "object" && p.group) {
                        return (
                          <div key={pIdx} className="pl-2 pt-1.5 space-y-0.5">
                            <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block px-2">
                              {p.group}
                            </span>
                            {p.pages.map((nested: string) => {
                              const docItem = (docsData.docs as any)[nested] || { title: nested };
                              const isSelected = activePageId === nested;
                              return (
                                <button
                                  key={nested}
                                  onClick={() => {
                                    handleDocClick(nested);
                                    setMobileSidebarOpen(false);
                                  }}
                                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition flex items-center justify-between ${
                                    isSelected
                                      ? "bg-[#1b2e15] text-[#ffecd0] font-semibold border-l-2 border-[#ffecd0]"
                                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                                  }`}
                                >
                                  <span className="truncate">{docItem.title}</span>
                                  {isSelected && <ChevronRight className="w-3.5 h-3.5 text-[#ffecd0]" />}
                                </button>
                              );
                            })}
                          </div>
                        );
                      }

                      const docItem = (docsData.docs as any)[p] || { title: p };
                      const isSelected = activePageId === p;
                      return (
                        <button
                          key={p}
                          onClick={() => {
                            handleDocClick(p);
                            setMobileSidebarOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition flex items-center justify-between ${
                            isSelected
                              ? "bg-[#1b2e15] text-[#ffecd0] font-semibold border-l-2 border-[#ffecd0]"
                              : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                          }`}
                        >
                          <span className="truncate">{docItem.title}</span>
                          {isSelected && <ChevronRight className="w-3.5 h-3.5 text-[#ffecd0]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right Article View with Clean Typography */}
        <main className="md:col-span-9 rounded-2xl p-6 sm:p-10 border border-white/10 bg-[#121910]/70 backdrop-blur-xl min-h-[600px] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span>{activeTab}</span>
              <span>/</span>
              <span className="text-[#ffecd0] font-medium">{activeDoc.title}</span>
            </div>

            <div className="space-y-2.5 border-b border-white/10 pb-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeDoc.title}
              </h2>
              {activeDoc.description && (
                <p className="text-base text-[#ffecd0]/90 leading-relaxed font-normal">
                  {activeDoc.description}
                </p>
              )}
            </div>

            <div className="markdown-doc text-sm text-zinc-300 leading-relaxed space-y-4">
              <MemoizedMarkdown
                content={activeDoc.content}
                onDocClick={handleDocClick}
              />
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <span>RetAI Official Documentation</span>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-[#ffecd0] hover:underline transition">
                Need Live Support? Book a Clinic Demo
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

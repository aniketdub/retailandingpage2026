"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import docsData from "@/data/docsData.json";
import {
  Search,
  BookOpen,
  ChevronRight,
  Shield,
  Layers,
  Code2,
  Terminal,
  FileText,
  HelpCircle,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

export default function HelpDocsViewer() {
  const [activeTab, setActiveTab] = useState("Documentation");
  const [activePageId, setActivePageId] = useState("index");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Tabs from docs.json
  const tabs = docsData.navigation.tabs;
  const currentTabObj = tabs.find((t: any) => t.tab === activeTab) || tabs[0];

  // Active doc content
  const activeDoc = (docsData.docs as any)[activePageId] || {
    title: "Documentation",
    description: "",
    content: "Select a topic from the sidebar to view documentation.",
  };

  // Search filter
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results: { id: string; title: string; desc: string }[] = [];
    Object.entries(docsData.docs).forEach(([id, doc]: [string, any]) => {
      if (
        doc.title.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.content.toLowerCase().includes(q)
      ) {
        results.push({
          id,
          title: doc.title,
          desc: doc.description || doc.content.slice(0, 100) + "...",
        });
      }
    });
    return results.slice(0, 8);
  }, [searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 min-h-[85vh] flex flex-col">
      {/* Top Docs Header & Mintlify-style Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ffecd0] mb-1">
            <BookOpen className="w-4 h-4" />
            <span>RetAI Knowledge Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Developer & Clinic Documentation
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search RetAI docs (e.g., Aisha, GST, Calendar)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#141d13] border border-white/10 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
          />

          {/* Quick Search Dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#141d13] border border-[#ffecd0]/20 rounded-xl p-2 shadow-2xl z-50 max-h-80 overflow-y-auto space-y-1">
              {searchResults.map((res) => (
                <button
                  key={res.id}
                  onClick={() => {
                    setActivePageId(res.id);
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

      {/* Mintlify Tab Switcher */}
      <div className="flex items-center justify-between gap-2 pt-4 pb-2 overflow-x-auto border-b border-white/5">
        <div className="flex items-center gap-2">
          {tabs.map((tab: any) => {
            const isTabActive = tab.tab === activeTab;
            return (
              <button
                key={tab.tab}
                onClick={() => {
                  setActiveTab(tab.tab);
                  // pick first page of this tab
                  const firstGroup = tab.groups[0];
                  if (firstGroup) {
                    const firstPage = typeof firstGroup.pages[0] === "string" ? firstGroup.pages[0] : firstGroup.pages[0].pages[0];
                    if (firstPage) setActivePageId(firstPage);
                  }
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 whitespace-nowrap ${
                  isTabActive
                    ? "bg-[#34532b] text-[#ffecd0] font-semibold border border-[#ffecd0]/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{tab.tab}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="md:hidden flex items-center gap-1 text-xs text-zinc-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
        >
          <Menu className="w-4 h-4" />
          <span>Index</span>
        </button>
      </div>

      {/* Main Layout: Sidebar + Content */}
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
              <span className="text-sm font-bold text-[#ffecd0]">Navigation Topics</span>
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
                <div key={gIdx} className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#ffecd0]/80 px-2">
                    {grp.group}
                  </h3>
                  <div className="space-y-1">
                    {grp.pages.map((p: any, pIdx: number) => {
                      if (typeof p === "object" && p.group) {
                        return (
                          <div key={pIdx} className="pl-2 pt-2 space-y-1">
                            <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">
                              {p.group}
                            </span>
                            {p.pages.map((nested: string) => {
                              const docItem = (docsData.docs as any)[nested] || { title: nested };
                              const isSelected = activePageId === nested;
                              return (
                                <button
                                  key={nested}
                                  onClick={() => {
                                    setActivePageId(nested);
                                    setMobileSidebarOpen(false);
                                  }}
                                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition flex items-center justify-between ${
                                    isSelected
                                      ? "bg-[#1b2e15] text-[#ffecd0] font-semibold border-l-2 border-[#ffecd0]"
                                      : "text-zinc-400 hover:text-white hover:bg-white/5"
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
                            setActivePageId(p);
                            setMobileSidebarOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition flex items-center justify-between ${
                            isSelected
                              ? "bg-[#1b2e15] text-[#ffecd0] font-semibold border-l-2 border-[#ffecd0]"
                              : "text-zinc-400 hover:text-white hover:bg-white/5"
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

        {/* Right Doc Article Content View */}
        <main className="md:col-span-9 glass-card rounded-2xl p-6 sm:p-10 border border-white/10 min-h-[600px] flex flex-col justify-between">
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span>{activeTab}</span>
              <span>/</span>
              <span className="text-[#ffecd0]">{activeDoc.title}</span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 border-b border-white/10 pb-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeDoc.title}
              </h2>
              {activeDoc.description && (
                <p className="text-base text-zinc-300 leading-relaxed">
                  {activeDoc.description}
                </p>
              )}
            </div>

            {/* Markdown rendered body */}
            <div className="prose prose-invert max-w-none text-sm text-zinc-300 space-y-4 leading-relaxed font-sans">
              <DocContentRenderer content={activeDoc.content} />
            </div>
          </div>

          {/* Quick Footer inside Doc */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <span>RetAI Official Documentation</span>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hover:text-[#ffecd0] transition">
                Need Help? Ask Clinic Support
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Custom Markdown / Clean MDX content cleaner for presentation
function DocContentRenderer({ content }: { content: string }) {
  // Strip JSX frames or clean raw MDX custom tags cleanly
  const cleaned = content
    .replace(/<Frame.*?>[\s\S]*?<\/Frame>/g, "")
    .replace(/<CardGroup[\s\S]*?>/g, "")
    .replace(/<\/CardGroup>/g, "")
    .replace(/<Card([\s\S]*?)<\/Card>/g, "")
    .replace(/<Tabs[\s\S]*?>/g, "")
    .replace(/<\/Tabs>/g, "")
    .replace(/<Tab[\s\S]*?>/g, "")
    .replace(/<\/Tab>/g, "")
    .replace(/<Note>/g, "\n> **Note:** ")
    .replace(/<\/Note>/g, "\n");

  const lines = cleaned.split("\n");

  return (
    <div className="space-y-4">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        // Headings
        if (trimmed.startsWith("### ")) {
          return (
            <h4 key={idx} className="text-lg font-bold text-[#ffecd0] pt-4">
              {trimmed.replace("### ", "")}
            </h4>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h3 key={idx} className="text-xl font-bold text-white pt-6 border-b border-white/5 pb-2">
              {trimmed.replace("## ", "")}
            </h3>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <h2 key={idx} className="text-2xl font-bold text-white pt-4">
              {trimmed.replace("# ", "")}
            </h2>
          );
        }

        // Blockquotes
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote
              key={idx}
              className="border-l-4 border-[#34532b] bg-[#162214]/60 px-4 py-2.5 rounded-r-lg text-xs text-zinc-300 italic"
            >
              {trimmed.replace("> ", "")}
            </blockquote>
          );
        }

        // List item
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2 text-zinc-300">
              <span className="text-[#ffecd0]">•</span>
              <span>{trimmed.slice(2)}</span>
            </div>
          );
        }

        // Code block indicator
        if (trimmed.startsWith("```")) {
          return null;
        }

        // Table lines
        if (trimmed.startsWith("|")) {
          return (
            <div key={idx} className="font-mono text-xs bg-[#0b0f0a] p-1.5 rounded border border-white/5 text-zinc-400 overflow-x-auto">
              {trimmed}
            </div>
          );
        }

        return (
          <p key={idx} className="text-sm leading-relaxed text-zinc-300">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

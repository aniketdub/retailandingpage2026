"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogMarkdownRendererProps {
  content: string;
}

export default function BlogMarkdownRenderer({ content }: BlogMarkdownRendererProps) {
  return (
    <div className="clinical-article-prose text-zinc-300 leading-relaxed text-base sm:text-lg space-y-6">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const headingText = String(children);
            const id = headingText
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
            return (
              <h2
                id={id}
                className="scroll-mt-28 text-2xl sm:text-3xl font-bold text-white tracking-tight mt-12 mb-4 pt-4 border-t border-white/10"
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const headingText = String(children);
            const id = headingText
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
            return (
              <h3
                id={id}
                className="scroll-mt-28 text-lg sm:text-xl font-bold text-[#ffecd0] tracking-tight mt-8 mb-3"
              >
                {children}
              </h3>
            );
          },
          p: ({ children }) => (
            <p className="leading-relaxed text-zinc-300 mb-5">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 space-y-2.5 my-4 text-zinc-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 space-y-2.5 my-4 text-zinc-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 p-5 rounded-2xl bg-[#141e12] border-l-4 border-[#ffecd0] text-zinc-200 italic shadow-lg">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-8 rounded-2xl border border-white/10 bg-[#0d140b] shadow-xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#172315] border-b border-white/10 text-[#ffecd0]">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="p-3.5 sm:p-4 font-semibold">{children}</th>
          ),
          td: ({ children }) => (
            <td className="p-3.5 sm:p-4 border-b border-white/5 text-zinc-300">
              {children}
            </td>
          ),
          code: ({ children }) => (
            <code className="font-mono text-xs sm:text-sm text-[#ffecd0] bg-[#1a2618] px-1.5 py-0.5 rounded border border-[#ffecd0]/20">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="my-6 p-5 rounded-2xl bg-[#090e08] border border-white/10 font-mono text-xs sm:text-sm text-zinc-200 overflow-x-auto">
              {children}
            </pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

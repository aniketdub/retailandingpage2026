"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/home" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blogs", href: "/blogs" },
  { name: "Help", href: "/help" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#141d13]/80 backdrop-blur-xl border border-[#ffecd0]/15 shadow-2xl shadow-black/40"
            : "bg-[#162214]/60 backdrop-blur-lg border border-[#ffecd0]/10"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/home" className="flex items-center gap-2 group">
          <Image
            src="/retai_logo.png"
            alt="RetAI Logo"
            width={120}
            height={34}
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#0f170e]/60 p-1.5 rounded-full border border-[#ffecd0]/5">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || (link.href === "/home" && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#ffecd0] bg-[#34532b] shadow-sm font-semibold"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-zinc-300 hover:text-[#ffecd0] px-4 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-1 text-sm font-semibold text-[#0d120c] bg-[#ffecd0] hover:bg-white px-4 py-2 rounded-full transition-all shadow-md hover:shadow-[#ffecd0]/20"
          >
            <span>Book a Demo</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-1"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 rounded-2xl bg-[#141d13]/95 backdrop-blur-2xl border border-[#ffecd0]/15 p-6 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-medium py-2 px-3 rounded-lg ${
                pathname === link.href ? "text-[#ffecd0] bg-[#34532b]" : "text-zinc-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-white/10 my-1" />
          <div className="flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-center py-2.5 text-sm font-medium text-zinc-300 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-center py-2.5 text-sm font-bold text-[#0d120c] bg-[#ffecd0] rounded-full"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

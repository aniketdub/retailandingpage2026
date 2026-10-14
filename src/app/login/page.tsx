"use client";

import Link from "next/link";
import Image from "next/image";
import { Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl glass-card p-8 border border-white/10 space-y-6">
        <div className="text-center space-y-2">
          <Image
            src="/retai_logo.png"
            alt="RetAI"
            width={110}
            height={32}
            className="h-8 w-auto mx-auto object-contain mb-4"
          />
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Clinic Staff & Doctor Portal
          </h1>
          <p className="text-xs text-zinc-400">
            Secure access to RetAI PRM, calendar, and billing records.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("This is the demo landing interface. Login connects directly to your clinic instance.");
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
              Work Email / Clinic ID
            </label>
            <input
              type="email"
              required
              placeholder="doctor@clinic.com"
              className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Password
              </label>
              <a href="#" className="text-xs text-[#ffecd0] hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              className="w-full rounded-xl bg-[#0b0f0a] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffecd0] transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-full bg-[#ffecd0] text-[#0d120c] font-bold text-sm hover:bg-white transition"
          >
            <Lock className="w-4 h-4" />
            <span>Sign In to RetAI</span>
          </button>
        </form>

        <div className="text-center text-xs text-zinc-400 pt-4 border-t border-white/10">
          <span>Not a RetAI practice yet? </span>
          <Link href="/contact" className="text-[#ffecd0] font-semibold hover:underline">
            Request clinic access
          </Link>
        </div>
      </div>
    </div>
  );
}

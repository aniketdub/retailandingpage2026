import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#ffecd0]/10 bg-[#0a0e09] mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">
        {/* Brand info */}
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/retai_logo.png"
              alt="RetAI"
              width={36}
              height={36}
              className="h-8 w-8 object-contain rounded-lg"
            />
            <span className="font-['Lexend_Peta',sans-serif] text-xl font-bold tracking-tight text-white">
              Ret<span className="text-[#ffecd0]">AI</span>
            </span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The next-generation AI Patient Relationship Management (PRM) system built exclusively for dermatology, skin, and aesthetic practices.
          </p>
          <div className="text-xs text-zinc-500">
            © 2026 RetAI. All rights reserved.
          </div>
        </div>

        {/* Navigation Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div className="space-y-3">
            <h4 className="font-semibold text-[#ffecd0] tracking-wider uppercase text-xs">
              Platform
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/home" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing & Features</Link></li>
              <li><Link href="/help" className="hover:text-white transition">Documentation</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition">Clinical Insights</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-[#ffecd0] tracking-wider uppercase text-xs">
              PRM Modules
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><span className="hover:text-white">Aisha on WhatsApp</span></li>
              <li><span className="hover:text-white">AI Voice Receptionist</span></li>
              <li><span className="hover:text-white">At-Risk Patient Engine</span></li>
              <li><span className="hover:text-white">Treatment Packages</span></li>
              <li><span className="hover:text-white">GST Invoicing</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-[#ffecd0] tracking-wider uppercase text-xs">
              Connect
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/contact" className="hover:text-white transition">Book a Clinic Demo</Link></li>
              <li><Link href="/login" className="hover:text-white transition">Clinic Staff Portal</Link></li>
              <li><a href="mailto:support@retai.in" className="hover:text-white transition">support@retai.in</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

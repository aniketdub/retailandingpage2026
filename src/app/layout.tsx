import type { Metadata } from "next";
import { Lexend_Peta, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lexendPeta = Lexend_Peta({
  variable: "--font-lexend-peta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RetAI — AI Patient Relationship Management (PRM) for Modern Clinics",
  description:
    "The all-in-one AI operating system for dermatology, skin, and aesthetic clinics. AI voice receptionists, WhatsApp lead conversion, and smart patient retention.",
  icons: {
    icon: "/favicon_retai.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexendPeta.variable} ${plusJakarta.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-[#0d120c] text-[#f4f6f0] antialiased">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

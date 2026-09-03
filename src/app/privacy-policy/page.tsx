import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Heaven Furniture Mart",
  description:
    "Learn how Heaven Furniture Mart collects, uses, and protects your personal information and interior design specifications.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2B1E16] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#8C6239] uppercase tracking-wider mb-8">
          <Link href="/" className="hover:text-[#132026] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#132026] font-medium">Privacy Policy</span>
        </nav>

        {/* Page Header */}
        <div className="border-b border-[#2B1E16]/10 pb-8 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C6239] font-medium block mb-2">
            Legal & Data Protection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#132026] leading-tight mb-4">
            Privacy <span className="text-[#8C6239]">Policy</span>
          </h1>
          <p className="text-sm sm:text-base text-[#2B1E16]/75 max-w-2xl leading-relaxed">
            Last Updated: September 2026. Heaven Furniture Mart is committed to safeguarding the privacy and confidentiality of our clients, homeowners, and trade partners across Bangladesh.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-10 text-sm sm:text-[15px] text-[#2B1E16]/80 leading-relaxed">
          
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              1. Information We Collect
            </h2>
            <p>
              When you visit our flagship showroom on Agrabad Access Road, request a custom furniture quote, or schedule an in-home measurement, we may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Full Name, phone number, and email address</li>
              <li>Delivery and residential installation address in Chattogram or nationwide</li>
              <li>Room dimensions, architectural floorplans, and interior design blueprints</li>
              <li>Wood preferences (solid teak, mahogany, gamari) and fabric/leather selections</li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              2. How We Use Your Information
            </h2>
            <p>
              The information we gather is used strictly for crafting, tailoring, and delivering your bespoke luxury furniture:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Generating accurate quotations and 3D room visualization renderings</li>
              <li>Scheduling in-person carpenter measurements and site audits</li>
              <li>Coordinating our white-glove delivery, assembly, and room placement teams</li>
              <li>Communicating milestone updates during your furniture’s seasoning and joinery phase</li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              3. WhatsApp & Direct Communication
            </h2>
            <p>
              When you initiate contact with our senior styling team via WhatsApp, phone call, or consultation form, your chat history and reference photos remain private between you and our authorized design specialists. We never sell, rent, or trade your contact information to third-party marketing agencies.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              4. Data Security & Confidentiality
            </h2>
            <p>
              We implement industry-standard physical, electronic, and procedural safeguards to protect client records and proprietary custom designs. Architectural blueprints and room photographs shared with us for custom joinery are treated with strict confidentiality.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to review, update, or remove your contact information from our studio records, please reach out to us:
            </p>
            <div className="pt-2 text-[#132026] font-medium space-y-1">
              <p>Heaven Furniture Mart</p>
              <p className="font-normal text-[#2B1E16]/75">Agrabad Access Road (opposite RAK Ceramics), Chattogram, Bangladesh</p>
              <p className="font-normal text-[#2B1E16]/75">Phone: +880 1960-481983</p>
            </div>
          </section>

        </div>

        {/* Back to Home CTA */}
        <div className="pt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C5A25D] text-[#132026] text-xs uppercase tracking-wider font-medium hover:bg-[#b08d47] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}

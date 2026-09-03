import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Showroom Guidelines | Heaven Furniture Mart",
  description:
    "Visiting hours, consultation process, parking, and etiquette for our flagship showroom on Agrabad Access Road, Chattogram.",
};

export default function ShowroomGuidelinesPage() {
  const googleMapsUrl = "https://maps.app.goo.gl/xxGh9jYiQ2PKpQR99";

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
          <span className="text-[#132026] font-medium">Showroom Guidelines</span>
        </nav>

        {/* Page Header */}
        <div className="border-b border-[#2B1E16]/10 pb-8 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C6239] font-medium block mb-2">
            Flagship Visitor Information
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#132026] leading-tight mb-4">
            Showroom <span className="text-[#8C6239]">Guidelines</span>
          </h1>
          <p className="text-sm sm:text-base text-[#2B1E16]/75 max-w-2xl leading-relaxed">
            Welcome to the Heaven Furniture Mart flagship physical studio. Here is everything you need to know to ensure a seamless, inspiring, and comfortable visit.
          </p>
        </div>

        {/* Highlights Banner Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-lg bg-white border border-[#2B1E16]/10">
            <span className="text-xs uppercase tracking-wider text-[#8C6239] font-medium block mb-1">
              Location
            </span>
            <p className="text-sm text-[#132026] font-medium leading-snug">
              Agrabad Access Road (opposite RAK Ceramics)
            </p>
            <p className="text-xs text-[#2B1E16]/70 mt-1">Chattogram, Bangladesh</p>
          </div>

          <div className="p-5 rounded-lg bg-white border border-[#2B1E16]/10">
            <span className="text-xs uppercase tracking-wider text-[#8C6239] font-medium block mb-1">
              Visiting Hours
            </span>
            <p className="text-sm text-[#132026] font-medium">
              Sat – Thu: 10:00 AM – 9:30 PM
            </p>
            <p className="text-xs text-[#2B1E16]/70 mt-1">Friday: 3:00 PM – 9:30 PM</p>
          </div>

          <div className="p-5 rounded-lg bg-white border border-[#2B1E16]/10 flex flex-col justify-between">
            <span className="text-xs uppercase tracking-wider text-[#8C6239] font-medium block mb-1">
              Navigation
            </span>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#8C6239] hover:text-[#C5A25D] font-medium"
            >
              <span>Open in Google Maps →</span>
            </a>
          </div>
        </div>

        {/* Guidelines Content Sections */}
        <div className="space-y-10 text-sm sm:text-[15px] text-[#2B1E16]/80 leading-relaxed">
          
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              1. Walk-ins & Scheduled Design Appointments
            </h2>
            <p>
              Walk-ins are always warmly welcome during normal operating hours. However, if you are planning a comprehensive home interior makeover or wish to review architectural blueprints with our Senior Interior Stylist, we recommend scheduling an appointment in advance to reserve dedicated 3D room rendering time.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              2. Tactile Material Inspection & Comfort Testing
            </h2>
            <p>
              We encourage you to experience our craftsmanship firsthand:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Test seating firmness, ergonomic lumbar support, and sofa depths in our living room mock-ups.</li>
              <li>Inspect wood grain finishes, joinery mortises, and natural lacquer swatches in our materials library.</li>
              <li>Browse through over 150+ imported velvet, genuine leather, and high-performance stain-resistant fabric swatches.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              3. Bringing Floorplans & Reference Photos
            </h2>
            <p>
              To get the most value from your visit, we suggest bringing:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Rough room measurements or architectural floorplans (length, width, ceiling height).</li>
              <li>Photos or videos of the intended room showing door placements, windows, and electrical outlets.</li>
              <li>Inspiration moodboards or design styles you admire (modern luxury, neoclassical, minimalist, or royal heritage).</li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              4. Parking & Accessibility
            </h2>
            <p>
              Dedicated client parking is available directly in front of the showroom on Agrabad Access Road. Our facility features wide ground-floor access accommodating strollers and wheelchairs comfortably.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              5. Direct Contact Before Your Visit
            </h2>
            <p>
              Have a question before you head out? Connect with our showroom team directly via WhatsApp at <a href="https://wa.me/8801960481983" target="_blank" rel="noopener noreferrer" className="text-[#8C6239] font-medium hover:underline">+880 1960-481983</a> anytime.
            </p>
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

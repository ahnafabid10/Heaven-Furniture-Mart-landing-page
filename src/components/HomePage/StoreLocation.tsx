"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function StoreLocation() {
  const googleMapsUrl = "https://maps.app.goo.gl/xxGh9jYiQ2PKpQR99";

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-[#2B1E16]/10" id="showroom">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#132026] leading-tight">
            Visit Our <span className="text-[#8C6239]">Agrabad Showroom</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2B1E16]/75 max-w-2xl mx-auto leading-relaxed">
            Experience our master-crafted furniture in person. Walk through our curated bedroom, living, and dining displays, inspect seasoned timber joinery, and consult with our senior interior designers.
          </p>
        </div>

        {/* 2-Column Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: Real Showroom Image */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full rounded-lg overflow-hidden border border-[#2B1E16]/15 bg-neutral-900 group">
            <Image
              src="/store location.jpg"
              alt="Heaven Furniture Mart Flagship Showroom on Agrabad Access Road, Chattogram"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#132026]/90 via-[#132026]/30 to-transparent pointer-events-none" />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-lg bg-[#132026]/90 border border-white/15 backdrop-blur-md">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#C5A25D]">
                  Physical Flagship Store
                </span>
                <h3 className="font-serif text-base sm:text-lg text-white">
                  Heaven Furniture Mart
                </h3>
                <p className="text-xs text-[#FAF8F5]/80">
                  Agrabad Access Road (Opposite RAK Ceramics), Chattogram
                </p>
              </div>

              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C5A25D] hover:bg-[#b8944f] text-[#132026] text-xs uppercase tracking-wider transition-colors shrink-0"
              >
                <span>View on Map</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Store Details & Visitor Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-7 sm:p-9 rounded-lg bg-[#132026] text-white border border-[#132026]">
            
            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="border-b border-white/10 pb-5">
                <span className="text-[11px] uppercase tracking-widest text-[#C5A25D]">
                  Plan Your Visit
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                  Showroom & Design Studio
                </h3>
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-[#C5A25D] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-wider text-[#C5A25D]">
                    Address & Location
                  </h4>
                  <p className="text-sm text-[#FAF8F5]/85 leading-relaxed">
                    Agrabad Access Road (Opposite RAK Ceramics), Chattogram, Bangladesh
                  </p>
                  <p className="text-xs text-[#FAF8F5]/60">
                    Prime commercial access with convenient on-site parking.
                  </p>
                </div>
              </div>

              {/* Visiting Hours Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-[#C5A25D] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-wider text-[#C5A25D]">
                    Showroom Hours
                  </h4>
                  <div className="text-sm text-[#FAF8F5]/85 space-y-0.5">
                    <p>Saturday – Thursday: 10:00 AM – 9:30 PM</p>
                    <p>Friday: 3:00 PM – 9:30 PM</p>
                  </div>
                  <p className="text-xs text-[#FAF8F5]/60">
                    Walk-ins welcome every day of the week.
                  </p>
                </div>
              </div>

              {/* Contact / Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-[#C5A25D] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-wider text-[#C5A25D]">
                    Direct Hotline
                  </h4>
                  <a
                    href="tel:+8801960481983"
                    className="text-sm text-white hover:text-[#C5A25D] transition-colors block"
                  >
                    +880 1960-481983
                  </a>
                  <p className="text-xs text-[#FAF8F5]/60">
                    Direct line to Senior Stylist & Showroom Manager
                  </p>
                </div>
              </div>

              {/* In-Store Amenities Pill List */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/80 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <svg className="w-3.5 h-3.5 text-[#C5A25D] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>100+ Live Furniture Sets</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/80 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <svg className="w-3.5 h-3.5 text-[#C5A25D] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Timber & Fabric Swatches</span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3.5">
              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#C5A25D] hover:bg-[#b8944f] text-[#132026] text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 select-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Get Google Maps Directions</span>
              </Link>

              <Link
                href="tel:+8801960481983"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-white/30 hover:border-[#C5A25D] text-white hover:text-[#C5A25D] text-xs uppercase tracking-wider transition-colors select-none"
              >
                <span>Call Showroom</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default StoreLocation;

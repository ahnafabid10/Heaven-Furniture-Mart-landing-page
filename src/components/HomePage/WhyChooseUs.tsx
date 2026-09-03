"use client";

import React from "react";
import Link from "next/link";

export function WhyChooseUs() {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#2B1E16]/10" id="why-choose-us">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Headline (2 balanced lines) */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#132026] tracking-tight leading-[1.18] mb-10 sm:mb-12">
          Why <span className="text-[#8C6239]">Heaven Furniture Mart</span> <br className="hidden sm:inline" />
          is The Right Choice for You
        </h2>

        {/* Bento Grid: 2-column top + 1 wide bottom on left, 1 tall featured card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* LEFT SIDE (8 Columns): Top 2 cards + Bottom 1 wide card */}
          <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6">
            
            {/* Top Row: 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
              
              {/* Card 1: Skilled In-House Craftsmanship */}
              <div className="rounded-lg p-7 sm:p-8 bg-[#F3F4F6]/75 border border-[#2B1E16]/10 hover:border-[#C5A25D]/50 hover:bg-white transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-lg border border-[#2B1E16]/20 bg-white flex items-center justify-center text-[#132026] mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      {/* Craftsmen / Team Icon */}
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#132026] mb-3 leading-snug">
                    Master In-House Craftsmen
                  </h3>

                  <p className="text-sm sm:text-[14.5px] text-[#2B1E16]/75 leading-relaxed">
                    Learn the difference of true bespoke artistry. Crafted by top industry artisans who bring decades of real-world woodworking mastery, ensuring solid seasoned timber, hand-carved details, and heirloom durability.
                  </p>
                </div>
              </div>

              {/* Card 2: Agrabad Flagship Showroom */}
              <div className="rounded-lg p-7 sm:p-8 bg-[#F3F4F6]/75 border border-[#2B1E16]/10 hover:border-[#C5A25D]/50 hover:bg-white transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-lg border border-[#2B1E16]/20 bg-white flex items-center justify-center text-[#132026] mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      {/* Showroom / Building / Rocket Icon */}
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#132026] mb-3 leading-snug">
                    Agrabad Flagship Showroom
                  </h3>

                  <p className="text-sm sm:text-[14.5px] text-[#2B1E16]/75 leading-relaxed">
                    Experience luxury before ordering. Visit our physical studio opposite RAK Ceramics on Agrabad Access Road in Chattogram to inspect raw finishes, test sofa seating comfort, and consult our designers.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Row: 1 Wide Card across 2 columns */}
            <div className="rounded-lg p-7 sm:p-8 bg-[#F3F4F6]/75 border border-[#2B1E16]/10 hover:border-[#C5A25D]/50 hover:bg-white transition-all duration-300">
              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-lg border border-[#2B1E16]/20 bg-white flex items-center justify-center text-[#132026] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    {/* Checkmark Target / Delivery Icon */}
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#132026] mb-3 leading-snug">
                  White-Glove Delivery & Installation
                </h3>

                <p className="text-sm sm:text-[14.5px] text-[#2B1E16]/75 leading-relaxed max-w-4xl">
                  Heaven Furniture Mart offers complete end-to-end service from precision room measurements and 3D concept sketching to hassle-free delivery and white-glove assembly in your home. Trusted by hundreds of happy homeowners across Chattogram, supported by transparent pricing and flexible payment options.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (4 Columns): Redesigned Featured Consultation Card */}
          <div className="lg:col-span-4 rounded-lg p-8 sm:p-9 bg-gradient-to-b from-white to-[#F8F5EE] text-[#132026] flex flex-col justify-between relative overflow-hidden border-2 border-[#C5A25D]/40">
            
            {/* Subtle decorative background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A25D]/10 rounded-lg blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg border border-[#C5A25D]/30 bg-[#C5A25D]/10 flex items-center justify-center text-[#8C6239]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>

                <span className="text-[11px] uppercase tracking-widest text-[#8C6239] px-3 py-1 rounded-lg bg-[#C5A25D]/15 border border-[#C5A25D]/30">
                  Complimentary
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-[26px] text-[#132026] mb-2 leading-snug">
                  Free Design Consultation
                </h3>
                <p className="text-sm text-[#2B1E16]/75 leading-relaxed">
                  Every bespoke piece is designed around what you envision—tailored to your room dimensions, preferred timber, and individual lifestyle.
                </p>
              </div>

              {/* Consultation Inclusions List */}
              <div className="space-y-3 pt-2 border-t border-[#2B1E16]/10">
                <div className="flex items-start gap-3 text-xs sm:text-[13px] text-[#2B1E16]/85">
                  <svg className="w-4 h-4 text-[#8C6239] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>1-on-1 space planning & 3D room concepts</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-[13px] text-[#2B1E16]/85">
                  <svg className="w-4 h-4 text-[#8C6239] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Seasoned teak, marble & fabric selection</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-[13px] text-[#2B1E16]/85">
                  <svg className="w-4 h-4 text-[#8C6239] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Transparent itemized quote with zero obligation</span>
                </div>
              </div>

            </div>

            {/* Bottom CTA Button */}
            <div className="relative z-10 pt-8 mt-auto">
              <Link
                href="https://wa.me/8801960481983"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#C5A25D] hover:bg-[#b8944f] text-[#132026] text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 select-none"
              >
                <span>Book Free Consultation</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;


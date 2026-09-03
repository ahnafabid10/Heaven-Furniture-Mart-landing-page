"use client";

import React from "react";
import Link from "next/link";

export function WhyChooseUs() {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#2B1E16]/10" id="why-choose-us">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Eyebrow Pill Tag */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-lg border border-[#2B1E16]/20 bg-white/60 mb-4">
          <span className="text-xs uppercase tracking-[0.18em] text-[#2B1E16]/75">
            WHY CHOOSE US
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#132026] tracking-tight leading-[1.18] mb-10 sm:mb-12">
          Why <span className="text-[#8C6239]">Heaven Furniture Mart</span> is The Right Choice for You
        </h2>

        {/* Bento Grid: 2-column top + 1 wide bottom on left, 1 tall featured dark card on right */}
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

          {/* RIGHT SIDE (4 Columns): Tall Featured Dark Blue / Charcoal-Teal Card with CTA */}
          <div className="lg:col-span-4 rounded-lg p-8 sm:p-9 bg-[#132026] text-white flex flex-col justify-between relative overflow-hidden border border-[#132026]">
            
            {/* Subtle luxury glow background */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#C5A25D]/15 rounded-lg blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Circular Icon */}
              <div className="w-12 h-12 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-[#C5A25D] mb-7">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  {/* Book / Layout / Consultation icon */}
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-[28px] text-white mb-4 leading-snug">
                Free Design Consultation
              </h3>

              {/* Description from COMPANY_BRIEF.md */}
              <div className="space-y-4 text-sm sm:text-[14.5px] text-[#FAF8F5]/80 font-light leading-relaxed">
                <p>
                  At Heaven Furniture Mart, we understand the importance of tailoring furniture around your lifestyle and space. That&apos;s why our bespoke design services are built around what you envision, not pulled off a shelf.
                </p>
                <p>
                  Whether you&apos;re furnishing a single royal living suite or styling an entire luxury home, you can customize your dimensions, wood, and fabrics to fit your exact needs.
                </p>
              </div>
            </div>

            {/* Bottom CTA Button - matching reference green pill button */}
            <div className="relative z-10 pt-8 mt-auto">
              <Link
                href="https://chat.whatsapp.com/FTk1VXPtsG8J3yJSiTHmZy?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20be5b] text-[#132026] text-sm tracking-wide transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Book Free Consultation</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;


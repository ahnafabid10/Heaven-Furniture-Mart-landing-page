"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface BannerProps {
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function Banner({
  headline = "Furniture, Crafted Around You.",
  subheadline = "At Heaven Furniture Mart, we don't build off the shelf. From hand-carved royal suites to contemporary modular living, every piece is sculpted to your space, aesthetic, and lifestyle.",
  primaryCtaText = "Book Free Design Consultation",
  primaryCtaHref = "https://chat.whatsapp.com/FTk1VXPtsG8J3yJSiTHmZy?mode=gi_t",
  secondaryCtaText = "Explore Showroom Works",
  secondaryCtaHref = "#collections",
}: BannerProps) {
  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#132026]">
      {/* Background Image: 2.jpg */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/2.jpg"
          alt="Heaven Furniture Mart Luxury Bespoke Hand-carved Bed Suite"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center lg:object-[center_35%] scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Halka ektu darkish overlay with brand color (Deep Charcoal-Teal #132026) */}
        {/* Left side is darker for high text contrast, right side lets the turquoise velvet & gold carved bed shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#132026]/95 via-[#132026]/80 to-[#132026]/40 sm:to-[#132026]/30" />
        {/* Subtle top & bottom vignette for seamless transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#132026]/90 via-transparent to-[#132026]/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-7 text-left">
          
          {/* Strong Headline in Serif */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] xl:text-[64px] text-[#FAF8F5] leading-[1.12] tracking-tight">
            {headline}
          </h1>

          {/* Subtitle / Brand Promise */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#FAF8F5]/85 font-normal leading-relaxed max-w-2xl">
            {subheadline}
          </p>

          {/* Brand Motto Callout */}
          <div className="flex items-center gap-3 pt-1">
            <span className="h-px w-10 bg-[#C5A25D]" />
            <span className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#C5A25D]">
              Designed · Crafted · Customized
            </span>
          </div>

          {/* CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-5">
            {/* Primary CTA with Muted Gold (#C5A25D) */}
            <Link
              href={primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-[#C5A25D] text-[#132026] text-sm sm:text-[15px] tracking-wide hover:bg-[#d6b572] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{primaryCtaText}</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {/* Secondary CTA */}
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg border border-[#FAF8F5]/35 hover:border-[#C5A25D] text-[#FAF8F5] hover:text-[#C5A25D] text-sm sm:text-[15px] font-medium tracking-wide bg-[#132026]/40 hover:bg-[#132026]/70 backdrop-blur-sm transition-all duration-200"
            >
              <span>{secondaryCtaText}</span>
              <span>↓</span>
            </Link>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-8 sm:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#FAF8F5]/15">
            <div className="space-y-1">
              <div className="text-[#C5A25D] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span>✦</span> Free Consultation
              </div>
              <p className="text-xs text-[#FAF8F5]/70">One-on-one interior planning</p>
            </div>

            <div className="space-y-1">
              <div className="text-[#C5A25D] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span>✦</span> 100% Solid Wood
              </div>
              <p className="text-xs text-[#FAF8F5]/70">Premium teak & seasoned timber</p>
            </div>

            <div className="space-y-1">
              <div className="text-[#C5A25D] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span>✦</span> Agrabad Showroom
              </div>
              <p className="text-xs text-[#FAF8F5]/70">Opposite RAK Ceramics</p>
            </div>

            <div className="space-y-1">
              <div className="text-[#C5A25D] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span>✦</span> Direct Delivery
              </div>
              <p className="text-xs text-[#FAF8F5]/70">Installation included</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;


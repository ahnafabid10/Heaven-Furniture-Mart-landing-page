"use client";

import React from "react";

export function FounderQuote() {
  return (
    <section className="w-full bg-[#111A1F] py-24 sm:py-28 lg:py-36 relative overflow-hidden border-b border-[#2B1E16]/20">
      {/* Dark atmospheric backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1216] via-[#111A1F] to-[#0D1519] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C5A25D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Top Gold Quotation Mark */}
        <div className="text-3xl sm:text-4xl text-[#C5A25D] font-serif font-black mb-6 select-none opacity-85">
          ❝
        </div>

        {/* The Quote */}
        <blockquote className="font-serif text-xl sm:text-2xl lg:text-[27px] italic text-[#FAF8F5] leading-relaxed max-w-4xl mx-auto tracking-wide font-light">
          &ldquo;At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.&rdquo;
        </blockquote>

        {/* Gold Divider Line */}
        <div className="w-12 h-0.5 bg-[#C5A25D] mx-auto my-7 rounded-full opacity-80" />

        {/* Author Attribution */}
        <div className="space-y-1">
          <h3 className="font-bold text-white text-base sm:text-lg tracking-wide">
            Abul Kalam Bhuiyan
          </h3>
          <p className="text-xs sm:text-[13px] text-[#C5A25D] tracking-widest uppercase font-medium">
            Managing Director
          </p>
        </div>

      </div>
    </section>
  );
}

export default FounderQuote;

"use client";

import React from "react";

export function FounderQuote() {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-[#2B1E16]/10">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Top Gold Quotation Mark Icon */}
        <div className="flex justify-center mb-6">
          <svg className="w-8 h-8 text-[#C5A25D] opacity-85" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* The Quote */}
        <blockquote className="font-serif text-xl sm:text-2xl lg:text-[27px] italic text-[#132026] leading-relaxed max-w-4xl mx-auto tracking-wide font-light">
          &ldquo;At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.&rdquo;
        </blockquote>

        {/* Gold Divider Line */}
        <div className="w-12 h-0.5 bg-[#C5A25D] mx-auto my-7 rounded-lg opacity-80" />

        {/* Author Attribution */}
        <div className="space-y-1">
          <h3 className="text-[#132026] text-base sm:text-lg tracking-wide">
            Abul Kalam Bhuiyan
          </h3>
          <p className="text-xs sm:text-[13px] text-[#8C6239] tracking-widest uppercase font-medium">
            Managing Director
          </p>
        </div>

      </div>
    </section>
  );
}

export default FounderQuote;


"use client";

import React from "react";
import Link from "next/link";

export function RequestQuote() {
  return (
    <section className="w-full bg-[#FAF8F5] py-24 sm:py-28 lg:py-36 border-t border-[#2B1E16]/10 relative overflow-hidden" id="quote">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Serif Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#132026] tracking-tight leading-[1.18] mb-4">
          Request a <span className="text-[#8C6239]">Quote</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#2B1E16]/75 max-w-xl mx-auto leading-relaxed mb-9 font-normal">
          Tell us what you&apos;re looking for and we&apos;ll bring it to life. Custom designs, premium materials, delivered and installed.
        </p>

        {/* WhatsApp Button */}
        <div>
          <Link
            href="https://chat.whatsapp.com/FTk1VXPtsG8J3yJSiTHmZy?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-lg bg-[#9E7748] hover:bg-[#8B673A] text-white text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-200 hover:-translate-y-0.5 select-none"
          >
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.27 16.6L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C16.58 3.67 20.28 7.37 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.08 13.66 14.85 13.57C14.62 13.49 14.45 13.45 14.28 13.7C14.11 13.95 13.63 14.52 13.48 14.69C13.33 14.86 13.19 14.88 12.94 14.75C12.69 14.63 11.88 14.36 10.93 13.51C10.19 12.85 9.69 12.03 9.54 11.78C9.39 11.53 9.53 11.4 9.65 11.27C9.77 11.16 9.91 10.98 10.03 10.83C10.16 10.68 10.2 10.58 10.29 10.41C10.37 10.24 10.33 10.1 10.27 9.97C10.2 9.85 9.7 8.62 9.49 8.12C9.29 7.63 9.08 7.7 8.93 7.69L8.45 7.68C8.28 7.68 8.01 7.74 7.78 7.99C7.55 8.24 6.9 8.85 6.9 10.08C6.9 11.31 7.8 12.49 7.92 12.66C8.05 12.83 9.68 15.34 12.18 16.42C12.77 16.68 13.24 16.83 13.6 16.95C14.2 17.14 14.74 17.11 15.17 17.05C15.65 16.98 16.65 16.45 16.85 15.86C17.06 15.28 17.06 14.78 17 14.69C16.94 14.59 16.81 14.52 16.56 14.39Z" />
            </svg>
            <span>WHATSAPP US</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default RequestQuote;


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[#0D1519] text-[#FAF8F5] relative overflow-hidden border-t border-white/10" id="contact">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#C5A25D]/5 rounded-lg blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 pb-12 relative z-10">

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Info & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#C5A25D]/40 shrink-0 bg-[#385250]">
                <Image
                  src="/logo.jpg"
                  alt="Heaven Furniture Mart Logo"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-white leading-snug">
                  HEAVEN FURNITURE MART
                </h3>
              </div>
            </Link>

            <p className="text-sm text-[#FAF8F5]/70 font-light leading-relaxed max-w-sm">
              Chattogram’s premier bespoke luxury furniture studio. Every piece is handcrafted to client dimensions from seasoned natural timber and delivered with white-glove care.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/heavenfurnituremart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/[0.08] border border-white/15 backdrop-blur-md hover:border-[#C5A25D] text-white hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.71-.14-2.73 0-4.79 1.66-4.79 4.8v2.7H7v4h3V22h4v-8.5z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/heaven_furniture_ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/[0.08] border border-white/15 backdrop-blur-md hover:border-[#C5A25D] text-white hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@HeavenFurnitureMart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-white/[0.08] border border-white/15 backdrop-blur-md hover:border-[#C5A25D] text-white hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/8801960481983"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-lg bg-white/[0.08] border border-white/15 backdrop-blur-md hover:border-[#C5A25D] text-white hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.27 16.6L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C16.58 3.67 20.28 7.37 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.08 13.66 14.85 13.57C14.62 13.49 14.45 13.45 14.28 13.7C14.11 13.95 13.63 14.52 13.48 14.69C13.33 14.86 13.19 14.88 12.94 14.75C12.69 14.63 11.88 14.36 10.93 13.51C10.19 12.85 9.69 12.03 9.54 11.78C9.39 11.53 9.53 11.4 9.65 11.27C9.77 11.16 9.91 10.98 10.03 10.83C10.16 10.68 10.2 10.58 10.29 10.41C10.37 10.24 10.33 10.1 10.27 9.97C10.2 9.85 9.7 8.62 9.49 8.12C9.29 7.63 9.08 7.7 8.93 7.69L8.45 7.68C8.28 7.68 8.01 7.74 7.78 7.99C7.55 8.24 6.9 8.85 6.9 10.08C6.9 11.31 7.8 12.49 7.92 12.66C8.05 12.83 9.68 15.34 12.18 16.42C12.77 16.68 13.24 16.83 13.6 16.95C14.2 17.14 14.74 17.11 15.17 17.05C15.65 16.98 16.65 16.45 16.85 15.86C17.06 15.28 17.06 14.78 17 14.69C16.94 14.59 16.81 14.52 16.56 14.39Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Collections (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#C5A25D]">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#FAF8F5]/70">
              <li>
                <Link href="/#collections" className="hover:text-white transition-colors">Living Room</Link>
              </li>
              <li>
                <Link href="/#collections" className="hover:text-white transition-colors">Bedroom Suites</Link>
              </li>
              <li>
                <Link href="/#collections" className="hover:text-white transition-colors">Dining & Entertaining</Link>
              </li>
              <li>
                <Link href="/#collections" className="hover:text-white transition-colors">Office & Study</Link>
              </li>
              <li>
                <Link href="/#collections" className="hover:text-white transition-colors">Accent & Recliners</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">Custom Woodwork</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Services & Brand (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#C5A25D]">
              Client Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#FAF8F5]/70">
              <li>
                <Link href="https://wa.me/8801960481983" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Free Design Consultation</Link>
              </li>
              <li>
                <Link href="https://wa.me/8801960481983" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Request a Quote</Link>
              </li>
              <li>
                <Link href="/#milestones" className="hover:text-white transition-colors">Proof & Milestones</Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-white transition-colors">Client Reviews</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">Our Story & Heritage</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Flagship Showroom & Hours (3.5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#C5A25D]">
              Flagship Showroom
            </h4>
            
            <div className="space-y-4 text-xs sm:text-[13px] text-[#FAF8F5]/75">
              <div className="flex items-start gap-3.5">
                <a
                  href="https://maps.app.goo.gl/xxGh9jYiQ2PKpQR99"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open showroom location in Google Maps"
                  className="w-9 h-9 rounded-lg bg-white/[0.08] border border-white/15 backdrop-blur-md flex items-center justify-center text-[#C5A25D] hover:text-white hover:border-[#C5A25D] shrink-0 mt-0.5 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </a>
                <div>
                  <a
                    href="https://maps.app.goo.gl/xxGh9jYiQ2PKpQR99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-white transition-colors block"
                  >
                    Agrabad Access Road (opposite RAK Ceramics), Chattogram, Bangladesh
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <a
                  href="https://wa.me/8801960481983"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp chat with +880 1960-481983"
                  className="w-9 h-9 rounded-lg bg-white/[0.08] border border-white/15 backdrop-blur-md flex items-center justify-center text-[#C5A25D] hover:text-white hover:border-[#C5A25D] shrink-0 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.27 16.6L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C16.58 3.67 20.28 7.37 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.08 13.66 14.85 13.57C14.62 13.49 14.45 13.45 14.28 13.7C14.11 13.95 13.63 14.52 13.48 14.69C13.33 14.86 13.19 14.88 12.94 14.75C12.69 14.63 11.88 14.36 10.93 13.51C10.19 12.85 9.69 12.03 9.54 11.78C9.39 11.53 9.53 11.4 9.65 11.27C9.77 11.16 9.91 10.98 10.03 10.83C10.16 10.68 10.2 10.58 10.29 10.41C10.37 10.24 10.33 10.1 10.27 9.97C10.2 9.85 9.7 8.62 9.49 8.12C9.29 7.63 9.08 7.7 8.93 7.69L8.45 7.68C8.28 7.68 8.01 7.74 7.78 7.99C7.55 8.24 6.9 8.85 6.9 10.08C6.9 11.31 7.8 12.49 7.92 12.66C8.05 12.83 9.68 15.34 12.18 16.42C12.77 16.68 13.24 16.83 13.6 16.95C14.2 17.14 14.74 17.11 15.17 17.05C15.65 16.98 16.65 16.45 16.85 15.86C17.06 15.28 17.06 14.78 17 14.69C16.94 14.59 16.81 14.52 16.56 14.39Z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/8801960481983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium transition-colors"
                >
                  +880 1960-481983
                </a>
              </div>

              <div className="flex items-start gap-3.5 pt-1">
                <div className="w-9 h-9 rounded-lg bg-white/[0.08] border border-white/15 backdrop-blur-md flex items-center justify-center text-[#C5A25D] shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="text-xs space-y-0.5">
                  <p className="text-white/90 font-medium">Showroom Visiting Hours:</p>
                  <p>Sat – Thu: 10:00 AM – 9:30 PM</p>
                  <p>Friday: 3:00 PM – 9:30 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <p>
            © {new Date().getFullYear()} Heaven Furniture Mart. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/showroom-guidelines" className="hover:text-white transition-colors">
              Showroom Guidelines
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

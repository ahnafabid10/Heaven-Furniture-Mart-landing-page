"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export interface NavbarProps {
  brandName?: string;
  brandTagline?: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "/#about" },
  { label: "Collections", href: "/#collections", hasDropdown: true },
  { label: "Why Us", href: "/#why-choose-us" },
  { label: "Showroom", href: "/#showroom" },
  { label: "Milestones", href: "/#milestones" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "FAQs", href: "/#faq" },
];

const COLLECTIONS_DROPDOWN = [
  { name: "Royal Living", desc: "Handcrafted chesterfields & sectionals", href: "/#collections" },
  { name: "Master Bedroom", desc: "King beds, tufted suites & wardrobes", href: "/#collections" },
  { name: "Imperial Dining", desc: "Solid teak tables & royal dining chairs", href: "/#collections" },
  { name: "Executive Office", desc: "Hand-carved desks & library joinery", href: "/#collections" },
  { name: "Bespoke Joinery", desc: "Built-to-space architectural woodwork", href: "/#collections" },
  { name: "Accent & Recliner", desc: "Wingback armchairs & chaise lounges", href: "/#collections" },
  { name: "Entryway & Foyer", desc: "Grand console tables & ornate mirrors", href: "/#collections" },
  { name: "Outdoor & Veranda", desc: "Weather-treated teak & leisure sets", href: "/#collections" },
];

export function Navbar({
  brandName = "HEAVEN",
  brandTagline = "FURNITURE MART",
}: NavbarProps) {
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterCollections = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsCollectionsOpen(true);
  };

  const handleMouseLeaveCollections = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsCollectionsOpen(false);
    }, 150);
  };

  return (
    <header className="w-full bg-[#FAF8F5]/95 backdrop-blur-md text-[#2B1E16] border-b border-[#2B1E16]/10 sticky top-0 z-50 font-sans">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* BRAND LOGO (Left) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none rounded-lg py-1 shrink-0"
            aria-label="Heaven Furniture Mart Home"
          >
            {/* Logo Image */}
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-[#C5A25D]/40 shrink-0 bg-[#385250]">
              <Image
                src="/logo.jpg"
                alt="Heaven Furniture Mart Logo"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 36px, 44px"
                priority
              />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col text-left">
              <span className="text-[19px] sm:text-[23px] font-serif tracking-[0.06em] text-[#132026] leading-none select-none">
                {brandName}
              </span>
              <span className="text-[8px] sm:text-[9.5px] tracking-[0.26em] text-[#8C6239] uppercase leading-tight select-none mt-1 font-medium">
                {brandTagline}
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION ITEMS (Center/Right) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13.5px] xl:text-[14px] font-normal text-[#2B1E16]">
            {NAV_ITEMS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative py-2"
                    onMouseEnter={handleMouseEnterCollections}
                    onMouseLeave={handleMouseLeaveCollections}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 hover:text-[#C5A25D] transition-colors"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 text-[#8C6239] transition-transform duration-200 ${
                          isCollectionsOpen ? "rotate-180 text-[#C5A25D]" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Curated 8-Room Collections Dropdown */}
                    {isCollectionsOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[540px] z-50">
                        <div className="bg-[#FAF8F5] border border-[#2B1E16]/15 rounded-lg p-5 grid grid-cols-2 gap-3.5 backdrop-blur-lg">
                          {COLLECTIONS_DROPDOWN.map((col) => (
                            <Link
                              key={col.name}
                              href={col.href}
                              onClick={() => setIsCollectionsOpen(false)}
                              className="group p-2.5 rounded-lg hover:bg-white border border-transparent hover:border-[#C5A25D]/30 transition-all flex flex-col"
                            >
                              <span className="text-[13px] font-medium text-[#132026] group-hover:text-[#8C6239] transition-colors flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25D] shrink-0" />
                                {col.name}
                              </span>
                              <span className="text-[11px] text-[#2B1E16]/70 pl-3 leading-snug mt-0.5">
                                {col.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#C5A25D] transition-colors py-2"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTION: Free Consultation CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/#quote"
              className="hidden sm:inline-flex text-xs uppercase tracking-wider px-4 py-2 rounded-lg bg-[#C5A25D]/15 text-[#8C6239] border border-[#C5A25D]/30 hover:bg-[#C5A25D] hover:text-[#132026] transition-all font-medium"
            >
              Free Consultation
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#132026] hover:text-[#C5A25D] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#2B1E16]/10 bg-[#FAF8F5] px-5 py-4 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2.5 text-sm font-medium text-[#2B1E16]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#C5A25D] border-b border-[#2B1E16]/5 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg bg-[#C5A25D] text-[#132026] font-medium transition-all"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

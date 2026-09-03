"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export interface NavbarProps {
  brandName?: string;
  brandTagline?: string;
  cartCount?: number;
}

interface CategoryItem {
  name: string;
  href: string;
  isSpecial?: boolean;
  specialIcon?: "luxe" | null;
  subcategories?: {
    title: string;
    items: { label: string; href: string }[];
  }[];
  featured?: {
    title: string;
    subtitle: string;
    href: string;
  };
}

const HEAVEN_CATEGORIES: CategoryItem[] = [
  {
    name: "HEAVEN BESPOKE",
    href: "#bespoke",
    isSpecial: true,
    specialIcon: "luxe",
    subcategories: [
      {
        title: "Custom Craftsmanship",
        items: [
          { label: "Built-to-Space Architectural Joinery", href: "#bespoke" },
          { label: "Custom Royal Carved Beds", href: "#bedroom" },
          { label: "Tailored Leather & Velvet Sofas", href: "#living-room" },
          { label: "Bespoke Solid Teak Dining Tables", href: "#dining" },
        ],
      },
      {
        title: "Interior Services",
        items: [
          { label: "Free 3D Room Planning & Renderings", href: "#consultation" },
          { label: "On-site Measurement & Space Audit", href: "#consultation" },
          { label: "Premium Timber & Fabric Curation", href: "#bespoke" },
        ],
      },
    ],
    featured: {
      title: "Handcrafted in Chattogram",
      subtitle: "Designed around your floorplan and personal aesthetic. Not pulled from a shelf.",
      href: "#bespoke",
    },
  },
  {
    name: "LIVING ROOM",
    href: "#living-room",
    subcategories: [
      {
        title: "Luxury Seating",
        items: [
          { label: "Bespoke Chesterfield & Royal Sofas", href: "#living-room" },
          { label: "Custom L-Shape & Modular Sectionals", href: "#living-room" },
          { label: "Hand-Carved Accent & Wing Chairs", href: "#living-room" },
          { label: "Luxury Settees & Daybeds", href: "#living-room" },
        ],
      },
      {
        title: "Tables & Media",
        items: [
          { label: "Solid Wood & Marble Coffee Tables", href: "#living-room" },
          { label: "Console & Foyer Entry Tables", href: "#living-room" },
          { label: "Wall-Mounted & Floating TV Consoles", href: "#living-room" },
          { label: "Side & End Nesting Tables", href: "#living-room" },
        ],
      },
    ],
    featured: {
      title: "The Living Sanctuary",
      subtitle: "Sumptuous cushioning and seasoned teak frames built to last generations.",
      href: "#living-room",
    },
  },
  {
    name: "BEDROOM",
    href: "#bedroom",
    subcategories: [
      {
        title: "Master Beds & Suites",
        items: [
          { label: "Hand-Carved Royal King Beds", href: "#bedroom" },
          { label: "Tufted Velvet Headboard Beds", href: "#bedroom" },
          { label: "Solid Teak Platform & Storage Beds", href: "#bedroom" },
          { label: "Modern Minimalist Floating Beds", href: "#bedroom" },
        ],
      },
      {
        title: "Storage & Vanities",
        items: [
          { label: "Custom Fitted Wardrobes & Closets", href: "#bedroom" },
          { label: "Bespoke Dressing Tables & Mirrors", href: "#bedroom" },
          { label: "Matched Bedside Nightstands", href: "#bedroom" },
          { label: "Full Bedroom Suite Packages", href: "#bedroom" },
        ],
      },
    ],
    featured: {
      title: "Royal Master Suites",
      subtitle: "Intricate floral hand-carvings paired with Italian velvet headboards.",
      href: "#bedroom",
    },
  },
  {
    name: "DINING",
    href: "#dining",
    subcategories: [
      {
        title: "Dining Sets",
        items: [
          { label: "8-Seater Solid Teak Dining Tables", href: "#dining" },
          { label: "6-Seater Family Dining Suites", href: "#dining" },
          { label: "Ergonomic Upholstered Dining Chairs", href: "#dining" },
          { label: "Natural Live-Edge Wood Tables", href: "#dining" },
        ],
      },
      {
        title: "Cabinets & Display",
        items: [
          { label: "Luxury Crockery Showcases", href: "#dining" },
          { label: "Buffet Consoles & Sideboards", href: "#dining" },
          { label: "Contemporary Bar Units & Wine Racks", href: "#dining" },
        ],
      },
    ],
  },
  {
    name: "OFFICE & STUDY",
    href: "#office",
    subcategories: [
      {
        title: "Executive Furniture",
        items: [
          { label: "Presidential Solid Wood Desks", href: "#office" },
          { label: "Ergonomic High-Back Leather Chairs", href: "#office" },
          { label: "Custom Wall-to-Wall Bookshelves", href: "#office" },
          { label: "Conference & Meeting Tables", href: "#office" },
        ],
      },
    ],
  },
  {
    name: "INTERIOR STYLING",
    href: "#interior-styling",
    subcategories: [
      {
        title: "Full Home Solutions",
        items: [
          { label: "Living & Dining Interior Coordination", href: "#interior-styling" },
          { label: "Luxury Wall Paneling & Fluted Wood", href: "#interior-styling" },
          { label: "Architectural Lighting & Accents", href: "#interior-styling" },
          { label: "Turnkey Residence Styling", href: "#interior-styling" },
        ],
      },
    ],
  },
  {
    name: "SHOWROOM",
    href: "#showroom",
    subcategories: [
      {
        title: "Agrabad Access Road Flagship",
        items: [
          { label: "Visit Our Chattogram Showroom", href: "#showroom" },
          { label: "Experience Carvings & Wood Grain In-Person", href: "#showroom" },
          { label: "Opposite RAK Ceramics, Agrabad", href: "#showroom" },
          { label: "Get Directions via Google Maps", href: "https://maps.google.com" },
        ],
      },
    ],
  },
  {
    name: "ABOUT BRAND",
    href: "#about",
    subcategories: [
      {
        title: "The Heaven Heritage",
        items: [
          { label: "Founded 2020 by MD Abul Kalam Bhuiyan", href: "#about" },
          { label: "BFIOA Recognition & Chamber Member", href: "#about" },
          { label: "Our In-House Master Craftsmen", href: "#about" },
          { label: "Client Testimonials & Showcase", href: "#about" },
        ],
      },
    ],
  },
  {
    name: "CONSULTATION",
    href: "#consultation",
    isSpecial: true,
    subcategories: [
      {
        title: "Complimentary Services",
        items: [
          { label: "Book Free 1-on-1 Design Session", href: "#consultation" },
          { label: "WhatsApp Direct Consultation", href: "https://chat.whatsapp.com/FTk1VXPtsG8J3yJSiTHmZy?mode=gi_t" },
          { label: "Call Us: +880 1960-481983", href: "tel:+8801960481983" },
        ],
      },
    ],
  },
];

const SEARCH_SUGGESTIONS = [
  "Hand-carved Royal King Bed",
  "Chesterfield Velvet Sofa Set",
  "8-Seater Solid Teak Dining Table",
  "Floating Minimalist TV Console",
  "Custom Fitted Dressing Table",
  "Executive Teak Study Desk",
  "Agrabad Showroom Display Items",
];

export function Navbar({
  brandName = "HEAVEN",
  brandTagline = "FURNITURE MART",
  cartCount = 0,
}: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnterCategory = (categoryName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(categoryName);
  };

  const handleMouseLeaveCategory = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const activeCategoryData = HEAVEN_CATEGORIES.find((c) => c.name === activeDropdown);

  return (
    <header className="w-full bg-[#FAF8F5] text-[#2B1E16] border-b border-[#2B1E16]/10 sticky top-0 z-50 font-sans">
      
      {/* TOP / MAIN BAR */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          
          {/* LEFT: Search Input Box */}
          <div className="flex-1 max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] relative" ref={searchContainerRef}>
            <div className="relative flex items-center">
              <span className="absolute left-3 sm:left-3.5 pointer-events-none text-neutral-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#8C6239]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search bespoke sofas, beds, dining..."
                aria-label="Search bespoke furniture"
                className="w-full h-9 sm:h-10 pl-9 sm:pl-10 pr-4 text-[13px] sm:text-[13.5px] text-[#2B1E16] bg-white placeholder-[#8C6239]/60 border border-[#2B1E16]/30 rounded-lg focus:outline-none focus:border-[#C5A25D] focus:ring-1 focus:ring-[#C5A25D] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-neutral-400 hover:text-neutral-700 text-xs p-1"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Search Suggestions Dropdown */}
            {isSearchFocused && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-[#FAF8F5] border border-[#2B1E16]/15 rounded-lg py-3 px-4 z-50">
                <div className="text-[11px] tracking-wider uppercase text-[#8C6239] mb-2">
                  Popular Bespoke Searches
                </div>
                <div className="flex flex-col gap-1.5">
                  {SEARCH_SUGGESTIONS.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSearchQuery(item);
                        setIsSearchFocused(false);
                      }}
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-[#C5A25D]/10 text-left text-[13px] text-[#2B1E16] transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-[#C5A25D]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
                      </svg>
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CENTER: Brand Logo (Heaven Furniture Mart) */}
          <div className="flex items-center justify-center shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none rounded-lg py-1 px-2"
              aria-label="Heaven Furniture Mart Home"
            >
              {/* Muted Gold Crest / House Logo Icon */}
              <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8">
                <svg
                  className="w-full h-full text-[#C5A25D] transition-transform duration-200 group-hover:scale-105"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {/* Luxury House Crest with peaked roof & bespoke pillars */}
                  <path d="M4 14L16 4L28 14V28H4V14Z" />
                  <path d="M16 11V21" strokeWidth="1.8" />
                  <path d="M11 16H21" strokeWidth="1.8" />
                </svg>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col text-left">
                <span className="text-[20px] sm:text-[24px] font-serif tracking-[0.08em] text-[#132026] leading-none select-none">
                  {brandName}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#C5A25D] uppercase leading-tight select-none mt-0.5">
                  {brandTagline}
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT: Utility Links & Consultation CTA */}
          <div className="flex items-center justify-end gap-3 sm:gap-5 lg:gap-6 text-[13px] sm:text-[13.5px] text-[#2B1E16] font-normal">
            
            {/* Desktop Utility Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                href="#showroom"
                className="hover:text-[#C5A25D] transition-colors"
              >
                Showroom
              </Link>
              <Link
                href="#bespoke"
                className="hover:text-[#C5A25D] transition-colors"
              >
                Bespoke Studio
              </Link>
              <Link
                href="tel:+8801960481983"
                className="hover:text-[#C5A25D] transition-colors"
              >
                +880 1960-481983
              </Link>
              <Link
                href="https://chat.whatsapp.com/FTk1VXPtsG8J3yJSiTHmZy?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A25D] transition-colors font-medium text-[#132026]"
              >
                WhatsApp Us
              </Link>
              <Link
                href="#consultation"
                className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg bg-[#C5A25D]/15 text-[#8C6239] border border-[#C5A25D]/30 hover:bg-[#C5A25D] hover:text-[#132026] transition-all"
              >
                Free Consultation
              </Link>
            </div>

            {/* Quote / Wishlist Cart Icon */}
            <Link
              href="#quote-cart"
              className="relative p-1.5 text-[#132026] hover:text-[#C5A25D] transition-transform duration-150 hover:scale-105 flex items-center justify-center focus:outline-none"
              aria-label={`Bespoke inquiry list with ${cartCount} items`}
            >
              <svg
                className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="8" cy="20.5" r="1.5" />
                <circle cx="18" cy="20.5" r="1.5" />
                <path d="M2.5 3.5H5.2L7.6 14.8C7.75 15.5 8.35 16 9.07 16H18.2C18.9 16 19.5 15.5 19.65 14.8L21.5 6.5H5.8" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A25D] text-[#132026] text-[10px] h-4 w-4 rounded-lg flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#132026] hover:text-[#C5A25D] focus:outline-none"
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

      {/* BOTTOM / CATEGORY NAVIGATION BAR */}
      <nav
        className="w-full border-t border-[#2B1E16]/10 bg-[#FAF8F5]"
        aria-label="Heaven Furniture Mart Collections"
        onMouseLeave={handleMouseLeaveCategory}
      >
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between gap-4 lg:gap-7 overflow-x-auto py-2.5 sm:py-3 scrollbar-none select-none">
            {HEAVEN_CATEGORIES.map((category) => {
              const isHovered = activeDropdown === category.name;
              return (
                <li
                  key={category.name}
                  className="shrink-0 relative group"
                  onMouseEnter={() => handleMouseEnterCategory(category.name)}
                >
                  <Link
                    href={category.href}
                    className={`flex items-center text-[12px] md:text-[12.5px] lg:text-[13px] font-medium tracking-[0.07em] uppercase transition-colors duration-150 py-1 ${
                      isHovered ? "text-[#C5A25D]" : "text-[#2B1E16] hover:text-[#C5A25D]"
                    }`}
                  >
                    {/* Special Monogram Icon for Bespoke */}
                    {category.specialIcon === "luxe" && (
                      <span className="inline-flex items-center mr-1 text-[#C5A25D]" aria-hidden="true">
                        <svg className="w-4 h-4 -mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <text
                            x="1"
                            y="17"
                            fontFamily="Georgia, 'Times New Roman', serif"
                            fontStyle="italic"
                            fontWeight="bold"
                            fontSize="17"
                            letterSpacing="-1.5px"
                          >
                            HF
                          </text>
                        </svg>
                      </span>
                    )}

                    <span>{category.name}</span>
                  </Link>

                  {/* Active hover bottom line indicator in Muted Gold */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A25D] transition-all duration-200 ${
                      isHovered ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* MEGA-MENU DROPDOWN */}
        {activeDropdown && activeCategoryData?.subcategories && (
          <div
            className="hidden md:block absolute left-0 right-0 w-full bg-[#FAF8F5] border-b border-[#2B1E16]/15 z-40 transition-all duration-200"
            onMouseEnter={() => handleMouseEnterCategory(activeDropdown)}
            onMouseLeave={handleMouseLeaveCategory}
          >
            <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                
                {/* Subcategory columns */}
                <div className="col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeCategoryData.subcategories.map((sub, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-[12px] uppercase tracking-wider text-[#132026] border-b border-[#2B1E16]/10 pb-2 flex items-center gap-1.5">
                        <span className="text-[#C5A25D]">✦</span>
                        <span>{sub.title}</span>
                      </h4>
                      <ul className="space-y-2">
                        {sub.items.map((subItem, sIdx) => (
                          <li key={sIdx}>
                            <Link
                              href={subItem.href}
                              className="text-[13.5px] text-[#2B1E16]/80 hover:text-[#132026] hover:translate-x-0.5 transition-all duration-150 inline-block"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Promo Card in Mega Menu */}
                <div className="col-span-4 lg:col-span-3 bg-white rounded-lg p-5 border border-[#2B1E16]/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A25D]">
                      Bespoke Craftsmanship
                    </span>
                    <h5 className="text-[15px] text-[#132026] mt-1 mb-2 font-serif">
                      {activeCategoryData.featured?.title || activeCategoryData.name}
                    </h5>
                    <p className="text-[12.5px] text-[#2B1E16]/75 leading-relaxed">
                      {activeCategoryData.featured?.subtitle ||
                        "Every piece is customized to your exact room dimensions, premium wood choices, and finish preferences."}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#2B1E16]/10 flex items-center justify-between">
                    <Link
                      href={activeCategoryData.href}
                      className="text-[12.5px] text-[#132026] hover:text-[#C5A25D] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Collection</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </nav>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2B1E16]/15 bg-[#FAF8F5] px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Mobile Utility Links */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#2B1E16]/10 text-[13px] font-medium text-[#2B1E16]">
            <Link href="#showroom" className="py-1.5 hover:text-[#C5A25D]">Showroom</Link>
            <Link href="#bespoke" className="py-1.5 hover:text-[#C5A25D]">Bespoke Studio</Link>
            <Link href="tel:+8801960481983" className="py-1.5 hover:text-[#C5A25D]">Call Showroom</Link>
            <Link href="https://chat.whatsapp.com/FTk1VXPtsG8J3yJSiTHmZy?mode=gi_t" className="py-1.5 hover:text-[#C5A25D]">WhatsApp Us</Link>
            <Link href="#consultation" className="py-1.5 col-span-2 text-[#C5A25D]">Free Design Consultation →</Link>
          </div>

          {/* Mobile Categories Accordion */}
          <div className="space-y-1">
            <div className="text-[11px] uppercase tracking-wider text-[#8C6239] mb-2">
              Collections & Categories
            </div>
            {HEAVEN_CATEGORIES.map((cat) => {
              const isOpen = mobileActiveCategory === cat.name;
              return (
                <div key={cat.name} className="border-b border-[#2B1E16]/10 last:border-b-0 py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={cat.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 text-[13px] tracking-wide text-[#2B1E16] py-1.5"
                    >
                      {cat.specialIcon === "luxe" && (
                        <span className="font-serif italic text-xs text-[#C5A25D]">HF</span>
                      )}
                      <span>{cat.name}</span>
                    </Link>

                    {cat.subcategories && (
                      <button
                        type="button"
                        onClick={() => setMobileActiveCategory(isOpen ? null : cat.name)}
                        className="p-2 text-[#8C6239] hover:text-[#132026] text-xs"
                        aria-label={`Toggle ${cat.name} subcategories`}
                      >
                        {isOpen ? "−" : "+"}
                      </button>
                    )}
                  </div>

                  {/* Subcategories dropdown in mobile */}
                  {isOpen && cat.subcategories && (
                    <div className="pl-4 py-2 space-y-3 bg-white/70 rounded-lg mt-1 border border-[#2B1E16]/5">
                      {cat.subcategories.map((sub, sIdx) => (
                        <div key={sIdx}>
                          <p className="text-[11px] uppercase text-[#8C6239] tracking-wider">
                            {sub.title}
                          </p>
                          <div className="mt-1 space-y-1">
                            {sub.items.map((subItem, iIdx) => (
                              <Link
                                key={iIdx}
                                href={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-[12.5px] text-[#2B1E16]/80 py-1 hover:text-[#C5A25D]"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;


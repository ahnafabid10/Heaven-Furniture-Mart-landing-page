"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export interface NavbarProps {
  brandName?: string;
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

const CATEGORIES: CategoryItem[] = [
  {
    name: "ASHLEY LUXE",
    href: "#ashley-luxe",
    isSpecial: true,
    specialIcon: "luxe",
    subcategories: [
      {
        title: "Exclusive Collections",
        items: [
          { label: "Signature Leather Sofas", href: "#" },
          { label: "Artisan Wood Dining", href: "#" },
          { label: "Bespoke Bedroom Suites", href: "#" },
          { label: "Handcrafted Accents", href: "#" },
        ],
      },
      {
        title: "Designer Rooms",
        items: [
          { label: "The Penthouse Collection", href: "#" },
          { label: "Modern Organic Estate", href: "#" },
          { label: "Classic Metropolitan", href: "#" },
        ],
      },
    ],
    featured: {
      title: "Ashley Luxe Collection",
      subtitle: "Elevate your sanctuary with master craftsmanship and bespoke finishes.",
      href: "#",
    },
  },
  {
    name: "LIVING ROOM",
    href: "#living-room",
    subcategories: [
      {
        title: "Seating",
        items: [
          { label: "Sofas & Couches", href: "#" },
          { label: "Sectionals", href: "#" },
          { label: "Recliners", href: "#" },
          { label: "Loveseats", href: "#" },
          { label: "Chairs & Chaises", href: "#" },
        ],
      },
      {
        title: "Tables & Storage",
        items: [
          { label: "Coffee Tables", href: "#" },
          { label: "End & Side Tables", href: "#" },
          { label: "Console Tables", href: "#" },
          { label: "TV Stands & Media Units", href: "#" },
        ],
      },
      {
        title: "Living Room Sets",
        items: [
          { label: "3-Piece Living Sets", href: "#" },
          { label: "2-Piece Living Sets", href: "#" },
          { label: "Modular Sectional Bundles", href: "#" },
        ],
      },
    ],
    featured: {
      title: "The Living Sanctuary",
      subtitle: "Cloud-soft seating designed for effortless modern entertaining.",
      href: "#",
    },
  },
  {
    name: "BEDROOM",
    href: "#bedroom",
    subcategories: [
      {
        title: "Beds & Frames",
        items: [
          { label: "King Beds", href: "#" },
          { label: "Queen Beds", href: "#" },
          { label: "Storage & Platform Beds", href: "#" },
          { label: "Upholstered Beds", href: "#" },
        ],
      },
      {
        title: "Bedroom Furniture",
        items: [
          { label: "Dressers & Chests", href: "#" },
          { label: "Nightstands", href: "#" },
          { label: "Mirrors & Vanities", href: "#" },
          { label: "Wardrobes & Armoires", href: "#" },
        ],
      },
      {
        title: "Complete Sets",
        items: [
          { label: "3-Piece Bedroom Sets", href: "#" },
          { label: "4-Piece Bedroom Sets", href: "#" },
          { label: "Custom Suite Packages", href: "#" },
        ],
      },
    ],
  },
  {
    name: "DINING",
    href: "#dining",
    subcategories: [
      {
        title: "Dining Sets",
        items: [
          { label: "Dining Tables", href: "#" },
          { label: "Dining Chairs & Benches", href: "#" },
          { label: "Bar & Counter Stools", href: "#" },
          { label: "Extendable Dining Tables", href: "#" },
        ],
      },
      {
        title: "Storage & Display",
        items: [
          { label: "Buffets & Sideboards", href: "#" },
          { label: "China Cabinets", href: "#" },
          { label: "Bar Carts & Cabinets", href: "#" },
        ],
      },
    ],
  },
  {
    name: "MATTRESSES",
    href: "#mattresses",
    subcategories: [
      {
        title: "By Type",
        items: [
          { label: "Hybrid Mattresses", href: "#" },
          { label: "Memory Foam Mattresses", href: "#" },
          { label: "Innerspring Mattresses", href: "#" },
          { label: "Mattress in a Box", href: "#" },
        ],
      },
      {
        title: "By Size",
        items: [
          { label: "King Size", href: "#" },
          { label: "Queen Size", href: "#" },
          { label: "Full & Twin Size", href: "#" },
          { label: "Adjustable Bases", href: "#" },
        ],
      },
    ],
  },
  {
    name: "RUGS & DECOR",
    href: "#rugs-decor",
    subcategories: [
      {
        title: "Rugs",
        items: [
          { label: "Area Rugs (8x10, 9x12)", href: "#" },
          { label: "Runner Rugs", href: "#" },
          { label: "Outdoor Rugs", href: "#" },
          { label: "Handwoven Rugs", href: "#" },
        ],
      },
      {
        title: "Home Accents",
        items: [
          { label: "Wall Art & Sculptures", href: "#" },
          { label: "Mirrors", href: "#" },
          { label: "Table & Floor Lamps", href: "#" },
          { label: "Pillows, Throws & Poufs", href: "#" },
        ],
      },
    ],
  },
  {
    name: "OFFICE",
    href: "#office",
    subcategories: [
      {
        title: "Desks & Workstations",
        items: [
          { label: "Executive Desks", href: "#" },
          { label: "Writing Desks", href: "#" },
          { label: "Standing & Adjustable Desks", href: "#" },
        ],
      },
      {
        title: "Office Seating & Storage",
        items: [
          { label: "Ergonomic Office Chairs", href: "#" },
          { label: "Bookcases & Bookshelves", href: "#" },
          { label: "Filing Cabinets", href: "#" },
        ],
      },
    ],
  },
  {
    name: "BABY & KIDS",
    href: "#baby-kids",
    subcategories: [
      {
        title: "Kids Bedroom",
        items: [
          { label: "Kids Beds & Bunk Beds", href: "#" },
          { label: "Kids Dressers & Nightstands", href: "#" },
          { label: "Kids Desks & Study Chairs", href: "#" },
        ],
      },
      {
        title: "Nursery",
        items: [
          { label: "Cribs & Mattresses", href: "#" },
          { label: "Gliders & Rockers", href: "#" },
          { label: "Changing Tables", href: "#" },
        ],
      },
    ],
  },
  {
    name: "OUTDOOR",
    href: "#outdoor",
    subcategories: [
      {
        title: "Outdoor Seating",
        items: [
          { label: "Patio Conversation Sets", href: "#" },
          { label: "Outdoor Sofas & Sectionals", href: "#" },
          { label: "Chaise Lounges & Daybeds", href: "#" },
        ],
      },
      {
        title: "Outdoor Dining & Accents",
        items: [
          { label: "Outdoor Dining Sets", href: "#" },
          { label: "Fire Pits & Outdoor Heating", href: "#" },
          { label: "Patio Umbrellas & Stands", href: "#" },
        ],
      },
    ],
  },
  {
    name: "DEALS",
    href: "#deals",
    isSpecial: true,
    subcategories: [
      {
        title: "Featured Savings",
        items: [
          { label: "Clearance & Overstock (Up to 60% Off)", href: "#" },
          { label: "Flash Deals of the Week", href: "#" },
          { label: "Living Room Bundle Savings", href: "#" },
          { label: "Free White-Glove Delivery Offers", href: "#" },
        ],
      },
    ],
  },
  {
    name: "TRENDS",
    href: "#trends",
    subcategories: [
      {
        title: "Curated Styles",
        items: [
          { label: "Modern Organic & Earth Tones", href: "#" },
          { label: "Quiet Luxury & Warm Minimalist", href: "#" },
          { label: "Timeless Traditional & Heritage", href: "#" },
          { label: "Japandi & Scandinavian Wood", href: "#" },
        ],
      },
    ],
  },
];

const SEARCH_SUGGESTIONS = [
  "Leather Sectional Sofas",
  "Solid Oak Dining Table",
  "Upholstered King Bed Frame",
  "Reclining Accent Armchair",
  "Hand-Tufted Wool Rugs",
  "Solid Wood Bookshelves",
  "Marble Top Coffee Table",
];

export function Navbar({ brandName = "ASHLEY", cartCount = 0 }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close search suggestions on outside click
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

  const activeCategoryData = CATEGORIES.find((c) => c.name === activeDropdown);

  return (
    <header className="w-full bg-white text-neutral-900 border-b border-neutral-200 sticky top-0 z-50 shadow-[0_2px_12px_rgba(0,0,0,0.03)] font-sans">
      {/* TOP / MAIN BAR */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          
          {/* LEFT: Search Input Box */}
          <div className="flex-1 max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] relative" ref={searchContainerRef}>
            <div className="relative flex items-center">
              <span className="absolute left-3 sm:left-3.5 pointer-events-none text-neutral-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-neutral-500"
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
                placeholder="Search"
                aria-label="Search furniture and decor"
                className="w-full h-9 sm:h-10 pl-9 sm:pl-10 pr-4 text-[13.5px] sm:text-[14px] text-neutral-900 bg-white placeholder-neutral-500 border border-neutral-800 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-neutral-400 hover:text-neutral-700 text-xs font-semibold p-1"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Search Suggestions Dropdown */}
            {isSearchFocused && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-neutral-200 rounded-md shadow-xl py-3 px-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 mb-2">
                  Popular Searches
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
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded hover:bg-neutral-50 text-left text-[13px] text-neutral-700 hover:text-neutral-950 transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-neutral-400"
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

          {/* CENTER: Brand Logo */}
          <div className="flex items-center justify-center shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-neutral-400 rounded-sm py-1 px-2"
              aria-label={`${brandName} Home`}
            >
              {/* Ashley Orange House Silhouette Icon */}
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#eb690b] transition-transform duration-200 group-hover:scale-105"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Pitched gable roof and clean square house base */}
                <path d="M3.5 12.8L14 3.5L24.5 12.8V24.5H3.5V12.8Z" />
              </svg>

              {/* Bold Capital Brand Text */}
              <span className="text-[22px] sm:text-[26px] font-black tracking-[0.06em] text-neutral-950 uppercase leading-none select-none">
                {brandName}
              </span>
            </Link>
          </div>

          {/* RIGHT: Utility Links & Cart */}
          <div className="flex items-center justify-end gap-3 sm:gap-5 lg:gap-6 text-[13px] sm:text-[13.5px] text-neutral-800 font-normal">
            
            {/* Desktop Utility Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                href="#login"
                className="hover:text-black transition-colors hover:underline underline-offset-4 decoration-neutral-400"
              >
                Login
              </Link>
              <Link
                href="#order-tracking"
                className="hover:text-black transition-colors hover:underline underline-offset-4 decoration-neutral-400"
              >
                Order Tracking
              </Link>
              <Link
                href="#financing"
                className="hover:text-black transition-colors hover:underline underline-offset-4 decoration-neutral-400"
              >
                Financing
              </Link>
              <Link
                href="#help"
                className="hover:text-black transition-colors hover:underline underline-offset-4 decoration-neutral-400"
              >
                Help
              </Link>
              <Link
                href="#wishlist"
                className="hover:text-black transition-colors hover:underline underline-offset-4 decoration-neutral-400"
              >
                Wishlist
              </Link>
            </div>

            {/* Cart Icon */}
            <Link
              href="#cart"
              className="relative p-1.5 text-neutral-900 hover:text-black transition-transform duration-150 hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-neutral-400 rounded"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              {/* Precise Ashley Wireframe Shopping Cart SVG */}
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
                {/* Wheels */}
                <circle cx="8" cy="20.5" r="1.5" />
                <circle cx="18" cy="20.5" r="1.5" />
                {/* Cart Body */}
                <path d="M2.5 3.5H5.2L7.6 14.8C7.75 15.5 8.35 16 9.07 16H18.2C18.9 16 19.5 15.5 19.65 14.8L21.5 6.5H5.8" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#eb690b] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-neutral-800 hover:text-black focus:outline-none"
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
        className="w-full border-t border-neutral-100 bg-white"
        aria-label="Product categories"
        onMouseLeave={handleMouseLeaveCategory}
      >
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between gap-4 lg:gap-7 overflow-x-auto py-2.5 sm:py-3 scrollbar-none select-none">
            {CATEGORIES.map((category) => {
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
                      isHovered ? "text-black" : "text-neutral-800 hover:text-black"
                    }`}
                  >
                    {/* Special Ashley Luxe Monogram Icon */}
                    {category.specialIcon === "luxe" && (
                      <span className="inline-flex items-center mr-1 text-neutral-900" aria-hidden="true">
                        <svg className="w-4 h-4 -mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <text
                            x="1"
                            y="17"
                            fontFamily="Georgia, 'Times New Roman', serif"
                            fontStyle="italic"
                            fontWeight="bold"
                            fontSize="18"
                            letterSpacing="-1.5px"
                          >
                            AL
                          </text>
                        </svg>
                      </span>
                    )}

                    <span>{category.name}</span>
                  </Link>

                  {/* Active hover bottom line indicator */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 transition-all duration-200 ${
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
            className="hidden md:block absolute left-0 right-0 w-full bg-white border-b border-neutral-200 shadow-2xl z-40 transition-all duration-200"
            onMouseEnter={() => handleMouseEnterCategory(activeDropdown)}
            onMouseLeave={handleMouseLeaveCategory}
          >
            <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                
                {/* Subcategory columns */}
                <div className="col-span-8 lg:col-span-9 grid grid-cols-3 gap-6">
                  {activeCategoryData.subcategories.map((sub, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-100 pb-2">
                        {sub.title}
                      </h4>
                      <ul className="space-y-2">
                        {sub.items.map((subItem, sIdx) => (
                          <li key={sIdx}>
                            <Link
                              href={subItem.href}
                              className="text-[13.5px] text-neutral-600 hover:text-black hover:translate-x-0.5 transition-all duration-150 inline-block"
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
                <div className="col-span-4 lg:col-span-3 bg-neutral-50 rounded-lg p-5 border border-neutral-100 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#eb690b]">
                      Featured Highlight
                    </span>
                    <h5 className="text-[15px] font-bold text-neutral-900 mt-1 mb-2">
                      {activeCategoryData.featured?.title || `Explore ${activeCategoryData.name}`}
                    </h5>
                    <p className="text-[12.5px] text-neutral-600 leading-relaxed">
                      {activeCategoryData.featured?.subtitle ||
                        "Discover timeless silhouettes, luxurious materials, and custom arrangements crafted to endure."}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between">
                    <Link
                      href={activeCategoryData.href}
                      className="text-[12.5px] font-semibold text-neutral-950 hover:text-[#eb690b] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Shop Collection</span>
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
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto shadow-xl">
          {/* Mobile Utility Links */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-100 text-[13px] font-medium text-neutral-700">
            <Link href="#login" className="py-1.5 hover:text-black">Login</Link>
            <Link href="#order-tracking" className="py-1.5 hover:text-black">Order Tracking</Link>
            <Link href="#financing" className="py-1.5 hover:text-black">Financing</Link>
            <Link href="#help" className="py-1.5 hover:text-black">Help Center</Link>
            <Link href="#wishlist" className="py-1.5 hover:text-black">Wishlist</Link>
          </div>

          {/* Mobile Categories Accordion */}
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Categories
            </div>
            {CATEGORIES.map((cat) => {
              const isOpen = mobileActiveCategory === cat.name;
              return (
                <div key={cat.name} className="border-b border-neutral-100 last:border-b-0 py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={cat.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 text-[13px] font-semibold tracking-wide text-neutral-900 py-1.5"
                    >
                      {cat.specialIcon === "luxe" && (
                        <span className="font-serif italic font-bold text-xs text-neutral-900">AL</span>
                      )}
                      <span>{cat.name}</span>
                    </Link>

                    {cat.subcategories && (
                      <button
                        type="button"
                        onClick={() => setMobileActiveCategory(isOpen ? null : cat.name)}
                        className="p-2 text-neutral-500 hover:text-neutral-900 text-xs"
                        aria-label={`Toggle ${cat.name} subcategories`}
                      >
                        {isOpen ? "−" : "+"}
                      </button>
                    )}
                  </div>

                  {/* Subcategories dropdown in mobile */}
                  {isOpen && cat.subcategories && (
                    <div className="pl-4 py-2 space-y-3 bg-neutral-50 rounded mt-1">
                      {cat.subcategories.map((sub, sIdx) => (
                        <div key={sIdx}>
                          <p className="text-[11px] font-bold uppercase text-neutral-500 tracking-wider">
                            {sub.title}
                          </p>
                          <div className="mt-1 space-y-1">
                            {sub.items.map((subItem, iIdx) => (
                              <Link
                                key={iIdx}
                                href={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-[12.5px] text-neutral-700 py-1 hover:text-black"
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

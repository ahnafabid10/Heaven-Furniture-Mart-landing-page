"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CategoryCard {
  id: string;
  category: string;
  subTitle: string;
  itemCount: string;
  image: string;
  href: string;
}

const CATEGORIES_DATA: CategoryCard[] = [
  {
    id: "living-room",
    category: "LIVING ROOM",
    subTitle: "Royal Hand-Carved & Velvet Sofas",
    itemCount: "24+ Designs",
    image: "/1.jpg",
    href: "#living-room",
  },
  {
    id: "dining-room",
    category: "DINING ROOM",
    subTitle: "Italian Marble & Solid Teak Tables",
    itemCount: "18+ Sets",
    image: "/4.jpg",
    href: "#dining",
  },
  {
    id: "bedroom",
    category: "BEDROOM",
    subTitle: "Bespoke Velvet Headboard Suites",
    itemCount: "16+ Suites",
    image: "/5.jpg",
    href: "#bedroom",
  },
  {
    id: "bespoke-suites",
    category: "BESPOKE SUITES",
    subTitle: "Custom Sized Living Collections",
    itemCount: "Tailored to Space",
    image: "/13.jpg",
    href: "#bespoke",
  },
  {
    id: "cabinets-display",
    category: "CABINETS & DISPLAY",
    subTitle: "Gilded Crockery & Showcases",
    itemCount: "12+ Designs",
    image: "/8.jpg",
    href: "#dining",
  },
  {
    id: "office-storage",
    category: "OFFICE & STORAGE",
    subTitle: "Executive Consoles & Desks",
    itemCount: "10+ Models",
    image: "/10.jpg",
    href: "#office",
  },
  {
    id: "tea-accent",
    category: "TEA & ACCENTS",
    subTitle: "Hand-Carved Armchairs & Tables",
    itemCount: "14+ Pairs",
    image: "/7.jpg",
    href: "#living-room",
  },
  {
    id: "royal-divans",
    category: "ROYAL DIVANS",
    subTitle: "Embroidered Silk & Gold Settees",
    itemCount: "8+ Masterpieces",
    image: "/9.jpg",
    href: "#living-room",
  },
];

export function CategoryGrid() {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24" id="collections">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-10 sm:mb-12 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#132026] tracking-tight leading-[1.18]">
            Explore By <span className="text-[#8C6239]">Category</span>
          </h2>
          <p className="text-sm sm:text-base text-[#2B1E16]/75 font-normal leading-relaxed">
            Handcrafted with solid seasoned wood and bespoke tailoring for every room of your residence.
          </p>
        </div>

        {/* 8 Images Grid (4 columns × 2 rows on desktop, 2 columns on mobile/tablet) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {CATEGORIES_DATA.map((card) => {
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-lg sm:rounded-lg bg-neutral-900 block cursor-pointer transition-all duration-300"
              >
                {/* Product Image */}
                <Image
                  src={card.image}
                  alt={`${card.category} - Heaven Furniture Mart`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Base Gradient Overlay (keeps text legible) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300" />

                {/* Hover Mild Darkish Overlay (Same as About Us) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />


                {/* Bottom Content Area */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 lg:p-6 z-20 flex flex-col items-center text-center">
                  
                  {/* Category Name */}
                  <h3 className="text-white font-sans text-xs sm:text-sm lg:text-[15px] tracking-[0.14em] uppercase transition-transform duration-300 group-hover:-translate-y-1">
                    {card.category}
                  </h3>

                  {/* Subtitle that reveals smoothly on hover from the bottom */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden flex flex-col items-center">
                    <p className="text-[11px] sm:text-xs text-[#FAF8F5]/85 font-light tracking-wide mt-1 line-clamp-1">
                      {card.subTitle}
                    </p>
                  </div>

                  {/* Subtle Gold Indicator Line at Bottom */}
                  <div className="w-0 group-hover:w-10 h-0.5 bg-[#C5A25D] mt-2 transition-all duration-300 ease-out rounded-lg" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CategoryGrid;


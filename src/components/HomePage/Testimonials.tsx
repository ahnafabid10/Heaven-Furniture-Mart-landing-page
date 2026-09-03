"use client";

import React, { useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  project: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 0,
    quote:
      "Heaven Furniture Mart completely transformed our duplex living space. Their attention to solid seasoned teak detailing, custom room dimensions, and hand-carved finishes gave our home the exact royal feel we envisioned. Truly Chattogram’s finest bespoke studio.",
    name: "Engr. Tanvir Ahmed",
    role: "Duplex Homeowner · Khulshi, Chattogram",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    project: "Custom Royal Teak Living Suite",
  },
  {
    id: 1,
    quote:
      "From the initial free design consultation at their Agrabad studio to white-glove delivery, their team was flawless. Instead of buying catalog furniture that never fits properly, they crafted our master bedroom suite to our exact room dimensions. Outstanding quality!",
    name: "Dr. Nusrat Jahan",
    role: "Homeowner · Nasirabad Housing Society, Chattogram",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    project: "Bespoke King Bed & Fitted Wardrobes",
  },
  {
    id: 2,
    quote:
      "We ordered a 10-seater executive solid wood dining table for our family villa. Visiting their Agrabad showroom gave us total confidence in their craftsmanship. The wood polish, heavy joints, and plush upholstery exceeded our highest expectations.",
    name: "Syed Mostafa Kamal",
    role: "Managing Director, Apex Trading · Agrabad, Chattogram",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    project: "Executive 10-Seater Solid Dining Suite",
  },
  {
    id: 3,
    quote:
      "Their 1st Prize recognition from BFIOA is well deserved. We furnished our entire newly built apartment with Heaven Furniture Mart. Every single guest who walks into our home is in awe of the custom sofa carving and premium comfort.",
    name: "Farhana Rahman",
    role: "Interior Designer & Homeowner · Panchlaish, Chattogram",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    project: "Complete Bespoke Interior Styling",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full bg-[#FAF8F5] text-[#2B1E16] py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-[#2B1E16]/10" id="testimonials">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Heading with Hollow Outline typography */}
          <div className="lg:col-span-5 space-y-6">
            {/* Display Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#132026] leading-[1.18] tracking-tight">
              Client <br />
              Success Stories
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#2B1E16]/75 leading-relaxed max-w-md">
              Hear from homeowners, interior designers, and families across Chattogram who entrusted Heaven Furniture Mart to craft their bespoke dream living spaces.
            </p>
          </div>

          {/* RIGHT SIDE: Review Card */}
          <div className="lg:col-span-7 space-y-8 lg:pl-4">
            
            {/* Quote Mark Accent */}
            <div className="w-12 h-10 text-[#C5A25D] opacity-90">
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-2.638 4.2-4.849h-4.205v-11h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-2.638 4.2-4.849h-4.204v-11h10z" />
              </svg>
            </div>

            {/* Quote Content */}
            <div className="min-h-[140px] sm:min-h-[160px] flex items-center">
              <p className="font-serif text-xl sm:text-2xl lg:text-[25px] font-light text-[#132026] leading-relaxed tracking-wide">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            {/* Client Profile and Navigation Controls */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#2B1E16]/10">
              
              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border-2 border-[#C5A25D] shrink-0 bg-neutral-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base text-[#132026] leading-tight">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#2B1E16]/65 mt-0.5">
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Prev / Next Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-lg border border-[#2B1E16]/20 hover:border-[#C5A25D] bg-white text-[#132026] hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-lg border border-[#2B1E16]/20 hover:border-[#C5A25D] bg-white text-[#132026] hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;


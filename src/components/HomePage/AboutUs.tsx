"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutSlide {
  id: number;
  src: string;
  alt: string;
}

// Exactly 3 About Us images
const ABOUT_SLIDES: AboutSlide[] = [
  {
    id: 0,
    src: "/About%20us%2001.jpg",
    alt: "Heaven Furniture Mart Team & Leadership",
  },
  {
    id: 1,
    src: "/About%20us%2002.jpg",
    alt: "Heaven Furniture Mart International Exhibition Pavilion",
  },
  {
    id: 2,
    src: "/about%20us03.jpg",
    alt: "Heaven Furniture Mart 1st Prize Award Recognition",
  },
];

export function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 3-second auto slide rotation
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ABOUT_SLIDES.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-[#2B1E16]/10" id="about">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: About Us Title & Description */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A25D]/15 border border-[#C5A25D]/35">
              <span className="w-2 h-2 rounded-full bg-[#C5A25D]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239]">
                ABOUT HEAVEN FURNITURE MART
              </span>
            </div>

            {/* Headline in Playfair Serif */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#132026] leading-[1.18] tracking-tight">
              Designed. Crafted. Customized.
            </h2>

            {/* Main Brand Description (Removed 'Founded in 2020 by Managing Director Abul Kalam Bhuiyan,') */}
            <div className="space-y-3.5 text-sm sm:text-base text-[#2B1E16]/80 leading-relaxed">
              <p>
                Heaven Furniture Mart is one of Chattogram’s leading bespoke luxury furniture and interior styling studios.
              </p>
              <p>
                We do not sell mass-produced furniture off a catalog shelf. Every sofa, carved royal bed, and executive dining set is meticulously designed and handcrafted around what you actually envision—tailored to your room dimensions, preferred timber, and individual lifestyle.
              </p>
            </div>

            {/* Minimal Circular Outline Social Icons (Facebook, Instagram, YouTube) */}
            <div className="pt-2 flex items-center gap-3 sm:gap-3.5">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/HeavenFurnitureMart"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Facebook"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#2B1E16]/30 hover:border-[#C5A25D] text-[#2B1E16] hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4 sm:w-[17px] sm:h-[17px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.71-.14-2.73 0-4.79 1.66-4.79 4.8v2.7H7v4h3V22h4v-8.5z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/heaven_furniture_ltd"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#2B1E16]/30 hover:border-[#C5A25D] text-[#2B1E16] hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4 sm:w-[17px] sm:h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
                title="YouTube"
                aria-label="YouTube"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#2B1E16]/30 hover:border-[#C5A25D] text-[#2B1E16] hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4 sm:w-[17px] sm:h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="4.5" />
                  <polygon points="10 8.5 15.5 12 10 15.5 10 8.5" fill="currentColor" stroke="none" />
                </svg>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://chat.whatsapp.com/FTk1VXPtsG8J3yJSiTHmZy?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Community"
                aria-label="WhatsApp Community"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#2B1E16]/30 hover:border-[#C5A25D] text-[#2B1E16] hover:text-[#C5A25D] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4 sm:w-[17px] sm:h-[17px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.27 16.6L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C16.58 3.67 20.28 7.37 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.08 13.66 14.85 13.57C14.62 13.49 14.45 13.45 14.28 13.7C14.11 13.95 13.63 14.52 13.48 14.69C13.33 14.86 13.19 14.88 12.94 14.75C12.69 14.63 11.88 14.36 10.93 13.51C10.19 12.85 9.69 12.03 9.54 11.78C9.39 11.53 9.53 11.4 9.65 11.27C9.77 11.16 9.91 10.98 10.03 10.83C10.16 10.68 10.2 10.58 10.29 10.41C10.37 10.24 10.33 10.1 10.27 9.97C10.2 9.85 9.7 8.62 9.49 8.12C9.29 7.63 9.08 7.7 8.93 7.69L8.45 7.68C8.28 7.68 8.01 7.74 7.78 7.99C7.55 8.24 6.9 8.85 6.9 10.08C6.9 11.31 7.8 12.49 7.92 12.66C8.05 12.83 9.68 15.34 12.18 16.42C12.77 16.68 13.24 16.83 13.6 16.95C14.2 17.14 14.74 17.11 15.17 17.05C15.65 16.98 16.65 16.45 16.85 15.86C17.06 15.28 17.06 14.78 17 14.69C16.94 14.59 16.81 14.52 16.56 14.39Z" />
                </svg>
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE: 3-Image Horizontal Slat Gallery (All text removed from images, auto changes every 3s AND hover expands immediately) */}
          <div
            className="lg:col-span-7 flex flex-col space-y-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gallery Track Container - Clean without background or border */}
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex gap-2.5 sm:gap-3.5 select-none">
              {ABOUT_SLIDES.map((slide, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={slide.id}
                    onMouseEnter={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-full overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-700 ease-in-out ${
                      isActive
                        ? "flex-[4] sm:flex-[5] shadow-lg"
                        : "flex-[1] opacity-85 hover:opacity-100"
                    }`}
                  >
                    {/* Clean Image without any border, filter, or overlay */}
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-all duration-700 ease-out"
                    />
                  </div>
                );
              })}
            </div>

            {/* Progress Dots */}
            <div className="flex items-center justify-center pt-1">
              <div className="flex items-center gap-2">
                {ABOUT_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => {
                      setActiveIndex(idx);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "w-8 bg-[#C5A25D]"
                        : "w-2.5 bg-[#2B1E16]/20 hover:bg-[#2B1E16]/40"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;

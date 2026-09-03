"use client";

import React, { useState, useEffect, useRef } from "react";

export function Milestones() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  const [paths, setPaths] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    mobilePath: "",
  });

  const [reachedStep, setReachedStep] = useState<number>(1);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  // Recalculate exact SVG connection paths on mount, resize, and scroll
  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current) return;
      const cBox = containerRef.current.getBoundingClientRect();
      const isDesk = window.innerWidth >= 768;
      setIsDesktop(isDesk);

      const getBox = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (!ref.current) return null;
        const b = ref.current.getBoundingClientRect();
        return {
          left: b.left - cBox.left,
          right: b.right - cBox.left,
          top: b.top - cBox.top,
          bottom: b.bottom - cBox.top,
          width: b.width,
          height: b.height,
          centerX: b.left - cBox.left + b.width / 2,
          centerY: b.top - cBox.top + b.height / 2,
        };
      };

      const b1 = getBox(card1Ref);
      const b2 = getBox(card2Ref);
      const b3 = getBox(card3Ref);
      const b4 = getBox(card4Ref);
      const b5 = getBox(card5Ref);

      if (b1 && b2 && b3 && b4 && b5) {
        if (isDesk) {
          const r = 24; // corner radius for 90-degree curve
          // Path 1: Card 1 right edge -> horizontal to Card 2 center -> curve down -> straight to Card 2 top
          const p1 = `M ${b1.right} ${b1.centerY} H ${b2.centerX - r} Q ${b2.centerX} ${b1.centerY} ${b2.centerX} ${b1.centerY + r} V ${b2.top - 6}`;

          // Path 2: Card 2 left edge -> horizontal left to Card 3 center -> curve down -> straight to Card 3 top
          const p2 = `M ${b2.left} ${b2.centerY} H ${b3.centerX + r} Q ${b3.centerX} ${b2.centerY} ${b3.centerX} ${b2.centerY + r} V ${b3.top - 6}`;

          // Path 3: Card 3 right edge -> horizontal to Card 4 center -> curve down -> straight to Card 4 top
          const p3 = `M ${b3.right} ${b3.centerY} H ${b4.centerX - r} Q ${b4.centerX} ${b3.centerY} ${b4.centerX} ${b3.centerY + r} V ${b4.top - 6}`;

          // Path 4: Card 4 left edge -> horizontal to Card 5 center -> curve down -> straight to Card 5 top
          const p4 = `M ${b4.left} ${b4.centerY} H ${b5.centerX + r} Q ${b5.centerX} ${b4.centerY} ${b5.centerX} ${b4.centerY + r} V ${b5.top - 6}`;

          setPaths({ p1, p2, p3, p4, mobilePath: "" });
        } else {
          // Mobile single vertical spine connecting through the left icons
          const mX = 36;
          const mobilePath = `M ${mX} ${b1.top + 30} V ${b5.bottom - 20}`;
          setPaths({ p1: "", p2: "", p3: "", p4: "", mobilePath });
        }
      }
    };

    updatePaths();

    // Scroll listener for dynamic color transition
    const handleScroll = () => {
      const step1 = card1Ref.current;
      const step2 = card2Ref.current;
      const step3 = card3Ref.current;
      const step4 = card4Ref.current;
      const step5 = card5Ref.current;

      const threshold = window.innerHeight * 0.7;

      let current = 1;
      if (step1 && step1.getBoundingClientRect().top < threshold) current = 1;
      if (step2 && step2.getBoundingClientRect().top < threshold) current = 2;
      if (step3 && step3.getBoundingClientRect().top < threshold) current = 3;
      if (step4 && step4.getBoundingClientRect().top < threshold) current = 4;
      if (step5 && step5.getBoundingClientRect().top < threshold) current = 5;

      setReachedStep(current);
    };

    window.addEventListener("resize", updatePaths);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Small delay to ensure all CSS styles and fonts have rendered layout
    const timer = setTimeout(updatePaths, 150);

    return () => {
      window.removeEventListener("resize", updatePaths);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-[#2B1E16]/10 relative overflow-hidden" id="milestones">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#132026] leading-tight">
            Our Journey & <span className="text-[#8C6239]">Defining Milestones</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2B1E16]/75 max-w-2xl mx-auto">
            From our founding in 2020 to nationwide recognition in 2026, explore how Heaven Furniture Mart became Chattogram’s premier bespoke furniture studio.
          </p>
        </div>

        {/* Timeline / Milestones: True Zig-Zag Layout with Exact Connecting Dashed Lines */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          
          {/* Continuous SVG Connecting Paths (No gaps, perfectly attached to cards, color changes on scroll) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {isDesktop ? (
              <>
                {/* Path 1: Card 1 -> Card 2 */}
                {paths.p1 && (
                  <path
                    d={paths.p1}
                    fill="none"
                    stroke={reachedStep >= 2 ? "#C5A25D" : "#D1D5DB"}
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    className="transition-colors duration-700 ease-in-out"
                  />
                )}

                {/* Path 2: Card 2 -> Card 3 */}
                {paths.p2 && (
                  <path
                    d={paths.p2}
                    fill="none"
                    stroke={reachedStep >= 3 ? "#C5A25D" : "#D1D5DB"}
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    className="transition-colors duration-700 ease-in-out"
                  />
                )}

                {/* Path 3: Card 3 -> Card 4 */}
                {paths.p3 && (
                  <path
                    d={paths.p3}
                    fill="none"
                    stroke={reachedStep >= 4 ? "#C5A25D" : "#D1D5DB"}
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    className="transition-colors duration-700 ease-in-out"
                  />
                )}

                {/* Path 4: Card 4 -> Card 5 */}
                {paths.p4 && (
                  <path
                    d={paths.p4}
                    fill="none"
                    stroke={reachedStep >= 5 ? "#C5A25D" : "#D1D5DB"}
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    className="transition-colors duration-700 ease-in-out"
                  />
                )}
              </>
            ) : (
              /* Mobile Vertical Spine */
              paths.mobilePath && (
                <path
                  d={paths.mobilePath}
                  fill="none"
                  stroke={reachedStep >= 2 ? "#C5A25D" : "#D1D5DB"}
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  className="transition-colors duration-700 ease-in-out"
                />
              )
            )}
          </svg>

          {/* STEP 1: 2020 (Left Card) */}
          <div className="relative z-10 mb-16 sm:mb-20">
            <div
              ref={card1Ref}
              className="w-full md:w-[48%] relative rounded-lg pt-10 pb-7 px-6 sm:px-8 bg-gradient-to-br from-[#132026] via-[#1b2b33] to-[#101b20] text-white border border-[#132026] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Floating Icon overlapping top border */}
              <div className="absolute -top-7 left-6 sm:left-8 z-20 w-14 h-14 rounded-lg bg-gradient-to-tr from-amber-400 to-amber-300 border-4 border-white flex items-center justify-center text-[#132026]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-[#C5A25D]/25 border border-[#C5A25D]/50 text-[#C5A25D] text-xs tracking-wider uppercase mb-2">
                2020 · FOUNDING
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2.5">
                Founded by Abul Kalam Bhuiyan
              </h3>
              <p className="text-sm sm:text-[14px] text-[#FAF8F5]/80 font-light leading-relaxed">
                Heaven Furniture Mart began its journey in Chattogram under the visionary leadership of Managing Director Abul Kalam Bhuiyan, pioneering bespoke custom furniture tailored to individual client spaces.
              </p>
            </div>
          </div>

          {/* STEP 2: 2021 (Right Card) */}
          <div className="relative z-10 mb-16 sm:mb-20 flex justify-end">
            <div
              ref={card2Ref}
              className={`w-full md:w-[48%] relative rounded-lg pt-10 pb-7 px-6 sm:px-8 bg-white text-[#2B1E16]  border hover:-translate-y-1 transition-all duration-500 ${
                reachedStep >= 2 ? "border-[#C5A25D]/40 " : "border-[#2B1E16]/10"
              }`}
            >
              {/* Floating Icon overlapping top border */}
              <div className="absolute -top-7 left-6 sm:left-8 z-20 w-14 h-14 rounded-lg bg-gradient-to-tr from-sky-400 to-sky-300 border-4 border-white flex items-center justify-center text-[#132026]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-[#8C6239]/10 text-[#8C6239] text-xs tracking-wider uppercase mb-2">
                2021 · FLAGSHIP STUDIO
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#132026] mb-2.5">
                Opened the Agrabad Showroom
              </h3>
              <p className="text-sm sm:text-[14px] text-[#2B1E16]/75 leading-relaxed">
                Established our flagship luxury physical showroom opposite RAK Ceramics on Agrabad Access Road, allowing clients to experience handcrafted comfort, wood joinery, and premium fabrics firsthand.
              </p>
            </div>
          </div>

          {/* STEP 3: 2024–2025 (Left Card) */}
          <div className="relative z-10 mb-16 sm:mb-20">
            <div
              ref={card3Ref}
              className={`w-full md:w-[48%] relative rounded-lg pt-10 pb-7 px-6 sm:px-8 bg-white text-[#2B1E16]  border hover:-translate-y-1 transition-all duration-500 ${
                reachedStep >= 3 ? "border-[#C5A25D]/40 " : "border-[#2B1E16]/10"
              }`}
            >
              {/* Floating Icon */}
              <div className="absolute -top-7 left-6 sm:left-8 z-20 w-14 h-14 rounded-lg bg-gradient-to-tr from-amber-400 to-amber-300 border-4 border-white flex items-center justify-center text-[#132026]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-[#8C6239]/10 text-[#8C6239] text-xs tracking-wider uppercase mb-2">
                2024–2025 · INTERNATIONAL EXHIBITION
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#132026] mb-2.5">
                Exhibited at International Furniture Fair
              </h3>
              <p className="text-sm sm:text-[14px] text-[#2B1E16]/75 leading-relaxed">
                Showcased our royal hand-carved living and dining suites at the Chattogram International Furniture Fair, earning widespread acclaim from architects, interior designers, and homeowners.
              </p>
            </div>
          </div>

          {/* STEP 4: 2025 (Right Card) */}
          <div className="relative z-10 mb-16 sm:mb-20 flex justify-end">
            <div
              ref={card4Ref}
              className={`w-full md:w-[48%] relative rounded-lg pt-10 pb-7 px-6 sm:px-8 bg-white text-[#2B1E16]  border hover:-translate-y-1 transition-all duration-500 ${
                reachedStep >= 4 ? "border-[#C5A25D]/40 " : "border-[#2B1E16]/10"
              }`}
            >
              {/* Floating Icon */}
              <div className="absolute -top-7 left-6 sm:left-8 z-20 w-14 h-14 rounded-lg bg-gradient-to-tr from-amber-400 to-amber-300 border-4 border-white flex items-center justify-center text-[#132026]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-[#8C6239]/10 text-[#8C6239] text-xs tracking-wider uppercase mb-2">
                2025 · INDUSTRY MEMBERSHIP
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#132026] mb-2.5">
                Member of the Chamber of Commerce
              </h3>
              <p className="text-sm sm:text-[14px] text-[#2B1E16]/75 leading-relaxed">
                Formally inducted into the Chattogram Chamber of Commerce & Industry (CCCI), cementing our reputation as a trusted, compliant leader in bespoke furniture manufacturing and interior styling.
              </p>
            </div>
          </div>

          {/* STEP 5: 2026 (Centered Finale Card) */}
          <div className="relative z-10 flex justify-center">
            <div
              ref={card5Ref}
              className={`w-full md:w-[68%] relative rounded-lg pt-12 pb-8 px-7 sm:px-10 bg-gradient-to-b from-white to-amber-50/50  text-center hover:-translate-y-1 transition-all duration-700 ${
                reachedStep >= 5
                  ? "border-2 border-[#C5A25D] "
                  : "border border-[#2B1E16]/10"
              }`}
            >
              {/* Floating Gold Trophy Icon centered */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-lg bg-gradient-to-tr from-amber-400 via-[#C5A25D] to-amber-200 border-4 border-white flex items-center justify-center text-[#132026]">
                <svg className="w-7 h-7 text-[#132026]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
                </svg>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-[#C5A25D]/20 border border-[#C5A25D]/50 text-[#8C6239] text-xs tracking-wider uppercase mb-3">
                <svg className="w-3.5 h-3.5 text-[#8C6239]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
                </svg>
                <span>2026 · 1ST PRIZE AWARD</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#132026] mb-3">
                Received Nationwide BFIOA Recognition
              </h3>
              <p className="text-sm sm:text-base text-[#2B1E16]/80 leading-relaxed max-w-xl mx-auto">
                Honored nationwide by the Bangladesh Furniture Industry Owners Association (BFIOA) with the 1st Prize Award for excellence in bespoke furniture craftsmanship, design innovation, and client satisfaction.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Milestones;


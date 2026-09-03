"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Can I customize the size, wood, and fabric of any furniture piece?",
    answer:
      "Yes, 100%. We are a bespoke studio, not a catalog retailer. Every sofa, carved royal bed, dining suite, and executive desk can be customized to your precise room dimensions, preferred timber (seasoned solid teak, mahogany, or oak), fabric shades, and polish finish.",
  },
  {
    id: 2,
    question: "How does the free design consultation work?",
    answer:
      "You can book a free consultation online or walk into our Agrabad studio. Our senior interior stylists will review your floor plans or room photos, guide you through material swatches, and develop custom concept sketches tailored to your space at zero charge.",
  },
  {
    id: 3,
    question: "Where is your physical showroom located in Chattogram?",
    answer:
      "Our flagship luxury studio is located on Agrabad Access Road (directly opposite RAK Ceramics), Chattogram. We invite you to visit, test cushion comfort, inspect raw timber joinery, and consult our master designers in person.",
  },
  {
    id: 4,
    question: "What is the typical production and delivery timeline?",
    answer:
      "Because each piece is individually handcrafted from seasoned solid wood, custom orders typically take 15 to 25 days depending on carving complexity. We provide regular WhatsApp progress photos during carving and polishing stages.",
  },
  {
    id: 5,
    question: "Do you provide white-glove delivery and on-site installation?",
    answer:
      "Yes! Every order includes white-glove delivery and professional on-site installation by our trained technicians across Chattogram and nationwide. We ensure every piece is flawlessly set up and leveled in your room before sign-off.",
  },
  {
    id: 6,
    question: "What payment options and warranty do you offer?",
    answer:
      "We offer flexible staged payments (initial booking deposit on sketch confirmation, balance upon delivery inspection), as well as transparent pricing and comprehensive warranties on solid timber structure and craftsmanship.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#2B1E16] py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-[#2B1E16]/10" id="faq">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            {/* Eyebrow */}
            <div className="text-xs tracking-[0.25em] uppercase text-[#C5A25D]">
              FAQS
            </div>

            {/* Display Headline: "Got" (solid) + "Questions?" (hollow outline) */}
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] tracking-tight text-[#132026] leading-[1.08]">
              Got <br />
              <span
                className="text-transparent inline-block mt-1"
                style={{
                  WebkitTextStroke: "1.8px #132026",
                }}
              >
                Questions?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#2B1E16]/75 font-light leading-relaxed max-w-md">
              Find answers to the most common questions about our bespoke furniture process, wood selection, showroom visits, and white-glove delivery.
            </p>

            {/* Quick Contact Link */}
            <div className="pt-2">
              <Link
                href="https://chat.whatsapp.com/FTk1VXPtsG8J3yJSiTHmZy?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#8C6239] hover:text-[#C5A25D] transition-colors group"
              >
                <span>Need custom styling advice? WhatsApp our team</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Accordion Pills List */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-lg transition-all duration-300 border ${
                    isOpen
                      ? "bg-white border-[#C5A25D]/60"
                      : "bg-white/70 border-[#2B1E16]/10 hover:border-[#C5A25D]/40 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-[17px] font-medium text-[#132026] tracking-wide leading-snug">
                      {faq.question}
                    </span>

                    {/* Plus / Minus Circular Toggle Button */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#C5A25D] border-[#C5A25D] text-[#132026] rotate-45"
                          : "bg-[#FAF8F5] border-[#2B1E16]/15 text-[#2B1E16]/70"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-5 pt-1 text-sm sm:text-[14.5px] text-[#2B1E16]/80 font-light leading-relaxed border-t border-[#2B1E16]/10 mt-1 animate-in fade-in duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;


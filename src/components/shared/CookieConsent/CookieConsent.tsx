"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const savedPreference = localStorage.getItem("hfm_cookie_consent");
      if (!savedPreference) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Graceful fallback if localStorage is disabled in browser
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("hfm_cookie_consent", "accepted");
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("hfm_cookie_consent", "declined");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent notice"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-md z-50 bg-[#132026]/95 backdrop-blur-md text-[#FAF8F5] border border-[#C5A25D]/40 rounded-lg p-5 shadow-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 font-sans"
    >
      <div className="flex items-start gap-3.5">
        {/* Subtle Gold Shield / Cookie Icon */}
        <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/15 flex items-center justify-center text-[#C5A25D] shrink-0 mt-0.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>

        <div className="space-y-2 flex-1">
          <h4 className="text-xs uppercase tracking-wider text-[#C5A25D] font-medium">
            Cookie Concern & Privacy
          </h4>
          <p className="text-xs text-[#FAF8F5]/80 leading-relaxed">
            We use essential cookies to maintain your browsing session, preferences, and portfolio interactions. For more details, review our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#C5A25D] hover:underline font-medium inline"
            >
              Privacy & Cookie Policy
            </Link>
            .
          </p>

          <div className="pt-2 flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-[#C5A25D] hover:bg-[#b5924d] text-[#132026] text-xs font-medium uppercase tracking-wider transition-colors"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-3.5 py-1.5 rounded-lg border border-white/20 hover:border-white/40 text-white/75 hover:text-white text-xs uppercase tracking-wider transition-colors"
            >
              Decline
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={handleDecline}
          className="text-white/40 hover:text-white text-xs p-1"
          aria-label="Dismiss cookie banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;

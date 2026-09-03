import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CookieConsent } from "@/components/shared/CookieConsent/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Heaven Furniture Mart — Bespoke Luxury Furniture & Interior Styling | Chattogram",
  description:
    "Designed. Crafted. Customized. Chattogram's premier bespoke furniture & interior styling studio. Handcrafted living room, bedroom, dining, and custom pieces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-[#2B1E16]">
        {children}
        <CookieConsent />
        <Script
          src="https://api.labtoai.com/widget.js"
          data-api-key="aiw_live_7b57d94c12af7286e48f8b334e0f34f2f39c4f63ab006c05"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}


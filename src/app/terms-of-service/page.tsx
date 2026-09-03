import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Heaven Furniture Mart",
  description:
    "Review the terms and conditions for bespoke furniture manufacturing, delivery, warranty, and showroom services at Heaven Furniture Mart.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2B1E16] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#8C6239] uppercase tracking-wider mb-8">
          <Link href="/" className="hover:text-[#132026] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#132026] font-medium">Terms of Service</span>
        </nav>

        {/* Page Header */}
        <div className="border-b border-[#2B1E16]/10 pb-8 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C6239] font-medium block mb-2">
            Client Agreement & Terms
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#132026] leading-tight mb-4">
            Terms of <span className="text-[#8C6239]">Service</span>
          </h1>
          <p className="text-sm sm:text-base text-[#2B1E16]/75 max-w-2xl leading-relaxed">
            Effective: September 2026. These terms govern custom bespoke orders, showroom appointments, material guarantees, and delivery services provided by Heaven Furniture Mart in Chattogram, Bangladesh.
          </p>
        </div>

        {/* Terms Content Sections */}
        <div className="space-y-10 text-sm sm:text-[15px] text-[#2B1E16]/80 leading-relaxed">
          
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              1. Bespoke Custom Orders & Specifications
            </h2>
            <p>
              Each piece of custom furniture crafted by Heaven Furniture Mart is individually built according to client-approved dimensions, wood species, and finish samples. Before production commences:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Detailed design drawings, 3D renderings, and specifications must be signed off by the client.</li>
              <li>On-site measurements conducted by our technicians ensure proper clearance through doorways, elevators, and stairwells.</li>
              <li>Modifications requested after timber milling has commenced may incur additional material or labor charges.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              2. Natural Timber Character & Seasoning
            </h2>
            <p>
              We exclusively utilize properly seasoned, natural solid wood (including solid Teak, Chittagong Gamari, and premium hardwoods). Natural grain variations, organic knots, and subtle color nuances are authentic hallmarks of genuine timber craftsmanship, distinguishing hand-built bespoke furniture from artificial veneer or particle board.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              3. Quotation, Payments & Production Timeline
            </h2>
            <p>
              Written quotations remain valid for 15 days from the date of issue. Upon formal order confirmation and deposit payment, work commences in our workshop. Standard bespoke fabrication timelines range from 2 to 4 weeks depending on carved detailing, upholstery hand-tailoring, and lacquer curing.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              4. White-Glove Delivery & Installation
            </h2>
            <p>
              We provide professional white-glove delivery across Chattogram metropolitan area and coordinated transport across all 64 districts of Bangladesh. Our trained delivery personnel assemble and place each item into its intended room, removing all protective transit packaging upon completion.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-lg border border-[#2B1E16]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#132026]">
              5. Warranty & Structural Guarantee
            </h2>
            <p>
              Heaven Furniture Mart stands firmly behind our joinery and structural integrity:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>10-Year Guarantee against internal wood borers, termites, and seasoning defects on all solid timber frames.</li>
              <li>5-Year Warranty covering mortise-and-tenon structural joints and internal framing.</li>
              <li>Complimentary showroom inspection and servicing consultation upon request.</li>
            </ul>
          </section>

        </div>

        {/* Back to Home CTA */}
        <div className="pt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C5A25D] text-[#132026] text-xs uppercase tracking-wider font-medium hover:bg-[#b08d47] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}

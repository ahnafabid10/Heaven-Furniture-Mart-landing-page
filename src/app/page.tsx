import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "@/components/HomePage/Banner";
import AboutUs from "@/components/HomePage/AboutUs";
import CategoryGrid from "@/components/HomePage/CategoryGrid";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";
import StoreLocation from "@/components/HomePage/StoreLocation";
import Milestones from "@/components/HomePage/Milestones";
import FounderQuote from "@/components/HomePage/FounderQuote";
import Testimonials from "@/components/HomePage/Testimonials";
import FAQ from "@/components/HomePage/FAQ";
import RequestQuote from "@/components/HomePage/RequestQuote";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2B1E16]">
      <Navbar />
      <main className="flex-1 w-full">
        {/* 1. Hero Introduction */}
        <Banner />

        {/* 2. Brand Identity & Bespoke Story */}
        <AboutUs />

        {/* 3. Curated Product Collections */}
        <CategoryGrid />

        {/* 4. Craftsmanship & Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Physical Flagship Showroom & Google Maps */}
        <StoreLocation />

        {/* 6. Company Journey & Recognition Milestones */}
        <Milestones />

        {/* 7. Founder & Managing Director Leadership Quote */}
        <FounderQuote />

        {/* 8. Client Testimonials & Social Proof */}
        <Testimonials />

        {/* 9. Frequently Asked Questions */}
        <FAQ />

        {/* 10. Direct Inquiry & WhatsApp Consultation CTA */}
        <RequestQuote />
      </main>
      <Footer />
    </div>
  );
}


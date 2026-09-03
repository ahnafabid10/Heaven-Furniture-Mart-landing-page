import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "@/components/HomePage/Banner";
import AboutUs from "@/components/HomePage/AboutUs";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";
import FounderQuote from "@/components/HomePage/FounderQuote";
import Milestones from "@/components/HomePage/Milestones";
import CategoryGrid from "@/components/HomePage/CategoryGrid";
import Testimonials from "@/components/HomePage/Testimonials";
import FAQ from "@/components/HomePage/FAQ";
import RequestQuote from "@/components/HomePage/RequestQuote";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2B1E16]">
      <Navbar />
      <main className="flex-1 w-full">
        <Banner />
        <AboutUs />
        <WhyChooseUs />
        <FounderQuote />
        <Milestones />
        <CategoryGrid />
        <Testimonials />
        <FAQ />
        <RequestQuote />
      </main>
      <Footer />
    </div>
  );
}

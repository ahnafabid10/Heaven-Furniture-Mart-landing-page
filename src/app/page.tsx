import Navbar from "@/components/shared/Navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 max-w-[1560px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-neutral-100 rounded-xl p-12 text-center text-neutral-600">
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">Navbar Preview</h1>
          <p className="text-sm">Ashley-style navigation bar loaded above.</p>
        </div>
      </main>
    </div>
  );
}

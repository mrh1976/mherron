import WorkedOnSection from '@/components/WorkedOnSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-8 py-32 min-h-[85vh] flex items-center md:px-4 md:py-24">
        <div className="max-w-[900px]">
          <h1 className="font-inter text-[3.5rem] font-bold leading-[1.1] text-gray-900 tracking-tight mb-8 md:text-[2.5rem]">
            Building products and campaigns at the intersection of technology and culture
          </h1>
          <p className="font-inter text-xl font-normal leading-relaxed text-gray-600 mb-12 max-w-[700px] md:text-lg">
            Marketing leader and builder with experience launching digital products, 
            brand platforms, and integrated campaigns across Web3, sports, fintech, 
            and consumer technology.
          </p>
          <div className="flex gap-8 items-center md:flex-col md:items-start md:gap-4">
            <a 
              href="#worked-on" 
              className="inline-block px-8 py-4 bg-[#FFA600] text-white font-inter text-base font-semibold rounded-lg transition-all duration-200 hover:bg-[#e69500] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,166,0,0.2)]"
            >
              View Work
            </a>
            <a 
              href="/about" 
              className="font-inter text-base font-medium text-gray-900 transition-colors duration-200 hover:text-[#FFA600]"
            >
              About Me →
            </a>
          </div>
        </div>
      </section>

      {/* Worked On Section */}
      <div id="worked-on">
        <WorkedOnSection />
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { siteContent } from "@/content";
import WorkedOnSection from "@/components/WorkedOnSection";

// Count-up animation hook
function useCountUp(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setTimeout(() => {
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              
              setCount(Math.floor(easeOutQuart * end));
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setHasAnimated(true);
              }
            };
            animate();
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, delay, hasAnimated]);

  return { count, ref };
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Count-up hooks for each stat with staggered delays (slower)
  const stat1 = useCountUp(20, 2200, 0);
  const stat2 = useCountUp(6, 2200, 150);
  const stat3 = useCountUp(300, 2500, 300);
  const stat4 = useCountUp(50, 2200, 450);
  const stat5 = useCountUp(100, 2400, 600);
  const stat6 = useCountUp(30, 2200, 750);
  
  // Special animation for unicorn stat - counts in sequence
  const [unicornVisible, setUnicornVisible] = useState(false);
  const unicornRef = useRef<HTMLDivElement>(null);
  const [unicornStart, setUnicornStart] = useState(0);
  const [unicornEnd, setUnicornEnd] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !unicornVisible) {
          setUnicornVisible(true);
          
          // Animate first number ($12M)
          const startTime1 = Date.now();
          const animate1 = () => {
            const elapsed = Date.now() - startTime1;
            const progress = Math.min(elapsed / 1500, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setUnicornStart(Math.floor(easeOutQuart * 12));
            
            if (progress < 1) {
              requestAnimationFrame(animate1);
            } else {
              // Show arrow and start second animation
              setTimeout(() => {
                setShowArrow(true);
                
                // Animate second number ($1.35B)
                const startTime2 = Date.now();
                const animate2 = () => {
                  const elapsed = Date.now() - startTime2;
                  const progress = Math.min(elapsed / 1500, 1);
                  const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                  setUnicornEnd(Math.floor(easeOutQuart * 135));
                  
                  if (progress < 1) {
                    requestAnimationFrame(animate2);
                  }
                };
                animate2();
              }, 200);
            }
          };
          animate1();
        }
      },
      { threshold: 0.3 }
    );

    if (unicornRef.current) {
      observer.observe(unicornRef.current);
    }

    return () => observer.disconnect();
  }, [unicornVisible]);

  const getLogoFilename = (jobId: string) => {
    if (jobId === "herron-llc") return "MHlogo-h.png";
    return `${jobId}.png`;
  };

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2a2927]">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Image src="/MH-logo.png" alt="MH" width={75} height={75} />
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[10px] uppercase tracking-widest font-medium">
                  Availability
                </span>
                <span className="text-white/80 text-sm">
                  Available for consulting
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white text-2xl font-thin"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#2a2927] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-8 py-6">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white py-3 hover:text-yellow-400 transition"
              >
                About Me
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white py-3 hover:text-yellow-400 transition"
              >
                Experience
              </a>
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white py-3 hover:text-yellow-400 transition"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white py-3 hover:text-yellow-400 transition"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-40 pb-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[68px] md:text-[80px] font-[800] mb-0 leading-[1.05] tracking-[-4.16px]">
            Turn Complex Marketing Ideas
            <br />
            Into Measurable Results
            <span className="text-yellow-400">.</span>
          </h1>

          <div className="relative mx-auto mb-0 w-[850px] h-[750px] overflow-hidden -mt-20">
            <Image
              src="/MikeHerronHeadshot2026.png"
              alt="Mike Herron"
              width={850}
              height={1000}
              className="w-full h-auto object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-50% to-white pointer-events-none"></div>
          </div>

          <p className="relative z-10 text-[21px] text-[#6b6b6b] max-w-2xl mx-auto mb-10 leading-relaxed -mt-24">
            I&apos;m a marketing executive with 20+ years of experience and a
            decade as a CMO helping technology and fintech companies grow. I
            work with founders and leadership teams to diagnose what&apos;s holding
            marketing back and build the strategy and positioning needed to
            create consistent growth.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-80">
              <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 5L8 9L14 5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Schedule A Free Marketing Audit
          </a>
        </div>
      </section>

      <section className="py-20 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          {/* Top Row - 4 Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12 border-b border-white/10">
            <div className="text-center" ref={stat1.ref}>
              <div className="text-4xl md:text-5xl font-[800] mb-3 tracking-tight">{stat1.count}<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Years Experience
              </div>
            </div>
            <div className="text-center" ref={stat2.ref}>
              <div className="text-4xl md:text-5xl font-[800] mb-3 tracking-tight">{stat2.count}<span className="text-yellow-400">x</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                First Marketing Hire
              </div>
            </div>
            <div className="text-center" ref={stat3.ref}>
              <div className="text-4xl md:text-5xl font-[800] mb-3 tracking-tight">${stat3.count}M<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Funds Raised
              </div>
            </div>
            <div className="text-center" ref={stat4.ref}>
              <div className="text-4xl md:text-5xl font-[800] mb-3 tracking-tight">{stat4.count}<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Global Brands
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="text-center" ref={unicornRef}>
              <div className="text-3xl md:text-4xl font-[800] mb-3 tracking-tight leading-tight">
                ${unicornStart}M
                <span className={`text-yellow-400 transition-opacity duration-500 ${showArrow ? 'opacity-100' : 'opacity-0'}`}>→</span>
                <span className={`transition-opacity duration-500 ${showArrow ? 'opacity-100' : 'opacity-0'}`}>
                  ${(unicornEnd / 100).toFixed(2)}B
                </span>
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Unicorn Valuation
              </div>
            </div>
            <div className="text-center" ref={stat5.ref}>
              <div className="text-3xl md:text-4xl font-[800] mb-3 tracking-tight">{stat5.count}<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Team Members Hired
              </div>
            </div>
            <div className="text-center" ref={stat6.ref}>
              <div className="text-3xl md:text-4xl font-[800] mb-3 tracking-tight">{stat6.count}<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Product Launches
              </div>
            </div>
          </div>

          {/* 4 Perspectives Footer */}
          <div className="pt-12 border-t border-white/10 text-center">
            <div className="text-[11px] uppercase tracking-widest text-white/50 mb-3">
              Experience
            </div>
            <div className="text-sm md:text-base text-white/80 flex items-center justify-center gap-3 flex-wrap">
              <span>Client Side</span>
              <span className="text-yellow-400">|</span>
              <span>Agency Side</span>
              <span className="text-yellow-400">|</span>
              <span>Consultancy</span>
              <span className="text-yellow-400">|</span>
              <span>Entrepreneur</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[48px] md:text-[56px] font-[800] mb-12 leading-[1.05] tracking-[-2.5px]">
            About Me<span className="text-yellow-400">.</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2">
              <p className="text-gray-500 italic text-sm leading-relaxed">
                I&apos;ve built my career by asking, &quot;Why are we doing this&quot;
                and &quot;What does success look like.&quot;
              </p>
            </div>
            <div className="md:col-span-3 text-[#6b6b6b] text-[17px] leading-relaxed space-y-4">
              {siteContent.about.text.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Left Column - Title & Description */}
            <div className="md:col-span-2">
              <h2 className="text-[48px] md:text-[56px] font-[800] mb-6 leading-[1.05] tracking-[-2.5px]">
                Worked for<span className="text-yellow-400">.</span>
              </h2>
              <p className="text-[#6b6b6b] text-[17px] leading-relaxed">
                I have partnered with world class teams to deliver high impact
                campaigns, product launches, and brand experiences across a wide
                range of industries.
              </p>
            </div>

            {/* Right Column - Job Entries */}
            <div className="md:col-span-3 space-y-20">
              {siteContent.experience.map((job) => (
                <div key={job.id}>
                  <div className="mb-6">
                    {/* Logo on its own line */}
                    {job.id !== "earlier-career" ? (
                      <div className="mb-4">
                        <Image
                          src={`/images/${getLogoFilename(job.id)}`}
                          alt={job.company}
                          width={120}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="mb-4 h-[40px]"></div>
                    )}

                    {/* Company, Role, Date */}
                    <div>
                      <h3 className="text-xl font-medium mb-1">
                        {job.company}, {job.role.split(" | ")[0]}
                      </h3>
                      <div className="text-sm text-gray-500 mb-4">{job.period}</div>
                    </div>
                  </div>

                  <p className="text-[#6b6b6b] text-[17px] mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                    Top Level Highlights
                  </div>
                  <ul className="space-y-2 text-sm text-[#6b6b6b]">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="pl-4 relative">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Left Column - Sticky */}
            <div className="md:col-span-2 md:sticky md:top-32 md:self-start">
              <h2 className="text-[48px] md:text-[56px] font-[800] mb-6 leading-[1.05] tracking-[-2.5px]">
                Worked with<span className="text-yellow-400">.</span>
              </h2>
              <p className="text-[#6b6b6b] text-[17px] leading-relaxed mb-6">
                I have had the privilege of working with some of the biggest and
                most influential brands in the world. These partnerships brought me
                into conversations that shaped global sports, luxury, technology,
                and consumer culture, and gave me the opportunity to help launch
                products, tell powerful stories, and create marketing that delivers
                real business results.
              </p>
              
              <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                Other Notable Companies
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#6b6b6b]">
                <div>Formula 1</div>
                <div>Zurich</div>
                <div>Formula E</div>
                <div>Nintendo</div>
                <div>State Street</div>
                <div>Lucasfilms</div>
                <div>Blackrock</div>
                <div>CAA</div>
                <div>S&amp;P</div>
                <div>MLB</div>
                <div>Choice Hotels</div>
                <div>NBA</div>
                <div>New England Patriots</div>
                <div>NCAA</div>
                <div>Miami Heat</div>
                <div>NFL</div>
                <div>Chicago White Sox</div>
                <div>DJI</div>
                <div>SummerFest</div>
                <div>Facebook</div>
                <div>Twitter</div>
                <div>MasterCard</div>
                <div>Yuga Labs</div>
                <div>Uniswap</div>
                <div>Garmin</div>
              </div>
            </div>

            {/* Right Column - Scrollable */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-12 mb-16">
                {[
                  { name: "H&R Block", file: "hrb.png" },
                  { name: "Patriots", file: "Pats.png" },
                  { name: "State Street", file: "statestreet.png" },
                  { name: "United", file: "united.png" },
                  { name: "Samsung", file: "samsung.png" },
                  { name: "Tiffany & Co.", file: "tiffany.png" },
                  { name: "AT&T", file: "att.png" },
                  { name: "Disney", file: "disney.png" },
                  { name: "Bloomberg", file: "bloomberg.png" },
                  { name: "Google", file: "google.png" },
                ].map((brand) => (
                  <div key={brand.name} className="flex items-center justify-center h-16">
                    <Image
                      src={`/images/${brand.file}`}
                      alt={brand.name}
                      width={120}
                      height={60}
                      className="w-auto h-auto max-w-full max-h-full object-contain opacity-40 hover:opacity-70 transition"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkedOnSection />

      <section id="contact" className="py-32 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[48px] md:text-[56px] font-[800] mb-6 leading-[1.05] tracking-[-2.5px]">
            Let&apos;s work <span className="text-gray-300">together</span>
            <span className="text-yellow-400">.</span>
          </h2>
          <p className="text-base mb-16 flex items-center justify-center gap-3">
            <span>Audits</span>
            <span className="text-yellow-400">|</span>
            <span>Consulting</span>
            <span className="text-yellow-400">|</span>
            <span>Fractional</span>
            <span className="text-yellow-400">|</span>
            <span>Full-Time</span>
            <span className="text-yellow-400">|</span>
            <span>Board Member</span>
          </p>
          <form className="max-w-3xl mx-auto flex gap-4 mb-8">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-6 py-4 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-6 py-4 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-gray-400"
            />
          </form>
          <button className="px-12 py-4 bg-[#2a2927] text-white rounded-full text-sm hover:bg-gray-800 transition">
            Submit
          </button>
        </div>
      </section>

      <footer className="py-12 px-8 bg-[#2a2927]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <Image
              src="/MH-logo.png"
              alt="MH"
              width={32}
              height={32}
            />
          </div>
          <div className="text-xs text-white/60 leading-relaxed mb-8">
            All trademarks, logos, and brand names displayed on this website are the property of their respective owners. They are used here strictly for identification and informational purposes to represent companies I have worked for or partnered with throughout my career. Their appearance does not imply any endorsement, approval, sponsorship, or affiliation with this website or with me personally. Any references to past work, partnerships, or collaborations are historical in nature and are presented solely to provide context regarding my professional experience.
          </div>
          <div className="flex justify-between items-center pt-8 border-t border-white/10">
            <p className="text-xs text-white/50">
              ©{new Date().getFullYear()} Michael Herron LLC
            </p>
            <p className="text-xs text-white/50">
              Designed in partnership with <span className="text-white">nzmotiondesign.com</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

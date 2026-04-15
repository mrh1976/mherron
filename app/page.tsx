"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import WorkedOnSection from "@/components/WorkedOnSection";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for nav background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Track active section
  useEffect(() => {
    const sections = ['services', 'work', 'about'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Michael Herron",
            "jobTitle": "Chief Marketing Officer",
            "url": "https://mherron.com",
            "sameAs": [
              "https://www.linkedin.com/in/mherron54"
            ],
            "alumniOf": [
              { "@type": "Organization", "name": "Kadena" },
              { "@type": "Organization", "name": "Chain" },
              { "@type": "Organization", "name": "Lukka" }
            ],
            "knowsAbout": [
              "Strategic Marketing",
              "Brand Strategy",
              "Go-to-Market Planning",
              "Product Marketing",
              "Growth Marketing"
            ]
          })
        }}
      />

      {/* NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#2a2927]' : 'bg-[#2a2927]'} text-white`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/MH-logo.png"
                alt="Michael Herron Logo"
                width={40}
                height={40}
                className="w-10 h-auto"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm hover:text-yellow-400 transition ${activeSection === 'services' ? 'text-yellow-400' : ''}`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className={`text-sm hover:text-yellow-400 transition ${activeSection === 'work' ? 'text-yellow-400' : ''}`}
              >
                Work
              </button>
              <Link
                href="/experience"
                className="text-sm hover:text-yellow-400 transition"
              >
                Experience
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm hover:text-yellow-400 transition ${activeSection === 'about' ? 'text-yellow-400' : ''}`}
              >
                About
              </button>
              <a
                href="https://calendly.com/mherron54/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-yellow-400 text-black text-sm font-[600] rounded-md hover:bg-yellow-300 transition-colors"
              >
                Book Free Audit
              </a>
            </nav>

            {/* Availability Badge (Desktop only) */}
            <div className="hidden xl:flex items-center gap-2 text-xs">
              <span className="uppercase tracking-widest text-white/50">Availability</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Available for consulting
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white text-2xl"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-left hover:text-yellow-400 transition"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('work')}
                  className="text-sm text-left hover:text-yellow-400 transition"
                >
                  Work
                </button>
                <Link
                  href="/experience"
                  className="text-sm hover:text-yellow-400 transition"
                >
                  Experience
                </Link>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-left hover:text-yellow-400 transition"
                >
                  About
                </button>
                <a
                  href="https://calendly.com/mherron54/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-yellow-400 text-black text-sm font-[600] rounded-md hover:bg-yellow-300 transition-colors text-center"
                >
                  Book Free Audit
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[42px] md:text-[68px] lg:text-[80px] font-[800] mb-0 leading-[1.1] md:leading-[1.05] tracking-[-4.16px]">
            Turn Complex Marketing Ideas
            <br />
            Into Measurable Results
            <span className="text-yellow-400">.</span>
          </h1>

          <div className="relative mx-auto mb-0 w-full max-w-[850px] h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden -mt-12 md:-mt-20">
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

          <p className="relative z-10 text-[19px] md:text-[21px] text-[#6b6b6b] max-w-2xl mx-auto mb-10 leading-relaxed -mt-16 md:-mt-24">
            I&apos;m a marketing executive with 20+ years of experience and a
            decade as a CMO helping technology and fintech companies grow. I
            work with founders and leadership teams to diagnose what&apos;s holding
            marketing back and build the strategy and positioning needed to
            create consistent growth.
          </p>

          <a
            href="https://calendly.com/mherron54/30min"
            target="_blank"
            rel="noopener noreferrer"
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

      {/* STATS SECTION */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12 border-b border-white/10">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-[800] mb-3 tracking-tight">20<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-[800] mb-3 tracking-tight">6<span className="text-yellow-400">x</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                First Marketing Hire
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-[800] mb-3 tracking-tight">$300M<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Funds Raised
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-[800] mb-3 tracking-tight">50<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Global Brands
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-[800] mb-3 tracking-tight leading-tight">
                $12M<span className="text-yellow-400">→</span>$1.35B
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Unicorn Valuation
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-[800] mb-3 tracking-tight">100<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Team Members Hired
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-[800] mb-3 tracking-tight">30<span className="text-yellow-400">+</span></div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">
                Product Launches
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-12 border-t border-white/10 text-center">
            <div className="text-[11px] uppercase tracking-widest text-white/50 mb-3">
              Experience
            </div>
            <div className="text-sm md:text-lg text-white/80 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
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

      {/* HOW I CAN HELP SECTION - MOVED UP */}
      <section id="services" className="py-24 md:py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-8 md:mb-12 leading-[1.05] tracking-[-2.5px]">
            How I Can Help<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-[#6b6b6b] text-[17px] md:text-[19px] leading-relaxed mb-12 max-w-3xl">
            I&apos;m available now for consulting engagements, fractional CMO roles, and strategic advisory work. Here&apos;s how I can help:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Fractional CMO & Marketing Leadership
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                Part-time executive marketing leadership for companies that need strategic direction without a full-time hire. I build systems, lead teams, and drive measurable growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Go-to-Market Strategy
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                Product launch planning, market positioning, messaging frameworks, and competitive strategy. From concept to execution, I help you enter markets with clarity and momentum.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Brand Strategy & Repositioning
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                Complete brand development or strategic repositioning for growth. I&apos;ve led rebrands for blockchain companies, enterprise SaaS, and consumer brands—always with measurable business outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Marketing Team Building
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                Building your first marketing function or scaling an existing team. I hire, structure, and operationalize marketing organizations that deliver consistent results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg md:col-span-2">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Partnership Strategy & Negotiation
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                From Fortune 500 partnerships to professional sports sponsorships, I identify opportunities, negotiate terms, and activate partnerships that drive revenue and visibility.
              </p>
            </div>
          </div>

          {/* BIG CTA */}
          <div className="bg-black text-white p-12 rounded-lg text-center">
            <h3 className="text-[28px] md:text-[32px] font-[800] mb-4 tracking-tight">
              Start With A Free Marketing Audit
            </h3>
            <p className="text-white/80 text-[17px] leading-relaxed mb-8 max-w-2xl mx-auto">
              30-minute strategy call + written recommendations. We&apos;ll identify what&apos;s holding your marketing back and create a clear action plan—no commitment required.
            </p>
            <a
              href="https://calendly.com/mherron54/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-black text-sm font-[600] rounded-md hover:bg-yellow-300 transition-colors"
            >
              Book Your Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-80">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 md:py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-12 md:mb-16 leading-[1.05] tracking-[-2.5px] text-center">
            What People Say<span className="text-yellow-400">.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-[#6b6b6b] text-[17px] leading-relaxed mb-6 italic">
                &quot;Mike is second to none as a marketing leader. He keeps teams aligned, stakeholders informed, and stays focused on outcomes that matter. His command of the CMO role is universally impressive, and his honesty, transparency, and execution consistently show in the results.&quot;
              </p>
              <div className="text-sm">
                <div className="font-[600]">CEO & Co-Founder</div>
                <div className="text-gray-500">Web3 Infrastructure Company</div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-[#6b6b6b] text-[17px] leading-relaxed mb-6 italic">
                &quot;Mike completely transformed how we think about our brand and positioning. His work went far beyond a typical rebrand. He defined our ideal customer profile, clarified our messaging, and created a strategic foundation that guided every aspect of our new identity. The result was a successful rebrand that truly reflects who we are and how we serve our clients. I was blown away by the depth and quality of his work.&quot;
              </p>
              <div className="text-sm">
                <div className="font-[600]">Founder</div>
                <div className="text-gray-500">Technical Recruitment Firm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKED ON (PORTFOLIO) */}
      <WorkedOnSection />

      {/* ABOUT SECTION - MOVED DOWN & SHORTENED */}
      <section id="about" className="py-24 md:py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-8 md:mb-12 leading-[1.05] tracking-[-2.5px]">
            About Me<span className="text-yellow-400">.</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            <div className="md:col-span-2">
              <p className="text-gray-500 italic text-sm leading-relaxed">
                I&apos;ve built my career by asking, &quot;Why are we doing this&quot;
                and &quot;What does success look like.&quot;
              </p>
            </div>
            <div className="md:col-span-3 text-[#6b6b6b] text-[15px] md:text-[17px] leading-relaxed space-y-4">
              <p>
                I&apos;ve spent 25 years helping technology and fintech companies solve their toughest marketing challenges—from launching products that drove $15M+ in revenue to scaling communities by 200%+ to positioning companies for unicorn valuations.
              </p>
              <p>
                I&apos;m currently available for consulting engagements, fractional CMO work, and strategic advisory projects. I work fast, I focus on results, and I can start immediately.
              </p>
              <p>
                <Link 
                  href="/experience" 
                  className="text-black font-[600] hover:text-yellow-600 transition inline-flex items-center gap-2"
                >
                  View Full Experience
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKED WITH (BRAND LOGOS) */}
      <section className="py-24 md:py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-6 leading-[1.05] tracking-[-2.5px]">
                Worked with<span className="text-yellow-400">.</span>
              </h2>
              <p className="text-[#6b6b6b] text-[15px] md:text-[17px] leading-relaxed mb-6">
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

            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 gap-8 md:gap-12 mb-16">
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
                  <div key={brand.name} className="flex items-center justify-center h-12 md:h-16">
                    <Image
                      src={`/images/${brand.file}`}
                      alt={`${brand.name} logo - client of Michael Herron`}
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

      {/* FINAL CTA - REPLACES CONTACT FORM */}
      <section className="py-24 md:py-32 px-8 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-6 leading-[1.05] tracking-[-2.5px]">
            Ready To Get Started<span className="text-yellow-400">?</span>
          </h2>
          <p className="text-white/80 text-[17px] md:text-[19px] leading-relaxed mb-12 max-w-2xl mx-auto">
            Book a free 30-minute marketing audit and let's identify what's holding your marketing back.
          </p>
          <a
            href="https://calendly.com/mherron54/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-yellow-400 text-black text-base font-[600] rounded-md hover:bg-yellow-300 transition-colors"
          >
            Book Your Free Audit
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="opacity-80">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="mt-8 text-sm text-white/60">
            Questions? Email{" "}
            <a href="mailto:mike@mherron.com" className="text-yellow-400 hover:text-yellow-300">
              mike@mherron.com
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <Image
            src="/MH-logo.png"
            alt="Michael Herron Logo"
            width={40}
            height={40}
            className="w-10 h-auto mx-auto mb-6"
          />
          <p className="text-xs text-gray-500 leading-relaxed max-w-3xl mx-auto mb-4">
            All trademarks, logos, and brand names displayed on this website are the property of their respective owners. 
            They are used here strictly for identification and informational purposes to represent companies I have worked 
            for or partnered with throughout my career. Their appearance does not imply any endorsement, approval, 
            sponsorship, or affiliation with this website or with me personally. Any references to past work, partnerships, 
            or collaborations are historical in nature and are presented solely to provide context regarding my professional experience.
          </p>
          <p className="text-xs text-gray-400 mb-2">©2026 Michael Herron LLC</p>
          <p className="text-xs text-gray-400">
            Designed in partnership with{" "}
            <a href="https://nzmotiondesign.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              nzmotiondesign.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

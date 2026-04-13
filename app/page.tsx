"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { siteContent } from "@/content";
import WorkedOnSection from "@/components/WorkedOnSection";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thanks for reaching out! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
        setFormMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Failed to send message. Please try again.');
    }
  };

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
    const sections = ['about', 'experience', 'work', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px', // Trigger when section is 20% from top
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
      const offsetTop = element.offsetTop - 100; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const getLogoFilename = (jobId: string) => {
    if (jobId === "herron-llc") return "MHlogo-h.png";
    return `${jobId}.png`;
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
              "Product Launch",
              "Chief Marketing Officer",
              "Web3 Marketing",
              "Blockchain Marketing",
              "Enterprise Marketing"
            ]
          })
        }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#2a2927] shadow-lg' : 'bg-[#2a2927]'
      }`}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="cursor-pointer"
            aria-label="Scroll to top"
          >
            <Image src="/MH-logo.png" alt="Michael Herron Logo" width={75} height={75} />
          </button>

          {/* Centered Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-white text-sm uppercase tracking-widest transition-colors ${
                activeSection === 'about' ? 'text-yellow-400' : 'hover:text-yellow-400'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-white text-sm uppercase tracking-widest transition-colors ${
                activeSection === 'experience' ? 'text-yellow-400' : 'hover:text-yellow-400'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className={`text-white text-sm uppercase tracking-widest transition-colors ${
                activeSection === 'work' ? 'text-yellow-400' : 'hover:text-yellow-400'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-white text-sm uppercase tracking-widest transition-colors ${
                activeSection === 'contact' ? 'text-yellow-400' : 'hover:text-yellow-400'
              }`}
            >
              Contact
            </button>
          </div>

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

            {/* Hamburger - Hidden on Desktop */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white text-2xl font-thin transition-transform"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#2a2927] border-t border-white/10 animate-in slide-in-from-top duration-300">
            <div className="max-w-7xl mx-auto px-8 py-6">
              <button
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left text-white py-3 transition-colors ${
                  activeSection === 'about' ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className={`block w-full text-left text-white py-3 transition-colors ${
                  activeSection === 'experience' ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className={`block w-full text-left text-white py-3 transition-colors ${
                  activeSection === 'work' ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left text-white py-3 transition-colors ${
                  activeSection === 'contact' ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* RESPONSIVE FIX: Hero text and image sizing */}
      <section id="home" className="pt-40 pb-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
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

      {/* RESPONSIVE FIX: Stats section grid and font sizes */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          {/* Top Row - 4 Stats - RESPONSIVE: 1 col mobile, 2 cols small, 4 cols desktop */}
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

          {/* Bottom Row - 3 Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Unicorn stat - static */}
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

          {/* 4 Perspectives Footer */}
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

      {/* RESPONSIVE FIX: Section title sizing */}
      <section id="about" className="py-24 md:py-32 px-8">
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
                I&apos;ve built marketing organizations from the ground up for companies ranging from early-stage startups to billion-dollar enterprises across SaaS, FinTech, blockchain, and telecommunications. Whether it&apos;s launching new products, negotiating major partnerships, or scaling high-performing teams, I focus on creating marketing systems that deliver measurable, sustainable growth.
              </p>
              <p>
                I&apos;m currently available for consulting engagements, fractional CMO work, and strategic advisory projects. I work fast, I focus on results, and I can start immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Can Help Section - NEW */}
      <section className="py-24 md:py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-8 md:mb-12 leading-[1.05] tracking-[-2.5px]">
            How I Can Help<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-[#6b6b6b] text-[17px] md:text-[19px] leading-relaxed mb-12 max-w-3xl">
            I&apos;m available now for consulting engagements, fractional CMO roles, and strategic advisory work. Here&apos;s how I can help:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Fractional CMO & Marketing Leadership
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                Part-time executive marketing leadership for companies that need strategic direction without a full-time hire. I build systems, lead teams, and drive measurable growth.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Go-to-Market Strategy
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                Product launch planning, market positioning, messaging frameworks, and competitive strategy. From concept to execution, I help you enter markets with clarity and momentum.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Brand Strategy & Repositioning
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                Complete brand development or strategic repositioning for growth. I&apos;ve led rebrands for blockchain companies, enterprise SaaS, and consumer brands—always with measurable business outcomes.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Marketing Team Building
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                Building your first marketing function or scaling an existing team. I hire, structure, and operationalize marketing organizations that deliver consistent results.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-lg md:col-span-2">
              <h3 className="text-[22px] font-[800] mb-3 tracking-tight">
                Partnership Strategy & Negotiation
              </h3>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                From Fortune 500 partnerships to professional sports sponsorships, I identify opportunities, negotiate terms, and activate partnerships that drive revenue and visibility.
              </p>
            </div>
          </div>

          {/* CTA */}
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

      {/* Testimonials Section - NEW */}
      <section className="py-24 md:py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-12 md:mb-16 leading-[1.05] tracking-[-2.5px] text-center">
            What People Say<span className="text-yellow-400">.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 - REPLACE WITH REAL TESTIMONIAL */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-[#6b6b6b] text-[17px] leading-relaxed mb-6 italic">
                &quot;[Add your first testimonial here - reach out to CEOs/founders you&apos;ve worked with]&quot;
              </p>
              <div className="text-sm">
                <div className="font-[600]">[Name]</div>
                <div className="text-gray-500">[Title, Company]</div>
              </div>
            </div>

            {/* Testimonial 2 - REPLACE WITH REAL TESTIMONIAL */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-[#6b6b6b] text-[17px] leading-relaxed mb-6 italic">
                &quot;[Add your second testimonial here]&quot;
              </p>
              <div className="text-sm">
                <div className="font-[600]">[Name]</div>
                <div className="text-gray-500">[Title, Company]</div>
              </div>
            </div>
          </div>

          {/* Note to self - remove this comment before final deploy */}
          <p className="text-center text-gray-400 text-sm mt-8">
            Testimonials coming soon - gathering quotes from past clients
          </p>
        </div>
      </section>

      {/* RESPONSIVE FIX: Sticky only on desktop (lg:), not on mobile/tablet */}
      <section id="experience" className="py-24 md:py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Sticky only on large screens */}
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-6 leading-[1.05] tracking-[-2.5px]">
                Worked for<span className="text-yellow-400">.</span>
              </h2>
              <p className="text-[#6b6b6b] text-[15px] md:text-[17px] leading-relaxed">
                I have partnered with world class teams to deliver high impact
                campaigns, product launches, and brand experiences across a wide
                range of industries.
              </p>
            </div>

            {/* Right Column - Job Entries */}
            <div className="lg:col-span-3 space-y-16 md:space-y-20">
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
                      <h3 className="text-lg md:text-xl font-medium mb-1">
                        {job.company}, {job.role.split(" | ")[0]}
                      </h3>
                      <div className="text-sm text-gray-500 mb-4">{job.period}</div>
                    </div>
                  </div>

                  <p className="text-[#6b6b6b] text-[15px] md:text-[17px] mb-6 leading-relaxed">
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

      {/* RESPONSIVE FIX: Sticky only on desktop */}
      <section className="py-24 md:py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Sticky only on large screens */}
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

            {/* Right Column - Scrollable */}
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

      <WorkedOnSection />

      {/* RESPONSIVE FIX: Contact form stacks on mobile */}
      <section id="contact" className="py-24 md:py-32 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-4 leading-[1.05] tracking-[-2.5px]">
            Start With A Free Marketing Audit<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-[#6b6b6b] text-[17px] md:text-[19px] leading-relaxed mb-12 max-w-2xl mx-auto">
            30-minute strategy call + written recommendations. No commitment required.
          </p>
            <span>Board Member</span>
          </p>
          {/* RESPONSIVE: Stack inputs on mobile, side-by-side on tablet+ */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={formStatus === 'loading'}
                className="flex-1 px-6 py-4 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-gray-400 disabled:opacity-50"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={formStatus === 'loading'}
                className="flex-1 px-6 py-4 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-gray-400 disabled:opacity-50"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              disabled={formStatus === 'loading'}
              className="w-full px-6 py-4 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-gray-400 resize-none disabled:opacity-50"
            />
            
            {formMessage && (
              <div className={`p-4 rounded-lg text-sm ${
                formStatus === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {formMessage}
              </div>
            )}
            
            <button 
              type="submit"
              disabled={formStatus === 'loading'}
              className="px-12 py-4 bg-[#2a2927] text-white rounded-full text-sm hover:bg-gray-800 transition disabled:opacity-50"
            >
              {formStatus === 'loading' ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>

      {/* RESPONSIVE FIX: Footer text size */}
      <footer className="py-12 px-8 bg-[#2a2927]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <Image
              src="/MH-logo.png"
              alt="Michael Herron Logo"
              width={32}
              height={32}
            />
          </div>
          <div className="text-xs md:text-sm text-white/60 leading-relaxed mb-8">
            All trademarks, logos, and brand names displayed on this website are the property of their respective owners. They are used here strictly for identification and informational purposes to represent companies I have worked for or partnered with throughout my career. Their appearance does not imply any endorsement, approval, sponsorship, or affiliation with this website or with me personally. Any references to past work, partnerships, or collaborations are historical in nature and are presented solely to provide context regarding my professional experience.
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/10">
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

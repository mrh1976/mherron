"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import WorkedOnSection from "@/components/WorkedOnSection";

// Experience data (replaces previous siteContent import)
const experience = [
  {
    id: "herron-llc",
    company: "Michael Herron LLC",
    role: "Founder & Consultant",
    period: "2025 - Present",
    description:
      "I advise founders and leadership teams on positioning, go-to-market strategy, brand development, and marketing operations. My work focuses on clarifying what is holding growth back and building practical systems that improve performance.",
    achievements: [
      "Advises companies on growth strategy, positioning, and marketing leadership",
      "Supports consulting, advisory, and fractional CMO engagements",
      "Works directly with leadership teams to identify and solve growth bottlenecks",
    ],
  },
  {
    id: "kadena",
    company: "Kadena",
    role: "Chief Marketing Officer",
    period: "2021 - 2024",
    description:
      "Led global marketing strategy for Kadena, a blockchain infrastructure company serving enterprise and institutional audiences. Oversaw brand, communications, product marketing, ecosystem growth, and team development during a period of significant company expansion.",
    achievements: [
      "Supported growth from a $12M valuation to a $1.35B valuation",
      "Built and scaled the global marketing organization",
      "Led positioning, product launches, ecosystem campaigns, and brand development",
    ],
  },
  {
    id: "chain",
    company: "Chain",
    role: "Chief Marketing Officer",
    period: "2017 - 2021",
    description:
      "Led marketing and communications for Chain across enterprise blockchain products, partnerships, and major brand initiatives. Worked closely with leadership to define narrative, drive awareness, and support product and ecosystem growth.",
    achievements: [
      "Led major launches and strategic partnerships",
      "Developed marketing systems for complex technical products",
      "Supported high-visibility campaigns including NFTiff and enterprise initiatives",
    ],
  },
  {
    id: "lukka",
    company: "Lukka",
    role: "Chief Marketing Officer",
    period: "2014 - 2017",
    description:
      "Built and led marketing efforts for a data and software company serving the digital asset ecosystem. Focused on category education, enterprise credibility, and establishing a strong market narrative around complex financial infrastructure.",
    achievements: [
      "Developed positioning for institutional-grade data products",
      "Built awareness in a rapidly emerging market",
      "Helped establish the company as a trusted industry leader",
    ],
  },
  {
    id: "earlier-career",
    company: "Earlier Career",
    role: "Marketing Leadership Roles",
    period: "Prior to 2014",
    description:
      "Held senior marketing roles across telecommunications, agencies, and growth-focused organizations. Built experience across brand strategy, partnerships, product launches, sponsorships, and integrated campaigns.",
    achievements: [
      "Led cross-functional marketing programs for major global brands",
      "Gained experience across agency, operator, and client-side environments",
      "Developed the foundation for later executive leadership roles",
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setFormMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus("success");
        setFormMessage(
          "Thanks for reaching out! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
        setFormMessage(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage("Failed to send message. Please try again.");
    }
  };

  // Track scroll for nav background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Track active section
  useEffect(() => {
    const sections = ["about", "experience", "work", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0,
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
        behavior: "smooth",
      });
    }
  };

  const getLogoFilename = (jobId: string) => {
    if (jobId === "herron-llc") return "MHlogo-h.png";
    return `${jobId}.png`;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Michael Herron",
            jobTitle: "Chief Marketing Officer",
            url: "https://mherron.com",
            sameAs: ["https://www.linkedin.com/in/mherron54"],
            alumniOf: [
              { "@type": "Organization", name: "Kadena" },
              { "@type": "Organization", name: "Chain" },
              { "@type": "Organization", name: "Lukka" },
            ],
            knowsAbout: [
              "Strategic Marketing",
              "Brand Strategy",
              "Product Launch",
              "Web3 Marketing",
              "Blockchain Marketing",
              "Enterprise Marketing",
            ],
          }),
        }}
      />

      {/* ================= NAVIGATION ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#2a2927] shadow-lg" : "bg-[#2a2927]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
            aria-label="Scroll to top"
          >
            <Image
              src="/MH-logo.png"
              alt="Michael Herron Logo"
              width={75}
              height={75}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {["about", "experience", "work", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-white text-sm uppercase tracking-widest transition-colors ${
                  activeSection === section
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Availability & Mobile Menu */}
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
              className="lg:hidden text-white text-2xl font-thin"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="pt-40 pb-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[42px] md:text-[68px] lg:text-[80px] font-[800] leading-[1.1] tracking-[-4.16px]">
            Turn Complex Marketing Ideas
            <br />
            Into Measurable Results
            <span className="text-yellow-400">.</span>
          </h1>

          <div className="relative mx-auto w-full max-w-[850px] h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden -mt-12 md:-mt-20">
            <Image
              src="/MikeHerronHeadshot2026.png"
              alt="Mike Herron"
              width={850}
              height={1000}
              className="w-full h-auto object-cover object-top"
              priority
            />
          </div>

          <p className="text-[19px] md:text-[21px] text-[#6b6b6b] max-w-2xl mx-auto mb-10 leading-relaxed -mt-16 md:-mt-24">
            I&apos;m a marketing executive with 20+ years of experience and a
            decade as a CMO helping technology and fintech companies grow.
            I work with founders and leadership teams to diagnose what&apos;s
            holding marketing back and build the strategy and positioning
            needed to create consistent growth.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
          >
            Schedule A Free Marketing Audit
          </a>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="py-24 md:py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-6 tracking-[-2.5px]">
                Worked for<span className="text-yellow-400">.</span>
              </h2>
              <p className="text-[#6b6b6b] text-[17px] leading-relaxed">
                I have partnered with world-class teams to deliver high-impact
                campaigns, product launches, and brand experiences.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-16">
              {experience.map((job) => (
                <div key={job.id}>
                  <div className="mb-6">
                    {job.id !== "earlier-career" && (
                      <div className="mb-4">
                        <Image
                          src={`/images/${getLogoFilename(job.id)}`}
                          alt={job.company}
                          width={120}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-lg md:text-xl font-medium mb-1">
                      {job.company}, {job.role}
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      {job.period}
                    </div>
                  </div>

                  <p className="text-[#6b6b6b] mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <ul className="space-y-2 text-sm text-[#6b6b6b]">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 md:py-32 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] mb-4 tracking-[-2.5px]">
            Start With A Free Marketing Audit
            <span className="text-yellow-400">.</span>
          </h2>
          <p className="text-[#6b6b6b] text-[17px] md:text-[19px] leading-relaxed mb-12">
            30-minute strategy call plus written recommendations. No commitment required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-6 py-4 border border-gray-200 rounded-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-6 py-4 border border-gray-200 rounded-full"
            />
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border border-gray-200 rounded-2xl"
            />

            {formMessage && (
              <div
                className={`p-4 rounded-lg text-sm ${
                  formStatus === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {formMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="px-12 py-4 bg-[#2a2927] text-white rounded-full text-sm hover:bg-gray-800 transition"
            >
              {formStatus === "loading" ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 px-8 bg-[#2a2927] text-white/60 text-center">
        <p className="text-xs">
          © {new Date().getFullYear()} Michael Herron LLC. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

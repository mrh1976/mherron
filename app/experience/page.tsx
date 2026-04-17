import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience | Michael Herron - CMO & Marketing Executive",
  description: "25+ years building marketing organizations for Fortune 500 brands, startups, and everything in between. View my complete work history.",
};

export default function ExperiencePage() {
  const getLogoFilename = (jobId: string) => {
    if (jobId === "herron-llc") return "MHlogo-h.png";
    return `${jobId}.png`;
  };

  const jobs = [
    {
      id: "herron-llc",
      company: "Michael Herron LLC",
      role: "Marketing Consultant",
      period: "Nov 2025 – Present",
      description: "Strategic marketing consultant specializing in brand transformation, digital strategy, and go-to-market execution for technology companies and enterprise organizations.",
      achievements: [
        "Sports marketing activation strategy for global fintech company partnering with leading talent agency",
        "End-to-end rebrand initiatives for multiple technology companies including positioning, identity, and go-to-market strategy",
        "Complete digital presence buildout for investment platform: website, brand system, content strategy, asset cataloging"
      ]
    },
    {
      id: "kadena",
      company: "Kadena",
      role: "Chief Marketing Officer",
      period: "Sept 2023 – Nov 2025",
      description: "High performing Layer 1 blockchain driving institutional adoption and developer growth through secure, scalable infrastructure. Built and matured the global marketing organization, leading brand, growth, product marketing, content, community, and partnerships.",
      achievements: [
        "Built and scaled a 10 person in house marketing team and onboarded top tier PR and creative partners",
        "Led a complete end to end rebrand to reposition Kadena for institutional trust and developer adoption",
        "Designed a community strategy that increased positive sentiment by more than 200 percent while maintaining engagement rates above 7 percent",
        "Established the company's paid media framework, expanding budget from 100K to 500K across paid social, KOLs, search, and sponsorships",
        "Finalized a major partnership with the Croatian National Football Federation including jersey placement, World Cup activations, and mobile app integration",
        "Secured coverage across Forbes, Bloomberg, CoinDesk, The Block, and other global outlets",
        "Developed the GTM strategy for a multi chain EVM product attracting more than 8,000 testnet users and 1,000 deployed smart contracts"
      ]
    },
    {
      id: "chain",
      company: "Chain",
      role: "Chief Marketing Officer",
      period: "May 2022 – Sept 2023",
      description: "Blockchain infrastructure company delivering enterprise grade financial technology for global brands. Directed global brand, growth, communications, product marketing, and partnerships.",
      achievements: [
        "Built and led the global marketing function for a multibillion dollar blockchain company",
        "Negotiated and activated major professional sports sponsorships with the New England Patriots, Miami Heat, and New England Revolution",
        "Launched three new B2B products and the company's first direct to consumer digital wallet",
        "Closed a landmark Tiffany & Co and Yuga Labs partnership that generated 15M in revenue and sold out in under 15 minutes",
        "Oversaw investor relations initiatives that supported 120M in token purchases from major investors"
      ]
    },
    {
      id: "lukka",
      company: "Lukka",
      role: "Global Head of Marketing",
      period: "Aug 2020 – May 2022",
      description: "Blockchain and crypto asset data provider serving the world's largest financial institutions, fund administrators, and government agencies. Led all global marketing during significant company growth and valuation inflection.",
      achievements: [
        "Directed global marketing for a 1.35B institutional blockchain data company",
        "Executive team member contributing to multiple successful funding rounds",
        "Scaled the marketing team from 2 to 16 in one year and implemented more than 100 standardized processes",
        "Built Lukka's first comprehensive brand and go to market strategy across positioning, messaging, and segmentation",
        "Negotiated a multi year global title sponsorship with Formula E to support international expansion"
      ]
    },
    {
      id: "fusion92",
      company: "Fusion92",
      role: "Group Account Director",
      period: "July 2019 – Aug 2020",
      description: "Full service digital marketing and innovation agency serving Fortune 500 clients across finance, telecom, insurance, and retail. Directed strategy, client success, and revenue growth across a large enterprise portfolio.",
      achievements: [
        "Managed a portfolio of global brands including H&R Block, AT&T, and Zurich generating more than 16M in agency fees",
        "Oversaw integrated digital, social, UX, media, and experiential programs across multiple verticals",
        "Led multidisciplinary creative, media, and strategy teams to exceed performance KPIs",
        "Strengthened client relationships through data driven strategy and ROI focused execution"
      ]
    },
    {
      id: "mcs",
      company: "MCS Consulting",
      role: "Head of Marketing",
      period: "Nov 2017 – June 2019",
      description: "Digital marketing and strategy consultancy supporting global enterprise clients with e-commerce growth, brand development, and full funnel marketing execution across travel, hospitality, and financial sectors.",
      achievements: [
        "Launched United Airlines' MileagePlusGolf.com, unlocking 800K in private investment and exceeding pre launch sales goals by 230 percent",
        "Achieved 8:1 ROAS through optimized paid media and lifecycle marketing",
        "Negotiated 200K in brand partnerships to generate ongoing monthly revenue streams",
        "Directed content, influencer marketing, and e-commerce integrations for major enterprise clients"
      ]
    },
    {
      id: "uscc",
      company: "US Cellular",
      role: "Senior Manager, Digital & Social Media",
      period: "Dec 2013 – Nov 2017",
      description: "Major national wireless carrier. Led digital, social, and brand marketing for B2C, B2B, and HR audiences across national markets. Managed an 11 person team responsible for digital content, performance marketing, and social strategy.",
      achievements: [
        "Increased annual revenues by 14 percent through new partner acquisition programs",
        "Grew digital and social budgets by more than 1,200 percent while improving ROI",
        "Produced 200+ branded videos generating 50M+ views and a 9 point lift in brand consideration",
        "Collaborated with Disney, Lucasfilm, Apple, Samsung, Google, MLB, NCAA, and NBA",
        "Digital and social channels delivered 40 percent of all online gross adds at a lower acquisition cost"
      ]
    },
    {
      id: "solo",
      company: "Solo Cup Company",
      role: "Manager, Online Engagement",
      period: "April 2011 – Dec 2013",
      description: "National consumer products company known for one of the most recognizable brands in retail and food service. Led digital engagement, influencer marketing, and social strategy supporting large scale consumer growth.",
      achievements: [
        "Directed influencer and blogger programs that generated more than 6 million impressions per year and expanded national brand visibility",
        "Managed a 900k social media budget and led an 11 person team across internal contributors and two agency partners",
        "Increased social engagement rates by an estimated 40 percent through targeted campaigns, platform testing, and audience segmentation",
        "Improved website traffic by an estimated 35 percent after leading the consumer site redesign and strengthening SEO and SEM programs",
        "Delivered double digit growth in campaign reach and participation across national promotions by launching new social activation frameworks"
      ]
    },
    {
      id: "xfo",
      company: "XFO Mixed Martial Arts",
      role: "Partner",
      period: "Jan 2011 – May 2017",
      description: "Mixed martial arts promotion recognized as one of the premier combat sports organizations in the Midwest. Led brand development, event growth, and commercial strategy for one of the longest running regional MMA promotions in the United States.",
      achievements: [
        "Helped build the XFO into the Midwest's leading MMA organization, sending more than 100 fighters to the UFC",
        "Oversaw attendee experience marketing and audience growth that increased regional visibility and boosted average event attendance by an estimated 30 percent",
        "Grew sponsorship and partnership revenue through local and regional brand deals, securing six figure annual commitments",
        "Expanded ticket sales year over year through targeted promotion, fighter storytelling, and market specific activations",
        "Managed event promotion, sponsorships, and operational planning across more than a decade of live events, culminating in the UFC purchasing the full fight library for exclusive distribution on UFC Fight Pass"
      ]
    },
    {
      id: "earlier-career",
      company: "Earlier Career",
      role: "E-Commerce & Brand Marketing",
      period: "1999 – 2011",
      description: "Progressive leadership roles across hospitality, sports marketing, and e-commerce spanning 12 years of brand development and revenue growth.",
      achievements: [
        "Marketing Manager — Benchmark Hospitality (2009–2011)",
        "Director of Sales & Marketing — KemperSports (2007–2009)",
        "Business Development Manager — Excel Golf Products (2001–2007)",
        "E-Commerce Manager — Tour Edge Golf (1999–2001)"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2a2927] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/MH-logo.png"
                alt="Michael Herron Logo"
                width={60}
                height={60}
                className="w-15 h-auto hover:opacity-80 transition"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/#services"
                className="text-sm hover:text-yellow-400 transition"
              >
                Services
              </Link>
              <Link
                href="/#work"
                className="text-sm hover:text-yellow-400 transition"
              >
                Work
              </Link>
              <Link
                href="/experience"
                className="text-sm text-yellow-400"
              >
                Experience
              </Link>
              <Link
                href="/#about"
                className="text-sm hover:text-yellow-400 transition"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-2 bg-yellow-400 text-black text-sm font-[600] rounded-md hover:bg-yellow-300 transition-colors"
              >
                Request Free Audit
              </Link>
            </nav>

            {/* Mobile: Simple back button */}
            <Link
              href="/"
              className="lg:hidden px-4 py-2 bg-yellow-400 text-black text-sm font-[600] rounded-md hover:bg-yellow-300 transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="pt-24 pb-24 md:pt-32 md:pb-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-[42px] md:text-[56px] lg:text-[68px] font-[800] mb-6 leading-[1.05] tracking-[-2.5px]">
              Experience<span className="text-yellow-400">.</span>
            </h1>
            <p className="text-[#6b6b6b] text-[17px] md:text-[19px] leading-relaxed max-w-3xl">
              25+ years building marketing organizations for Fortune 500 brands, startups, agencies, and my own ventures. Here's the complete timeline.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-8 md:p-10 rounded-lg">
                <div className="mb-6">
                  {/* Logo */}
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
                    <h3 className="text-xl md:text-2xl font-[700] mb-1">
                      {job.company}, {job.role}
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

          {/* CTA at bottom */}
          <div className="mt-20 bg-black text-white p-12 rounded-lg text-center">
            <h3 className="text-[28px] md:text-[32px] font-[800] mb-4 tracking-tight">
              Ready To Work Together?
            </h3>
            <p className="text-white/80 text-[17px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Book a free 30-minute marketing audit and let's discuss how I can help your company grow.
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
      </div>

      {/* Footer */}
      <footer className="bg-[#2a2927] py-12 px-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <Image
            src="/MH-logo.png"
            alt="Michael Herron Logo"
            width={60}
            height={60}
            className="w-15 h-auto mx-auto mb-6 opacity-90"
          />
          
          {/* Social Links */}
          <div className="mb-6">
            <a 
              href="https://www.linkedin.com/in/mherron54" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition text-sm font-[600]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
          
          <p className="text-xs text-gray-400 leading-relaxed max-w-3xl mx-auto mb-4">
            All trademarks, logos, and brand names displayed on this website are the property of their respective owners. 
            They are used here strictly for identification and informational purposes to represent companies I have worked 
            for or partnered with throughout my career. Their appearance does not imply any endorsement, approval, 
            sponsorship, or affiliation with this website or with me personally.
          </p>
          <p className="text-xs text-gray-500">©2026 Michael Herron LLC</p>
          <p className="text-xs text-gray-500 mt-2">
            Designed in partnership with{" "}
            <a href="https://nzmotiondesign.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              nzmotiondesign.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

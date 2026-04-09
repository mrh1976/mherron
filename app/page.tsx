"use client";

import Image from "next/image";
import { useState } from "react";
import { siteContent } from "@/content";
import WorkedOnSection from "@/components/WorkedOnSection";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <h1 className="text-[68px] md:text-[80px] font-[800] mb-0 leading-[1.2] tracking-[-4.16px]">
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

      <section className="py-16 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">25+</div>
            <div className="text-[10px] uppercase tracking-widest opacity-50">
              Years
            </div>
          </div>
          <div>
            <div className="text-3xl mb-2">$1B+</div>
            <div className="text-[10px] uppercase tracking-widest opacity-50">
              Raised
            </div>
          </div>
          <div>
            <div className="text-3xl mb-2">Unicorn</div>
            <div className="text-[10px] uppercase tracking-widest opacity-50">
              Valuation
            </div>
          </div>
          <div>
            <div className="text-3xl mb-2">Fortune 500</div>
            <div className="text-[10px] uppercase tracking-widest opacity-50">
              Clients
            </div>
          </div>
          <div>
            <div className="text-3xl mb-2">50M+</div>
            <div className="text-[10px] uppercase tracking-widest opacity-50">
              Reach
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-medium mb-12">
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
          <h2 className="text-5xl font-medium mb-6">
            Worked for<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-[#6b6b6b] text-[17px] mb-20 max-w-xl">
            I have partnered with world class teams to deliver high impact
            campaigns, product launches, and brand experiences across a wide
            range of industries.
          </p>

          <div className="space-y-20">
            {siteContent.experience.map((job) => (
              <div key={job.id}>
                <div className="flex items-start gap-12 mb-6">
                  {job.id !== "earlier-career" && (
                    <div className="w-[160px] h-[54px] rounded flex items-center justify-center flex-shrink-0 p-3">
                      <Image
                        src={`/images/${getLogoFilename(job.id)}`}
                        alt={job.company}
                        width={160}
                        height={54}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-1">
                      {job.company}, {job.role.split(" | ")[0]}
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">{job.period}</div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-medium mb-6">
            Worked with<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-[#6b6b6b] text-[17px] mb-16 max-w-3xl">
            I have had the privilege of working with some of the biggest and
            most influential brands in the world. These partnerships brought me
            into conversations that shaped global sports, luxury, technology,
            and consumer culture, and gave me the opportunity to help launch
            products, tell powerful stories, and create marketing that delivers
            real business results.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
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

          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-8">
              Other Notable Companies
            </h3>
            <div className="grid grid-cols-3 gap-x-12 gap-y-3 text-sm text-[#6b6b6b]">
              <div>Formula 1</div>
              <div>Zurich</div>
              <div>SummerFest</div>
              <div>Formula E</div>
              <div>Nintendo</div>
              <div>Facebook</div>
              <div>State Street</div>
              <div>Lucasfilms</div>
              <div>Twitter</div>
              <div>Blackrock</div>
              <div>CAA</div>
              <div>MasterCard</div>
              <div>S&amp;P</div>
              <div>MLB</div>
              <div>Yuga Labs</div>
              <div>Choice Hotels</div>
              <div>NBA</div>
              <div>Uniswap</div>
              <div>New England Patriots</div>
              <div>NCAA</div>
              <div>Garmin</div>
              <div>Miami Heat</div>
              <div>NFL</div>
              <div></div>
              <div>Chicago White Sox</div>
              <div>DJI</div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <WorkedOnSection />

      <section id="contact" className="py-32 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-medium mb-6">
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

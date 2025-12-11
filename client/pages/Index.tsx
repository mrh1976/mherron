import { useState } from "react";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const projectModals = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Name",
  description: loremIpsum,
  videoId: "40Y-DL20UGg",
}));

export default function Index() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/42415debce8e00ddf92bfd6b5bede46b12554bf6?width=512"
              alt="Mike Herron"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-16">
            <a
              href="#about"
              className="text-gray-900 font-medium text-sm transition relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left transition-transform duration-300"></span>
            </a>
            <a
              href="#resume"
              className="text-gray-900 font-medium text-sm transition relative group"
            >
              Resume
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left transition-transform duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-900 font-medium text-sm transition relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left transition-transform duration-300"></span>
            </a>
          </nav>

          {/* LinkedIn Icon */}
          <div className="flex items-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-orange transition"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Profile Image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="flex flex-col justify-start pt-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
                <span className="text-gray-900">Executive Leadership</span>
                <br />
                <span className="text-gray-400">That Turns </span>
                <span className="text-gray-600">Complex Ideas</span>
                <br />
                <span className="text-gray-400">Into Clear </span>
                <span className="text-gray-600">Growth</span>
                <span className="text-orange">.</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 mb-16">
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium text-sm transition">
                  Let's Chat
                </button>
                <button className="border border-gray-900 hover:bg-gray-50 text-gray-900 px-6 py-2 rounded-full font-medium text-sm transition">
                  Services
                </button>
              </div>

              {/* Want to learn more section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Want to learn more<span className="text-orange">?</span>
                </h3>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium text-sm transition">
                  Subscribe on LinkedIn
                </button>
              </div>
            </div>

            {/* Right Content - Profile Image and Newsletter Card */}
            <div className="relative flex flex-col items-center justify-start">
              {/* Profile Image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/92d0abb246b5692237e32af1bd0d4710c3895465?width=2096"
                alt="Mike Herron"
                className="w-full max-w-md lg:max-w-lg object-cover mb-8"
              />

              {/* Newsletter Card - positioned to overlap */}
              <div className="w-full max-w-md bg-black rounded-2xl p-6 flex items-center gap-6 -mt-12 relative z-10 shadow-lg">
                {/* Logo/Icon */}
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-orange to-orange/80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-bold text-2xl">Df</div>
                    <div className="text-white/60 text-xs mt-1">Marketing</div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <div className="text-orange text-xs font-semibold tracking-wider mb-1">
                    LINKEDIN NEWSLETTER
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-1">Dear Founders</h3>
                  <p className="text-gray-400 text-sm">Marketing clarity for the modern entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Title and Subtitle */}
            <div className="flex flex-col gap-8">
              <h2 className="text-5xl lg:text-5xl font-medium">
                <span className="text-gray-900">About Me</span>
                <span className="text-orange">.</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                I've built my career by asking, "Why are we doing this" and "What does success look like."
              </p>
            </div>

            {/* Right Column - Bio Content */}
            <div className="flex flex-col gap-6">
              <p className="text-gray-900 text-base leading-relaxed">
                I am a lifelong Chicagoan, a husband, and a father of four, and I have spent my entire career building, leading, and scaling marketing organizations that help companies grow with clarity and purpose. Over the past twenty five years I have worked across every corner of the marketing world. I have been client side inside large enterprises, agency side serving global brands, an entrepreneur building ventures from scratch, and a consultant trusted by companies to solve hard problems.
              </p>
              <p className="text-gray-900 text-base leading-relaxed">
                I have led marketing at fast moving blockchain and fintech companies, managed multi million dollar brand partnerships, guided agency teams supporting Fortune 500 clients, and helped launch new products for startups and established businesses. No matter the setting, I am at my best when I am building something and helping people see what is possible.
              </p>
              <p className="text-gray-900 text-base leading-relaxed">
                At work and at home, I try to show up with honesty, curiosity, and a calm leadership style that gives teams confidence. I believe in clear goals, transparent conversations, and creating an environment where people can do the best work of their careers. And after all of it, Chicago is still home. It is where I grew up, where my family is, and where my career continues to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worked For Section */}
      <section id="worked-for" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Left Sticky Column */}
            <div className="lg:sticky lg:top-24 h-fit">
              <h2 className="text-5xl lg:text-5xl font-medium mb-6">
                <span className="text-gray-900">Worked for</span>
                <span className="text-orange">.</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                I have been a part of the high quality design process for several companies.
              </p>
            </div>

            {/* Right Scrollable Column - Job Entries */}
            <div className="lg:col-span-2 space-y-12 divide-y divide-gray-200">
              {/* Kadena */}
              <div className="pt-12 first:pt-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9e8c05a0e808ff97ab3a15f21987e700427c69d9?width=272"
                  alt="Kadena"
                  className="h-10 mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Chief Marketing Officer <span className="text-gray-600 font-normal">| September 2023 - November 2025</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  High performing Layer 1 blockchain driving institutional adoption and developer growth through secure, scalable infrastructure. Built and matured the global marketing organization, leading brand, growth, product marketing, content, community, and partnerships.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>Built and scaled a 10 person in house marketing team and onboarded top tier PR and creative partners.</li>
                    <li>Led a complete end to end rebrand to reposition Kadena for institutional trust and developer adoption.</li>
                    <li>Designed a community strategy that increased positive sentiment by more than <span className="font-semibold">200 percent</span> while maintaining engagement rates above <span className="font-semibold">7 percent</span>.</li>
                    <li>Established the company's paid media framework, expanding budget from <span className="font-semibold">100K to 500K</span> across paid social, KOLs, search, and sponsorships.</li>
                    <li>Finalized a major partnership with the Croatian National Football Federation including jersey placement, World Cup activations, and mobile app integration.</li>
                    <li>Secured coverage across Forbes, Bloomberg, CoinDesk, The Block, and other global outlets.</li>
                    <li>Developed the GTM strategy for a multi chain EVM product attracting more than <span className="font-semibold">8,000</span> testnet users and <span className="font-semibold">1,000</span> deployed smart contracts.</li>
                  </ul>
                </div>
              </div>

              {/* Chain */}
              <div className="pt-12">
                <svg width="136" height="37" viewBox="0 0 762 54" className="mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M83.3524 39.1817H79.094V12.688H83.3524V23.0803C84.5635 21.5069 86.5828 20.8482 88.455 20.8482C92.8604 20.8482 94.9893 23.9951 94.9893 27.9106V39.1817H90.7309V28.643C90.7309 26.4474 89.7382 24.6909 87.06 24.6909C84.7106 24.6909 83.4259 26.4474 83.3524 28.7161V39.1817Z" fill="black"/>
                  <path d="M103.432 28.972L108.019 28.2768C109.047 28.1303 109.342 27.618 109.342 26.996C109.342 25.4957 108.314 24.2881 105.964 24.2881C105.511 24.2569 105.057 24.3156 104.627 24.4608C104.196 24.606 103.799 24.8349 103.458 25.1342C103.117 25.4335 102.838 25.7974 102.638 26.2048C102.438 26.6123 102.321 27.0553 102.293 27.5082L98.4018 26.63C98.7328 23.5563 101.522 20.8113 105.93 20.8113C111.437 20.8113 113.529 23.9217 113.529 27.4717V36.3271C113.518 37.2831 113.591 38.2383 113.749 39.1814H109.784C109.636 38.4346 109.574 37.673 109.6 36.9121C108.757 38.2665 106.994 39.7302 104.094 39.7302C100.35 39.7302 98.0371 37.1687 98.0371 34.3511C98.0349 31.1676 100.384 29.4106 103.432 28.972ZM109.339 31.7897V30.9846L104.677 31.6799C103.355 31.8994 102.291 32.6313 102.291 34.095C102.291 35.3026 103.209 36.4003 104.897 36.4003C107.286 36.4003 109.339 35.2659 109.339 31.7897Z" fill="black"/>
                  <path d="M119.279 12.3218C119.644 12.321 120.007 12.3923 120.345 12.5316C120.683 12.671 120.991 12.8756 121.25 13.1339C121.509 13.3922 121.715 13.699 121.855 14.0369C121.996 14.3747 122.069 14.737 122.069 15.1028C122.067 15.6495 121.903 16.1833 121.598 16.6372C121.294 17.091 120.861 17.4444 120.356 17.6531C119.851 17.8618 119.295 17.9163 118.759 17.8098C118.222 17.7034 117.729 17.4406 117.343 17.0547C116.955 16.6688 116.691 16.177 116.582 15.6412C116.474 15.1053 116.527 14.5494 116.734 14.0434C116.941 13.5374 117.293 13.104 117.746 12.7976C118.199 12.4913 118.732 12.3257 119.279 12.3218ZM117.187 39.1814V21.3602H121.407V39.1793L117.187 39.1814Z" fill="black"/>
                  <path d="M129.363 39.1819H125.104V21.3606H129.253V23.7392C129.796 22.8298 130.573 22.0824 131.502 21.5742C132.432 21.066 133.48 20.8156 134.539 20.8489C138.908 20.8489 141 23.9958 141 27.9112V39.1819H136.742V28.6426C136.742 26.447 135.748 24.6906 133.07 24.6906C130.648 24.6906 129.363 26.5568 129.363 28.8987V39.1819Z" fill="black"/>
                  <path d="M72.8143 30.0049C71.6961 32.9684 69.2889 35.5221 64.973 35.5221C60.5297 35.5221 56.3476 32.3019 56.3476 26.2275C56.3476 19.9336 60.6425 16.8232 64.9375 16.8232C69.05 16.8232 71.6591 19.2247 72.6889 21.9462L76.2535 19.8943C74.7328 15.9 70.9481 12.6887 64.9375 12.6887C58.1835 12.6887 51.832 17.7751 51.832 26.228C51.832 34.681 57.9629 39.7308 64.9746 39.7308C71.1295 39.7308 74.9806 36.1185 76.4491 32.096L72.8143 30.0049Z" fill="black"/>
                  <path d="M36.6999 18.4823L32.2309 21.0527L38.2519 24.518V36.6244L27.7352 42.6768L17.219 36.6244V24.5196L23.2694 21.0375L22.4403 20.5602L18.8003 18.4656L12.75 21.9476V39.1985L27.7352 47.8239L42.7205 39.1985V21.9476L36.6999 18.4823Z" fill="black"/>
                  <path d="M14.9847 6L0 14.6254V31.8763L6.04983 35.3578L9.68924 33.2632L10.5189 32.7859L4.46902 29.3012V17.1958L14.9847 11.1439L25.5015 17.1958V29.3012L19.4804 32.765L23.9494 35.3369L29.9705 31.8721V14.6212L14.9847 6Z" fill="black"/>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Chief Marketing Officer <span className="text-gray-600 font-normal">| May 2022 - September 2023</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Blockchain infrastructure company delivering enterprise grade financial technology for global brands. Directed global brand, growth, communications, product marketing, and partnerships.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>Built and led the global marketing function for a multibillion dollar blockchain company.</li>
                    <li>Negotiated and activated major professional sports sponsorships with the New England Patriots, Miami Heat, and New England Revolution.</li>
                    <li>Launched three new B2B products and the company's first direct to consumer digital wallet.</li>
                    <li>Closed a landmark Tiffany & Co and Yuga Labs partnership that generated <span className="font-semibold">15M</span> in revenue and sold out in under <span className="font-semibold">15 minutes</span>.</li>
                    <li>Oversaw investor relations initiatives that supported <span className="font-semibold">120M</span> in token purchases from major investors.</li>
                  </ul>
                </div>
              </div>

              {/* Lukka */}
              <div className="pt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Global Head of Marketing <span className="text-gray-600 font-normal">| August 2020 - May 2022</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Blockchain and crypto asset data provider serving the world's largest financial institutions, fund administrators, and government agencies. Led all global marketing during significant company growth and valuation inflection.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>Directed global marketing for a <span className="font-semibold">1.35B</span> institutional blockchain data company.</li>
                    <li>Executive team member contributing to multiple successful funding rounds.</li>
                    <li>Scaled the marketing team from <span className="font-semibold">2 to 16</span> in one year and implemented more than <span className="font-semibold">100</span> standardized processes.</li>
                    <li>Built Lukka's first comprehensive brand and go to market strategy across positioning, messaging, and segmentation.</li>
                    <li>Negotiated a multi year global title sponsorship with Formula E to support international expansion.</li>
                  </ul>
                </div>
              </div>

              {/* Work & Co */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f9a952caa622f1b34ebb2e5d1217b5d022627766?width=266"
                  alt="Work & Co"
                  className="h-12 mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Group Account Director <span className="text-gray-600 font-normal">| July 2019 - August 2020</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Full service digital marketing and innovation agency serving Fortune 500 clients across finance, telecom, insurance, and retail. Directed strategy, client success, and revenue growth across a large enterprise portfolio.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>Managed a portfolio of global brands including H&R Block, AT&T, and Zurich generating more than <span className="font-semibold">16M</span> in agency fees.</li>
                    <li>Oversaw integrated digital, social, UX, media, and experiential programs across multiple verticals.</li>
                    <li>Led multidisciplinary creative, media, and strategy teams to exceed performance KPIs.</li>
                    <li>Strengthened client relationships through data driven strategy and ROI focused execution.</li>
                  </ul>
                </div>
              </div>

              {/* MCS Consulting */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/364cdce97b6a21af5a17e8ed3fa80147b0efa0db?width=430"
                  alt="MCS Consulting"
                  className="h-8 mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Head of Marketing <span className="text-gray-600 font-normal">| November 2017 - June 2019</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Digital marketing and strategy consultancy supporting global enterprise clients with e-commerce growth, brand development, and full funnel marketing execution across travel, hospitality, and financial sectors.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>Launched United Airlines' MileagePlusGolf.com, unlocking <span className="font-semibold">800K</span> in private investment and exceeding pre launch sales goals by <span className="font-semibold">230 percent</span>.</li>
                    <li>Achieved <span className="font-semibold">8:1 ROAS</span> through optimized paid media and lifecycle marketing.</li>
                    <li>Negotiated <span className="font-semibold">200K</span> in brand partnerships to generate ongoing monthly revenue streams.</li>
                    <li>Directed content, influencer marketing, and e-commerce integrations for major enterprise clients.</li>
                  </ul>
                </div>
              </div>

              {/* US Cellular */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da9ede529f3b039e3f7e90e2dcb5f2928ac1c616?width=366"
                  alt="US Cellular"
                  className="h-8 mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Global Head of Marketing <span className="text-gray-600 font-normal">| December 2013 - November 2017</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Major national wireless carrier. Led digital, social, and brand marketing for B2C, B2B, and HR audiences across national markets. Managed an 11 person team responsible for digital content, performance marketing, and social strategy.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>Increased annual revenues by <span className="font-semibold">14 percent</span> through new partner acquisition programs.</li>
                    <li>Grew digital and social budgets by more than <span className="font-semibold">1,200 percent</span> while improving ROI.</li>
                    <li>Produced <span className="font-semibold">200+</span> branded videos generating <span className="font-semibold">50M+</span> views and a <span className="font-semibold">9 point</span> lift in brand consideration.</li>
                    <li>Collaborated with Disney, Lucasfilm, Apple, Samsung, Google, MLB, NCAA, and NBA.</li>
                    <li>Digital and social channels delivered <span className="font-semibold">40 percent</span> of all online gross adds at a lower acquisition cost.</li>
                  </ul>
                </div>
              </div>

              {/* SOLO */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7faec79871be3f0740f20030837c6a244d846344?width=366"
                  alt="SOLO"
                  className="h-10 mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Manager, Online Engagement <span className="text-gray-600 font-normal">| April 2011 - December 2013</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  National consumer products company known for one of the most recognizable brands in retail and food service. Led digital engagement, influencer marketing, and social strategy supporting large scale consumer growth.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>Directed influencer and blogger programs that generated more than <span className="font-semibold">6 million</span> impressions per year and expanded national brand visibility.</li>
                    <li>Managed a <span className="font-semibold">900k</span> social media budget and led an <span className="font-semibold">11 person</span> team across internal contributors and two agency partners.</li>
                    <li>Increased social engagement rates by an estimated <span className="font-semibold">40 percent</span> through targeted campaigns, platform testing, and audience segmentation.</li>
                    <li>Improved website traffic by an estimated <span className="font-semibold">35 percent</span> after leading the consumer site redesign and strengthening SEO and SEM programs.</li>
                    <li>Delivered double digit growth in campaign reach and participation across national promotions by launching new social activation frameworks.</li>
                  </ul>
                </div>
              </div>

              {/* XFO */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/93aedf901d177a1302e95a4cd88df3b642450477?width=286"
                  alt="XFO"
                  className="h-12 mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Partner <span className="text-gray-600 font-normal">| January 2011 - May 2017</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Mixed martial arts promotion recognized as one of the premier combat sports organizations in the Midwest. Led brand development, event growth, and commercial strategy for one of the longest running regional MMA promotions in the United States.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>Helped build the XFO into the Midwest's leading MMA organization, sending more than <span className="font-semibold">100 fighters</span> to the UFC.</li>
                    <li>Oversaw attendee experience marketing and audience growth that increased regional visibility and boosted average event attendance by an estimated <span className="font-semibold">30 percent</span>.</li>
                    <li>Grew sponsorship and partnership revenue through local and regional brand deals, securing <span className="font-semibold">six figure</span> annual commitments.</li>
                    <li>Expanded ticket sales year over year through targeted promotion, fighter storytelling, and market specific activations.</li>
                    <li>Managed event promotion, sponsorships, and operational planning across more than a decade of live events, culminating in the UFC purchasing the full fight library for exclusive distribution on UFC Fight Pass.</li>
                  </ul>
                </div>
              </div>

              {/* Earlier Career */}
              <div className="pt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Earlier Career in E-Commerce & Brand Marketing
                </h3>
                <div className="text-gray-600 text-sm space-y-3">
                  <p><span className="font-semibold">Marketing Manager</span> — Benchmark Hospitality (2009–2011)</p>
                  <p><span className="font-semibold">Director of Sales & Marketing</span> — KemperSports (2007–2009)</p>
                  <p><span className="font-semibold">Business Development Manager</span> — Excel Golf Products (2001–2007)</p>
                  <p><span className="font-semibold">E-Commerce Manager</span> — Tour Edge Golf (1999–2001)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked With Section */}
      <section id="worked-with" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left Column - Title, Description, and Notable Companies */}
            <div className="flex flex-col gap-8">
              {/* Title and Description */}
              <div className="flex flex-col gap-6">
                <h2 className="text-5xl lg:text-5xl font-medium">
                  <span className="text-gray-900">Worked with</span>
                  <span className="text-orange">.</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                  I have had the privilege of working with some of the biggest and most influential brands in the world. These partnerships brought me into conversations that shaped global sports, luxury, technology, and consumer culture, and gave me the opportunity to help launch products, tell powerful stories, and create marketing that delivers real business results.
                </p>
              </div>

              {/* Other Notable Companies */}
              <div className="flex flex-col gap-3">
                <h3 className="text-gray-900 text-base font-medium">Other Notable Companies:</h3>
                <div className="grid grid-cols-3 gap-6">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Formula 1<br />
                      Formula E<br />
                      State Street<br />
                      Blackrock<br />
                      S&P<br />
                      Choice Hotels<br />
                      New England Patriots<br />
                      Miami Heat<br />
                      Chicago White Sox
                    </p>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Zurich<br />
                      Nintendo<br />
                      Lucasfilms<br />
                      CAA<br />
                      MLB<br />
                      NBA<br />
                      NCAA<br />
                      NFL<br />
                      DJI
                    </p>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      SummerFest<br />
                      Facebook<br />
                      Twitter<br />
                      MasterCard<br />
                      Yuga Labs<br />
                      Uniswap<br />
                      Garmin<br />
                      NCAA<br />
                      NFL
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Company Logos Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-x-16 gap-y-12 items-center justify-items-center">
                {/* H&R Block */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/5082733f13508ac3584f7a25a02f153f0a3b6e63?width=406"
                    alt="H&R Block"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* New England Patriots */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f1e7c3ab6c3570e6dfb39ccbc33a5bc8ecdc57ad?width=406"
                    alt="New England Patriots"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* State Street */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/03cd2a10ecbcef125319fb7d0636129fd7f1e3eb?width=458"
                    alt="State Street"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* United Airlines */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/895176dbecd37f931f3d36003aed32daec12f58b?width=484"
                    alt="United Airlines"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Samsung */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e133ed090e21a7edffb9d88688facd497ee1896d?width=502"
                    alt="Samsung"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Tiffany & Co */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/450c80fe12f7aa770169037dab2bb97e47015f63?width=490"
                    alt="Tiffany & Co"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* AT&T */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/51a231e947d45779a880c691b62cdf4a6a7a4158?width=436"
                    alt="AT&T"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Disney */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/148468b93f634ce997e825f7096f3a0e31b854aa?width=442"
                    alt="Disney"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Bloomberg */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/eaa9f4e8443b43ecce394395f210d61bd309a399?width=488"
                    alt="Bloomberg"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Google */}
                <div className="flex items-center justify-center h-32 w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/28bbdb7f27a8aeb79d5960bcc4c1fcbfea020fe4?width=404"
                    alt="Google"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked On Section */}
      <section id="worked-on" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left Column - Title and Description */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-5xl lg:text-5xl font-medium">
                  <span className="text-gray-900">Worked on</span>
                  <span className="text-orange">.</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                  Here are a few examples of the campaigns, partnerships, launches, and brand moments I helped create. These projects brought together cross functional teams, creative talent, enterprise partners, and global audiences, and reflect the kind of marketing that moves people and drives results. This body of work has been recognized by organizations such as Adweek, Adweek Arc, Cannes Lions, the Hatch Awards, the Obies, the Shorty Awards, and the Webby Awards.
                </p>
              </div>
            </div>

            {/* Right Column - Project Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-4 grid-rows-3 gap-4 sm:gap-5">
                {/* Box 1 - Lukka Formula E */}
                <button
                  onClick={() => setActiveModal(1)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F88d20ef8b082451b8105ca7ae1767a27?format=webp&width=400"
                    alt="Lukka Formula E"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 2 - Fusion 92 H&R Block */}
                <button
                  onClick={() => setActiveModal(2)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F57b2e77ba8444e99a4b6c00ea18dbcc7?format=webp&width=400"
                    alt="Fusion 92 H&R Block"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 3 - US Cellular Campaign */}
                <button
                  onClick={() => setActiveModal(3)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F036e9110d57545f4909f28fcf01c9b44?format=webp&width=400"
                    alt="US Cellular campaign"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 4 - US Cellular Future of Good */}
                <button
                  onClick={() => setActiveModal(4)}
                  className="aspect-square rounded-lg overflow-hidden bg-white cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fa44c6f08b0bf40cb8ea08f61968b988c?format=webp&width=400"
                    alt="US Cellular Future of Good"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 5 - Lukka Data Visualization */}
                <button
                  onClick={() => setActiveModal(5)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-900 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F74eb105410174fef8bb2485c242e4791?format=webp&width=400"
                    alt="Lukka data visualization"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 6 - Chain Patriots Helmet */}
                <button
                  onClick={() => setActiveModal(6)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fbdd2fc26b9d54f32b18e8b118634aded?format=webp&width=400"
                    alt="Chain Patriots helmet"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 7 - Tiffany & Co NFT */}
                <button
                  onClick={() => setActiveModal(7)}
                  className="aspect-square rounded-lg overflow-hidden bg-teal-100 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F3cbaf395ebe14ab791ad4e9041d89cb1?format=webp&width=400"
                    alt="Tiffany & Co NFT"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 8 - Chain Wallet App */}
                <button
                  onClick={() => setActiveModal(8)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-900 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fda94d5220fa14f78aca333eaa563a96a?format=webp&width=400"
                    alt="Chain Wallet App"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 9 - Miami Heat Player */}
                <button
                  onClick={() => setActiveModal(9)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Ff6c63303bba445518833f99b005c1015?format=webp&width=400"
                    alt="Miami Heat player"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 10 - Chainweb EVM */}
                <button
                  onClick={() => setActiveModal(10)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fe811583a315942fc847cc150544fe89a?format=webp&width=400"
                    alt="Chainweb EVM"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 11 - New Kadena */}
                <button
                  onClick={() => setActiveModal(11)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-900 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F23206d4f72d4440794aa666f55144fab?format=webp&width=400"
                    alt="New Kadena"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Box 12 - Croatian Football Federation */}
                <button
                  onClick={() => setActiveModal(12)}
                  className="aspect-square rounded-lg overflow-hidden bg-red-600 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fed0ea93f040f4729a2ea432b157dad56?format=webp&width=400"
                    alt="Croatian Football Federation"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">
                    {projectModals[activeModal - 1].title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {projectModals[activeModal - 1].description}
                  </p>
                </div>
              </div>

              {/* Right Column - Video */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${projectModals[activeModal - 1].videoId}`}
                    title="Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

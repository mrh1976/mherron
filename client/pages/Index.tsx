import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { email, name });
    setEmail("");
    setName("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/42415debce8e00ddf92bfd6b5bede46b12554bf6?width=512"
                alt="Mike Herron"
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-12">
              <a
                href="#about"
                className="text-gray-900 hover:text-orange font-medium transition border-b-2 border-orange pb-1"
              >
                About
              </a>
              <a
                href="#resume"
                className="text-gray-900 hover:text-orange font-medium transition border-b-2 border-orange pb-1"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-orange font-medium transition border-b-2 border-orange pb-1"
              >
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-orange transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-8">
                <span className="text-gray-900">Executive Leadership</span>
                <br />
                <span className="text-gray-400">That Turns </span>
                <span className="text-gray-500">Complex Ideas</span>
                <br />
                <span className="text-gray-400">Into Clear </span>
                <span className="text-gray-500">Growth</span>
                <span className="text-orange">.</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                  Let's Chat
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                  Services
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/92d0abb246b5692237e32af1bd0d4710c3895465?width=2096"
                  alt="Mike Herron"
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Want to Learn More - Newsletter Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm">
                <div className="aspect-square bg-gray-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                  <div className="mb-4">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/219afe1390a058e1f0e48cbfba242c2b34c0fc47?width=211"
                      alt="DF"
                      className="h-12 mx-auto"
                    />
                  </div>
                  <div className="text-orange text-sm mb-2">LINKEDIN NEWSLETTER</div>
                  <h3 className="text-white text-4xl font-bold mb-2">Dear Founders</h3>
                  <p className="text-gray-300 text-sm">Marketing clarity for the modern entrepreneur</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-white text-4xl font-bold mb-4">
                Want to learn more<span className="text-orange">?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Subscribe to my LinkedIn newsletter, Dear Founders, where I share marketing insights and clarity for modern entrepreneurs.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Subscribe on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                About Me<span className="text-orange">.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I've built my career by asking, "Why are we doing this" and "What does success look like."
              </p>
            </div>
            <div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                I am a lifelong Chicagoan, a husband, and a father of four, and I have spent my entire career building, leading, and scaling marketing organizations that help companies grow with clarity and purpose. Over the past twenty five years I have worked across every corner of the marketing world. I have been client side inside large enterprises, agency side serving global brands, an entrepreneur building ventures from scratch, and a consultant trusted by companies to solve hard problems.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                I have led marketing at fast moving blockchain and fintech companies, managed multi million dollar brand partnerships, guided agency teams supporting Fortune 500 clients, and helped launch new products for startups and established businesses. No matter the setting, I am at my best when I am building something and helping people see what is possible.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                At work and at home, I try to show up with honesty, curiosity, and a calm leadership style that gives teams confidence. I believe in clear goals, transparent conversations, and creating an environment where people can do the best work of their careers. And after all of it, Chicago is still home. It is where I grew up, where my family is, and where my career continues to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worked For Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">
            Worked for<span className="text-orange">.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-16">
            I have been a part of the high quality design process for several companies.
          </p>
          <div className="space-y-12">
            {/* Kadena */}
            <div className="border-t pt-12">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9e8c05a0e808ff97ab3a15f21987e700427c69d9?width=272"
                alt="Kadena"
                className="h-10 mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chief Marketing Officer | September 2023 - November 2025
              </h3>
              <p className="text-gray-600 mb-6">
                High performing Layer 1 blockchain driving institutional adoption and developer growth through secure, scalable infrastructure. Built and matured the global marketing organization, leading brand, growth, product marketing, content, community, and partnerships.
              </p>
              <div className="text-gray-600 text-sm space-y-2">
                <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
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
            <div className="border-t pt-12">
              <svg
                width="140"
                height="54"
                viewBox="0 0 762 54"
                className="mb-6"
              >
                <path
                  d="M83.3524 39.1817H79.094V12.688H83.3524V23.0803C84.5635 21.5069 86.5828 20.8482 88.455 20.8482C92.8604 20.8482 94.9893 23.9951 94.9893 27.9106V39.1817H90.7309V28.643C90.7309 26.4474 89.7382 24.6909 87.06 24.6909C84.7106 24.6909 83.4259 26.4474 83.3524 28.7161V39.1817Z"
                  fill="black"
                />
                <path
                  d="M103.432 28.972L108.019 28.2768C109.047 28.1303 109.342 27.618 109.342 26.996C109.342 25.4957 108.314 24.2881 105.964 24.2881C105.511 24.2569 105.057 24.3156 104.627 24.4608C104.196 24.606 103.799 24.8349 103.458 25.1342C103.117 25.4335 102.838 25.7974 102.638 26.2048C102.438 26.6123 102.321 27.0553 102.293 27.5082L98.4018 26.63C98.7328 23.5563 101.522 20.8113 105.93 20.8113C111.437 20.8113 113.529 23.9217 113.529 27.4717V36.3271C113.518 37.2831 113.591 38.2383 113.749 39.1814H109.784C109.636 38.4346 109.574 37.673 109.6 36.9121C108.757 38.2665 106.994 39.7302 104.094 39.7302C100.35 39.7302 98.0371 37.1687 98.0371 34.3511C98.0349 31.1676 100.384 29.4106 103.432 28.972ZM109.339 31.7897V30.9846L104.677 31.6799C103.355 31.8994 102.291 32.6313 102.291 34.095C102.291 35.3026 103.209 36.4003 104.897 36.4003C107.286 36.4003 109.339 35.2659 109.339 31.7897Z"
                  fill="black"
                />
                <path
                  d="M119.279 12.3218C119.644 12.321 120.007 12.3923 120.345 12.5316C120.683 12.671 120.991 12.8756 121.25 13.1339C121.509 13.3922 121.715 13.699 121.855 14.0369C121.996 14.3747 122.069 14.737 122.069 15.1028C122.067 15.6495 121.903 16.1833 121.598 16.6372C121.294 17.091 120.861 17.4444 120.356 17.6531C119.851 17.8618 119.295 17.9163 118.759 17.8098C118.222 17.7034 117.729 17.4406 117.343 17.0547C116.955 16.6688 116.691 16.177 116.582 15.6412C116.474 15.1053 116.527 14.5494 116.734 14.0434C116.941 13.5374 117.293 13.104 117.746 12.7976C118.199 12.4913 118.732 12.3257 119.279 12.3218ZM117.187 39.1814V21.3602H121.407V39.1793L117.187 39.1814Z"
                  fill="black"
                />
                <path
                  d="M129.363 39.1819H125.104V21.3606H129.253V23.7392C129.796 22.8298 130.573 22.0824 131.502 21.5742C132.432 21.066 133.48 20.8156 134.539 20.8489C138.908 20.8489 141 23.9958 141 27.9112V39.1819H136.742V28.6426C136.742 26.447 135.748 24.6906 133.07 24.6906C130.648 24.6906 129.363 26.5568 129.363 28.8987V39.1819Z"
                  fill="black"
                />
                <path
                  d="M72.8143 30.0049C71.6961 32.9684 69.2889 35.5221 64.973 35.5221C60.5297 35.5221 56.3476 32.3019 56.3476 26.2275C56.3476 19.9336 60.6425 16.8232 64.9375 16.8232C69.05 16.8232 71.6591 19.2247 72.6889 21.9462L76.2535 19.8943C74.7328 15.9 70.9481 12.6887 64.9375 12.6887C58.1835 12.6887 51.832 17.7751 51.832 26.228C51.832 34.681 57.9629 39.7308 64.9746 39.7308C71.1295 39.7308 74.9806 36.1185 76.4491 32.096L72.8143 30.0049Z"
                  fill="black"
                />
                <path
                  d="M36.6999 18.4823L32.2309 21.0527L38.2519 24.518V36.6244L27.7352 42.6768L17.219 36.6244V24.5196L23.2694 21.0375L22.4403 20.5602L18.8003 18.4656L12.75 21.9476V39.1985L27.7352 47.8239L42.7205 39.1985V21.9476L36.6999 18.4823Z"
                  fill="black"
                />
                <path
                  d="M14.9847 6L0 14.6254V31.8763L6.04983 35.3578L9.68924 33.2632L10.5189 32.7859L4.46902 29.3012V17.1958L14.9847 11.1439L25.5015 17.1958V29.3012L19.4804 32.765L23.9494 35.3369L29.9705 31.8721V14.6212L14.9847 6Z"
                  fill="black"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chief Marketing Officer | May 2022 - September 2023
              </h3>
              <p className="text-gray-600 mb-6">
                Blockchain infrastructure company delivering enterprise grade financial technology for global brands. Directed global brand, growth, communications, product marketing, and partnerships.
              </p>
              <div className="text-gray-600 text-sm space-y-2">
                <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                  <li>Built and led the global marketing function for a multibillion dollar blockchain company.</li>
                  <li>Negotiated and activated major professional sports sponsorships with the New England Patriots, Miami Heat, and New England Revolution.</li>
                  <li>Launched three new B2B products and the company's first direct to consumer digital wallet.</li>
                  <li>Closed a landmark Tiffany & Co and Yuga Labs partnership that generated <span className="font-semibold">15M</span> in revenue and sold out in under <span className="font-semibold">15 minutes</span>.</li>
                  <li>Oversaw investor relations initiatives that supported <span className="font-semibold">120M</span> in token purchases from major investors.</li>
                </ul>
              </div>
            </div>

            {/* Lukka */}
            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Global Head of Marketing | August 2020 - May 2022
              </h3>
              <p className="text-gray-600 mb-6">
                Blockchain and crypto asset data provider serving the world's largest financial institutions, fund administrators, and government agencies. Led all global marketing during significant company growth and valuation inflection.
              </p>
              <div className="text-gray-600 text-sm space-y-2">
                <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                  <li>Directed global marketing for a <span className="font-semibold">1.35B</span> institutional blockchain data company.</li>
                  <li>Executive team member contributing to multiple successful funding rounds.</li>
                  <li>Scaled the marketing team from <span className="font-semibold">2 to 16</span> in one year and implemented more than <span className="font-semibold">100</span> standardized processes.</li>
                  <li>Built Lukka's first comprehensive brand and go to market strategy across positioning, messaging, and segmentation.</li>
                  <li>Negotiated a multi year global title sponsorship with Formula E to support international expansion.</li>
                </ul>
              </div>
            </div>

            {/* Work & Co */}
            <div className="border-t pt-12">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f9a952caa622f1b34ebb2e5d1217b5d022627766?width=266"
                alt="Work & Co"
                className="h-12 mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Group Account Director | July 2019 - August 2020
              </h3>
              <p className="text-gray-600 mb-6">
                Full service digital marketing and innovation agency serving Fortune 500 clients across finance, telecom, insurance, and retail. Directed strategy, client success, and revenue growth across a large enterprise portfolio.
              </p>
              <div className="text-gray-600 text-sm space-y-2">
                <p className="font-semibold text-gray-700">Top Level Highlights:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                  <li>Managed a portfolio of global brands including H&R Block, AT&T, and Zurich generating more than <span className="font-semibold">16M</span> in agency fees.</li>
                  <li>Oversaw integrated digital, social, UX, media, and experiential programs across multiple verticals.</li>
                  <li>Led multidisciplinary creative, media, and strategy teams to exceed performance KPIs.</li>
                  <li>Strengthened client relationships through data driven strategy and ROI focused execution.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked With Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Worked with<span className="text-orange">.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-16">
            I have had the privilege of working with some of the biggest and most influential brands in the world. These partnerships brought me into conversations that shaped global sports, luxury, technology, and consumer culture.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-80 mb-16">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5082733f13508ac3584f7a25a02f153f0a3b6e63?width=406"
              alt="Brand"
              className="h-16 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f1e7c3ab6c3570e6dfb39ccbc33a5bc8ecdc57ad?width=406"
              alt="Brand"
              className="h-16 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/03cd2a10ecbcef125319fb7d0636129fd7f1e3eb?width=458"
              alt="Brand"
              className="h-16 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/895176dbecd37f931f3d36003aed32daec12f58b?width=484"
              alt="Brand"
              className="h-16 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e133ed090e21a7edffb9d88688facd497ee1896d?width=502"
              alt="Brand"
              className="h-16 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/450c80fe12f7aa770169037dab2bb97e47015f63?width=490"
              alt="Brand"
              className="h-16 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/51a231e947d45779a880c691b62cdf4a6a7a4158?width=436"
              alt="Brand"
              className="h-16 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/148468b93f634ce997e825f7096f3a0e31b854aa?width=442"
              alt="Brand"
              className="h-16 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/eaa9f4e8443b43ecce394395f210d61bd309a399?width=488"
              alt="Brand"
              className="h-16 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/28bbdb7f27a8aeb79d5960bcc4c1fcbfea020fe4?width=404"
              alt="Google"
              className="h-16 object-contain"
            />
          </div>

          <p className="text-gray-600 text-sm">
            Other Notable Companies: Formula 1, Formula E, State Street, Blackrock, S&P, Choice Hotels, New England Patriots, Miami Heat, Chicago White Sox, Zurich, Nintendo, Lucasfilms, CAA, MLB, NBA, NCAA, NFL, DJI, SummerFest, Facebook, Twitter, MasterCard, Yuga Labs, Uniswap, Garmin
          </p>
        </div>
      </section>

      {/* Worked On Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Worked on<span className="text-orange">.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-16">
            Here are a few examples of the campaigns, partnerships, launches, and brand moments I helped create. These projects brought together cross functional teams, creative talent, enterprise partners, and global audiences, and reflect the kind of marketing that moves people and drives results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold mb-2">
              Let's work <span className="text-gray-400">together</span>
              <span className="text-orange">.</span>
            </h2>
            <p className="text-orange text-2xl font-medium mb-16">
              Audits <span className="text-orange">|</span> Consulting{" "}
              <span className="text-orange">|</span> Fractional{" "}
              <span className="text-orange">|</span> Full-Time
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange"
              />
              <button
                type="submit"
                className="w-full bg-orange text-black font-medium py-3 rounded-lg hover:bg-orange/90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-600 py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="text-center md:text-left">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/dc7288d32ef8e770c7e38a0ca30aecce0066b49f?width=478"
                alt="Mike Herron"
                className="h-10 mb-4"
              />
              <p className="text-sm text-gray-500">©2026 Michael Herron LLC</p>
            </div>
            <p className="text-xs text-gray-600 text-center md:text-right max-w-md">
              All trademarks, logos, and brand names displayed on this website are the property of their respective owners. They are used here strictly for identification and informational purposes to represent companies I have worked for or partnered with throughout my career.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-900 text-center text-xs text-gray-600">
            <p>Designed in partnership with <span className="font-semibold">nzmotiondesign.com</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

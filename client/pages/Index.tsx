import { useState } from "react";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const nftiffDescription =
  "At Chain, I helped lead the launch of NFTiff, Tiffany & Co's first Web3 initiative in collaboration with Yuga Labs and the CryptoPunks community. NFTiff offered 250 limited-edition digital passes that allowed CryptoPunk holders to convert their NFTs into custom luxury pendants, selling out in minutes and generating more than $12.5 million in revenue at launch.\n\nThe project received extensive global press coverage across luxury, technology, and financial media, including Forbes, Bloomberg, The Wall Street Journal, WWD, Vogue Business, CoinDesk, and The New York Times, and quickly became a reference point for how legacy luxury brands can thoughtfully enter Web3 while preserving craftsmanship and brand equity.";

const projectModals = [
  {
    id: 1,
    title: "Driven by Data",
    description:
      "At Lukka, I helped create and launch Driven by Data, a global partnership with Rokit Venturi Racing in Formula E. The campaign used motorsport as a lens to show how teams analyze data, run models, and use simulation to improve vehicle performance, mirroring how institutions rely on complex crypto data feeds. By simplifying a highly technical story, the campaign drove qualified business development leads and generated revenue that exceeded the cost of the partnership, becoming profitable within its first season.",
    videoIds: ["9Q2ySJDRUF8", "G8-FdfGhK3s"],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F14d8743fe1ed4fbebdd58856407160ac?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F17e023be95b94adbbab0b5bbb94fb61e?format=webp&width=800",
    ],
  },
  {
    id: 2,
    title: "H&R Block Retail Tax Software",
    description:
      "At Fusion92, I led the strategic partnership with H&R Block to reinvent how consumers experience tax preparation. We built a direct-to-consumer sales channel that delivered software to people's homes, introduced patented authentication technology, and elevated in-store and online customer experiences. The partnership endured for 19 tax seasons, resulting in more than 45 million software products designed, produced, and distributed, and hundreds of millions of dollars in revenue. The work also served as a trusted strategic resource across product innovation, digital acquisition, and customer experience for H&R Block.",
    videoIds: [],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fad466a460cc542bcab62bf1490002503?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F46c0ca02949a45cb97340041d5116153?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fc08651ab53e8484aa55eccf66342c4f9?format=webp&width=800",
    ],
  },
  {
    id: 3,
    title: "Distracted Driving PSA",
    description:
      "An NHTSA statistic showing drivers are seven times more likely to crash while texting than while driving under the influence became the creative spark for this distracted driving PSA. Developed when I was at U.S. Cellular, with our partners at MullenLowe, the campaign sparked national conversation, was shortlisted for a Cannes Lions award, and was ultimately donated to the Roadside Safety Alliance for broader public impact.",
    videoIds: ["L-ddhlBMFz0"],
  },
  {
    id: 4,
    title: "US Cellular Brand Activations",
    description:
      "At U.S. Cellular, I oversaw brand content across digital and social channels, producing large-scale activation campaigns designed to engage consumers, build brand awareness, and support new lines of service. The work spanned always-on content, seasonal storytelling, and emerging formats, including playlists such as 30 Days of Good, The Future of Good, A Season of Traditions, and immersive 360-degree video experiences.\n\nThe programs were built in partnership with brands and organizations including DJI, Nintendo, Disney, the NBA, the Oklahoma City Thunder, Summerfest, CES, national media outlets, schools, shelters, and charitable organizations. Together, the content helped position U.S. Cellular as a brand rooted in community, innovation, and meaningful connection.",
    videoIds: [
      "PLPvHOrmUSleyDIvAZFMgup2VXp1GyxZba",
      "PLPvHOrmUSlewGuWFuOv9O5dDiK0huG4vJ",
      "PLPvHOrmUSlex9ZYBzFjcQ_LAaXw9NKqDy",
      "PLPvHOrmUSlexAeyBJMx35tt80CXlzWtDJ",
      "PLPvHOrmUSlez8mxAZpqMfbG9t4zx6aApy",
      "PLPvHOrmUSleytGBta2Q2a9GQpR2l8Mn9i",
    ],
    videoTitles: [
      "30 Days of Good",
      "Future of Good",
      "Summerfest",
      "Season of Traditions",
      "Tech Content",
      "360 Degree Storytelling",
    ],
    isPlaylist: true,
  },
  {
    id: 5,
    title: "Unicorn Valuation",
    description:
      "When I joined Lukka, the company had just undergone a CEO transition and was preparing for its next phase of growth and funding. Working closely with the CEO, I led the marketing and positioning efforts that supported more than 200 million in capital raised and helped establish Lukka as a unicorn with a 1.35 billion valuation. The effort brought together institutional partners, including Marshall Wace, S&P, CPA.com, State Street, Liberty City Ventures, and Soros, reinforcing Lukka's credibility as the institutional standard for crypto data.",
    videoIds: ["_jKHNlL6Kq4"],
  },
  {
    id: 6,
    title: "New England Patriots",
    description: loremIpsum,
    videoIds: ["n_HkTymf7_4"],
  },
  {
    id: 7,
    title: "Chainweb EVM",
    description: loremIpsum,
    videoIds: ["Imbi1h_ks8w", "aszqDeyLkSQ", "NfrziZosU5U", "XAnMjppWL6g", "E-Hd6-V5ick", "GUHUpt1fsR4", "tEvjvZLfGV8", "fR0QhDeln68"],
  },
  {
    id: 8,
    title: "Tiffany and Co. NFTiff",
    description: nftiffDescription,
    videoIds: ["MbxJGAtORiU", "vCtd5un9yOA", "u6ly9v7khno", "pySe3U-uI7c"],
  },
  {
    id: 9,
    title: "Chain Wallet App",
    description:
      "At Chain, I led the end-to-end development and launch of Chain Wallet, a non-custodial wallet designed to give users full control over their digital assets through a secure and intuitive experience. My scope included product positioning, UX and UI direction, brand and visual design, user education, production, and go-to-market execution. The result was a self-custody product built around clarity, trust, and usability, helping bridge the gap between crypto native users and a broader audience entering Web3.",
    videoIds: ["-vWANkv-ZyE"],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F997e55cfbf9648ef90b61a70e09ed98a?format=webp&width=800",
    ],
  },
  {
    id: 10,
    title: "Miami Heat",
    description: (
      <div className="space-y-4">
        <div>
          At Chain, I built an official partnership with the Miami Heat designed
          to engage the community, activate fans, and connect blockchain
          technology to real-world impact. The program blended sports marketing,
          local business engagement, and charitable initiatives, with a focus on
          supporting local schools and STEM-related programs.
        </div>
        <div>
          The activation included announcement and in-game content, in-stadium
          jumbotron signage for ticket giveaways, and community moments that
          brought students and families directly into the experience. The work
          demonstrated how brand partnerships can move beyond visibility to
          create meaningful engagement at both a fan and community level.
        </div>
      </div>
    ),
    videoIds: ["Ao_nKj_CYQY", "jscocvv5oeg", "7xnRCndGu3M"],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F852a52403956412ca9d4c28424601e32?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fbab29e3f563c47b3963645a8a2fde120?format=webp&width=800",
    ],
  },
  {
    id: 11,
    title: "#NewKadena",
    description: (
      <div className="space-y-4">
        <div>
          At Kadena, I led #NewKadena, a full rebrand and relaunch of the
          platform designed to reset how the community and the market understood
          the company's vision, technology, and future. The work encompassed a
          new logo and visual identity, brand system, website redesign,
          messaging and positioning framework, refined ICPs, and a fundamentally
          new way of thinking about the Kadena brand.
        </div>
        <div className="mt-4">
          The integrated campaign launched with a deliberate moment of
          disruption. Elements of the website began to glitch, signaling change
          before it was explained. That visual language carried across social
          channels, including individual profile imagery and coordinated
          community participation. The effect created immediate attention,
          widespread discussion, and strong organic reach. The momentum extended
          beyond awareness, breaking Kadena's token price out of its typical
          correlation with broader BTC and ETH market patterns and reinforcing
          the power of brand-led narrative to influence perception, engagement,
          and market behavior.
        </div>
      </div>
    ),
    videoIds: ["PLPvHOrmUSlewKYes8PGiJyS_XQ2NAQDVl", "OCna9S7tnL4"],
    videoTitles: ["Teaser Posts", "Reveal"],
    images: [
      "https://cdn.builder.io/o/assets%2F5031849ff5814a4cae6f958ac9f10229%2Ff5424c18a64b4981afc930c1d6bc2b23?alt=media&token=c85a39ee-0bcd-4b8e-a5e8-e42fa3f38457&apiKey=5031849ff5814a4cae6f958ac9f10229",
      "https://cdn.builder.io/o/assets%2F5031849ff5814a4cae6f958ac9f10229%2F85fc35581529429ab7278d7a8e7539c4?alt=media&token=ffed1761-1a94-4187-b1c0-ce43916aca19&apiKey=5031849ff5814a4cae6f958ac9f10229",
    ],
  },
  {
    id: 12,
    title: "Croatian Men's National Football Club",
    description:
      "As Chief Marketing Officer at Kadena, I helped establish the company as an official partner of the Croatian Men's National Football Team. The partnership brought blockchain technology into global football through jersey placement, World Cup visibility, and digital fan engagement. The work included mobile-first campaigns to drive app downloads as well as announcement and launch assets designed to introduce the partnership to a global audience.",
    videoIds: ["hFFI4Ke2xrY", "HMnaUcnEOR0", "xWJqESUrC5Y"],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F12ad31dffe84476ab186908c88e898bc?format=webp&width=800",
    ],
    animatedGif: "https://cdn.builder.io/o/assets%2F5031849ff5814a4cae6f958ac9f10229%2F6c9eeb5fe1ff4728ad4c6a18c97212b2?alt=media&token=3d7fd63a-3429-4135-aabf-2060f203c573&apiKey=5031849ff5814a4cae6f958ac9f10229",
  },
];

export default function Index() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState("");

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
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-16">
            <a
              href="#about"
              className="text-gray-900 font-medium text-base transition relative group hover:scale-110"
            >
              About Me
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
            </a>
            <a
              href="#worked-for"
              className="text-gray-900 font-medium text-base transition relative group hover:scale-110"
            >
              Worked For
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
            </a>
            <a
              href="#worked-with"
              className="text-gray-900 font-medium text-base transition relative group hover:scale-110"
            >
              Worked With
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
            </a>
            <a
              href="#worked-on"
              className="text-gray-900 font-medium text-base transition relative group hover:scale-110"
            >
              Worked On
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-900 font-medium text-base transition relative group hover:scale-110"
            >
              Work Together
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
            </a>
          </nav>

          {/* LinkedIn Icon */}
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/mherron54/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#0077b5] transition"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Profile Image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12 lg:pb-[620px] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="flex flex-col justify-start mt-6 lg:mt-16 lg:absolute lg:left-8 lg:top-[17px] lg:z-10 lg:w-2/3">
              <h1 className="text-[26px] sm:text-[40px] lg:text-[57px] font-bold leading-none mb-6 sm:mb-8">
                <span className="text-gray-900">Marketing Executive</span>
                <br />
                <span className="text-gray-400">That Turns </span>
                <span className="text-gray-600">Complex Ideas</span>
                <br />
                <span className="text-gray-400">Into </span>
                <span className="text-gray-600">
                  Clear, Measurable Results
                  <span className="text-orange">.</span>
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 mb-4 lg:mb-16">
                <a
                  href="#contact"
                  className="w-fit bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium text-sm transition inline-block"
                >
                  Let's Chat
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex lg:hidden w-full justify-center order-2">
              {/* Mobile/Tablet Profile Image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fd6df606957e743d297d63333c2237ba5?format=webp&width=800"
                alt="Mike Herron"
                className="w-full max-w-sm object-cover object-top rounded-lg"
              />
            </div>

            {/* Desktop Profile Image */}
            <div className="hidden lg:flex lg:justify-end lg:absolute lg:right-4 lg:top-[17px] lg:h-[600px] lg:items-start overflow-hidden">
              {/* Profile Image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fd6df606957e743d297d63333c2237ba5?format=webp&width=800"
                alt="Mike Herron"
                className="max-w-xl lg:max-w-2xl object-cover object-top rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dear Founders Newsletter Card */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 lg:-mt-[100px] relative z-20 mb-8 lg:mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          {/* Want to learn more section - Order 3 on mobile, 1 on desktop */}
          <div className="space-y-4 flex flex-col items-start lg:ml-[50px] order-3 lg:order-1 w-full lg:w-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Want to learn more<span className="text-orange">?</span>
            </h3>
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7401675485820338176"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit lg:w-auto bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium text-sm transition text-center lg:self-end lg:inline-block"
            >
              Subscribe on LinkedIn
            </a>
          </div>

          <div className="w-full lg:max-w-2xl bg-gradient-to-r from-black to-gray-800 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6 lg:gap-8 shadow-lg lg:flex-shrink-0 order-2 lg:order-2">
            {/* Logo/Icon */}
            <div className="flex-shrink-0 w-16 h-16 lg:w-24 lg:h-24">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Ffaeaced820ad4f3c8fbfdb1ffadbb2a4?format=webp&width=400"
                alt="Dear Founders Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <div className="text-orange text-sm font-semibold tracking-wider mb-2">
                LINKEDIN NEWSLETTER
              </div>
              <h3 className="text-white text-2xl lg:text-4xl font-bold mb-2">
                Dear Founders
              </h3>
              <p className="text-gray-300 text-sm lg:text-base">
                Marketing clarity for the modern entrepreneur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-white py-12 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Title and Subtitle */}
            <div className="flex flex-col gap-8">
              <h2 className="text-[26px] sm:text-[40px] lg:text-5xl font-medium">
                <span className="text-gray-900">About Me</span>
                <span className="text-orange">.</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                I've built my career by asking, "Why are we doing this" and
                "What does success look like."
              </p>
            </div>

            {/* Right Column - Bio Content */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <p className="text-gray-900 text-base leading-relaxed">
                I am a lifelong Chicagoan, a husband, and a father of four. I
                have spent my career building, leading, and scaling marketing
                organizations that help companies grow with clarity and purpose.
                Over the past twenty-five years, I have worked across every
                corner of the marketing world, including client-side roles
                inside large enterprises, agency leadership supporting global
                brands, entrepreneurial ventures built from the ground up, and
                consulting engagements trusted to solve complex challenges.
              </p>
              <p className="text-gray-900 text-base leading-relaxed">
                I have led marketing for fast-moving blockchain and fintech
                companies, managed multi-million dollar brand partnerships,
                guided agency teams serving Fortune 500 clients, and helped
                launch new products for both startups and established
                businesses. No matter the setting, I am at my best when I am
                building something and helping people see what is possible.
              </p>
              <p className="text-gray-900 text-base leading-relaxed">
                At work and at home, I lead with honesty, curiosity, and a calm,
                steady presence that gives teams confidence. I believe in clear
                goals, transparent conversations, and creating environments
                where people can do the best work of their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worked For Section */}
      <section id="worked-for" className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Left Sticky Column */}
            <div className="lg:sticky lg:top-24 h-fit">
              <h2 className="text-[26px] sm:text-[40px] lg:text-5xl font-medium mb-6">
                <span className="text-gray-900">Worked for</span>
                <span className="text-orange">.</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                I have partnered with world class teams to deliver high impact
                campaigns, product launches, and brand experiences across a wide
                range of industries.
              </p>
            </div>

            {/* Right Scrollable Column - Job Entries */}
            <div className="lg:col-span-2 space-y-12 divide-y divide-gray-200">
              {/* Kadena */}
              <div className="pt-12 first:pt-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F9394984ab56d49318277639d40031b24?format=webp&width=800"
                  alt="Kadena"
                  className="h-14 object-contain mb-6 w-auto"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Chief Marketing Officer{" "}
                  <span className="text-gray-600 font-normal">
                    | September 2023 - November 2025
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  High performing Layer 1 blockchain driving institutional
                  adoption and developer growth through secure, scalable
                  infrastructure. Built and matured the global marketing
                  organization, leading brand, growth, product marketing,
                  content, community, and partnerships.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">
                    Top Level Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>
                      Built and scaled a 10 person in house marketing team and
                      onboarded top tier PR and creative partners.
                    </li>
                    <li>
                      Led a complete end to end rebrand to reposition Kadena for
                      institutional trust and developer adoption.
                    </li>
                    <li>
                      Designed a community strategy that increased positive
                      sentiment by more than{" "}
                      <span className="font-semibold">200 percent</span> while
                      maintaining engagement rates above{" "}
                      <span className="font-semibold">7 percent</span>.
                    </li>
                    <li>
                      Established the company's paid media framework, expanding
                      budget from{" "}
                      <span className="font-semibold">100K to 500K</span> across
                      paid social, KOLs, search, and sponsorships.
                    </li>
                    <li>
                      Finalized a major partnership with the Croatian National
                      Football Federation including jersey placement, World Cup
                      activations, and mobile app integration.
                    </li>
                    <li>
                      Secured coverage across Forbes, Bloomberg, CoinDesk, The
                      Block, and other global outlets.
                    </li>
                    <li>
                      Developed the GTM strategy for a multi chain EVM product
                      attracting more than{" "}
                      <span className="font-semibold">8,000</span> testnet users
                      and <span className="font-semibold">1,000</span> deployed
                      smart contracts.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Chain */}
              <div className="pt-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fc09e204150174a489ae08ab32725d764?format=webp&width=800"
                  alt="Chain"
                  className="h-12 object-contain mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Chief Marketing Officer{" "}
                  <span className="text-gray-600 font-normal">
                    | May 2022 - September 2023
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Blockchain infrastructure company delivering enterprise grade
                  financial technology for global brands. Directed global brand,
                  growth, communications, product marketing, and partnerships.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">
                    Top Level Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>
                      Built and led the global marketing function for a
                      multibillion dollar blockchain company.
                    </li>
                    <li>
                      Negotiated and activated major professional sports
                      sponsorships with the New England Patriots, Miami Heat,
                      and New England Revolution.
                    </li>
                    <li>
                      Launched three new B2B products and the company's first
                      direct to consumer digital wallet.
                    </li>
                    <li>
                      Closed a landmark Tiffany & Co and Yuga Labs partnership
                      that generated <span className="font-semibold">15M</span>{" "}
                      in revenue and sold out in under{" "}
                      <span className="font-semibold">15 minutes</span>.
                    </li>
                    <li>
                      Oversaw investor relations initiatives that supported{" "}
                      <span className="font-semibold">120M</span> in token
                      purchases from major investors.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Lukka */}
              <div className="pt-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fda5358d50e26487d909c74e5402762fa?format=webp&width=800"
                  alt="Lukka"
                  className="h-10 object-contain mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Global Head of Marketing{" "}
                  <span className="text-gray-600 font-normal">
                    | August 2020 - May 2022
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Blockchain and crypto asset data provider serving the world's
                  largest financial institutions, fund administrators, and
                  government agencies. Led all global marketing during
                  significant company growth and valuation inflection.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">
                    Top Level Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>
                      Directed global marketing for a{" "}
                      <span className="font-semibold">1.35B</span> institutional
                      blockchain data company.
                    </li>
                    <li>
                      Executive team member contributing to multiple successful
                      funding rounds.
                    </li>
                    <li>
                      Scaled the marketing team from{" "}
                      <span className="font-semibold">2 to 16</span> in one year
                      and implemented more than{" "}
                      <span className="font-semibold">100</span> standardized
                      processes.
                    </li>
                    <li>
                      Built Lukka's first comprehensive brand and go to market
                      strategy across positioning, messaging, and segmentation.
                    </li>
                    <li>
                      Negotiated a multi year global title sponsorship with
                      Formula E to support international expansion.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Work & Co */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f9a952caa622f1b34ebb2e5d1217b5d022627766?width=266"
                  alt="Work & Co"
                  className="h-14 object-contain mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Group Account Director{" "}
                  <span className="text-gray-600 font-normal">
                    | July 2019 - August 2020
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Full service digital marketing and innovation agency serving
                  Fortune 500 clients across finance, telecom, insurance, and
                  retail. Directed strategy, client success, and revenue growth
                  across a large enterprise portfolio.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">
                    Top Level Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>
                      Managed a portfolio of global brands including H&R Block,
                      AT&T, and Zurich generating more than{" "}
                      <span className="font-semibold">16M</span> in agency fees.
                    </li>
                    <li>
                      Oversaw integrated digital, social, UX, media, and
                      experiential programs across multiple verticals.
                    </li>
                    <li>
                      Led multidisciplinary creative, media, and strategy teams
                      to exceed performance KPIs.
                    </li>
                    <li>
                      Strengthened client relationships through data driven
                      strategy and ROI focused execution.
                    </li>
                  </ul>
                </div>
              </div>

              {/* MCS Consulting */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/364cdce97b6a21af5a17e8ed3fa80147b0efa0db?width=430"
                  alt="MCS Consulting"
                  className="h-12 object-contain mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Head of Marketing{" "}
                  <span className="text-gray-600 font-normal">
                    | November 2017 - June 2019
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Digital marketing and strategy consultancy supporting global
                  enterprise clients with e-commerce growth, brand development,
                  and full funnel marketing execution across travel,
                  hospitality, and financial sectors.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">
                    Top Level Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>
                      Launched United Airlines' MileagePlusGolf.com, unlocking{" "}
                      <span className="font-semibold">800K</span> in private
                      investment and exceeding pre launch sales goals by{" "}
                      <span className="font-semibold">230 percent</span>.
                    </li>
                    <li>
                      Achieved <span className="font-semibold">8:1 ROAS</span>{" "}
                      through optimized paid media and lifecycle marketing.
                    </li>
                    <li>
                      Negotiated <span className="font-semibold">200K</span> in
                      brand partnerships to generate ongoing monthly revenue
                      streams.
                    </li>
                    <li>
                      Directed content, influencer marketing, and e-commerce
                      integrations for major enterprise clients.
                    </li>
                  </ul>
                </div>
              </div>

              {/* US Cellular */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da9ede529f3b039e3f7e90e2dcb5f2928ac1c616?width=366"
                  alt="US Cellular"
                  className="h-12 object-contain mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Global Head of Marketing{" "}
                  <span className="text-gray-600 font-normal">
                    | December 2013 - November 2017
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Major national wireless carrier. Led digital, social, and
                  brand marketing for B2C, B2B, and HR audiences across national
                  markets. Managed an 11 person team responsible for digital
                  content, performance marketing, and social strategy.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">
                    Top Level Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>
                      Increased annual revenues by{" "}
                      <span className="font-semibold">14 percent</span> through
                      new partner acquisition programs.
                    </li>
                    <li>
                      Grew digital and social budgets by more than{" "}
                      <span className="font-semibold">1,200 percent</span> while
                      improving ROI.
                    </li>
                    <li>
                      Produced <span className="font-semibold">200+</span>{" "}
                      branded videos generating{" "}
                      <span className="font-semibold">50M+</span> views and a{" "}
                      <span className="font-semibold">9 point</span> lift in
                      brand consideration.
                    </li>
                    <li>
                      Collaborated with Disney, Lucasfilm, Apple, Samsung,
                      Google, MLB, NCAA, and NBA.
                    </li>
                    <li>
                      Digital and social channels delivered{" "}
                      <span className="font-semibold">40 percent</span> of all
                      online gross adds at a lower acquisition cost.
                    </li>
                  </ul>
                </div>
              </div>

              {/* SOLO */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7faec79871be3f0740f20030837c6a244d846344?width=366"
                  alt="SOLO"
                  className="h-10 object-contain mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Manager, Online Engagement{" "}
                  <span className="text-gray-600 font-normal">
                    | April 2011 - December 2013
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  National consumer products company known for one of the most
                  recognizable brands in retail and food service. Led digital
                  engagement, influencer marketing, and social strategy
                  supporting large scale consumer growth.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">
                    Top Level Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>
                      Directed influencer and blogger programs that generated
                      more than <span className="font-semibold">6 million</span>{" "}
                      impressions per year and expanded national brand
                      visibility.
                    </li>
                    <li>
                      Managed a <span className="font-semibold">900k</span>{" "}
                      social media budget and led an{" "}
                      <span className="font-semibold">11 person</span> team
                      across internal contributors and two agency partners.
                    </li>
                    <li>
                      Increased social engagement rates by an estimated{" "}
                      <span className="font-semibold">40 percent</span> through
                      targeted campaigns, platform testing, and audience
                      segmentation.
                    </li>
                    <li>
                      Improved website traffic by an estimated{" "}
                      <span className="font-semibold">35 percent</span> after
                      leading the consumer site redesign and strengthening SEO
                      and SEM programs.
                    </li>
                    <li>
                      Delivered double digit growth in campaign reach and
                      participation across national promotions by launching new
                      social activation frameworks.
                    </li>
                  </ul>
                </div>
              </div>

              {/* XFO */}
              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/93aedf901d177a1302e95a4cd88df3b642450477?width=286"
                  alt="XFO"
                  className="h-14 object-contain mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Partner{" "}
                  <span className="text-gray-600 font-normal">
                    | January 2011 - May 2017
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Mixed martial arts promotion recognized as one of the premier
                  combat sports organizations in the Midwest. Led brand
                  development, event growth, and commercial strategy for one of
                  the longest running regional MMA promotions in the United
                  States.
                </p>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="font-semibold text-gray-700">
                    Top Level Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                    <li>
                      Helped build the XFO into the Midwest's leading MMA
                      organization, sending more than{" "}
                      <span className="font-semibold">100 fighters</span> to the
                      UFC.
                    </li>
                    <li>
                      Oversaw attendee experience marketing and audience growth
                      that increased regional visibility and boosted average
                      event attendance by an estimated{" "}
                      <span className="font-semibold">30 percent</span>.
                    </li>
                    <li>
                      Grew sponsorship and partnership revenue through local and
                      regional brand deals, securing{" "}
                      <span className="font-semibold">six figure</span> annual
                      commitments.
                    </li>
                    <li>
                      Expanded ticket sales year over year through targeted
                      promotion, fighter storytelling, and market specific
                      activations.
                    </li>
                    <li>
                      Managed event promotion, sponsorships, and operational
                      planning across more than a decade of live events,
                      culminating in the UFC purchasing the full fight library
                      for exclusive distribution on UFC Fight Pass.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Earlier Career */}
              <div className="pt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Earlier Career in E-Commerce & Brand Marketing
                </h3>
                <div className="text-gray-600 text-sm space-y-3">
                  <p>
                    <span className="font-semibold">Marketing Manager</span> —
                    Benchmark Hospitality (2009–2011)
                  </p>
                  <p>
                    <span className="font-semibold">
                      Director of Sales & Marketing
                    </span>{" "}
                    — KemperSports (2007–2009)
                  </p>
                  <p>
                    <span className="font-semibold">
                      Business Development Manager
                    </span>{" "}
                    — Excel Golf Products (2001–2007)
                  </p>
                  <p>
                    <span className="font-semibold">E-Commerce Manager</span> —
                    Tour Edge Golf (1999–2001)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked With Section */}
      <section id="worked-with" className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4">
            {/* Left Column - Title, Description, and Notable Companies */}
            <div className="flex flex-col gap-8">
              {/* Title and Description */}
              <div className="flex flex-col gap-6">
                <h2 className="text-[26px] sm:text-[40px] lg:text-5xl font-medium">
                  <span className="text-gray-900">Worked with</span>
                  <span className="text-orange">.</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                  I have had the privilege of working with some of the biggest
                  and most influential brands in the world. These partnerships
                  brought me into conversations that shaped global sports,
                  luxury, technology, and consumer culture, and gave me the
                  opportunity to help launch products, tell powerful stories,
                  and create marketing that delivers real business results.
                </p>
              </div>

              {/* Other Notable Companies */}
              <div className="flex flex-col gap-3">
                <h3 className="text-gray-900 text-base font-medium">
                  Other Notable Companies:
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Formula 1<br />
                      Formula E<br />
                      State Street
                      <br />
                      Blackrock
                      <br />
                      S&P
                      <br />
                      Choice Hotels
                      <br />
                      New England Patriots
                      <br />
                      Miami Heat
                      <br />
                      Chicago White Sox
                    </p>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Zurich
                      <br />
                      Nintendo
                      <br />
                      Lucasfilms
                      <br />
                      CAA
                      <br />
                      MLB
                      <br />
                      NBA
                      <br />
                      NCAA
                      <br />
                      NFL
                      <br />
                      DJI
                    </p>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      SummerFest
                      <br />
                      Facebook
                      <br />
                      Twitter
                      <br />
                      MasterCard
                      <br />
                      Yuga Labs
                      <br />
                      Uniswap
                      <br />
                      Garmin
                      <br />
                      NFL
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Company Logos Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-x-0 gap-y-[50px] items-center">
                {/* H&R Block */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/5082733f13508ac3584f7a25a02f153f0a3b6e63?width=406"
                    alt="H&R Block"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>

                {/* New England Patriots */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f1e7c3ab6c3570e6dfb39ccbc33a5bc8ecdc57ad?width=406"
                    alt="New England Patriots"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>

                {/* State Street */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/03cd2a10ecbcef125319fb7d0636129fd7f1e3eb?width=458"
                    alt="State Street"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>

                {/* United Airlines */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/895176dbecd37f931f3d36003aed32daec12f58b?width=484"
                    alt="United Airlines"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>

                {/* Samsung */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e133ed090e21a7edffb9d88688facd497ee1896d?width=502"
                    alt="Samsung"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>

                {/* Tiffany & Co */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/450c80fe12f7aa770169037dab2bb97e47015f63?width=490"
                    alt="Tiffany & Co"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>

                {/* AT&T */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/51a231e947d45779a880c691b62cdf4a6a7a4158?width=436"
                    alt="AT&T"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>

                {/* Disney */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/148468b93f634ce997e825f7096f3a0e31b854aa?width=442"
                    alt="Disney"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>

                {/* Bloomberg */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/eaa9f4e8443b43ecce394395f210d61bd309a399?width=488"
                    alt="Bloomberg"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>

                {/* Google */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/28bbdb7f27a8aeb79d5960bcc4c1fcbfea020fe4?width=404"
                    alt="Google"
                    className="max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] max-h-[120px] sm:max-h-[160px] lg:max-h-[200px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked On Section */}
      <section id="worked-on" className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left Column - Title and Description */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-[26px] sm:text-[40px] lg:text-5xl font-medium">
                  <span className="text-gray-900">Worked on</span>
                  <span className="text-orange">.</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                  Here are a few examples of the campaigns, partnerships,
                  launches, and brand moments I helped create. These projects
                  brought together cross functional teams, creative talent,
                  enterprise partners, and global audiences, and reflect the
                  kind of marketing that moves people and drives results. This
                  body of work has been recognized by organizations such as
                  Adweek, Adweek Arc, Cannes Lions, the Hatch Awards, the Obies,
                  the Shorty Awards, and the Webby Awards.
                </p>
              </div>
            </div>

            {/* Right Column - Project Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-4 sm:gap-5">
                {/* Box 1 - Lukka Formula E */}
                <button
                  onClick={() => setActiveModal(1)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-200 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F88d20ef8b082451b8105ca7ae1767a27?format=webp&width=400"
                    alt="Lukka Formula E"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>

                {/* Box 2 - Fusion 92 H&R Block */}
                <button
                  onClick={() => setActiveModal(2)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F57b2e77ba8444e99a4b6c00ea18dbcc7?format=webp&width=400"
                    alt="Fusion 92 H&R Block"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>

                {/* Box 3 - US Cellular Campaign */}
                <button
                  onClick={() => setActiveModal(3)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-200 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F036e9110d57545f4909f28fcf01c9b44?format=webp&width=400"
                    alt="US Cellular campaign"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>

                {/* Box 4 - US Cellular Future of Good */}
                <button
                  onClick={() => setActiveModal(4)}
                  className="aspect-square rounded-lg overflow-hidden bg-white cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fa44c6f08b0bf40cb8ea08f61968b988c?format=webp&width=400"
                    alt="US Cellular Future of Good"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>

                {/* Box 5 - Lukka Data Visualization */}
                <button
                  onClick={() => setActiveModal(5)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-900 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F74eb105410174fef8bb2485c242e4791?format=webp&width=400"
                    alt="Lukka data visualization"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>

                {/* Box 6 - Chain Patriots Helmet */}
                <button
                  onClick={() => setActiveModal(6)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fbdd2fc26b9d54f32b18e8b118634aded?format=webp&width=400"
                    alt="Chain Patriots helmet"
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                </button>

                {/* Box 7 - Tiffany & Co NFT */}
                <button
                  onClick={() => setActiveModal(7)}
                  className="aspect-square rounded-lg overflow-hidden bg-teal-100 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F3cbaf395ebe14ab791ad4e9041d89cb1?format=webp&width=400"
                    alt="Tiffany & Co NFT"
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                </button>

                {/* Box 8 - Chain Wallet App */}
                <button
                  onClick={() => setActiveModal(8)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-900 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fda94d5220fa14f78aca333eaa563a96a?format=webp&width=400"
                    alt="Chain Wallet App"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>

                {/* Box 9 - Chain Wallet App */}
                <button
                  onClick={() => setActiveModal(9)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-200 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Ff6c63303bba445518833f99b005c1015?format=webp&width=400"
                    alt="Chain Wallet App"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>

                {/* Box 10 - Miami Heat */}
                <button
                  onClick={() => setActiveModal(10)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fe811583a315942fc847cc150544fe89a?format=webp&width=400"
                    alt="Miami Heat"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>

                {/* Box 11 - New Kadena */}
                <button
                  onClick={() => setActiveModal(11)}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-900 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F23206d4f72d4440794aa666f55144fab?format=webp&width=400"
                    alt="New Kadena"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>

                {/* Box 12 - Croatian Football Federation */}
                <button
                  onClick={() => setActiveModal(12)}
                  className="aspect-square rounded-lg overflow-hidden bg-red-600 cursor-pointer group relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fed0ea93f040f4729a2ea432b157dad56?format=webp&width=400"
                    alt="Croatian Football Federation"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Let's work </span>
              <span className="text-gray-400">together</span>
              <span className="text-orange">.</span>
            </h2>

            <p className="text-gray-900 text-lg md:text-2xl font-medium mb-12">
              <span>Audits </span>
              <span className="text-orange">|</span>
              <span> Consulting </span>
              <span className="text-orange">|</span>
              <span> Fractional </span>
              <span className="text-orange">|</span>
              <span> Full-Time </span>
              <span className="text-orange">|</span>
              <span> Board Member</span>
            </p>

            {/* Contact Form */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setFormStatus("loading");
                try {
                  const response = await fetch("/.netlify/functions/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                  });
                  const data = await response.json();
                  console.log("Response:", { status: response.status, data });
                  if (response.ok) {
                    setFormData({ name: "", email: "" });
                    setFormStatus("success");
                    setFormMessage(
                      "Thank you! Your message has been sent successfully.",
                    );
                    setTimeout(() => setFormStatus("idle"), 5000);
                  } else {
                    setFormStatus("error");
                    setFormMessage(
                      `Error: ${data.error || "Failed to send message"}`,
                    );
                  }
                } catch (error) {
                  console.error("Form submission error:", error);
                  setFormStatus("error");
                  setFormMessage("Error sending message. Please try again.");
                }
              }}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="flex-1 sm:max-w-xs px-6 py-3 rounded-full border border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange transition-colors"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="flex-1 sm:max-w-xs px-6 py-3 rounded-full border border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 rounded-full md:rounded lg:rounded-full bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors"
              >
                Submit
              </button>
            </form>

            {/* Form Status Message */}
            {formStatus === "success" && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <p className="font-medium">✓ {formMessage}</p>
              </div>
            )}

            {formStatus === "error" && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                <p className="font-medium">✗ {formMessage}</p>
              </div>
            )}

            {formStatus === "loading" && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
                <p className="font-medium">Sending...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://api.builder.io/api/v1/image/assets/TEMP/903284eb0b0fd2db5e5cb6a2795cd37d6e8819bd?width=5328)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disclaimer - Full Width */}
          <div className="mb-12 lg:text-center">
            <div className="text-sm lg:text-xs text-gray-400 lg:text-gray-600 leading-relaxed">
              <p>
                All trademarks, logos, and brand names displayed on this website
                are the property of their respective owners. They are used here
                strictly for identification and informational purposes to
                represent companies I have worked for or partnered with
                throughout my career. Their appearance does not imply any
                endorsement, approval, sponsorship, or affiliation with this
                website or with me personally. Any references to past work,
                partnerships, or collaborations are historical in nature and are
                presented solely to provide context regarding my professional
                experience.
              </p>
            </div>
          </div>

          {/* Logo and Copyright - Bottom Row */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-12 gap-4 lg:gap-0">
            {/* Left - Logo */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/dc7288d32ef8e770c7e38a0ca30aecce0066b49f?width=478"
              alt="Mike Herron"
              className="h-16 w-auto"
            />

            {/* Right - Copyright */}
            <p className="text-gray-400 text-sm font-medium">
              ©2026 Michael Herron LLC
            </p>
          </div>

          {/* Design Credit */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-xs text-gray-500">
              Designed in partnership with{" "}
              <a
                href="https://nzmotiondesign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-400 hover:text-white transition-colors"
              >
                nzmotiondesign.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-12 max-w-5xl w-full h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors z-20 bg-white rounded-full p-2"
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

            {/* Header and Description */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                {projectModals[activeModal - 1].title}
              </h2>
              {typeof projectModals[activeModal - 1].description !==
              "string" ? (
                <div className="text-gray-600 text-base leading-relaxed">
                  {projectModals[activeModal - 1].description}
                </div>
              ) : (
                <p className="text-gray-600 text-base leading-relaxed">
                  {projectModals[activeModal - 1].description}
                </p>
              )}
            </div>

            {/* Animated GIF section for modal 10 */}
            {activeModal === 10 && (
              <div className="w-full h-16 -my-2">
                <img
                  src="https://cdn.builder.io/o/assets%2F5031849ff5814a4cae6f958ac9f10229%2F872f87fef677478a8bc7535b1585edf9?alt=media&token=0c66e98d-731d-4ad8-af17-f79d1dbb0cd3&apiKey=5031849ff5814a4cae6f958ac9f10229"
                  alt="Animated GIF"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Animated GIF section for modal 12 */}
            {activeModal === 12 && projectModals[activeModal - 1].animatedGif && (
              <div className="w-full">
                <img
                  src={projectModals[activeModal - 1].animatedGif}
                  alt="Animated GIF"
                  className="w-full h-auto object-contain"
                />
              </div>
            )}

            {/* Videos and Images Layout */}
            {activeModal === 11 ? (
              <div className="w-full space-y-6">
                {/* First Video with Images on Right */}
                {projectModals[activeModal - 1].videoTitles &&
                  projectModals[activeModal - 1].videoTitles[0] && (
                    <h3 className="text-lg font-semibold text-gray-900">
                      {projectModals[activeModal - 1].videoTitles[0]}
                    </h3>
                  )}
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Left: First Video */}
                  <div className="flex-1 min-w-0 w-full lg:w-auto">
                    <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          projectModals[activeModal - 1].isPlaylist ||
                          projectModals[activeModal - 1].videoIds[0].startsWith(
                            "PL",
                          )
                            ? `https://www.youtube.com/embed/videoseries?list=${projectModals[activeModal - 1].videoIds[0]}`
                            : `https://www.youtube.com/embed/${projectModals[activeModal - 1].videoIds[0]}`
                        }
                        title="Project Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>

                  {/* Right: Stacked Images (Vertical on Desktop, Horizontal on Mobile) */}
                  <div
                    className="w-full lg:w-52 flex flex-row lg:flex-col lg:flex-shrink-0 lg:justify-between"
                    style={{
                      gap: "50px",
                      height: "auto",
                    }}
                  >
                    {projectModals[activeModal - 1].images &&
                      projectModals[activeModal - 1].images.map(
                        (imageUrl, index) => (
                          <div
                            key={`image-${index}`}
                            className="flex-1 lg:flex-none lg:w-full h-40 lg:h-44 rounded-lg overflow-hidden flex items-center justify-center"
                          >
                            <img
                              src={imageUrl}
                              alt={`Project Image ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ),
                      )}
                  </div>
                </div>

                {/* Second Video - Full Width */}
                {projectModals[activeModal - 1].videoIds.length > 1 && (
                  <div>
                    {projectModals[activeModal - 1].videoTitles &&
                      projectModals[activeModal - 1].videoTitles[1] && (
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {projectModals[activeModal - 1].videoTitles[1]}
                        </h3>
                      )}
                    <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          projectModals[activeModal - 1].isPlaylist ||
                          projectModals[activeModal - 1].videoIds[1].startsWith(
                            "PL",
                          )
                            ? `https://www.youtube.com/embed/videoseries?list=${projectModals[activeModal - 1].videoIds[1]}`
                            : `https://www.youtube.com/embed/${projectModals[activeModal - 1].videoIds[1]}`
                        }
                        title="Project Video 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full space-y-4">
                {/* Images section - displayed horizontally at top */}
                {projectModals[activeModal - 1].images &&
                  projectModals[activeModal - 1].images.length > 0 && (
                    <div className="w-full flex flex-col lg:flex-row gap-4 h-auto md:h-96 lg:h-96 mt-4">
                      {projectModals[activeModal - 1].images.map(
                        (imageUrl, index) => (
                          <div
                            key={`image-${index}`}
                            className={`flex-1 rounded-lg overflow-hidden flex items-center justify-center ${(activeModal === 10 || activeModal === 12) ? "" : "bg-gray-100"}`}
                          >
                            <img
                              src={imageUrl}
                              alt={`Project Image ${index + 1}`}
                              className={`w-full h-full ${(activeModal === 10 || activeModal === 12) ? "object-cover" : "object-contain"}`}
                            />
                          </div>
                        ),
                      )}
                    </div>
                  )}

                {/* Default layout for other modals */}
                <div className="w-full flex flex-col gap-4">
                  {projectModals[activeModal - 1].videoIds.map(
                    (videoId, index) => (
                      <div key={`video-${index}`} className="w-full">
                        {projectModals[activeModal - 1].videoTitles &&
                          projectModals[activeModal - 1].videoTitles[index] && (
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              {
                                projectModals[activeModal - 1].videoTitles[
                                  index
                                ]
                              }
                            </h3>
                          )}
                        <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
                          <iframe
                            width="100%"
                            height="100%"
                            src={
                              projectModals[activeModal - 1].isPlaylist ||
                              videoId.startsWith("PL")
                                ? `https://www.youtube.com/embed/videoseries?list=${videoId}`
                                : `https://www.youtube.com/embed/${videoId}`
                            }
                            title={`Project Video ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

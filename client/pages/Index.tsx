import { useEffect, useState } from "react";

const nftiffDescription =
  "At Chain, I helped lead the launch of NFTiff, Tiffany & Co's first Web3 initiative in collaboration with Yuga Labs and the CryptoPunks community. NFTiff offered 250 limited-edition digital passes that allowed CryptoPunk holders to convert their NFTs into custom luxury pendants, selling out in minutes and generating more than $12.5 million in revenue at launch.\n\nThe project received extensive global press coverage across luxury, technology, and financial media, including Forbes, Bloomberg, The Wall Street Journal, WWD, Vogue Business, CoinDesk, and The New York Times, and quickly became a reference point for how legacy luxury brands can thoughtfully enter Web3 while preserving craftsmanship and brand equity.";

const patriotsDescription =
  "At Chain, I helped build and activate the company's partnership with the New England Patriots, creating branded content, stadium presence, and fan-facing campaign moments designed to connect blockchain technology to one of the most recognizable franchises in professional sports. The work combined premium brand storytelling, team partnership activation, and audience engagement across digital and live environments.";

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
    description: (
      <div className="space-y-4">
        <div>
          At U.S. Cellular, I oversaw brand content across digital and social
          channels, producing large-scale activation campaigns designed to
          engage consumers, build brand awareness, and support new lines of
          service. The work spanned always-on content, seasonal storytelling,
          and emerging formats, including playlists such as 30 Days of Good, The
          Future of Good, A Season of Traditions, and immersive 360-degree video
          experiences.
        </div>
        <div>
          The programs were built in partnership with brands and organizations
          including DJI, Nintendo, Disney, the NBA, the Oklahoma City Thunder,
          Summerfest, CES, national media outlets, schools, shelters, and
          charitable organizations. Together, the content helped position U.S.
          Cellular as a brand rooted in community, innovation, and meaningful
          connection.
        </div>
      </div>
    ),
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
    description: patriotsDescription,
    videoIds: ["n_HkTymf7_4", "-CNOy4SPTtA", "9HU4hcpz_Mo"],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F1fe83172c7ab462c883c9f2abeba2be8?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F4c3e24c6ebe44fc9aad4aae30c31ba66?format=webp&width=800",
    ],
    animatedGif:
      "https://cdn.builder.io/o/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fb0a1a8f09abe4dba9f3bab735a542da0?alt=media&token=ebb92a5b-bf98-4ca8-806e-df1fdb6ca6ce&apiKey=5031849ff5814a4cae6f958ac9f10229",
  },
  {
    id: 7,
    title: "Chainweb EVM",
    description: (
      <div className="space-y-4">
        <div>
          At Kadena, I led the launch of Chainweb EVM, a major product milestone
          designed to expand the ecosystem and accelerate developer adoption.
          The launch combined product storytelling, partner momentum, and a
          coordinated teaser strategy that built anticipation before revealing
          the full scope of the platform.
        </div>
        <div>
          The campaign reintroduced the hidden-logo motif from #NewKadena, using
          covered partner logos and staged reveals to signal credibility and
          scale before launch. Once live, the response was immediate. Within the
          first 90 days, the ecosystem signed more than 70 development partners,
          processed over 50,000 transactions, onboarded more than 7,500 users,
          created 6,500 wallets, and saw the deployment of more than 1,000
          smart contracts. The work demonstrated how disciplined narrative,
          strong partner alignment, and product-led marketing can drive rapid,
          measurable adoption at launch.
        </div>
      </div>
    ),
    videoIds: [
      "NfrziZosU5U",
      "Imbi1h_ks8w",
      "aszqDeyLkSQ",
      "XAnMjppWL6g",
      "E-Hd6-V5ick",
      "GUHUpt1fsR4",
      "tEvjvZLfGV8",
      "fR0QhDeln68",
    ],
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
          At Chain, I built an official partnership with the Miami Heat
          designed to engage the community, activate fans, and connect
          blockchain technology to real-world impact. The program blended sports
          marketing, local business engagement, and charitable initiatives, with
          a focus on supporting local schools and STEM-related programs.
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
        <div>
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
    animatedGif:
      "https://cdn.builder.io/o/assets%2F5031849ff5814a4cae6f958ac9f10229%2F6c9eeb5fe1ff4728ad4c6a18c97212b2?alt=media&token=3d7fd63a-3429-4135-aabf-2060f203c573&apiKey=5031849ff5814a4cae6f958ac9f10229",
  },
];

const projectTiles = [
  {
    id: 1,
    title: "Driven by Data",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F88d20ef8b082451b8105ca7ae1767a27?format=webp&width=400",
    alt: "Lukka Formula E",
    bg: "bg-gray-200",
  },
  {
    id: 2,
    title: "H&R Block Retail Tax Software",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F57b2e77ba8444e99a4b6c00ea18dbcc7?format=webp&width=400",
    alt: "Fusion92 H&R Block",
    bg: "bg-gray-100",
  },
  {
    id: 3,
    title: "Distracted Driving PSA",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F036e9110d57545f4909f28fcf01c9b44?format=webp&width=400",
    alt: "US Cellular campaign",
    bg: "bg-gray-200",
  },
  {
    id: 4,
    title: "US Cellular Brand Activations",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fa44c6f08b0bf40cb8ea08f61968b988c?format=webp&width=400",
    alt: "US Cellular Future of Good",
    bg: "bg-white",
  },
  {
    id: 5,
    title: "Unicorn Valuation",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F74eb105410174fef8bb2485c242e4791?format=webp&width=400",
    alt: "Lukka data visualization",
    bg: "bg-gray-900",
  },
  {
    id: 6,
    title: "New England Patriots",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fbdd2fc26b9d54f32b18e8b118634aded?format=webp&width=400",
    alt: "Chain Patriots helmet",
    bg: "bg-gray-100",
  },
  {
    id: 7,
    title: "Chainweb EVM",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F3cbaf395ebe14ab791ad4e9041d89cb1?format=webp&width=400",
    alt: "Chainweb EVM",
    bg: "bg-teal-100",
  },
  {
    id: 8,
    title: "Tiffany and Co. NFTiff",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fda94d5220fa14f78aca333eaa563a96a?format=webp&width=400",
    alt: "Tiffany and Co NFTiff",
    bg: "bg-gray-900",
  },
  {
    id: 9,
    title: "Chain Wallet App",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Ff6c63303bba445518833f99b005c1015?format=webp&width=400",
    alt: "Chain Wallet App",
    bg: "bg-gray-200",
  },
  {
    id: 10,
    title: "Miami Heat",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fe811583a315942fc847cc150544fe89a?format=webp&width=400",
    alt: "Miami Heat",
    bg: "bg-gray-100",
  },
  {
    id: 11,
    title: "#NewKadena",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F23206d4f72d4440794aa666f55144fab?format=webp&width=400",
    alt: "New Kadena",
    bg: "bg-gray-900",
  },
  {
    id: 12,
    title: "Croatian Men's National Football Club",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fed0ea93f040f4729a2ea432b157dad56?format=webp&width=400",
    alt: "Croatian Football Federation",
    bg: "bg-red-600",
  },
];

const companyLogos = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/5082733f13508ac3584f7a25a02f153f0a3b6e63?width=406",
    alt: "H&R Block",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/f1e7c3ab6c3570e6dfb39ccbc33a5bc8ecdc57ad?width=406",
    alt: "New England Patriots",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/03cd2a10ecbcef125319fb7d0636129fd7f1e3eb?width=458",
    alt: "State Street",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/895176dbecd37f931f3d36003aed32daec12f58b?width=484",
    alt: "United Airlines",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/e133ed090e21a7edffb9d88688facd497ee1896d?width=502",
    alt: "Samsung",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/450c80fe12f7aa770169037dab2bb97e47015f63?width=490",
    alt: "Tiffany & Co",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/51a231e947d45779a880c691b62cdf4a6a7a4158?width=436",
    alt: "AT&T",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/148468b93f634ce997e825f7096f3a0e31b854aa?width=442",
    alt: "Disney",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/eaa9f4e8443b43ecce394395f210d61bd309a399?width=488",
    alt: "Bloomberg",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/28bbdb7f27a8aeb79d5960bcc4c1fcbfea020fe4?width=404",
    alt: "Google",
  },
];

const navItems = [
  { href: "#about", label: "About Me" },
  { href: "#worked-for", label: "Worked For" },
  { href: "#worked-with", label: "Worked With" },
  { href: "#worked-on", label: "Worked On" },
  { href: "#contact", label: "Work Together" },
];

export default function Index() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState("");

  const activeProject = projectModals.find(
    (project) => project.id === activeModal,
  );

  useEffect(() => {
    if (mobileMenuOpen || activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen, activeModal]);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-[#2f2f2f]">
  <div className="w-full px-5 sm:px-8 lg:px-12">
    <div className="flex h-[88px] items-center justify-between">
      <a href="#" className="flex items-center">
        <img
          src="/mh-logo.png"
          alt="Mike Herron"
          className="h-10 w-auto sm:h-12"
        />
      </a>

      <div className="flex items-center gap-5 sm:gap-8">
        <div className="hidden items-center gap-3 text-white sm:flex">
          <span className="relative flex h-3 w-3">
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: "rgba(34,197,94,0.45)",
                transform: "scale(1.8)",
                filter: "blur(4px)",
              }}
            />
            <span
              className="relative block h-3 w-3 rounded-full bg-green-500"
              style={{
                boxShadow:
                  "0 0 10px rgba(34,197,94,0.75), 0 0 20px rgba(34,197,94,0.35)",
              }}
            />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 sm:text-[12px]">
              Availability
            </div>
            <div className="text-[13px] font-normal text-white/70 sm:text-[15px]">
              Available for consulting
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block h-[1.5px] w-8 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-8 bg-white transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-8 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </div>
  </div>

  {mobileMenuOpen && (
    <div
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
      onClick={() => setMobileMenuOpen(false)}
    >
      <div
        className="absolute right-0 top-0 h-full w-full bg-[#2f2f2f] shadow-2xl sm:w-[420px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-[88px] items-center justify-between border-b border-white/10 px-6 sm:px-8">
          <img
            src="/mh-logo.png"
            alt="Mike Herron"
            className="h-10 w-auto"
          />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.12em] text-white"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8 sm:px-8">
          <div className="flex items-center gap-3 text-white">
            <span className="relative flex h-3 w-3">
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "rgba(34,197,94,0.45)",
                  transform: "scale(1.8)",
                  filter: "blur(4px)",
                }}
              />
              <span
                className="relative block h-3 w-3 rounded-full bg-green-500"
                style={{
                  boxShadow:
                    "0 0 10px rgba(34,197,94,0.75), 0 0 20px rgba(34,197,94,0.35)",
                }}
              />
            </span>
            <div className="leading-tight">
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 sm:text-[12px]">
                Availability
              </div>
              <div className="text-[13px] font-normal text-white/70 sm:text-[15px]">
                Available for consulting
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[28px] font-semibold leading-[1] tracking-[-0.03em] text-white transition-colors hover:text-white/70 sm:text-[34px]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://www.linkedin.com/in/mherron54/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-3 text-white transition-colors hover:text-white/70"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
            </svg>
            <span className="text-[15px]">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )}
</header>

     <section className="relative overflow-hidden bg-white">
  <div className="mx-auto max-w-[1280px] px-5 pb-24 pt-18 text-center sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-20">
    <h1 className="mx-auto max-w-[1120px] text-[46px] font-bold leading-[0.9] tracking-[-0.055em] text-[#1f1f1f] sm:text-[72px] lg:text-[92px]">
      Turn Complex Marketing Ideas Into Measurable Results
      <span className="text-orange">.</span>
    </h1>

    <div className="relative z-10 mt-6 flex justify-center sm:-mt-16 lg:-mt-16">
      <img
        src="/MikeHerronHeadshot2026.png"
        alt="Mike Herron"
        className="w-full max-w-[520px] object-contain sm:max-w-[680px] lg:max-w-[820px]"
      />
    </div>

    <div className="relative z-20 mx-auto mt-8 max-w-[900px] sm:mt-4 lg:mt-8">
      <p className="text-[20px] font-light leading-[1.22] tracking-[-0.02em] text-[#3d3d3d] sm:text-[27px] lg:text-[32px]">
        I&apos;m a marketing executive with 20+ years of experience and a
        decade as a CMO helping technology and fintech companies grow. I work
        with founders and leadership teams to diagnose what&apos;s holding
        marketing back and build the strategy and positioning needed to create
        consistent growth.
      </p>
    </div>

    <div className="mt-10 sm:mt-10 lg:mt-10">
      <a
        href="#contact"
        className="inline-flex items-center gap-3 rounded-md bg-[#111111] px-6 py-4 text-[13px] font-medium tracking-[-0.01em] text-white shadow-sm transition-colors hover:bg-[#222222] sm:text-[15px]"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8 7V3m8 4V3m-9 8h10m-11 10h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
          />
        </svg>
        Schedule A Free Marketing Audit
      </a>
    </div>
  </div>
</section>
      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:py-16">
          <div className="flex w-full flex-col items-start space-y-4 lg:ml-[50px] lg:w-auto">
            <h3 className="text-[26px] font-semibold leading-[0.98] tracking-[-0.035em] text-gray-900 sm:text-[34px] lg:text-[42px]">
              Want to learn more<span className="text-orange">?</span>
            </h3>
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7401675485820338176"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full bg-gray-600 px-6 py-2 text-center text-[13px] font-medium text-white transition hover:bg-gray-700 lg:inline-block lg:w-auto lg:self-end sm:text-[14px]"
            >
              Subscribe on LinkedIn
            </a>
          </div>

          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7401675485820338176"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer rounded-2xl bg-gradient-to-r from-black to-gray-800 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl lg:max-w-2xl lg:flex-shrink-0 lg:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
              <div className="h-16 w-16 flex-shrink-0 lg:h-24 lg:w-24">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Ffaeaced820ad4f3c8fbfdb1ffadbb2a4?format=webp&width=400"
                  alt="Dear Founders Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex-1">
                <div className="mb-2 text-[12px] font-semibold tracking-[0.14em] text-orange sm:text-[13px]">
                  LINKEDIN NEWSLETTER
                </div>
                <h3 className="mb-2 text-[28px] font-bold leading-[0.98] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]">
                  Dear Founders
                </h3>
                <p className="text-[15px] leading-[1.5] text-gray-300 sm:text-[16px] lg:text-[17px]">
                  Marketing clarity for the modern entrepreneur
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section id="about" className="bg-white py-12 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="flex flex-col gap-8">
              <h2 className="text-[28px] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-[42px] lg:text-[56px]">
                <span className="text-gray-900">About Me</span>
                <span className="text-orange">.</span>
              </h2>
              <p className="text-[16px] font-normal leading-[1.65] text-gray-600 sm:text-[17px] lg:text-[18px]">
                I&apos;ve built my career by asking, &quot;Why are we doing
                this&quot; and &quot;What does success look like.&quot;
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-2">
              <p className="text-[16px] font-normal leading-[1.65] text-gray-900 sm:text-[17px] lg:text-[18px]">
                I am a lifelong Chicagoan, a husband, and a father of four. I
                have spent my career building, leading, and scaling marketing
                organizations that help companies grow with clarity and purpose.
                Over the past twenty-five years, I have worked across every
                corner of the marketing world, including client-side roles
                inside large enterprises, agency leadership supporting global
                brands, entrepreneurial ventures built from the ground up, and
                consulting engagements trusted to solve complex challenges.
              </p>
              <p className="text-[16px] font-normal leading-[1.65] text-gray-900 sm:text-[17px] lg:text-[18px]">
                I have led marketing for fast-moving blockchain and fintech
                companies, managed multi-million dollar brand partnerships,
                guided agency teams serving Fortune 500 clients, and helped
                launch new products for both startups and established
                businesses. No matter the setting, I am at my best when I am
                building something and helping people see what is possible.
              </p>
              <p className="text-[16px] font-normal leading-[1.65] text-gray-900 sm:text-[17px] lg:text-[18px]">
                At work and at home, I lead with honesty, curiosity, and a calm,
                steady presence that gives teams confidence. I believe in clear
                goals, transparent conversations, and creating environments
                where people can do the best work of their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="worked-for" className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
            <div className="h-fit lg:sticky lg:top-24">
              <h2 className="mb-6 text-[28px] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-[42px] lg:text-[56px]">
                <span className="text-gray-900">Worked for</span>
                <span className="text-orange">.</span>
              </h2>
              <p className="text-[16px] font-normal leading-[1.65] text-gray-600 sm:text-[17px] lg:text-[18px]">
                I have partnered with world class teams to deliver high impact
                campaigns, product launches, and brand experiences across a wide
                range of industries.
              </p>
            </div>

            <div className="space-y-12 divide-y divide-gray-200 lg:col-span-2">
              <div className="pt-12 first:pt-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F9394984ab56d49318277639d40031b24?format=webp&width=800"
                  alt="Kadena"
                  className="mb-6 h-14 w-auto object-contain"
                />
                <h3 className="mb-2 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-[22px]">
                  Chief Marketing Officer{" "}
                  <span className="text-[15px] font-normal text-gray-500 sm:text-[16px]">
                    | September 2023 - November 2025
                  </span>
                </h3>
                <p className="mb-4 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  High performing Layer 1 blockchain driving institutional
                  adoption and developer growth through secure, scalable
                  infrastructure. Built and matured the global marketing
                  organization, leading brand, growth, product marketing,
                  content, community, and partnerships.
                </p>
                <div className="space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  <p className="text-[15px] font-semibold text-gray-800 sm:text-[16px]">
                    Top Level Highlights:
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
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
                      Established the company&apos;s paid media framework,
                      expanding budget from{" "}
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

              <div className="pt-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fc09e204150174a489ae08ab32725d764?format=webp&width=800"
                  alt="Chain"
                  className="mb-6 h-12 object-contain"
                />
                <h3 className="mb-2 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-[22px]">
                  Chief Marketing Officer{" "}
                  <span className="text-[15px] font-normal text-gray-500 sm:text-[16px]">
                    | May 2022 - September 2023
                  </span>
                </h3>
                <p className="mb-4 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  Blockchain infrastructure company delivering enterprise grade
                  financial technology for global brands. Directed global brand,
                  growth, communications, product marketing, and partnerships.
                </p>
                <div className="space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  <p className="text-[15px] font-semibold text-gray-800 sm:text-[16px]">
                    Top Level Highlights:
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
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
                      Launched three new B2B products and the company&apos;s
                      first direct to consumer digital wallet.
                    </li>
                    <li>
                      Closed a landmark Tiffany &amp; Co and Yuga Labs
                      partnership that generated{" "}
                      <span className="font-semibold">15M</span> in revenue and
                      sold out in under{" "}
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

              <div className="pt-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2Fda5358d50e26487d909c74e5402762fa?format=webp&width=800"
                  alt="Lukka"
                  className="mb-6 h-10 object-contain"
                />
                <h3 className="mb-2 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-[22px]">
                  Global Head of Marketing{" "}
                  <span className="text-[15px] font-normal text-gray-500 sm:text-[16px]">
                    | August 2020 - May 2022
                  </span>
                </h3>
                <p className="mb-4 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  Blockchain and crypto asset data provider serving the
                  world&apos;s largest financial institutions, fund
                  administrators, and government agencies. Led all global
                  marketing during significant company growth and valuation
                  inflection.
                </p>
                <div className="space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  <p className="text-[15px] font-semibold text-gray-800 sm:text-[16px]">
                    Top Level Highlights:
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
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
                      Built Lukka&apos;s first comprehensive brand and go to
                      market strategy across positioning, messaging, and
                      segmentation.
                    </li>
                    <li>
                      Negotiated a multi year global title sponsorship with
                      Formula E to support international expansion.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f9a952caa622f1b34ebb2e5d1217b5d022627766?width=266"
                  alt="Work and Co"
                  className="mb-6 h-14 object-contain"
                />
                <h3 className="mb-2 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-[22px]">
                  Group Account Director{" "}
                  <span className="text-[15px] font-normal text-gray-500 sm:text-[16px]">
                    | July 2019 - August 2020
                  </span>
                </h3>
                <p className="mb-4 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  Full service digital marketing and innovation agency serving
                  Fortune 500 clients across finance, telecom, insurance, and
                  retail. Directed strategy, client success, and revenue growth
                  across a large enterprise portfolio.
                </p>
                <div className="space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  <p className="text-[15px] font-semibold text-gray-800 sm:text-[16px]">
                    Top Level Highlights:
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                    <li>
                      Managed a portfolio of global brands including H&amp;R
                      Block, AT&amp;T, and Zurich generating more than{" "}
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

              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/364cdce97b6a21af5a17e8ed3fa80147b0efa0db?width=430"
                  alt="MCS Consulting"
                  className="mb-6 h-12 object-contain"
                />
                <h3 className="mb-2 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-[22px]">
                  Head of Marketing{" "}
                  <span className="text-[15px] font-normal text-gray-500 sm:text-[16px]">
                    | November 2017 - June 2019
                  </span>
                </h3>
                <p className="mb-4 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  Digital marketing and strategy consultancy supporting global
                  enterprise clients with e-commerce growth, brand development,
                  and full funnel marketing execution across travel,
                  hospitality, and financial sectors.
                </p>
                <div className="space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  <p className="text-[15px] font-semibold text-gray-800 sm:text-[16px]">
                    Top Level Highlights:
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                    <li>
                      Launched United Airlines&apos; MileagePlusGolf.com,
                      unlocking <span className="font-semibold">800K</span> in
                      private investment and exceeding pre launch sales goals by{" "}
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

              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da9ede529f3b039e3f7e90e2dcb5f2928ac1c616?width=366"
                  alt="US Cellular"
                  className="mb-6 h-12 object-contain"
                />
                <h3 className="mb-2 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-[22px]">
                  Global Head of Marketing{" "}
                  <span className="text-[15px] font-normal text-gray-500 sm:text-[16px]">
                    | December 2013 - November 2017
                  </span>
                </h3>
                <p className="mb-4 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  Major national wireless carrier. Led digital, social, and
                  brand marketing for B2C, B2B, and HR audiences across national
                  markets. Managed an 11 person team responsible for digital
                  content, performance marketing, and social strategy.
                </p>
                <div className="space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  <p className="text-[15px] font-semibold text-gray-800 sm:text-[16px]">
                    Top Level Highlights:
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
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

              <div className="pt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7faec79871be3f0740f20030837c6a244d846344?width=366"
                  alt="SOLO"
                  className="mb-6 h-10 object-contain"
                />
                <h3 className="mb-2 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-[22px]">
                  Manager, Online Engagement{" "}
                  <span className="text-[15px] font-normal text-gray-500 sm:text-[16px]">
                    | April 2011 - December 2013
                  </span>
                </h3>
                <p className="mb-4 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  National consumer products company known for one of the most
                  recognizable brands in retail and food service. Led digital
                  engagement, influencer marketing, and social strategy
                  supporting large scale consumer growth.
                </p>
                <div className="space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  <p className="text-[15px] font-semibold text-gray-800 sm:text-[16px]">
                    Top Level Highlights:
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
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

              <div className="pt-12">
                <img
                  src="/xfo.jpg?width=286"
                  alt="XFO"
                  className="mb-6 h-14 object-contain"
                />
                <h3 className="mb-2 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-[22px]">
                  Partner{" "}
                  <span className="text-[15px] font-normal text-gray-500 sm:text-[16px]">
                    | January 2011 - May 2017
                  </span>
                </h3>
                <p className="mb-4 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  Mixed martial arts promotion recognized as one of the premier
                  combat sports organizations in the Midwest. Led brand
                  development, event growth, and commercial strategy for one of
                  the longest running regional MMA promotions in the United
                  States.
                </p>
                <div className="space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  <p className="text-[15px] font-semibold text-gray-800 sm:text-[16px]">
                    Top Level Highlights:
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-2 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                    <li>
                      Helped build the XFO into the Midwest&apos;s leading MMA
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

              <div className="pt-12">
                <h3 className="mb-4 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-[22px]">
                  Earlier Career in E-Commerce &amp; Brand Marketing
                </h3>
                <div className="space-y-3 text-[15px] leading-[1.6] text-gray-600 sm:text-[16px]">
                  <p>
                    <span className="font-semibold">Marketing Manager</span> —
                    Benchmark Hospitality (2009–2011)
                  </p>
                  <p>
                    <span className="font-semibold">
                      Director of Sales &amp; Marketing
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

      <section id="worked-with" className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-[28px] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-[42px] lg:text-[56px]">
                  <span className="text-gray-900">Worked with</span>
                  <span className="text-orange">.</span>
                </h2>
                <p className="max-w-sm text-[16px] font-normal leading-[1.65] text-gray-600 sm:text-[17px] lg:text-[18px]">
                  I have had the privilege of working with some of the biggest
                  and most influential brands in the world. These partnerships
                  brought me into conversations that shaped global sports,
                  luxury, technology, and consumer culture, and gave me the
                  opportunity to help launch products, tell powerful stories,
                  and create marketing that delivers real business results.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-gray-900 sm:text-[17px]">
                  Other Notable Companies:
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[14px] leading-[1.65] text-gray-600 sm:text-[15px]">
                      Formula 1
                      <br />
                      Formula E
                      <br />
                      State Street
                      <br />
                      Blackrock
                      <br />
                      S&amp;P
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

                  <div className="flex flex-col gap-2">
                    <p className="text-[14px] leading-[1.65] text-gray-600 sm:text-[15px]">
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

                  <div className="flex flex-col gap-2">
                    <p className="text-[14px] leading-[1.65] text-gray-600 sm:text-[15px]">
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

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 items-center gap-x-0 gap-y-[50px]">
                {companyLogos.map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-[120px] max-w-[120px] object-contain sm:max-h-[160px] sm:max-w-[160px] lg:max-h-[200px] lg:max-w-[200px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="worked-on" className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-20">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-[28px] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-[42px] lg:text-[56px]">
                  <span className="text-gray-900">Worked on</span>
                  <span className="text-orange">.</span>
                </h2>
                <p className="max-w-sm text-[16px] font-normal leading-[1.65] text-gray-600 sm:text-[17px] lg:text-[18px]">
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

            <div className="lg:col-span-2">
              <div className="grid auto-rows-max grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                {projectTiles.map((tile) => (
                  <button
                    key={tile.id}
                    onClick={() => setActiveModal(tile.id)}
                    className={`group relative aspect-square cursor-pointer overflow-hidden rounded-lg ${tile.bg}`}
                  >
                    <img
                      src={tile.image}
                      alt={tile.alt}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-lg font-semibold text-white">
                        View Project
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-6 text-[42px] font-bold leading-[0.95] tracking-[-0.045em] sm:text-[58px] lg:text-[72px]">
              <span className="text-gray-900">Let&apos;s work </span>
              <span className="text-gray-400">together</span>
              <span className="text-orange">.</span>
            </h2>

            <p className="mb-12 text-[18px] font-medium leading-[1.25] tracking-[-0.02em] text-gray-900 sm:text-[24px] lg:text-[28px]">
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
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="flex-1 rounded-full border border-gray-400 px-6 py-3 text-[15px] text-gray-900 placeholder-gray-500 transition-colors focus:border-orange focus:outline-none sm:max-w-xs sm:text-[16px]"
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
                  className="flex-1 rounded-full border border-gray-400 px-6 py-3 text-[15px] text-gray-900 placeholder-gray-500 transition-colors focus:border-orange focus:outline-none sm:max-w-xs sm:text-[16px]"
                  required
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-gray-600 px-8 py-3 text-[14px] font-medium tracking-[-0.01em] text-white transition-colors hover:bg-gray-700 sm:text-[15px]"
              >
                Submit
              </button>
            </form>

            {formStatus === "success" && (
              <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                <p className="font-medium">✓ {formMessage}</p>
              </div>
            )}

            {formStatus === "error" && (
              <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                <p className="font-medium">✗ {formMessage}</p>
              </div>
            )}

            {formStatus === "loading" && (
              <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-800">
                <p className="font-medium">Sending...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#2f2f2f] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:text-center">
            <div className="text-[13px] leading-[1.65] text-gray-300 sm:text-[14px]">
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

          <div className="mb-12 flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
            <img
              src="/mh-logo.png"
              alt="Mike Herron"
              className="h-16 w-auto"
            />

            <p className="text-[13px] font-medium text-gray-400 sm:text-[14px]">
              ©2026 Michael Herron LLC
            </p>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-[12px] text-gray-400 sm:text-[13px]">
              Designed in partnership with{" "}
              <a
                href="https://nzmotiondesign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-300 transition-colors hover:text-white"
              >
                nzmotiondesign.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative h-[85vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8 lg:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-white p-2 text-gray-500 transition-colors hover:text-gray-900"
              aria-label="Close modal"
            >
              <svg
                className="h-8 w-8"
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

            <div className="mb-8 pr-8">
              <h2 className="mb-6 text-[30px] font-bold leading-[0.98] tracking-[-0.03em] text-gray-900 sm:text-[40px]">
                {activeProject.title}
              </h2>
              {typeof activeProject.description !== "string" ? (
                <div className="text-[16px] leading-[1.65] text-gray-600 sm:text-[17px]">
                  {activeProject.description}
                </div>
              ) : (
                <div className="whitespace-pre-line text-[16px] leading-[1.65] text-gray-600 sm:text-[17px]">
                  {activeProject.description}
                </div>
              )}
            </div>

            {activeModal === 10 && (
              <div className="-my-2 h-16 w-full">
                <img
                  src="https://cdn.builder.io/o/assets%2F5031849ff5814a4cae6f958ac9f10229%2F872f87fef677478a8bc7535b1585edf9?alt=media&token=0c66e98d-731d-4ad8-af17-f79d1dbb0cd3&apiKey=5031849ff5814a4cae6f958ac9f10229"
                  alt="Animated GIF"
                  className="h-full w-full object-contain"
                />
              </div>
            )}

            {activeModal === 6 && activeProject.animatedGif && (
              <div className="w-full pb-[10px]">
                <img
                  src={activeProject.animatedGif}
                  alt="Animated GIF"
                  className="h-auto w-full object-contain"
                />
              </div>
            )}

            {activeModal === 12 && activeProject.animatedGif && (
              <div className="w-full">
                <img
                  src={activeProject.animatedGif}
                  alt="Animated GIF"
                  className="h-auto w-full object-contain"
                />
              </div>
            )}

            {activeModal === 6 ? (
              <div className="w-full space-y-6">
                <div className="flex flex-col items-stretch gap-6 lg:flex-row">
                  <div className="min-w-0 flex-1">
                    <div className="aspect-[9/16] h-full w-full overflow-hidden rounded-lg bg-gray-900">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          activeProject.isPlaylist ||
                          activeProject.videoIds[0].startsWith("PL")
                            ? `https://www.youtube.com/embed/videoseries?list=${activeProject.videoIds[0]}`
                            : `https://www.youtube.com/embed/${activeProject.videoIds[0]}`
                        }
                        title="Project Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      ></iframe>
                    </div>
                  </div>

                  {activeProject.images && activeProject.images.length > 1 && (
                    <div className="min-w-0 flex-1">
                      <div className="flex aspect-[9/16] h-full w-full items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src={activeProject.images[1]}
                          alt="Project Image 2"
                          className="h-full w-full rotate-90 scale-[1.77] object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {activeProject.videoIds.length > 1 &&
                  activeProject.videoIds.slice(1).map((videoId, index) => {
                    const isLastVideo =
                      index === activeProject.videoIds.length - 2;

                    return (
                      <div
                        key={`video-${index + 1}`}
                        className={
                          isLastVideo
                            ? "flex flex-col gap-6 lg:flex-row"
                            : "w-full"
                        }
                      >
                        <div className={isLastVideo ? "flex-1" : "w-full"}>
                          {activeProject.videoTitles &&
                            activeProject.videoTitles[index + 1] && (
                              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                                {activeProject.videoTitles[index + 1]}
                              </h3>
                            )}
                          <div
                            className={`w-full overflow-hidden rounded-lg bg-gray-900 ${
                              isLastVideo ? "aspect-square" : "aspect-video"
                            }`}
                          >
                            <iframe
                              width="100%"
                              height="100%"
                              src={
                                activeProject.isPlaylist ||
                                videoId.startsWith("PL")
                                  ? `https://www.youtube.com/embed/videoseries?list=${videoId}`
                                  : `https://www.youtube.com/embed/${videoId}`
                              }
                              title={`Project Video ${index + 2}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="h-full w-full"
                            ></iframe>
                          </div>
                        </div>

                        {isLastVideo && (
                          <div className="flex-1">
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F4e5501b81ec24df48b9ceeb62d50f441?format=webp&width=800"
                              alt="Season Ticket Giveaway"
                              className="h-full w-full rounded-lg object-cover"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            ) : activeModal === 7 ? (
              <div className="w-full space-y-6">
                <div className="flex flex-col gap-6 lg:flex-row">
                  <div className="flex-1 lg:flex-[2]">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          activeProject.isPlaylist ||
                          activeProject.videoIds[0].startsWith("PL")
                            ? `https://www.youtube.com/embed/videoseries?list=${activeProject.videoIds[0]}`
                            : `https://www.youtube.com/embed/${activeProject.videoIds[0]}`
                        }
                        title="Project Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      ></iframe>
                    </div>
                  </div>

                  <div className="flex-1 lg:flex-[1]">
                    <div className="h-[344px] w-full overflow-hidden rounded-lg bg-gray-900">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          activeProject.isPlaylist ||
                          activeProject.videoIds[
                            activeProject.videoIds.length - 1
                          ].startsWith("PL")
                            ? `https://www.youtube.com/embed/videoseries?list=${activeProject.videoIds[activeProject.videoIds.length - 1]}`
                            : `https://www.youtube.com/embed/${activeProject.videoIds[activeProject.videoIds.length - 1]}`
                        }
                        title={`Project Video ${activeProject.videoIds.length}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {activeProject.videoIds.length > 2 &&
                  activeProject.videoIds
                    .slice(1, -1)
                    .map((videoId, index) => (
                      <div key={`video-${index + 1}`} className="w-full">
                        {activeProject.videoTitles &&
                          activeProject.videoTitles[index + 1] && (
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">
                              {activeProject.videoTitles[index + 1]}
                            </h3>
                          )}
                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
                          <iframe
                            width="100%"
                            height="100%"
                            src={
                              activeProject.isPlaylist ||
                              videoId.startsWith("PL")
                                ? `https://www.youtube.com/embed/videoseries?list=${videoId}`
                                : `https://www.youtube.com/embed/${videoId}`
                            }
                            title={`Project Video ${index + 2}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-full w-full"
                          ></iframe>
                        </div>
                      </div>
                    ))}
              </div>
            ) : activeModal === 11 ? (
              <div className="w-full space-y-6">
                {activeProject.videoTitles && activeProject.videoTitles[0] && (
                  <h3 className="text-lg font-semibold text-gray-900">
                    {activeProject.videoTitles[0]}
                  </h3>
                )}
                <div className="flex flex-col items-start gap-6 lg:flex-row">
                  <div className="min-w-0 w-full flex-1 lg:w-auto">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          activeProject.isPlaylist ||
                          activeProject.videoIds[0].startsWith("PL")
                            ? `https://www.youtube.com/embed/videoseries?list=${activeProject.videoIds[0]}`
                            : `https://www.youtube.com/embed/${activeProject.videoIds[0]}`
                        }
                        title="Project Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      ></iframe>
                    </div>
                  </div>

                  <div
                    className="flex w-full flex-row lg:w-52 lg:flex-shrink-0 lg:flex-col lg:justify-between"
                    style={{ gap: "50px", height: "auto" }}
                  >
                    {activeProject.images &&
                      activeProject.images.map((imageUrl, index) => (
                        <div
                          key={`image-${index}`}
                          className="flex h-40 flex-1 items-center justify-center overflow-hidden rounded-lg lg:h-44 lg:w-full lg:flex-none"
                        >
                          <img
                            src={imageUrl}
                            alt={`Project Image ${index + 1}`}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ))}
                  </div>
                </div>

                {activeProject.videoIds.length > 1 && (
                  <div>
                    {activeProject.videoTitles &&
                      activeProject.videoTitles[1] && (
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">
                          {activeProject.videoTitles[1]}
                        </h3>
                      )}
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          activeProject.isPlaylist ||
                          activeProject.videoIds[1].startsWith("PL")
                            ? `https://www.youtube.com/embed/videoseries?list=${activeProject.videoIds[1]}`
                            : `https://www.youtube.com/embed/${activeProject.videoIds[1]}`
                        }
                        title="Project Video 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full space-y-4">
                {activeProject.images && activeProject.images.length > 0 && (
                  <div className="mt-4 flex h-auto w-full flex-col gap-4 md:h-96 lg:h-96 lg:flex-row">
                    {activeProject.images.map((imageUrl, index) => (
                      <div
                        key={`image-${index}`}
                        className={`flex flex-1 items-center justify-center overflow-hidden rounded-lg ${
                          activeModal === 10 || activeModal === 12
                            ? ""
                            : "bg-gray-100"
                        }`}
                      >
                        <img
                          src={imageUrl}
                          alt={`Project Image ${index + 1}`}
                          className={`h-full w-full ${
                            activeModal === 10 || activeModal === 12
                              ? "object-cover"
                              : "object-contain"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex w-full flex-col gap-4">
                  {activeProject.videoIds.map((videoId, index) => (
                    <div key={`video-${index}`} className="w-full">
                      {activeProject.videoTitles &&
                        activeProject.videoTitles[index] && (
                          <h3 className="mb-3 text-lg font-semibold text-gray-900">
                            {activeProject.videoTitles[index]}
                          </h3>
                        )}
                      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
                        <iframe
                          width="100%"
                          height="100%"
                          src={
                            activeProject.isPlaylist ||
                            videoId.startsWith("PL")
                              ? `https://www.youtube.com/embed/videoseries?list=${videoId}`
                              : `https://www.youtube.com/embed/${videoId}`
                          }
                          title={`Project Video ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full"
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

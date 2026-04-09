export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  images: string[];
  videos: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "tiffany-nftiff",
    title: "Tiffany & Co. NFTiff",
    company: "Chain",
    description: "At Chain, I helped lead the launch of NFTiff, Tiffany & Co's first Web3 initiative in collaboration with Yuga Labs and the CryptoPunks community. NFTiff offered 250 limited-edition digital passes that allowed CryptoPunk holders to convert their NFTs into custom luxury pendants, selling out in minutes and generating more than $12.5 million in revenue at launch. The project received extensive global press coverage across luxury, technology, and financial media, including Forbes, Bloomberg, The Wall Street Journal, WWD, Vogue Business, CoinDesk, and The New York Times, and quickly became a reference point for how legacy luxury brands can thoughtfully enter Web3 while preserving craftsmanship and brand equity.",
    images: ["/images/nftiff-tmb.webp"],
    videos: [
      "MbxJGAtORiU",
      "vCtd5un9yOA",
      "u6ly9v7khno",
      "pySe3U-uI7c"
    ],
    featured: true
  },
  {
    id: "newkadena",
    title: "#NewKadena",
    company: "Kadena",
    description: "At Kadena, I led #NewKadena, a full rebrand and relaunch of the platform designed to reset how the community and the market understood the company's vision, technology, and future. The work encompassed a new logo and visual identity, brand system, website redesign, messaging and positioning framework, refined ICPs, and a fundamentally new way of thinking about the Kadena brand. The integrated campaign launched with a deliberate moment of disruption. Elements of the website began to glitch, signaling change before it was explained. That visual language carried across social channels, including individual profile imagery and coordinated community participation. The effect created immediate attention, widespread discussion, and strong organic reach. The momentum extended beyond awareness, breaking Kadena's token price out of its typical correlation with broader BTC and ETH market patterns and reinforcing the power of brand-led narrative to influence perception, engagement, and market behavior.",
    images: [
      "/images/newkadena-tmb.webp",
      "/images/work/newkadena1.gif",
      "/images/work/newkadena2.gif"
    ],
    videos: [
      "T4Dmpk3Q_mE",
      "OCna9S7tnL4"
    ],
    featured: true
  },
  {
    id: "croatian-football",
    title: "Croatian Men's National Football Club",
    company: "Kadena",
    description: "As Chief Marketing Officer at Kadena, I helped establish the company as an official partner of the Croatian Men's National Football Team. The partnership brought blockchain technology into global football through jersey placement, World Cup visibility, and digital fan engagement. The work included mobile-first campaigns to drive app downloads as well as announcement and launch assets designed to introduce the partnership to a global audience.",
    images: [
      "/images/croatia-tmb.webp",
      "/images/work/croatia1.gif",
      "/images/work/croatia2.webp"
    ],
    videos: [
      "hFFI4Ke2xrY",
      "HMnaUcnEOR0",
      "xWJqESUrC5Y"
    ],
    featured: true
  },
  {
    id: "lukka-driven-by-data",
    title: "Driven by Data",
    company: "Lukka",
    description: "At Lukka, I helped create and launch Driven by Data, a global partnership with Rokit Venturi Racing in Formula E. The campaign used motorsport as a lens to show how teams analyze data, run models, and use simulation to improve vehicle performance, mirroring how institutions rely on complex crypto data feeds. By simplifying a highly technical story, the campaign drove qualified business development leads and generated revenue that exceeded the cost of the partnership, becoming profitable within its first season.",
    images: [
      "/images/lukka-tmb.webp",
      "/images/work/lukka-driven-1.webp",
      "/images/work/lukka-driven-2.webp"
    ],
    videos: [
      "9Q2ySJDRUF8",
      "G8-FdfGhK3s"
    ]
  },
  {
    id: "hrblock",
    title: "H&R Block Retail Tax Software",
    company: "Fusion92",
    description: "At Fusion92, I led the strategic partnership with H&R Block to reinvent how consumers experience tax preparation. We built a direct-to-consumer sales channel that delivered software to people's homes, introduced patented authentication technology, and elevated in-store and online customer experiences. The partnership endured for 19 tax seasons, resulting in more than 45 million software products designed, produced, and distributed, and hundreds of millions of dollars in revenue. The work also served as a trusted strategic resource across product innovation, digital acquisition, and customer experience for H&R Block.",
    images: [
      "/images/hrb-tmb.webp",
      "/images/work/hrb1.webp",
      "/images/work/hrb2.webp",
      "/images/work/hrb3.webp"
    ],
    videos: []
  },
  {
    id: "uscellular-psa",
    title: "Distracted Driving PSA",
    company: "U.S. Cellular",
    description: "An NHTSA statistic showing drivers are seven times more likely to crash while texting than while driving under the influence became the creative spark for this distracted driving PSA. Developed when I was at U.S. Cellular, with our partners at MullenLowe, the campaign sparked national conversation, was shortlisted for a Cannes Lions award, and was ultimately donated to the Roadside Safety Alliance for broader public impact.",
    images: ["/images/uscc-tmb.webp"],
    videos: [
      "L-ddhlBMFz0"
    ]
  },
  {
    id: "uscellular-activations",
    title: "Brand Activations",
    company: "U.S. Cellular",
    description: "At U.S. Cellular, I oversaw brand content across digital and social channels, producing large-scale activation campaigns designed to engage consumers, build brand awareness, and support new lines of service. The work spanned always-on content, seasonal storytelling, and emerging formats, including playlists such as 30 Days of Good, The Future of Good, A Season of Traditions, and immersive 360-degree video experiences. The programs were built in partnership with brands and organizations including DJI, Nintendo, Disney, the NBA, the Oklahoma City Thunder, Summerfest, CES, national media outlets, schools, shelters, and charitable organizations. Together, the content helped position U.S. Cellular as a brand rooted in community, innovation, and meaningful connection.",
    images: ["/images/fog-tmb.webp"],
    videos: [
      "gTAk6zBPOVc",
      "bjc7Gp3YLhQ",
      "CEiiL7CPiAU",
      "Eqx1aUx9RPE",
      "34peid89W18",
      "wGixKvEWXKw"
    ]
  },
  {
    id: "lukka-unicorn",
    title: "Unicorn Valuation",
    company: "Lukka",
    description: "When I joined Lukka, the company had just undergone a CEO transition and was preparing for its next phase of growth and funding. Working closely with the CEO, I led the marketing and positioning efforts that supported more than 200 million in capital raised and helped establish Lukka as a unicorn with a 1.35 billion valuation. The effort brought together institutional partners, including Marshall Wace, S&P, CPA.com, State Street, Liberty City Ventures, and Soros, reinforcing Lukka's credibility as the institutional standard for crypto data.",
    images: ["/images/lukka2-tmb.webp"],
    videos: [
      "_jKHNlL6Kq4"
    ]
  },
  {
    id: "new-england-patriots",
    title: "New England Patriots",
    company: "Chain",
    description: "At Chain, I helped build and activate the company's partnership with the New England Patriots, creating branded content, stadium presence, and fan-facing campaign moments designed to connect blockchain technology to one of the most recognizable franchises in professional sports. The work combined premium brand storytelling, team partnership activation, and audience engagement across digital and live environments.",
    images: [
      "/images/pats-tmb.webp",
      "/images/work/chain1.gif",
      "/images/work/chain2.webp",
      "/images/work/chain3.webp"
    ],
    videos: [
      "n_HkTymf7_4",
      "-CNOy4SPTtA",
      "9HU4hcpz_Mo"
    ]
  },
  {
    id: "chainweb-evm",
    title: "Chainweb EVM",
    company: "Kadena",
    description: "At Kadena, I led the launch of Chainweb EVM, a major product milestone designed to expand the ecosystem and accelerate developer adoption. The launch combined product storytelling, partner momentum, and a coordinated teaser strategy that built anticipation before revealing the full scope of the platform. The campaign reintroduced the hidden-logo motif from #NewKadena, using covered partner logos and staged reveals to signal credibility and scale before launch. Once live, the response was immediate. Within the first 90 days, the ecosystem signed more than 70 development partners, processed over 50,000 transactions, onboarded more than 7,500 users, created 6,500 wallets, and saw the deployment of more than 1,000 smart contracts. The work demonstrated how disciplined narrative, strong partner alignment, and product-led marketing can drive rapid, measurable adoption at launch.",
    images: ["/images/chainweb-tmb.webp"],
    videos: [
      "NfrziZosU5U",
      "fR0QhDeln68",
      "Imbi1h_ks8w",
      "aszqDeyLkSQ",
      "XAnMjppWL6g",
      "E-Hd6-V5ick",
      "GUHUpt1fsR4",
      "tEvjvZLfGV8"
    ]
  },
  {
    id: "chain-wallet",
    title: "Chain Wallet App",
    company: "Chain",
    description: "At Chain, I led the end-to-end development and launch of Chain Wallet, a non-custodial wallet designed to give users full control over their digital assets through a secure and intuitive experience. My scope included product positioning, UX and UI direction, brand and visual design, user education, production, and go-to-market execution. The result was a self-custody product built around clarity, trust, and usability, helping bridge the gap between crypto native users and a broader audience entering Web3.",
    images: [
      "/images/chain-tmb.webp",
      "/images/work/chainwallet1.webp"
    ],
    videos: [
      "-vWANkv-ZyE"
    ]
  },
  {
    id: "miami-heat",
    title: "Miami Heat",
    company: "Chain",
    description: "At Chain, I built an official partnership with the Miami Heat designed to engage the community, activate fans, and connect blockchain technology to real-world impact. The program blended sports marketing, local business engagement, and charitable initiatives, with a focus on supporting local schools and STEM-related programs. The activation included announcement and in-game content, in-stadium jumbotron signage for ticket giveaways, and community moments that brought students and families directly into the experience. The work demonstrated how brand partnerships can move beyond visibility to create meaningful engagement at both a fan and community level.",
    images: [
      "/images/heat-tmb.webp",
      "/images/work/chainheat1.gif",
      "/images/work/chainheat2.webp",
      "/images/work/chainheat3.webp"
    ],
    videos: [
      "Ao_nKj_CYQY",
      "jscocvv5oeg",
      "7xnRCndGu3M"
    ]
  }
];

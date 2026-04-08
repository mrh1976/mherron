"use client";

import Image from "next/image";
import { useState } from "react";
import { siteContent } from "@/content";
import { projects } from "../content/projectsData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLogoFilename = (jobId: string) => {
    if (jobId === "herron-llc") return "MHlogo-h.png";
    return `${jobId}.png`;
  };

  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);
  const activeProject =
    projects.find((project) => project.id === selectedProject) ?? null;

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
          <h1 className="text-[64px] md:text-[72px] font-bold mb-0 leading-[1.0] tracking-[-0.035em]">
            Turn Complex Marketing
            <br />
            Ideas Into Measurable Results
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

          <p className="relative z-10 text-[19px] text-[#6b6b6b] max-w-2xl mx-auto mb-10 leading-relaxed -mt-24">
            I&apos;m a marketing executive with 20+ years of experience and a
            decade as a CMO helping technology and fintech companies grow. I
            work with founders and leadership teams to diagnose what&apos;s holding
            marketing back and build the strategy and positioning needed to
            create consistent growth.
          </p>
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
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-12">
            About Me
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
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
            Worked for
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
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
            Worked with
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

      <section id="work" className="py-32 px-8">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Worked on</h2>
    <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-24">
      Here are a few examples of the campaigns, partnerships, launches, and brand moments I helped create. These projects brought together cross functional teams, creative talent, enterprise partners, and global audiences, and reflect the kind of marketing that moves people and drives results. This body of work has been recognized by organizations such as Adweek, Adweek Arc, Cannes Lions, the Hatch Awards, the Obies, the Shorty Awards, and the Webby Awards.
    </p>

    {/* Featured Projects - Compact Case Studies */}
    <div className="space-y-24">
      {projects.filter(p => p.featured).map((project) => (
        <div key={project.id} className="border-b border-gray-100 pb-24 last:border-0">
          <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
          <div className="text-sm text-gray-400 mb-6">{project.company}</div>
          
          <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Images - Single column, constrained */}
          {project.images.length > 0 && (
            <div className="space-y-6 mb-8">
              {project.images.map((img, i) => (
                <img 
                  key={i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="w-full max-w-2xl h-auto rounded"
                />
              ))}
            </div>
          )}

          {/* Videos - Constrained width, single column */}
          {project.videos.length > 0 && (
            <div className="space-y-6">
              {project.videos.slice(0, 2).map((videoId, i) => (
                <div key={i} className="w-full max-w-2xl">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full rounded"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`${project.title} video ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Remaining Projects - Compact Cards */}
    <div className="mt-32 pt-12 border-t border-gray-200">
      <h3 className="text-base font-medium text-gray-400 uppercase tracking-widest mb-12">More Projects</h3>
      <div className="space-y-16">
        {projects.filter(p => !p.featured).map((project) => (
          <div key={project.id} className="group">
            <h4 className="text-xl font-medium mb-2">{project.title}</h4>
            <div className="text-sm text-gray-400 mb-4">{project.company}</div>
            <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-6 max-w-2xl">
              {project.description.length > 300 
                ? `${project.description.substring(0, 300)}...` 
                : project.description}
            </p>
            
            {/* Single thumbnail */}
            {(project.images.length > 0 || project.videos.length > 0) && (
              <div className="w-full max-w-md">
                {project.images.length > 0 ? (
                  <img 
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-auto rounded opacity-90"
                  />
                ) : project.videos.length > 0 ? (
                  <div className="aspect-video bg-gray-100 rounded overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${project.videos[0]}/maxresdefault.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section id="contact" className="py-32 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-medium mb-6">
            Let&apos;s work <span className="text-gray-300">together</span>
            <span className="text-yellow-400">.</span>
          </h2>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-16">
            Audits | Consulting | Fractional | Full-Time | Board Member
          </p>
          <form className="max-w-lg mx-auto flex gap-4 mb-8">
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
          <button className="px-12 py-4 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
            Submit
          </button>
        </div>
      </section>

      <footer className="py-12 px-8 bg-[#2a2927] text-white text-center">
        <Image
          src="/MH-logo.png"
          alt="MH"
          width={32}
          height={32}
          className="mx-auto mb-6"
        />
        <p className="text-xs opacity-50">
          ©{new Date().getFullYear()} Michael Herron LLC
        </p>
      </footer>

      {activeProject && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="float-right text-3xl font-thin text-gray-400 hover:text-black"
              aria-label="Close project details"
            >
              ×
            </button>

            <h3 className="text-3xl mb-4">{activeProject.title}</h3>
            <div className="text-sm text-gray-500 mb-8">{activeProject.company}</div>
            <p className="text-[#6b6b6b] text-[17px] leading-relaxed mb-8">
              {activeProject.description}
            </p>

            {activeProject.images.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {activeProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${activeProject.title} ${i + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            )}

            {activeProject.videos.length > 0 && (
              <div className="space-y-8">
                {activeProject.videos.map((videoId, i) => (
                  <div key={i} className="aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`${activeProject.title} video ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

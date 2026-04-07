"use client";
import { siteContent } from "@/content";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    { id: "lukka", title: "Driven by Data", company: "Lukka" },
    { id: "hrblock", title: "H&R Block Campaign", company: "Fusion92" },
    { id: "uscellular", title: "Future of Good", company: "U.S. Cellular" },
    { id: "patriots", title: "Patriots Partnership", company: "Chain" },
    { id: "chainweb", title: "Chainweb EVM", company: "Chain" },
    { id: "tiffany", title: "Tiffany Partnership", company: "Chain" },
    { id: "wallet", title: "Chain Wallet App", company: "Chain" },
    { id: "heat", title: "Miami Heat Partnership", company: "Chain" },
    { id: "kadena", title: "Kadena Rebrand", company: "Kadena" },
    { id: "croatia", title: "Croatian Football Federation", company: "Kadena" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Image src="/MH-logo.png" alt="MH" width={40} height={40} />
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white text-xs uppercase tracking-widest">Availability</span>
              <span className="text-white/60 text-xs">Available for consulting</span>
            </div>
            <button className="text-white text-2xl font-thin">☰</button>
          </div>
        </div>
      </nav>

     <section className="pt-28 pb-8 px-8">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-[64px] md:text-[72px] font-bold mb-0 leading-[1.0] tracking-[-0.035em]">
      Turn Complex Marketing<br />Ideas Into Measurable Results<span className="text-yellow-400">.</span>
    </h1>
    <div className="relative mx-auto mb-0 w-[850px] h-[750px] overflow-hidden -mt-18">
      <Image 
        src="/MikeHerronHeadshot2026.png" 
        alt="Mike Herron" 
        width={850} 
        height={1000}
        className="w-full h-auto object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-50% to-white pointer-events-none"></div>
    </div>
    <p className="text-[17px] text-[#6b6b6b] max-w-2xl mx-auto mb-10 leading-relaxed">
      I&apos;m a marketing executive with 20+ years of experience and a decade as a CMO helping technology and fintech companies grow. I work with founders and leadership teams to diagnose what&apos;s holding marketing back and build the strategy and positioning needed to create consistent growth.
    </p>
  </div>
</section>
      <section className="py-16 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div><div className="text-3xl mb-2">25+</div><div className="text-[10px] uppercase tracking-widest opacity-50">Years</div></div>
          <div><div className="text-3xl mb-2">$1B+</div><div className="text-[10px] uppercase tracking-widest opacity-50">Raised</div></div>
          <div><div className="text-3xl mb-2">Unicorn</div><div className="text-[10px] uppercase tracking-widest opacity-50">Valuation</div></div>
          <div><div className="text-3xl mb-2">Fortune 500</div><div className="text-[10px] uppercase tracking-widest opacity-50">Clients</div></div>
          <div><div className="text-3xl mb-2">50M+</div><div className="text-[10px] uppercase tracking-widest opacity-50">Reach</div></div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-12">About Me</h2>
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2">
              <p className="text-gray-500 italic text-sm leading-relaxed">I&apos;ve built my career by asking, &quot;Why are we doing this&quot; and &quot;What does success look like.&quot;</p>
            </div>
            <div className="md:col-span-3 text-[#6b6b6b] text-[17px] leading-relaxed space-y-4">
              {siteContent.about.text.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Worked for</h2>
          <p className="text-[#6b6b6b] text-[17px] mb-20 max-w-xl">
            I have partnered with world class teams to deliver high impact campaigns, product launches, and brand experiences across a wide range of industries.
          </p>
          <div className="space-y-20">
            {siteContent.experience.slice(0, 6).map((job) => (
              <div key={job.id}>
                <div className="flex items-start gap-12 mb-6">
                  <div className="w-16 h-16 bg-white rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-gray-400">LOGO</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-1">{job.company}, {job.role.split(' | ')[0]}</h3>
                    <div className="text-sm text-gray-500 mb-4">{job.period}</div>
                    <p className="text-[#6b6b6b] text-[17px] mb-6 leading-relaxed">{job.description}</p>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-3">Top Level Highlights</div>
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
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-20">Worked with</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-12 opacity-40">
            {["H&R Block", "Patriots", "State Street", "United", "Samsung", "Tiffany", "AT&T", "Disney", "Bloomberg", "Google"].map((brand) => (
              <div key={brand} className="text-center text-sm">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Worked on</h2>
          <p className="text-[#6b6b6b] text-[17px] mb-20 max-w-2xl">
            Here are a few examples of the campaigns, partnerships, launches, and brand moments I helped create.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded cursor-pointer hover:shadow-lg transition flex items-end p-6"
              >
                <div>
                  <div className="text-base mb-1">{project.title}</div>
                  <div className="text-xs text-gray-500">{project.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-medium mb-6">Let&apos;s work <span className="text-gray-300">together</span><span className="text-yellow-400">.</span></h2>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-16">Audits | Consulting | Fractional | Full-Time | Board Member</p>
          <form className="max-w-lg mx-auto flex gap-4 mb-8">
            <input type="text" placeholder="Name" className="flex-1 px-6 py-4 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-gray-400" />
            <input type="email" placeholder="Email" className="flex-1 px-6 py-4 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-gray-400" />
          </form>
          <button className="px-12 py-4 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
            Submit
          </button>
        </div>
      </section>

      <footer className="py-12 px-8 bg-[#3a3a3a] text-white text-center">
        <Image src="/MH-logo.png" alt="MH" width={32} height={32} className="mx-auto mb-6" />
        <p className="text-xs opacity-50">©{new Date().getFullYear()} Michael Herron LLC</p>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-8" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded p-12 max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="float-right text-3xl font-thin text-gray-400 hover:text-black">×</button>
            <h3 className="text-3xl mb-6">Project Details</h3>
            <p className="text-[#6b6b6b]">Content coming soon...</p>
          </div>
        </div>
      )}
    </main>
  );
}

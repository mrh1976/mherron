"use client";
import { siteContent } from "@/content";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    { id: "lukka", title: "Driven by Data", company: "Lukka", image: "/work/lukka-formula-e.jpg" },
    { id: "hrblock", title: "H&R Block Campaign", company: "Fusion92", image: "/work/hrblock.jpg" },
    { id: "uscellular", title: "Future of Good", company: "U.S. Cellular", image: "/work/uscellular.jpg" },
    { id: "patriots", title: "Patriots Partnership", company: "Chain", image: "/work/patriots.jpg" },
    { id: "chainweb", title: "Chainweb EVM", company: "Chain", image: "/work/chainweb.jpg" },
    { id: "tiffany", title: "Tiffany Partnership", company: "Chain", image: "/work/tiffany.jpg" },
    { id: "wallet", title: "Chain Wallet App", company: "Chain", image: "/work/wallet.jpg" },
    { id: "heat", title: "Miami Heat Partnership", company: "Chain", image: "/work/heat.jpg" },
    { id: "kadena", title: "Kadena Rebrand", company: "Kadena", image: "/work/kadena.jpg" },
    { id: "croatia", title: "Croatian Football Federation", company: "Kadena", image: "/work/croatia.jpg" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Image src="/MH-logo.png" alt="MH" width={40} height={40} className="invert" />
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs uppercase tracking-wider">Available for consulting</span>
            </div>
            <button className="text-2xl">☰</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Turn Complex Marketing<br />Ideas Into Measurable Results<span className="text-yellow-400">.</span>
          </h1>
          <Image 
            src="/fullhead.png" 
            alt="Mike Herron" 
            width={400} 
            height={500}
            className="mx-auto mb-12"
          />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm a marketing executive with 20+ years of experience and a decade as a CMO helping technology and fintech companies grow. I work with founders and leadership teams to diagnose what's holding marketing back and build the strategy and positioning needed to create consistent growth.
          </p>
          <button className="px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition">
            📅 Schedule A Free Marketing Audit
          </button>
        </div>
      </section>

      {/* Stats Bar - Black */}
      <section className="py-12 px-6 bg-[#2a2a2a] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div><div className="text-4xl font-light mb-1">25+</div><div className="text-xs uppercase tracking-wider opacity-70">Years Experience</div></div>
          <div><div className="text-4xl font-light mb-1">$1B+</div><div className="text-xs uppercase tracking-wider opacity-70">Capital Raised</div></div>
          <div><div className="text-4xl font-light mb-1">Unicorn</div><div className="text-xs uppercase tracking-wider opacity-70">Valuation</div></div>
          <div><div className="text-4xl font-light mb-1">Fortune 500</div><div className="text-xs uppercase tracking-wider opacity-70">Clients</div></div>
          <div><div className="text-4xl font-light mb-1">50M+</div><div className="text-xs uppercase tracking-wider opacity-70">Reach</div></div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me<span className="text-yellow-400">.</span></h2>
            <p className="text-gray-600 italic mb-8">I've built my career by asking, "Why are we doing this" and "What does success look like."</p>
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4">
            {siteContent.about.text.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Worked For - Experience */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Worked for<span className="text-yellow-400">.</span></h2>
          <p className="text-gray-600 mb-16 max-w-xl">
            I have partnered with world class teams to deliver high impact campaigns, product launches, and brand experiences across a wide range of industries.
          </p>
          <div className="space-y-16">
            {siteContent.experience.slice(0, 6).map((job) => (
              <div key={job.id} className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <div className="text-xl font-bold mb-2">{job.company}</div>
                </div>
                <div className="md:col-span-3">
                  <div className="font-semibold mb-1">{job.role} | {job.period}</div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="text-sm font-semibold mb-2">Top Level Highlights:</div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="pl-4 relative before:content-['•'] before:absolute before:left-0">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worked With - Brands */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Worked with<span className="text-yellow-400">.</span></h2>
          <p className="text-gray-600 mb-16 max-w-xl">
            I have had the privilege of working with some of the biggest and most influential brands in the world.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60">
            {["H&R Block", "Patriots", "State Street", "United", "Samsung", "Tiffany & Co", "AT&T", "Disney", "Bloomberg", "Google"].map((brand) => (
              <div key={brand} className="text-2xl font-bold text-center">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Worked On - Projects */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Worked on<span className="text-yellow-400">.</span></h2>
          <p className="text-gray-600 mb-16 max-w-2xl">
            Here are a few examples of the campaigns, partnerships, launches, and brand moments I helped create.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg cursor-pointer hover:shadow-xl transition flex items-center justify-center text-center p-6"
              >
                <div>
                  <div className="text-lg font-bold mb-2">{project.title}</div>
                  <div className="text-sm text-gray-600">{project.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Let's work <span className="text-gray-400">together</span><span className="text-yellow-400">.</span></h2>
          <p className="text-lg mb-8">Audits | Consulting | Fractional | Full-Time | Board Member</p>
          <form className="max-w-xl mx-auto flex gap-4 mb-8">
            <input type="text" placeholder="Name" className="flex-1 px-6 py-4 border border-gray-300 rounded-full" />
            <input type="email" placeholder="Email" className="flex-1 px-6 py-4 border border-gray-300 rounded-full" />
          </form>
          <button className="px-12 py-4 bg-[#2a2a2a] text-white rounded-full font-medium hover:bg-gray-800 transition">
            Submit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#2a2a2a] text-white text-center">
        <Image src="/MH-logo.png" alt="MH" width={40} height={40} className="mx-auto mb-8 invert" />
        <p className="text-sm opacity-70">©{new Date().getFullYear()} Michael Herron LLC</p>
      </footer>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="float-right text-2xl">×</button>
            <h3 className="text-3xl font-bold mb-4">Project Details</h3>
            <p className="text-gray-700">Project content will go here...</p>
          </div>
        </div>
      )}
    </main>
  );
}

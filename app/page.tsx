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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Image src="/MH-logo.png" alt="MH" width={40} height={40} className="brightness-0 invert" />
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white text-xs uppercase tracking-widest font-light">Availability</span>
              <span className="text-white/60 text-xs font-light">Available for consulting</span>
            </div>
            <button className="text-white text-2xl font-thin">☰</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-normal mb-12 leading-[1.1] tracking-tight">
            Turn Complex Marketing<br />Ideas Into Measurable Results<span className="text-yellow-400">.</span>
          </h1>
          <Image 
            src="/fullhead.png" 
            alt="Mike Herron" 
            width={450} 
            height={550}
            className="mx-auto mb-16"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            I&apos;m a marketing executive with 20+ years of experience and a decade as a CMO helping technology and fintech companies grow. I work with founders and leadership teams to diagnose what&apos;s holding marketing back and build the strategy and positioning needed to create consistent growth.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div><div className="text-3xl font-light mb-2">25+</div><div className="text-[10px] uppercase tracking-widest opacity-50 font-light">Years</div></div>
          <div><div className="text-3xl font-light mb-2">$1B+</div><div className="text-[10px] uppercase tracking-widest opacity-50 font-light">Raised</div></div>
          <div><div className="text-3xl font-light mb-2">Unicorn</div><div className="text-[10px] uppercase tracking-widest opacity-50 font-light">Valuation</div></div>
          <div><div className="text-3xl font-light mb-2">Fortune 500</div><div className="text-[10px] uppercase tracking-widest opacity-50 font-light">Clients</div></div>
          <div><div className="text-3xl font-light mb-2">50M+</div><div className="text-[10px] uppercase tracking-widest opacity-50 font-light">Reach</div></div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-12 font-light">About Me</h2>
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2">
              <p className="text-gray-500 italic text-sm leading-relaxed font-light">I&apos;ve built my career by asking, &quot;Why are we doing this&quot; and &quot;What does success look like.&quot;</p>
            </div>
            <div className="md:col-span-3 text-gray-700 leading-relaxed space-y-4 font-light">
              {siteContent.about.text.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worked For */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-light">Worked for</h2>
          <p className="text-gray-600 mb-20 max-w-xl font-light">
            I have partnered with world class teams to deliver high impact campaigns, product launches, and brand experiences across a wide range of industries.
          </p>
          <div className="space-y-20">
            {siteContent.experience.slice(0, 6).map((job) => (
              <div key={job.id}>
                <div className="flex items-start gap-12 mb-6">
                  <div className="w-16 h-16 bg-white rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-light text-gray-400">LOGO</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light mb-1">{job.company}, {job.role.split(' | ')[0]}</h3>
                    <div className="text-sm text-gray-500 font-light mb-4">{job.period}</div>
                    <p className="text-gray-600 mb-6 font-light leading-relaxed">{job.description}</p>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-light">Top Level Highlights</div>
                    <ul className="space-y-2 text-sm text-gray-600 font-light">
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

      {/* Worked With */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercas

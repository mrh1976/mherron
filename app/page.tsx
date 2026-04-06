import { siteContent } from "@/content";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Clean & Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Image src="/MH-logo.png" alt="Mike Herron" width={48} height={48} className="h-12 w-auto" />
          <div className="flex gap-12 text-sm font-light">
            <a href="#about" className="hover:text-gray-600 transition">About</a>
            <a href="#experience" className="hover:text-gray-600 transition">Experience</a>
            <a href="#contact" className="hover:text-gray-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero - Clean with Photo */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl font-light mb-6 tracking-tight">
              {siteContent.personal.name}
            </h1>
            <p className="text-2xl text-gray-600 mb-4 font-light">
              {siteContent.personal.title}
            </p>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light">
              {siteContent.hero.description}
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-black text-white text-sm font-light hover:bg-gray-800 transition"
              >
                Get In Touch
              </a>
              <a 
                href={siteContent.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 text-gray-900 text-sm font-light hover:border-black transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="/fullhead.png" 
              alt="Mike Herron" 
              width={500} 
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Stats - Minimal */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {siteContent.achievements.map((achievement, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-light mb-2">{achievement.metric}</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">{achievement.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8">About</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-light">
            {siteContent.about.text.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience - Clean Timeline */}
      <section id="experience" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-16">Work Experience</h2>
          <div className="space-y-16">
            {siteContent.experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-light mb-1">{job.company}</h3>
                    <div className="text-sm text-gray-600">{job.role}</div>
                  </div>
                  <div className="text-sm text-gray-500 text-right">{job.period}</div>
                </div>
                <p className="text-gray-600 mb-4 font-light leading-relaxed">{job.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 font-light">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-gray-400">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Minimal */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-12 font-light leading-relaxed">
            {siteContent.contact.description}
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href={`mailto:${siteContent.personal.email}`} 
              className="px-8 py-3 bg-black text-white text-sm font-light hover:bg-gray-800 transition"
            >
              {siteContent.personal.email}
            </a>
            <a 
              href={siteContent.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-300 text-gray-900 text-sm font-light hover:border-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {siteContent.personal.name}</p>
          <p>{siteContent.personal.location}</p>
        </div>
      </footer>
    </main>
  );
}

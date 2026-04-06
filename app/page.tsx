import { siteContent } from "@/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 text-gray-900">
            {siteContent.personal.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
            {siteContent.personal.title}
          </p>
          <p className="text-base md:text-lg text-gray-500 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
            {siteContent.hero.description}
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="#experience" 
              className="px-10 py-4 bg-gray-900 text-white text-sm tracking-wide uppercase font-medium hover:bg-gray-800 transition-all duration-300"
            >
              {siteContent.hero.cta.primary}
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 border border-gray-300 text-gray-900 text-sm tracking-wide uppercase font-medium hover:border-gray-900 transition-all duration-300"
            >
              {siteContent.hero.cta.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-24 text-center tracking-tight">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {siteContent.achievements.map((achievement, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-5xl md:text-6xl font-light mb-3 text-gray-900">{achievement.metric}</div>
                <div className="text-sm font-medium uppercase tracking-wide text-gray-900">{achievement.title}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tight">About</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-light">
            {siteContent.about.text.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-20 tracking-tight">Experience</h2>
          <div className="space-y-16">
            {siteContent.experience.map((job) => (
              <div key={job.id} className="border-l border-gray-300 pl-8 hover:border-gray-900 transition-colors duration-300">
                <h3 className="text-2xl font-medium mb-2 tracking-tight">{job.company}</h3>
                <div className="text-base text-gray-600 mb-1">{job.role}</div>
                <div className="text-sm text-gray-500 mb-6">{job.period}</div>
                <p className="text-base text-gray-700 mb-6 leading-relaxed font-light">{job.description}</p>
                <ul className="space-y-3 text-gray-700 font-light">
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

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">{siteContent.contact.headline}</h2>
          <p className="text-lg text-gray-600 mb-16 leading-relaxed font-light">{siteContent.contact.description}</p>
          <div className="space-y-4 max-w-md mx-auto">
            <a 
              href={`mailto:${siteContent.personal.email}`} 
              className="block px-10 py-5 bg-gray-900 text-white text-sm tracking-wide uppercase font-medium hover:bg-gray-800 transition-all duration-300"
            >
              {siteContent.personal.email}
            </a>
            <a 
              href={siteContent.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-10 py-5 border border-gray-300 text-gray-900 text-sm tracking-wide uppercase font-medium hover:border-gray-900 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {siteContent.personal.name}</p>
          <p>{siteContent.personal.location}</p>
        </div>
      </footer>
    </main>
  );
}

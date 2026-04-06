import { siteContent } from "@/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold tracking-tight">{siteContent.personal.name}</div>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-gray-600 transition">About</a>
            <a href="#experience" className="hover:text-gray-600 transition">Experience</a>
            <a href="#work" className="hover:text-gray-600 transition">Work</a>
            <a href="#contact" className="hover:text-gray-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark with gradient */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              {siteContent.personal.name}
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              {siteContent.personal.title}
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {siteContent.hero.description}
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                Get In Touch
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-block"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl font-bold mb-4">25+</div>
                <div className="text-xl text-gray-300">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {siteContent.achievements.map((achievement, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {achievement.metric}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-2">
                  {achievement.title}
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-8">About Me</h2>
            <div className="prose prose-lg prose-invert">
              {siteContent.about.text.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4">{para}</p>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["Brand Strategy", "Go-to-Market", "Product Launches", "Team Building", "Digital Transformation", "Growth Marketing", "Partnership Development"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/10 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>{siteContent.personal.email}</p>
                <p>{siteContent.personal.phone}</p>
                <p>{siteContent.personal.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Experience</h2>
          <div className="space-y-12">
            {siteContent.experience.map((job, idx) => (
              <div key={job.id} className="relative pl-8 border-l-2 border-gray-200 hover:border-blue-500 transition-all duration-300 pb-8">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">{job.company}</h3>
                  <div className="text-lg text-gray-600 mb-1">{job.role}</div>
                  <div className="text-sm text-gray-500">{job.period}</div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
                <div className="grid gap-3">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <section id="work" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Featured Work</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Select partnerships and campaigns that drove measurable business results
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Tiffany & Co. Partnership", metric: "$15M+ Revenue", company: "Chain Global" },
              { title: "Digital Transformation", metric: "14% Revenue Growth", company: "U.S. Cellular" },
              { title: "MileagePlus Golf Launch", metric: "230% Goal Achievement", company: "United Airlines" }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-lg font-semibold">
                      View Case Study
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-semibold">
                    {project.metric}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-sm uppercase tracking-wide text-gray-500 mb-12">
            Trusted by World-Class Brands
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-40">
            {["Disney", "Google", "Apple", "Bloomberg", "AT&T", "United Airlines", "Tiffany & Co.", "NBA", "MLB", "Patriots", "Heat", "Samsung"].map((brand) => (
              <div key={brand} className="text-center text-gray-400 font-semibold text-sm hover:opacity-100 transition-all duration-300">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-12 text-white/90 leading-relaxed">
            {siteContent.contact.description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href={`mailto:${siteContent.personal.email}`} 
              className="px-10 py-5 bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all duration-300 inline-block text-lg"
            >
              Email Me
            </a>
            <a 
              href={siteContent.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-block text-lg"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Free Marketing Audit</h3>
            <p className="text-white/90 mb-6">
              Get a comprehensive review of your marketing strategy and actionable insights for growth.
            </p>
            <a 
              href={`mailto:${siteContent.personal.email}?subject=Free Marketing Audit Request`}
              className="px-8 py-4 bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
            >
              Request Audit
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© {new Date().getFullYear()} {siteContent.personal.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={siteContent.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
            <a href={`mailto:${siteContent.personal.email}`} className="text-gray-400 hover:text-white transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

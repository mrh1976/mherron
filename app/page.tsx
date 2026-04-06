import { siteContent } from "@/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            {siteContent.personal.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            {siteContent.personal.title}
          </p>
          <p className="text-xl text-gray-600 mb-8">
            {siteContent.personal.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            {siteContent.hero.description}
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#experience" 
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              {siteContent.hero.cta.primary}
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition"
            >
              {siteContent.hero.cta.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Key Achievements</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {siteContent.achievements.map((achievement, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold mb-2 text-gray-900">{achievement.metric}</div>
                <div className="text-lg font-semibold mb-2">{achievement.title}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <div className="text-lg text-gray-700 whitespace-pre-line">
            {siteContent.about.text}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Experience</h2>
          <div className="space-y-12">
            {siteContent.experience.map((job) => (
              <div key={job.id} className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-2xl font-bold mb-1">{job.company}</h3>
                <div className="text-lg text-gray-700 mb-1">{job.role}</div>
                <div className="text-sm text-gray-600 mb-3">{job.period} | {job.location}</div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{siteContent.contact.headline}</h2>
          <p className="text-lg text-gray-700 mb-12">{siteContent.contact.description}</p>
          <div className="space-y-4">
            <a 
              href={`mailto:${siteContent.personal.email}`} 
              className="block px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-lg font-semibold"
            >
              Email: {siteContent.personal.email}
            </a>
            <a 
              href={siteContent.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition text-lg font-semibold"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white text-center">
        <p>© {new Date().getFullYear()} {siteContent.personal.name}. All rights reserved.</p>
        <p className="mt-2 text-gray-400">{siteContent.personal.location}</p>
      </footer>
    </main>
  );
}

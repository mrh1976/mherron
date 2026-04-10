import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/content/projectsData';

const project = projects.find((p) => p.id === 'uscellular-activations')!;

// DYNAMIC CALCULATION - respects order in projectsData.ts
const currentIndex = projects.findIndex((p) => p.id === 'uscellular-activations');
const nextProject = projects[(currentIndex + 1) % projects.length];
const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

export const metadata: Metadata = {
  title: `${project.title} | ${project.company} - Michael Herron`,
  description: project.description.substring(0, 160) + '...',
};

export default function USCellularActivationsPage() {
  const projectType = 'Brand Activations';

  return (
    <>
      <main className="min-h-screen bg-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2a2927]">
          <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
            <Link href="/" className="cursor-pointer">
              <Image src="/MH-logo.png" alt="Michael Herron" width={75} height={75} />
            </Link>
            <Link
              href="/#work"
              className="text-white text-sm uppercase tracking-widest hover:text-yellow-400 transition-colors"
            >
              ← All Work
            </Link>
          </div>
        </nav>

        <section className="pt-32 pb-12 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-gray-600">Home</Link>
              {' / '}
              <Link href="/#work" className="hover:text-gray-600">Work</Link>
              {' / '}
              <span className="text-gray-600">{project.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {projectType}
              </span>
              <span className="text-yellow-400">•</span>
              <span className="text-sm text-gray-600">{project.company}</span>
            </div>

            <h1 className="text-[48px] md:text-[64px] font-[800] mb-8 leading-[1.05] tracking-[-2.5px]">
              {project.title}<span className="text-yellow-400">.</span>
            </h1>
          </div>
        </section>

        {project.images[0] && (
          <section className="pb-16 px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} - ${project.company} project by Michael Herron`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        <section className="py-16 px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-[800] mb-8 leading-[1.05] tracking-[-2.5px]">
              Overview<span className="text-yellow-400">.</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[17px] md:text-[19px] text-[#6b6b6b] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {project.videos.length > 0 && (
          <section className="py-16 px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[32px] md:text-[40px] font-[800] mb-12 leading-[1.05] tracking-[-2.5px]">
                Video<span className="text-yellow-400">.</span>
              </h2>

              <div className="space-y-6">
                {project.videos.map((videoId, index) => (
                  <div
                    key={videoId}
                    className="relative w-full aspect-video rounded-lg overflow-hidden"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`${project.title} video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.images.length > 1 && (
          <section className="py-16 px-8 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[32px] md:text-[40px] font-[800] mb-12 leading-[1.05] tracking-[-2.5px]">
                Gallery<span className="text-yellow-400">.</span>
              </h2>

              <div className="space-y-8">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-white"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} image ${index + 2}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 px-8 border-t border-gray-200">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href={`/work/${prevProject.id}`}
                className="group p-8 border border-gray-200 rounded-lg hover:border-yellow-400 transition-all hover:-translate-y-1"
              >
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  ← Previous Project
                </div>
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  {prevProject.title}
                </h3>
                <div className="text-sm text-gray-500 mt-2">{prevProject.company}</div>
              </Link>

              <Link
                href={`/work/${nextProject.id}`}
                className="group p-8 border border-gray-200 rounded-lg hover:border-yellow-400 transition-all hover:-translate-y-1"
              >
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-2 text-right">
                  Next Project →
                </div>
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors text-right">
                  {nextProject.title}
                </h3>
                <div className="text-sm text-gray-500 mt-2 text-right">{nextProject.company}</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 bg-black text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-[800] mb-6 leading-[1.05] tracking-[-2.5px]">
              Let's work together<span className="text-yellow-400">.</span>
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Interested in partnering on strategic marketing, brand building, or product launches?
            </p>
            <Link
              href="/#contact"
              className="inline-block px-12 py-4 bg-yellow-400 text-black rounded-full text-sm font-medium hover:bg-yellow-300 transition"
            >
              Get In Touch
            </Link>
          </div>
        </section>

        <footer className="py-12 bg-[#2a2927]">
  <div className="max-w-7xl mx-auto px-8">
    <div className="mb-12">
      <Image src="/MH-logo.png" alt="MH" width={32} height={32} />
    </div>
    
    <p className="text-xs text-white/60 leading-relaxed mb-8">
      All trademarks, logos, and brand names displayed on this website are the property of their respective owners. They are used here strictly for identification and informational purposes to represent companies I have worked for or partnered with throughout my career. Their appearance does not imply any endorsement, approval, sponsorship, or affiliation with this website or with me personally. Any references to past work, partnerships, or collaborations are historical in nature and are presented solely to provide context regarding my professional experience.
    </p>
    
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/10">
      <p className="text-xs text-white/50">
        ©{new Date().getFullYear()} Michael Herron LLC
      </p>
      <p className="text-xs text-white/50">
        Designed in partnership with <span className="text-white">nzmotiondesign.com</span>
      </p>
    </div>
  </div>
</footer>
      </main>
    </>
  );
}

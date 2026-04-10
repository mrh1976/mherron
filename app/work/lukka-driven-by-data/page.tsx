Skip to content
mrh1976
mherron
Repository navigation
Code
Issues
Pull requests
Actions
Projects
Wiki
Security and quality
Insights
Settings
Files
Go to file
t
hrblock content loaded
app
api
work
chain-wallet
page.tsx
chainweb-evm
page.tsx
croatian-football
page.tsx
hrblock
page.tsx
lukka-driven-by-data
lukka-unicorn
miami-heat
new-england-patriots
newkadena
tiffany-nftiff
uscellular-activations
uscellular-psa
globals.css
layout.tsx
page.tsx
sitemap.ts
components
content
public
.gitignore
README.md
content.ts
eslint.config.mjs
next.config.js
package.json
postcss.config.mjs
tailwind.config.ts
tsconfig.json
mherron/app/work/hrblock
/
page.tsx
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing page.tsx file contents
  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/content/projectsData';

// Generate static params for all case studies
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

// SEO: Generate metadata for each case study
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  // Extract key metrics from description for meta description
  const metaDescription = project.description.substring(0, 160) + '...';
  
  // SEO-optimized title format: "Project Name | Client - Michael Herron"
  const title = `${project.title} | ${project.company} - Michael Herron`;

  return {
    title,
    description: metaDescription,
    openGraph: {
      title,
      description: metaDescription,
      images: project.images[0] ? [project.images[0]] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: project.images[0] ? [project.images[0]] : [],
    },
  };
}

export default async function CaseStudyPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }
Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
hrblock content loaded

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/content/projectsData';

// Define company names type
type CompanyName = 'Kadena' | 'Chain' | 'Lukka' | 'Fusion92' | 'U.S. Cellular';

// Define company hierarchy and metadata
const companyMeta: Record<CompanyName, { tier: number; description: string; order: number }> = {
  'Kadena': {
    tier: 1,
    description: 'Blockchain infrastructure & brand evolution',
    order: 1
  },
  'Chain': {
    tier: 2,
    description: 'Web3 ecosystem & partnerships',
    order: 2
  },
  'Lukka': {
    tier: 3,
    description: 'Enterprise crypto financial services',
    order: 3
  },
  'Fusion92': {
    tier: 4,
    description: 'Creative agency partnership',
    order: 4
  },
  'U.S. Cellular': {
    tier: 5,
    description: 'National telecommunications campaigns',
    order: 5
  }
};

export default function WorkedOnSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Group projects by company
  const projectsByCompany = projects.reduce((acc, project) => {
    if (!acc[project.company]) {
      acc[project.company] = [];
    }
    acc[project.company].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  // Sort companies by hierarchy order
  const sortedCompanies = Object.keys(projectsByCompany).sort(
    (a, b) => {
      const orderA = companyMeta[a as CompanyName]?.order || 999;
      const orderB = companyMeta[b as CompanyName]?.order || 999;
      return orderA - orderB;
    }
  );

  return (
    <section id="work" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header - matching original styling */}
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
          Worked on
        </h2>
        <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-20 max-w-3xl">
          Here are a few examples of the campaigns, partnerships, launches, and brand moments I helped create. These projects brought together cross functional teams, creative talent, enterprise partners, and global audiences, and reflect the kind of marketing that moves people and drives results.
        </p>

        {/* Client Groups */}
        <div className="space-y-20">
          {sortedCompanies.map((company, groupIndex) => {
            const companyProjects = projectsByCompany[company];
            const meta = companyMeta[company as CompanyName];
            
            return (
              <div key={company}>
                {/* Client Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-medium mb-2">{company}</h3>
                  <div className="text-sm text-gray-400 mb-6">{meta?.description}</div>
                </div>
                
                {/* Projects Grid */}
                <div className={`grid gap-6 mb-16 ${
                  companyProjects.length === 1 ? 'md:grid-cols-1 max-w-2xl' :
                  companyProjects.length === 2 ? 'md:grid-cols-2' :
                  companyProjects.length === 3 ? 'md:grid-cols-3' :
                  'md:grid-cols-2 lg:grid-cols-4'
                }`}>
                  {companyProjects.map((project, projectIndex) => {
                    // Get first image or video thumbnail
                    const imageUrl = project.images[0] || 
                      (project.videos[0] ? `https://img.youtube.com/vi/${project.videos[0]}/maxresdefault.jpg` : null);
                    
                    const isLargeCard = (companyProjects.length === 4 && projectIndex === 1) || 
                                       (companyProjects.length === 3 && projectIndex === 0);
                    
                    return (
                      <Link 
                        key={project.id} 
                        href={`/work/${project.id}`}
                        className={`group block bg-white border border-gray-100 rounded overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-yellow-400 hover:-translate-y-1 ${
                          isLargeCard && companyProjects.length === 4 ? 'md:col-span-2 md:row-span-2' : ''
                        } ${
                          isLargeCard && companyProjects.length === 3 ? 'md:col-span-2' : ''
                        }`}
                        onMouseEnter={() => setHoveredCard(`${groupIndex}-${projectIndex}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="relative w-full overflow-hidden bg-gray-50" style={{
                          aspectRatio: '1/1'
                        }}>
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              quality={95}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-xs text-gray-300 uppercase tracking-widest">
                                {project.id}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                            {getCategoryFromId(project.id)}
                          </div>
                          <h4 className="text-lg font-medium text-gray-900 group-hover:text-yellow-400 transition-colors">
                            {project.title}
                          </h4>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Helper function to derive category from project metadata
function getCategoryFromId(id: string): string {
  const categoryMap: Record<string, string> = {
    'tiffany-nftiff': 'Luxury & Web3',
    'newkadena': 'Brand & Identity',
    'croatian-football': 'Sports Partnership',
    'chainweb-evm': 'Technical Launch',
    'lukka-driven': 'Brand Campaign',
    'hrblock': 'Consumer Finance',
    'uscellular-psa': 'Public Safety',
    'uscellular-activations': 'Brand Campaign',
    'lukka-unicorn': 'Series B Campaign',
    'patriots': 'Sports Partnership',
    'chain-wallet': 'Product Development',
    'miami-heat': 'Sports Partnership'
  };
  
  return categoryMap[id] || 'Project';
}

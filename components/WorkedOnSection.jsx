import React, { useState } from 'react';

export default function WorkedOnSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const clientGroups = [
    {
      client: 'Kadena',
      description: 'Blockchain infrastructure & brand evolution',
      tier: 1,
      projects: [
        { title: '#NewKadena', category: 'Brand & Identity', slug: 'new-kadena', featured: true },
        { title: 'Croatian Football', category: 'Sports Partnership', slug: 'croatian-football' },
        { title: 'Chainweb EVM', category: 'Technical Launch', slug: 'chainweb-evm' },
      ]
    },
    {
      client: 'Chain',
      description: 'Web3 ecosystem & partnerships',
      tier: 2,
      projects: [
        { title: 'Chain Wallet', category: 'Product Development', slug: 'chain-wallet' },
        { title: 'Tiffany NFTiff', category: 'Luxury & Web3', slug: 'tiffany-nftiff', featured: true },
        { title: 'Miami Heat', category: 'Sports Partnership', slug: 'miami-heat' },
        { title: 'New England Patriots', category: 'Sports Partnership', slug: 'patriots' },
      ]
    },
    {
      client: 'Lukka',
      description: 'Enterprise crypto financial services',
      tier: 3,
      projects: [
        { title: 'Driven by Data', category: 'Brand Campaign', slug: 'lukka-driven' },
        { title: 'Unicorn Valuation', category: 'Series B Campaign', slug: 'lukka-unicorn' },
      ]
    },
    {
      client: 'Fusion92',
      description: 'Creative agency partnership',
      tier: 4,
      projects: [
        { title: 'H&R Block', category: 'Consumer Finance', slug: 'hrb', featured: true },
      ]
    },
    {
      client: 'US Cellular',
      description: 'National telecommunications campaigns',
      tier: 5,
      projects: [
        { title: 'The Future of Good', category: 'Brand Campaign', slug: 'uscc-future' },
        { title: 'Distracted Driving', category: 'Public Safety', slug: 'uscc-distracted' },
      ]
    }
  ];

  return (
    <div className="worked-on-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .worked-on-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 2rem 8rem;
          font-family: 'Inter', sans-serif;
        }
        
        /* Section Header */
        .section-header {
          margin-bottom: 5rem;
        }
        
        .section-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        
        .section-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }
        
        .section-subtitle {
          font-size: 1.125rem;
          font-weight: 400;
          color: #6b7280;
          max-width: 650px;
          line-height: 1.7;
        }
        
        /* Client Groups */
        .client-groups {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }
        
        .client-group {
          position: relative;
        }
        
        /* Tier indicator bar */
        .client-group::before {
          content: '';
          position: absolute;
          left: -2rem;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #FFA600;
          opacity: 0.2;
        }
        
        .client-group.tier-1::before {
          opacity: 1;
          width: 4px;
        }
        
        .client-group.tier-2::before {
          opacity: 0.6;
        }
        
        .client-group.tier-3::before {
          opacity: 0.4;
        }
        
        .client-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .client-group.tier-1 .client-header {
          border-bottom-color: #FFA600;
          border-bottom-width: 3px;
        }
        
        .client-name-wrapper {
          flex: 1;
        }
        
        .client-tier {
          font-size: 0.75rem;
          font-weight: 600;
          color: #FFA600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
          opacity: 0;
        }
        
        .client-group.tier-1 .client-tier {
          opacity: 1;
        }
        
        .client-name {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }
        
        .client-group.tier-1 .client-name {
          font-size: 2.5rem;
        }
        
        .client-description {
          font-size: 0.9375rem;
          font-weight: 400;
          color: #6b7280;
          line-height: 1.5;
        }
        
        .client-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .project-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.5rem;
          height: 2.5rem;
          padding: 0 0.75rem;
          background: #FFA600;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 2rem;
        }
        
        .client-group.tier-1 .project-count {
          background: #2a2927;
          color: #FFA600;
          min-width: 3rem;
          height: 3rem;
          font-size: 1rem;
        }
        
        /* Project Grids */
        .projects-grid {
          display: grid;
          gap: 1.5rem;
        }
        
        /* 3-project layout (Kadena) */
        .projects-grid.grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        
        .projects-grid.grid-3 .project-card:first-child {
          grid-column: span 2;
        }
        
        /* 4-project layout (Chain) */
        .projects-grid.grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }
        
        .projects-grid.grid-4 .project-card:nth-child(2) {
          grid-column: span 2;
          grid-row: span 2;
        }
        
        /* 2-project layout (Lukka, US Cellular) */
        .projects-grid.grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }
        
        /* 1-project layout (Fusion92) */
        .projects-grid.grid-1 {
          grid-template-columns: 1fr;
          max-width: 600px;
        }
        
        /* Project Cards */
        .project-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: #FFA600;
        }
        
        .project-image {
          aspect-ratio: 16/10;
          background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%);
          position: relative;
          overflow: hidden;
        }
        
        /* Featured cards */
        .project-card.featured .project-image {
          aspect-ratio: 16/11;
        }
        
        /* Tier-1 hero card */
        .client-group.tier-1 .project-card:first-child .project-image {
          aspect-ratio: 16/9;
        }
        
        /* Chain's NFTiff hero card */
        .projects-grid.grid-4 .project-card:nth-child(2) .project-image {
          aspect-ratio: 1/1;
        }
        
        .image-placeholder {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.75rem;
          font-weight: 500;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
          padding: 1rem;
        }
        
        .project-info {
          padding: 1.5rem;
        }
        
        .project-category {
          font-size: 0.75rem;
          font-weight: 500;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          letter-spacing: -0.01em;
        }
        
        /* Featured projects get orange accent */
        .project-card.featured .project-category {
          color: #FFA600;
        }
        
        .client-group.tier-1 .project-card:first-child .project-category {
          color: #2a2927;
          font-weight: 600;
        }
        
        /* Summary Stats */
        .portfolio-summary {
          margin-top: 6rem;
          padding: 3rem 0;
          border-top: 1px solid #e5e7eb;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          text-align: center;
        }
        
        .summary-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .stat-number {
          font-size: 4rem;
          font-weight: 700;
          color: #FFA600;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .projects-grid.grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .projects-grid.grid-4 .project-card:nth-child(2) {
            grid-column: span 2;
          }
          
          .projects-grid.grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .projects-grid.grid-3 .project-card:first-child {
            grid-column: span 2;
          }
        }
        
        @media (max-width: 768px) {
          .worked-on-section {
            padding: 3rem 1.5rem 6rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .client-name {
            font-size: 1.75rem;
          }
          
          .client-group.tier-1 .client-name {
            font-size: 2rem;
          }
          
          .client-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .projects-grid.grid-4,
          .projects-grid.grid-3,
          .projects-grid.grid-2 {
            grid-template-columns: 1fr;
          }
          
          .projects-grid.grid-4 .project-card:nth-child(2),
          .projects-grid.grid-3 .project-card:first-child {
            grid-column: span 1;
          }
          
          .portfolio-summary {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .client-group::before {
            left: -1rem;
          }
        }
      `}</style>

      <div className="section-header">
        <p className="section-label">Portfolio</p>
        <h1 className="section-title">Worked on</h1>
        <p className="section-subtitle">
          Building digital products and campaigns across Web3, sports, fintech, and consumer brands—from blockchain infrastructure to Super Bowl activations.
        </p>
      </div>

      <div className="client-groups">
        {clientGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={`client-group tier-${group.tier}`}>
            <div className="client-header">
              <div className="client-name-wrapper">
                {group.tier === 1 && <p className="client-tier">Lead Client</p>}
                <h2 className="client-name">{group.client}</h2>
                <p className="client-description">{group.description}</p>
              </div>
              <div className="client-meta">
                <span className="project-count">
                  {group.projects.length}
                </span>
              </div>
            </div>
            <div className={`projects-grid grid-${group.projects.length}`}>
              {group.projects.map((project, projectIndex) => (
                <div 
                  key={projectIndex} 
                  className={`project-card ${project.featured ? 'featured' : ''}`}
                  onMouseEnter={() => setHoveredCard(`${groupIndex}-${projectIndex}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="project-image">
                    <span className="image-placeholder">{project.slug}</span>
                  </div>
                  <div className="project-info">
                    <p className="project-category">{project.category}</p>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-summary">
        <div className="summary-stat">
          <div className="stat-number">12</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="summary-stat">
          <div className="stat-number">5</div>
          <div className="stat-label">Clients</div>
        </div>
        <div className="summary-stat">
          <div className="stat-number">3</div>
          <div className="stat-label">Industries</div>
        </div>
      </div>
    </div>
  );
}

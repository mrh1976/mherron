import WorkedOnSection from '@/components/WorkedOnSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Building products and campaigns at the intersection of technology and culture
          </h1>
          <p className="hero-description">
            Marketing leader and builder with experience launching digital products, 
            brand platforms, and integrated campaigns across Web3, sports, fintech, 
            and consumer technology.
          </p>
          <div className="hero-cta">
            <a href="#worked-on" className="cta-button">
              View Work
            </a>
            <a href="/about" className="cta-link">
              About Me →
            </a>
          </div>
        </div>
      </section>

      {/* Worked On Section */}
      <div id="worked-on">
        <WorkedOnSection />
      </div>

      <style jsx>{`
        /* Hero Section */
        .hero-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 8rem 2rem 6rem;
          min-height: 85vh;
          display: flex;
          align-items: center;
        }
        
        .hero-content {
          max-width: 900px;
        }
        
        .hero-title {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
        }
        
        .hero-description {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          font-weight: 400;
          line-height: 1.7;
          color: #6b7280;
          margin-bottom: 3rem;
          max-width: 700px;
        }
        
        .hero-cta {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .cta-button {
          display: inline-block;
          padding: 1rem 2rem;
          background: #FFA600;
          color: white;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }
        
        .cta-button:hover {
          background: #e69500;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 166, 0, 0.2);
        }
        
        .cta-link {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: #111827;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .cta-link:hover {
          color: #FFA600;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .hero-section {
            padding: 6rem 1.5rem 4rem;
            min-height: auto;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-description {
            font-size: 1.125rem;
          }
          
          .hero-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </main>
  );
}

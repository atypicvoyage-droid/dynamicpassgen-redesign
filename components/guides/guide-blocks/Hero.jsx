'use client'
export default function Hero({ title, subtitle, image, category, difficulty, readTime }) {
  return (
    <header className="hero">
      {image && (
        <div className="hero-image">
          <img src={image} alt={title} />
        </div>
      )}
      
      <div className="hero-content">
        <div className="hero-badges">
          {category && <span className="badge badge-{category}">{category}</span>}
          {difficulty && <span className="badge badge-difficulty">{difficulty}</span>}
          {readTime && <span className="badge badge-time">{readTime} min read</span>}
        </div>
        
        <h1 className="hero-title">{title}</h1>
        
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>

      <style jsx>{`
        .hero {
          margin-bottom: 3rem;
        }

        .hero-image {
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 0.75rem;
          margin-bottom: 2rem;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .badge {
          display: inline-block;
          padding: 0.375rem 0.875rem;
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .badge-compliance {
          background: #dbeafe;
          color: #1e40af;
        }

        .badge-best-practices {
          background: #d1fae5;
          color: #065f46;
        }

        .badge-technical {
          background: #e0e7ff;
          color: #3730a3;
        }

        .badge-policy {
          background: #fce7f3;
          color: #9f1239;
        }

        .badge-difficulty {
          background: #fef3c7;
          color: #92400e;
        }

        .badge-time {
          background: #f1f5f9;
          color: #475569;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #0f172a;
          margin: 0 0 1rem 0;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #475569;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero-image {
            height: 200px;
          }

          .hero-title {
            font-size: 1.875rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </header>
  )
}

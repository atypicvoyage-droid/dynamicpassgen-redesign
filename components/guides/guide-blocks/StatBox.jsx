'use client'
export default function StatBox({ value, label, source, trend, icon }) {
  return (
    <div className="stat-box">
      {icon && <div className="stat-icon">{icon}</div>}
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {trend && <div className="stat-trend">{trend}</div>}
      {source && <div className="stat-source">Source: {source}</div>}

      <style jsx>{`
        .stat-box {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border: 2px solid #cbd5e1;
          border-radius: 0.75rem;
          padding: 2rem;
          text-align: center;
          margin: 1.5rem 0;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          line-height: 1;
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.125rem;
          font-weight: 500;
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .stat-trend {
          font-size: 0.875rem;
          font-weight: 600;
          color: #10b981;
          margin-bottom: 0.5rem;
        }

        .stat-source {
          font-size: 0.75rem;
          color: #64748b;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .stat-box {
            padding: 1.5rem;
          }

          .stat-icon {
            font-size: 2rem;
          }

          .stat-value {
            font-size: 2.25rem;
          }

          .stat-label {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

'use client'
export default function ComparisonTable({ title, headers = ['Before', 'After'], data }) {
  return (
    <div className="comparison-table-wrapper">
      {title && <h4 className="table-title">{title}</h4>}
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th className="old-column">{headers[0]}</th>
              <th className="new-column">{headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="old-column">
                  <span className="indicator">❌</span>
                  {row.old || row[0]}
                </td>
                <td className="new-column">
                  <span className="indicator">✅</span>
                  {row.new || row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .comparison-table-wrapper {
          margin: 2rem 0;
          overflow-x: auto;
        }

        .table-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 1rem 0;
        }

        .comparison-table {
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: white;
        }

        thead {
          background: #f8fafc;
        }

        th {
          padding: 1rem;
          text-align: left;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #475569;
          border-bottom: 2px solid #e2e8f0;
        }

        td {
          padding: 1rem;
          font-size: 1rem;
          line-height: 1.6;
          color: #334155;
          border-bottom: 1px solid #f1f5f9;
        }

        tr:last-child td {
          border-bottom: none;
        }

        .old-column {
          background: #fef2f2;
        }

        .new-column {
          background: #f0fdf4;
        }

        .indicator {
          display: inline-block;
          margin-right: 0.5rem;
          font-size: 1rem;
        }

        tbody tr:hover .old-column {
          background: #fee2e2;
        }

        tbody tr:hover .new-column {
          background: #dcfce7;
        }

        @media (max-width: 768px) {
          th,
          td {
            padding: 0.75rem 0.5rem;
            font-size: 0.875rem;
          }

          .indicator {
            font-size: 0.875rem;
            margin-right: 0.375rem;
          }
        }
      `}</style>
    </div>
  )
}

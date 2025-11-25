// components/MDXComponents.js - TAILWIND UTILITY CLASSES
import Link from 'next/link'

export const Callout = ({ type = 'info', title, children }) => {
  const typeClasses = {
    info: 'bg-blue-50 border-blue-500 text-blue-900 dark:bg-blue-900/30 dark:border-blue-500 dark:text-blue-100',
    warning: 'bg-amber-50 border-amber-500 text-amber-900 dark:bg-amber-900/30 dark:border-amber-500 dark:text-amber-100',
    success: 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-900/30 dark:border-emerald-500 dark:text-emerald-100',
    tip: 'bg-violet-50 border-violet-500 text-violet-900 dark:bg-violet-900/30 dark:border-violet-500 dark:text-violet-100'
  }

  const icon = {
    info: '💡',
    warning: '⚠️',
    success: '✅',
    tip: '💡'
  }

  return (
    <div className={`my-8 rounded-lg border-l-4 p-6 ${typeClasses[type] || typeClasses.info}`}>
      {title && (
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl">{icon[type] || icon.info}</span>
          <strong className="font-bold text-base">{title}</strong>
        </div>
      )}
      <div className="leading-relaxed text-[0.9375rem]">{children}</div>
    </div>
  )
}

export const CTABox = ({ title, description, buttonText = "Try It Now", buttonLink = "/" }) => {
  return (
    <div className="my-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 p-8 text-center text-white">
      <h3 className="mb-3 text-2xl font-bold m-0">{title}</h3>
      <p className="mb-6 text-base leading-relaxed opacity-95 m-0">{description}</p>
      <Link href={buttonLink} className="inline-block rounded-lg bg-white px-7 py-3 text-[0.9375rem] font-semibold text-blue-600 transition-transform hover:-translate-y-0.5">
        {buttonText} →
      </Link>
    </div>
  )
}

export const QuickTips = ({ children }) => {
  return (
    <div className="my-8 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl">⚡</span>
        <h3 className="m-0 text-xl font-bold text-slate-900 dark:text-white">Quick Tips</h3>
      </div>
      <div className="leading-relaxed text-slate-600 text-[0.9375rem] dark:text-slate-300">{children}</div>
    </div>
  )
}

export const KeyTakeaway = ({ children }) => {
  return (
    <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-2xl">🔑</span>
        <strong className="text-lg font-bold text-amber-800 dark:text-amber-200">Key Takeaway</strong>
      </div>
      <div className="font-medium leading-relaxed text-amber-900 text-base dark:text-amber-100">{children}</div>
    </div>
  )
}

export const ComparisonTable = ({ data }) => {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-slate-200 shadow-sm dark:border-slate-700">
      <table className="w-full min-w-[600px] border-collapse text-[0.95rem]">
        <thead>
          <tr className="border-b-2 border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
            {data.headers.map((header, i) => (
              <th key={i} className="p-4 text-left font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-200 last:border-0 odd:bg-white even:bg-slate-50 dark:border-slate-700 dark:odd:bg-slate-900 dark:even:bg-slate-800/50">
              {row.map((cell, j) => (
                <td key={j} className="p-4 align-top leading-relaxed text-slate-600 dark:text-slate-300">
                  <span dangerouslySetInnerHTML={{ __html: cell }} /> 
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const Steps = ({ children }) => {
  return <div className="my-8 space-y-6">{children}</div>
}

export const Step = ({ number, title, children }) => {
  return (
    <div className="flex items-start gap-5 mb-6">
      <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-lg font-bold text-white">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="mb-2 mt-0 text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <div className="leading-relaxed text-slate-600 text-[0.9375rem] dark:text-slate-300">{children}</div>
      </div>
    </div>
  )
}

const MDXComponents = {
  h2: (props) => (
    <h2 
      id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')}
      className="mt-12 mb-4 text-2xl sm:text-3xl font-bold leading-tight text-slate-800 scroll-mt-20 dark:text-white"
      {...props} 
    />
  ),
  h3: (props) => (
    <h3 
      id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')}
      className="mt-8 mb-3 text-xl sm:text-2xl font-semibold leading-snug text-slate-700 scroll-mt-20 dark:text-slate-100"
      {...props} 
    />
  ),
  h4: (props) => <h4 className="mt-6 mb-2 text-lg font-semibold text-slate-700 dark:text-slate-200" {...props} />,
  p: (props) => <p className="mb-5 text-base leading-7 text-slate-600 dark:text-slate-300" {...props} />,
  ul: (props) => <ul className="mb-6 list-disc list-outside pl-7 text-base leading-7 text-slate-600 dark:text-slate-300" {...props} />,
  ol: (props) => <ol className="mb-6 list-decimal list-outside pl-7 text-base leading-7 text-slate-600 dark:text-slate-300" {...props} />,
  li: (props) => <li className="mb-2 pl-2" {...props} />,
  a: (props) => <a className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-2 transition-colors hover:text-blue-800 dark:text-blue-400 dark:decoration-blue-700 dark:hover:text-blue-300" {...props} />,
  blockquote: (props) => <blockquote className="my-7 border-l-4 border-slate-300 bg-slate-50 py-1 px-5 text-base italic leading-7 text-slate-600 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400 rounded-r-lg" {...props} />,
  strong: (props) => <strong className="font-bold text-slate-900 dark:text-white" {...props} />,
  em: (props) => <em className="italic text-slate-800 dark:text-slate-200" {...props} />,
  code: ({inline, ...props}) => {
    if (inline) {
      return <ConstantSourceNodede className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[0.875em] text-pink-600 dark:border-slate-700 dark:bg-slate-800 dark:text-pink-400" {...props} />
    }
    return <code className="block overflow-x-auto rounded-lg border border-slate-700 bg-slate-900 p-5 font-mono text-sm leading-relaxed text-slate-50" {...props} />
  },
  pre: (props) => <pre className="my-7 overflow-x-auto rounded-lg border border-slate-700 bg-slate-900 p-0 shadow-lg" {...props} />,
  hr: (props) => <hr className="my-10 border-0 border-t border-slate-200 dark:border-slate-700" {...props} />,
  table: (props) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-slate-200 shadow-sm dark:border-slate-700">
      <table className="w-full min-w-[600px] border-collapse text-[0.95rem]" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-white" {...props} />,
  th: (props) => <th className="border-b-2 border-slate-200 p-4 text-left font-bold uppercase tracking-wide dark:border-slate-700" {...props} />,
  tbody: (props) => <tbody className="bg-white dark:bg-slate-900" {...props} />,
  tr: (props) => <tr className="border-b border-slate-200 last:border-0 dark:border-slate-700" {...props} />,
  td: (props) => <td className="p-4 align-top leading-relaxed text-slate-600 dark:text-slate-300" {...props} />,
  img: (props) => <img className="my-7 h-auto max-w-full rounded-lg border border-slate-200 shadow-md dark:border-slate-700" {...props} />,
  
  Callout,
  CTABox,
  QuickTips,
  KeyTakeaway,
  ComparisonTable,
  Steps,
  Step,
}

export default MDXComponents

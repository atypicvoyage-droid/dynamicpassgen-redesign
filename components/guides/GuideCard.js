import Link from 'next/link'
import Image from 'next/image'

const categoryColors = {
  fundamentals: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  compliance: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  enterprise: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  threats: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  tools: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
}

const difficultyColors = {
  Beginner: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  Intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  Advanced: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
}

const categoryIcons = {
  compliance: '📋',
  fundamentals: '📖',
  enterprise: '🏢',
  threats: '⚠️',
  tools: '🛠️'
}

export default function GuideCard({ guide }) {
  const categoryColor = categoryColors[guide.category] || categoryColors.fundamentals
  const difficultyColor = difficultyColors[guide.difficulty] || difficultyColors.Beginner
  const fallbackIcon = categoryIcons[guide.category] || '📖'
  
  return (
    <Link href={guide.url}>
      <article className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col hover:scale-[1.02]">
        {/* Featured Image */}
        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
          {guide.image ? (
            <>
              {/* Actual image from metadata */}
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </>
          ) : (
            // Fallback gradient with icon if no image
            <>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform">
                  {fallbackIcon}
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColor}`}>
              {guide.difficulty}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
              {guide.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              📚 {guide.readTime} min
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {guide.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
            {guide.description}
          </p>
          
          {/* Footer */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <span>
              Updated {new Date(guide.updated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
            <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-block">
              Read →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

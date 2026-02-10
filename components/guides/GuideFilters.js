'use client'

export default function GuideFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
  searchQuery,
  onSearchChange
}) {
  const difficulties = ['Beginner', 'Intermediate', 'Advanced']
  
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 Search guides by title, description, or keywords..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
          🔍
        </div>
      </div>
      
      {/* Category Filters */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Filter by Category:
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Difficulty Filters */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Filter by Difficulty:
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onDifficultyChange('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedDifficulty === 'all'
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All Levels
          </button>
          {difficulties.map(difficulty => (
            <button
              key={difficulty}
              onClick={() => onDifficultyChange(difficulty)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDifficulty === difficulty
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {difficulty === 'Beginner' && '🌱 '}
              {difficulty === 'Intermediate' && '📊 '}
              {difficulty === 'Advanced' && '🚀 '}
              {difficulty}
            </button>
          ))}
        </div>
      </div>
      
      {/* Active Filters Summary */}
      {(selectedCategory !== 'all' || selectedDifficulty !== 'all' || searchQuery) && (
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-600 dark:text-gray-400">Active filters:</span>
          {selectedCategory !== 'all' && (
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
              {selectedCategory}
            </span>
          )}
          {selectedDifficulty !== 'all' && (
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full">
              {selectedDifficulty}
            </span>
          )}
          {searchQuery && (
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
              "
              {searchQuery}"
            </span>
          )}
          <button
            onClick={() => {
              onCategoryChange('all')
              onDifficultyChange('all')
              onSearchChange('')
            }}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  )
}

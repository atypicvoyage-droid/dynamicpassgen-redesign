export default function GuidesHero({ guideCount, categoryCount, totalReadTime }) {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            🔐 Security Guides & Best Practices
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your complete library of password security, compliance, and authentication 
            guides from NIST standards to 2FA implementation
          </p>
        </div>
        
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">{guideCount}</div>
            <div className="text-blue-100">Expert Guides</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">{categoryCount}</div>
            <div className="text-blue-100">Categories</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">{totalReadTime}</div>
            <div className="text-blue-100">Minutes of Content</div>
          </div>
        </div>
        
        {/* Updated Badge */}
        <div className="text-center mt-8">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
            ✨ Updated February 2026
          </span>
        </div>
      </div>
    </section>
  )
}

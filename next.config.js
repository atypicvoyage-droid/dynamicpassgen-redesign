/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // Disable caching during development
  ...(process.env.NODE_ENV === 'development' && {
    compiler: {
      removeConsole: false,
    },
  }),

  // Force fresh builds
  generateBuildId: async () => {
    return `build-${Date.now()}`
  }
}

module.exports = nextConfig

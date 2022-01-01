module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://urlshortener-production-2338.up.railway.app/:path*' // Proxy to Backend
      }
    ]
  }
}
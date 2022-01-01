require ("dotenv").config();

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API}:path*` // Proxy to Backend
      }
    ]
  }
}
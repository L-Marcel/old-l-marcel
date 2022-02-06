module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/projects',
        destination: `https://l-marcel-projects.vercel.app/projects`,
      },
      {
        source: '/projects',
        destination: `https://l-marcel.-projects.vercel.app/projects/:path*`,
      },
    ]
  },
}

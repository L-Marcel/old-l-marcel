module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/example',
        destination: `https://l-marcel-example.vercel.app/example`,
      },
      {
        source: '/example',
        destination: `https://l-marcel.-example.vercel.app/example/:path*`,
      },
    ]
  },
}

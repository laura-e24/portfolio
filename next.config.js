/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['cdn.simpleicons.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org/**',
      },
    ],
  },
}

module.exports = nextConfig

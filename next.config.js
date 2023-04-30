/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org/**',
        // pathname: '/browse/simple-icons@8.11.0/icons/**',
      },
    ],
  },
}

module.exports = nextConfig

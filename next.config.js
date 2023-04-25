/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN: process.env.API_TOKEN
 },
}

module.exports = nextConfig

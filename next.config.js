/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['static.tildacdn.com'],
    unoptimized: true,
  }
}

export default nextConfig;

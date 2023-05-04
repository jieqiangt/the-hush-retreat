/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
    apiBaseUrlService: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  },
  images: {
    domains: ["i.dummyjson.com"],
  },
};

module.exports = nextConfig;

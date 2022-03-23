/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    PROJECT_ROOT: __dirname,
  },
  images: {
    domains: ['media1.britannica.com'],
  },
};

module.exports = nextConfig;

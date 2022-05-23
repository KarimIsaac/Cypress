/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Add domain for images in DB
module.exports = {
  nextConfig,
  images: {
    domains: ["xl.movieposterdb.com"],
  },
};

const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: ["images.unsplash.com", "tailwindui.com", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = withNextVideo(nextConfig);

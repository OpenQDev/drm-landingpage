// Import withContentlayer from next-contentlayer
const { withContentlayer } = require("next-contentlayer");

// Your existing Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // assuming you want to enable SWC minifying
};

// Wrap your existing configuration with withContentlayer
module.exports = withContentlayer(nextConfig);

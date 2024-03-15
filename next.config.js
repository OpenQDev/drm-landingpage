// Import withContentlayer from next-contentlayer
const { withContentlayer } = require("next-contentlayer");
// Import withNextra and configure it
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

// Your existing Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // assuming you want to enable SWC minifying
};

// First, wrap your configuration with withContentlayer
const withContentLayerConfig = withContentlayer(nextConfig);

// Then, wrap the result of the above with withNextra
module.exports = withNextra(withContentLayerConfig);

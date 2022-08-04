/** @type {import('next').NextConfig} */

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    const newConfig = { ...config };

    // Bundle Analyzer
    if (process.env.ANALYZE === "true") {
      newConfig.plugins = [...newConfig.plugins, new BundleAnalyzerPlugin()];
    }

    // Preact
    newConfig.resolve.alias = {
      ...newConfig.resolve.alias,
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    };

    return newConfig;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    const newConfig = { ...config };
    if (process.env.ANALYZE === "true") {
      newConfig.plugins = [...newConfig.plugins, new BundleAnalyzerPlugin()];
    }

    return newConfig;
  },
};

module.exports = nextConfig;

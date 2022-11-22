/** @type {import('next').NextConfig} */

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const webpackConfig = (config) => {
  const newConfig = { ...config };

  // Bundle Analyzer
  if (process.env.ANALYZE === "true") {
    newConfig.plugins = [...newConfig.plugins, new BundleAnalyzerPlugin()];
  }

  return newConfig;
};

const nextConfig = {
  reactStrictMode: false,
  webpack: webpackConfig,
};

module.exports = nextConfig;

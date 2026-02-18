import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;

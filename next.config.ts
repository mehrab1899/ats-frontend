import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // Enable the App Router
  },
};

export default nextConfig;

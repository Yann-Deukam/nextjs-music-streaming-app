import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint errors during deployment
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during deployment
  },
  images: {
    domains: ["pnhsuuyslpvhkbbqrsfg.supabase.co"],
  },
};

export default nextConfig;

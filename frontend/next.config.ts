import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // REQUIRED for Netlify static export
  },
};

export default nextConfig;

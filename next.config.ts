import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "accounts.learninga-z.com"
      },
      {
        protocol: "https",
        hostname: "www.retrosupply.co"
      },
    ]
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ikea.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/w1gzdawt/**",
      },
    ],
  },
};

export default nextConfig;

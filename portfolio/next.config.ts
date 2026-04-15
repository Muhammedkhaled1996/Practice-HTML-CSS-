import type { NextConfig } from "next";

// hostname:"(https://placehold.co/600x400/333/orange?text=NextJS+Admin"
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains:["encrypted-tbn0.gstatic.com","images.ctfassets","picperf.io","repository-images"]
  // }
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"images.ctfassets.net",
        pathname:"/**"
      }
    ]
  }

};

export default nextConfig;

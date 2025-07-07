import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://kevin-photos.fly.storage.tigris.dev/**')]
  }
};

export default nextConfig;

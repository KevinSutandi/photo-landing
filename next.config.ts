import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kevin-photos.fly.storage.tigris.dev',
        port: '',
        pathname: '/**',
      }
    ],
    // Increase timeout for large images (in seconds)
    minimumCacheTTL: 120,
    // Add custom device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Add custom image sizes for different use cases
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 400, 600, 800, 1200],
    // Set quality for optimized images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

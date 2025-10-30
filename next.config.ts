import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://d10y423lkykdw2.cloudfront.net/**')],
  },
}

export default nextConfig

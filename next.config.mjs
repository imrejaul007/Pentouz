/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pentouz.com",
      },
      {
        protocol: "http",
        hostname: "pentouz.com",
      },
      {
        protocol: "https",
        hostname: "cozystay.loftocean.com",
      },
    ],
    // Performance optimizations - reduced for memory
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [32, 64, 128, 256],
    // Limit concurrent image optimization to reduce memory
    dangerouslyAllowSVG: false,
    // Serve local images directly in production to avoid optimizer timeouts on Render
    unoptimized: true,
  },
  // Enable gzip compression
  compress: true,
  // Reduce unused JavaScript
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
    },
  },
  // Experimental optimizations
  experimental: {
    optimizePackageImports: ["gsap", "lucide-react"],
  },
};

export default nextConfig;

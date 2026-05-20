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
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "commons.wikimedia.org",
      },
    ],
    // Performance optimizations
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // Device sizes optimized for site breakpoints (mobile, tablet, desktop, large desktop)
    deviceSizes: [320, 375, 414, 640, 750, 828, 960, 1080, 1200, 1440, 1536, 1920, 2048, 2560],
    // Image sizes for thumbnails and small containers
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: false,
    // Enable Next.js image optimization (requires sharp)
    unoptimized: false,
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
    optimizePackageImports: ["gsap", "lucide-react", "@studio-freight/lenis"],
    // Optimize CSS delivery
    optimizeCss: true,
  },
  // Headers for performance
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

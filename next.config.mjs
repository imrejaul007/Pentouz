/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
};

export default nextConfig;

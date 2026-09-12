/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev",
      },
      {
        protocol: "https",
        hostname: "hitwebcounter.com",
      },
    ],
  },
};

export default nextConfig;

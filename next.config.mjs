/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/blog/rehber",
        destination: "/giris-bonuslari",
        permanent: true,
      },
      {
        source: "/blog/rehber/:slug",
        destination: "/giris-bonuslari/:slug",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.jelibon.app" }],
        destination: "https://jelibon.app/:path*",
        permanent: true,
      },
      {
        source: "/favicon.ico",
        destination: "/icon.png",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const bonusKonuRedirects = [
  ["deneme-bonusu-veren", "/blog/deneme-bonusu-veren-siteler-2026"],
  ["ozel-oran", "/blog/ozel-oran-seo-turkey-2026"],
  ["kayip-bonusu", "/blog/kayip-bonusu-veren-siteler-2026"],
  ["haftalik-kayip", "/blog/kayip-bonusu-veren-siteler-2026"],
  ["dogum-gunu", "/blog/dogum-gunu-bonusu-seo-turkey-2026"],
  ["yatirim-bonusu", "/blog/yatirim-bonusu-veren-siteler-2026"],
  ["jest-bonusu", "/blog/jest-bonusu-veren-siteler-2026"],
  ["yatirimsiz", "/blog/yatirimsiz-bonus-seo-turkey-2026"],
  ["kredi-karti", "/blog/kredi-karti-yatirim-siteler-2026"],
];

const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      ...bonusKonuRedirects.map(([topicId, destination]) => ({
        source: `/giris-bonuslari/konu/${topicId}`,
        destination,
        permanent: true,
      })),
      {
        source: "/giris-bonuslari",
        destination: "/guvenilir-siteler",
        permanent: true,
      },
      {
        source: "/giris-bonuslari/:slug",
        destination: "/guvenilir-siteler/:slug",
        permanent: true,
      },
      {
        source: "/blog/rehber",
        destination: "/guvenilir-siteler",
        permanent: true,
      },
      {
        source: "/blog/rehber/:slug",
        destination: "/guvenilir-siteler/:slug",
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

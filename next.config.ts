import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds plain HTML/CSS/JS in ./out for shared hosting (cPanel).
// Without it the app builds for Vercel/Node (with the /api/contact route).
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(isStatic
    ? { output: "export" as const, trailingSlash: true, images: { unoptimized: true } }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
          minimumCacheTTL: 60 * 60 * 24 * 30,
        },
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;

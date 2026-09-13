import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export — Phase 1 has no CMS/server calls yet. Remove
     `output: "export"` (and `images.unoptimized`) once the Kit welcome
     automation or a CMS needs server-side routes — Netlify's Next.js
     runtime handles that natively without a static export. */
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

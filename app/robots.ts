import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// TODO: swap in the real production domain once it's chosen/verified —
// see README "Outstanding Items".
const SITE_URL = "https://myhappyliferoutine.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

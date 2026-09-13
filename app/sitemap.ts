import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// TODO: swap in the real production domain once it's chosen/verified —
// see README "Outstanding Items".
const SITE_URL = "https://myhappyliferoutine.com";

const routes = ["/", "/about/", "/privacy/", "/legal/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}

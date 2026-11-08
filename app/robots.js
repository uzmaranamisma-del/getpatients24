import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}

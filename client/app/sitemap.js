import { siteConfig } from "../lib/seo";

export default function sitemap() {
  const base = siteConfig.url.replace(/\/+$/, "");
  const now = new Date();

  const routes = [
    "/",
    "/services",
    "/services/seo",
    "/services/web-development",
    "/services/performance-marketing",
    "/services/social-media",
    "/services/digital-marketing",
    "/services/ecommerce",
    "/services/youtube-growth",
    "/services/linkedin-branding",
    "/services/influencer-marketing",
    "/services/pr-authority",
    "/case-studies",
    "/about",
    "/blog",
    "/contact"
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}


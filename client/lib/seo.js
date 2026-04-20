export const siteConfig = {
  name: "Business Tree",
  description:
    "Scale your business globally with data-driven marketing, SEO, and web development. Get your free strategy today.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en_US"
};

export function absoluteUrl(pathname = "/") {
  const base = siteConfig.url.replace(/\/+$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export function buildMetadata({
  title,
  description,
  pathname = "/",
  keywords = [],
  image = "/images/logos/logo2icon.png",
  type = "website"
}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const desc = description || siteConfig.description;
  const url = absoluteUrl(pathname);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title: fullTitle,
    description: desc,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [{ url: imageUrl }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [imageUrl]
    }
  };
}

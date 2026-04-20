import { absoluteUrl, siteConfig } from "./seo";

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/images/logos/logo2icon.png")
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url
  };
}

export function serviceJsonLd({ name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: "Worldwide",
    url
  };
}

export function articleJsonLd({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = siteConfig.name
}) {
  const imageUrl = image ? (image.startsWith("http") ? image : absoluteUrl(image)) : absoluteUrl("/images/logos/logo2icon.png");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: [imageUrl],
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logos/logo2icon.png")
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    url
  };
}

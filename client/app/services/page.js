import { ServicesPage as ServicesPageView } from "../../components/Services/ServicesPage";
import { absoluteUrl, buildMetadata } from "../../lib/seo";
import { serviceJsonLd } from "../../lib/structuredData";

export const metadata = buildMetadata({
  title: "SEO Services, Web Development & Performance Marketing",
  description:
    "Explore Business Tree services: SEO services, performance marketing, web development, and branding systems for global growth. Get your free strategy today.",
  pathname: "/services",
  keywords: ["SEO Services", "Web Development", "Performance Marketing", "Digital Marketing Agency", "Global Growth"],
  type: "website"
});

export default function ServicesPage() {
  const jsonLd = serviceJsonLd({
    name: "Digital Growth Services",
    description: "SEO, performance marketing, and web development systems designed for global growth.",
    url: absoluteUrl("/services")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicesPageView />
    </main>
  );
}

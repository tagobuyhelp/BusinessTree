import { SEOServicePage as SEOServicePageView } from "../../../components/Services/SEOServicePage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "SEO Services for Local & Global Growth",
  description:
    "Rank higher on Google with SEO services built for leads and revenue. Local SEO, technical SEO, content systems, and conversion-first pages. Get a free SEO audit today.",
  pathname: "/services/seo",
  keywords: ["SEO Services", "Local SEO", "Technical SEO", "Content SEO", "SEO Audit", "Digital Marketing Agency", "Global Growth"]
});

export default function SeoServicesPage() {
  const jsonLd = serviceJsonLd({
    name: "SEO Services",
    description: "SEO services designed to increase visibility, qualified traffic, and conversions for local and global growth.",
    url: absoluteUrl("/services/seo")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SEOServicePageView />
    </main>
  );
}

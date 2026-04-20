import { DigitalMarketingPage as DigitalMarketingPageView } from "../../../components/Services/DigitalMarketingPage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Digital Marketing Services for Global Growth",
  description:
    "Full-funnel digital marketing services to attract, convert, and retain customers. Strategy-led execution built for measurable ROI and global growth.",
  pathname: "/services/digital-marketing",
  keywords: ["Digital Marketing Services", "Digital Marketing Agency", "Performance Marketing", "SEO Services", "Conversion Optimization", "Global Growth"]
});

export default function DigitalMarketingPage() {
  const jsonLd = serviceJsonLd({
    name: "Digital Marketing Services",
    description: "Full-funnel marketing services designed for measurable growth.",
    url: absoluteUrl("/services/digital-marketing")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DigitalMarketingPageView />
    </main>
  );
}

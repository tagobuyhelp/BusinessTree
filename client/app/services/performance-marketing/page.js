import { PerformanceMarketingPage as PerformanceMarketingPageView } from "../../../components/Services/PerformanceMarketingPage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Performance Marketing Services That Drive ROI",
  description:
    "Scale paid acquisition with performance marketing services built for ROI: Meta ads, Google ads management, tracking, creative testing, and conversion-first funnels. Get a free ad strategy today.",
  pathname: "/services/performance-marketing",
  keywords: ["Performance Marketing Services", "Facebook Ads Agency", "Google Ads Management", "Paid Ads", "Conversion Optimization", "Digital Marketing Agency"]
});

export default function PerformanceMarketingPage() {
  const jsonLd = serviceJsonLd({
    name: "Performance Marketing",
    description: "Paid acquisition systems optimized for ROI, leads, and conversions.",
    url: absoluteUrl("/services/performance-marketing")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PerformanceMarketingPageView />
    </main>
  );
}

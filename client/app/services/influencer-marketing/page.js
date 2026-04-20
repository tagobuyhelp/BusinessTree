import { InfluencerPage as InfluencerPageView } from "../../../components/Services/InfluencerPage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Influencer Marketing for Credibility",
  description:
    "Influencer marketing services designed for trust and measurable demand. Creator selection, campaign planning, execution, and reporting built to convert.",
  pathname: "/services/influencer-marketing",
  keywords: ["Influencer Marketing Services", "Influencer Marketing Agency", "Brand Promotion", "Creator Partnerships", "Brand Authority"]
});

export default function InfluencerMarketingPage() {
  const jsonLd = serviceJsonLd({
    name: "Influencer Marketing",
    description: "Influencer partnerships designed to build credibility and generate demand.",
    url: absoluteUrl("/services/influencer-marketing")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InfluencerPageView />
    </main>
  );
}

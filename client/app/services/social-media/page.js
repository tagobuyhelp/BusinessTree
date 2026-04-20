import { SocialMediaPage as SocialMediaPageView } from "../../../components/Services/SocialMediaPage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Social Media Management for Demand",
  description:
    "Build trust and demand with social media management designed for growth and conversions. Consistent content, clear positioning, and measurable impact.",
  pathname: "/services/social-media",
  keywords: ["Social Media Management Services", "Social Media Agency", "Instagram Growth", "Brand Growth", "Digital Marketing Agency"]
});

export default function SocialMediaPage() {
  const jsonLd = serviceJsonLd({
    name: "Social Media Management",
    description: "Social content systems that build trust and generate demand.",
    url: absoluteUrl("/services/social-media")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SocialMediaPageView />
    </main>
  );
}

import { PRPage as PRPageView } from "../../../components/Services/PRPage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "PR Services for Brand Authority & Reputation",
  description:
    "PR services and brand authority systems to build credibility, earn visibility, and strengthen trust signals. Media features, storytelling, and online reputation management built for long-term impact.",
  pathname: "/services/pr-authority",
  keywords: ["PR Services", "Brand Authority Services", "Online Reputation Management", "Brand Authority", "PR Agency"]
});

export default function PrAuthorityPage() {
  const jsonLd = serviceJsonLd({
    name: "PR & Brand Authority",
    description: "Authority-building systems designed to increase trust and conversion confidence.",
    url: absoluteUrl("/services/pr-authority")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PRPageView />
    </main>
  );
}

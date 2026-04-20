import { YouTubeGrowthPage as YouTubeGrowthPageView } from "../../../components/Services/YouTubeGrowthPage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "YouTube SEO Services for Channel Growth",
  description:
    "YouTube SEO services and creator growth systems to rank videos, improve retention, and scale your channel. Get a YouTube growth plan today.",
  pathname: "/services/youtube-growth",
  keywords: ["YouTube SEO Services", "YouTube Growth Agency", "YouTube Channel Growth", "YouTube SEO", "Creator Growth"]
});

export default function YoutubeGrowthPage() {
  const jsonLd = serviceJsonLd({
    name: "YouTube Growth",
    description: "YouTube content systems designed to increase reach, authority, and inbound leads.",
    url: absoluteUrl("/services/youtube-growth")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <YouTubeGrowthPageView />
    </main>
  );
}

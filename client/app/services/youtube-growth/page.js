import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "YouTube Growth for Reach & Leads",
  description:
    "Grow reach and leads with YouTube strategy, optimization, and content systems. Build authority and drive consistent demand without fluff.",
  pathname: "/services/youtube-growth",
  keywords: ["YouTube Growth", "Brand Authority", "Digital Marketing Agency", "Global Growth"]
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
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">YouTube Growth</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Build a channel strategy that compounds views, trust, and pipeline over time.
          </p>
          <div className="mt-8">
            <Link className="text-accent underline underline-offset-4" href="/contact">
              Get Free Strategy →
            </Link>
          </div>
        </SectionInner>
      </Section>
    </main>
  );
}


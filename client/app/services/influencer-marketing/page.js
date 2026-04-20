import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Influencer Marketing for Credibility",
  description:
    "Accelerate trust with influencer marketing campaigns focused on credibility and demand. Partnerships, messaging, and conversion-ready landing flows.",
  pathname: "/services/influencer-marketing",
  keywords: ["Influencer Marketing", "Brand Authority", "Digital Marketing Agency", "Global Growth"]
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
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Influencer Marketing</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Credibility-driven campaigns that speed up trust and reduce friction to conversion.
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


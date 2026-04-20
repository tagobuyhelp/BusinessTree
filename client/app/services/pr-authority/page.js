import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "PR & Brand Authority for Trust",
  description:
    "Build brand authority with narratives, positioning, and earned visibility. Strengthen trust signals and improve conversion confidence across channels.",
  pathname: "/services/pr-authority",
  keywords: ["Brand Authority", "PR", "Digital Marketing Agency", "Global Growth"]
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
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">PR & Brand Authority</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Strengthen trust signals with positioning and visibility that support higher conversion.
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


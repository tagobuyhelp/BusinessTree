import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Social Media Management for Demand",
  description:
    "Build trust and demand with social media management designed for growth and conversions. Consistent content, clear positioning, and measurable impact.",
  pathname: "/services/social-media",
  keywords: ["Social Media Management", "Digital Marketing Agency", "Brand Growth", "Global Growth"]
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
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Social Media Management</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Stay consistent, communicate value clearly, and turn attention into qualified demand.
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


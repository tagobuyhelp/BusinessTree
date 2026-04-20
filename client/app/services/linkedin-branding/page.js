import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "LinkedIn Personal Branding for Pipeline",
  description:
    "Position founders and teams to attract pipeline and partnerships with LinkedIn personal branding. Clear positioning, content systems, and authority.",
  pathname: "/services/linkedin-branding",
  keywords: ["LinkedIn Personal Branding", "Brand Authority", "Global Growth", "Digital Marketing Agency"]
});

export default function LinkedinBrandingPage() {
  const jsonLd = serviceJsonLd({
    name: "LinkedIn Personal Branding",
    description: "Founder and team branding systems designed to build authority and generate demand.",
    url: absoluteUrl("/services/linkedin-branding")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">LinkedIn Personal Branding</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Build authority and trust with consistent, high-signal content that converts into conversations.
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


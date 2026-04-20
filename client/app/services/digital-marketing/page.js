import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Digital Marketing Services for Global Growth",
  description:
    "Full-funnel digital marketing services to attract, convert, and retain customers. Strategy-led execution built for measurable ROI and global growth.",
  pathname: "/services/digital-marketing",
  keywords: ["Digital Marketing Agency", "Performance Marketing", "SEO Services", "Global Growth"]
});

export default function DigitalMarketingPage() {
  const jsonLd = serviceJsonLd({
    name: "Digital Marketing Services",
    description: "Full-funnel marketing services designed for measurable growth.",
    url: absoluteUrl("/services/digital-marketing")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Digital Marketing Services</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Growth systems that combine positioning, channels, tracking, and conversion to increase revenue.
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


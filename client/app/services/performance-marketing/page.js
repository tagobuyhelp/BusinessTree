import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Performance Marketing That Drives ROI",
  description:
    "Acquire customers with performance marketing built for ROI: tracking, creative, and conversion-first landing pages. Get your free strategy today.",
  pathname: "/services/performance-marketing",
  keywords: ["Performance Marketing", "Paid Ads", "Conversion Optimization", "Global Growth", "Digital Marketing Agency"]
});

export default function PerformanceMarketingPage() {
  const jsonLd = serviceJsonLd({
    name: "Performance Marketing",
    description: "Paid acquisition systems optimized for ROI, leads, and conversions.",
    url: absoluteUrl("/services/performance-marketing")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Performance Marketing</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Scale paid acquisition with clear tracking, stronger conversion, and better unit economics.
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


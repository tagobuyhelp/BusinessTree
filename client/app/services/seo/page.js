import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "SEO Services for Global Growth",
  description:
    "Rank higher on Google with SEO services built for leads and revenue. Technical SEO, content systems, and conversion-first pages. Get your free strategy today.",
  pathname: "/services/seo",
  keywords: ["SEO Services", "Technical SEO", "Content Marketing", "Digital Marketing Agency", "Global Growth"]
});

export default function SeoServicesPage() {
  const jsonLd = serviceJsonLd({
    name: "SEO Services",
    description: "SEO services designed to increase visibility, qualified traffic, and conversions.",
    url: absoluteUrl("/services/seo")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">SEO Services</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Build sustainable organic growth with SEO systems focused on revenue—not vanity metrics.
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


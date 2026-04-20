import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "E-commerce & Landing Pages That Convert",
  description:
    "Conversion-first landing pages and e-commerce experiences built for speed, trust, and revenue. Improve CVR and reduce drop-offs with better UX.",
  pathname: "/services/ecommerce",
  keywords: ["Landing Pages", "E-commerce", "Web Development", "Conversion Optimization"]
});

export default function EcommercePage() {
  const jsonLd = serviceJsonLd({
    name: "E-commerce & Landing Pages",
    description: "Conversion-first pages designed to improve revenue and reduce drop-offs.",
    url: absoluteUrl("/services/ecommerce")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">E-commerce / Landing Pages</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            High-impact pages with clear messaging, fast performance, and conversion-focused UX.
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


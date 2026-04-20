import Link from "next/link";

import { Section, SectionInner } from "../../components/ui/Section";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies: Real Results, Real Growth",
  description:
    "Explore Business Tree case studies and see measurable growth from SEO, performance marketing, and web development systems. Get your free strategy today.",
  pathname: "/case-studies",
  keywords: ["Case Studies", "Digital Marketing Agency", "SEO Services", "Web Development", "Global Growth"]
});

export default function CaseStudiesIndexPage() {
  const items = [
    { slug: "wellness-lifestyle", label: "Wellness & Lifestyle" },
    { slug: "b2b-saas", label: "B2B SaaS" },
    { slug: "ecommerce", label: "E-commerce" },
    { slug: "local-services", label: "Local Services" }
  ];

  return (
    <main>
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Case Studies</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Results-first examples that show how strategy, execution, and data-driven systems drive growth.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="rounded-xl border border-border bg-surface p-5 text-body font-medium text-textPrimary hover:bg-bg"
              >
                {c.label} →
              </Link>
            ))}
          </div>
        </SectionInner>
      </Section>
    </main>
  );
}


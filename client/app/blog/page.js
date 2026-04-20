import Link from "next/link";

import { Section, SectionInner } from "../../components/ui/Section";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Growth Insights Blog",
  description:
    "Actionable insights on SEO services, web development, performance marketing, and global growth systems. Practical, data-driven, and conversion-focused.",
  pathname: "/blog",
  keywords: ["SEO Services", "Web Development", "Performance Marketing", "Global Growth", "Digital Marketing Agency"]
});

export default function BlogIndexPage() {
  const posts = [
    { slug: "seo-services-for-global-growth", title: "SEO Services for Global Growth" },
    { slug: "conversion-first-web-development", title: "Conversion-First Web Development" }
  ];

  return (
    <main>
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Blog</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Practical playbooks on growth, conversion, and building systems that scale.
          </p>

          <div className="mt-8 space-y-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block rounded-xl border border-border bg-surface p-5 text-body font-medium text-textPrimary hover:bg-bg"
              >
                {p.title} →
              </Link>
            ))}
          </div>
        </SectionInner>
      </Section>
    </main>
  );
}


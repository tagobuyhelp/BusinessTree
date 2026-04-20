import Link from "next/link";

import { Section, SectionInner } from "../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../lib/seo";
import { serviceJsonLd } from "../../lib/structuredData";

export const metadata = buildMetadata({
  title: "SEO Services, Web Development & Performance Marketing",
  description:
    "Explore Business Tree services: SEO services, performance marketing, web development, and branding systems for global growth. Get your free strategy today.",
  pathname: "/services",
  keywords: ["SEO Services", "Web Development", "Performance Marketing", "Digital Marketing Agency", "Global Growth"],
  type: "website"
});

export default function ServicesPage() {
  const services = [
    { href: "/services/seo", label: "SEO Services" },
    { href: "/services/performance-marketing", label: "Performance Marketing" },
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/social-media", label: "Social Media Management" }
  ];

  const jsonLd = serviceJsonLd({
    name: "Digital Growth Services",
    description: "SEO, performance marketing, and web development systems designed for global growth.",
    url: absoluteUrl("/services")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Our Services</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            360° digital solutions to grow, scale, and position your brand globally.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl border border-border bg-surface p-5 text-body font-medium text-textPrimary hover:bg-bg"
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </SectionInner>
      </Section>
    </main>
  );
}


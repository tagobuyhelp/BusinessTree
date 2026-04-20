import Link from "next/link";

import { Section, SectionInner } from "../../../components/ui/Section";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Web Development for Conversion & Performance",
  description:
    "Launch fast, premium websites that convert. Modern web development with performance, UX, and tracking built-in. Get your free strategy today.",
  pathname: "/services/web-development",
  keywords: ["Web Development", "React Development", "Next.js", "Conversion Optimization", "Global Growth"]
});

export default function WebDevelopmentPage() {
  const jsonLd = serviceJsonLd({
    name: "Web Development",
    description: "Performance-first websites built to improve conversion rate and user experience.",
    url: absoluteUrl("/services/web-development")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Web Development</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Build high-performance pages that load fast, feel premium, and turn traffic into revenue.
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


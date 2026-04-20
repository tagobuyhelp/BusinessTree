import Link from "next/link";

import { Section, SectionInner } from "../../components/ui/Section";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "About Our Digital Growth Team",
  description:
    "Meet Business Tree — a digital marketing agency built for global growth. Strategy, execution, and measurable outcomes. Get your free strategy today.",
  pathname: "/about",
  keywords: ["Digital Marketing Agency", "Global Growth", "SEO Services", "Web Development"]
});

export default function AboutPage() {
  return (
    <main>
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">About Business Tree</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            We build growth systems for modern teams—combining strategy, execution, and data-driven optimization to
            improve leads, conversions, and revenue.
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


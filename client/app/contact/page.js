import { CTAButton } from "../../components/ui/CTAButton";
import { Section, SectionInner } from "../../components/ui/Section";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Get a Free Strategy Call",
  description:
    "Talk to Business Tree about SEO services, web development, and performance marketing. Get a free strategy call with quick wins and next steps.",
  pathname: "/contact",
  keywords: ["Digital Marketing Agency", "SEO Services", "Web Development", "Performance Marketing", "Global Growth"]
});

export default function ContactPage() {
  return (
    <main>
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Get Free Strategy</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            Share a few details and we’ll send a clear growth plan focused on leads, conversions, and measurable ROI.
          </p>
          <div className="mt-8 max-w-md">
            <CTAButton label="Get Free Strategy" fullWidth />
          </div>
        </SectionInner>
      </Section>
    </main>
  );
}


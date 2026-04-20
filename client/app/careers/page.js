import { Section, SectionInner } from "../../components/ui/Section";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Business Tree and build growth systems for modern brands. Explore open roles and collaborate on premium, measurable digital work.",
  pathname: "/careers",
  keywords: ["Careers", "Digital Marketing Agency", "Web Development", "Global Growth"]
});

export default function CareersPage() {
  return (
    <main>
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">Careers</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">
            We’re always looking for specialists in marketing, development, and brand strategy.
          </p>
        </SectionInner>
      </Section>
    </main>
  );
}


import { notFound } from "next/navigation";

import { Section, SectionInner } from "../../../components/ui/Section";
import { buildMetadata } from "../../../lib/seo";

const CASE_STUDIES = {
  "wellness-lifestyle": {
    title: "Wellness Growth System Case Study",
    industry: "Wellness & Lifestyle",
    summary: "SEO + performance funnel + website optimization to reduce CPA and increase qualified traffic."
  },
  "b2b-saas": {
    title: "B2B SaaS Pipeline Acceleration Case Study",
    industry: "B2B SaaS",
    summary: "Messaging + landing pages + tracking to increase demo bookings and reduce CPL."
  },
  ecommerce: {
    title: "E-commerce Conversion Lift Case Study",
    industry: "E-commerce",
    summary: "UX + CRO experiments + lifecycle systems to improve revenue per visitor and repeat rate."
  },
  "local-services": {
    title: "Local Lead Engine Case Study",
    industry: "Local Services",
    summary: "Local SEO + conversion-first pages to increase qualified leads and map pack visibility."
  }
};

export function generateMetadata({ params }) {
  const entry = CASE_STUDIES[params.slug];
  if (!entry) return {};

  return buildMetadata({
    title: entry.title,
    description:
      `See how Business Tree drove measurable results in ${entry.industry}. ${entry.summary} Get your free strategy today.`,
    pathname: `/case-studies/${params.slug}`,
    keywords: ["Case Studies", "Digital Marketing Agency", "SEO Services", "Web Development", "Global Growth"]
  });
}

export default function CaseStudyPage({ params }) {
  const entry = CASE_STUDIES[params.slug];
  if (!entry) notFound();

  return (
    <main>
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">{entry.title}</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">{entry.summary}</p>
        </SectionInner>
      </Section>
    </main>
  );
}


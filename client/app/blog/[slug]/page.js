import { notFound } from "next/navigation";

import { Section, SectionInner } from "../../../components/ui/Section";
import { buildMetadata } from "../../../lib/seo";

const POSTS = {
  "seo-services-for-global-growth": {
    title: "SEO Services for Global Growth",
    description:
      "A practical framework to improve rankings, qualified traffic, and conversions with SEO systems designed for revenue."
  },
  "conversion-first-web-development": {
    title: "Conversion-First Web Development",
    description:
      "How to build fast, premium web experiences that reduce friction and increase conversion rate."
  }
};

export function generateMetadata({ params }) {
  const post = POSTS[params.slug];
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: `${post.description} Get your free strategy today.`,
    pathname: `/blog/${params.slug}`,
    keywords: ["SEO Services", "Web Development", "Global Growth", "Digital Marketing Agency"]
  });
}

export default function BlogPostPage({ params }) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <main>
      <Section className="py-12 sm:py-16">
        <SectionInner>
          <h1 className="text-h1">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-body text-textSecondary">{post.description}</p>
        </SectionInner>
      </Section>
    </main>
  );
}


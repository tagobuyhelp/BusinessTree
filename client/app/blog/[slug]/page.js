import { notFound } from "next/navigation";

import { BlogPostPage } from "../../../components/Blog/BlogPostPage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { articleJsonLd } from "../../../lib/structuredData";

const POSTS = [
  {
    slug: "seo-checklist-2026",
    category: "SEO",
    title: "The SEO Checklist That Actually Moves Rankings in 2026",
    description:
      "A practical checklist to fix technical issues, ship better content, and improve conversions — without wasting time on vanity tasks.",
    author: "Business Tree",
    datePublished: "2026-04-10",
    readTime: "6 min read",
    imageSrc: "/images/logos/BusinessTreeLogoHorizental.png",
    imageAlt: "SEO checklist and growth signals",
    keywords: ["SEO checklist", "technical SEO", "on-page SEO", "content strategy", "CRO", "rankings"],
    sections: [
      {
        type: "intro",
        title: "Introduction",
        paragraphs: [
          "Most SEO fails because execution is scattered: a bit of content here, a few links there, and no system tying it together.",
          "This checklist is designed to help you build momentum quickly — then compound results with consistent improvements."
        ]
      },
      {
        type: "h2",
        title: "1) Fix the fundamentals (technical SEO)",
        paragraphs: [
          "Before you publish more content, make sure search engines can crawl, understand, and trust your site."
        ],
        bullets: [
          "Confirm indexation and clean up duplicate pages.",
          "Improve internal linking to your highest-intent pages.",
          "Fix Core Web Vitals issues that cause drop-offs (especially on mobile)."
        ],
        links: [
          { label: "Explore SEO services", href: "/services/seo" },
          { label: "Website performance optimization", href: "/services/web-development" }
        ]
      },
      {
        type: "h2",
        title: "2) Match search intent (on-page SEO that converts)",
        paragraphs: [
          "Ranking is only half the job. The page must answer the query clearly and make the next step obvious."
        ],
        bullets: [
          "Rewrite the headline to reflect the exact intent (problem → solution).",
          "Add proof above the fold (results, testimonials, or authority).",
          "Place one primary CTA and remove competing distractions."
        ],
        links: [{ label: "See our conversion-first approach", href: "/services/digital-marketing" }]
      },
      {
        type: "cta",
        label: "Want help scaling your business? Get Free Strategy",
        href: "/contact"
      },
      {
        type: "h2",
        title: "3) Build content that supports revenue (not vanity traffic)",
        paragraphs: [
          "The fastest wins come from content that targets high-intent queries and leads readers to a conversion path."
        ],
        bullets: [
          "Create a pillar page for your core offer, then support it with cluster articles.",
          "Add comparison and alternatives pages for buyers in decision mode.",
          "Update and expand existing posts before writing new ones."
        ],
        links: [{ label: "View case study results", href: "/case-studies" }]
      },
      {
        type: "h2",
        title: "Key takeaways",
        bullets: [
          "Technical clarity creates compounding SEO results.",
          "Intent-first pages rank and convert better.",
          "Revenue content is a system, not a one-off blog post."
        ]
      }
    ]
  },
  {
    slug: "meta-ads-scaling",
    category: "Marketing",
    title: "How to Scale Meta Ads Without Burning Budget",
    description:
      "A simple framework to test creatives, control CPA, and scale winners profitably across Meta campaigns.",
    author: "Business Tree",
    datePublished: "2026-04-05",
    readTime: "5 min read",
    imageSrc: "/images/logos/BusinessTreeLogoPng.png",
    imageAlt: "Performance marketing and ad scaling",
    keywords: ["Meta ads", "performance marketing", "CPA", "creative testing", "ROAS"],
    sections: [
      {
        type: "intro",
        title: "Introduction",
        paragraphs: [
          "Scaling ads isn’t about spending more. It’s about controlling variables: creative, offer, landing page, and tracking.",
          "Use this framework to scale confidently while protecting performance."
        ]
      },
      {
        type: "h2",
        title: "1) Win with creative first",
        bullets: [
          "Test 6–10 creatives per month with clear hypotheses.",
          "Keep winning angles, swap hooks, and refresh formats.",
          "Track results by creative, not just campaign."
        ]
      },
      { type: "cta", label: "Want help scaling your business? Get Free Strategy", href: "/contact" },
      {
        type: "h2",
        title: "Key takeaways",
        bullets: ["Creative drives efficiency.", "Scale the system, not the spend.", "Track what matters: CPL, CVR, and payback."]
      }
    ]
  }
];

function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    pathname: `/blog/${post.slug}`,
    keywords: post.keywords || [],
    image: post.imageSrc,
    type: "article"
  });
}

export default function BlogPostRoute({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const jsonLd = articleJsonLd({
    headline: post.title,
    description: post.description,
    url,
    image: post.imageSrc,
    datePublished: post.datePublished,
    authorName: post.author
  });

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostPage post={post} related={related} />
    </main>
  );
}

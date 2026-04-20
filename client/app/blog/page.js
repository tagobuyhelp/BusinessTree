import { BlogPage as BlogPageView } from "../../components/Blog/BlogPage";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Insights, Strategies & Growth Guides",
  description:
    "Learn how to scale your business with digital marketing, SEO, and growth systems. Browse Business Tree blog posts and get a free strategy.",
  pathname: "/blog",
  keywords: ["Blog", "SEO", "Digital Marketing", "Growth", "Web Development", "Branding", "CRO"]
});

export default function BlogPage() {
  return <BlogPageView />;
}

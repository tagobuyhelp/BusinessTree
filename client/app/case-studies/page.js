import { CaseStudiesPage as CaseStudiesPageView } from "../../components/CaseStudies/CaseStudiesPage";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies: Real Results, Real Growth",
  description:
    "Explore Business Tree case studies and see measurable growth from SEO, performance marketing, and web development systems. Get your free strategy today.",
  pathname: "/case-studies",
  keywords: ["Case Studies", "Digital Marketing Agency", "SEO Services", "Web Development", "Global Growth"]
});

export default function CaseStudiesIndexPage() {
  return <CaseStudiesPageView />;
}

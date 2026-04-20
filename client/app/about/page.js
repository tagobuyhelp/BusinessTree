import { AboutPage as AboutPageView } from "../../components/About/AboutPage";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "About Our Digital Growth Team",
  description:
    "Meet Business Tree — a digital marketing agency built for global growth. Strategy, execution, and measurable outcomes. Get your free strategy today.",
  pathname: "/about",
  keywords: ["Digital Marketing Agency", "Global Growth", "SEO Services", "Web Development"]
});

export default function AboutPage() {
  return <AboutPageView />;
}

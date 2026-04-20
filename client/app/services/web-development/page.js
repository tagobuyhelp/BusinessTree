import { WebDevelopmentPage as WebDevelopmentPageView } from "../../../components/Services/WebDevelopmentPage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "Web Development Services for High Converting Websites",
  description:
    "Web development services for high converting websites: fast performance, conversion-first UX, SEO-ready builds, and scalable architecture. Get your website strategy today.",
  pathname: "/services/web-development",
  keywords: ["Web Development Services", "Website Development Company", "High Converting Websites", "Next.js", "React Development", "Conversion Optimization"]
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
      <WebDevelopmentPageView />
    </main>
  );
}

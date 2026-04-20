import { LinkedInPage as LinkedInPageView } from "../../../components/Services/LinkedInPage";
import { absoluteUrl, buildMetadata } from "../../../lib/seo";
import { serviceJsonLd } from "../../../lib/structuredData";

export const metadata = buildMetadata({
  title: "LinkedIn Marketing Services for CEO Personal Branding",
  description:
    "LinkedIn marketing services and personal branding systems for CEOs and founders. Profile optimization, thought leadership, and consistent growth to drive inbound leads.",
  pathname: "/services/linkedin-branding",
  keywords: ["LinkedIn Marketing Services", "Personal Branding Agency", "LinkedIn Growth", "CEO Personal Branding", "LinkedIn Personal Branding"]
});

export default function LinkedinBrandingPage() {
  const jsonLd = serviceJsonLd({
    name: "LinkedIn Personal Branding",
    description: "Founder and team branding systems designed to build authority and generate demand.",
    url: absoluteUrl("/services/linkedin-branding")
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LinkedInPageView />
    </main>
  );
}

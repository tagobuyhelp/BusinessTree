import { HeroSection } from "../components/Home/HeroSection";
import { CompactCaseStudiesSection } from "../components/Home/CompactCaseStudiesSection";
import { CTASection } from "../components/Home/CTASection";
import { CoreServicesSection } from "../components/Home/CoreServicesSection";
import { TrustSection } from "../components/Home/TrustSection";
import { WhyChooseUs } from "../components/Home/WhyChooseUs";
import { ServiceCategoriesSection } from "../components/Home/ServiceCategoriesSection";
import { WelcomeSection } from "../components/Home/WelcomeSection";
import { buildMetadata } from "../lib/seo";
import { AudienceSection } from "../components/Home/AudienceSection";
import { PromiseSection } from "../components/Home/PromiseSection";

export const metadata = buildMetadata({
  title: "Business Tree - Scale Your Business Globally with Data-Driven Marketing, SEO, and Web Development",
  description:
    "Scale your business globally with data-driven marketing, SEO, and web development. Get your free strategy today.",
  pathname: "/",
  keywords: ["Digital Marketing Agency", "SEO Services", "Web Development", "Global Growth", "Performance Marketing", "Brand Authority", "Social Media Management"]
});

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />

      <WelcomeSection />
      <AudienceSection />

      <CoreServicesSection />
      <ServiceCategoriesSection />

      <WhyChooseUs />
      <CompactCaseStudiesSection />

      <PromiseSection />

      <CTASection />
    </main>
  );
}

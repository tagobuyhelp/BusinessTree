import { HeroSection } from "../components/Home/HeroSection";
import { CompactCaseStudiesSection } from "../components/Home/CompactCaseStudiesSection";
import { CTASection } from "../components/Home/CTASection";
import { ServicesSection } from "../components/Home/ServicesSection";
import { TrustSection } from "../components/Home/TrustSection";
import { WhyChooseUs } from "../components/Home/WhyChooseUs";
import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Business Tree - Scale Your Business Globally with Data-Driven Marketing, SEO, and Web Development",
  description:
    "Scale your business globally with data-driven marketing, SEO, and web development. Get your free strategy today.",
  pathname: "/",
  keywords: ["Digital Marketing Agency", "SEO Services", "Web Development", "Global Growth", "Performance Marketing", "Brand Authority", "Social Media Management"]
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <CompactCaseStudiesSection />
      <CTASection />
    </main>
  );
}

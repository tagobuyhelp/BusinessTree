import { HeroSection } from "../components/Home/HeroSection";
import { CompactCaseStudiesSection } from "../components/Home/CompactCaseStudiesSection";
import { CTASection } from "../components/Home/CTASection";
import { ServicesSection } from "../components/Home/ServicesSection";
import { TrustSection } from "../components/Home/TrustSection";
import { WhyChooseUs } from "../components/Home/WhyChooseUs";

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

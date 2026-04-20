"use client";

import React from "react";

import { ServicesHeroSection } from "./ServicesHeroSection";
import { CoreServicesOverviewSection } from "./CoreServicesOverviewSection";
import { ServiceCategoriesDetailedSection } from "./ServiceCategoriesDetailedSection";
import { HowWeWorkSection } from "./HowWeWorkSection";
import { ServicesCaseStudiesSection } from "./ServicesCaseStudiesSection";
import { ServicesWhyChooseUsSection } from "./ServicesWhyChooseUsSection";
import { ServicesFinalCTASection } from "./ServicesFinalCTASection";

export function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <CoreServicesOverviewSection />
      <ServiceCategoriesDetailedSection />
      <HowWeWorkSection />
      <ServicesCaseStudiesSection />
      <ServicesWhyChooseUsSection />
      <ServicesFinalCTASection />
    </main>
  );
}

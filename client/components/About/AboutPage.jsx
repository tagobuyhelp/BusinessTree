"use client";

import React from "react";

import { AboutHeroSection } from "./AboutHeroSection";
import { OurStorySection } from "./OurStorySection";
import { MissionVisionSection } from "./MissionVisionSection";
import { OurApproachSection } from "./OurApproachSection";
import { WhoWeWorkWithSection } from "./WhoWeWorkWithSection";
import { OurPromiseSection } from "./OurPromiseSection";
import { TeamSection } from "./TeamSection";
import { AboutFinalCTASection } from "./AboutFinalCTASection";

export function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <OurApproachSection />
      <WhoWeWorkWithSection />
      <OurPromiseSection />
      <TeamSection />
      <AboutFinalCTASection />
    </main>
  );
}


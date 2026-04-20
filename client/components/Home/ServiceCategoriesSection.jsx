"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";
import { Section, SectionInner } from "../ui/Section";
import { CategoryBlock } from "./CategoryBlock";

export function ServiceCategoriesSection() {
  const reduceMotion = useReducedMotion();

  const categories = useMemo(
    () => [
      {
        title: "Digital Marketing Services",
        icon: "insights",
        description:
          "Grow your brand with 360° digital marketing solutions. We manage and scale your entire digital presence — content, campaigns, branding, funnels, analytics, and customer acquisition.",
        ctaHref: "/services/digital-marketing",
        ctaLabel: "Explore Services"
      },
      {
        title: "SEO (Local + Global)",
        icon: "trending_up",
        description:
          "Rank on Google locally & internationally. Whether you want traffic from your city or from across the world, we build SEO systems that bring long-term visibility and high-quality leads.",
        ctaHref: "/services/seo",
        ctaLabel: "Explore SEO"
      },
      {
        title: "Performance Marketing (Meta + Google Ads)",
        icon: "campaign",
        description:
          "Scale your business with high-ROI ad campaigns. We design, run, optimise, and scale paid ads across Facebook, Instagram, Google Search, Display, YouTube & international platforms.",
        ctaHref: "/services/performance-marketing",
        ctaLabel: "Explore Ads"
      },
      {
        title: "Web Development (MERN/MEAN/React/Node.js)",
        icon: "code",
        description:
          "Build websites that convert, impress, and scale. From corporate sites to e-commerce to full-stack applications, we build fast, modern, responsive, high-converting digital experiences.",
        ctaHref: "/services/web-development",
        ctaLabel: "Explore Development"
      },
      {
        title: "YouTube SEO & Creator Growth",
        icon: "smart_display",
        description:
          "Grow your channel with strategy, not luck. We handle thumbnails, content strategy, metadata optimisation, and video ranking to help creators scale across countries & languages.",
        ctaHref: "/services/youtube-growth",
        ctaLabel: "Explore YouTube"
      },
      {
        title: "Social Media Management",
        icon: "public",
        description:
          "End-to-end content, posting, strategy & branding. We manage your Instagram, Facebook, TikTok, and LinkedIn presence with engaging content systems designed for brand authority.",
        ctaHref: "/services/social-media",
        ctaLabel: "Explore Social"
      },
      {
        title: "LinkedIn Marketing & CEO Personal Branding",
        icon: "badge",
        description:
          "Position yourself as an industry leader. We manage your entire LinkedIn identity — profile, content, growth, outreach, and authority positioning for CEOs, founders & professionals.",
        ctaHref: "/services/linkedin-branding",
        ctaLabel: "Explore LinkedIn"
      },
      {
        title: "Influencer Marketing Services",
        icon: "groups",
        description:
          "Use influencer power to grow your brand globally. From selection & negotiation to campaign execution, we help brands collaborate with the right creators to boost trust & visibility.",
        ctaHref: "/services/influencer-marketing",
        ctaLabel: "Explore Influencers"
      },
      {
        title: "PR & Brand Authority Services",
        icon: "workspace_premium",
        description: [
          "Build long-term digital reputation and media presence.",
          "We craft your story, publish press features, build authority content, and position you as a credible industry expert."
        ],
        ctaHref: "/services/pr-authority",
        ctaLabel: "Explore PR"
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="services" tone="tint" className="py-12 sm:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <h2 className="text-h2">Our Service Categories</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Comprehensive solutions covering every stage of your business growth.
                </p>
              </div>
              <Button variant="secondary" asChild>
                <Link href="/services">Explore Full Services →</Link>
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {categories.map((c) => (
                <CategoryBlock
                  key={c.title}
                  title={c.title}
                  description={c.description}
                  icon={c.icon}
                  ctaHref={c.ctaHref}
                  ctaLabel={c.ctaLabel}
                />
              ))}
            </div>

            <div className="text-center text-small text-textSecondary">
              Because when your brand grows, your opportunities grow.
            </div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

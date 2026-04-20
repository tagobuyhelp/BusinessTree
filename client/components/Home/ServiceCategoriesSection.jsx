"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";
import { Section, SectionInner } from "../ui/Section";
import { CategoryBlock } from "./CategoryBlock";

export function ServiceCategoriesSection() {
  const reduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState("digital-marketing");

  const categories = useMemo(
    () => [
      {
        id: "digital-marketing",
        title: "Digital Marketing Services",
        icon: "insights",
        description:
          "Grow your brand with 360° digital marketing solutions. We manage and scale your entire digital presence — content, campaigns, branding, funnels, analytics, and customer acquisition.",
        ctaHref: "/services/digital-marketing",
        ctaLabel: "Explore Services"
      },
      {
        id: "seo",
        title: "SEO (Local + Global)",
        icon: "trending_up",
        description:
          "Rank on Google locally & internationally. Whether you want traffic from your city or from across the world, we build SEO systems that bring long-term visibility and high-quality leads.",
        ctaHref: "/services/seo",
        ctaLabel: "Explore SEO"
      },
      {
        id: "performance",
        title: "Performance Marketing (Meta + Google Ads)",
        icon: "campaign",
        description:
          "Scale your business with high-ROI ad campaigns. We design, run, optimise, and scale paid ads across Facebook, Instagram, Google Search, Display, YouTube & international platforms.",
        ctaHref: "/services/performance-marketing",
        ctaLabel: "Explore Ads"
      },
      {
        id: "development",
        title: "Web Development (MERN/MEAN/React/Node.js)",
        icon: "code",
        description:
          "Build websites that convert, impress, and scale. From corporate sites to e-commerce to full-stack applications, we build fast, modern, responsive, high-converting digital experiences.",
        ctaHref: "/services/web-development",
        ctaLabel: "Explore Development"
      },
      {
        id: "youtube",
        title: "YouTube SEO & Creator Growth",
        icon: "smart_display",
        description:
          "Grow your channel with strategy, not luck. We handle thumbnails, content strategy, metadata optimisation, and video ranking to help creators scale across countries & languages.",
        ctaHref: "/services/youtube-growth",
        ctaLabel: "Explore YouTube"
      },
      {
        id: "social",
        title: "Social Media Management",
        icon: "public",
        description:
          "End-to-end content, posting, strategy & branding. We manage your Instagram, Facebook, TikTok, and LinkedIn presence with engaging content systems designed for brand authority.",
        ctaHref: "/services/social-media",
        ctaLabel: "Explore Social"
      },
      {
        id: "linkedin",
        title: "LinkedIn Marketing & CEO Personal Branding",
        icon: "badge",
        description:
          "Position yourself as an industry leader. We manage your entire LinkedIn identity — profile, content, growth, outreach, and authority positioning for CEOs, founders & professionals.",
        ctaHref: "/services/linkedin-branding",
        ctaLabel: "Explore LinkedIn"
      },
      {
        id: "influencer",
        title: "Influencer Marketing Services",
        icon: "groups",
        description:
          "Use influencer power to grow your brand globally. From selection & negotiation to campaign execution, we help brands collaborate with the right creators to boost trust & visibility.",
        ctaHref: "/services/influencer-marketing",
        ctaLabel: "Explore Influencers"
      },
      {
        id: "pr",
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
      <Section id="services" tone="tint" className="py-8 sm:py-10">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <h2 className="text-h2">Our Service Categories</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Comprehensive solutions covering every stage of your business growth.
                </p>
              </div>
              <Button variant="secondary" asChild className="w-full sm:w-auto">
                <Link href="/services">Explore Full Services →</Link>
              </Button>
            </div>

            <div className="space-y-3 lg:hidden">
              {categories.map((c) => {
                const expanded = openId === c.id;
                return (
                  <div key={c.id} className="overflow-hidden rounded-xl border border-border bg-surface">
                    <button
                      type="button"
                      onClick={() => setOpenId(expanded ? "" : c.id)}
                      className="flex min-h-[44px] w-full items-center justify-between gap-3 px-4 py-3 text-left"
                      aria-expanded={expanded ? "true" : "false"}
                      aria-controls={`service-category-${c.id}`}
                    >
                      <span className="text-small font-semibold text-textPrimary">{c.title}</span>
                      <span className="material-symbols-outlined text-[20px] text-textSecondary" aria-hidden="true">
                        {expanded ? "expand_less" : "expand_more"}
                      </span>
                    </button>
                    <m.div
                      id={`service-category-${c.id}`}
                      initial={false}
                      animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <CategoryBlock
                          title={c.title}
                          description={c.description}
                          icon={c.icon}
                          ctaHref={c.ctaHref}
                          ctaLabel={c.ctaLabel}
                        />
                      </div>
                    </m.div>
                  </div>
                );
              })}
            </div>

            <div className="hidden grid-cols-1 gap-6 lg:grid lg:grid-cols-2">
              {categories.map((c) => (
                <CategoryBlock
                  key={`desktop-${c.id}`}
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

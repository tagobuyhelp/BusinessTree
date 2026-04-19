"use client";

import React, { useMemo } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Button } from "../ui/Button";
import { Section, SectionInner } from "../ui/Section";
import { CategoryBlock } from "./CategoryBlock";

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  const categories = useMemo(
    () => [
      {
        title: "Marketing",
        description: "Demand generation systems designed for predictable growth.",
        services: [
          {
            href: "/services/digital-marketing",
            icon: "insights",
            title: "Digital Marketing Services",
            description: "Full-funnel strategy to attract, convert, and retain customers."
          },
          {
            href: "/services/seo",
            icon: "trending_up",
            title: "SEO (Local + Global)",
            description: "Rank higher on Google and generate long-term traffic and leads.",
            featured: true,
            badge: "Most Popular"
          },
          {
            href: "/services/performance-marketing",
            icon: "campaign",
            title: "Performance Marketing",
            description: "Profit-focused paid campaigns optimized for ROI and scale.",
            featured: true,
            badge: "Most Popular"
          },
          {
            href: "/services/social-media",
            icon: "public",
            title: "Social Media Management",
            description: "Build trust and demand with consistent, high-quality presence."
          }
        ]
      },
      {
        title: "Development",
        description: "High-performance builds that feel premium and convert.",
        services: [
          {
            href: "/services/web-development",
            icon: "code",
            title: "Web Development",
            description: "Modern MERN/MEAN/React/Node builds engineered for speed and conversion."
          },
          {
            href: "/services/ecommerce",
            icon: "shopping_cart",
            title: "E-commerce / Landing Pages",
            description: "Conversion-first pages that increase revenue and reduce drop-offs."
          }
        ]
      },
      {
        title: "Branding & Growth",
        description: "Authority-building growth levers that compound over time.",
        services: [
          {
            href: "/services/youtube-growth",
            icon: "smart_display",
            title: "YouTube Growth",
            description: "Grow reach and leads with content systems and optimization."
          },
          {
            href: "/services/linkedin-branding",
            icon: "badge",
            title: "LinkedIn Personal Branding",
            description: "Position founders and teams to attract pipeline and partnerships."
          },
          {
            href: "/services/influencer-marketing",
            icon: "groups",
            title: "Influencer Marketing",
            description: "Credibility-driven campaigns that speed up trust and demand."
          },
          {
            href: "/services/pr-authority",
            icon: "workspace_premium",
            title: "PR & Brand Authority",
            description: "Build trust with positioning, narratives, and earned visibility."
          }
        ]
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="services" className="py-12 sm:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <h2 className="text-h2">Our Service Categories</h2>
                <p className="mt-3 text-body text-textSecondary">
                  360° digital solutions to grow, scale, and position your brand globally.
                </p>
              </div>

              <Button variant="secondary" asChild>
                <Link href="/services">Explore All Services →</Link>
              </Button>
            </div>

            <div className="space-y-6">
              {categories.map((c) => (
                <CategoryBlock
                  key={c.title}
                  title={c.title}
                  description={c.description}
                  services={c.services}
                />
              ))}
            </div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

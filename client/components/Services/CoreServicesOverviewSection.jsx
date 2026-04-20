"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Section, SectionInner } from "../ui/Section";
import { ServiceCard } from "../Home/ServiceCard";

export function CoreServicesOverviewSection() {
  const reduceMotion = useReducedMotion();

  const services = useMemo(
    () => [
      {
        href: "/services/digital-marketing",
        icon: "insights",
        title: "Digital Marketing",
        description: "Full-funnel systems that convert attention into revenue."
      },
      {
        href: "/services/seo",
        icon: "travel_explore",
        title: "SEO (Local + Global)",
        description: "Compounding organic growth driven by high-intent visibility."
      },
      {
        href: "/services/performance-marketing",
        icon: "campaign",
        title: "Performance Marketing",
        description: "ROI-focused acquisition built to scale profitably."
      },
      {
        href: "/services/web-development",
        icon: "code",
        title: "Web Development",
        description: "Fast, premium websites designed to increase conversions."
      },
      {
        href: "/services/social-media",
        icon: "public",
        title: "Social Media",
        description: "Consistent content systems that build trust and demand."
      },
      {
        href: "/services/youtube-growth",
        icon: "smart_display",
        title: "YouTube Growth",
        description: "Channel systems that grow reach, authority, and leads."
      },
      {
        href: "/services/linkedin-branding",
        icon: "badge",
        title: "LinkedIn Branding",
        description: "Founder and team positioning that attracts pipeline."
      },
      {
        href: "/services/pr-authority",
        icon: "workspace_premium",
        title: "PR & Authority",
        description: "Credibility engines that speed up trust and sales cycles."
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="tint" className="py-10 md:py-12 lg:py-16">
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
                <h2 className="text-h2">Core Services (Overview)</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Choose what you need now — or combine services for full-funnel growth.
                </p>
              </div>
              <Link
                href="#form"
                className="inline-flex min-h-[44px] items-center gap-2 text-small font-medium text-accent"
              >
                <span>Get a free strategy</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>

            <m.div
              className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4"
              variants={
                reduceMotion
                  ? {}
                  : {
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
                  }
              }
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((s) => (
                <m.div
                  key={s.href}
                  variants={
                    reduceMotion
                      ? {}
                      : {
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 }
                      }
                  }
                >
                  <ServiceCard
                    href={s.href}
                    icon={s.icon}
                    title={s.title}
                    description={s.description}
                    descriptionLines={1}
                    showCta={false}
                  />
                </m.div>
              ))}
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

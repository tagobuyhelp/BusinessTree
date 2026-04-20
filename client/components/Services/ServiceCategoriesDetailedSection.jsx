"use client";

import React, { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Section, SectionInner } from "../ui/Section";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

function Icon({ name, className, "aria-hidden": ariaHidden = true }) {
  return (
    <span
      className={cx("material-symbols-outlined select-none leading-none", className)}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
}

function CategoryCard({ title, description, icon, items, ctaHref, ctaLabel }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-tint">
          <Icon name={icon} className="text-[22px] text-accent" />
        </div>
        <div className="min-w-0">
          <div className="text-body font-semibold text-textPrimary">{title}</div>
          <div className="mt-2 text-small text-textSecondary">{description}</div>
          <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
            {items.map((label) => (
              <div key={label} className="flex items-start gap-2 rounded-xl border border-border bg-bg px-4 py-3">
                <Icon name="check_circle" className="mt-0.5 text-[18px] text-accent" />
                <div className="text-small font-medium text-textPrimary">{label}</div>
              </div>
            ))}
          </div>

          {ctaHref ? (
            <div className="mt-4">
              <Link href={ctaHref} className="inline-flex min-h-[44px] items-center gap-2 text-small font-medium text-accent">
                <span>{ctaLabel}</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function ServiceCategoriesDetailedSection() {
  const reduceMotion = useReducedMotion();
  const categories = useMemo(
    () => [
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        icon: "insights",
        description: "Full-funnel growth systems built around your offer, audience, and revenue goals.",
        items: ["Growth strategy", "Content systems", "Funnel planning", "Conversion tracking"],
        ctaHref: "/services/digital-marketing",
        ctaLabel: "Explore Digital Marketing"
      },
      {
        id: "seo",
        title: "SEO",
        icon: "travel_explore",
        description: "Rank for high-intent keywords locally and globally to drive predictable organic growth.",
        items: ["Technical SEO", "On-page SEO", "Content strategy", "Local SEO"],
        ctaHref: "/services/seo",
        ctaLabel: "Explore SEO"
      },
      {
        id: "performance",
        title: "Performance Marketing",
        icon: "campaign",
        description: "Profit-first ads across Meta and Google with tracking, testing, and optimization.",
        items: ["Meta ads", "Google ads", "Landing pages", "Retargeting"],
        ctaHref: "/services/performance-marketing",
        ctaLabel: "Explore Performance"
      },
      {
        id: "development",
        title: "Development",
        icon: "code",
        description: "Conversion-first websites and landing pages built for speed, clarity, and trust.",
        items: ["Websites", "Landing pages", "E-commerce builds", "Performance optimization"],
        ctaHref: "/services/web-development",
        ctaLabel: "Explore Development"
      },
      {
        id: "branding-growth",
        title: "Branding & Growth",
        icon: "workspace_premium",
        description: "Authority-building channels that compound trust, reach, and pipeline over time.",
        items: ["LinkedIn branding", "YouTube growth", "Influencer campaigns", "PR & authority"],
        ctaHref: "/services",
        ctaLabel: "Explore Branding & Growth"
      }
    ],
    []
  );

  const [openId, setOpenId] = useState(categories[0]?.id || null);

  const toggle = useCallback((id) => {
    setOpenId((v) => (v === id ? null : id));
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <Section id="categories" tone="surface" className="py-10 md:py-12 lg:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-h2">Service Categories (Detailed)</h2>
              <p className="mt-3 text-body text-textSecondary">
                Explore what we deliver inside each service, from strategy through execution.
              </p>
            </div>

            <div className="space-y-3 lg:hidden">
              {categories.map((c) => {
                const expanded = openId === c.id;
                return (
                  <div key={c.id} className="overflow-hidden rounded-xl border border-border bg-surface">
                    <button
                      type="button"
                      onClick={() => toggle(c.id)}
                      className={cx(
                        "flex min-h-[44px] w-full items-center justify-between gap-3 px-4 py-3 text-left",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      )}
                      aria-expanded={expanded ? "true" : "false"}
                      aria-controls={`services-cat-${c.id}`}
                    >
                      <span className="text-small font-semibold text-textPrimary">{c.title}</span>
                      <Icon name={expanded ? "expand_less" : "expand_more"} className="text-[22px] text-textSecondary" />
                    </button>
                    <m.div
                      id={`services-cat-${c.id}`}
                      initial={false}
                      animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <CategoryCard {...c} />
                      </div>
                    </m.div>
                  </div>
                );
              })}
            </div>

            <div className="hidden grid-cols-1 gap-6 lg:grid lg:grid-cols-2">
              {categories.map((c) => (
                <CategoryCard key={`desktop-${c.id}`} {...c} />
              ))}
            </div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

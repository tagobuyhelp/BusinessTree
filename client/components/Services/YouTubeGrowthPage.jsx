"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";
import { CTAButton } from "../ui/CTAButton";
import { Section, SectionInner } from "../ui/Section";
import { FAQAccordion } from "../Contact/FAQAccordion";
import { PillarCard } from "../Home/PillarCard";

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

function VideoThumb({ title, subtitle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="relative aspect-[16/9] bg-gradient-to-br from-primary to-secondary">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute -left-12 -top-12 h-56 w-56 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-borderOnBrand bg-headerBg px-3 py-3 text-onPrimary">
          <div className="text-[12px] font-semibold line-clamp-1">{title}</div>
          <div className="mt-1 text-[11px] text-onPrimaryMuted line-clamp-1">{subtitle}</div>
        </div>
        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-medium text-white">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
            smart_display
          </span>
          <span>Video</span>
        </div>
      </div>
    </div>
  );
}

export function YouTubeGrowthPage() {
  const reduceMotion = useReducedMotion();

  const painPoints = useMemo(
    () => [
      { icon: "trending_down", title: "Low views", text: "Videos don’t get consistent discovery." },
      { icon: "search_off", title: "No ranking", text: "Titles and metadata don’t match search intent." },
      { icon: "sync_problem", title: "Inconsistent growth", text: "No system means every upload starts from zero." },
      { icon: "image_not_supported", title: "Weak thumbnails", text: "Low CTR limits reach even when content is good." }
    ],
    []
  );

  const system = useMemo(
    () => [
      { icon: "key", title: "YouTube keyword research", text: "We map topics to search intent and demand." },
      { icon: "map", title: "Content strategy", text: "Pillars, series, and a repeatable publishing plan." },
      { icon: "image", title: "Thumbnail optimization", text: "Improve CTR with strong hooks and visual clarity." },
      { icon: "description", title: "Metadata & SEO", text: "Titles, descriptions, and tags aligned to ranking." },
      { icon: "timeline", title: "Audience retention", text: "Increase watch time with better structure and pacing." }
    ],
    []
  );

  const optimize = useMemo(
    () => [
      { icon: "title", title: "Titles", text: "Search + curiosity hooks that drive clicks." },
      { icon: "image", title: "Thumbnails", text: "Clear promise, high contrast, and consistency." },
      { icon: "subject", title: "Descriptions", text: "Keywords + timestamps + conversion links." },
      { icon: "tag", title: "Tags", text: "Supporting signals and topic alignment." },
      { icon: "schedule", title: "Watch time", text: "Retention improvements to unlock reach." }
    ],
    []
  );

  const results = useMemo(
    () => [
      { value: "↑", label: "Views growth" },
      { value: "↑", label: "Ranking videos" },
      { value: "↑", label: "Subscribers" },
      { value: "↑", label: "Watch time" }
    ],
    []
  );

  const process = useMemo(
    () => [
      { icon: "fact_check", title: "Channel Audit", text: "We review content, analytics, and SEO gaps." },
      { icon: "map", title: "Strategy", text: "We define topics, series, and growth KPIs." },
      { icon: "tune", title: "Content Optimization", text: "We improve titles, thumbnails, and retention." },
      { icon: "trending_up", title: "Growth Scaling", text: "We repeat what works and expand winners." }
    ],
    []
  );

  const pillars = useMemo(
    () => [
      { icon: "travel_explore", title: "SEO-based approach", description: "Rank for search intent, not luck." },
      { icon: "insights", title: "Data-driven decisions", description: "We optimize using CTR and retention signals." },
      { icon: "calendar_month", title: "System + consistency", description: "A repeatable plan that compounds." },
      { icon: "public", title: "Long-term value", description: "Evergreen content that keeps bringing leads." }
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        id: "timeline",
        question: "How long does YouTube growth take?",
        answer:
          "Most channels see early improvements within weeks as CTR and retention improve. Compounding growth comes from consistent uploads and a strong content system over months."
      },
      {
        id: "create",
        question: "Do you create videos?",
        answer:
          "We can support scripts, topics, titles, thumbnails, and optimization. Many creators film in-house for authenticity while we handle the growth system."
      },
      {
        id: "guarantee",
        question: "Can you guarantee views?",
        answer:
          "No one can ethically guarantee views. We improve controllable inputs—topic selection, packaging, and retention—to increase the probability of consistent growth."
      }
    ],
    []
  );

  const fadeUp = reduceMotion
    ? undefined
    : { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } } };

  return (
    <LazyMotion features={domAnimation}>
      <main>
        <Section className="py-0">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
            </div>

            <SectionInner>
              <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "show"} className="py-10 md:py-14 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
                  <div className="space-y-5 lg:col-span-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-borderOnBrand bg-headerBg px-3 py-1 text-[13px] text-onPrimaryMuted">
                      <Icon name="smart_display" className="text-[18px] text-onPrimary" />
                      <span>YouTube growth built on SEO + retention</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Grow Your YouTube Channel with Strategy, Not Luck
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      We help you rank videos, grow your audience, and build a scalable content system.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <CTAButton
                        label="Get YouTube Growth Plan"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                      <Button
                        size="lg"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="#what-we-optimize" className="w-full justify-center">
                          <Icon name="tune" className="text-[20px]" />
                          <span>What We Optimize</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft">
                      <div className="inline-flex items-center gap-2">
                        <Icon name="travel_explore" className="text-[12px] text-onPrimaryMuted" />
                        <span>Ranking intent</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="timeline" className="text-[12px] text-onPrimaryMuted" />
                        <span>Retention focus</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="calendar_month" className="text-[12px] text-onPrimaryMuted" />
                        <span>Consistent system</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      <VideoThumb title="How to rank on YouTube" subtitle="Keyword research + packaging + retention" />
                      <VideoThumb title="Thumbnail CTR upgrades" subtitle="More clicks without clickbait" />
                    </div>
                  </div>
                </div>
              </m.div>
            </SectionInner>
          </div>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">The Problem We Fix</h2>
                <p className="mt-3 text-body text-textSecondary">
                  YouTube growth stalls when there’s no strategy, no packaging system, and no retention plan.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {painPoints.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={p.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="mt-4 text-body font-semibold text-textPrimary">{p.title}</div>
                    <div className="mt-2 text-small text-textSecondary">{p.text}</div>
                  </div>
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Our System</h2>
                <p className="mt-3 text-body text-textSecondary">
                  A growth system that compounds: topic selection, packaging, retention, and consistency.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
                {system.map((s) => (
                  <div key={s.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={s.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="mt-4 text-body font-semibold text-textPrimary">{s.title}</div>
                    <div className="mt-2 text-small text-textSecondary">{s.text}</div>
                  </div>
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section id="what-we-optimize" tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">What We Optimize</h2>
                <p className="mt-3 text-body text-textSecondary">
                  The inputs that drive ranking and reach: CTR, watch time, and intent alignment.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {optimize.map((o) => (
                  <div key={o.title} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                        <Icon name={o.icon} className="text-[22px] text-accent" />
                      </div>
                      <div className="text-body font-semibold text-textPrimary">{o.title}</div>
                    </div>
                    <div className="mt-3 text-small text-textSecondary">{o.text}</div>
                  </div>
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Results</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We improve ranking and discovery inputs so growth becomes predictable.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                    <div className="font-body tabular-nums text-h3 font-bold leading-none text-secondary">{r.value}</div>
                    <div className="mt-2 text-[11px] font-medium text-textSecondary">{r.label}</div>
                  </div>
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Process</h2>
                <p className="mt-3 text-body text-textSecondary">
                  A focused workflow built for long-term compounding growth.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {process.map((s, idx) => (
                  <div key={s.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                        <Icon name={s.icon} className="text-[22px] text-accent" />
                      </div>
                      <div className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] font-medium text-textSecondary">
                        Step {idx + 1}
                      </div>
                    </div>
                    <div className="mt-4 text-body font-semibold text-textPrimary">{s.title}</div>
                    <div className="mt-2 text-small text-textSecondary">{s.text}</div>
                  </div>
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Why Choose Us</h2>
                <p className="mt-3 text-body text-textSecondary">
                  YouTube growth works when SEO meets retention and consistency.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {pillars.map((p) => (
                  <PillarCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <h2 className="text-h2">FAQs</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Quick answers before you start your growth plan.
                </p>
              </div>
              <div className="lg:col-span-7">
                <FAQAccordion items={faq} />
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section className="py-0">
          <div className="relative overflow-hidden border-y border-borderOnBrand bg-gradient-to-br from-primary to-secondary">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
            </div>

            <SectionInner>
              <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.25 }} className="relative py-10 pb-16 text-center md:py-14 md:pb-20">
                <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                  Start Growing Your Channel
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  Get a YouTube growth plan built on SEO, retention, and consistent execution.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Start Growing Your Channel"
                    fullWidth
                    className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                  />
                </div>

                <div className="mt-6 text-small text-onPrimarySoft">No spam. No commitment.</div>
              </m.div>
            </SectionInner>
          </div>
        </Section>
      </main>
    </LazyMotion>
  );
}

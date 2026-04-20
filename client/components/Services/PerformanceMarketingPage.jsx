"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";
import { CTAButton } from "../ui/CTAButton";
import { Section, SectionInner } from "../ui/Section";
import { FAQAccordion } from "../Contact/FAQAccordion";
import { CaseStudyCard } from "../Home/CaseStudyCard";
import { PillarCard } from "../Home/PillarCard";

const CaseStudyModal = dynamic(
  () => import("../Home/CaseStudyModal").then((m) => m.CaseStudyModal),
  { ssr: false }
);

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

export function PerformanceMarketingPage() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const painPoints = useMemo(
    () => [
      { icon: "money_off", title: "Wasting money on ads", text: "Spend goes up, results stay flat, and CPAs climb." },
      { icon: "swap_vert", title: "Low conversion rates", text: "Clicks don’t turn into leads because the funnel leaks." },
      { icon: "question_mark", title: "No clear ROI", text: "Tracking gaps make it impossible to scale confidently." }
    ],
    []
  );

  const system = useMemo(
    () => [
      { icon: "insights", title: "Data-driven strategy", text: "We define KPIs, attribution, and a scaling roadmap." },
      { icon: "my_location", title: "Audience targeting", text: "We build segments and messaging that match intent." },
      { icon: "tune", title: "Funnel optimization", text: "We improve pages, offers, and tracking to lift CVR." },
      { icon: "trending_up", title: "Continuous scaling", text: "We scale winners with guardrails to protect ROAS." }
    ],
    []
  );

  const platforms = useMemo(
    () => [
      { icon: "thumb_up", title: "Facebook Ads", text: "Creative testing + intent targeting." },
      { icon: "photo_camera", title: "Instagram Ads", text: "Reels, stories, and feed performance." },
      { icon: "search", title: "Google Search", text: "High-intent demand capture." },
      { icon: "ad_group", title: "Display Ads", text: "Retargeting and awareness at scale." },
      { icon: "smart_display", title: "YouTube Ads", text: "Video demand generation and remarketing." }
    ],
    []
  );

  const results = useMemo(
    () => [
      { value: "3X–5X", label: "ROAS targets" },
      { value: "↓ CPA", label: "Lower acquisition cost" },
      { value: "↑ CVR", label: "Higher conversion rates" },
      { value: "Clear", label: "Attribution & reporting" }
    ],
    []
  );

  const process = useMemo(
    () => [
      { icon: "map", title: "Strategy", text: "Offer, audience, KPIs, tracking, and test plan." },
      { icon: "construction", title: "Campaign Setup", text: "Structure, pixels, creatives, and landing pages." },
      { icon: "tune", title: "Optimization", text: "Creative testing, bid control, and funnel improvements." },
      { icon: "trending_up", title: "Scaling", text: "Expand budgets, audiences, and channels profitably." }
    ],
    []
  );

  const pillars = useMemo(
    () => [
      { icon: "insights", title: "Data-driven", description: "Every decision backed by performance signals." },
      { icon: "paid", title: "ROI-focused", description: "We optimize for revenue and unit economics." },
      { icon: "dashboard", title: "Transparent reporting", description: "Dashboards and clear monthly updates." },
      { icon: "construction", title: "Execution cadence", description: "Weekly improvements across ads and funnel." }
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        id: "budget",
        question: "How much budget do we need?",
        answer:
          "It depends on your niche and goals. Many brands start with a controlled test budget, then scale only when tracking and conversion performance are stable."
      },
      {
        id: "speed",
        question: "How fast do results come?",
        answer:
          "Paid campaigns can produce early signals in days. Consistent performance comes from creative testing, landing page optimization, and clean tracking."
      },
      {
        id: "best-platform",
        question: "Which platform is best for my business?",
        answer:
          "We match platform to intent: Google Search for demand capture, Meta for creative-driven acquisition, and YouTube/Display for demand generation and retargeting."
      }
    ],
    []
  );

  const caseStudies = useMemo(
    () => [
      {
        href: "/case-studies/wellness-lifestyle",
        industry: "Wellness & Lifestyle",
        title: "Paid Funnel Efficiency",
        problem: "High CPA and unstable ROAS",
        solution: "Creative testing + funnel optimization + retargeting",
        results: ["3X ROAS", "57% lower CPA", "430% traffic growth"]
      },
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        title: "Pipeline Scaling",
        problem: "Low conversion and high CPL",
        solution: "Messaging + landing pages + tracking + retargeting",
        results: ["29% lower CPL", "2.4X demo bookings", "41% higher CVR"]
      },
      {
        href: "/case-studies/ecommerce",
        industry: "E-commerce",
        title: "Revenue Lift",
        problem: "Weak purchase conversion",
        solution: "CRO + lifecycle + paid optimization",
        results: ["+18% AOV", "1.8X revenue per visitor", "+33% repeat rate"]
      }
    ],
    []
  );

  const fadeUp = reduceMotion
    ? undefined
    : {
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } }
    };

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
                      <Icon name="campaign" className="text-[18px] text-onPrimary" />
                      <span>Performance marketing built for measurable ROI</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Scale Your Business with High-ROI Ad Campaigns
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      From Meta Ads to Google Ads, we design, optimize, and scale campaigns that drive real revenue.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <CTAButton
                        label="Get Free Ad Strategy"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                      <Button
                        size="lg"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="#results" className="w-full justify-center">
                          <Icon name="stacked_line_chart" className="text-[20px]" />
                          <span>See ROI Outcomes</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft">
                      <div className="inline-flex items-center gap-2">
                        <Icon name="shield" className="text-[12px] text-onPrimaryMuted" />
                        <span>No spam</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="check_circle" className="text-[12px] text-onPrimaryMuted" />
                        <span>No commitment</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="dashboard" className="text-[12px] text-onPrimaryMuted" />
                        <span>Transparent reporting</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-borderOnBrand bg-headerBg p-5 text-onPrimary shadow-sm">
                      <div className="text-small font-semibold">Free ad strategy includes</div>
                      <div className="mt-3 space-y-2 text-small text-onPrimaryMuted">
                        {[
                          "Tracking + attribution quick audit",
                          "Funnel and landing page opportunities",
                          "A scaling roadmap with KPIs"
                        ].map((t) => (
                          <div key={t} className="flex items-start gap-2">
                            <Icon name="check_circle" className="mt-0.5 text-[18px] text-onPrimary" />
                            <span className="min-w-0">{t}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-[12px] text-onPrimarySoft">Built for clarity and ROI.</div>
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
                  Performance marketing fails when spend outruns strategy, tracking is unclear, and the funnel doesn’t convert.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                <h2 className="text-h2">Our Performance Marketing System</h2>
                <p className="mt-3 text-body text-textSecondary">
                  A measured system: strategy, targeting, funnel improvements, and scaling based on performance signals.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {system.map((a) => (
                  <div key={a.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={a.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="mt-4 text-body font-semibold text-textPrimary">{a.title}</div>
                    <div className="mt-2 text-small text-textSecondary">{a.text}</div>
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
                <h2 className="text-h2">Platforms We Manage</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We choose the platform based on intent, offer fit, and where your best customers pay attention.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {platforms.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                        <Icon name={p.icon} className="text-[22px] text-accent" />
                      </div>
                      <div className="text-body font-semibold text-textPrimary">{p.title}</div>
                    </div>
                    <div className="mt-3 text-small text-textSecondary">{p.text}</div>
                  </div>
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section id="results" tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Results That Matter</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We optimize toward profitability: ROAS, CPA, conversion rate, and lead quality.
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
                  A fast loop: build, measure, improve, then scale what wins.
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
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div className="max-w-2xl">
                  <h2 className="text-h2">Case Studies</h2>
                  <p className="mt-3 text-body text-textSecondary">Proof from paid growth systems built to convert.</p>
                </div>
                <Button variant="secondary" asChild className="w-full sm:w-auto">
                  <Link href="/case-studies">View All Case Studies →</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {caseStudies.map((cs) => (
                  <div key={cs.href}>
                    <CaseStudyCard
                      href={cs.href}
                      industry={cs.industry}
                      title={cs.title}
                      problem={cs.problem}
                      solution={cs.solution}
                      results={cs.results}
                      variant="compact"
                      onOpen={() => {
                        setActive({
                          ...cs,
                          problemLong: cs.problem,
                          solutionPoints: [cs.solution]
                        });
                        setOpen(true);
                      }}
                    />
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
                <h2 className="text-h2">Why Choose Us</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Performance marketing works when tracking is clean, testing is consistent, and reporting is transparent.
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

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <h2 className="text-h2">FAQs</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Quick answers to help you decide before requesting your strategy.
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
                  Get Free Ad Strategy
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  We’ll identify quick wins, tracking gaps, and a scaling roadmap tied to ROI.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Get Free Ad Strategy"
                    fullWidth
                    className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                  />
                </div>

                <div className="mt-6 text-small text-onPrimarySoft">No spam. No commitment.</div>
              </m.div>
            </SectionInner>
          </div>
        </Section>

        <CaseStudyModal open={open} onClose={() => setOpen(false)} caseStudy={active} />
      </main>
    </LazyMotion>
  );
}

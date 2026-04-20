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

export function DigitalMarketingPage() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const painPoints = useMemo(
    () => [
      { icon: "scatter_plot", title: "Scattered execution", text: "Tactics without a system don’t compound." },
      { icon: "money_off", title: "Wasted spend", text: "Budget leaks when targeting and tracking are unclear." },
      { icon: "trending_down", title: "Low conversion", text: "Traffic doesn’t turn into pipeline without CRO." }
    ],
    []
  );

  const system = useMemo(
    () => [
      { icon: "map", title: "Strategy", text: "Offer, positioning, funnel, and measurable KPIs." },
      { icon: "campaign", title: "Channel execution", text: "SEO, ads, content, email — shipped consistently." },
      { icon: "analytics", title: "Tracking & attribution", text: "Clean measurement so ROI is obvious." },
      { icon: "tune", title: "Optimization", text: "Continuous testing to lift CVR and efficiency." }
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        icon: "travel_explore",
        title: "SEO systems",
        text: "High-intent visibility that compounds over time."
      },
      {
        icon: "campaign",
        title: "Performance marketing",
        text: "Meta + Google ads optimized for ROI and scale."
      },
      {
        icon: "web",
        title: "Landing pages & funnels",
        text: "Conversion-first pages built to turn clicks into customers."
      },
      {
        icon: "mail",
        title: "Lifecycle & email",
        text: "Nurture, retention, and reactivation automation."
      }
    ],
    []
  );

  const channels = useMemo(
    () => [
      { icon: "search", title: "Google Search", text: "Capture demand when intent is highest." },
      { icon: "thumb_up", title: "Meta (FB/IG)", text: "Creative-driven acquisition and retargeting." },
      { icon: "smart_display", title: "YouTube", text: "Demand generation with video content." },
      { icon: "public", title: "Social systems", text: "Consistency that builds trust and demand." },
      { icon: "description", title: "Content engine", text: "Pillars, clusters, and distribution." }
    ],
    []
  );

  const results = useMemo(
    () => [
      { value: "↑", label: "Qualified leads" },
      { value: "↓", label: "Cost per lead" },
      { value: "↑", label: "Conversion rate" },
      { value: "Clear", label: "ROI reporting" }
    ],
    []
  );

  const process = useMemo(
    () => [
      { icon: "fact_check", title: "Audit", text: "We find gaps in tracking, funnel, and channels." },
      { icon: "map", title: "Plan", text: "We build a roadmap tied to KPIs and priorities." },
      { icon: "construction", title: "Execute", text: "We ship campaigns, pages, and content weekly." },
      { icon: "trending_up", title: "Scale", text: "We expand winners with guardrails and reporting." }
    ],
    []
  );

  const pillars = useMemo(
    () => [
      { icon: "insights", title: "Data-driven", description: "Decisions backed by tracking and experiments." },
      { icon: "construction", title: "Execution-first", description: "We ship real work weekly, not just decks." },
      { icon: "tune", title: "Conversion focus", description: "CRO that turns traffic into pipeline." },
      { icon: "dashboard", title: "Transparent reporting", description: "Dashboards and clear performance updates." }
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        id: "what",
        question: "What services are included in digital marketing?",
        answer:
          "We tailor the mix to your goals. Common combinations include SEO, paid ads, landing pages/funnels, content, and email automation."
      },
      {
        id: "timeline",
        question: "How fast can we see results?",
        answer:
          "Paid channels can show early signals quickly. SEO and content compound over time. The fastest improvements usually come from fixing tracking and improving conversion rate."
      },
      {
        id: "reporting",
        question: "How do you report performance?",
        answer:
          "We track KPIs like leads, conversion rate, CPA/CPL, and revenue attribution. You’ll get clear dashboards and insights, not vanity metrics."
      }
    ],
    []
  );

  const caseStudies = useMemo(
    () => [
      {
        href: "/case-studies/wellness-lifestyle",
        industry: "Wellness & Lifestyle",
        title: "Full-Funnel Growth",
        problem: "High cost and low visibility",
        solution: "SEO + paid funnel + CRO",
        results: ["430% traffic growth", "3X ROAS", "57% lower CPA"]
      },
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        title: "Pipeline Acceleration",
        problem: "Stalled conversion and unclear attribution",
        solution: "Landing pages + tracking + retargeting",
        results: ["2.4X demo bookings", "41% higher CVR", "29% lower CPL"]
      },
      {
        href: "/case-studies/local-services",
        industry: "Local Services",
        title: "Lead Engine",
        problem: "Inconsistent leads",
        solution: "Local SEO + conversion pages",
        results: ["5X qualified leads", "Top 3 map pack", "64% lower CPA"]
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
                      <Icon name="insights" className="text-[18px] text-onPrimary" />
                      <span>Full-funnel marketing built for measurable growth</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Digital Marketing Services for Global Growth
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      From strategy to execution, we help you attract, convert, and retain customers with systems that scale.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <CTAButton
                        label="Get Free Strategy"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                      <Button
                        size="lg"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="#case-studies" className="w-full justify-center">
                          <Icon name="stacked_line_chart" className="text-[20px]" />
                          <span>View Results</span>
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
                        <span>Clear reporting</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-borderOnBrand bg-headerBg p-5 text-onPrimary shadow-sm">
                      <div className="text-small font-semibold">Free strategy includes</div>
                      <div className="mt-3 space-y-2 text-small text-onPrimaryMuted">
                        {["Channel opportunity map", "Funnel + conversion quick wins", "90-day growth plan"].map((t) => (
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
                  Growth stalls when execution is inconsistent, tracking is unclear, and the funnel doesn’t convert.
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
                <h2 className="text-h2">Our System</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Strategy-led delivery with consistent execution, clean measurement, and ongoing optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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

              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <div className="text-body font-semibold text-textPrimary">Typical service mix</div>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {services.map((s) => (
                    <div key={s.title} className="rounded-xl border border-border bg-bg p-4">
                      <div className="flex items-center gap-2">
                        <Icon name={s.icon} className="text-[18px] text-accent" />
                        <div className="text-small font-semibold text-textPrimary">{s.title}</div>
                      </div>
                      <div className="mt-2 text-small text-textSecondary">{s.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Channels We Use</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We choose channels based on intent and ROI — and build a system that compounds.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {channels.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                        <Icon name={c.icon} className="text-[22px] text-accent" />
                      </div>
                      <div className="text-body font-semibold text-textPrimary">{c.title}</div>
                    </div>
                    <div className="mt-3 text-small text-textSecondary">{c.text}</div>
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
                <h2 className="text-h2">Outcomes</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We track the metrics that matter: conversion rate, lead quality, and revenue impact.
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
                <p className="mt-3 text-body text-textSecondary">A clear workflow designed to ship quickly and improve continuously.</p>
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

        <Section id="case-studies" tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div className="max-w-2xl">
                  <h2 className="text-h2">Case Studies</h2>
                  <p className="mt-3 text-body text-textSecondary">Proof from full-funnel systems built to convert.</p>
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
                  You get strategy, execution, and accountability — built to drive growth.
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
                <p className="mt-3 text-body text-textSecondary">Quick answers before you request your strategy.</p>
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
                  Get Free Strategy
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  We’ll identify quick wins and a growth plan tied to measurable outcomes.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Get Free Strategy"
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

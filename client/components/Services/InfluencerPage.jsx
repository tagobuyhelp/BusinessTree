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

function CreatorPreview({ creator, angle, platform }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="relative bg-gradient-to-br from-primary to-secondary px-5 py-5 text-onPrimary">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-borderOnBrand bg-headerBg px-3 py-1 text-[11px] font-medium text-onPrimaryMuted">
              <Icon name="verified" className="text-[16px] text-onPrimary" />
              <span>{platform}</span>
            </div>
            <div className="mt-3 text-body font-semibold">{creator}</div>
            <div className="mt-1 text-small text-onPrimaryMuted line-clamp-2">{angle}</div>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-borderOnBrand bg-headerBg">
            <Icon name="campaign" className="text-[22px] text-onPrimary" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-2">
          {["Hook", "Proof", "CTA"].map((t) => (
            <div key={t} className="rounded-xl border border-border bg-bg px-3 py-3">
              <div className="text-[11px] font-medium text-textSecondary">{t}</div>
              <div className="mt-2 h-2 w-3/4 rounded bg-border" />
              <div className="mt-2 h-2 w-2/3 rounded bg-border" />
            </div>
          ))}
        </div>
        <div className="mt-4 text-[12px] font-medium text-textSecondary">
          Deliverables: script, talking points, landing link, and tracking plan.
        </div>
      </div>
    </div>
  );
}

export function InfluencerPage() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const painPoints = useMemo(
    () => [
      { icon: "shield", title: "Low brand trust", text: "Without proof, buyers hesitate and conversions slow down." },
      { icon: "my_location", title: "Hard to reach the right audience", text: "Targeting is noisy and attention is fragmented." },
      { icon: "warning", title: "Ineffective collaborations", text: "Wrong creator, wrong message, no tracking, no ROI." }
    ],
    []
  );

  const system = useMemo(
    () => [
      { icon: "search", title: "Influencer research & selection", text: "Audience match, credibility fit, and brand safety checks." },
      { icon: "map", title: "Campaign planning", text: "Angles, offers, messaging, and conversion path." },
      { icon: "handshake", title: "Content coordination", text: "Briefs, scripts, approvals, timelines, and QA." },
      { icon: "insights", title: "Performance tracking", text: "UTMs, landing pages, and reporting tied to outcomes." }
    ],
    []
  );

  const managed = useMemo(
    () => [
      { icon: "mail", title: "Influencer outreach", text: "Targeted outreach to the right creators." },
      { icon: "contract", title: "Negotiation", text: "Rates, deliverables, usage rights, and timelines." },
      { icon: "rocket_launch", title: "Campaign execution", text: "Coordination from briefing to live launch." },
      { icon: "dashboard", title: "Reporting", text: "Clear performance dashboards and learnings." }
    ],
    []
  );

  const platforms = useMemo(
    () => [
      { icon: "photo_camera", title: "Instagram", text: "Reels + stories for reach and trust." },
      { icon: "smart_display", title: "YouTube", text: "Evergreen reviews and high-intent discovery." },
      { icon: "movie", title: "TikTok", text: "Short-form demand generation and trend fit." },
      { icon: "badge", title: "LinkedIn", text: "B2B authority and decision-maker reach." }
    ],
    []
  );

  const results = useMemo(
    () => [
      { value: "↑", label: "Brand visibility" },
      { value: "↑", label: "Engagement" },
      { value: "↑", label: "Trust signals" },
      { value: "Trackable", label: "Performance" }
    ],
    []
  );

  const process = useMemo(
    () => [
      { icon: "map", title: "Strategy", text: "Audience, offer, creators, KPIs, and conversion plan." },
      { icon: "person_search", title: "Influencer selection", text: "Research, shortlist, vetting, and outreach." },
      { icon: "construction", title: "Campaign execution", text: "Briefs, approvals, publishing, and coordination." },
      { icon: "tune", title: "Optimization", text: "Iterate angles, creators, and landing flow based on data." }
    ],
    []
  );

  const pillars = useMemo(
    () => [
      { icon: "insights", title: "Data-driven selection", description: "We choose creators based on audience fit and outcomes." },
      { icon: "handshake", title: "Authentic partnerships", description: "Message matches creator voice and brand trust." },
      { icon: "dashboard", title: "Measurable reporting", description: "Clear tracking across content, clicks, and leads." },
      { icon: "trending_up", title: "Scalable campaigns", description: "Repeat winners and expand what works." }
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        id: "selection",
        question: "How do you select influencers?",
        answer:
          "We match audience fit, credibility, content quality, and brand safety. We prioritize creators who can drive trust and intent, not just views."
      },
      {
        id: "budget",
        question: "What budget is needed?",
        answer:
          "Budgets vary by niche and creator tier. We can start with a focused test and scale once we find angles and creators that perform."
      },
      {
        id: "measure",
        question: "How do you measure success?",
        answer:
          "We track reach and engagement, but we also connect performance to outcomes using tracked links, landing pages, and lead signals."
      }
    ],
    []
  );

  const caseStudies = useMemo(
    () => [
      {
        href: "/case-studies/wellness-lifestyle",
        industry: "Wellness & Lifestyle",
        title: "Trust → Conversions",
        problem: "Low trust and high CPA",
        solution: "Creator angles + funnel optimization",
        results: ["3X ROAS", "57% lower CPA", "Higher trust signals"]
      },
      {
        href: "/case-studies/ecommerce",
        industry: "E-commerce",
        title: "Social Proof Engine",
        problem: "Weak demand and low repeat purchases",
        solution: "UGC-style content + lifecycle alignment",
        results: ["1.8X revenue per visitor", "+33% repeat rate", "+18% AOV"]
      },
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        title: "Authority Distribution",
        problem: "Low awareness and pipeline",
        solution: "Partnership content + landing page alignment",
        results: ["2.4X demo bookings", "41% higher CVR", "More inbound"]
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
                      <Icon name="handshake" className="text-[18px] text-onPrimary" />
                      <span>Influencer marketing as a trust + conversion system</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Grow Your Brand with Influencer Marketing
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      We connect your brand with the right creators to build trust, reach new audiences, and drive real results.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <CTAButton
                        label="Start Your Influencer Campaign"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                      <Button
                        size="lg"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="#platforms" className="w-full justify-center">
                          <Icon name="public" className="text-[20px]" />
                          <span>Platform Coverage</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft">
                      <div className="inline-flex items-center gap-2">
                        <Icon name="verified" className="text-[12px] text-onPrimaryMuted" />
                        <span>Brand-safe creator vetting</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="insights" className="text-[12px] text-onPrimaryMuted" />
                        <span>Clear reporting</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="tune" className="text-[12px] text-onPrimaryMuted" />
                        <span>Conversion-first</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="space-y-3">
                      <CreatorPreview creator="Creator: Lifestyle niche" angle="UGC review + product demo" platform="Instagram" />
                      <CreatorPreview creator="Creator: B2B thought leader" angle="Authority post + offer bridge" platform="LinkedIn" />
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
                  Influencer marketing fails without creator fit, a clear offer, and measurable tracking.
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
                  A strategic system built around creator fit, messaging, and conversion paths.
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
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">What We Manage</h2>
                <p className="mt-3 text-body text-textSecondary">
                  End-to-end execution so campaigns stay coordinated, on-brand, and measurable.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {managed.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={d.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="mt-4 text-body font-semibold text-textPrimary">{d.title}</div>
                    <div className="mt-2 text-small text-textSecondary">{d.text}</div>
                  </div>
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section id="platforms" tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Platform Coverage</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We match creators and formats to where your buyers pay attention.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Results</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We prioritize measurable outcomes, not vanity metrics.
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

              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <div className="text-body font-semibold text-textPrimary">Conversion path</div>
                <div className="mt-2 text-body text-textSecondary">
                  Pair influencer campaigns with{" "}
                  <Link href="/services/performance-marketing" className="font-semibold text-accent">
                    retargeting
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/web-development" className="font-semibold text-accent">
                    conversion-first landing pages
                  </Link>{" "}
                  to turn trust into pipeline.
                </div>
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Process</h2>
                <p className="mt-3 text-body text-textSecondary">
                  A repeatable workflow built for trust, clarity, and measurable results.
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

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div className="max-w-2xl">
                  <h2 className="text-h2">Case Studies</h2>
                  <p className="mt-3 text-body text-textSecondary">Results from trust-first campaigns and funnels.</p>
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

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Why Choose Us</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Influencer marketing should be measurable, brand-safe, and designed to convert.
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
                <p className="mt-3 text-body text-textSecondary">Quick answers before you launch.</p>
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
                  Launch Your Campaign
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  Start an influencer campaign built for trust, reach, and measurable outcomes.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Launch Your Campaign"
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

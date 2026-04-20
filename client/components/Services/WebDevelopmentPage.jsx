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

export function WebDevelopmentPage() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const painPoints = useMemo(
    () => [
      { icon: "trending_down", title: "Low conversion websites", text: "Traffic arrives but users don’t take action." },
      { icon: "speed", title: "Slow loading pages", text: "Performance issues reduce trust and increase bounce." },
      { icon: "sentiment_dissatisfied", title: "Poor user experience", text: "Confusing layout creates friction and drop-offs." }
    ],
    []
  );

  const approach = useMemo(
    () => [
      { icon: "design_services", title: "UX/UI focused design", text: "Clear hierarchy, trust signals, and easier decisions." },
      { icon: "speed", title: "Performance optimization", text: "Fast loading, smooth interactions, and stable layout." },
      { icon: "tune", title: "Conversion-first layout", text: "CTAs placed where intent is highest across the funnel." },
      { icon: "account_tree", title: "Scalable architecture", text: "Modern stack built for growth, iteration, and scale." }
    ],
    []
  );

  const builds = useMemo(
    () => [
      { icon: "domain", title: "Business websites", text: "Premium sites built for trust, clarity, and leads." },
      { icon: "shopping_bag", title: "E-commerce", text: "High-converting product pages and checkout UX." },
      { icon: "web", title: "Landing pages", text: "Fast pages engineered for conversion and testing." },
      { icon: "developer_mode", title: "Full-stack applications", text: "Dashboards, portals, and custom product experiences." }
    ],
    []
  );

  const stack = useMemo(
    () => [
      { label: "React", icon: "code" },
      { label: "Next.js", icon: "bolt" },
      { label: "Node.js", icon: "terminal" },
      { label: "MongoDB", icon: "database" }
    ],
    []
  );

  const benefits = useMemo(
    () => [
      { icon: "speed", title: "Fast loading", text: "Built for Core Web Vitals and mobile speed." },
      { icon: "phone_iphone", title: "Mobile responsive", text: "Thumb-friendly layouts with clear tap targets." },
      { icon: "travel_explore", title: "SEO-ready", text: "Semantic structure and technical SEO foundations." },
      { icon: "lock", title: "Secure", text: "Best-practice setup to protect your users and data." }
    ],
    []
  );

  const process = useMemo(
    () => [
      { icon: "checklist", title: "Planning", text: "Goals, pages, funnel flow, and measurement plan." },
      { icon: "draw", title: "Design", text: "Wireframes and UI designed for clarity and conversion." },
      { icon: "code", title: "Development", text: "Modern implementation with performance and scalability." },
      { icon: "rocket_launch", title: "Launch", text: "QA, analytics, and post-launch iteration setup." }
    ],
    []
  );

  const pillars = useMemo(
    () => [
      { icon: "tune", title: "Conversion-first", description: "We design for decisions, not decoration." },
      { icon: "code", title: "Modern stack", description: "Next.js + React builds that are fast and flexible." },
      { icon: "speed", title: "Performance focus", description: "Speed and stability designed into every build." },
      { icon: "account_tree", title: "Scalable solutions", description: "Built to iterate quickly as your business grows." }
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        id: "timeline",
        question: "How long does development take?",
        answer:
          "Timelines depend on scope. Landing pages can ship quickly, while full websites and app builds take longer. We’ll outline a clear plan after the strategy call."
      },
      {
        id: "maintenance",
        question: "Do you provide maintenance?",
        answer:
          "Yes. We can handle ongoing updates, performance monitoring, and iteration so your site stays fast and current."
      },
      {
        id: "seo",
        question: "Is SEO included?",
        answer:
          "We build SEO-ready foundations (semantic structure, performance, metadata support). Full SEO programs are available via our SEO services."
      }
    ],
    []
  );

  const caseStudies = useMemo(
    () => [
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        title: "Conversion Lift",
        problem: "Low landing page conversion",
        solution: "Conversion-first pages + tracking",
        results: ["41% higher CVR", "2.4X demo bookings", "29% lower CPL"]
      },
      {
        href: "/case-studies/ecommerce",
        industry: "E-commerce",
        title: "Performance + UX Improvements",
        problem: "High bounce and weak purchase flow",
        solution: "UX fixes + CRO experiments",
        results: ["1.8X revenue per visitor", "+18% AOV", "+33% repeat rate"]
      },
      {
        href: "/case-studies/wellness-lifestyle",
        industry: "Wellness & Lifestyle",
        title: "Landing Page Optimization",
        problem: "High CPA and low conversion",
        solution: "Funnel + landing page optimization",
        results: ["57% lower CPA", "3X ROAS", "430% traffic growth"]
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
                      <Icon name="code" className="text-[18px] text-onPrimary" />
                      <span>Conversion-first web development built to scale</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Websites That Convert, Perform, and Scale
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      We build fast, modern, and high-converting websites that turn traffic into customers.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <CTAButton
                        label="Get Your Website Strategy"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                      <Button
                        size="lg"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="#stack" className="w-full justify-center">
                          <Icon name="terminal" className="text-[20px]" />
                          <span>See Tech Stack</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft">
                      <div className="inline-flex items-center gap-2">
                        <Icon name="speed" className="text-[12px] text-onPrimaryMuted" />
                        <span>Fast loading</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="tune" className="text-[12px] text-onPrimaryMuted" />
                        <span>Conversion-first</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="travel_explore" className="text-[12px] text-onPrimaryMuted" />
                        <span>SEO-ready</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-borderOnBrand bg-headerBg p-5 text-onPrimary shadow-sm">
                      <div className="text-small font-semibold">Website strategy includes</div>
                      <div className="mt-3 space-y-2 text-small text-onPrimaryMuted">
                        {[
                          "UX + conversion quick wins",
                          "Performance and SEO priorities",
                          "Build plan with clear next steps"
                        ].map((t) => (
                          <div key={t} className="flex items-start gap-2">
                            <Icon name="check_circle" className="mt-0.5 text-[18px] text-onPrimary" />
                            <span className="min-w-0">{t}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-[12px] text-onPrimarySoft">No spam. No commitment.</div>
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
                  Great marketing fails when the website doesn’t convert. We fix performance, UX, and conversion leaks together.
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
                <h2 className="text-h2">Our Approach</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We combine UX, performance, and conversion strategy so your website becomes a growth asset.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {approach.map((a) => (
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
                <h2 className="text-h2">What We Build</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Conversion-first builds for every stage: launch, scale, or rebuild.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {builds.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={b.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="mt-4 text-body font-semibold text-textPrimary">{b.title}</div>
                    <div className="mt-2 text-small text-textSecondary">{b.text}</div>
                  </div>
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section id="stack" tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Technology Stack</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Modern tools for speed, scalability, and maintainable code.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {stack.map((t) => (
                  <div key={t.label} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-small font-semibold text-textPrimary">
                    <Icon name={t.icon} className="text-[18px] text-accent" />
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <div className="text-body font-semibold text-textPrimary">Built for performance and iteration</div>
                <div className="mt-2 text-body text-textSecondary">
                  We prioritize speed, clean architecture, and conversion-ready UI so you can ship improvements quickly.
                </div>
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Features & Benefits</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Designed to perform across devices and convert under real traffic.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={b.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="mt-4 text-body font-semibold text-textPrimary">{b.title}</div>
                    <div className="mt-2 text-small text-textSecondary">{b.text}</div>
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
                <h2 className="text-h2">Process</h2>
                <p className="mt-3 text-body text-textSecondary">
                  A clear build process designed to launch fast and scale with confidence.
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
                  <p className="mt-3 text-body text-textSecondary">
                    Conversion and performance outcomes from real builds.
                  </p>
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
                  Your website should be a sales asset. We build for speed, clarity, and scale.
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
                  Quick answers before you start your build.
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
                  Start Your Website Project
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  Get a website strategy with clear next steps tailored to your business goals.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Start Your Website Project"
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

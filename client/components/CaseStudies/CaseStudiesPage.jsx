"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { CTAButton } from "../ui/CTAButton";
import { Section, SectionInner } from "../ui/Section";
import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudiesFilter } from "./CaseStudiesFilter";

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

function MiniChart({ accentClass = "bg-accent", secondaryClass = "bg-secondary/60" }) {
  return (
    <div className="flex h-14 items-end gap-1.5">
      {[0.28, 0.34, 0.4, 0.46, 0.52, 0.6, 0.68, 0.72, 0.8, 0.86].map((v, idx) => (
        <span
          key={idx}
          className={cx("w-2 rounded-sm", idx > 7 ? accentClass : secondaryClass)}
          style={{ height: `${Math.round(v * 56)}px` }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function CaseStudiesPage() {
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const items = useMemo(
    () => [
      {
        href: "/case-studies/wellness-lifestyle",
        industry: "Wellness & Lifestyle",
        title: "Wellness Growth System",
        categories: ["seo", "ads", "web"],
        problem: "Low visibility and high ad cost",
        problemLong:
          "The brand struggled to compete in search and paid channels, driving up costs and limiting new customer growth.",
        strategyPoints: ["Targeted high-intent keywords", "Refined offer + landing message", "Built measurement and attribution"],
        executionPoints: ["SEO foundation + content plan", "Landing page CRO updates", "Paid funnel optimization + retargeting"],
        results: ["430% traffic growth", "3X ROAS", "57% lower CPA"],
        chart: <MiniChart accentClass="bg-accent" secondaryClass="bg-secondary/50" />
      },
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        title: "Pipeline Acceleration",
        categories: ["ads", "web", "branding"],
        problem: "Stalled pipeline and low conversion rates",
        problemLong:
          "Traffic was steady but conversion was weak and attribution was unclear, reducing sales confidence and volume.",
        strategyPoints: ["Clarified ICP + positioning", "Mapped funnel drop-offs", "Defined tracking and lead quality signals"],
        executionPoints: ["Shipped conversion-first pages", "Improved tracking + events", "Retargeting loops and creative testing"],
        results: ["2.4X demo bookings", "41% higher CVR", "29% lower CPL"],
        chart: <MiniChart accentClass="bg-secondary" secondaryClass="bg-accent/40" />
      },
      {
        href: "/case-studies/ecommerce",
        industry: "E-commerce",
        title: "Revenue Per Visitor Lift",
        categories: ["web", "ads"],
        problem: "High bounce and weak repeat purchases",
        problemLong:
          "Users dropped off before purchase and repeat revenue was underperforming due to friction and lack of lifecycle strategy.",
        strategyPoints: ["Diagnosed conversion blockers", "Prioritized high-impact flows", "Designed a testing roadmap"],
        executionPoints: ["Improved product + checkout UX", "Ran CRO experiments", "Built lifecycle email automation"],
        results: ["+18% AOV", "+33% repeat rate", "1.8X revenue per visitor"],
        chart: <MiniChart accentClass="bg-accent" secondaryClass="bg-secondary/40" />
      },
      {
        href: "/case-studies/local-services",
        industry: "Local Services",
        title: "Local Lead Engine",
        categories: ["seo", "web"],
        problem: "Inconsistent leads and poor local rankings",
        problemLong:
          "Lead volume was volatile and local visibility was weak, limiting predictable growth in the service area.",
        strategyPoints: ["Focused on map-pack intent", "Built service-page architecture", "Set up conversion tracking"],
        executionPoints: ["Local SEO improvements", "High-intent service pages", "Content system to sustain rankings"],
        results: ["5X qualified leads", "Top 3 map pack", "64% lower CPA"],
        chart: <MiniChart accentClass="bg-secondary" secondaryClass="bg-accent/35" />
      }
    ],
    []
  );

  const filtered = useMemo(() => {
    if (!filter || filter === "all") return items;
    return items.filter((i) => i.categories?.includes(filter));
  }, [filter, items]);

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
              <m.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
                className="py-10 md:py-14 lg:py-16"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
                  <div className="space-y-5 lg:col-span-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-borderOnBrand bg-headerBg px-3 py-1 text-[13px] text-onPrimaryMuted">
                      <Icon name="verified" className="text-[18px] text-onPrimary" />
                      <span>Proof you can reference. Results you can replicate.</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Real Results. Real Growth.
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      See how we help businesses scale with data-driven strategies.
                    </p>

                    <div className="w-full max-w-md">
                      <CTAButton
                        label="Get Free Strategy"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-borderOnBrand bg-headerBg p-5 text-onPrimary shadow-sm">
                      <div className="text-small font-semibold">Highlights</div>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        {[
                          { value: "430%", label: "traffic growth" },
                          { value: "3X", label: "ROAS" },
                          { value: "41%", label: "CVR lift" },
                          { value: "5X", label: "qualified leads" }
                        ].map((k) => (
                          <div key={k.label} className="rounded-xl border border-borderOnBrand bg-primary/25 p-3">
                            <div className="font-body tabular-nums text-h3 font-bold leading-none text-onPrimary">{k.value}</div>
                            <div className="mt-2 text-[11px] font-medium text-onPrimaryMuted">{k.label}</div>
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

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
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
                  <h2 className="text-h2">Case Studies</h2>
                  <p className="mt-3 text-body text-textSecondary">
                    Filter by the service you’re exploring, then open any case study for the full breakdown.
                  </p>
                </div>
              </div>

              <CaseStudiesFilter value={filter} onChange={setFilter} />

              <m.div
                className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
                variants={
                  reduceMotion
                    ? {}
                    : { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
                }
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "show"}
                viewport={{ once: true, amount: 0.2 }}
              >
                {filtered.map((cs) => (
                  <m.div
                    key={cs.href}
                    variants={reduceMotion ? {} : { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  >
                    <CaseStudyCard
                      href={cs.href}
                      industry={cs.industry}
                      title={cs.title}
                      problem={cs.problem}
                      solution={cs.executionPoints?.[0] || cs.solution}
                      results={cs.results}
                      variant="compact"
                      onOpen={() => {
                        setActive(cs);
                        setOpen(true);
                      }}
                    />
                  </m.div>
                ))}
              </m.div>
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
              <m.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
                className="relative py-10 pb-16 text-center md:py-14 md:pb-20"
              >
                <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                  Ready to Achieve Similar Results?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  Get a free strategy with clear next steps tailored to your goals.
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

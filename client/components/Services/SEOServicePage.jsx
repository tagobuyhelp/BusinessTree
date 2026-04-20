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

export function SEOServicePage() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const painPoints = useMemo(
    () => [
      { icon: "trending_down", title: "No traffic", text: "You’re invisible for the searches that drive revenue." },
      { icon: "search_off", title: "Low rankings", text: "Competitors outrank you for keywords that convert." },
      { icon: "visibility_off", title: "Poor visibility", text: "Your offer is strong, but customers can’t find you." }
    ],
    []
  );

  const approach = useMemo(
    () => [
      {
        icon: "key",
        title: "Keyword research",
        text: "We target high-intent queries tied to pipeline and revenue."
      },
      {
        icon: "description",
        title: "On-page SEO",
        text: "We align content to intent and build pages that convert."
      },
      {
        icon: "speed",
        title: "Technical SEO",
        text: "We fix crawlability, indexation, and Core Web Vitals."
      },
      {
        icon: "link",
        title: "Link building",
        text: "We earn authority signals that improve rankings sustainably."
      }
    ],
    []
  );

  const breakdown = useMemo(
    () => [
      {
        icon: "location_on",
        title: "Local SEO",
        items: ["Google Business Profile optimization", "Local citations", "Map pack strategy", "Service page structure"]
      },
      {
        icon: "public",
        title: "Global SEO",
        items: ["Keyword clusters", "Content planning", "International targeting", "Authority building"]
      },
      {
        icon: "settings",
        title: "Technical SEO",
        items: ["Crawl/index audits", "Site speed improvements", "Schema implementation", "Fixing duplicates/canonicals"]
      },
      {
        icon: "edit_note",
        title: "Content SEO",
        items: ["Pillar + cluster content", "On-page improvements", "Internal linking", "Content refresh strategy"]
      }
    ],
    []
  );

  const process = useMemo(
    () => [
      { icon: "fact_check", title: "Audit", text: "We identify ranking blockers and conversion leaks." },
      { icon: "map", title: "Strategy", text: "We create a plan tied to keywords, pages, and outcomes." },
      { icon: "construction", title: "Execution", text: "We ship fixes, content, and improvements consistently." },
      { icon: "tune", title: "Optimization", text: "We iterate based on data, not assumptions." }
    ],
    []
  );

  const pillars = useMemo(
    () => [
      { icon: "insights", title: "Revenue-first SEO", description: "We focus on qualified traffic that converts." },
      { icon: "dashboard", title: "Transparent reporting", description: "Clear dashboards and measurable progress." },
      { icon: "speed", title: "Technical excellence", description: "Fast, indexable sites that rank and perform." },
      { icon: "construction", title: "Consistent execution", description: "Weekly shipping cadence, not one-time fixes." }
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        id: "timeline",
        question: "How long does SEO take?",
        answer:
          "Most sites see early improvements in weeks, with compounding results over 3–6+ months. Timelines depend on competition, site health, and content velocity."
      },
      {
        id: "worth",
        question: "Is SEO worth it?",
        answer:
          "Yes—when it’s tied to intent and conversion. SEO builds a predictable acquisition channel that reduces dependency on paid traffic over time."
      },
      {
        id: "local-global",
        question: "Do you do local and global SEO?",
        answer:
          "Yes. We can optimize for map pack and local service searches, as well as global keyword clusters and content systems."
      },
      {
        id: "reporting",
        question: "How do you report SEO performance?",
        answer:
          "We track rankings, organic sessions, conversions, and lead quality. You’ll get clear dashboards and actionable insights."
      }
    ],
    []
  );

  const caseStudies = useMemo(
    () => [
      {
        href: "/case-studies/local-services",
        industry: "Local Services",
        title: "Local SEO Lead Engine",
        problem: "Inconsistent leads and poor local rankings",
        solution: "Local SEO + conversion-first pages",
        results: ["5X qualified leads", "Top 3 map pack", "64% lower CPA"]
      },
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        title: "Organic + Conversion Lift",
        problem: "Traffic without conversions",
        solution: "SEO content + landing page CRO",
        results: ["41% higher CVR", "2.4X demo bookings", "29% lower CPL"]
      },
      {
        href: "/case-studies/wellness-lifestyle",
        industry: "Wellness & Lifestyle",
        title: "Compounding Growth",
        problem: "Low visibility and high acquisition cost",
        solution: "SEO foundation + funnel optimization",
        results: ["430% traffic growth", "3X ROAS", "57% lower CPA"]
      }
    ],
    []
  );

  const fadeUp = reduceMotion
    ? undefined
    : {
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
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
              <m.div
                variants={fadeUp}
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? undefined : "show"}
                className="py-10 md:py-14 lg:py-16"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
                  <div className="space-y-5 lg:col-span-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-borderOnBrand bg-headerBg px-3 py-1 text-[13px] text-onPrimaryMuted">
                      <Icon name="travel_explore" className="text-[18px] text-onPrimary" />
                      <span>SEO strategy + execution + measurable outcomes</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      SEO Services for Local & Global Growth
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      Rank higher on Google, drive organic traffic, and generate high-quality leads.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <CTAButton
                        label="Get Free SEO Audit"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                      <Button
                        size="lg"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="/case-studies" className="w-full justify-center">
                          <Icon name="stacked_line_chart" className="text-[20px]" />
                          <span>View SEO Results</span>
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
                        <Icon name="insights" className="text-[12px] text-onPrimaryMuted" />
                        <span>Clear reporting</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-borderOnBrand bg-headerBg p-5 text-onPrimary shadow-sm">
                      <div className="text-small font-semibold">Free SEO audit includes</div>
                      <div className="mt-3 space-y-2 text-small text-onPrimaryMuted">
                        {[
                          "Quick technical issues and fixes",
                          "High-intent keyword opportunities",
                          "Conversion-first on-page recommendations"
                        ].map((t) => (
                          <div key={t} className="flex items-start gap-2">
                            <Icon name="check_circle" className="mt-0.5 text-[18px] text-onPrimary" />
                            <span className="min-w-0">{t}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-[12px] text-onPrimarySoft">Delivered with clear next steps.</div>
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
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-5">
                <h2 className="text-h2">What Is SEO?</h2>
                <p className="mt-3 text-body text-textSecondary">
                  SEO (Search Engine Optimization) helps your business appear when customers search for solutions you
                  provide. It’s how you earn consistent, high-intent traffic without paying for every click.
                </p>
              </div>
              <div className="space-y-4 lg:col-span-7">
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <div className="text-body font-semibold text-textPrimary">Why SEO matters</div>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      { icon: "person_search", title: "High-intent traffic", text: "People already looking to buy." },
                      { icon: "trending_up", title: "Compounding growth", text: "Wins stack over time." },
                      { icon: "paid", title: "Lower acquisition cost", text: "Reduce dependency on paid ads." },
                      { icon: "verified", title: "Trust & authority", text: "Rankings build credibility fast." }
                    ].map((i) => (
                      <div key={i.title} className="flex min-h-[44px] items-start gap-3 rounded-xl border border-border bg-bg px-4 py-3">
                        <Icon name={i.icon} className="mt-0.5 text-[18px] text-accent" />
                        <div className="min-w-0">
                          <div className="text-small font-semibold text-textPrimary">{i.title}</div>
                          <div className="mt-1 text-small text-textSecondary">{i.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-small text-textSecondary">
                    See proof in{" "}
                    <Link href="/case-studies" className="font-semibold text-accent">
                      case studies
                    </Link>{" "}
                    and explore our{" "}
                    <Link href="/services" className="font-semibold text-accent">
                      full services
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="max-w-2xl">
                <h2 className="text-h2">The Problem We Fix</h2>
                <p className="mt-3 text-body text-textSecondary">
                  SEO often fails when the strategy is unclear, technical issues pile up, and content doesn’t match
                  intent. We fix the system end-to-end.
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
            <m.div
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="max-w-2xl">
                <h2 className="text-h2">Our SEO Approach</h2>
                <p className="mt-3 text-body text-textSecondary">
                  A balanced SEO system: intent-first pages, clean technical foundations, and consistent authority
                  signals.
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
            <m.div
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="max-w-2xl">
                <h2 className="text-h2">SEO Services Breakdown</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Choose the SEO support you need now, or combine for full coverage.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {breakdown.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                        <Icon name={b.icon} className="text-[22px] text-accent" />
                      </div>
                      <div className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] font-medium text-textSecondary">
                        SEO
                      </div>
                    </div>
                    <div className="mt-4 text-body font-semibold text-textPrimary">{b.title}</div>
                    <ul className="mt-3 space-y-2">
                      {b.items.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-small text-textSecondary">
                          <Icon name="check_circle" className="mt-0.5 text-[18px] text-accent" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="max-w-2xl">
                <h2 className="text-h2">SEO Process</h2>
                <p className="mt-3 text-body text-textSecondary">
                  A repeatable system built for speed, clarity, and compounding results.
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

        <Section id="seo-case-studies" tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div className="max-w-2xl">
                  <h2 className="text-h2">SEO Case Studies</h2>
                  <p className="mt-3 text-body text-textSecondary">Real outcomes from SEO systems built to convert.</p>
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
            <m.div
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="max-w-2xl">
                <h2 className="text-h2">Why Choose Us</h2>
                <p className="mt-3 text-body text-textSecondary">
                  SEO is a long game — you need a partner who ships consistently and measures what matters.
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
            <m.div
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-5">
                <h2 className="text-h2">SEO FAQs</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Quick answers to reduce doubt before you request your audit.
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
              <m.div
                variants={fadeUp}
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "show"}
                viewport={{ once: true, amount: 0.25 }}
                className="relative py-10 pb-16 text-center md:py-14 md:pb-20"
              >
                <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                  Get Free SEO Audit
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  We’ll identify quick wins, ranking opportunities, and conversion improvements.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Get Free SEO Audit"
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

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

function LinkedInPostMock({ hook, body, metric }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg">
            <span className="material-symbols-outlined text-[20px] text-accent" aria-hidden="true">
              badge
            </span>
          </div>
          <div className="min-w-0">
            <div className="text-small font-semibold text-textPrimary line-clamp-1">CEO Personal Brand</div>
            <div className="text-[11px] font-medium text-textSecondary">LinkedIn · Thought leadership</div>
          </div>
        </div>
        <span className="material-symbols-outlined text-[18px] text-textSecondary" aria-hidden="true">
          more_horiz
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="text-body font-semibold text-textPrimary">{hook}</div>
        <div className="text-small text-textSecondary line-clamp-4">{body}</div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4 text-[12px] font-medium text-textSecondary">
        <div className="inline-flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            insights
          </span>
          <span>{metric}</span>
        </div>
        <div className="inline-flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              thumb_up
            </span>
            Like
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              chat_bubble
            </span>
            Comment
          </span>
        </div>
      </div>
    </div>
  );
}

export function LinkedInPage() {
  const reduceMotion = useReducedMotion();

  const painPoints = useMemo(
    () => [
      { icon: "visibility_off", title: "Low visibility", text: "Your expertise isn’t being discovered consistently." },
      { icon: "person_off", title: "No personal brand", text: "Buyers don’t know why they should trust you." },
      { icon: "event_busy", title: "Inconsistent posting", text: "Momentum dies without a clear content system." },
      { icon: "inbox", title: "No inbound opportunities", text: "Few conversations, referrals, or qualified leads." }
    ],
    []
  );

  const system = useMemo(
    () => [
      { icon: "tune", title: "Profile optimization", text: "Positioning that makes your offer instantly clear." },
      { icon: "map", title: "Content strategy", text: "Pillars, hooks, and a publishing plan tied to outcomes." },
      { icon: "edit", title: "Thought leadership posts", text: "High-signal writing that builds authority and trust." },
      { icon: "insights", title: "Engagement growth", text: "Commenting systems and feedback loops that compound reach." },
      { icon: "group_add", title: "Network expansion", text: "Targeted growth with the right people (buyers + partners)." }
    ],
    []
  );

  const deliverables = useMemo(
    () => [
      { icon: "person", title: "Profile makeover", text: "Headline, about, featured, and proof that converts." },
      { icon: "edit_note", title: "Content creation", text: "Post ideas, writing, and formatting for clarity." },
      { icon: "schedule", title: "Post scheduling", text: "A consistent cadence with calendar visibility." },
      { icon: "my_location", title: "Audience targeting", text: "Topics and angles tailored to your ICP." },
      { icon: "call", title: "Lead generation", text: "CTAs and conversion paths that drive conversations." }
    ],
    []
  );

  const results = useMemo(
    () => [
      { value: "↑", label: "Profile views" },
      { value: "↑", label: "Connection growth" },
      { value: "↑", label: "Inbound leads" },
      { value: "Clear", label: "Positioning" }
    ],
    []
  );

  const process = useMemo(
    () => [
      { icon: "flag", title: "Brand positioning", text: "Message, niche, and proof that differentiates you." },
      { icon: "map", title: "Content strategy", text: "Pillars, hooks, and a weekly publishing plan." },
      { icon: "publish", title: "Publishing", text: "Consistent cadence with quality control." },
      { icon: "tune", title: "Growth & optimization", text: "Iterate using what the algorithm rewards: signals and retention." }
    ],
    []
  );

  const pillars = useMemo(
    () => [
      { icon: "workspace_premium", title: "Authority-driven", description: "We build trust before we ask for the sale." },
      { icon: "calendar_month", title: "Consistent growth", description: "A system that keeps momentum compounding." },
      { icon: "badge", title: "Professional positioning", description: "High-signal content that attracts the right buyers." },
      { icon: "insights", title: "Data-informed", description: "We optimize based on reach and lead signals." }
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        id: "frequency",
        question: "How often do you post?",
        answer:
          "We recommend a consistent cadence based on your goals and schedule. Most brands see strong momentum with 3–5 posts per week plus intentional engagement."
      },
      {
        id: "writing",
        question: "Do you write content?",
        answer:
          "Yes. We handle writing, structure, and hooks. You can review and add your voice so it remains authentic."
      },
      {
        id: "timeline",
        question: "How long to see results?",
        answer:
          "Most people see early improvements in views and engagement within weeks, with inbound opportunities compounding over 2–3+ months as authority builds."
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
                      <Icon name="badge" className="text-[18px] text-onPrimary" />
                      <span>LinkedIn marketing as an authority system</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Build Authority on LinkedIn and Attract Opportunities
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      We help CEOs, founders, and professionals grow their presence, influence, and inbound leads.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <CTAButton
                        label="Start Your Personal Branding"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                      <Button
                        size="lg"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="#how-it-works" className="w-full justify-center">
                          <Icon name="tune" className="text-[20px]" />
                          <span>How It Works</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft">
                      <div className="inline-flex items-center gap-2">
                        <Icon name="workspace_premium" className="text-[12px] text-onPrimaryMuted" />
                        <span>Authority-first</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="calendar_month" className="text-[12px] text-onPrimaryMuted" />
                        <span>Consistent cadence</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="insights" className="text-[12px] text-onPrimaryMuted" />
                        <span>Measured growth</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="space-y-3">
                      <LinkedInPostMock
                        hook="The biggest growth mistake founders make on LinkedIn"
                        body="Posting more isn’t the answer. A personal brand needs positioning, proof, and a repeatable content system that attracts the right conversations."
                        metric="12.4K views · 68 comments"
                      />
                      <LinkedInPostMock
                        hook="3 ways to turn LinkedIn content into inbound leads"
                        body="Your content should earn trust, clarify your offer, and make the next step obvious. Use one CTA, add proof, and nurture conversations."
                        metric="7.9K views · 42 comments"
                      />
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
                  LinkedIn doesn’t work when there’s no positioning, no consistency, and no system to convert attention into opportunities.
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

        <Section id="how-it-works" tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Our System</h2>
                <p className="mt-3 text-body text-textSecondary">
                  LinkedIn growth is a system: positioning, content, engagement, and network — executed consistently.
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

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">What We Do</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Everything needed to build authority and drive inbound opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
                {deliverables.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                        <Icon name={d.icon} className="text-[22px] text-accent" />
                      </div>
                      <div className="text-body font-semibold text-textPrimary">{d.title}</div>
                    </div>
                    <div className="mt-3 text-small text-textSecondary">{d.text}</div>
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
                  We measure visibility, engagement signals, and inbound opportunity creation.
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
                <div className="text-body font-semibold text-textPrimary">Internal link support</div>
                <div className="mt-2 text-body text-textSecondary">
                  Combine LinkedIn authority with{" "}
                  <Link href="/services/digital-marketing" className="font-semibold text-accent">
                    full-funnel marketing
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/web-development" className="font-semibold text-accent">
                    conversion-first landing pages
                  </Link>{" "}
                  to turn attention into pipeline.
                </div>
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Process</h2>
                <p className="mt-3 text-body text-textSecondary">A repeatable workflow designed for consistent authority growth.</p>
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
                  A professional approach designed to build trust, not just impressions.
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
                <p className="mt-3 text-body text-textSecondary">Quick answers before you start.</p>
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
                  Build Your Personal Brand
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  Get a LinkedIn strategy built for authority, consistency, and inbound opportunities.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Build Your Personal Brand"
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

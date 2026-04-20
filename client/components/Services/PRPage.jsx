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

function MediaFeatureCard({ outlet, angle, benefit }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-[11px] font-medium text-textSecondary">
            <Icon name="newspaper" className="text-[16px]" />
            <span className="line-clamp-1">{outlet}</span>
          </div>
          <div className="mt-3 text-body font-semibold text-textPrimary line-clamp-2">{angle}</div>
          <div className="mt-2 text-small text-textSecondary line-clamp-2">{benefit}</div>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
          <Icon name="workspace_premium" className="text-[22px] text-accent" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Story", "Proof", "Distribution"].map((t) => (
          <div key={t} className="rounded-xl border border-border bg-bg px-3 py-3">
            <div className="text-[11px] font-medium text-textSecondary">{t}</div>
            <div className="mt-2 h-2 w-3/4 rounded bg-border" />
            <div className="mt-2 h-2 w-2/3 rounded bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PRPage() {
  const reduceMotion = useReducedMotion();

  const painPoints = useMemo(
    () => [
      { icon: "verified", title: "Low brand credibility", text: "Without proof, buyers hesitate and deals stall." },
      { icon: "rss_feed", title: "No media presence", text: "Great work exists, but visibility doesn’t match value." },
      { icon: "workspace_premium", title: "Lack of authority", text: "You’re not seen as the obvious choice in your category." }
    ],
    []
  );

  const system = useMemo(
    () => [
      { icon: "auto_stories", title: "Brand storytelling", text: "Narratives that make your offer memorable and credible." },
      { icon: "newspaper", title: "Media placements", text: "Earned visibility that strengthens trust signals." },
      { icon: "description", title: "Authority content", text: "Founder POV and proof assets that build confidence." },
      { icon: "shield", title: "Reputation building", text: "Consistency across search, profiles, and mentions." }
    ],
    []
  );

  const offers = useMemo(
    () => [
      { icon: "campaign", title: "Press releases", text: "Announcements crafted for clarity and pickup." },
      { icon: "newspaper", title: "Media features", text: "Earned credibility through targeted outreach." },
      { icon: "auto_stories", title: "Brand storytelling", text: "Messaging, positioning, and narratives that stick." },
      { icon: "shield", title: "Online reputation", text: "Trust signals across listings, profiles, and search." }
    ],
    []
  );

  const results = useMemo(
    () => [
      { value: "↑", label: "Credibility" },
      { value: "↑", label: "Brand perception" },
      { value: "↑", label: "Opportunities" },
      { value: "Long-term", label: "Authority" }
    ],
    []
  );

  const process = useMemo(
    () => [
      { icon: "flag", title: "Positioning", text: "Clarify message, proof, and differentiation." },
      { icon: "auto_stories", title: "Story creation", text: "Build angles, narratives, and assets for outreach." },
      { icon: "outgoing_mail", title: "Media outreach", text: "Targeted pitches aligned to the right outlets." },
      { icon: "workspace_premium", title: "Authority building", text: "Repurpose wins across site, social, and search." }
    ],
    []
  );

  const pillars = useMemo(
    () => [
      { icon: "map", title: "Strategic approach", description: "Angles and distribution built around your goals." },
      { icon: "auto_stories", title: "Authentic storytelling", description: "Proof-led narratives that feel credible." },
      { icon: "workspace_premium", title: "Long-term impact", description: "Authority signals that compound over time." },
      { icon: "insights", title: "Measured confidence", description: "We align PR with conversion and demand signals." }
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        id: "timeline",
        question: "How long does PR take?",
        answer:
          "PR compounds. Early wins can happen in weeks, but sustained authority builds over months as narratives and placements stack."
      },
      {
        id: "platforms",
        question: "Which media platforms do you use?",
        answer:
          "We focus on outlets that match your audience and credibility goals. This includes industry publications, podcasts, newsletters, and relevant digital media."
      },
      {
        id: "smb",
        question: "Is PR worth it for small businesses?",
        answer:
          "Yes—when paired with a clear offer and conversion path. PR strengthens trust signals that improve close rates and lower acquisition friction."
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
                      <Icon name="workspace_premium" className="text-[18px] text-onPrimary" />
                      <span>PR as a long-term authority system</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Build Authority, Trust, and Global Recognition
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      We help brands and individuals gain visibility, credibility, and media presence through strategic PR systems.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <CTAButton
                        label="Build Your Brand Authority"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                      <Button
                        size="lg"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="#offers" className="w-full justify-center">
                          <Icon name="newspaper" className="text-[20px]" />
                          <span>What We Offer</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft">
                      <div className="inline-flex items-center gap-2">
                        <Icon name="verified" className="text-[12px] text-onPrimaryMuted" />
                        <span>Proof-led storytelling</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="insights" className="text-[12px] text-onPrimaryMuted" />
                        <span>Measured impact</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="shield" className="text-[12px] text-onPrimaryMuted" />
                        <span>Reputation-first</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="space-y-3">
                      <MediaFeatureCard
                        outlet="Industry publication"
                        angle="Founder story: building a system-driven growth engine"
                        benefit="Credibility that increases conversion confidence across channels."
                      />
                      <MediaFeatureCard
                        outlet="Podcast / newsletter"
                        angle="Expert POV: the simplest growth framework for modern brands"
                        benefit="Authority content that drives inbound opportunities."
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
                  PR isn’t about vanity. It’s about trust signals that reduce hesitation and improve conversion confidence.
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
                  Authority grows when story, distribution, and proof align — then get repeated consistently.
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

        <Section id="offers" tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">What We Offer</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Structured deliverables designed to build credibility and reduce friction to conversion.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {offers.map((o) => (
                  <div key={o.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={o.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="mt-4 text-body font-semibold text-textPrimary">{o.title}</div>
                    <div className="mt-2 text-small text-textSecondary">{o.text}</div>
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
                  PR increases conversion confidence by strengthening trust signals across the buyer journey.
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
                <div className="text-body font-semibold text-textPrimary">Turn authority into pipeline</div>
                <div className="mt-2 text-body text-textSecondary">
                  Combine PR with{" "}
                  <Link href="/services/web-development" className="font-semibold text-accent">
                    conversion-first pages
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/performance-marketing" className="font-semibold text-accent">
                    retargeting
                  </Link>{" "}
                  to convert trust into leads.
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
                <p className="mt-3 text-body text-textSecondary">
                  A repeatable workflow designed for consistent authority building.
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
                  PR should feel premium: strategic, credible, and aligned with conversion outcomes.
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
                  Start Building Authority
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  Get a PR strategy built for credibility, trust, and long-term impact.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Start Building Authority"
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

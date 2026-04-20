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

function ContentTile({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-border bg-headerBg p-4 text-onPrimary shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-small font-semibold">{title}</div>
          <div className="mt-1 text-[12px] text-onPrimaryMuted line-clamp-2">{subtitle}</div>
        </div>
        <span className="material-symbols-outlined text-[18px] text-onPrimaryMuted" aria-hidden="true">
          auto_awesome
        </span>
      </div>
      <div className="mt-3 grid grid-cols-10 gap-1">
        {[8, 10, 6, 9, 7, 10, 6, 8, 9, 7].map((h, idx) => (
          <span key={idx} className="rounded-sm bg-white/10" style={{ height: `${h}px` }} aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}

export function SocialMediaPage() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const painPoints = useMemo(
    () => [
      { icon: "event_busy", title: "Inconsistent posting", text: "Gaps kill momentum and trust." },
      { icon: "speaker_notes_off", title: "Low engagement", text: "Content isn’t aligned to audience intent." },
      { icon: "identity_platform", title: "No brand identity", text: "Visuals and messaging don’t feel consistent." }
    ],
    []
  );

  const system = useMemo(
    () => [
      { icon: "map", title: "Content strategy", text: "Clear pillars, hooks, and a plan tied to business goals." },
      { icon: "palette", title: "Visual branding", text: "A consistent look that builds recognition and trust." },
      { icon: "calendar_month", title: "Posting system", text: "Production + scheduling that stays consistent." },
      { icon: "tune", title: "Growth optimization", text: "Iterate using performance signals, not guesses." }
    ],
    []
  );

  const platforms = useMemo(
    () => [
      { icon: "photo_camera", title: "Instagram", text: "Reels + carousels built to drive reach and trust." },
      { icon: "thumb_up", title: "Facebook", text: "Community, retargeting, and evergreen visibility." },
      { icon: "badge", title: "LinkedIn", text: "Authority content that attracts pipeline." },
      { icon: "smart_display", title: "TikTok", text: "Short-form demand generation and discovery." }
    ],
    []
  );

  const deliverables = useMemo(
    () => [
      { icon: "edit", title: "Content creation", text: "Ideas, scripts, and weekly content plans." },
      { icon: "movie", title: "Reels / short videos", text: "Hooks, edits, and formats that perform." },
      { icon: "brush", title: "Graphic design", text: "Templates and visuals that match your brand." },
      { icon: "tag", title: "Captions & hashtags", text: "Intent-led copy and discovery signals." },
      { icon: "schedule", title: "Scheduling", text: "Publishing cadence with calendar visibility." }
    ],
    []
  );

  const results = useMemo(
    () => [
      { value: "↑", label: "Engagement lift" },
      { value: "↑", label: "Audience growth" },
      { value: "↑", label: "Brand visibility" },
      { value: "Consistent", label: "Content system" }
    ],
    []
  );

  const process = useMemo(
    () => [
      { icon: "map", title: "Strategy", text: "Pillars, audience, hooks, and content plan." },
      { icon: "edit", title: "Content creation", text: "Scripts, designs, and batches ready to ship." },
      { icon: "publish", title: "Publishing", text: "Scheduling with consistent cadence." },
      { icon: "tune", title: "Optimization", text: "Iterate based on engagement and business outcomes." }
    ],
    []
  );

  const pillars = useMemo(
    () => [
      { icon: "calendar_month", title: "Consistency", description: "A system that keeps momentum week after week." },
      { icon: "auto_awesome", title: "Creativity", description: "Hooks, formats, and visuals designed to perform." },
      { icon: "insights", title: "Data-driven", description: "We double down on what works using real signals." },
      { icon: "workspace_premium", title: "Brand authority", description: "Positioning that builds trust and demand." }
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        id: "frequency",
        question: "How often do you post?",
        answer:
          "We recommend a consistent cadence based on your goals and capacity. Most brands perform well with a weekly plan that includes short-form video plus supporting posts."
      },
      {
        id: "platforms",
        question: "Which platforms are best?",
        answer:
          "We choose platforms based on where your buyers are and the best path to trust. Many brands combine Instagram/TikTok for reach with LinkedIn for authority."
      },
      {
        id: "content",
        question: "Do you create content?",
        answer:
          "Yes. We handle ideation, scripts, captions, designs, and scheduling. If you prefer, we can collaborate on filming to keep it authentic."
      }
    ],
    []
  );

  const caseStudies = useMemo(
    () => [
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        title: "Authority + Pipeline",
        problem: "Low engagement and unclear positioning",
        solution: "LinkedIn content system + landing page alignment",
        results: ["41% higher CVR", "2.4X demo bookings", "Clearer messaging"]
      },
      {
        href: "/case-studies/wellness-lifestyle",
        industry: "Wellness & Lifestyle",
        title: "Engagement Lift",
        problem: "Inconsistent posting and weak brand visuals",
        solution: "Reels system + brand templates + cadence",
        results: ["Audience growth", "Higher engagement", "Brand consistency"]
      },
      {
        href: "/case-studies/ecommerce",
        industry: "E-commerce",
        title: "Content → Revenue",
        problem: "Low demand and weak repeat purchases",
        solution: "Short-form + lifecycle alignment",
        results: ["1.8X revenue per visitor", "+33% repeat rate", "+18% AOV"]
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
                      <Icon name="public" className="text-[18px] text-onPrimary" />
                      <span>Social media as a system — not random posting</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Build a Powerful Brand with Strategic Social Media
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      We create content systems that grow your audience, increase engagement, and build brand authority.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <CTAButton
                        label="Get Social Media Strategy"
                        icon="bolt"
                        fullWidth
                        className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                      />
                      <Button
                        size="lg"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="#examples" className="w-full justify-center">
                          <Icon name="auto_awesome" className="text-[20px]" />
                          <span>See Examples</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft">
                      <div className="inline-flex items-center gap-2">
                        <Icon name="calendar_month" className="text-[12px] text-onPrimaryMuted" />
                        <span>Consistent cadence</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="auto_awesome" className="text-[12px] text-onPrimaryMuted" />
                        <span>Creative hooks</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="insights" className="text-[12px] text-onPrimaryMuted" />
                        <span>Clear reporting</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-borderOnBrand bg-headerBg p-5 text-onPrimary shadow-sm">
                      <div className="text-small font-semibold">Strategy includes</div>
                      <div className="mt-3 space-y-2 text-small text-onPrimaryMuted">
                        {["Content pillars + weekly plan", "Brand templates + style guide", "Growth roadmap + KPIs"].map((t) => (
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

        <Section id="examples" tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <h2 className="text-h2">Content Examples</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Visual-heavy, on-brand content designed for reach, trust, and conversion.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                <ContentTile title="Reel hook" subtitle="3 mistakes killing your conversions (and what to do instead)" />
                <ContentTile title="Carousel" subtitle="SEO checklist: technical → on-page → content → CRO" />
                <ContentTile title="Founder post" subtitle="What we learned scaling paid campaigns to 3X ROAS" />
                <ContentTile title="Case study" subtitle="How we increased demo bookings 2.4X with page + funnel changes" />
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">The Problem We Fix</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Social media fails when there’s no strategy, no cadence, and no consistency in branding.
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

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Our System</h2>
                <p className="mt-3 text-body text-textSecondary">
                  A complete content system: strategy, branding, publishing, and optimization.
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

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div variants={fadeUp} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-h2">Platforms We Manage</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We focus on the platforms that fit your buyers and your content style.
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
                <h2 className="text-h2">What We Do</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Everything needed to stay consistent and grow strategically — without the chaos.
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
                  We measure what matters: engagement, growth, and brand visibility that supports pipeline.
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
                <p className="mt-3 text-body text-textSecondary">A simple workflow designed to stay consistent and improve monthly.</p>
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
                  <p className="mt-3 text-body text-textSecondary">Examples of how systems create consistency and growth.</p>
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
                  A system that keeps you consistent while building demand and authority.
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
                  Start Growing Your Brand
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  Get a social media strategy built for consistency, engagement, and brand authority.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Start Growing Your Brand"
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

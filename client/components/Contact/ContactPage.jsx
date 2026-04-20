"use client";

import React, { useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";
import { Card, CardBody } from "../ui/Card";
import { Section, SectionInner } from "../ui/Section";
import { ContactForm } from "./ContactForm";
import { FAQAccordion } from "./FAQAccordion";

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

export function ContactPage() {
  const reduceMotion = useReducedMotion();
  const formRef = useRef(null);

  const quickOptions = useMemo(
    () => [
      {
        icon: "call",
        label: "Call",
        value: "+1 (000) 000-0000",
        href: "tel:+10000000000"
      },
      {
        icon: "mail",
        label: "Email",
        value: "hello@businesstree.com",
        href: "mailto:hello@businesstree.com"
      },
      {
        icon: "chat",
        label: "WhatsApp",
        value: "Message us",
        href: "https://wa.me/10000000000?text=Hi%20Business%20Tree%20%E2%80%94%20I%27d%20like%20a%20free%20strategy%20call."
      },
      {
        icon: "location_on",
        label: "Office",
        value: "Remote-first",
        href: "#map"
      }
    ],
    []
  );

  const trustPoints = useMemo(
    () => [
      { icon: "verified", label: "100+ businesses served worldwide" },
      { icon: "insights", label: "Data-driven strategies with clear reporting" },
      { icon: "public", label: "Global growth systems built to scale" },
      { icon: "bolt", label: "Fast execution with measurable outcomes" }
    ],
    []
  );

  const faqItems = useMemo(
    () => [
      {
        id: "timeline",
        question: "How long does it take to see results?",
        answer:
          "Most clients see early traction within weeks, then compounding results as systems mature. Timelines vary by channel, budget, and competition."
      },
      {
        id: "industries",
        question: "What industries do you work with?",
        answer:
          "We work with SaaS, e-commerce, local services, agencies, and personal brands. If you have a strong offer and want growth, we can help."
      },
      {
        id: "free",
        question: "Is the consultation free?",
        answer:
          "Yes. You’ll get quick wins, a clear growth plan, and next steps. No spam and no commitment."
      },
      {
        id: "next",
        question: "What happens after I submit the form?",
        answer:
          "We’ll reach out to confirm details, ask a few clarifying questions, then share a strategy tailored to your goals and target market."
      }
    ],
    []
  );

  const scrollToForm = useCallback(() => {
    formRef.current?.scrollIntoView?.({ behavior: "smooth", block: "start" });
  }, []);

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
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
                  <div className="space-y-5 lg:col-span-7">
                    <div className="inline-flex items-center gap-2 rounded-full border border-borderOnBrand bg-headerBg px-3 py-1 text-[13px] text-onPrimaryMuted">
                      <Icon name="verified" className="text-[18px] text-onPrimary" />
                      <span>Free strategy. Clear next steps.</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Let’s Grow Your Business
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      Tell us about your goals, and we’ll build a strategy to scale your brand globally.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <Button
                        size="lg"
                        className="w-full bg-white text-black hover:bg-white active:bg-white"
                        onClick={scrollToForm}
                      >
                        <Icon name="bolt" className="text-[20px]" />
                        <span>Get Free Strategy</span>
                      </Button>
                      <Button
                        size="lg"
                        variant="ghost"
                        asChild
                        className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                      >
                        <Link href="/case-studies" className="w-full justify-center text-white">
                          <Icon name="stacked_line_chart" className="text-[20px]" />
                          <span className="text-white">View Case Studies</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft">
                      <div className="inline-flex items-center gap-2">
                        <Icon name="schedule" className="text-[12px] text-onPrimaryMuted" />
                        <span>Quick response</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="shield" className="text-[12px] text-onPrimaryMuted" />
                        <span>No spam</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Icon name="check_circle" className="text-[12px] text-onPrimaryMuted" />
                        <span>No commitment</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      {quickOptions.map((o) => (
                        <a
                          key={o.label}
                          href={o.href}
                          className={cx(
                            "group flex min-h-[56px] items-center gap-3 rounded-xl border border-borderOnBrand bg-headerBg px-4 py-3 text-onPrimary",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                          )}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/40">
                            <Icon name={o.icon} className="text-[22px] text-onPrimary" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-small font-semibold">{o.label}</div>
                            <div className="text-small text-onPrimaryMuted line-clamp-1">{o.value}</div>
                          </div>
                          <Icon name="arrow_forward" className="ml-auto text-[18px] text-onPrimaryMuted" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </m.div>
            </SectionInner>
          </div>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="space-y-5 lg:col-span-6">
                <div className="max-w-xl">
                  <h2 className="text-h2">Tell us what you’re aiming for</h2>
                  <p className="mt-3 text-body text-textSecondary">
                    Share a few details and we’ll respond with a clear plan focused on leads, conversions, and ROI.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {trustPoints.map((t) => (
                    <div key={t.label} className="flex min-h-[44px] items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3">
                      <Icon name={t.icon} className="text-[18px] text-accent" />
                      <span className="text-small font-medium text-textPrimary">{t.label}</span>
                    </div>
                  ))}
                </div>

                <Card className="bg-bg">
                  <CardBody className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-small font-semibold text-textPrimary">Ayesha Khan</div>
                        <div className="text-small text-textSecondary">Growth Lead · SaaS</div>
                      </div>
                      <div className="inline-flex items-center gap-1 text-small font-medium text-accent">
                        <Icon name="star" className="text-[18px]" />
                        <span>5.0</span>
                      </div>
                    </div>
                    <div className="text-body text-textSecondary">
                      Business Tree helped us scale globally within 3 months. Execution felt premium, fast, and measurable.
                    </div>
                  </CardBody>
                </Card>
              </div>

              <div ref={formRef} className="scroll-mt-24 lg:col-span-6">
                <ContactForm />
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-5">
                <h2 className="text-h2">FAQs</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Quick answers to reduce uncertainty and help you move forward.
                </p>
              </div>
              <div className="lg:col-span-7">
                <FAQAccordion items={faqItems} />
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div
              id="map"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-5">
                <h2 className="text-h2">Office & Delivery</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Remote-first delivery with flexible scheduling across time zones.
                </p>
                <div className="mt-6 rounded-xl border border-border bg-surface p-5">
                  <div className="text-small font-semibold text-textPrimary">Business Tree</div>
                  <div className="mt-2 text-small text-textSecondary">
                    Remote-first · Serving clients globally
                  </div>
                  <div className="mt-4 flex flex-col gap-2 text-small text-textSecondary">
                    <div className="inline-flex items-center gap-2">
                      <Icon name="mail" className="text-[18px]" />
                      <a className="hover:text-textPrimary" href="mailto:hello@businesstree.com">
                        hello@businesstree.com
                      </a>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Icon name="call" className="text-[18px]" />
                      <a className="hover:text-textPrimary" href="tel:+10000000000">
                        +1 (000) 000-0000
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                  <div className="aspect-[16/10] w-full bg-bg">
                    <iframe
                      title="Business Tree location map"
                      loading="lazy"
                      className="h-full w-full"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=New%20York&output=embed"
                    />
                  </div>
                </div>
              </div>
            </m.div>
          </SectionInner>
        </Section>
      </main>
    </LazyMotion>
  );
}

"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";
import { Section, SectionInner } from "../ui/Section";

const CaseStudyModal = dynamic(
  () => import("./CaseStudyModal").then((m) => m.CaseStudyModal),
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

function pickKeyResult(results) {
  const first = results?.[0] || "";
  const tokenMatch =
    first.match(/(Top\s+\d+|\+?\d+(?:\.\d+)?%|\+?\d+(?:\.\d+)?X)/i) || first.match(/(\+?\d+)/);
  const value = tokenMatch?.[0] || first;
  const label = first.replace(value, "").trim().replace(/^[-–—:]+/, "").trim();
  return { value, label: label || "Key result" };
}

export function CaseStudiesSection() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const items = useMemo(
    () => [
      {
        href: "/case-studies/wellness-lifestyle",
        industry: "Wellness & Lifestyle",
        title: "Wellness Growth System",
        timeframe: "+430% in 8 weeks",
        problem: "Low visibility and high ad cost",
        solution: "SEO + performance funnel + website optimization",
        results: ["430% traffic growth", "3X ROAS", "57% lower CPA"]
      },
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        title: "Pipeline Rebuild",
        timeframe: "2.4X in 60 days",
        problem: "Stalled pipeline and low conversion rates",
        solution: "Messaging refresh + landing pages + tracking + retargeting",
        results: ["2.4X demo bookings", "41% higher CVR", "29% lower CPL"]
      },
      {
        href: "/case-studies/ecommerce",
        industry: "E-commerce",
        title: "Conversion + Retention Lift",
        timeframe: "+18% AOV",
        problem: "High bounce and weak repeat purchases",
        solution: "UX improvements + CRO experiments + lifecycle email flows",
        results: ["+18% AOV", "+33% repeat rate", "1.8X revenue per visitor"]
      },
      {
        href: "/case-studies/local-services",
        industry: "Local Services",
        title: "Local Lead Engine",
        timeframe: "Top 3 + 5X",
        problem: "Inconsistent leads and poor local rankings",
        solution: "Local SEO + content system + conversion-first pages",
        results: ["5X qualified leads", "Top 3 map pack", "64% lower CPA"]
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="case-studies" className="py-12 sm:py-16">
        <SectionInner>
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-25" />
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <h2 className="text-h2">Real Results. Real Growth.</h2>
                <p className="mt-3 text-body text-textSecondary">
                  See how we helped businesses scale with strategy, execution, and data-driven systems.
                </p>
              </div>

              <Button variant="secondary" asChild>
                <Link href="/case-studies">View Full Case Studies →</Link>
              </Button>
            </div>

            <m.div
              className="grid gap-4 lg:grid-cols-2"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.06 } }
              }}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              {items.map((cs) => (
                <m.div
                  key={cs.href}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <m.div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setActive(cs);
                      setOpen(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key !== "Enter" && e.key !== " ") return;
                      e.preventDefault();
                      setActive(cs);
                      setOpen(true);
                    }}
                    className={cx(
                      "group relative cursor-pointer overflow-hidden rounded-2xl border border-green-100 bg-white/80 p-5 backdrop-blur",
                      "transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                      "sm:p-6"
                    )}
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                    transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 32 }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50/40 via-transparent to-green-100/20" />

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white/70 px-3 py-1 text-[12px] font-medium text-textSecondary">
                          <Icon name="category" className="text-[16px] text-green-600" />
                          <span>{cs.industry}</span>
                        </div>
                        {cs.timeframe ? (
                          <div className="text-[12px] font-medium text-textSecondary">{cs.timeframe}</div>
                        ) : null}
                      </div>

                      <div className="mt-4 flex items-start justify-between gap-6">
                        <div className="min-w-0">
                          {(() => {
                            const key = pickKeyResult(cs.results);
                            return (
                              <>
                                <div
                                  className="result-number text-4xl font-bold text-green-600 sm:text-5xl"
                                  style={{ textShadow: "0 0 20px rgba(34,197,94,0.20)" }}
                                >
                                  {key.value}
                                </div>
                                <div className="mt-1 text-small font-medium text-textSecondary">{key.label}</div>
                              </>
                            );
                          })()}
                        </div>
                        <div className="hidden sm:block">
                          <div className="rounded-xl border border-green-100 bg-white/70 px-3 py-2 text-[12px] font-semibold text-textPrimary">
                            {cs.title}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="flex items-start gap-2">
                          <Icon name="priority_high" className="mt-[2px] text-[18px] text-textSecondary" />
                          <div className="min-w-0">
                            <div className="text-[12px] font-semibold text-textSecondary">Problem</div>
                            <div className="text-small text-textSecondary">{cs.problem}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="auto_fix_high" className="mt-[2px] text-[18px] text-green-600" />
                          <div className="min-w-0">
                            <div className="text-[12px] font-semibold text-green-700">Solution</div>
                            <div className="text-small text-textSecondary">{cs.solution}</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {cs.results?.slice(1, 3).map((r) => (
                            <div
                              key={r}
                              className="rounded-full border border-green-100 bg-white/70 px-3 py-1 text-[12px] font-medium text-textSecondary"
                            >
                              {r}
                            </div>
                          ))}
                        </div>
                        <Link
                          href={cs.href}
                          onClick={(e) => e.stopPropagation()}
                          className={cx(
                            "cta inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-green-200 bg-white/70 px-4 py-2 text-small font-semibold text-textPrimary backdrop-blur",
                            "transition-transform duration-200 ease-out hover:translate-x-1"
                          )}
                        >
                          <span>View Case Study</span>
                          <Icon name="arrow_forward" className="text-[18px]" />
                        </Link>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute bottom-4 right-4 flex items-end gap-1 opacity-70">
                      {[14, 22, 30, 18].map((h, i) => (
                        <m.div
                          key={i}
                          className="w-2 rounded bg-green-600"
                          initial={reduceMotion ? false : { height: 6, opacity: 0.6 }}
                          whileInView={reduceMotion ? undefined : { height: h, opacity: 1 }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={reduceMotion ? undefined : { duration: 0.8, ease: "easeOut", delay: 0.06 * i }}
                        />
                      ))}
                    </div>
                  </m.div>
                </m.div>
              ))}
            </m.div>

            <CaseStudyModal
              open={open}
              onClose={() => setOpen(false)}
              caseStudy={active}
            />
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

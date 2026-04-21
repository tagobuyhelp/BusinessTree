"use client";

import React, { useMemo } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Section, SectionInner } from "../ui/Section";

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

function WelcomeVisual({ reduceMotion }) {
  return (
    <div className="relative mx-auto w-full max-w-[85%] sm:max-w-md lg:max-w-none">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-35">
        <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-14 -right-10 h-64 w-64 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary" />
        </div>

        <div className="relative p-6">
          <div className="flex items-center justify-between">
            <div className="text-small font-medium text-textPrimary">Your Growth Flywheel</div>
            <div className="inline-flex items-center gap-2 text-[11px] font-medium text-textSecondary">
              <Icon name="auto_awesome" className="text-[16px]" />
              <span>Illustrated system</span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-bg p-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "travel_explore", label: "Attention" },
                { icon: "tune", label: "Conversion" },
                { icon: "verified", label: "Trust" }
              ].map((step) => (
                <div key={step.label} className="rounded-xl border border-border bg-surface p-4">
                  <div className="flex items-center gap-2">
                    <Icon name={step.icon} className="text-[18px] text-accent" />
                    <span className="text-small font-semibold text-textPrimary">{step.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface">
              <svg
                viewBox="0 0 560 180"
                className="block h-[140px] w-full"
                role="img"
                aria-label="Illustration of a growth flywheel connecting channels to measurable outcomes"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="btGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="560" height="180" rx="16" fill="url(#btGrad)" />
                <path
                  d="M40 120 C120 40, 210 160, 280 90 C350 20, 430 140, 520 55"
                  fill="none"
                  stroke="rgba(16,185,129,0.8)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {[
                  { x: 40, y: 120 },
                  { x: 160, y: 70 },
                  { x: 280, y: 90 },
                  { x: 400, y: 60 },
                  { x: 520, y: 55 }
                ].map((p, i) => (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r="10" fill="rgba(255,255,255,0.9)" />
                    <circle cx={p.x} cy={p.y} r="5" fill="rgba(59,130,246,0.9)" />
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "Visibility", value: "↑" },
                { label: "Leads", value: "3X" },
                { label: "Revenue", value: "+18%" }
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-border bg-surface p-4">
                  <div className="text-[11px] font-medium text-textSecondary">{kpi.label}</div>
                  <div className="mt-2 text-body font-semibold text-textPrimary">{kpi.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-border bg-bg p-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-medium text-textSecondary">Momentum</div>
              <div className="text-[11px] font-medium text-textSecondary">Last 6 weeks</div>
            </div>
            <div className="mt-3 grid grid-cols-12 items-end gap-1.5">
              {[7, 9, 10, 11, 12, 13, 15, 14, 17, 18, 19, 21].map((h, idx) => (
                <m.div
                  key={idx}
                  className="col-span-1 rounded-sm bg-accent"
                  style={{ height: `${h * 3}px` }}
                  initial={reduceMotion ? false : { scaleY: 0.65, opacity: 0 }}
                  whileInView={reduceMotion ? undefined : { scaleY: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={reduceMotion ? undefined : { duration: 0.45, delay: 0.12 + idx * 0.02 }}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-bg p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-tint">
                  <Icon name="hub" className="text-[20px] text-accent" />
                </div>
                <div>
                  <div className="text-small font-semibold text-textPrimary">Strategy → Execution</div>
                  <div className="mt-1 text-small text-textSecondary">A single system, not random tactics.</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-tint">
                  <Icon name="verified" className="text-[20px] text-accent" />
                </div>
                <div>
                  <div className="text-small font-semibold text-textPrimary">Trust Signals</div>
                  <div className="mt-1 text-small text-textSecondary">Consistency that compounds reputation.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WelcomeSection() {
  const reduceMotion = useReducedMotion();

  const solutions = useMemo(
    () => ["Strategy", "Execution", "Scaling", "Consistency", "Reputation", "Growth"],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="tint" className="py-8 sm:py-10">
        <SectionInner>
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <m.div
              className="space-y-6 lg:col-span-6"
              initial={reduceMotion ? false : { opacity: 0, x: -14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
            >
              <div className="max-w-xl">
                <h2 className="text-h2">
                  Welcome to Business Tree: Where Brands Grow Into{" "}
                  <span className="text-accent">Market Leaders</span>
                </h2>
              </div>

              <p className="max-w-2xl text-body text-textSecondary line-clamp-2">
                Businesses fail when execution is scattered, not because the idea is weak.
              </p>

              <p className="max-w-2xl text-body text-textSecondary line-clamp-2">
                We build systems that keep growth consistent as channels and algorithms change.
              </p>

              <m.div
                className="grid grid-cols-2 gap-3"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
                }}
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "show"}
                viewport={{ once: true, amount: 0.3 }}
              >
                {solutions.map((s) => (
                  <m.div
                    key={s}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="rounded-xl border border-border bg-surface px-4 py-3 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Icon name="check_circle" className="text-[18px] text-accent" />
                      <span className="text-small font-medium text-textPrimary">{s}</span>
                    </div>
                  </m.div>
                ))}
              </m.div>
            </m.div>

            <m.div
              className="lg:col-span-6"
              initial={reduceMotion ? false : { opacity: 0, x: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
            >
              <WelcomeVisual reduceMotion={reduceMotion} />
            </m.div>
          </div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

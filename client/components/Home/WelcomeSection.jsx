"use client";

import React, { useMemo, useState } from "react";
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
  const [activeStep, setActiveStep] = useState("Attention");

  return (
    <div className="relative mx-auto w-full max-w-[96%] sm:max-w-md lg:max-w-none">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-35">
        <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-14 -right-10 h-64 w-64 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="relative rounded-2xl bg-white/70 p-3 shadow-lg backdrop-blur-xl border border-green-100 sm:p-4">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-100/40 via-transparent to-green-200/20 pointer-events-none" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="text-small font-medium text-textPrimary">Your Growth Flywheel</div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-medium text-textSecondary sm:gap-2 sm:text-[11px]">
              <Icon name="auto_awesome" className="text-[14px] sm:text-[16px]" />
              <span>System panel</span>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-green-100 bg-white/70 p-3 shadow-sm backdrop-blur sm:mt-4 sm:p-4">
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "travel_explore", label: "Attention" },
                { icon: "tune", label: "Conversion" },
                { icon: "verified", label: "Trust" }
              ].map((step) => (
                <m.button
                  key={step.label}
                  type="button"
                  onMouseEnter={() => setActiveStep(step.label)}
                  onFocus={() => setActiveStep(step.label)}
                  onClick={() => setActiveStep(step.label)}
                  className={cx(
                    "rounded-xl border px-3 py-2.5 text-left text-[13px] transition-colors sm:p-4",
                    activeStep === step.label
                      ? "border-green-200 bg-green-50/70"
                      : "border-border bg-white/75 hover:bg-green-50/50"
                  )}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 30 }}
                  aria-pressed={activeStep === step.label}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cx(
                        "flex h-7 w-7 items-center justify-center rounded-lg border bg-white sm:h-8 sm:w-8",
                        activeStep === step.label ? "border-green-200" : "border-border"
                      )}
                    >
                      <Icon
                        name={step.icon}
                        className={cx(
                          "text-[16px] sm:text-[18px]",
                          activeStep === step.label ? "text-green-600" : "text-accent"
                        )}
                      />
                    </span>
                    <span className="text-small font-semibold text-textPrimary">{step.label}</span>
                  </div>
                </m.button>
              ))}
            </div>

            <div className="mt-3 overflow-hidden rounded-xl border border-green-100 bg-white sm:mt-3">
              <svg
                viewBox="0 0 560 180"
                className="block h-[105px] w-full sm:h-[112px]"
                role="img"
                aria-label="Illustration of a growth flywheel connecting channels to measurable outcomes"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="btGrad2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgb(34,197,94)" stopOpacity="0.18" />
                    <stop offset="60%" stopColor="rgb(34,197,94)" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0.10" />
                  </linearGradient>
                  <filter id="btGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="0 0 0 0 0.133  0 0 0 0 0.773  0 0 0 0 0.373  0 0 0 0.65 0"
                      result="greenGlow"
                    />
                    <feMerge>
                      <feMergeNode in="greenGlow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <rect x="0" y="0" width="560" height="180" rx="16" fill="url(#btGrad2)" />
                <path
                  d="M40 128 C120 34, 210 160, 280 90 C350 20, 430 140, 520 52"
                  fill="none"
                  stroke="rgba(34,197,94,0.92)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#btGlow)"
                />
                {[
                  { x: 40, y: 128, d: 0.0 },
                  { x: 160, y: 72, d: 0.08 },
                  { x: 280, y: 90, d: 0.16 },
                  { x: 400, y: 62, d: 0.24 },
                  { x: 520, y: 52, d: 0.32 }
                ].map((p, i) => (
                  <g key={i}>
                    <m.circle
                      cx={p.x}
                      cy={p.y}
                      r="10"
                      fill="rgba(255,255,255,0.92)"
                      initial={reduceMotion ? false : { opacity: 0.7 }}
                      animate={reduceMotion ? undefined : { opacity: [0.65, 1, 0.65] }}
                      transition={reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, delay: p.d }}
                    />
                    <m.circle
                      cx={p.x}
                      cy={p.y}
                      r="5"
                      fill="rgba(34,197,94,0.95)"
                      initial={reduceMotion ? false : { scale: 1 }}
                      animate={reduceMotion ? undefined : { scale: [1, 1.18, 1] }}
                      transition={reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, delay: p.d }}
                    />
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2.5 sm:mt-3 sm:gap-3">
              {[
                { label: "Visibility", value: "↑" },
                { label: "Leads", value: "3X" },
                { label: "Revenue", value: "+18%" }
              ].map((kpi) => (
                <m.div
                  key={kpi.label}
                  className="rounded-xl border border-green-100 bg-white/80 p-2.5 shadow-sm transition sm:p-3"
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 28 }}
                >
                  <div className="text-[10px] font-medium text-textSecondary sm:text-[11px]">{kpi.label}</div>
                  <div className="mt-2 text-[0.9rem] font-semibold text-textPrimary sm:text-body">
                    {kpi.value}
                  </div>
                </m.div>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-green-100 bg-white/75 p-3 shadow-sm backdrop-blur sm:mt-4 sm:p-3.5">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-medium text-textSecondary sm:text-[11px]">Momentum</div>
              <div className="text-[10px] font-medium text-textSecondary sm:text-[11px]">Last 6 weeks</div>
            </div>
            <div className="mt-3 grid grid-cols-12 items-end gap-1.5">
              {[7, 9, 10, 11, 12, 13, 15, 14, 17, 18, 19, 21].map((h, idx) => (
                <m.div
                  key={idx}
                  className="col-span-1 rounded-sm bg-gradient-to-t from-green-600 to-green-300"
                  style={{ height: `${h * 2.1}px` }}
                  initial={reduceMotion ? false : { scaleY: 0.65, opacity: 0 }}
                  whileInView={reduceMotion ? undefined : { scaleY: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={reduceMotion ? undefined : { duration: 0.45, delay: 0.12 + idx * 0.02 }}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3 sm:grid-cols-2">
            <m.div
              className="rounded-xl border border-green-100 bg-white/75 p-3.5 shadow-sm transition hover:shadow-md sm:p-4"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 30 }}
            >
              <div className="flex items-start gap-3">
                <m.div
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white sm:h-10 sm:w-10"
                  whileHover={reduceMotion ? undefined : { rotate: 4 }}
                  transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 28 }}
                >
                  <Icon name="hub" className="text-[18px] text-green-600 sm:text-[20px]" />
                </m.div>
                <div>
                  <div className="text-[13px] font-semibold text-textPrimary sm:text-small">
                    Strategy → Execution
                  </div>
                  <div className="mt-1 text-[12px] text-textSecondary sm:text-small">
                    A single system, not random tactics.
                  </div>
                </div>
              </div>
            </m.div>

            <m.div
              className="rounded-xl border border-green-100 bg-white/75 p-3.5 shadow-sm transition hover:shadow-md sm:p-4"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 30 }}
            >
              <div className="flex items-start gap-3">
                <m.div
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white sm:h-10 sm:w-10"
                  whileHover={reduceMotion ? undefined : { rotate: -4 }}
                  transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 28 }}
                >
                  <Icon name="verified" className="text-[18px] text-green-600 sm:text-[20px]" />
                </m.div>
                <div>
                  <div className="text-[13px] font-semibold text-textPrimary sm:text-small">Trust Signals</div>
                  <div className="mt-1 text-[12px] text-textSecondary sm:text-small">
                    Consistency that compounds reputation.
                  </div>
                </div>
              </div>
            </m.div>
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

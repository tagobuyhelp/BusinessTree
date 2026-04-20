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

export function OurApproachSection() {
  const reduceMotion = useReducedMotion();
  const steps = useMemo(
    () => [
      {
        title: "Strategy",
        icon: "map",
        description: "We clarify goals, offer, funnel, and success metrics."
      },
      {
        title: "Execution",
        icon: "construction",
        description: "We ship the campaigns, pages, and content that move the needle."
      },
      {
        title: "Optimization",
        icon: "tune",
        description: "We test and refine to lift conversion and efficiency."
      },
      {
        title: "Scaling",
        icon: "trending_up",
        description: "We expand what works across channels and markets."
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="tint" className="py-10 md:py-12 lg:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-h2">Our Approach</h2>
              <p className="mt-3 text-body text-textSecondary">
                A repeatable process designed to keep growth consistent and measurable.
              </p>
            </div>

            <m.div
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
              variants={
                reduceMotion
                  ? {}
                  : { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
              }
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.25 }}
            >
              {steps.map((s, idx) => (
                <m.div
                  key={s.title}
                  variants={reduceMotion ? {} : { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={s.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] font-medium text-textSecondary">
                      Step {idx + 1}
                    </div>
                  </div>
                  <div className="mt-4 text-body font-semibold text-textPrimary">{s.title}</div>
                  <div className="mt-2 text-small text-textSecondary">{s.description}</div>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}


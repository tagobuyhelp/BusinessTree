"use client";

import React from "react";
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

export function MissionVisionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="surface" className="py-10 md:py-12 lg:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-h2">Mission & Vision</h2>
              <p className="mt-3 text-body text-textSecondary">
                We keep our work simple: build systems, ship consistently, and measure what matters.
              </p>
            </div>

            <m.div
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
              variants={
                reduceMotion
                  ? {}
                  : { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
              }
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.25 }}
            >
              {[
                {
                  icon: "flag",
                  title: "Mission",
                  text: "Help businesses scale globally with smart digital systems."
                },
                {
                  icon: "public",
                  title: "Vision",
                  text: "Become a global growth partner for modern brands."
                }
              ].map((c) => (
                <m.div
                  key={c.title}
                  variants={reduceMotion ? {} : { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={c.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] font-medium text-textSecondary">
                      {c.title}
                    </div>
                  </div>
                  <div className="mt-4 text-body font-semibold text-textPrimary">{c.text}</div>
                  <div className="mt-2 text-small text-textSecondary">
                    Built around clarity, consistency, and measurable outcomes.
                  </div>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}


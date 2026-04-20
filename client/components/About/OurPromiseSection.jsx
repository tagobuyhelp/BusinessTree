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

export function OurPromiseSection() {
  const reduceMotion = useReducedMotion();
  const promises = useMemo(
    () => [
      {
        icon: "insights",
        title: "Data-driven strategies",
        text: "Decisions backed by tracking, testing, and real customer behavior."
      },
      {
        icon: "dashboard",
        title: "Transparent reporting",
        text: "Clear dashboards and updates so you always know what’s working."
      },
      {
        icon: "trending_up",
        title: "Real growth focus",
        text: "Leads, conversions, and revenue — not vanity metrics."
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
              <h2 className="text-h2">Our Promise</h2>
              <p className="mt-3 text-body text-textSecondary">
                You get clarity, consistency, and execution you can trust.
              </p>
            </div>

            <m.div
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
              variants={
                reduceMotion
                  ? {}
                  : { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
              }
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.25 }}
            >
              {promises.map((p) => (
                <m.div
                  key={p.title}
                  variants={reduceMotion ? {} : { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={p.icon} className="text-[22px] text-accent" />
                    </div>
                    <Icon name="verified" className="text-[22px] text-accent" />
                  </div>
                  <div className="mt-4 text-body font-semibold text-textPrimary">{p.title}</div>
                  <div className="mt-2 text-small text-textSecondary">{p.text}</div>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}


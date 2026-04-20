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

export function WhoWeWorkWithSection() {
  const reduceMotion = useReducedMotion();
  const audiences = useMemo(
    () => [
      { title: "Entrepreneurs", icon: "rocket_launch", detail: "Scaling with clarity and speed." },
      { title: "Startups", icon: "lightbulb", detail: "Finding traction and building pipeline." },
      { title: "SMEs", icon: "storefront", detail: "Turning steady revenue into growth." },
      { title: "Brands", icon: "workspace_premium", detail: "Building authority and demand." },
      { title: "Creators", icon: "smart_display", detail: "Growing reach and monetization." }
    ],
    []
  );

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
              <h2 className="text-h2">Who We Work With</h2>
              <p className="mt-3 text-body text-textSecondary">
                If growth is your goal, we’ll build the system behind it.
              </p>
            </div>

            <m.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
              variants={
                reduceMotion
                  ? {}
                  : { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
              }
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.25 }}
            >
              {audiences.map((a) => (
                <m.div
                  key={a.title}
                  variants={reduceMotion ? {} : { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                      <Icon name={a.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="text-body font-semibold text-textPrimary">{a.title}</div>
                  </div>
                  <div className="mt-3 text-small text-textSecondary">{a.detail}</div>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}


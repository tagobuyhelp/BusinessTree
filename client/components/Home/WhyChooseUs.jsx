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

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  const pillars = useMemo(
    () => [
      {
        icon: "construction",
        title: "Real Execution, Real Growth",
        description:
          "We don’t deliver reports — we deliver results. Every strategy is executed with measurable outcomes."
      },
      {
        icon: "public",
        title: "Global-Standard Strategy",
        description:
          "Built with international frameworks to help your business scale beyond local limits."
      },
      {
        icon: "groups",
        title: "Expert-Led Systems",
        description:
          "Work with specialists in marketing, development, and branding — not generalists."
      },
      {
        icon: "trending_up",
        title: "Revenue-Focused Approach",
        description:
          "We focus on what matters: leads, conversions, and real business growth."
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section
        id="why-us"
        tone="tint"
        className="border-y border-border bg-gradient-to-b from-tint to-surface py-8 sm:py-10"
      >
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-green-100 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
              <div className="max-w-2xl">
                <h2 className="text-h2">Why Business Tree Is Different</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We don’t just market your business — we build systems that drive real growth.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-100 bg-white/70 px-3 py-1 text-[12px] font-medium text-textSecondary">
                  <Icon name="verified" className="text-[16px] text-green-600" />
                  <span>Built on proven systems, not guesswork</span>
                </div>
              </div>
            </div>

            <m.div
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.06 } }
              }}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              {pillars.map((p) => (
                <m.div
                  key={p.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 32 }}
                >
                  <m.article
                    tabIndex={0}
                    className={cx(
                      "group relative h-full min-h-[44px] rounded-2xl border border-green-100 bg-white/80 p-5 backdrop-blur",
                      "transition-all duration-300 hover:shadow-xl sm:p-6",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    )}
                    whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                    transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 32 }}
                  >
                    <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full rounded-t-2xl bg-gradient-to-r from-green-500 to-green-300 opacity-70" />
                    <div className="pointer-events-none absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,_#22c55e,_transparent)]" />

                    <div className="relative z-10 space-y-3">
                      <m.div
                        className="inline-flex w-fit items-center justify-center rounded-xl bg-green-100 p-3 text-green-600"
                        whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 2 }}
                        transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 26 }}
                      >
                        <Icon name={p.icon} className="text-[22px]" />
                      </m.div>
                      <div className="text-body font-bold text-textPrimary transition-colors group-hover:text-green-700">
                        {p.title}
                      </div>
                      <div className="text-small leading-relaxed text-textSecondary">{p.description}</div>
                    </div>
                  </m.article>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

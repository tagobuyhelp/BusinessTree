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

export function PromiseSection() {
  const reduceMotion = useReducedMotion();

  const promises = useMemo(
    () => [
      {
        title: "Globally Tested Strategies",
        icon: "public",
        description: "Frameworks proven across markets, not experiments on your budget."
      },
      {
        title: "End-to-End Execution",
        icon: "construction",
        description: "From strategy to launch, we handle every moving part for you."
      },
      {
        title: "In-House Expert Team",
        icon: "groups",
        description: "Specialists in SEO, performance, content, and development under one roof."
      },
      {
        title: "Consistent Growth",
        icon: "trending_up",
        description: "Compounding improvements focused on revenue, not vanity metrics."
      },
      {
        title: "Monthly Performance Dashboards",
        icon: "dashboard",
        description: "Clear, visual reporting so you always know what’s working."
      },
      {
        title: "Lead Generation Systems",
        icon: "person_add",
        description: "Pipelines designed to attract, qualify, and convert the right leads."
      },
      {
        title: "Scalable Ad Strategies",
        icon: "campaign",
        description: "Paid campaigns built to scale profitably, not just spend more."
      },
      {
        title: "Website & Funnel Optimization",
        icon: "tune",
        description: "Continuous testing to turn more visitors into customers."
      },
      {
        title: "Full Business Visibility",
        icon: "insights",
        description: "Aligned goals, shared data, and transparent decisions at every step."
      }
    ],
    []
  );

  const listVariants = reduceMotion
    ? undefined
    : {
      hidden: { opacity: 0, y: 16 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.32,
          ease: "easeOut",
          staggerChildren: 0.05
        }
      }
    };

  const itemVariants = reduceMotion
    ? undefined
    : {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0 }
    };

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="tint" className="border-y border-border bg-tint py-12 sm:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-h2">Our Promise</h2>
              <p className="mt-3 text-body text-textSecondary">
                We deliver growth, not just services.
              </p>
            </div>

            <m.div
              className="grid gap-4 md:grid-cols-2"
              variants={listVariants}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.25 }}
            >
              {promises.map((p) => (
                <m.div
                  key={p.title}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface/90 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-tint">
                    <Icon name={p.icon} className="text-[20px] text-accent" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-small font-semibold text-textPrimary">{p.title}</div>
                    <div className="text-small text-textSecondary">{p.description}</div>
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

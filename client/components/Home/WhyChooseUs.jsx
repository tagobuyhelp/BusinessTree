"use client";

import React, { useMemo } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Section, SectionInner } from "../ui/Section";
import { PillarCard } from "./PillarCard";

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
        className="border-y border-border bg-gradient-to-b from-tint to-surface py-12 sm:py-16"
      >
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
              <div className="max-w-2xl border-l-4 border-l-accent pl-4">
                <h2 className="text-h2">Why Business Tree Is Different</h2>
                <p className="mt-3 text-body text-textSecondary">
                  We don’t just market your business — we build systems that drive real growth.
                </p>
              </div>
            </div>

            <m.div
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
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
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <PillarCard icon={p.icon} title={p.title} description={p.description} />
                </m.div>
              ))}
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

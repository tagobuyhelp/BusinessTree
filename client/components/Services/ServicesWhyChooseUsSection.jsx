"use client";

import React, { useMemo } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Section, SectionInner } from "../ui/Section";
import { PillarCard } from "../Home/PillarCard";

export function ServicesWhyChooseUsSection() {
  const reduceMotion = useReducedMotion();

  const pillars = useMemo(
    () => [
      {
        icon: "construction",
        title: "Execution You Can Trust",
        description: "We ship real work weekly — not just advice and decks."
      },
      {
        icon: "public",
        title: "Global-Standard Strategy",
        description: "Frameworks designed to scale beyond local market limits."
      },
      {
        icon: "groups",
        title: "Specialists, Not Generalists",
        description: "A focused team across growth, creative, and development."
      },
      {
        icon: "insights",
        title: "Measured Results",
        description: "Clear tracking, reporting, and decisions driven by data."
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="tint" className="border-y border-border bg-gradient-to-b from-tint to-surface py-10 md:py-12 lg:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-h2">Why Choose Us</h2>
              <p className="mt-3 text-body text-textSecondary">
                You get strategy, execution, and accountability — built to drive growth.
              </p>
            </div>

            <m.div
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
              variants={
                reduceMotion
                  ? {}
                  : {
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
                  }
              }
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              {pillars.map((p) => (
                <m.div
                  key={p.title}
                  variants={
                    reduceMotion
                      ? {}
                      : {
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 }
                      }
                  }
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

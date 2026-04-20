"use client";

import React from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Section, SectionInner } from "../ui/Section";

export function OurStorySection() {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="tint" className="py-10 md:py-12 lg:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-5">
              <h2 className="text-h2">Our Story</h2>
              <p className="mt-3 text-body text-textSecondary">
                Most businesses don’t struggle because they lack ambition — they struggle because growth becomes chaotic.
              </p>
            </div>

            <div className="space-y-4 lg:col-span-7">
              <p className="text-body text-textSecondary">
                We saw teams doing “everything” online — posting, running ads, building pages — yet still missing
                consistent leads and predictable revenue. The issue wasn’t effort. It was scattered execution.
              </p>
              <p className="text-body text-textSecondary">
                Business Tree was created to replace random tactics with a simple system: strategy first, fast execution,
                clear measurement, and continuous optimization.
              </p>
              <p className="text-body text-textSecondary">
                Our mission is to help modern brands scale globally by building growth systems that convert trust into
                pipeline — and pipeline into revenue.
              </p>
            </div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}


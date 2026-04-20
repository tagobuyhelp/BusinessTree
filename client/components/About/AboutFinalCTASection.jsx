"use client";

import React from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { CTAButton } from "../ui/CTAButton";
import { Section, SectionInner } from "../ui/Section";

export function AboutFinalCTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <Section className="py-0">
        <div className="relative overflow-hidden border-y border-borderOnBrand bg-gradient-to-br from-primary to-secondary">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
          </div>

          <SectionInner>
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
              className="relative py-10 pb-16 text-center md:py-14 md:pb-20"
            >
              <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                Let’s Build Your Growth System
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                Get a free strategy with clear next steps tailored to your goals.
              </p>

              <div className="mx-auto mt-8 w-full max-w-md">
                <CTAButton
                  label="Get Free Strategy"
                  fullWidth
                  className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                />
              </div>

              <div className="mt-6 text-small text-onPrimarySoft">No spam. No commitment.</div>
            </m.div>
          </SectionInner>
        </div>
      </Section>
    </LazyMotion>
  );
}


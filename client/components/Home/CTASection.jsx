"use client";

import React from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { CTAButton } from "../ui/CTAButton";
import { Section, SectionInner } from "../ui/Section";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

export function CTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <Section id="contact" className="py-0">
        <div className="relative overflow-hidden border-y border-borderOnBrand bg-gradient-to-br from-primary to-secondary">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary blur-3xl" />
          </div>

          <SectionInner>
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduceMotion ? undefined : { duration: 0.3, ease: "easeOut" }}
              className="relative py-10 pb-16 text-center sm:py-16 sm:pb-20"
            >
              <h2 className="mx-auto max-w-3xl font-heading text-[2.1rem] font-bold leading-tight text-onPrimary sm:text-h1">
                Ready to Scale Your Business Globally?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                Let’s build your growth system with strategy, execution, and results.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <m.div
                  animate={undefined}
                  transition={undefined}
                  className="w-full sm:w-auto"
                >
                  <CTAButton label="Get Free Strategy" fullWidth />
                </m.div>

                <Link
                  href="/case-studies"
                  className={cx(
                    "inline-flex min-h-[44px] w-full items-center justify-center text-small font-medium text-onPrimary border px-4 py-2 border-onPrimary rounded-md hover:text-black sm:w-auto",
                    "hover:bg-onPrimary ",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  )}
                >
                  View Case Studies
                </Link>
              </div>

              <div className="mt-6 text-small text-onPrimarySoft">
                No commitment. Free consultation. · Trusted by 100+ businesses
              </div>
            </m.div>
          </SectionInner>
        </div>
      </Section>
    </LazyMotion>
  );
}

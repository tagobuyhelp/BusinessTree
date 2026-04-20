"use client";

import React from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { CTAButton } from "../ui/CTAButton";
import { Button } from "../ui/Button";
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

export function AboutHeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <Section className="py-0">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
          </div>

          <SectionInner>
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
              className="py-10 md:py-14 lg:py-16"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
                <div className="space-y-5 lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-borderOnBrand bg-headerBg px-3 py-1 text-[13px] text-onPrimaryMuted">
                    <Icon name="verified" className="text-[18px] text-onPrimary" />
                    <span>Strategy-led growth, delivered with accountability</span>
                  </div>

                  <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                    About Business Tree
                  </h1>
                  <p className="max-w-2xl text-body text-onPrimaryMuted">
                    We help businesses grow with strategy, execution, and scalable systems.
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <CTAButton
                      label="Get Free Strategy"
                      icon="bolt"
                      fullWidth
                      className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                    />
                    <Button
                      size="lg"
                      asChild
                      className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                    >
                      <Link href="/services" className="w-full justify-center">
                        <Icon name="apps" className="text-[20px]" />
                        <span>Explore Services</span>
                      </Link>
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft">
                    <div className="inline-flex items-center gap-2">
                      <Icon name="groups" className="text-[12px] text-onPrimaryMuted" />
                      <span>Specialist-led execution</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Icon name="insights" className="text-[12px] text-onPrimaryMuted" />
                      <span>Transparent reporting</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Icon name="public" className="text-[12px] text-onPrimaryMuted" />
                      <span>Built to scale globally</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-2xl border border-borderOnBrand bg-headerBg p-5 text-onPrimary shadow-sm">
                    <div className="text-small font-semibold">What we believe</div>
                    <div className="mt-3 space-y-2 text-small text-onPrimaryMuted">
                      {[
                        "Execution beats ideas when it’s consistent.",
                        "Clarity beats complexity in every funnel.",
                        "Growth is a system you can measure."
                      ].map((t) => (
                        <div key={t} className="flex items-start gap-2">
                          <Icon name="check_circle" className="mt-0.5 text-[18px] text-onPrimary" />
                          <span className="min-w-0">{t}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-[12px] text-onPrimarySoft">No spam. No commitment.</div>
                  </div>
                </div>
              </div>
            </m.div>
          </SectionInner>
        </div>
      </Section>
    </LazyMotion>
  );
}


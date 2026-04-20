"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Button } from "../ui/Button";
import { CTAButton } from "../ui/CTAButton";
import { Section, SectionInner } from "../ui/Section";
import { HeroVisual } from "./HeroVisual";

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

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <LazyMotion features={domAnimation}>
      <Section id="home" className="py-0">
        <div ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <m.div
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent blur-3xl"
              style={{ y: reduceMotion ? 0 : blobY1 }}
            />
            <m.div
              className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary blur-3xl"
              style={{ y: reduceMotion ? 0 : blobY2 }}
            />
          </div>

          <SectionInner>
            <div className="py-8 sm:py-14">
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
                <m.div
                  className="space-y-5 sm:space-y-6 lg:col-span-7"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { duration: 0.4, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-borderOnBrand bg-headerBg px-3 py-1 text-[13px] text-onPrimaryMuted sm:text-small">
                    <Icon name="verified" className="text-[18px] text-onPrimary" />
                    <span>Premium growth for modern teams</span>
                  </div>

                  <h1 className="text-[1.9rem] font-bold leading-tight text-onPrimary sm:text-h1">
                    Grow faster with a strategy-led digital team built for{" "}
                    <span className="text-onPrimary">measurable</span> results.
                  </h1>

                  <p className="max-w-xl text-[0.98rem] leading-relaxed text-onPrimaryMuted sm:text-bodyLg">
                    We help SaaS and agencies improve acquisition, conversion, and retention through high-performance
                    web experiences and ROI-focused marketing.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <CTAButton
                      label="Get Free Strategy"
                      icon="bolt"
                      fullWidth
                      className="bg-white text-black hover:bg-secondary hover:text-onAccent active:bg-accent"
                    />
                    <Button
                      size="lg"
                      asChild
                      className="w-full border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover active:bg-headerHover"
                    >
                      <Link href="/case-studies" className="w-full justify-center">
                        <Icon name="stacked_line_chart" className="text-[20px]" />
                        <span>View Case Studies</span>
                      </Link>
                    </Button>
                  </div>

                  <div className=" flex-wrap gap-x-5 gap-y-3 text-[12px] text-onPrimarySoft sm:flex">
                    <div className="inline-flex items-center gap-2">
                      <Icon name="bolt" className="text-[12px] text-onPrimaryMuted" />
                      <span>Fast execution</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Icon name="insights" className="text-[12px] text-onPrimaryMuted" />
                      <span>Clear reporting</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Icon name="shield" className="text-[12px] text-onPrimaryMuted" />
                      <span>Conversion-first UX</span>
                    </div>
                  </div>
                </m.div>

                <m.div
                  className=" sm:block lg:col-span-5"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { duration: 0.45, ease: "easeOut", delay: 0.05 }}
                >
                  <HeroVisual parallaxY={reduceMotion ? 0 : visualY} />
                </m.div>
              </div>
            </div>
          </SectionInner>
        </div>
      </Section>
    </LazyMotion>
  );
}

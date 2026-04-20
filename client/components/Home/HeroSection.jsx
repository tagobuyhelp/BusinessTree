"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

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
      className={cx(
        "material-symbols-outlined select-none leading-none",
        className
      )}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
}

const STATS = [
  { value: "3.2×", label: "Avg. revenue lift" },
  { value: "94%", label: "Client retention" },
  { value: "18d", label: "Avg. time to launch" },
];

const TRUST_ITEMS = [
  { icon: "bolt", label: "Fast execution" },
  { icon: "insights", label: "Clear reporting" },
  { icon: "shield", label: "Conversion-first UX" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const blobY3 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <LazyMotion features={domAnimation}>
      <Section id="home" className="py-0">
        <div
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary"
        >
          {/* ── Decorative blobs ── */}
          <div className="pointer-events-none absolute inset-0">
            {/* Top-left warm blob */}
            <m.div
              className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-accent opacity-[0.12] blur-[80px]"
              style={{ y: reduceMotion ? 0 : blobY1 }}
            />
            {/* Bottom-right cool blob */}
            <m.div
              className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-secondary opacity-[0.18] blur-[90px]"
              style={{ y: reduceMotion ? 0 : blobY2 }}
            />
            {/* Center mid blob */}
            <m.div
              className="absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-primary opacity-[0.10] blur-[60px]"
              style={{ y: reduceMotion ? 0 : blobY3 }}
            />

            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <SectionInner>
            <div className="py-7 sm:py-10 md:py-16 lg:py-20">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                {/* ── Left column: copy ── */}
                <div className="space-y-4 sm:space-y-5 lg:col-span-7 lg:space-y-7">

                  {/* Badge — hidden on smallest screens to save space */}
                  <m.div {...fadeUp(0)} className="hidden sm:block">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[13px] font-medium tracking-wide text-onPrimary backdrop-blur-sm">
                      <Icon name="verified" className="text-[16px] text-accent" />
                      <span>Premium growth for modern teams</span>
                    </div>
                  </m.div>

                  {/* Headline */}
                  <m.div {...fadeUp(0.07)}>
                    <h1 className="text-[1.9rem] font-extrabold leading-[1.13] tracking-tight text-onPrimary sm:text-[2.35rem] md:text-[2.85rem] lg:text-[3.25rem]">
                      Grow faster with a{" "}
                      <span className="relative inline-block">
                        <span className="relative z-10">strategy-led</span>
                        <svg
                          className="absolute -bottom-1 left-0 w-full"
                          height="6"
                          viewBox="0 0 200 6"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M0 5 Q50 1 100 4 Q150 7 200 3"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            fill="none"
                            className="text-accent opacity-70"
                          />
                        </svg>
                      </span>{" "}
                      digital team for{" "}
                      <em className="not-italic text-accent">measurable</em> results.
                    </h1>
                  </m.div>

                  {/* Body — shorter on mobile */}
                  <m.p
                    {...fadeUp(0.13)}
                    className="text-[0.9375rem] leading-relaxed text-onPrimaryMuted sm:text-[1.0625rem] lg:max-w-[540px]"
                  >
                    <span className="sm:hidden">
                      We help SaaS and agencies improve acquisition, conversion, and retention through ROI-focused marketing.
                    </span>
                    <span className="hidden sm:inline">
                      We help SaaS companies and agencies sharpen acquisition, lift conversion, and improve retention — through high-performance web experiences and ROI-focused marketing.
                    </span>
                  </m.p>

                  {/* CTA row — stacked full-width on mobile */}
                  <m.div
                    {...fadeUp(0.18)}
                    className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
                  >
                    <CTAButton
                      label="Get Free Strategy"
                      icon="bolt"
                      fullWidth
                      className="!bg-white !text-black hover:!bg-white/90 active:!bg-white/80 !shadow-lg !shadow-black/20 sm:!w-auto"
                    />
                    <Button
                      size="lg"
                      asChild
                      className="w-full border border-white/25 bg-white/10 text-onPrimary backdrop-blur-sm hover:bg-white/20 active:bg-white/15 sm:w-auto"
                    >
                      <Link href="/case-studies" className="flex items-center justify-center gap-2">
                        <Icon name="stacked_line_chart" className="text-[20px]" />
                        <span>View Case Studies</span>
                      </Link>
                    </Button>
                  </m.div>

                  {/* Stats row — always visible, compact on mobile */}
                  <m.div
                    {...fadeUp(0.22)}
                    className="grid grid-cols-3 gap-3 border-t border-white/15 pt-4 sm:gap-4 sm:pt-6"
                  >
                    {STATS.map(({ value, label }) => (
                      <div key={label} className="space-y-0.5">
                        <div className="text-xl font-bold tracking-tight text-onPrimary sm:text-2xl md:text-3xl">
                          {value}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-onPrimaryMuted sm:text-[11px]">
                          {label}
                        </div>
                      </div>
                    ))}
                  </m.div>

                  {/* Trust pills — hidden on mobile (stats already occupy that space) */}
                  <m.div
                    {...fadeUp(0.27)}
                    className="hidden sm:flex flex-wrap gap-2"
                  >
                    {TRUST_ITEMS.map(({ icon, label }) => (
                      <div
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[12px] text-onPrimaryMuted backdrop-blur-sm"
                      >
                        <Icon name={icon} className="text-[13px] text-onPrimaryMuted" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </m.div>
                </div>

                {/* ── Right column: visual — hidden on mobile ── */}
                <m.div
                  {...fadeUp(0.1)}
                  className="hidden sm:block sm:mx-auto sm:w-full sm:max-w-md lg:col-span-5 lg:max-w-none"
                >
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-accent opacity-[0.08] blur-2xl" />
                    <m.div
                      style={{ y: reduceMotion ? 0 : visualY }}
                      className="relative z-0"
                    >
                      <HeroVisual parallaxY={reduceMotion ? 0 : visualY} />
                    </m.div>
                  </div>
                </m.div>
              </div>
            </div>
          </SectionInner>
        </div>
      </Section>
    </LazyMotion>
  );
}

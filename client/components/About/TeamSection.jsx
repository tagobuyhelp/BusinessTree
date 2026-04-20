"use client";

import React, { useMemo } from "react";
import Image from "next/image";
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

export function TeamSection() {
  const reduceMotion = useReducedMotion();
  const team = useMemo(
    () => [
      { name: "Growth Strategist", role: "Strategy & Positioning", icon: "map" },
      { name: "Performance Lead", role: "Ads & Analytics", icon: "campaign" },
      { name: "Web Specialist", role: "UX & Development", icon: "code" }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="surface" className="py-10 md:py-12 lg:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-h2">Team</h2>
              <p className="mt-3 text-body text-textSecondary">
                A specialist-led team focused on shipping results, not busywork.
              </p>
            </div>

            <m.div
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
              variants={
                reduceMotion
                  ? {}
                  : { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
              }
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.25 }}
            >
              {team.map((t) => (
                <m.div
                  key={t.name}
                  variants={reduceMotion ? {} : { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border bg-bg">
                      <Image
                        src="/images/logos/BusinessTreeLogoPng.png"
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
                      <Icon name={t.icon} className="text-[22px] text-accent" />
                    </div>
                  </div>
                  <div className="mt-4 text-body font-semibold text-textPrimary">{t.name}</div>
                  <div className="mt-2 text-small text-textSecondary">{t.role}</div>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}


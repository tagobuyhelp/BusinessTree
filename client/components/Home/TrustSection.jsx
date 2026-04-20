"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Card, CardBody } from "../ui/Card";
import { Section, SectionInner } from "../ui/Section";
import { StatsCounter } from "./StatsCounter";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

export function TrustSection() {
  const reduceMotion = useReducedMotion();

  const avatars = useMemo(
    () => [
      { src: "/images/logos/BusinessTreeLogoPng.png", alt: "Client logo 1" },
      { src: "/images/logos/BusinessTreeLogo.png", alt: "Client logo 2" },
      { src: "/images/logos/BusinessTreeLogoHorizental.png", alt: "Client logo 3" },
      { src: "/images/logos/BusinessTreeLogoHorizentalDarkBgSp.png", alt: "Client logo 4" },
      { src: "/images/logos/BusinessTreeLogoPng.png", alt: "Client logo 5" }
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: 430, suffix: "%", label: "Growth" },
      { value: 100, suffix: "+", label: "Clients" },
      { value: 3, suffix: "X", label: "ROI" },
      { value: 50, suffix: "+", label: "Projects Delivered" }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="surface" className="py-8 sm:py-10">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex items-center justify-center">
                {avatars.map((a, idx) => (
                  <m.div
                    key={`${a.src}-${idx}`}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={reduceMotion ? undefined : { duration: 0.25, delay: idx * 0.05 }}
                    className={cx(
                      "relative h-11 w-11 overflow-hidden rounded-full border-2 border-surface bg-bg",
                      idx === 0 ? "" : "-ml-3"
                    )}
                  >
                    <Image src={a.src} alt={a.alt} fill className="object-cover" sizes="44px" />
                  </m.div>
                ))}
              </div>
              <div className="text-body font-medium text-textPrimary">
                Trusted by <span className="text-accent">100+</span> growing businesses worldwide
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <m.div
                  key={s.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={reduceMotion ? undefined : { duration: 0.28, ease: "easeOut" }}
                  className="rounded-xl border border-border bg-bg p-5"
                >
                  <div className="font-body text-h3 font-bold text-textPrimary tabular-nums">
                    <StatsCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-small text-textSecondary">{s.label}</div>
                </m.div>
              ))}
            </div>

            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
              className="flex justify-center"
            >
              <Card className="w-full max-w-3xl">
                <CardBody className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border bg-bg">
                    <Image
                      src="/images/logos/BusinessTreeLogoPng.png"
                      alt="Client portrait"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                      <div className="text-small font-medium text-textPrimary">Ayesha Khan</div>
                      <div className="text-small text-textSecondary">Growth Lead · SaaS</div>
                    </div>
                    <p className="mt-3 text-body text-textSecondary">
                      Business Tree helped us scale globally within 3 months. The results were beyond expectations
                      and the execution felt premium, fast, and measurable.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

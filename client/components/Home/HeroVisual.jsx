"use client";

import React from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

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

export function HeroVisual({ parallaxY = 0 }) {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
  };

  const item = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="relative mx-auto w-full max-w-md lg:max-w-none"
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        variants={container}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
          <m.div
            className="absolute -left-14 -top-12 h-52 w-52 rounded-full bg-accent blur-3xl"
            style={{ y: reduceMotion ? 0 : parallaxY }}
          />
          <m.div
            className="absolute -bottom-16 -right-14 h-64 w-64 rounded-full bg-secondary blur-3xl"
            style={{ y: reduceMotion ? 0 : parallaxY * 1.2 }}
          />
        </div>

        <m.div
          variants={item}
          className={cx(
            "relative overflow-hidden rounded-2xl border border-borderOnBrand bg-headerBg",
            "shadow-xl"
          )}
          style={{ y: reduceMotion ? 0 : parallaxY * 0.75 }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary" />
          </div>

          <div className="relative p-5">
            <div className="flex items-center justify-between">
              <div className="text-small font-medium text-onPrimary">Growth Dashboard</div>
              <div className="inline-flex items-center gap-2 text-[11px] font-medium text-onPrimaryMuted">
                <Icon name="schedule" className="text-[16px]" />
                <span>Last 30 days</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "Traffic", value: "+430%" },
                { label: "ROI", value: "3X" },
                { label: "Leads", value: "+121%" }
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-borderOnBrand bg-primary/30 p-3">
                  <div className="text-[11px] font-medium text-onPrimarySoft">{kpi.label}</div>
                  <div className="mt-2 text-body font-semibold text-onPrimary">{kpi.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-borderOnBrand bg-primary/25 p-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-medium text-onPrimarySoft">Performance</div>
                <div className="text-[11px] font-medium text-onPrimaryMuted">Week 1–4</div>
              </div>

              <div className="mt-3 grid grid-cols-12 items-end gap-1.5">
                {[8, 10, 12, 11, 14, 16, 18, 17, 19, 22, 21, 24].map((h, idx) => (
                  <m.div
                    key={idx}
                    className="col-span-1 rounded-sm bg-accent"
                    style={{ height: `${h * 3}px` }}
                    initial={reduceMotion ? false : { scaleY: 0.6, opacity: 0 }}
                    animate={reduceMotion ? undefined : { scaleY: 1, opacity: 1 }}
                    transition={reduceMotion ? undefined : { duration: 0.5, delay: 0.2 + idx * 0.02 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </m.div>

        <m.div
          variants={item}
          className="absolute -left-4 top-10 hidden w-[210px] rounded-xl border border-borderOnBrand bg-headerBg p-4 shadow-lg sm:block"
          style={{ y: reduceMotion ? 0 : parallaxY * 1.1 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -10, 0]
                }
          }
          transition={
            reduceMotion ? undefined : { duration: 4.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
          }
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/40">
              <Icon name="trending_up" className="text-[22px] text-onPrimary" />
            </div>
            <div>
              <div className="text-small font-semibold text-onPrimary">SEO Growth</div>
              <div className="mt-1 text-small text-onPrimaryMuted">+120% in 8 weeks</div>
            </div>
          </div>
        </m.div>

        <m.div
          variants={item}
          className="absolute -right-3 bottom-10 hidden w-[220px] rounded-xl border border-borderOnBrand bg-headerBg p-4 shadow-lg sm:block"
          style={{ y: reduceMotion ? 0 : parallaxY * 1.25 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -12, 0]
                }
          }
          transition={
            reduceMotion ? undefined : { duration: 4.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
          }
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/40">
              <Icon name="leaderboard" className="text-[22px] text-onPrimary" />
            </div>
            <div>
              <div className="text-small font-semibold text-onPrimary">Leads</div>
              <div className="mt-1 text-small text-onPrimaryMuted">3X pipeline velocity</div>
            </div>
          </div>
        </m.div>

        <m.div
          variants={item}
          className="absolute left-10 bottom-2 hidden w-[200px] rounded-xl border border-borderOnBrand bg-headerBg p-4 shadow-lg md:block"
          style={{ y: reduceMotion ? 0 : parallaxY * 1.35 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -9, 0]
                }
          }
          transition={
            reduceMotion ? undefined : { duration: 5.1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
          }
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/40">
              <Icon name="payments" className="text-[22px] text-onPrimary" />
            </div>
            <div>
              <div className="text-small font-semibold text-onPrimary">Revenue</div>
              <div className="mt-1 text-small text-onPrimaryMuted">↑ compounding growth</div>
            </div>
          </div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
}

"use client";

import React from "react";
import Link from "next/link";
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

export function ServiceCard({
  href,
  icon,
  title,
  description,
  featured = false,
  badge,
  ctaLabel = "Learn more →"
}) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <Link
        href={href}
        className={cx(
          "group block h-full rounded-xl",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        )}
        aria-label={`${title}. ${ctaLabel}`}
      >
        <m.div
          className={cx(
            "relative flex h-full flex-col rounded-xl border border-border bg-surface p-6",
            featured && "ring-1 ring-accent"
          )}
          whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.99 }}
          transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 34 }}
        >
          {badge ? (
            <div className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-onAccent">
              {badge}
            </div>
          ) : null}

          <m.div
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-bg"
            whileHover={reduceMotion ? undefined : { rotate: featured ? 6 : 4, scale: 1.05 }}
            transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 26 }}
          >
            <Icon name={icon} className="text-[24px] text-accent" />
          </m.div>

          <div className="mt-4 text-body font-semibold text-textPrimary">{title}</div>
          <div className="mt-2 text-small text-textSecondary">{description}</div>

          <div className="mt-5 inline-flex items-center gap-2 text-small font-medium text-accent">
            <span>{ctaLabel}</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </div>
        </m.div>
      </Link>
    </LazyMotion>
  );
}

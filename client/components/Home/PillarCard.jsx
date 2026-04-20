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

export function PillarCard({ icon, title, description }) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        tabIndex={0}
        className={cx(
          "group relative flex min-h-[44px] h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-5",
          "border-t-4 border-t-accent",
          "shadow-sm transition-shadow",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        )}
        whileTap={reduceMotion ? undefined : { scale: 0.99 }}
        transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 32 }}
      >
        <m.div
          className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-tint"
          transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 26 }}
        >
          <Icon name={icon} className="text-[24px] text-accent" />
        </m.div>

        <div className="relative mt-4 text-body font-semibold text-textPrimary">{title}</div>
        <div className="relative mt-2 text-small leading-relaxed text-textSecondary">{description}</div>
      </m.article>
    </LazyMotion>
  );
}

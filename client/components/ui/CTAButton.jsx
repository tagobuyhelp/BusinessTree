"use client";

import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

const LeadModal = dynamic(() => import("./LeadModal").then((m) => m.LeadModal), { ssr: false });

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

export function CTAButton({
  label = "Get Free Strategy",
  icon,
  className,
  fullWidth = false,
  onLeadSubmit
}) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => setOpen(true), []);

  return (
    <LazyMotion features={domAnimation}>
      <m.button
        type="button"
        onClick={onClick}
        data-cursor="hover"
        className={cx(
          "inline-flex h-11 items-center justify-center rounded-md px-5 text-body font-semibold",
          "bg-accent text-onAccent hover:bg-secondary active:bg-accent",
          "shadow-lg ring-1 ring-accent/30 hover:ring-accent/40",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          fullWidth && "w-full",
          className
        )}
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        transition={reduceMotion ? undefined : { type: "spring", stiffness: 520, damping: 36 }}
        aria-label={label}
      >
        {icon ? <Icon name={icon} className="text-[20px]" /> : null}
        <span>{label}</span>
      </m.button>

      <LeadModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={onLeadSubmit}
      />
    </LazyMotion>
  );
}

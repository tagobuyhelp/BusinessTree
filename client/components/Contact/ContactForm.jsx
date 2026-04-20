"use client";

import React, { useCallback, useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { LeadForm } from "../ui/LeadForm";

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

export function ContactForm({ className }) {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(async () => {
    await new Promise((r) => setTimeout(r, 650));
    setSubmitted(true);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={cx(
          "rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6",
          className
        )}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.98, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
      >
        {submitted ? (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-small font-medium text-textSecondary">
              <Icon name="check_circle" className="text-[18px] text-accent" />
              <span>Request received</span>
            </div>
            <div className="text-h3">We’ll reply with next steps.</div>
            <div className="text-body text-textSecondary">
              Expect a message shortly with quick wins and a recommended growth plan.
            </div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className={cx(
                "inline-flex h-11 w-full items-center justify-center rounded-md px-4 text-body font-semibold",
                "bg-secondary text-onSecondary hover:bg-primary active:bg-secondary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              )}
            >
              Send another request
            </button>
          </div>
        ) : (
          <LeadForm onSubmit={handleSubmit} submitLabel="Get Free Strategy" />
        )}
      </m.div>
    </LazyMotion>
  );
}

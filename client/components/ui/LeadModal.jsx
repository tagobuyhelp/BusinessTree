"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { LeadForm } from "./LeadForm";

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

export function LeadModal({ open, onClose, onSubmit }) {
  const reduceMotion = useReducedMotion();
  const closeBtnRef = useRef(null);
  const lastFocusRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    lastFocusRef.current = document.activeElement;
    closeBtnRef.current?.focus?.();

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      window.removeEventListener("keydown", onKeyDown);
      lastFocusRef.current?.focus?.();
    };
  }, [onClose, open]);

  const handleSubmit = useCallback(
    async (payload) => {
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        await new Promise((r) => setTimeout(r, 650));
      }
      setSubmitted(true);
    },
    [onSubmit]
  );

  const content = (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {open ? (
          <m.div
            className="fixed inset-0 z-[96]"
            role="dialog"
            aria-modal="true"
            aria-label="Lead capture"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.18 }}
          >
            <m.div
              className="absolute inset-0 bg-overlay backdrop-blur-sm"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose?.();
              }}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.18 }}
            />

            <div className="relative flex h-full w-full items-stretch justify-center p-0 sm:items-center sm:p-6">
              <m.div
                className={cx(
                  "relative h-full w-full border border-border bg-surface shadow-2xl",
                  "sm:h-auto sm:max-h-[92vh] sm:max-w-lg sm:rounded-3xl",
                  "overflow-hidden"
                )}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: 18 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97, y: 12 }}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
              >
                <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                  <div className="min-w-0">
                    <div className="text-h3">Let’s Grow Your Business</div>
                    <div className="mt-2 text-small text-textSecondary">
                      No spam. No commitment. Free strategy call.
                    </div>
                  </div>
                  <button
                    ref={closeBtnRef}
                    type="button"
                    onClick={onClose}
                    className={cx(
                      "inline-flex h-11 w-11 items-center justify-center rounded-md",
                      "border border-border bg-surface text-textPrimary hover:bg-bg",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    )}
                    aria-label="Close"
                  >
                    <Icon name="close" className="text-[22px]" />
                  </button>
                </div>

                <div className="max-h-[calc(92vh-84px)] overflow-y-auto px-5 py-5 sm:px-6">
                  {submitted ? (
                    <div className="space-y-4">
                      <div className="text-body font-semibold text-textPrimary">Request received.</div>
                      <div className="text-body text-textSecondary">
                        We’ll reach out shortly with next steps for your free strategy.
                      </div>
                      <button
                        type="button"
                        onClick={onClose}
                        className={cx(
                          "inline-flex h-11 w-full items-center justify-center rounded-md px-4 text-body font-semibold",
                          "bg-secondary text-onSecondary hover:bg-primary active:bg-secondary",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                        )}
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <LeadForm onSubmit={handleSubmit} />
                  )}
                </div>
              </m.div>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </LazyMotion>
  );

  if (typeof document === "undefined") return null;
  return createPortal(content, document.body);
}

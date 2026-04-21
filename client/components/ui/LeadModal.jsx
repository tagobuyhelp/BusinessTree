"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      setSubmitted(false);
    }
    if (!open) return;
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
                  "relative h-full w-full border border-border bg-white shadow-2xl",
                  "sm:h-auto sm:max-h-[92vh] sm:max-w-5xl sm:rounded-3xl",
                  "overflow-hidden"
                )}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: 18 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97, y: 12 }}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
              >
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={onClose}
                  className={cx(
                    "absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-xl",
                    "border border-border bg-white text-textPrimary shadow-sm hover:bg-bg",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  )}
                  aria-label="Close"
                >
                  <Icon name="close" className="text-[22px]" />
                </button>

                <div className="grid h-full grid-cols-1 md:grid-cols-2">
                  <div className="flex min-h-0 flex-col px-6 py-6 md:px-8 md:py-8">
                    <div className="max-w-md">
                      <div className="text-[2rem] font-extrabold leading-[1.05] text-textPrimary" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Let’s Grow Your Business
                      </div>
                      <div className="mt-2 text-small text-textSecondary">
                        No spam. No commitment. Free strategy call.
                      </div>
                      <div className="mt-4 h-[3px] w-14 rounded-full bg-[#2fbe57]" aria-hidden="true" />
                    </div>

                    <div className="mt-6 min-h-0 flex-1 overflow-y-auto pr-1">
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
                              "inline-flex h-12 w-full items-center justify-center rounded-xl px-4 text-body font-semibold",
                              "bg-[#2fbe57] text-white hover:bg-[#28a94d] active:bg-[#28a94d]",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                            )}
                          >
                            Close
                          </button>
                        </div>
                      ) : (
                        <LeadForm onSubmit={handleSubmit} />
                      )}
                    </div>
                  </div>

                  <div className="relative hidden min-h-0 overflow-hidden md:block">
                    <Image
                      src="/images/CTA/ctawomen.png"
                      alt="Business strategy session"
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 768px) 560px, 0px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/35" />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />

                    <div className="absolute bottom-6 right-6 w-[320px] rounded-2xl border border-white/15 bg-black/35 p-5 text-white shadow-2xl shadow-black/40 backdrop-blur">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2fbe57]/20 text-[#86efac]">
                          <span className="material-symbols-outlined select-none text-[22px] leading-none" aria-hidden="true">
                            bar_chart
                          </span>
                        </div>
                        <div className="text-small font-semibold text-white/90">
                          Growth is better with the right strategy.
                        </div>
                      </div>
                      <div className="mt-3 text-body font-semibold text-[#86efac]">Let’s build yours.</div>
                      <div className="mt-3 h-[2px] w-16 rounded-full bg-[#2fbe57]" aria-hidden="true" />
                    </div>
                  </div>
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

"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";

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

export function CaseStudyModal({ open, onClose, caseStudy }) {
    const reduceMotion = useReducedMotion();
    const closeBtnRef = useRef(null);
    const lastFocusRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        lastFocusRef.current = document.activeElement;
        closeBtnRef.current?.focus?.();

        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        window.addEventListener("keydown", onKeyDown);
        const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
            lastFocusRef.current?.focus?.();
        };
    }, [onClose, open]);

    const title = caseStudy?.title || caseStudy?.industry || "Case Study";
    const industry = caseStudy?.industry;
    const problem = caseStudy?.problemLong || caseStudy?.problem;
    const strategyPoints = caseStudy?.strategyPoints || [];
    const executionPoints = caseStudy?.executionPoints || [];
    const solutionPoints = caseStudy?.solutionPoints || (caseStudy?.solution ? [caseStudy.solution] : []);
    const results = caseStudy?.results || [];

    const content = (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>
                {open ? (
                    <m.div
                        className="fixed inset-0 z-[95]"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Case study: ${title}`}
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

                        <div className="relative flex h-full w-full items-end justify-center p-0 sm:items-center sm:p-6">
                            <m.div
                                className={cx(
                                    "relative w-full rounded-t-3xl border border-border bg-surface shadow-2xl",
                                    "max-h-[92vh] overflow-hidden",
                                    "sm:max-w-3xl sm:rounded-3xl"
                                )}
                                initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: 18 }}
                                animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97, y: 12 }}
                                transition={
                                    reduceMotion
                                        ? { duration: 0 }
                                        : { type: "spring", stiffness: 420, damping: 36 }
                                }
                            >
                                <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                                    <div className="min-w-0">
                                        {industry ? (
                                            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-[11px] font-medium text-textSecondary">
                                                <Icon name="label" className="text-[16px]" />
                                                <span>{industry}</span>
                                            </div>
                                        ) : null}
                                        <div className="mt-3 text-h3">{title}</div>
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
                                        aria-label="Close modal"
                                    >
                                        <Icon name="close" className="text-[22px]" />
                                    </button>
                                </div>

                                <div className="max-h-[calc(92vh-160px)] overflow-y-auto px-5 py-5 sm:px-6">
                                    <div className="grid gap-6 md:grid-cols-12">
                                        <div className="space-y-6 md:col-span-7">
                                            <div>
                                                <div className="text-[11px] font-medium text-textSecondary">Problem</div>
                                                <p className="mt-2 text-body text-textSecondary">{problem}</p>
                                            </div>

                                            {strategyPoints.length > 0 ? (
                                                <div>
                                                    <div className="text-[11px] font-medium text-textSecondary">Strategy</div>
                                                    <ul className="mt-3 space-y-2">
                                                        {strategyPoints.map((p) => (
                                                            <li key={p} className="flex items-start gap-2 text-small text-textSecondary">
                                                                <Icon name="check_circle" className="mt-0.5 text-[18px] text-accent" />
                                                                <span>{p}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : null}

                                            {executionPoints.length > 0 ? (
                                                <div>
                                                    <div className="text-[11px] font-medium text-textSecondary">Execution</div>
                                                    <ul className="mt-3 space-y-2">
                                                        {executionPoints.map((p) => (
                                                            <li key={p} className="flex items-start gap-2 text-small text-textSecondary">
                                                                <Icon name="check_circle" className="mt-0.5 text-[18px] text-accent" />
                                                                <span>{p}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className="text-[11px] font-medium text-textSecondary">Strategy & Execution</div>
                                                    <ul className="mt-3 space-y-2">
                                                        {solutionPoints.map((p) => (
                                                            <li key={p} className="flex items-start gap-2 text-small text-textSecondary">
                                                                <Icon name="check_circle" className="mt-0.5 text-[18px] text-accent" />
                                                                <span>{p}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        <div className="md:col-span-5 md:border-l md:border-border md:pl-6">
                                            <div className="text-[11px] font-medium text-textSecondary">Results</div>
                                            <div className="mt-4 grid gap-3">
                                                {results.map((r) => (
                                                    <div key={r} className="rounded-xl border border-border bg-bg p-4">
                                                        <div className="flex items-start justify-between gap-3">
                                                            <div className="font-body tabular-nums text-h3 font-bold leading-none text-secondary">{r}</div>
                                                            <Icon name="auto_awesome" className="mt-0.5 text-[18px] text-accent" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {caseStudy?.chart ? (
                                                <div className="mt-5 rounded-xl border border-border bg-bg p-4">
                                                    {caseStudy.chart}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-border bg-surface px-5 py-4 sm:px-6">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="text-small text-textSecondary">No commitment. Free consultation.</div>
                                        <Button asChild>
                                            <Link href="/contact" className="w-full justify-center sm:w-auto">
                                                Start Your Growth Journey
                                            </Link>
                                        </Button>
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

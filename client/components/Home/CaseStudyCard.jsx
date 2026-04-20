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

function splitResult(text) {
  const valueMatch = text.match(/([+-]?\d+(?:\.\d+)?%?|[+-]?\d+(?:\.\d+)?x)/i);
  if (valueMatch) {
    const value = valueMatch[0].toUpperCase();
    const label = text.replace(valueMatch[0], "").replace(/^[-–—:\s]+/, "").trim();
    return { value, label: label || "Result" };
  }
  const numberMatch = text.match(/\d+/);
  if (numberMatch) {
    const value = numberMatch[0];
    const label = text.replace(numberMatch[0], "").replace(/^[-–—:\s]+/, "").trim();
    return { value, label: label || "Result" };
  }
  return { value: text, label: "" };
}

function hashString(input) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function barsFromSeed(seed) {
  const bars = [];
  let x = seed || 1;
  for (let i = 0; i < 12; i += 1) {
    x = (x * 1664525 + 1013904223) >>> 0;
    const t = (x % 1000) / 1000;
    bars.push(0.25 + t * 0.75);
  }
  return bars;
}

export function CaseStudyCard({
  href,
  industry,
  title,
  problem,
  solution,
  results,
  variant = "split",
  onOpen
}) {
  const reduceMotion = useReducedMotion();
  const { value: heroValue, label: heroLabel } = splitResult(results?.[0] || "");
  const bars = barsFromSeed(hashString(`${href}-${industry}`));

  return (
    <LazyMotion features={domAnimation}>
      <Link
        href={href}
        onClick={(e) => {
          if (!onOpen) return;
          if (e.defaultPrevented) return;
          if (e.button !== 0) return;
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          e.preventDefault();
          onOpen?.();
        }}
        className={cx(
          "group block h-full rounded-xl",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        )}
        aria-label={`Case study: ${title || industry}`}
      >
        <m.article
          className={cx(
            "relative flex h-full flex-col rounded-xl border border-border bg-surface",
            "shadow-sm transition-shadow hover:shadow-lg",
            variant === "compact" ? "p-5" : "p-6"
          )}
          whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
          transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 34 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-[11px] font-medium text-textSecondary">
              <Icon name="label" className="text-[16px] text-textSecondary" />
              <span>{industry}</span>
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] font-medium text-accent">
              <span>View</span>
              <Icon name="arrow_forward" className="text-[16px]" />
            </div>
          </div>

          {variant === "compact" ? (
            <div className="mt-4 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-body tabular-nums text-[2.15rem] font-bold leading-none text-secondary">
                    {heroValue}
                  </div>
                  <div className="mt-2 text-[11px] font-medium text-textSecondary line-clamp-1">
                    {heroLabel || "Result"}
                  </div>
                </div>

                <div className="mt-1 flex h-12 items-end gap-1.5">
                  {bars.slice(0, 10).map((v, idx) => (
                    <span
                      key={idx}
                      className={cx(
                        "w-1.5 rounded-sm",
                        idx > 7 ? "bg-accent" : "bg-secondary/70"
                      )}
                      style={{ height: `${Math.round(v * 44)}px` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-[11px] font-medium text-textSecondary">Problem</div>
                  <div className="text-small font-medium text-textPrimary line-clamp-1">{problem}</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-[11px] font-medium text-textSecondary">Solution</div>
                  <div className="text-small text-textSecondary line-clamp-1">{solution}</div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <div className="h-px w-full bg-border" />
                <div className="mt-3 inline-flex items-center gap-2 text-small font-medium text-accent">
                  <span>View Full Case Study</span>
                  <Icon name="north_east" className="text-[18px]" />
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-start">
              <div className="space-y-4 md:col-span-7">
                <div>
                  <div className="text-[11px] font-medium text-textSecondary">Problem</div>
                  <div className="mt-1 text-small font-medium text-textPrimary">{problem}</div>
                </div>

                <div>
                  <div className="text-[11px] font-medium text-textSecondary">Solution</div>
                  <div className="mt-1 text-small text-textSecondary">{solution}</div>
                </div>

                <div className="inline-flex items-center gap-2 text-small font-medium text-accent">
                  <span>View Full Case Study</span>
                  <Icon name="north_east" className="text-[18px]" />
                </div>
              </div>

              <div className="md:col-span-5 md:border-l md:border-border md:pl-6">
                <div className="text-[11px] font-medium text-textSecondary">Results</div>
                <div className="mt-3 grid gap-3">
                  {results.map((r) => {
                    const { value, label } = splitResult(r);
                    return (
                      <div key={r} className="rounded-lg border border-border bg-bg p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="font-body tabular-nums text-h3 font-bold leading-none text-secondary">
                            {value}
                          </div>
                          <Icon name="check_circle" className="mt-0.5 text-[18px] text-accent" />
                        </div>
                        {label ? (
                          <div className="mt-2 text-[11px] font-medium text-textSecondary">{label}</div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </m.article>
      </Link>
    </LazyMotion>
  );
}

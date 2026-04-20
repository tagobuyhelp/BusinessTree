"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { ServiceCard } from "./ServiceCard";

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

export function CategoryBlock({ title, description, icon, items, services, ctaHref, ctaLabel = "Explore →" }) {
  const reduceMotion = useReducedMotion();

  const gridClass = useMemo(() => {
    const count = services?.length || 0;
    if (count >= 4) return "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4";
    if (count === 3) return "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3";
    return "grid grid-cols-1 gap-4 md:grid-cols-2";
  }, [services]);

  const isList = Array.isArray(items) && items.length > 0;
  const hasServices = Array.isArray(services) && services.length > 0;
  const descBlocks = Array.isArray(description) ? description : [description].filter(Boolean);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={reduceMotion ? undefined : { duration: 0.3, ease: "easeOut" }}
        className="space-y-3"
      >
        <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
          <div className="flex items-start gap-4">
            {icon ? (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-tint">
                <Icon name={icon} className="text-[22px] text-accent" />
              </div>
            ) : null}
            <div className="min-w-0">
              <div className="text-body font-semibold text-textPrimary">{title}</div>
              {descBlocks.map((text, idx) => (
                <div key={`${title}-${idx}`} className={cx("text-small text-textSecondary", idx === 0 ? "mt-2" : "mt-2")}>
                  {text}
                </div>
              ))}
              {ctaHref ? (
                <div className="mt-4">
                  <Link
                    href={ctaHref}
                    className="inline-flex min-h-[44px] items-center gap-2 text-small font-medium text-accent"
                  >
                    <span>{ctaLabel}</span>
                    <Icon name="arrow_forward" className="text-[18px]" />
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {isList ? (
          <m.div
            className="grid grid-cols-1 gap-2 md:grid-cols-2"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.04 } }
            }}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            {items.map((label) => (
              <m.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  show: { opacity: 1, y: 0 }
                }}
                className="rounded-xl border border-border bg-bg px-4 py-3"
              >
                <div className="flex items-start gap-2">
                  <Icon name="check_circle" className="mt-0.5 text-[18px] text-accent" />
                  <div className="text-small font-medium text-textPrimary">{label}</div>
                </div>
              </m.div>
            ))}
          </m.div>
        ) : hasServices ? (
          <m.div
            className={gridClass}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.06 } }
            }}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            {(services || []).map((s) => (
              <m.div
                key={s.href}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 }
                }}
                className="h-full"
              >
                <ServiceCard
                  href={s.href}
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  featured={s.featured}
                  badge={s.badge}
                  ctaLabel={s.ctaLabel}
                  compact
                />
              </m.div>
            ))}
          </m.div>
        ) : null}
      </m.div>
    </LazyMotion>
  );
}

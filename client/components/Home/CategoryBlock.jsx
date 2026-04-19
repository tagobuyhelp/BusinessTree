"use client";

import React, { useMemo } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { ServiceCard } from "./ServiceCard";

export function CategoryBlock({ title, description, services }) {
  const reduceMotion = useReducedMotion();

  const gridClass = useMemo(() => {
    const count = services?.length || 0;
    if (count >= 4) return "grid gap-4 sm:grid-cols-2 lg:grid-cols-4";
    if (count === 3) return "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";
    return "grid gap-4 sm:grid-cols-2";
  }, [services]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={reduceMotion ? undefined : { duration: 0.3, ease: "easeOut" }}
        className="space-y-4"
      >
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <div className="text-body font-semibold text-textPrimary">{title}</div>
          <div className="mt-2 text-small text-textSecondary">{description}</div>
        </div>

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
          {services.map((s) => (
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
              />
            </m.div>
          ))}
        </m.div>
      </m.div>
    </LazyMotion>
  );
}

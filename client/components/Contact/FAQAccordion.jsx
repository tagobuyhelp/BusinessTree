"use client";

import React, { useCallback, useMemo, useState } from "react";
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

export function FAQAccordion({ items }) {
  const reduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState(items?.[0]?.id || null);

  const normalized = useMemo(() => {
    const src = Array.isArray(items) ? items : [];
    return src.map((it, idx) => ({
      id: it.id || `${idx}`,
      question: it.question,
      answer: it.answer
    }));
  }, [items]);

  const toggle = useCallback((id) => {
    setOpenId((v) => (v === id ? null : id));
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="space-y-3">
        {normalized.map((item) => {
          const expanded = openId === item.id;
          return (
            <div key={item.id} className="overflow-hidden rounded-xl border border-border bg-surface">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className={cx(
                  "flex min-h-[44px] w-full items-center justify-between gap-4 px-4 py-3 text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                )}
                aria-expanded={expanded ? "true" : "false"}
                aria-controls={`faq-${item.id}`}
              >
                <span className="text-body font-semibold text-textPrimary">{item.question}</span>
                <Icon
                  name={expanded ? "remove" : "add"}
                  className="text-[22px] text-textSecondary"
                  aria-hidden="true"
                />
              </button>

              <m.div
                id={`faq-${item.id}`}
                initial={false}
                animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 text-body text-textSecondary">{item.answer}</div>
              </m.div>
            </div>
          );
        })}
      </div>
    </LazyMotion>
  );
}

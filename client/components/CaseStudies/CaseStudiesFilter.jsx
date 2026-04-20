"use client";

import React, { useMemo } from "react";

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

export function CaseStudiesFilter({ value, onChange }) {
  const options = useMemo(
    () => [
      { value: "all", label: "All", icon: "apps" },
      { value: "seo", label: "SEO", icon: "travel_explore" },
      { value: "ads", label: "Ads", icon: "campaign" },
      { value: "web", label: "Web Dev", icon: "code" },
      { value: "branding", label: "Branding", icon: "workspace_premium" }
    ],
    []
  );

  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
      {options.map((o) => {
        const active = (value || "all") === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange?.(o.value)}
            className={cx(
              "inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-small font-medium",
              "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
              active
                ? "border-accent bg-accent/10 text-textPrimary"
                : "border-border bg-surface text-textSecondary hover:bg-bg"
            )}
            aria-pressed={active ? "true" : "false"}
          >
            <Icon name={o.icon} className={cx("text-[18px]", active ? "text-accent" : "text-textSecondary")} />
            <span>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

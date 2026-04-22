import React from "react";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

export function Section({ as: As = "section", tone = "default", className, ...props }) {
  const toneClass =
    tone === "surface"
      ? "bg-surface"
      : tone === "tint"
        ? "bg-tint"
        : "bg-bg";

  return (
    <As className={cx("w-full", toneClass, className)} {...props} />
  );
}

export function SectionInner({ className, ...props }) {
  return (
    <div
      className={cx("mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

import React from "react";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

export function Card({ className, ...props }) {
  return (
    <div
      className={cx(
        "rounded-xl border border-border bg-surface text-textPrimary shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={cx("p-6 pb-3", className)} {...props} />;
}

export function CardBody({ className, ...props }) {
  return <div className={cx("p-6 pt-0", className)} {...props} />;
}

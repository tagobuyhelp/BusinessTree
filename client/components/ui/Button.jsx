"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

const VARIANT_STYLES = {
  primary: "bg-primary text-onPrimary hover:bg-secondary active:bg-primary",
  secondary: "border border-border bg-surface text-textPrimary hover:bg-bg active:bg-surface",
  ghost: "bg-transparent text-textPrimary hover:bg-bg active:bg-surface"
};

export function Button({
  variant = "primary",
  size = "md",
  asChild = false,
  className,
  type = "button",
  children,
  ...props
}) {
  const reduceMotion = useReducedMotion();

  const sizeStyles =
    size === "sm"
      ? "h-9 px-3 text-small"
      : size === "lg"
        ? "h-11 px-5 text-body"
        : "h-10 px-4 text-small";

  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium",
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    "disabled:pointer-events-none disabled:opacity-60 disabled:hover:bg-transparent",
    sizeStyles,
    VARIANT_STYLES[variant] || VARIANT_STYLES.primary,
    className
  );

  if (asChild && React.isValidElement(children)) {
    return (
      <motion.span
        className="inline-flex"
        whileHover={reduceMotion ? undefined : { scale: 1.03 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        transition={reduceMotion ? undefined : { type: "spring", stiffness: 520, damping: 36 }}
      >
        {React.cloneElement(children, {
          className: cx(classes, children.props?.className)
        })}
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={reduceMotion ? undefined : { type: "spring", stiffness: 520, damping: 36 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
